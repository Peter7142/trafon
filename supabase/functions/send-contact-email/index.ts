import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface Payload {
  id?: string;
  name: string;
  contact: string;
  message: string;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = (await req.json()) as Payload;
    if (!body?.name || !body?.contact || !body?.message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!RESEND_API_KEY || !LOVABLE_API_KEY) {
      console.log("Email skipped — missing API keys. Submission stored in DB.");
      return new Response(JSON.stringify({ ok: true, emailed: false }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const name = escapeHtml(body.name);
    const contact = escapeHtml(body.contact);
    const message = escapeHtml(body.message).replace(/\n/g, "<br />");

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #14315c, #1e4a8a); color: #fff; padding: 20px 24px; border-radius: 12px 12px 0 0;">
          <h1 style="margin:0;font-size:22px;">Nový dopyt z TRAFON.sk</h1>
        </div>
        <div style="border:1px solid #e5e7eb; border-top:none; padding:24px; border-radius:0 0 12px 12px;">
          <p><strong>Meno:</strong> ${name}</p>
          <p><strong>Kontakt:</strong> ${contact}</p>
          <p><strong>Správa:</strong></p>
          <div style="background:#f7f8fa; padding:14px; border-radius:8px; color:#1f2937;">${message}</div>
          <p style="color:#6b7280;font-size:12px;margin-top:20px;">Foton Energy s.r.o. — automatická notifikácia z webu.</p>
        </div>
      </div>
    `;

    const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "TRAFON <onboarding@resend.dev>",
        to: ["peter.suraba@gmail.com"],
        reply_to: body.contact.includes("@") ? body.contact : undefined,
        subject: `Nový dopyt z TRAFON.sk — ${body.name}`,
        html,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Resend error:", data);
      return new Response(JSON.stringify({ ok: false, error: data }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true, emailed: true, id: data?.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("send-contact-email error", e);
    return new Response(JSON.stringify({ ok: false, error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

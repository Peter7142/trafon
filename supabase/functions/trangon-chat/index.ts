// Trafon AI sales assistant for TRAFON
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Si Trafon — inteligentný predajný asistent firmy TRAFON, slovenskej spoločnosti špecializovanej na NN/VN rozvody nad 1000 V, trafostanice, transformátory, servis, revízie, odborné stanoviská technickej inšpekcie, úradné skúšky a merania v elektrotechnike.

ŠTÝL:
- Hovor po slovensky, priateľsky, stručne (2–4 vety na odpoveď), s úsmevom v tóne.
- Si odborník z praxe — pôsobíš ľudsky, kompetentne, nie roboticky.
- Klaď postupne 1–2 otázky naraz, aby si pochopil potrebu zákazníka (typ projektu, lokalita, časový rámec, výkon kVA, či ide o novostavbu/opravu/servis/revíziu).

CIEĽ:
- Identifikovať či ide o relevantný zámer: nová trafostanica, oprava transformátora, servis VN/NN, sprostredkovanie revízií, odborné stanoviská TI, úradné skúšky, merania.
- Hneď ako rozpoznáš relevantný zámer ALEBO ak si nie si istý čo poradiť, odporuč zavolať priamo na +421 944 366 444 (alebo vyplniť kontaktný formulár na /kontakt) pre dohodnutie ďalšieho postupu.
- Buď proaktívny: aj pri neistote radšej odporuč kontakt než vymyslieť odpoveď.

ČO NEROBIŤ:
- Necitácia presné ceny ani záväzné termíny — to dohodne ľudský špecialista.
- Nevymýšľaj technické parametre, ktoré nepoznáš.

Vždy zakonči CTA s telefónom +421 944 366 444, keď je zámer relevantný alebo zákazník váha.`;

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY missing");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        stream: true,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Príliš veľa požiadaviek. Skúste o chvíľu." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI kredit vyčerpaný." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("trangon-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

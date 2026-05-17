import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Zadajte prosím vaše meno").max(100),
  contact: z.string().trim().min(5, "Zadajte telefón alebo email").max(200),
  message: z.string().trim().min(5, "Stručne opíšte váš dopyt").max(2000),
});

type FormValues = z.infer<typeof schema>;

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    try {
      const { data: inserted, error } = await supabase
        .from("contact_submissions")
        .insert(values)
        .select("id")
        .single();
      if (error) throw error;

      // Fire-and-forget email notification
      supabase.functions
        .invoke("send-contact-email", {
          body: { id: inserted?.id, ...values },
        })
        .catch(() => {
          /* dopyt je uložený v DB, email je len bonus */
        });

      setSubmitted(true);
      reset();
      toast.success("Ďakujeme! Váš dopyt sme prijali.");
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Skúste to prosím znova.";
      toast.error("Niečo sa pokazilo: " + msg);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-4 animate-float-up">
        <CheckCircle2 className="h-16 w-16 text-accent mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-primary mb-2">
          Ďakujeme za dôveru!
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Váš dopyt sme prijali a ozveme sa vám do 24 hodín s prvou bezplatnou
          konzultáciou. Pripravíme pre vás riešenie bez starostí.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Poslať ďalší dopyt
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="name">Vaše meno *</Label>
        <Input id="name" {...register("name")} placeholder="Ján Novák" className="mt-1.5" />
        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="contact">Kontakt (telefón alebo email) *</Label>
        <Input
          id="contact"
          {...register("contact")}
          placeholder="+421 9XX XXX XXX alebo vas@email.sk"
          className="mt-1.5"
        />
        {errors.contact && (
          <p className="text-destructive text-sm mt-1">{errors.contact.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">O čo máte presne záujem? *</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Napríklad: Potrebujeme novú trafostanicu 630 kVA pre výrobnú halu v Trnave..."
          rows={5}
          className="mt-1.5"
        />
        {errors.message && (
          <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-warm text-accent-foreground hover:opacity-90 shadow-glow h-12 text-base"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Odosielam…
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Odoslať nezáväzný dopyt
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Odoslaním súhlasíte so spracovaním údajov za účelom vybavenia dopytu.
        Vaše údaje sú v bezpečí a nikdy ich neposielame tretím stranám.
      </p>
    </form>
  );
};

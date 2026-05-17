import { SEO } from "@/components/site/SEO";
import { ContactForm } from "@/components/site/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Building } from "lucide-react";

const Kontakt = () => {
  return (
    <>
      <SEO
        title="Kontakt — Foton Energy s.r.o. Nitra"
        description="Kontaktujte nás telefonicky, emailom alebo cez formulár. Odpovieme do 24 hodín. Foton Energy s.r.o., Nitra, Golianovská 420/61."
        path="/kontakt"
      />

      <section className="bg-gradient-trust text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-pulse-soft opacity-60" />
        <div className="container-page relative">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Ozvite sa nám
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Prvá konzultácia je vždy zdarma. Odpovedáme do 24 hodín — bez záväzku, bez stresu.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-3">
            <Card className="shadow-elegant border-border/60">
              <CardContent className="p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-primary mb-2">
                  Nezáväzný dopyt
                </h2>
                <p className="text-muted-foreground mb-6">
                  Vyplňte tri polia — ozveme sa vám čo najskôr.
                </p>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              { i: Building, t: "Foton Energy s.r.o.", d: "TRAFON — trafostanice na kľúč" },
              { i: MapPin, t: "Adresa", d: "Golianovská 420/61\n949 07 Nitra, Slovensko" },
              { i: Phone, t: "Telefón", d: "+421 944 366 444", href: "tel:+421944366444" },
              { i: Mail, t: "Email", d: "info@fotonenergy.sk", href: "mailto:info@fotonenergy.sk" },
              { i: Clock, t: "Otváracie hodiny", d: "Po – Pi: 08:00 – 17:00\nSo: 09:00 – 16:00" },
            ].map((c) => (
              <Card key={c.t} className="border-border/60 hover:border-accent/50 transition-colors">
                <CardContent className="p-5 flex gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gradient-warm flex items-center justify-center shrink-0">
                    <c.i className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{c.t}</div>
                    {c.href ? (
                      <a href={c.href} className="text-foreground/80 hover:text-accent whitespace-pre-line">
                        {c.d}
                      </a>
                    ) : (
                      <div className="text-foreground/80 whitespace-pre-line">{c.d}</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;

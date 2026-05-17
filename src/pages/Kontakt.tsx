import { SEO } from "@/components/site/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Building, ArrowRight } from "lucide-react";

const Kontakt = () => {
  return (
    <>
      <SEO
        title="Kontakt — Foton Energy s.r.o. Nitra | TRAFON trafostanice"
        description="Kontaktujte nás priamo telefonicky alebo emailom. Odpovedáme do 24 hodín. Foton Energy s.r.o., Nitra, Golianovská 420/61."
        path="/kontakt"
      />

      <section className="bg-gradient-trust text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-pulse-soft opacity-60" />
        <div className="container-page relative">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Ozvite sa nám priamo
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Žiadne formuláre, žiadne čakanie. Zavolajte alebo napíšte —
            prvá konzultácia je vždy zdarma a bez záväzku.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="shadow-elegant border-border/60 hover:border-accent/60 transition-all hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-warm flex items-center justify-center mx-auto mb-5">
                <Phone className="h-8 w-8 text-accent-foreground" />
              </div>
              <h2 className="font-display text-xl font-bold text-primary mb-2">
                Zavolajte nám
              </h2>
              <a
                href="tel:+421944366444"
                className="text-2xl md:text-3xl font-bold text-accent block mb-4"
              >
                +421 944 366 444
              </a>
              <p className="text-sm text-muted-foreground mb-5">
                Po – Pi: 08:00 – 17:00<br />So: 09:00 – 16:00
              </p>
              <Button asChild className="bg-gradient-warm text-accent-foreground hover:opacity-90 w-full">
                <a href="tel:+421944366444">
                  Zavolať teraz <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-border/60 hover:border-accent/60 transition-all hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-warm flex items-center justify-center mx-auto mb-5">
                <Mail className="h-8 w-8 text-accent-foreground" />
              </div>
              <h2 className="font-display text-xl font-bold text-primary mb-2">
                Napíšte email
              </h2>
              <a
                href="mailto:info@fotonenergy.sk"
                className="text-xl md:text-2xl font-bold text-accent block mb-4 break-all"
              >
                info@fotonenergy.sk
              </a>
              <p className="text-sm text-muted-foreground mb-5">
                Odpovedáme zvyčajne do 24 hodín, často aj rýchlejšie.
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href="mailto:info@fotonenergy.sk">
                  Poslať email <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-gradient-soft">
        <div className="container-page grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {[
            { i: Building, t: "Foton Energy s.r.o.", d: "TRAFON — trafostanice na kľúč" },
            { i: MapPin, t: "Adresa", d: "Golianovská 420/61\n949 07 Nitra, Slovensko" },
            { i: Clock, t: "Otváracie hodiny", d: "Po – Pi: 08:00 – 17:00\nSo: 09:00 – 16:00" },
          ].map((c) => (
            <Card key={c.t} className="border-border/60">
              <CardContent className="p-5 flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <c.i className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-primary">{c.t}</div>
                  <div className="text-sm text-foreground/70 whitespace-pre-line">{c.d}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Kontakt;

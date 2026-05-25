import { SEO } from "@/components/site/SEO";
import { CTASection } from "@/components/site/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Star } from "lucide-react";

const partners = [
  "IKEA Industrie",
  "Slovenské elektrárne",
  "Enervigo a.z.",
  "ZSD",
  "SSD",
  "VSD",
];

const Referencie = () => {
  return (
    <>
      <SEO
        title="Videá a referencie — IKEA Industrie, Slovenské elektrárne a ďalší"
        description="Spolupracujeme s IKEA Industrie, Slovenskými elektrárňami, ZSD, SSD, VSD a desiatkami stredných a malých firiem. Referencie a videá z realizácií."
        path="/referencie"
        keywords="referencie trafostanice, IKEA Industrie trafostanica, Slovenské elektrárne dodávateľ, ZSD SSD VSD"
      />

      <section className="bg-gradient-trust text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pulse-soft opacity-60" />
        <div className="container-page relative">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5">
            Referencie — realizované <span className="text-gradient-warm">trafostanice a transformátory</span> na Slovensku
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Dôvera, ktorú si zaslúžime každým hotovým projektom. Pozrite si videá a partnerov,
            s ktorými spolupracujeme — od IKEA Industrie po Slovenské elektrárne.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            S kým spolupracujeme
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {partners.map((p) => (
              <Card key={p} className="text-center hover:shadow-elegant hover:-translate-y-1 transition-all border-border/60">
                <CardContent className="p-6">
                  <Building2 className="h-10 w-10 text-accent mx-auto mb-3" />
                  <div className="font-display text-lg font-bold text-primary">{p}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            …a desiatky stredných a malých firiem po celom Slovensku, ktoré sa spoľahli na naše
            riešenia bez starostí.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-soft">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Čo o nás hovoria
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                t: "Spustenie nového výrobného závodu bez jediného zdržania — všetko vrátane revízií a kolaudácie zvládli na výbornú.",
                a: "Prevádzkový riaditeľ, priemyselný park",
              },
              {
                t: "Konečne niekto, kto rozumie aj papierom aj montáži. 6 rokov servisu zdarma je férová ponuka.",
                a: "Konateľ, výrobná spoločnosť",
              },
            ].map((r) => (
              <Card key={r.a} className="shadow-card border-border/60">
                <CardContent className="p-6">
                  <div className="flex gap-1 text-accent mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/85 italic mb-3">"{r.t}"</p>
                  <p className="text-sm text-muted-foreground font-medium">— {r.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Videá z realizácií zverejníme čoskoro. Chcete vidieť konkrétny projekt podobný vášmu?
            Napíšte nám.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Referencie;

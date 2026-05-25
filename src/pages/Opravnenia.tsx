import { SEO } from "@/components/site/SEO";
import { CTASection } from "@/components/site/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Award, FileCheck, ShieldCheck } from "lucide-react";

const Opravnenia = () => {
  const items = [
    { t: "Oprávnenia na NN/VN nad 1000 V", d: "Pracujeme s vysokým napätím v plnom súlade so zákonom." },
    { t: "Revízni technici", d: "Kompletné revízie, kenotrónové merania a osvedčenia." },
    { t: "BOZP a požiarna ochrana", d: "Vypracovanie dokumentácie aj bezpečnostný dozor." },
    { t: "Spolupráca s Technickou inšpekciou", d: "Inšpektori, ktorí nám pomáhajú dodržiavať predpisy a postupy." },
    { t: "Statické posudky", d: "Pre stavebné a montážne práce trafostaníc." },
    { t: "Komplexné a predkomplexné skúšky", d: "Skúšky funkčnosti pred spustením do prevádzky." },
  ];

  return (
    <>
      <SEO
        title="Oprávnenia a osvedčenia — bezpečné práce na trafostaniciach"
        description="Kompletné oprávnenia pre práce na NN/VN trafostaniciach, BOZP, požiarna ochrana, statické posudky, revízne osvedčenia. Foton Energy s.r.o."
        path="/opravnenia"
        keywords="oprávnenia elektro, revízny technik VN, BOZP elektro, technická inšpekcia, osvedčenia trafostanica"
      />

      <section className="bg-gradient-trust text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pulse-soft opacity-60" />
        <div className="container-page relative">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5">
            Oprávnenia a <span className="text-gradient-warm">osvedčenia</span> pre elektro VN/NN — Technická inšpekcia SR
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Revízie NN/VN • Povolenia • Osvedčenia • Úradné skúšky • Odborné prehliadky •
            BOZP a PO — všetko robíme pre nových aj existujúcich partnerov.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((x) => (
              <Card key={x.t} className="hover:shadow-elegant hover:-translate-y-1 transition-all border-border/60">
                <CardContent className="p-6">
                  <Award className="h-10 w-10 text-accent mb-4" />
                  <h2 className="font-display text-xl font-bold text-primary mb-2">{x.t}</h2>
                  <p className="text-sm text-muted-foreground">{x.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="container-page max-w-3xl text-center">
          <ShieldCheck className="h-14 w-14 text-accent mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Uvedenie do prevádzky s istotou
          </h2>
          <p className="text-lg text-muted-foreground">
            Kompletnú dokumentáciu pre distribúciu pripravíme tak, aby bola priechodná a nimi
            schválená. Zabezpečíme to <strong>dodržaním všetkých noriem a zákonov</strong> —
            ste tak chránení pred pokutami aj pred stratami z výpadku.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Opravnenia;

import { SEO } from "@/components/site/SEO";
import { CTASection } from "@/components/site/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileCheck,
  HardHat,
  Flame,
  ShieldCheck,
  Gauge,
  Sun,
  Battery,
  Wrench,
  Users,
} from "lucide-react";

const groups = [
  {
    title: "Projektovanie",
    icon: FileCheck,
    items: [
      "Elektro-projekty na mieru",
      "Schválenie Technickou inšpekciou",
      "Úradné skúšky pred spustením",
      "Statické posudky",
      "Energetické projekty (FVE, batérie)",
    ],
  },
  {
    title: "Bezpečnosť a BOZP",
    icon: HardHat,
    items: [
      "Vypracovanie BOZP plánu",
      "Bezpečnostný dozor na stavenisku",
      "Bezpečnostné pracovné postupy",
      "Komplexné a predkomplexné skúšky",
      "Kontroly skúšok",
    ],
  },
  {
    title: "Požiarna ochrana",
    icon: Flame,
    items: [
      "Posúdenie a návrh PO",
      "Dokumentácia podľa zákona",
      "Súčinnosť s inšpektormi",
    ],
  },
  {
    title: "Revízie a merania",
    icon: ShieldCheck,
    items: [
      "Kenotrónové merania VN",
      "Revízne merania NN/VN",
      "Pravidelné revízie",
      "MPP — miestny prevádzkový predpis",
      "Osvedčenia bezpečnej prevádzky",
    ],
  },
  {
    title: "Údržba a servis",
    icon: Wrench,
    items: [
      "Prevencia výpadkov a porúch",
      "Pravidelný servis trafostaníc",
      "Obnova a výmena transformátorov",
      "Pohotovostné zásahy",
    ],
  },
  {
    title: "Energetika & OZE",
    icon: Sun,
    items: [
      "Fotovoltaika",
      "Batériové úložiská",
      "Automatizovaný predaj energie",
      "Hospodárenie s elektrickou energiou",
    ],
  },
  {
    title: "Predaj materiálu",
    icon: Battery,
    items: [
      "Transformátory rôznych výkonov",
      "Istiace prvky",
      "VN spojky podľa potreby",
      "Kabeláž NN/VN",
      "Rozvádzače na mieru",
    ],
  },
  {
    title: "Ľudské zdroje",
    icon: Users,
    items: [
      "Elektroinštalačné práce",
      "Montážne a stavebné práce",
      "Skladanie konštrukcií",
      "Špeciálne práce",
      "Externé revízie a merania",
    ],
  },
  {
    title: "Spustenie do prevádzky",
    icon: Gauge,
    items: [
      "Kompletná dokumentácia",
      "Príprava pre distribúciu",
      "Schválenie a kolaudácia",
      "Dodržanie všetkých noriem",
    ],
  },
];

const Sluzby = () => {
  return (
    <>
      <SEO
        title="Služby — projektovanie, revízie, údržba trafostaníc NN/VN"
        description="Kompletné služby pre trafostanice: elektroprojekty, statika, BOZP, požiarna ochrana, revízie, údržba, fotovoltaika a batériové úložiská. Foton Energy s.r.o."
        path="/sluzby"
        keywords="elektroprojekt trafostanica, revízia NN VN, kenotrón, BOZP elektro, fotovoltaika priemysel, batériové úložisko, údržba trafostanica"
      />

      <section className="bg-gradient-trust text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pulse-soft opacity-60" />
        <div className="container-page relative">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5 max-w-3xl">
            Všetko pod jednou strechou
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-primary-foreground/90">
            Od projektovania cez montáž a skúšky až po spustenie a údržbu —
            získate jedného spoľahlivého partnera pre celý životný cyklus trafostanice.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {groups.map((g) => (
              <Card key={g.title} className="hover:shadow-elegant hover:-translate-y-1 transition-all border-border/60">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-warm flex items-center justify-center mb-4">
                    <g.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-primary mb-3">
                    {g.title}
                  </h2>
                  <ul className="space-y-1.5 text-sm text-foreground/80">
                    {g.items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-accent">•</span> {i}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Potrebujete len jednu službu zo zoznamu?" subtitle="Žiaden problém — pošlite dopyt s popisom a pripravíme cenu na mieru." />
    </>
  );
};

export default Sluzby;

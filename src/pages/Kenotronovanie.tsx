import { SEO } from "@/components/site/SEO";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/PageHero";
import { FAQSection } from "@/components/site/FAQSection";
import { ContactForm } from "@/components/site/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const faqs = [
  {
    q: "Čo je kenotrónovanie VN káblov?",
    a: "Kenotrónovanie je napäťová skúška vysokonapäťových káblov metódou VLF (Very Low Frequency). Slúži na odhalenie poškodení izolácie ešte pred tým, než spôsobia havarijný výpadok. Je povinná pri uvedení nových káblov do prevádzky a pri pravidelných revíziách podľa STN.",
  },
  {
    q: "Aký je rozdiel medzi VLF a klasickou jednosmernou skúškou?",
    a: "VLF (0,1 Hz) je šetrnejšia voči izolácii moderných XLPE káblov a normou odporúčaná metóda. Klasická DC skúška môže v polyetylénovej izolácii vytvárať prierazné kanály a poškodzovať kábel.",
  },
  {
    q: "Akým prístrojom robíte skúšky?",
    a: "Používame Megger VLF SIN-45 — kalibrovaný prístroj pre skúšky do 45 kV (špička) sínusovým priebehom. Spolu s diagnostickou jednotkou meriame aj stratový činiteľ tan δ a parciálne výboje.",
  },
  {
    q: "Robíte aj plášťovú skúšku káblov?",
    a: "Áno. Plášťovú skúšku (jednosmerná, do 10 kV) robíme spolu s napäťovou skúškou žíl. Odhalí porušenie vonkajšieho PE plášťa, ktoré by viedlo k vlhnutiu izolácie.",
  },
  {
    q: "Kedy je kenotrónovanie povinné?",
    a: "Pri uvedení nových VN káblov do prevádzky, po oprave kábla muffou, po prepätí v sieti, a pravidelne podľa miestnych prevádzkových predpisov a STN 33 2000-6.",
  },
];

const Kenotronovanie = () => (
  <>
    <SEO
      title="Kenotrónovanie VN káblov — napäťová skúška VLF | TRAFON"
      description="Kenotrónovanie a napäťová skúška VN káblov. Plášťová skúška, meranie izolačného odporu, VLF metóda Megger SIN-45. Bratislava, Nitra, celé Slovensko."
      path="https://www.trafon.sk/kenotropovanie"
      keywords="kenotrónovanie, napäťová skúška VN káblov, VLF, plášťová skúška, Megger SIN-45, izolačný odpor"
    />
    <Breadcrumbs items={[{ label: "Kenotrónovanie" }]} />
    <PageHero
      eyebrow="VN diagnostika"
      title="Kenotrónovanie VN káblov"
      subtitle="Napäťová skúška metódou VLF, plášťová skúška a meranie izolačného odporu. Odhalíme skryté poruchy káblovej trasy skôr, než spôsobia výpadok."
    />

    <section className="py-16">
      <div className="container-page max-w-4xl space-y-6 text-foreground/85 leading-relaxed">
        <h2 className="font-display text-3xl font-bold text-primary">Čo je kenotrónovanie</h2>
        <p>
          Kenotrónovanie je <strong>napäťová skúška vysokonapäťových káblov</strong> zvýšeným napätím — overuje
          integritu izolácie a odhaľuje miesta, kde by mohlo dôjsť k prierazu. V modernej praxi sa namiesto klasického
          „kenotrónu" (zdroj jednosmerného napätia) používa <strong>VLF metóda</strong> so sínusovým napätím
          o frekvencii 0,1 Hz — je šetrnejšia voči XLPE izoláciám a normou odporúčaná.
        </p>
        <p>
          Výsledkom je <strong>certifikovaný protokol</strong>, ktorý je súčasťou revíznej dokumentácie a slúži aj ako
          podklad pre distribútora pri uvedení trafostanice do prevádzky.
        </p>
      </div>
    </section>

    <section className="py-16 bg-secondary/40">
      <div className="container-page max-w-5xl">
        <h2 className="font-display text-3xl font-bold text-primary mb-6">Čo všetko meriame</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { t: "Napäťová skúška VLF", d: "Sínusové napätie 0,1 Hz do 45 kV (špička). Štandard pre XLPE káble podľa IEEE 400.2." },
            { t: "Plášťová skúška", d: "Jednosmerné napätie do 10 kV — kontrola neporušenosti PE plášťa kábla a uzemnenia." },
            { t: "Meranie tan δ", d: "Stratový činiteľ izolácie — citlivý indikátor starnutia a vlhnutia kábla." },
            { t: "Meranie izolačného odporu", d: "Megaohmmetrom 5 kV / 10 kV — základná diagnostika izolácie pred spustením." },
          ].map((c) => (
            <Card key={c.t} className="border-border/60">
              <CardContent className="p-6">
                <h3 className="font-display text-lg font-bold text-primary mb-1.5">{c.t}</h3>
                <p className="text-sm text-foreground/80">{c.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container-page max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-primary mb-5">Naše vybavenie</h2>
        <ul className="space-y-2 text-foreground/85">
          {[
            "Megger VLF SIN-45 — sínusové VLF do 45 kV špička",
            "Megger MIT525 — izolačný odpor do 5 kV",
            "Diagnostický modul tan δ pre on-site meranie",
            "Plne mobilné laboratórium — výjazd do 24 h",
          ].map((x) => (
            <li key={x} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              {x}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <FAQSection items={faqs} />

    <section id="kontakt" className="py-16 bg-secondary/40">
      <div className="container-page max-w-2xl">
        <h2 className="font-display text-3xl font-bold text-primary mb-3 text-center">
          Objednať kenotrónovanie
        </h2>
        <p className="text-muted-foreground text-center mb-8">Napíšte nám parametre káblovej trasy — pripravíme ponuku.</p>
        <ContactForm />
      </div>
    </section>
  </>
);

export default Kenotronovanie;

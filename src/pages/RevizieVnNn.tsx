import { SEO } from "@/components/site/SEO";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/PageHero";
import { FAQSection } from "@/components/site/FAQSection";
import { ContactForm } from "@/components/site/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck, FileCheck, Thermometer, Gauge } from "lucide-react";

const faqs = [
  {
    q: "Aké typy revízií VN/NN robíte?",
    a: "Vykonávame vstupné (východiskové), pravidelné aj mimoriadne revízie a úradné skúšky pre trafostanice, rozvádzače a VN káble v zmysle STN 33 1500, STN 33 2000-6 a STN 33 1610.",
  },
  {
    q: "Aké oprávnenia majú vaši revízni technici?",
    a: "Disponujeme šiestimi certifikovanými elektrotechnikmi s oprávneniami §22, §23 aj §24 podľa Vyhlášky 508/2009 Z.z. Všetci majú platné osvedčenia Technickej inšpekcie SR.",
  },
  {
    q: "Ako často musím robiť revíziu trafostanice?",
    a: "Podľa STN 33 1500 raz za 5 rokov pre vnútorné prostredie a raz za 4 roky pre vonkajšie. Termovízna kontrola je odporúčaná ročne — predíde výpadkom z prehriatia spojov.",
  },
  {
    q: "Spracujete aj posudok pre poisťovňu?",
    a: "Áno. Po ukončení revízie vystavíme kompletný odborný posudok s fotodokumentáciou, ktorý poisťovne akceptujú pri likvidácii škodových udalostí aj pri uzatváraní zmlúv.",
  },
  {
    q: "Robíte revízie po celom Slovensku?",
    a: "Áno, pôsobíme v celej SR. Základne máme v Bratislave a Nitre, vyjazďame do celej republiky. Havarijné výjazdy 24/7.",
  },
];

const RevizieVnNn = () => (
  <>
    <SEO
      title="Revízie VN/NN trafostaníc — oprávnený elektrotechnik §22-§24"
      description="Odborné revízie vysokého a nízkeho napätia. Revízny technik §22, §23, §24. Pravidelné kontroly, termovízia, úradné skúšky. Nitra, Bratislava, celé SR."
      path="https://www.trafon.sk/revizie-vn-nn"
      keywords="revízia VN, revízia NN, revízia trafostanice, elektrotechnik §22, §23, §24, termovízia, úradné skúšky"
    />
    <Breadcrumbs items={[{ label: "Revízie VN/NN" }]} />
    <PageHero
      eyebrow="Revízie a odborné skúšky"
      title="Revízie VN/NN trafostaníc"
      subtitle="Pravidelné, mimoriadne aj úradné skúšky elektrických zariadení. 6× certifikovaný elektrotechnik §22-§24, kompletná dokumentácia pre distribútora aj poisťovňu."
    />

    <section className="py-16">
      <div className="container-page max-w-5xl">
        <h2 className="font-display text-3xl font-bold text-primary mb-6">Typy revízií, ktoré pre vás zabezpečíme</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { i: ShieldCheck, t: "Vstupné (východiskové) revízie", d: "Pred prvým uvedením zariadenia do prevádzky podľa STN 33 1500." },
            { i: FileCheck, t: "Pravidelné revízie", d: "V intervaloch 4 – 5 rokov, podľa prostredia a typu zariadenia." },
            { i: Gauge, t: "Mimoriadne revízie", d: "Po havárii, prestavbe, požiari alebo zmene podmienok prevádzky." },
            { i: ShieldCheck, t: "Úradné skúšky", d: "Pre vyhradené technické zariadenia v zmysle vyhlášky 508/2009 Z.z." },
          ].map((c) => (
            <Card key={c.t} className="border-border/60 hover:border-accent/60 transition-colors">
              <CardContent className="p-6">
                <div className="h-11 w-11 rounded-lg bg-gradient-warm flex items-center justify-center mb-3">
                  <c.i className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-1.5">{c.t}</h3>
                <p className="text-sm text-muted-foreground">{c.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-secondary/40">
      <div className="container-page max-w-4xl">
        <h2 className="font-display text-3xl font-bold text-primary mb-5">Termovízna kontrola</h2>
        <p className="text-foreground/85 leading-relaxed mb-4">
          Bezkontaktná infračervená diagnostika odhalí prehriate spoje, preťažené prípojnice a poškodené izolátory
          <strong> ešte pred ich poruchou</strong>. Termovízia je nedeštruktívna metóda, ktorú vieme robiť za plnej
          prevádzky — bez výpadku.
        </p>
        <ul className="space-y-2 text-foreground/85">
          {[
            "Odhalí poruchu v ranom štádiu — predídete výpadku aj požiaru",
            "Odporúčaná ročná frekvencia pre rozvádzače NN aj VN",
            "Výstupom je protokol s termogramami pre poisťovňu",
            "Vykonávame s kalibrovanou kamerou Flir s rozlíšením 640×480",
          ].map((x) => (
            <li key={x} className="flex items-start gap-2">
              <Thermometer className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              {x}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="py-16">
      <div className="container-page max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-primary mb-5">Orientačný cenník revízií</h2>
        <p className="text-muted-foreground mb-4">
          Presnú cenu pripravíme po krátkej konzultácii. Závisí od počtu rozvádzačov, dostupnosti a typu zariadenia.
        </p>
        <ul className="space-y-2 text-foreground/85">
          {[
            "Pravidelná revízia NN rozvádzača — od 120 €",
            "Pravidelná revízia VN trafostanice — od 380 €",
            "Termovízna kontrola — od 90 € / rozvádzač",
            "Úradná skúška — individuálne podľa rozsahu",
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
          Potrebujete revíziu? Napíšte nám.
        </h2>
        <p className="text-muted-foreground text-center mb-8">Odpovedáme do 24 hodín, výjazd v rámci celej SR.</p>
        <ContactForm />
      </div>
    </section>
  </>
);

export default RevizieVnNn;

import { SEO } from "@/components/site/SEO";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/PageHero";
import { FAQSection } from "@/components/site/FAQSection";
import { ContactForm } from "@/components/site/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

const faqs = [
  {
    q: "Pôsobíte v Bratislave a celom Bratislavskom kraji?",
    a: "Áno. Máme servisné centrum v Bratislave a pravidelne vyjazďame do Pezinka, Senca, Malaciek aj Záhoria. Pre Bratislavu havarijný výjazd do 90 minút.",
  },
  {
    q: "S akým distribútorom pracujete v Bratislave?",
    a: "V Bratislavskom kraji je distribútorom Západoslovenská distribučná, a.s. (ZSDS). Vybavíme za vás celú komunikáciu — pripájacie podmienky, zmluvy o pripojení aj odovzdávacie protokoly.",
  },
  {
    q: "Robíte trafostanice aj pre developerské projekty v BA?",
    a: "Áno. Realizovali sme trafostanice pre rezidenčné komplexy v Petržalke, Ružinove, Novom Meste aj pre kancelárske budovy v centre. Vieme pracovať v stiesnených podmienkach a koordinovať sa s ďalšími profesiami.",
  },
];

const TrafostaniceBratislava = () => (
  <>
    <SEO
      title="Trafostanice Bratislava — dodávka, montáž, revízie | TRAFON"
      description="Trafostanice na kľúč v Bratislave. Revízie VN/NN, kenotrónovanie, servis 24/7. Foton Energy — servisné centrum Bratislava a okolie."
      path="https://www.trafon.sk/trafostanice-bratislava"
      keywords="trafostanice Bratislava, revízia trafostanice Bratislava, ZSDS, elektrotechnik Bratislava"
    />
    <Breadcrumbs items={[{ label: "Trafostanice Bratislava" }]} />
    <PageHero
      eyebrow="Bratislava a Bratislavský kraj"
      title="Trafostanice Bratislava"
      subtitle="Servisné centrum v Bratislave, pohotovosť pre developerov, výrobné areály a kancelárske budovy. Pripájame na sieť ZSDS bez zbytočných prieťahov."
    />

    <section className="py-16">
      <div className="container-page max-w-5xl">
        <h2 className="font-display text-3xl font-bold text-primary mb-6">Pre koho v Bratislave staviame</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { i: MapPin, t: "Developerské projekty", d: "Rezidenčné komplexy v Petržalke, Ružinove, Novom Meste, kancelárske budovy." },
            { i: Clock, t: "Výrobné a logistické areály", d: "Lamač, Vajnory, Bratislava-okolie. Pripájacie výkony 400 kVA – 2500 kVA." },
            { i: Phone, t: "Pohotovosť 24/7", d: "Havarijný výjazd v rámci Bratislavy do 90 minút." },
          ].map((c) => (
            <Card key={c.t} className="border-border/60">
              <CardContent className="p-6">
                <div className="h-11 w-11 rounded-lg bg-gradient-warm flex items-center justify-center mb-3">
                  <c.i className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-1.5">{c.t}</h3>
                <p className="text-sm text-foreground/80">{c.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-secondary/40">
      <div className="container-page max-w-4xl text-foreground/85 leading-relaxed space-y-4">
        <h2 className="font-display text-3xl font-bold text-primary mb-3">Oblasti, ktoré obsluhujeme</h2>
        <p>
          Bratislava (všetky mestské časti), Pezinok, Senec, Malacky, Stupava, Modra a celý Bratislavský kraj.
          Vďaka dvom servisným základniam (Bratislava + Nitra) vieme pokryť aj Záhorie a Záhorskú nížinu.
        </p>
        <p>
          Pre Bratislavu pripravujeme aj <strong>logistiku stiesnených staveniská</strong> — rátame s dopravou
          v centre, koordináciou s mestskými časťami a obmedzeniami v pamiatkovej zóne.
        </p>
      </div>
    </section>

    <FAQSection items={faqs} />

    <section id="kontakt" className="py-16">
      <div className="container-page max-w-2xl">
        <h2 className="font-display text-3xl font-bold text-primary mb-3 text-center">
          Dopyt z Bratislavy
        </h2>
        <p className="text-muted-foreground text-center mb-8">Ozveme sa do 24 hodín s prvým návrhom riešenia.</p>
        <ContactForm />
      </div>
    </section>
  </>
);

export default TrafostaniceBratislava;

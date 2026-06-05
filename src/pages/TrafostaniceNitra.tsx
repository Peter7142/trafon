import { SEO } from "@/components/site/SEO";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/PageHero";
import { FAQSection } from "@/components/site/FAQSection";
import { ContactForm } from "@/components/site/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

const faqs = [
  {
    q: "Ako rýchlo dorazíte na výjazd do Nitry a okolia?",
    a: "Foton Energy sídli v Nitre — pri havárii sme na mieste do 2 hodín. Pre plánované práce v okrese Nitra, Zlaté Moravce, Topoľčany či Šaľa neúčtujeme žiadny dopravný príplatok.",
  },
  {
    q: "S ktorým distribútorom v Nitrianskom kraji spolupracujete?",
    a: "Distribútorom v regióne je Západoslovenská distribučná, a.s. (ZSDS). Máme dlhoročnú skúsenosť s ich pripájacími podmienkami aj revíznymi požiadavkami.",
  },
  {
    q: "Robíte trafostanice aj pre poľnohospodárske podniky v okolí Nitry?",
    a: "Áno. Realizovali sme trafostanice pre sušiarne obilia, chovy hospodárskych zvierat aj pre závlahové sústavy. Vieme navrhnúť robustné riešenie s dôrazom na nízke prevádzkové náklady.",
  },
];

const TrafostaniceNitra = () => (
  <>
    <SEO
      title="Trafostanice Nitra — montáž, revízie, servis | TRAFON"
      description="Trafostanice na kľúč v Nitre a okolí. Montáž, revízie VN/NN, kenotrónovanie. Foton Energy sídli v Nitre — výjazd do 2 hodín."
      path="https://www.trafon.sk/trafostanice-nitra"
      keywords="trafostanice Nitra, revízia trafostanice Nitra, ZSDS, elektrotechnik Nitra"
    />
    <Breadcrumbs items={[{ label: "Trafostanice Nitra" }]} />
    <PageHero
      eyebrow="Nitra a Nitriansky kraj"
      title="Trafostanice Nitra"
      subtitle="Sídlime priamo v Nitre. Vyjazďame do 2 hodín pri havárii, bez dopravného príplatku v rámci kraja. Pripájame na sieť ZSDS — vieme presne, čo distribútor vyžaduje."
    />

    <section className="py-16">
      <div className="container-page max-w-5xl">
        <h2 className="font-display text-3xl font-bold text-primary mb-6">Prečo si pre Nitru vybrať nás</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { i: MapPin, t: "Lokálna prítomnosť", d: "Prevádzka v Nitre-Janíkovciach, sklad materiálu a technika v meste." },
            { i: Clock, t: "Rýchly výjazd", d: "Do 2 hodín pri havárii v okrese Nitra a okolí. Žiadne dopravné poplatky." },
            { i: Phone, t: "Havarijná linka 24/7", d: "+421 944 366 444 — spätné volanie do 15 minút." },
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
        <h2 className="font-display text-3xl font-bold text-primary mb-3">Oblasti, ktoré pokrývame</h2>
        <p>
          Nitra, Zlaté Moravce, Topoľčany, Šaľa, Levice, Komárno, Nové Zámky a celý Nitriansky samosprávny kraj.
          Pre projekty v rámci kraja je doprava zdarma — fakturujeme len odpracované hodiny a materiál.
        </p>
        <p>
          Realizovali sme trafostanice pre <strong>priemyselné parky, automotive subdodávateľov, poľnohospodárske
          družstvá aj logistické centrá</strong> v Nitrianskom kraji.
        </p>
      </div>
    </section>

    <FAQSection items={faqs} />

    <section id="kontakt" className="py-16">
      <div className="container-page max-w-2xl">
        <h2 className="font-display text-3xl font-bold text-primary mb-3 text-center">
          Dopyt z Nitry a okolia
        </h2>
        <p className="text-muted-foreground text-center mb-8">Sme blízko — ozveme sa do hodiny v pracovnom čase.</p>
        <ContactForm />
      </div>
    </section>
  </>
);

export default TrafostaniceNitra;

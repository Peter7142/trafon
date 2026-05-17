import { SEO } from "@/components/site/SEO";
import { CTASection } from "@/components/site/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Shield, Wrench } from "lucide-react";
import trafoNova from "@/assets/trafostanica-nova.jpg";
import trafoKiosk from "@/assets/trafostanica-kiosk.jpg";

const Trafostanice = () => {
  return (
    <>
      <SEO
        title="Trafostanice na kľúč — nové aj rekonštrukcie | Predaj transformátorov"
        description="Predaj a inštalácia trafostaníc a transformátorov, kabeláž, rozvádzače, VN spojky. Servis a údržba bez starostí. 6 rokov servisu ZDARMA pri novej trafostanici."
        path="/trafostanice"
        keywords="trafostanica predaj, nová trafostanica, transformátor, rekonštrukcia trafostanice, VN spojky, rozvádzače na mieru, kabeláž NN VN"
      />

      <section className="relative bg-gradient-trust text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-pulse-soft opacity-60" />
        <div className="container-page relative">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-sm font-medium mb-5">
            Trafostanice
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5 max-w-3xl">
            Trafostanice <span className="text-gradient-warm">na kľúč</span> aj rekonštrukcie
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Nové trafostanice s kompletnou dodávkou, predaj transformátorov a všetkého
            potrebného materiálu — bez stresu, bez výpadkov, bez pokút.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={trafoNova}
            alt="Nová trafostanica pripravená na inštaláciu"
            className="rounded-2xl shadow-elegant"
            loading="lazy"
            width={1280}
            height={896}
          />
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-5">
              Nová trafostanica s lacnejšou údržbou
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Až <strong>6 ročná záruka bez starostí</strong> v hodnote{" "}
              <span className="text-gradient-warm font-bold">8 590 € ZDARMA</span> k objednávke novej trafačky.
              Zabezpečíme revízie, inšpekčné merania a dodržíme všetky zákonné povinnosti pre bezpečné
              pripojenie do siete.
            </p>
            <ul className="space-y-3">
              {[
                "Komplet od projektu po spustenie",
                "Revízie NN/VN a kenotrónové merania v cene",
                "Rýchle pripojenie k distribúcii alebo MDS",
                "Schválenie Technickou inšpekciou",
                "Pravidelná údržba pre dlhú životnosť",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-soft">
        <div className="container-page">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Čo všetko dodávame
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { i: Zap, t: "Transformátory", d: "Rôzne typy a výkony podľa potreby." },
              { i: Shield, t: "Istiace prvky", d: "Všetky bežne dostupné typy." },
              { i: Wrench, t: "VN spojky a kabeláž", d: "Špeciálna aj bežná podľa návinov." },
              { i: CheckCircle2, t: "Rozvádzače na mieru", d: "Výroba presne podľa projektu." },
            ].map((c) => (
              <Card key={c.t} className="hover:shadow-elegant hover:-translate-y-1 transition-all">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-warm flex items-center justify-center mb-4">
                    <c.i className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary mb-1">{c.t}</h3>
                  <p className="text-sm text-muted-foreground">{c.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Kiosková trafostanica
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-5">
              Kompaktné riešenie pre firmy a developerov
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Kiosková trafostanica je <strong>rýchle, bezpečné a estetické</strong> riešenie tam, kde
              potrebujete spoľahlivé napájanie bez kompromisov. Pripravená z výroby, osadená na mieste,
              pripojená a uvedená do prevádzky pod jednou strechou.
            </p>
            <p className="text-lg text-muted-foreground">
              Klientom ju osobne <strong>vysvetlíme, prevedieme funkciami a odovzdáme s revíziou</strong> —
              aby ste presne vedeli, čo vlastníte a ako to funguje.
            </p>
          </div>
          <img
            src={trafoKiosk}
            alt="Kiosková trafostanica so zákazníkmi a technikom TRAFON pri odovzdaní"
            className="rounded-2xl shadow-elegant order-1 lg:order-2"
            loading="lazy"
            width={1536}
            height={1024}
          />
        </div>
      </section>

      <section className="py-20 bg-gradient-soft">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-5">
            Stará trafostanica — dlhodobá prevádzka bez poruchy
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Trafostanice a transformátory vydržia dlhšie, ak majú správnu pravidelnú starostlivosť,
            o ktorú sa nemusíte starať — a vôbec to nemusí byť drahé.
          </p>
          <p className="text-lg text-muted-foreground">
            Špecializujeme sa na <strong>rozvody NN/VN nad 1000 V</strong>. Vždy pred uvedením
            trafostanice do prevádzky preveríme <strong>kenotrónom VN stranu</strong> pre bezpečnú prevádzku.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Trafostanice;

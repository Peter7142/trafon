import { SEO } from "@/components/site/SEO";
import { CTASection } from "@/components/site/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Award, TrendingUp, ShieldCheck } from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "Začiatok — Elektrikári Nitra",
    text: "Peter Šuraba zakladá pracovnú skupinu. Výsledkom sú stovky hotových elektroinštalačných prác na rodinných domoch a desiatky elektrických kúrení a rekuperačných jednotiek.",
  },
  {
    year: "2022",
    title: "Špecializácia na fotovoltaiku",
    text: "Prechod na fotovoltaiku pre rodinné domy. Do začiatku roku 2025 sme zrealizovali viac ako 420 fotovoltických inštalácií.",
  },
  {
    year: "2025",
    title: "Priemyselné výroby",
    text: "Opúšťame segment rodinných domov a vstupujeme do priemyslu. Realizujeme veľké projekty pre IKEA Industrie a jednu z najziskovejších organizácií na Slovensku — Slovenské elektrárne.",
  },
  {
    year: "2025+",
    title: "Projekt TRAFON.sk",
    text: "Vzniká vízia a značka TRAFON — spojenie slov Trafostanica + Foton. Od projektovania, cez montáž a skúšky, až po spustenie a údržbu trafostaníc na kľúč.",
  },
];

const ONas = () => {
  return (
    <>
      <SEO
        title="O nás — od elektrikárov k špecialistom na trafostanice"
        description="Príbeh Foton Energy s.r.o. a značky TRAFON. Od roku 2020: stovky elektroinštalácií, 420+ fotovoltík, dnes špecialisti na trafostanice pre priemysel."
        path="/o-nas"
        keywords="Foton Energy Nitra, Peter Šuraba, TRAFON, história firmy, trafostanice na kľúč"
      />

      <section className="bg-gradient-trust text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pulse-soft opacity-60" />
        <div className="container-page relative">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-sm font-medium mb-5">
            O nás
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5 max-w-3xl">
            Náš príbeh — od elektrikárov k{" "}
            <span className="text-gradient-warm">špecialistom na trafostanice</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            Päť rokov skúseností, stovky úspešných realizácií a jasná vízia: postarať sa o vašu
            trafostanicu tak, aby ste mali pokoj v duši a istotu v prevádzke.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container-page max-w-4xl">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary/40 to-accent/50 md:-translate-x-px" aria-hidden />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative grid md:grid-cols-2 gap-6 items-start ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                    <div className="font-display text-5xl font-bold text-gradient-warm mb-1">
                      {m.year}
                    </div>
                    <h2 className="font-display text-2xl font-bold text-primary">{m.title}</h2>
                  </div>
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-10" : "md:text-right md:pr-10"}`}>
                    <p className="text-foreground/80 leading-relaxed">{m.text}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-2 h-4 w-4 rounded-full bg-accent ring-4 ring-background md:-translate-x-1/2 shadow-glow" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & values */}
      <section className="py-20 bg-gradient-soft">
        <div className="container-page max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Naša vízia
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mt-3 mb-4">
              TRAFON = Trafostanica + Foton
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Projekt TRAFON.sk spája dva svety — silu trafostaníc a energiu fotónu.
              Od projektovania cez montáž a skúšky až po spustenie a údržbu sa staráme o to,
              aby vaša prevádzka mala všetky zákonné povinnosti splnené —
              a vy ste boli chránení pred pokutami aj pred stratou z výpadku či nedostatočnej údržby.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { i: ShieldCheck, t: "Bezpečnosť", d: "Vaša ochrana je naša priorita." },
              { i: TrendingUp, t: "Ziskovosť", d: "Žiadne výpadky, žiadne pokuty." },
              { i: Award, t: "Profesionalita", d: "Skúsenosti z najnáročnejších projektov." },
              { i: Sparkles, t: "Bezstarostnosť", d: "Postaráme sa o všetky papiere aj kontroly." },
            ].map((v) => (
              <Card key={v.t} className="border-border/60 hover:shadow-elegant transition-all">
                <CardContent className="p-6 text-center">
                  <v.i className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="font-display text-lg font-bold text-primary mb-1">{v.t}</h3>
                  <p className="text-sm text-muted-foreground">{v.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed text */}
      <section className="py-20">
        <div className="container-page max-w-3xl space-y-6 text-foreground/85 text-lg leading-relaxed">
          <p>
            <strong>Merania od revíznych technikov</strong> ponúkame počas objednávky nových
            trafostaníc <strong className="text-accent">zdarma</strong>.
          </p>
          <p>
            <strong>Inšpektori z Technickej inšpekcie</strong> nám pomáhajú zvládať
            dodržiavanie všetkých bezpečných predpisov a postupov — vďaka tomu prejdete kolaudáciou
            bez sklamania a bez zdržaní.
          </p>
          <p>
            Revízie, povolenia, osvedčenia, skúšky, previerky, funkcionality — to všetko robíme
            pre našich <strong>nových aj existujúcich partnerov</strong>.
          </p>
          <p>
            <strong>Uvedenie do prevádzky s kompletnou dokumentáciou</strong> pre distribúciu
            pripravíme tak, aby bola priechodná a nimi schválená. Zabezpečíme to dodržaním
            všetkých noriem a zákonov.
          </p>
          <Card className="border-accent/40 bg-accent/5 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm mb-2">
                <Sparkles className="h-4 w-4" /> Pozor — limitovaná akcia
              </div>
              <p className="text-foreground">
                Pri objednávke novej trafačky <strong>Projekt s Realizáciou</strong> získate{" "}
                <strong>6 ročný servis ZDARMA</strong> v celkovej hodnote{" "}
                <span className="text-gradient-warm font-bold">8 590 €</span>. Tento bezstarostný
                servis vám pokryje výdavky na prevádzku trafostanice na 6 rokov.
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                Svetová situácia spôsobuje, že náklady a ceny na materiál stúpajú rýchlejšie ako
                doteraz — nevieme, do kedy budeme schopní akciu v týchto cenách držať.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ONas;

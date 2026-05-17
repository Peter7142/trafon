import { SEO } from "@/components/site/SEO";
import { CTASection } from "@/components/site/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Award,
  TrendingUp,
  ShieldCheck,
  Lightbulb,
  Zap,
  Factory,
  Sun,
  Wrench,
  Handshake,
  Gauge,
  Clock,
  Gift,
  Hammer,
  Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import nemecko1 from "@/assets/nemecko-vn-1.jpg";
import nemecko2 from "@/assets/nemecko-vn-2.jpg";
import nemecko3 from "@/assets/nemecko-vn-3.jpg";
import nemecko4 from "@/assets/nemecko-vn-4.jpg";
import nemecko5 from "@/assets/nemecko-vn-5.jpg";
import nemecko6 from "@/assets/nemecko-vn-6.jpg";

interface Chapter {
  year: string;
  icon: LucideIcon;
  title: string;
  short: string;
  body: string;
  badge?: string;
}

const chapters: Chapter[] = [
  {
    year: "2008",
    icon: Globe,
    title: "Kapitola 0 — Nemecko, VN/VVN siete",
    short: "Od roku 2008 práce na vysokom a veľmi vysokom napätí pre nemeckú distribúciu.",
    body:
      "Začali sme tam, kde sa energetika rodí — priamo na sieti. Od roku 2008 sme v Nemecku vykonávali všetky druhy prác na VN/VVN strane distribučnej sústavy: montáže stožiarov, ťahanie a regulácia vodičov, výmena izolátorov, pripájanie trafostaníc. Tu sa zrodila naša pokora pred vysokým napätím — a remeselná presnosť, ktorú dnes nesieme do každého projektu na Slovensku.",
    badge: "17+ rokov skúseností",
  },
  {
    year: "2020",
    icon: Hammer,
    title: "Začiatok — Elektrikári Nitra",
    short: "Pracovná skupina, ktorá rástla cez kvalitu, nie cez reklamu.",
    body:
      "Peter Šuraba zakladá pracovnú skupinu Elektrikári Nitra. Výsledkom sú stovky hotových elektroinštalačných prác na rodinných domoch a desiatky elektrických kúrení aj rekuperačných jednotiek.",
    badge: "Stovky realizácií",
  },
  {
    year: "2022",
    icon: Sun,
    title: "Špecializácia — fotovoltaika pre domácnosti",
    short: "Plný fokus na FVE pre rodinné domy.",
    body:
      "Prechod na fotovoltaiku pre rodinné domy. Do začiatku roku 2025 sme nainštalovali viac ako 420 fotovoltických systémov — segment, ktorý sme zvládli na úrovni veľkých hráčov.",
    badge: "420+ FVE inštalácií",
  },
  {
    year: "2025",
    icon: Factory,
    title: "Pivot — z domácností do priemyslu",
    short: "Opúšťame FVE segment na vrchole a ideme tam, kde majú práce reálnu váhu.",
    body:
      "Vstupujeme do priemyselných projektov. Realizujeme dodávky pre IKEA Industrie a pre jednu z najziskovejších organizácií na Slovensku — Slovenské elektrárne. Tam dozrieva vízia.",
    badge: "Priemysel & energetika",
  },
  {
    year: "2025+",
    icon: Zap,
    title: "TRAFON.sk — značka, ktorá spája",
    short: "Trafostanica + Foton = TRAFON.",
    body:
      "Z priemyselných projektov vzniká samostatná značka TRAFON.sk. Spája dva svety — robustnosť trafostaníc a energiu fotónu. Od projektu cez montáž a skúšky až po spustenie a údržbu.",
    badge: "Komplet na kľúč",
  },
];

interface AhaItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

const ahaMoments: AhaItem[] = [
  {
    icon: TrendingUp,
    title: "Odísť na vrchole je sila",
    text:
      "Po 420+ fotovoltikách väčšina firiem zdvojnásobí stávku. My sme namiesto toho pivotovali do priemyslu — pretože budúcnosť energetiky sa píše tam, kde sa elektrina vyrába a transformuje.",
  },
  {
    icon: Handshake,
    title: "Z kontrolóra robíme spojenca",
    text:
      "Inšpektori z Technickej inšpekcie pre väčšinu firiem znamenajú stres. Pre nás sú partneri — pomáhajú nám dodržiavať predpisy už pri návrhu, takže kolaudácia prejde napoprvé.",
  },
  {
    icon: ShieldCheck,
    title: "Najväčší strach klienta = naša zodpovednosť",
    text:
      "Výpadok a pokuta sú dve veci, ktorých sa každá výroba bojí najviac. Preto ich preberáme na seba cez 6 ročný servis — váš strach sa stáva našou rutinou.",
  },
  {
    icon: Gift,
    title: "Revízie ako bonus, nie ako položka",
    text:
      "Merania od revíznych technikov pri novej trafostanici dávame zdarma. Nie preto, že sú lacné — ale preto, že tým eliminujeme jednu z mála vecí, čo klienta v dokumentácii brzdí.",
  },
  {
    icon: Zap,
    title: "Kenotrón pred prvým zapnutím",
    text:
      'Trafostanicu nezapneme bez kenotrónového merania VN strany. Toto je hranica medzi „funguje" a „je bezpečné". 99 % výpadkov má svoju príčinu odhalenú práve tu.',
  },
  {
    icon: Clock,
    title: "Akcia, ktorá nie je trik",
    text:
      "Ceny materiálu reálne stúpajú a my nevieme, dokedy ich vieme držať. 6 rokov servisu zdarma (8 590 €) nie je marketingový blesk — je to okno, ktoré sa zatvára spolu s trhom.",
  },
];

const ONas = () => {
  return (
    <>
      <SEO
        title="O nás — príbeh od elektrikárov k špecialistom na trafostanice"
        description="Foton Energy s.r.o. a značka TRAFON. Od 2020 stovky elektroinštalácií, 420+ fotovoltík, dnes špecialisti na trafostanice pre priemysel. Náš príbeh v kapitolách."
        path="/o-nas"
        keywords="Foton Energy Nitra, Peter Šuraba, TRAFON, história, trafostanice na kľúč, fotovoltaika priemysel"
      />

      {/* HERO */}
      <section className="bg-gradient-trust text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pulse-soft opacity-60" />
        <div className="container-page relative">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-sm font-medium mb-5">
            O nás
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5 max-w-3xl">
            Náš príbeh v <span className="text-gradient-warm">kapitolách</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            Päť rokov, tri pivoty, jeden zámer — postarať sa o vašu prevádzku tak, aby ste mali
            pokoj v duši a istotu v sieti.
          </p>
        </div>
      </section>

      {/* CHAPTERS — boxy s krátkym nadpisom a popisom */}
      <section className="py-20">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Cesta firmy
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mt-3 mb-3">
              Štyri kapitoly, jedna línia
            </h2>
            <p className="text-muted-foreground">
              Každá kapitola priniesla skúsenosť, ktorú dnes využívate vy — pri svojej trafostanici.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {chapters.map((c) => (
              <Card
                key={c.year}
                className="group relative overflow-hidden border-border/60 hover:border-accent/60 hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-warm opacity-[0.07] rounded-bl-full pointer-events-none" />
                <CardContent className="p-6 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-warm flex items-center justify-center shadow-glow">
                      <c.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="font-display text-3xl font-bold text-gradient-warm">
                      {c.year}
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary mb-1">
                    {c.title}
                  </h3>
                  <p className="text-sm font-medium text-accent mb-3">{c.short}</p>
                  <p className="text-foreground/80 leading-relaxed text-[15px]">{c.body}</p>
                  {c.badge && (
                    <span className="inline-block mt-4 text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-primary border border-border">
                      {c.badge}
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AHA MOMENTY */}
      <section className="py-20 bg-gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 bg-pulse-soft opacity-50 pointer-events-none" />
        <div className="container-page relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/40 text-accent text-sm font-semibold mb-4">
              <Lightbulb className="h-4 w-4" /> Aha! momenty
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
              Šesť postrehov, ktoré menia hru
            </h2>
            <p className="text-lg text-muted-foreground">
              Veci, ktoré sa nedočítate v cenníku — a presne preto rozhodujú, či vaša trafostanica
              bude problémom, alebo tichým spojencom prevádzky.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ahaMoments.map((a, i) => (
              <Card
                key={a.title}
                className="border-accent/30 bg-card hover:shadow-elegant hover:-translate-y-1 transition-all"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                      <a.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-accent">
                      Aha #{i + 1}
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary mb-2">{a.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{a.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VÍZIA — krátky box */}
      <section className="py-20">
        <div className="container-page max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-6">
            <Card className="lg:col-span-3 border-border/60 shadow-card">
              <CardContent className="p-7">
                <span className="text-accent font-semibold text-xs uppercase tracking-widest">
                  Vízia
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mt-2 mb-3">
                  TRAFON = Trafostanica + Foton
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Spájame robustný svet trafostaníc s energiou fotónu. Od projektovania cez
                  montáž a skúšky až po spustenie a údržbu sa staráme o to, aby vaša prevádzka
                  mala všetky zákonné povinnosti splnené — a vy ste boli chránení pred pokutami
                  aj pred stratou z výpadku či nedostatočnej údržby.
                </p>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2 border-accent/40 bg-accent/5 shadow-card">
              <CardContent className="p-7">
                <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs mb-3">
                  <Sparkles className="h-4 w-4" /> Limitovaná akcia
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">
                  6 ročný servis ZDARMA
                </h3>
                <p className="text-foreground/85 text-sm mb-1">
                  Pri novej trafostanici s realizáciou — v hodnote{" "}
                  <span className="text-gradient-warm font-bold">8 590 €</span>.
                </p>
                <p className="text-xs text-muted-foreground">
                  Ceny materiálu stúpajú — nevieme, dokedy akciu udržíme.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HODNOTY — boxy */}
      <section className="py-20 bg-secondary/40">
        <div className="container-page">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Štyri piliere
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mt-3">
              Na čom staviame
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { i: ShieldCheck, t: "Bezpečnosť", d: "Pri VN nemá experiment miesto." },
              { i: TrendingUp, t: "Ziskovosť", d: "Žiadne pokuty, žiadne výpadky, žiadne sklamania." },
              { i: Award, t: "Profesionalita", d: "Štandard z IKEA Industrie a Slovenských elektrární." },
              { i: Gauge, t: "Bezstarostnosť", d: "Papiere, kontroly, údržba — preberáme na seba." },
            ].map((v) => (
              <Card key={v.t} className="border-border/60 hover:shadow-elegant transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-xl bg-gradient-warm mx-auto mb-3 flex items-center justify-center shadow-glow">
                    <v.i className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary mb-1">{v.t}</h3>
                  <p className="text-sm text-muted-foreground">{v.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ČO ROBÍME PRE PARTNEROV — kompaktné boxy */}
      <section className="py-20">
        <div className="container-page max-w-6xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Pre nových aj existujúcich partnerov
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mt-3">
              Čo všetko zastrešíme
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                i: Wrench,
                t: "Revízie a osvedčenia",
                d: "Revízie • Povolenia • Osvedčenia • Skúšky • Previerky • Funkcionality.",
              },
              {
                i: Gauge,
                t: "Uvedenie do prevádzky",
                d: "Kompletná dokumentácia pripravená tak, aby ju distribúcia schválila bez vrátenia.",
              },
              {
                i: ShieldCheck,
                t: "Zákonný súlad",
                d: "Dodržanie všetkých noriem a zákonov — ochrana pred pokutami aj pred stratami.",
              },
            ].map((x) => (
              <Card key={x.t} className="border-border/60 hover:border-accent/50 transition-all">
                <CardContent className="p-6">
                  <x.i className="h-9 w-9 text-accent mb-3" />
                  <h3 className="font-display text-lg font-bold text-primary mb-1">{x.t}</h3>
                  <p className="text-sm text-foreground/75">{x.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ONas;

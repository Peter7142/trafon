import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/site/SEO";
import { CTASection } from "@/components/site/CTASection";
import { ServiceDialog } from "@/components/site/ServiceDialog";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  Clock,
  CheckCircle2,
  Factory,
  Wrench,
  FileCheck,
  Gauge,
  Building2,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";
import hero from "@/assets/hero-trafostanica.jpg";
import revizie from "@/assets/services-revizie.jpg";
import projekt from "@/assets/services-projekt.jpg";
import trafoNova from "@/assets/trafostanica-nova.jpg";

const Home = () => {
  return (
    <>
      <SEO
        title="Trafostanica na kľúč — projekt, montáž, revízie, servis"
        description="Trafostanice od Foton Energy s.r.o. — kompletné riešenie od projektu po spustenie. Pri novej trafačke 6 ročný servis ZDARMA v hodnote 8 590 €. Bez stresu, bez pokút, bez výpadkov."
        path="/"
        keywords="trafostanica, trafostanice, transformátor, projekt trafostanice, revízia trafostanice, údržba trafostanice, NN VN, distribučná sústava, MDS, Foton Energy, Nitra"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Trafostanice na kľúč",
          provider: { "@type": "Organization", name: "Foton Energy s.r.o." },
          areaServed: "SK",
          description:
            "Komplexné riešenie trafostaníc — projektovanie, montáž, revízie a údržba NN/VN sústav.",
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Moderná trafostanica s tímom inžinierov v ochranných helmách"
            className="w-full h-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container-page py-24 md:py-36 text-primary-foreground">
          <div className="max-w-3xl animate-float-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/40 text-accent text-sm font-medium mb-6 backdrop-blur">
              <Sparkles className="h-4 w-4" /> Akcia: 6 ročný servis ZDARMA v hodnote 8 590 €
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Trafostanica <span className="text-gradient-warm">bez starostí</span>,
              <br className="hidden md:block" /> bez stresu, bez pokút.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
              Postaráme sa o všetko — od <strong>projektu</strong>, cez{" "}
              <strong>montáž a revízie NN/VN</strong>, až po <strong>spustenie a údržbu</strong>.
              Vaša prevádzka bude bezpečná, zákonná a chránená pred výpadkami.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-warm text-accent-foreground hover:opacity-90 shadow-glow text-base h-12 px-7"
              >
                <Link to="/kontakt">
                  Chcem nezáväznú ponuku <ArrowRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background hover:text-primary backdrop-blur text-base h-12 px-7"
              >
                <Link to="/trafostanice">Pozrieť naše trafostanice</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
              {[
                { v: "420+", l: "úspešných inštalácií" },
                { v: "6 rokov", l: "servis ZDARMA" },
                { v: "100 %", l: "schválenie TI" },
                { v: "24 h", l: "rýchlosť odpovede" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl font-bold text-accent">
                    {s.v}
                  </div>
                  <div className="text-sm text-primary-foreground/75">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRE KOHO */}
      <section className="py-20 bg-gradient-soft">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Pre koho sme tu
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mt-3 mb-4">
              Sme špecialisti, nie "video" elektrikári
            </h2>
            <p className="text-lg text-muted-foreground">
              Globálne sme tu pre tých, ktorí <em>nechcú zbytočný stres</em> z vybavovania
              toho, čomu nerozumejú — a chcú niekoho, kto vie ako to{" "}
              <strong>funkčne spustiť do prevádzky</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Factory, t: "Priemyselné výroby", d: "Veľké haly, závody, automotive." },
              { icon: Building2, t: "Developerské projekty", d: "Nové komerčné a obytné areály." },
              { icon: Wrench, t: "Existujúce výroby", d: "Modernizácia a údržba sústav." },
              { icon: Zap, t: "Pripojenie do siete", d: "Distribúcia aj MDS bez zdržaní." },
            ].map((c, i) => (
              <Card
                key={c.t}
                className="border-border/60 hover:border-accent/60 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-warm flex items-center justify-center mb-4">
                    <c.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary mb-1">{c.t}</h3>
                  <p className="text-sm text-muted-foreground">{c.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SLUŽBY DIALOGY */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Naše riešenia
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mt-3 mb-4">
              Čo všetko pre vás zabezpečíme
            </h2>
            <p className="text-lg text-muted-foreground">
              Kliknite na ktorúkoľvek službu — ukážeme vám detaily, prínosy a postup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceDialog
              trigger={
                <button className="group text-left rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all hover:-translate-y-1 bg-card border border-border/60">
                  <div className="relative h-48 overflow-hidden">
                    <img src={trafoNova} alt="Nová trafostanica" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                      AKCIA -100% SERVIS
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold text-primary mb-2">Nová trafostanica na kľúč</h3>
                    <p className="text-sm text-muted-foreground">Komplet od projektu po spustenie + 6 rokov servis zdarma.</p>
                  </div>
                </button>
              }
              title="Nová trafostanica na kľúč"
              image={trafoNova}
              description="Postaráme sa o celý proces — od návrhu cez vyjadrenie distribúcie, dokumentáciu, montáž, revízie až po spustenie. Vy získate funkčnú, schválenú a chránenú trafostanicu bez jediného problému."
              benefits={[
                "6 ročný bezstarostný servis ZDARMA v hodnote 8 590 €",
                "Revízie a inšpekčné merania v cene",
                "Všetky zákonné povinnosti pre bezpečné pripojenie",
                "Kenotrónové meranie VN strany pred spustením",
                "Schválenie Technickou inšpekciou bez zbytočných zdržaní",
              ]}
            />

            <ServiceDialog
              trigger={
                <button className="group text-left rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all hover:-translate-y-1 bg-card border border-border/60">
                  <div className="relative h-48 overflow-hidden">
                    <img src={projekt} alt="Elektroprojekt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold text-primary mb-2">Projektovanie elektro & EE</h3>
                    <p className="text-sm text-muted-foreground">Elektroprojekty, statika, BOZP, požiarna ochrana — všetko v jednom.</p>
                  </div>
                </button>
              }
              title="Projektovanie elektro a energetické projekty"
              image={projekt}
              description="Vypracujeme elektroprojekt na mieru — vrátane statických posudkov, BOZP, požiarnej ochrany a kompletnej dokumentácie. Spojíme aj fotovoltaiku a batériové úložiská, ak chcete úspory cez OZE."
              benefits={[
                "Elektroprojekty schválené Technickou inšpekciou",
                "Statické posudky, BOZP plán, bezpečnostný dozor",
                "Komplexné a predkomplexné skúšky",
                "Úradné skúšky tesne pred spustením",
                "Fotovoltaika a batériové úložiská ako bonus",
              ]}
            />

            <ServiceDialog
              trigger={
                <button className="group text-left rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all hover:-translate-y-1 bg-card border border-border/60">
                  <div className="relative h-48 overflow-hidden">
                    <img src={revizie} alt="Revízie a merania" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold text-primary mb-2">Revízie a merania NN/VN</h3>
                    <p className="text-sm text-muted-foreground">Kenotron, pravidelné revízie, MPP, BPP, osvedčenia.</p>
                  </div>
                </button>
              }
              title="Revízie, inšpekčné merania a osvedčenia"
              image={revizie}
              description="Zabezpečíme všetky merania a revízie, ktoré vyžaduje zákon. Predídete pokutám aj výpadkom a budete mať vždy aktuálnu dokumentáciu na vyžiadanie."
              benefits={[
                "Kenotrónové merania VN strany",
                "Pravidelné revízie NN/VN nad 1000 V",
                "MPP — miestny prevádzkový predpis",
                "BPP — bezpečnostné pracovné postupy",
                "Osvedčenia bezpečnej prevádzky",
              ]}
            />
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/sluzby">Všetky služby <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PREČO MY — strata vs. zisk */}
      <section className="py-20 bg-secondary/60 bg-grid-faint relative overflow-hidden">
        <div className="absolute inset-0 bg-pulse-soft opacity-50 pointer-events-none" />
        <div className="container-page relative">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
              Bez nás vs. <span className="text-gradient-warm">s nami</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Vyhnete sa všetkému, čo vás brzdí — a získate všetko, čo posúva váš projekt vpred.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-7">
                <h3 className="font-display text-2xl font-bold text-destructive mb-4">
                  Bez nás riskujete
                </h3>
                <ul className="space-y-3">
                  {[
                    "Stres z papierovačiek a úradov",
                    "Riziko pokút a zamietnutia distribúcie",
                    "Výpadky a neplánované straty výroby",
                    "Sklamanie z nesplnených termínov",
                    "Strach o bezpečnosť prevádzky",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2 text-foreground/85">
                      <span className="text-destructive font-bold mt-0.5">✕</span> {x}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent/40 bg-card shadow-elegant">
              <CardContent className="p-7">
                <h3 className="font-display text-2xl font-bold text-primary mb-4">
                  S nami získate
                </h3>
                <ul className="space-y-3">
                  {[
                    "Bezpečnosť, kontrolu a pohodu pri prevádzke",
                    "Ziskovosť — žiadne pokuty, žiadne výpadky",
                    "Radosť z hladkého schválenia distribúciou",
                    "Šťastný tím a chránené investície",
                    "Dobrý pocit, že o vás je postarané",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2 text-foreground/85">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /> {x}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* POSTUP */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Bežný postup
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mt-3 mb-4">
              8 jasných krokov k vašej trafostanici
            </h2>
            <p className="text-muted-foreground">
              Ak máte niektoré kroky pokryté z vašej strany, dohodneme sa na rozsahu individuálne.
            </p>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { n: 1, t: "Vyjadrenie distribúcie", d: "Alebo parametre výkonu vašej trafostanice." },
              { n: 2, t: "Návrh projektu", d: "Pošleme vám ponuku na mieru." },
              { n: 3, t: "Elektro-energetický projekt", d: "Vypracovanie a začiatok prác." },
              { n: 4, t: "Prípravy a postupy", d: "Všetko podľa vzájomnej dohody." },
              { n: 5, t: "Realizácia a montáž", d: "Profesionálny tím priamo na mieste." },
              { n: 6, t: "Merania a revízie NN/VN", d: "Kenotron, dokumentácia, osvedčenia." },
              { n: 7, t: "Spustenie a kolaudácia", d: "Schválenie distribúciou a TI." },
              { n: 8, t: "Údržba a servis", d: "Bezstarostný 6 ročný servis ZDARMA." },
            ].map((s) => (
              <li
                key={s.n}
                className="relative rounded-2xl bg-card border border-border/60 p-5 hover:shadow-card hover:border-accent/50 transition-all"
              >
                <div className="absolute -top-3 left-5 h-9 w-9 rounded-lg bg-gradient-warm text-accent-foreground font-bold flex items-center justify-center shadow-glow">
                  {s.n}
                </div>
                <h3 className="font-display text-lg font-bold text-primary mt-3 mb-1">{s.t}</h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* HODNOTY / TRUST */}
      <section className="py-20 bg-gradient-soft">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                Hodnoty, ktoré prinášame
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mt-3 mb-6">
                Silný partner, na ktorého sa spoľahnete
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Pracovali sme pre <strong>IKEA Industrie</strong> aj{" "}
                <strong>Slovenské elektrárne</strong> — jednu z najziskovejších organizácií
                na Slovensku. Vieme, ako vyzerá profesionálna prevádzka a tú istú kvalitu
                prinesieme do vášho projektu.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { i: ShieldCheck, t: "Bezpečnosť" },
                  { i: Zap, t: "Pripojenie do siete" },
                  { i: Gauge, t: "Spoľahlivosť prevádzky" },
                  { i: Award, t: "Zákonnosť & osvedčenia" },
                ].map((v) => (
                  <div key={v.t} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/60">
                    <v.i className="h-6 w-6 text-accent" />
                    <span className="font-semibold text-primary">{v.t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="shadow-elegant border-accent/30">
                <CardContent className="p-7">
                  <div className="flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-widest mb-3">
                    <Clock className="h-4 w-4" /> Limitovaná akcia
                  </div>
                  <h3 className="font-display text-3xl font-bold text-primary mb-3">
                    6 rokov servisu ZDARMA
                  </h3>
                  <p className="text-foreground/80 mb-2">
                    Pri objednávke novej trafostanice <strong>získate bezplatný servis na 6 rokov</strong>{" "}
                    v celkovej hodnote <span className="text-gradient-warm font-bold">8 590 €</span>.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Ceny materiálu stúpajú — akcia má obmedzenú platnosť, kým ich vieme držať.
                  </p>
                  <Button asChild size="lg" className="w-full bg-gradient-warm text-accent-foreground hover:opacity-90 shadow-glow h-12">
                    <Link to="/kontakt">
                      Využiť akciu teraz <ArrowRight className="ml-1 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT FORM */}
      <section id="kontakt" className="py-20 bg-secondary/50">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                Nezáväzný dopyt
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mt-3 mb-4">
                Napíšte nám — odpovieme do 24 hodín
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Stačí pár slov o vašom projekte. Pripravíme prvý návrh a bezplatnú konzultáciu.
                Žiadne sklamania, žiadne nečakané náklady.
              </p>
              <ul className="space-y-3 text-foreground/80">
                {[
                  "Diskrétne — vaše údaje sú v bezpečí",
                  "Bezplatne — prvá konzultácia je vždy zdarma",
                  "Bez záväzku — ponuka vás k ničomu neviaže",
                  "Rýchlo — ozveme sa do 24 hodín",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /> {x}
                  </li>
                ))}
              </ul>
            </div>
            <Card className="shadow-elegant border-border/60 bg-gradient-trust text-primary-foreground">
              <CardContent className="p-6 md:p-8 space-y-5">
                <h3 className="font-display text-2xl font-bold">Kontaktujte nás priamo</h3>
                <p className="text-primary-foreground/85">
                  Bez formulárov, bez čakania. Zavolajte nám alebo napíšte email — ozveme sa obratom.
                </p>
                <a
                  href="tel:+421944366444"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-warm flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Telefón</div>
                    <div className="text-xl font-bold">+421 944 366 444</div>
                  </div>
                </a>
                <a
                  href="mailto:info@fotonenergy.sk"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-warm flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Email</div>
                    <div className="text-xl font-bold">info@fotonenergy.sk</div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Home;

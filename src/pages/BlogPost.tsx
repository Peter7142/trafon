import { Link, useParams, Navigate } from "react-router-dom";
import { SEO } from "@/components/site/SEO";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { blogPosts } from "./Blog";

const articles: Record<string, { title: string; description: string; date: string; readTime: string; render: () => JSX.Element }> = {
  "cena-trafostanice": {
    title: "Koľko stojí trafostanica na kľúč? Reálne ceny 2024",
    description:
      "Zistite reálne ceny trafostaníc na Slovensku. Kioskové, murované, pre FVE. Koľko zaplatíte za projekt, montáž a revízie? Bezplatná kalkulácia.",
    date: "2024-09-15",
    readTime: "6 minút",
    render: () => (
      <>
        <p className="lead">
          Zavolali ste aspoň trom firmám. Každá vám povedala: „Závisí od projektu." Nikto vám nedal číslo. A vy ste si v
          hlave mali len jeden otáznik — veľký, drahý a nepríjemný.
        </p>
        <p>Rozumieme tomu. Preto sme sa rozhodli napísať to, čo ostatní radšej mlčia.</p>

        <h2>Prečo je cena trafostanice taká variabilná?</h2>
        <p>
          Trafostanica nie je produkt z katalógu. Je to infraštruktúra. Každý priemyselný park, každá výrobná hala,
          každá developerská stavba má iné požiadavky. Výkon transformátora, typ skeletu, hĺbka kabeláže, vzdialenosť
          od distribučnej siete — to všetko mení číslo na faktúre.
        </p>
        <p>Ale dá sa povedať viac, než „závisí od projektu". Tu sú reálne orientačné ceny:</p>

        <h2>Orientačné ceny trafostaníc na Slovensku (2024)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left p-3 border border-border">Typ trafostanice</th>
                <th className="text-left p-3 border border-border">Orientačná cena</th>
                <th className="text-left p-3 border border-border">Výkon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border">Kiosková betónová (štandard)</td>
                <td className="p-3 border border-border">30 000 – 60 000 €</td>
                <td className="p-3 border border-border">do 630 kVA</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">Kiosková (vyšší výkon)</td>
                <td className="p-3 border border-border">55 000 – 90 000 €</td>
                <td className="p-3 border border-border">630 – 1 000 kVA</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">Murovaná trafostanica</td>
                <td className="p-3 border border-border">80 000 – 150 000 €</td>
                <td className="p-3 border border-border">1 000+ kVA</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">Pre fotovoltaickú elektráreň</td>
                <td className="p-3 border border-border">45 000 – 120 000 €</td>
                <td className="p-3 border border-border">podľa výkonu FVE</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">Priemyselný park / developer</td>
                <td className="p-3 border border-border">Na dopyt</td>
                <td className="p-3 border border-border">2+ MVA</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Tieto čísla sú orientačné. Ale aspoň viete, v akom priestore sa pohybujete. To je fér.</p>

        <h2>Čo je zahrnuté v cene „trafostanica na kľúč"?</h2>
        <p>Keď hovoríme o trafostanici na kľúč, myslíme tým presne to — kľúč. Vy ho dostanete. My vyriešime zvyšok:</p>
        <ul>
          <li>Projektová dokumentácia a inžinierska činnosť</li>
          <li>Vybavenie všetkých povolení (stavebné, energetické)</li>
          <li>Komunikácia s distribútorom (SSD, ZSD, VSD)</li>
          <li>Dodávka transformátora a VN/NN rozvádzačov</li>
          <li>Montáž, kenotrónové merania a záverečná revízia</li>
          <li>Odovzdanie a zaškolenie obsluhy</li>
        </ul>
        <p>
          A keď odovzdáme kľúč, nezmizneme. <strong>6-ročný servis v hodnote 8 590 €</strong> dostanete od nás ZDARMA.
          Pretože trafostanica, ktorú sme postavili, by nás mala zaujímať aj ďalej.
        </p>

        <h2>Na čo sa zabúda — a čo to stojí navyše</h2>
        <p>V praxi vidíme, že zákazníci podceňujú tieto položky:</p>
        <ul>
          <li>Zemné práce a kabeláž: 5 000 – 20 000 € navyše pri väčšej vzdialenosti</li>
          <li>Prípojka VN od distribučnej sústavy: cena určená distribútorom</li>
          <li>Transformátor s vyšším výkonom ako plánovaný: +15 000 – 40 000 €</li>
          <li>Oneskorenie stavby z dôvodu nesprávnej dokumentácie: stratený čas = peniaze</li>
        </ul>
        <p>Preto sa oplatí robiť to raz — správne. S firmou, ktorá to vie.</p>

        <h2>Prečo TRAFON a nie lacnejšia ponuka?</h2>
        <p>
          Poznáme ten pocit, keď dostanete ponuku o 20 % nižšiu. Chce sa to zobrať. Ale trafostanicu nevymieňate každý
          rok. Je to infraštruktúra na 20 – 40 rokov. Výpadok alebo nedostatky v dokumentácii vás môžu stáť viac, než
          ste ušetrili.
        </p>
        <p>
          My stojíme za každou trafostanicou, ktorú odovzdáme. Preto ponúkame servis zdarma — nie ako marketingový
          trik, ale ako záväzok.
        </p>

        <h2>Chcete presné číslo pre váš projekt?</h2>
        <p>
          Kontaktujte nás. Do 48 hodín vám pripravíme nezáväznú cenovú analýzu. Bez obchodného tlaku, bez skrytých
          podmienok.
        </p>

        <h2>Súvisiace otázky (FAQ)</h2>
        <h3>Čo je kenotrónové meranie a prečo je povinné?</h3>
        <p>
          Kenotrónové meranie (VLF skúška) overuje integritu izolácie VN káblov pred uvedením trafostanice do
          prevádzky. Je povinnou súčasťou východiskovej revízie podľa STN noriem. Bez neho distribútor nepripojí
          trafostanicu.
        </p>
        <h3>Ako dlho trvá výstavba trafostanice na kľúč?</h3>
        <p>
          Štandardne 3 – 6 mesiacov od podpisu zmluvy. Projektová dokumentácia 4 – 6 týždňov, povolenia 4 – 8 týždňov,
          montáž 2 – 4 týždne.
        </p>
      </>
    ),
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : undefined;
  const meta = blogPosts.find((p) => p.slug === slug);

  if (!article || !meta) return <Navigate to="/blog" replace />;

  const url = `/blog/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Organization", name: "TRAFON — Foton Energy s.r.o." },
    publisher: { "@type": "Organization", name: "TRAFON — Foton Energy s.r.o." },
    datePublished: article.date,
    mainEntityOfPage: `https://www.trafon.sk${url}`,
  };

  return (
    <>
      <SEO
        title={article.title}
        description={article.description}
        path={url}
        keywords="cena trafostanice, koľko stojí trafostanica, trafostanica na kľúč cena, kiosková trafostanica cena"
        jsonLd={articleJsonLd}
      />

      <article>
        <header className="bg-gradient-trust text-primary-foreground py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-pulse-soft opacity-60" />
          <div className="container-page relative max-w-3xl">
            <nav className="text-sm text-primary-foreground/70 mb-5 flex items-center gap-1.5">
              <Link to="/" className="hover:text-accent">Domov</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-primary-foreground/90 truncate">{meta.title}</span>
            </nav>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">{article.title}</h1>
            <div className="flex items-center gap-5 text-sm text-primary-foreground/80">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {article.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {article.readTime}
              </span>
            </div>
          </div>
        </header>

        <section className="py-16">
          <div className="container-page max-w-3xl prose prose-lg prose-headings:font-display prose-headings:text-primary prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-foreground/85 prose-p:leading-relaxed prose-li:text-foreground/85 prose-strong:text-primary prose-a:text-accent">
            {article.render()}
          </div>
        </section>

        <section className="pb-12">
          <div className="container-page max-w-3xl flex flex-col sm:flex-row gap-3 justify-between items-center p-6 rounded-2xl bg-secondary/60 border border-border/60">
            <p className="font-display text-lg font-bold text-primary">
              Chcete cenovú analýzu pre váš projekt?
            </p>
            <Button asChild className="bg-gradient-warm text-accent-foreground hover:opacity-90 shadow-glow">
              <Link to="/kontakt">
                Nezáväzný dopyt <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </article>

      <CTASection />
    </>
  );
};

export default BlogPost;

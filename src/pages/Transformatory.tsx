import { SEO } from "@/components/site/SEO";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/PageHero";
import { FAQSection } from "@/components/site/FAQSection";
import { ContactForm } from "@/components/site/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    q: "Aké výkony transformátorov dodávate?",
    a: "Distribučné transformátory v rozsahu 50 kVA až 2 500 kVA, špeciálne aj suché transformátory pre vnútorné inštalácie a transformátory pre fotovoltické elektrárne.",
  },
  {
    q: "Aký je rozdiel medzi olejovým a suchým transformátorom?",
    a: "Olejové sú lacnejšie, lepšie chladia veľké výkony a sú typické pre vonkajšie kioskové trafostanice. Suché (živicové) sú bezúdržbové, nehorľavé a používajú sa vo vnútri budov — nemocnice, dátové centrá, výškové objekty.",
  },
  {
    q: "Dodávate aj na fotovoltické elektrárne?",
    a: "Áno, dodávame špeciálne FV transformátory s dvoma sekundárnymi vinutiami a zvýšenou odolnosťou voči harmonickým, ktoré generujú strieldače.",
  },
  {
    q: "Robíte aj servis a opravy?",
    a: "Áno, vykonávame revízie, výmenu oleja, sušenie, kontrolu prepínača odbočiek aj kompletné opravy s prevíjaním vinutia v autorizovaných servisných centrách.",
  },
  {
    q: "Ako dlho trvá dodávka?",
    a: "Štandardné distribučné transformátory do 1000 kVA vieme dodať do 6 – 10 týždňov. Pri špeciálnych vyhotoveniach do 16 týždňov. Z vlastných skladových zásob niektoré typy do 14 dní.",
  },
];

const Transformatory = () => (
  <>
    <SEO
      title="Predaj transformátorov — olejové, suché 50-2500 kVA | TRAFON"
      description="Predaj olejových a suchých distribučných transformátorov 50 – 2 500 kVA. Dodávka na Slovensko, servis a opravy. Aj pre fotovoltiku."
      path="https://www.trafon.sk/transformatory"
      keywords="predaj transformátorov, olejový transformátor, suchý transformátor, distribučný transformátor, FV transformátor"
    />
    <Breadcrumbs items={[{ label: "Transformátory" }]} />
    <PageHero
      eyebrow="Predaj a servis"
      title="Predaj transformátorov"
      subtitle="Olejové aj suché distribučné transformátory v rozsahu 50 – 2 500 kVA. Pre priemysel, fotovoltiku aj nemocničné objekty. Komplet servis a opravy."
    />

    <section className="py-16">
      <div className="container-page max-w-5xl">
        <h2 className="font-display text-3xl font-bold text-primary mb-6">Typy transformátorov</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Olejové", d: "Hermetické a expanzné nádoby, výkon 100 – 2 500 kVA. Štandard pre kioskové trafostanice." },
            { t: "Suché živicové", d: "Bezúdržbové, nehorľavé. Pre nemocnice, dátové centrá, výškové budovy." },
            { t: "FV transformátory", d: "Dvojvinuté, odolné voči harmonickým, pre fotovoltické elektrárne." },
          ].map((c) => (
            <Card key={c.t} className="border-border/60">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold text-primary mb-2">{c.t}</h3>
                <p className="text-sm text-foreground/80">{c.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-secondary/40">
      <div className="container-page max-w-4xl">
        <h2 className="font-display text-3xl font-bold text-primary mb-6">Štandardné výkony a parametre</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse bg-card rounded-lg overflow-hidden">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="text-left p-3">Výkon (kVA)</th>
                <th className="text-left p-3">Napätie (kV)</th>
                <th className="text-left p-3">Typ chladenia</th>
                <th className="text-left p-3">Použitie</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["50 – 250", "22 / 0,4", "ONAN", "Malé prevádzky, predajne"],
                ["400 – 630", "22 / 0,4", "ONAN", "Štandardné výrobné haly"],
                ["800 – 1250", "22 / 0,4", "ONAN", "Väčší priemysel, logistika"],
                ["1600 – 2500", "22 / 0,4", "ONAN / ONAF", "Výrobné závody, FVE"],
              ].map((r, i) => (
                <tr key={i} className="border-t border-border">
                  {r.map((c, j) => (
                    <td key={j} className="p-3 text-foreground/85">{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container-page max-w-4xl">
        <h2 className="font-display text-3xl font-bold text-primary mb-4">Servis a opravy existujúcich transformátorov</h2>
        <p className="text-foreground/85 leading-relaxed mb-3">
          Pre transformátory, ktoré už máte v prevádzke, zabezpečíme kompletný servis: kontrolu prepínača odbočiek,
          výmenu a regeneráciu oleja, sušenie izolácie, opravu priechodiek a v prípade potreby aj prevíjanie
          vinutia v autorizovanom servisnom centre.
        </p>
      </div>
    </section>

    <FAQSection items={faqs} />

    <section id="kontakt" className="py-16 bg-secondary/40">
      <div className="container-page max-w-2xl">
        <h2 className="font-display text-3xl font-bold text-primary mb-3 text-center">
          Dopytujte transformátor
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Napíšte nám požadovaný výkon (kVA), napäťovú hladinu a termín — pripravíme cenovú ponuku.
        </p>
        <ContactForm />
      </div>
    </section>
  </>
);

export default Transformatory;

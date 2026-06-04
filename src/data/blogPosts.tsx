import { ReactNode } from "react";

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string;
}

export interface BlogPostFull extends BlogPostMeta {
  render: () => ReactNode;
}

const Table = ({ headers, rows }: { headers: string[]; rows: (string | ReactNode)[][] }) => (
  <div className="overflow-x-auto my-6">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-secondary">
          {headers.map((h, i) => (
            <th key={i} className="text-left p-3 border border-border font-semibold">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="p-3 border border-border align-top">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const blogPosts: BlogPostFull[] = [
  {
    slug: "cena-trafostanice",
    title: "Koľko stojí trafostanica na kľúč? Reálne ceny 2024",
    description:
      "Zistite reálne ceny trafostaníc na Slovensku. Kioskové, murované, pre FVE. Koľko zaplatíte za projekt, montáž a revízie? Bezplatná kalkulácia.",
    excerpt:
      "Zistite reálne ceny trafostaníc na Slovensku. Kioskové, murované, pre FVE. Koľko zaplatíte za projekt, montáž a revízie? Bezplatná kalkulácia.",
    date: "2024-09-15",
    readTime: "6 minút",
    category: "Odborné rady",
    keywords:
      "cena trafostanice, koľko stojí trafostanica, trafostanica na kľúč cena, kiosková trafostanica cena",
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
          každá developerská stavba má iné požiadavky.
        </p>

        <h2>Orientačné ceny trafostaníc na Slovensku (2024)</h2>
        <Table
          headers={["Typ trafostanice", "Orientačná cena", "Výkon"]}
          rows={[
            ["Kiosková betónová (štandard)", "30 000 – 60 000 €", "do 630 kVA"],
            ["Kiosková (vyšší výkon)", "55 000 – 90 000 €", "630 – 1 000 kVA"],
            ["Murovaná trafostanica", "80 000 – 150 000 €", "1 000+ kVA"],
            ["Pre fotovoltaickú elektráreň", "45 000 – 120 000 €", "podľa výkonu FVE"],
            ["Priemyselný park / developer", "Na dopyt", "2+ MVA"],
          ]}
        />

        <h2>Čo je zahrnuté v cene „trafostanica na kľúč"?</h2>
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
        </p>

        <h2>Chcete presné číslo pre váš projekt?</h2>
        <p>
          Kontaktujte nás. Do 48 hodín vám pripravíme nezáväznú cenovú analýzu. Bez obchodného tlaku, bez skrytých
          podmienok.
        </p>
      </>
    ),
  },
  {
    slug: "trafostanica-pre-fotovoltaiku",
    title: "Trafostanica pre fotovoltaiku — čo potrebujete vedieť pred projektom",
    description:
      "Chcete FVE nad 1 MWp? Bez VN trafostanice to nepôjde. Zistite čo treba riešiť skôr než zadáte projekt — aby vás nič nezdržalo a nepredražilo.",
    excerpt:
      "Chcete FVE nad 1 MWp? Bez VN trafostanice to nepôjde. Zistite čo treba riešiť skôr než zadáte projekt.",
    date: "2024-09-22",
    readTime: "7 minút",
    category: "Odborné rady",
    keywords: "trafostanica pre FVE, trafostanica pre fotovoltaiku, VN trafostanica FVE, pripojenie FVE distribútor",
    render: () => (
      <>
        <p className="lead">
          Podpísali ste zmluvu s investorom. EPC dodávateľ má harmonogram. Stavebné povolenie beží. A potom niekto
          povie vetu, ktorú nikto nechcel počuť: <em>„Na takúto FVE potrebujete vlastnú trafostanicu."</em>
        </p>
        <p>
          Projekt sa zastaví. Termíny sa posúvajú. Náklady rastú. Pritom to nebolo nutné — stačilo o tom vedieť skôr.
        </p>

        <h2>Kedy FVE potrebuje vlastnú trafostanicu?</h2>
        <p>
          Krátka odpoveď: takmer vždy, keď idete nad 250 kWp na jednom mieste. Pri strešnej FVE nad halou s výkonom nad
          500 kWp alebo zemnej FVE nad 1 MWp počítajte s vlastnou VN trafostanicou od začiatku projektu.
        </p>

        <h2>Čo VN trafostanica pre FVE robí?</h2>
        <p>
          Panely produkujú jednosmerný prúd, striedač ho mení na 400 V AC. Trafostanica transformuje 400 V NN na 22 kV
          VN — a tu distribútor preberá vašu výrobu. Bez toho nie je pripojenie.
        </p>

        <h2>Aké typy trafostaníc sa používajú pre FVE?</h2>
        <Table
          headers={["Typ trafostanice", "Typický výkon FVE", "Poznámka"]}
          rows={[
            ["Kiosková betónová (1 trafo)", "do 2 MWp", "Najčastejšie riešenie, rýchla montáž"],
            ["Kiosková s 2 transformátormi", "2 – 5 MWp", "Redundancia, dlhšia dodacia lehota"],
            ["Kontajnerová trafostanica", "500 kWp – 3 MWp", "Vhodná pre dočasné alebo remote projekty"],
            ["Murovaná trafostanica", "5+ MWp", "Väčšie projekty, dlhšie povolenia"],
          ]}
        />

        <h2>5 vecí, ktoré musia byť jasné skôr než zadáte projekt</h2>
        <ol>
          <li><strong>Pripojovací bod a vzdialenosť od VN siete</strong> — určuje dĺžku kabeláže a cenu.</li>
          <li><strong>Výkon FVE a očakávaná špička výroby</strong> — určuje potrebný výkon transformátora.</li>
          <li><strong>Jednosmerné alebo obojsmerné pripojenie</strong> — rozdielne schémy trafostanice.</li>
          <li><strong>Požiadavky distribútora na ochrany a meranie</strong> — TRAFON komunikuje priamo s nimi.</li>
          <li><strong>Reálny harmonogram 4 – 7 mesiacov</strong> — kto sľubuje menej, niečo zatajuje.</li>
        </ol>

        <h2>Koľko stojí trafostanica pre FVE?</h2>
        <Table
          headers={["Výkon FVE", "Trafostanica (orientačne)", "Čo je zahrnuté"]}
          rows={[
            ["do 500 kWp", "28 000 – 45 000 €", "Projekt, dodávka, montáž, revízia"],
            ["500 kWp – 1 MWp", "40 000 – 70 000 €", "Vrátane kenotrón. merania a OPP"],
            ["1 – 3 MWp", "65 000 – 120 000 €", "Možná redundancia, diaľkové ovládanie"],
            ["3 MWp+", "Na dopyt", "Väčšie projekty individuálne"],
          ]}
        />
        <p>V cene nie sú: zemné práce, kabeláž od FVE k trafostanici a samotná prípojka.</p>

        <h2>Najčastejšie chyby pri plánovaní trafostanice pre FVE</h2>
        <ul>
          <li>Zadať projekt EPC dodávateľovi bez vyjadrenia distribútora</li>
          <li>Podceniť výkon transformátora</li>
          <li>Zabudnúť na OOPP, odstavovací plán a pravidelné revízie</li>
          <li>Nezabezpečiť prístupovú cestu k trafostanici</li>
          <li>Vybrať dodávateľa podľa najnižšej ceny bez referencií</li>
        </ul>

        <h2>Prečo TRAFON pre FVE trafostanicu?</h2>
        <p>
          Pretože sme to už robili. Pre strešné FVE, zemné parky, priemyselné haly. Vieme čo chce SSD, ZSD aj VSD. A
          po odovzdaní nasleduje <strong>6 rokov servisu ZDARMA</strong>.
        </p>
      </>
    ),
  },
  {
    slug: "kenotronove-meranie-vn-kablov",
    title: "Kenotrónové meranie VN káblov — čo to je a prečo ho nesmiete preskočiť",
    description:
      "Kenotrónové meranie odhaľuje poruchy izolácie VN káblov skôr než spôsobia haváriu. Čo to je, kedy je povinné a čo sa stane bez neho.",
    excerpt:
      "Kenotrónové meranie odhaľuje poruchy izolácie VN káblov skôr než spôsobia haváriu. Kedy je povinné a čo sa stane bez neho.",
    date: "2024-09-28",
    readTime: "5 minút",
    category: "Technické poradenstvo",
    keywords: "kenotrónové meranie, VLF skúška, meranie VN káblov, revízia VN kábla",
    render: () => (
      <>
        <p className="lead">
          Stavba je hotová. Trafostanica stojí. Dokumentácia podpísaná. A technik príde a povie: ešte treba kenotrónové
          meranie.
        </p>

        <h2>Čo je kenotrónové meranie?</h2>
        <p>
          Kenotrónové meranie — odborne VLF skúška (Very Low Frequency) — je diagnostická metóda, ktorá testuje
          integritu izolácie VN káblov pomocou vysokého striedavého napätia s veľmi nízkou frekvenciou (0,1 Hz).
        </p>
        <p>
          Jednoducho: kábel sa zaťaží napätím vyšším než v normálnej prevádzke. Ak izolácia vydrží — kábel je v
          poriadku. Ak nie — porucha sa prejaví teraz, v kontrolovaných podmienkach.
        </p>

        <h2>Prečo 0,1 Hz a nie klasických 50 Hz?</h2>
        <p>
          Klasická skúška na 50 Hz by vyžadovala obrovské transformátory. VLF metóda dosahuje rovnaký diagnostický
          efekt pri zlomku energie a prenosných prístrojoch.
        </p>

        <h2>Kedy je kenotrónové meranie povinné?</h2>
        <ol>
          <li>Pri uvádzaní novej trafostanice do prevádzky (STN 33 2000-6-61)</li>
          <li>Po oprave alebo výmene VN kábla</li>
          <li>Po havárii alebo elektrickom prieboji na VN úseku</li>
          <li>Pri periodickej revízii trafostanice (1× za 4 – 5 rokov)</li>
          <li>Pred predajom alebo prevodom trafostanice</li>
        </ol>
        <p><strong>Bez tohto merania distribútor nepripojí trafostanicu k sieti. Bod.</strong></p>

        <h2>Ako prebieha meranie v praxi?</h2>
        <ol>
          <li>Vypnutie a odistenie VN úseku — bezpečnostné zaistenie pracoviska</li>
          <li>Pripojenie meracieho prístroja (napr. Megger VLF SIN-45)</li>
          <li>Testovací protokol: napätie až 3× U₀, čas 60 minút</li>
          <li>Automatické zaznamenanie výsledkov do elektronického protokolu</li>
          <li>Vydanie skúšobného protokolu — povinný doklad pre revízneho technika</li>
        </ol>

        <h2>Čo sa stane bez kenotrónového merania?</h2>
        <p>
          Krátka odpoveď: distribútor vám trafostanicu nepripojí. Dlhšia: ak nekvalitná izolácia VN kábla zlyhá počas
          prevádzky — ide o haváriu. Odstavenie výroby, poškodenie zariadení, riziko zranenia osôb a pokuty.
        </p>

        <h2>TRAFON a kenotrónové meranie</h2>
        <p>
          Kenotrónové meranie je súčasťou každej trafostanice, ktorú TRAFON odovzdáva — ako štandard, nie príplatok.
          Pre partnerov vykonávame skúšky aj na existujúcich kábloch. Prístroj Megger VLF SIN-45 je súčasťou nášho
          vybavenia.
        </p>

        <h2>Časté otázky</h2>
        <h3>Kto môže vykonať kenotrónové meranie?</h3>
        <p>
          Iba odborne spôsobilá osoba podľa vyhlášky 508/2009 Z.z. s rozsahom pre VN zariadenia. TRAFON má vlastných
          certifikovaných technikov.
        </p>
        <h3>Ako dlho trvá meranie?</h3>
        <p>Zvyčajne 4 – 8 hodín vrátane zabezpečenia pracoviska a vydania protokolu.</p>
      </>
    ),
  },
  {
    slug: "revizia-trafostanice-ako-casto",
    title: "Revízia trafostanice — čo kontrolujú, ako často a čo hrozí bez nej",
    description:
      "Kedy je revízia trafostanice povinná a čo sa kontroluje? Normy STN, intervaly a čo riskujete, ak to vynecháte. Kompletný prehľad.",
    excerpt:
      "Kedy je revízia trafostanice povinná a čo sa kontroluje? Normy STN, intervaly a čo riskujete bez platnej revízie.",
    date: "2024-10-05",
    readTime: "6 minút",
    category: "Odborné rady",
    keywords: "revízia trafostanice, periodická revízia VN, STN 33 1500, revízny technik VN",
    render: () => (
      <>
        <p className="lead">
          Trafostanica funguje. Roky. Ticho, spoľahlivo, bez povšimnutia. Až kým nefunguje. Revízia trafostanice nie je
          byrokracia — je to jediná vec, ktorá odlišuje stanicu, ktorá drží 30 rokov, od tej, ktorá odstaví výrobu v
          najhorší možný čas.
        </p>

        <h2>Aké revízie trafostanice zákon vyžaduje?</h2>
        <Table
          headers={["Typ revízie", "Interval", "Základ v norme"]}
          rows={[
            ["Východisková revízia", "Pri uvedení do prevádzky (jednorazovo)", "STN 33 2000-6-61"],
            ["Periodická revízia — vonkajšie prostredie", "1× za 4 roky", "STN 33 1500"],
            ["Periodická revízia — vnútorné prostredie", "1× za 5 rokov", "STN 33 1500"],
            ["Očakávaná prehliadka", "1× ročne (odporúčanie)", "STN EN 50110-1"],
            ["Revízia po oprave alebo poruche", "Pred opätovným spustením", "Vyhláška 508/2009"],
          ]}
        />

        <h2>Čo sa pri revízii kontroluje?</h2>
        <ul>
          <li>Stavebná časť — steny, strecha, ventilácia, uzamykanie, bezpečnostné tabuľky</li>
          <li>Stav transformátora — hladina oleja, uzemnenie, korózia, priechodky</li>
          <li>VN a NN rozvádzače — izolátory, spájacie prvky, oteplovacie merania</li>
          <li>Uzemňovacia sústava — odpor uzemnenia v predpísaných hodnotách</li>
          <li>Termovízne meranie — odhaľuje prechodové odpory skôr než sú viditeľné</li>
          <li>Meracie transformátory a elektromery — správnosť zapojenia, plombovanie</li>
          <li>OOPP — galoše, rukavice, štít, skúšačka VN, hasiaci prístroj</li>
        </ul>

        <h2>Čo riskujete bez platnej revízie?</h2>
        <ol>
          <li>Pokuta od SÚIP — až do 33 000 €</li>
          <li>Anulovanie poistnej zmluvy pri škode</li>
          <li>Trestná zodpovednosť pri úrazoch alebo požiari</li>
          <li>Odstavenie zariadenia distribútorom</li>
          <li>Zvýšené riziko havárie</li>
        </ol>

        <h2>6-ročný servis TRAFON — čo obsahuje</h2>
        <p>
          Každá trafostanica postavená firmou TRAFON dostáva 6-ročný servisný balík <strong>ZDARMA</strong> v hodnote
          8 590 €:
        </p>
        <ul>
          <li>Očakávaná ročná prehliadka vrátane termovízneho merania</li>
          <li>Periodická revízia podľa STN v predpísanom intervale</li>
          <li>Písomné protokoly a dokumentácia</li>
          <li>Priama komunikácia s distribútorom</li>
          <li>Pohotovostný kontakt pre havarijné situácie</li>
        </ul>

        <h2>Časté otázky</h2>
        <h3>Môže revíziu vykonať akýkoľvek elektrikár?</h3>
        <p>
          Nie. Revízia VN zariadení vyžaduje odborne spôsobilú osobu podľa vyhlášky 508/2009 Z.z. — revízny technik
          VN. TRAFON má vlastných certifikovaných technikov.
        </p>
        <h3>Platí stará revízia pri zmene majiteľa?</h3>
        <p>Nie. Zmena prevádzkovateľa = nová východisková revízia pred spustením.</p>
      </>
    ),
  },
  {
    slug: "vystavba-trafostanice-kluc-krok-za-krokom",
    title: "Ako prebieha výstavba trafostanice na kľúč? Krok za krokom",
    description:
      "Od prvej konzultácie po odovzdanie kľúča — pozrite sa presne ako prebieha realizácia trafostanice. Harmonogram, kto čo robí a čo od vás potrebujeme.",
    excerpt:
      "Od prvej konzultácie po odovzdanie kľúča — presný harmonogram výstavby trafostanice. Kto čo robí a koľko to trvá.",
    date: "2024-10-12",
    readTime: "7 minút",
    category: "Odborné rady",
    keywords: "výstavba trafostanice, trafostanica na kľúč, harmonogram trafostanica, projekt trafostanica",
    render: () => (
      <>
        <p className="lead">
          Keď zákazník prvýkrát volá ohľadne trafostanice, najčastejšia otázka nie je „koľko to stojí". Je to:
          „Ako dlho to trvá a čo budeme riešiť?"
        </p>

        <h2>Fáza 0 — Konzultácia a predbežný návrh (1 týždeň)</h2>
        <p>Začína telefonátom alebo emailom. Potrebujeme vedieť:</p>
        <ul>
          <li>Lokalita a typ objektu (hala, FVE, developer, iný)</li>
          <li>Odhadovaný príkon alebo výkon FVE v kWp/MWp</li>
          <li>Či už majú Vyjadrenie distribútora k možnosti pripojenia</li>
          <li>Požadovaný termín uvedenia do prevádzky</li>
        </ul>
        <p>Predbežný návrh a orientačnú cenu pripravíme do 48 hodín.</p>

        <h2>Fáza 1 — Projektová dokumentácia (4 – 6 týždňov)</h2>
        <ul>
          <li>Technický návrh — typ, výkon transformátora, schéma zapojenia</li>
          <li>Stavebná časť — základy, skelet, ventilácia, prístupové cesty</li>
          <li>VN a NN schéma — rozvádzače, meranie, ochrany, uzemnenie</li>
          <li>Komunikácia so ZSD/SSD/VSD</li>
        </ul>

        <h2>Fáza 2 — Povolenia a inžiniering (4 – 8 týždňov)</h2>
        <ul>
          <li>Stavebné povolenie na trafostanicu</li>
          <li>Súhlas distribútora s projektom</li>
          <li>Koordinácia s pozemkovým úradom pri podzemných kábloch</li>
          <li>Príprava dokumentácie pre kolaudáciu</li>
        </ul>

        <h2>Fáza 3 — Dodávka zariadení (2 – 4 týždne)</h2>
        <p>
          Betónový skelet — prefabrikát z overeného producenta. Transformátor — olejový alebo suchý podľa projektu. VN
          a NN rozvádzače — Schneider Electric, ABB, Siemens alebo Ormazabal.
        </p>

        <h2>Fáza 4 — Montáž na stavenisku (2 – 4 týždne)</h2>
        <ul>
          <li>Príprava základovej dosky</li>
          <li>Osadenie betónového skeletu (1 – 2 dni)</li>
          <li>Inštalácia transformátora a rozvádzačov</li>
          <li>Kabeláž VN a NN vrátane zemných prác</li>
          <li>Inštalácia meraní, ochrán a uzemnenia</li>
        </ul>

        <h2>Fáza 5 — Revízia, kenotrónové meranie a kolaudácia</h2>
        <ul>
          <li>Východisková revízia podľa STN 33 2000-6-61</li>
          <li>Kenotrónové meranie VN káblov (VLF skúška) — povinné</li>
          <li>Protokol pre distribútora</li>
          <li>Kolaudácia stavby</li>
        </ul>

        <h2>Fáza 6 — Pripojenie distribútorom a spustenie</h2>
        <p>Posledný krok — a prvý, ktorý nie je v našich rukách. Distribútor má zákonný čas na realizáciu pripojenia.</p>

        <h2>Celkový čas od prvého hovoru po spustenie</h2>
        <Table
          headers={["Fáza", "Trvanie", "Kto to robí"]}
          rows={[
            ["Konzultácia + návrh", "1 týždeň", "TRAFON"],
            ["Projektová dokumentácia", "4 – 6 týždňov", "TRAFON"],
            ["Povolenia a inžiniering", "4 – 8 týždňov", "TRAFON + úrady"],
            ["Dodávka zariadení", "2 – 4 týždne", "TRAFON + výroba"],
            ["Montáž na stavenisku", "2 – 4 týždne", "TRAFON"],
            ["Revízia + kolaudácia", "1 – 2 týždne", "TRAFON + inšpekcia"],
            ["Pripojenie distribútorom", "2 – 6 týždňov", "Distribútor"],
            ["CELKOM (reálny odhad)", "3 – 7 mesiacov", "—"],
          ]}
        />
        <p>Kto vám sľubuje trafostanicu za 6 týždňov — pýtajte sa, čo z tohto zoznamu vynecháva.</p>
      </>
    ),
  },
  {
    slug: "suchy-vs-olejovy-transformator",
    title: "Suchý vs. olejový transformátor — ktorý je pre vás lepší?",
    description:
      "Nevyznáte sa v rozdiele medzi suchým a olejovým transformátorom? Vysvetlíme kedy použiť každý typ, aké sú náklady a čo preferujú distribútori.",
    excerpt:
      "Suchý alebo olejový transformátor? Kedy ktorý použiť, koľko stoja a čo preferujú slovenskí distribútori.",
    date: "2024-10-19",
    readTime: "6 minút",
    category: "Technické poradenstvo",
    keywords: "suchý transformátor, olejový transformátor, transformátor 22kV, výber transformátora",
    render: () => (
      <>
        <p className="lead">
          Každý, kto riešil trafostanicu, dostal v nejakom bode túto otázku: chcete suchý alebo olejový transformátor?
          A väčšina ľudí v tej chvíli zistila, že to nevie.
        </p>

        <h2>Ako fungujú — základný princíp</h2>
        <p>
          Obidva typy menia napätie pomocou magnetického jadra a vinutia. Rozdiel je v tom, ako chladia teplo:
        </p>
        <ul>
          <li><strong>Olejový transformátor:</strong> vinutia v transformátorovom oleji (minerálny alebo syntetický), ktorý chladí a izoluje.</li>
          <li><strong>Suchý transformátor:</strong> vinutia izolované epoxidovou živicou alebo vzduchom — bez oleja.</li>
        </ul>

        <h2>Kedy použiť olejový transformátor?</h2>
        <ul>
          <li>Pre vonkajšie trafostanice a kiosky</li>
          <li>Pri vyšších výkonoch (nad 1 MVA)</li>
          <li>Kde je priorita cena</li>
          <li>Pri FVE parkoch a priemyselných inštaláciách v otvorenom prostredí</li>
        </ul>

        <h2>Kedy použiť suchý transformátor?</h2>
        <ul>
          <li>V budovách — obchodné centrá, nemocnice, hotely, kancelárske budovy</li>
          <li>Kde je požiarne riziko — bez oleja nemá čo horieť</li>
          <li>V prostrediach s obmedzeným vetraním alebo v povodňových oblastiach</li>
          <li>Pre mestskú infraštruktúru a verejné objekty</li>
        </ul>

        <h2>Porovnanie — prehľadná tabuľka</h2>
        <Table
          headers={["Parameter", "Olejový transformátor", "Suchý transformátor"]}
          rows={[
            ["Cena (rovnaký výkon)", "Nižšia", "Vyššia o 20 – 40 %"],
            ["Umiestnenie", "Vonkajšie, kiosky, outdoor", "Vnútorné priestory"],
            ["Požiarne riziko", "Nízke (syntetický olej: takmer nulové)", "Minimálne (bez oleja)"],
            ["Údržba", "Kontrola oleja, filter, tesnenia", "Takmer bezúdržbový"],
            ["Životnosť", "30 – 40 rokov", "25 – 35 rokov"],
            ["Hlučnosť", "Nižšia", "Mierne vyššia"],
            ["Vhodný pre FVE", "Áno (štandard)", "Len v uzatvorených objektoch"],
            ["Preferencia distribútorov SK", "Bezproblémovo akceptovaný", "Akceptovaný, niekde obmedzenia"],
          ]}
        />

        <h2>Aké sú náklady — reálne čísla</h2>
        <p>Orientačné ceny za samotný transformátor (bez inštalácie):</p>
        <Table
          headers={["Výkon", "Olejový (€)", "Suchý (€)"]}
          rows={[
            ["250 kVA", "5 000 – 9 000", "8 000 – 14 000"],
            ["630 kVA", "9 000 – 16 000", "14 000 – 24 000"],
            ["1 000 kVA", "14 000 – 24 000", "22 000 – 38 000"],
            ["1 600 kVA", "22 000 – 36 000", "Na dopyt"],
          ]}
        />

        <h2>Aké je odporúčanie TRAFON?</h2>
        <p>
          Pre 90 % projektov na Slovensku — kiosková trafostanica vonku — odporúčame olejový transformátor so
          syntetickým olejom (trieda FR3 alebo Midel). Je lacnejší, spoľahlivejší v našich klimatických podmienkach a
          dlhšie vydrží.
        </p>
        <p>
          Pre objekty v budovách a priestory s povinnými požiarnymi opatreniami — suchý transformátor je jediná správna
          voľba.
        </p>
      </>
    ),
  },
  {
    slug: "povolenia-trafostanica-slovensko",
    title: "Povolenia pre trafostanicu na Slovensku — čo vybavíte sami a čo za vás",
    description:
      "Aké povolenia potrebujete pre trafostanicu? Kompletný zoznam dokumentov, úradov a časov. Čo vybaví TRAFON za vás a koľko to celé trvá.",
    excerpt:
      "Aké povolenia potrebujete pre trafostanicu? Kompletný zoznam dokumentov, úradov a časov.",
    date: "2024-10-26",
    readTime: "6 minút",
    category: "Odborné rady",
    keywords: "povolenia trafostanica, stavebné povolenie trafostanica, vyjadrenie distribútora, kolaudácia trafostanice",
    render: () => (
      <>
        <p className="lead">
          Byrokracia. Jedno slovo, ktoré spomalí viac investícií než akýkoľvek technický problém. Trafostanica na
          Slovensku si vyžaduje viacero povolení — ak neviete čo, od koho a v akom poradí, strácate mesiace.
        </p>

        <h2>Zoznam povolení pre trafostanicu</h2>
        <Table
          headers={["Povolenie / dokument", "Kto vydáva", "Typický čas"]}
          rows={[
            ["Vyjadrenie k možnosti pripojenia", "Distribútor (SSD/ZSD/VSD)", "4 – 8 týždňov"],
            ["Pripojovacie podmienky", "Distribútor", "Súčasne s vyjadrením"],
            ["Projektová dokumentácia EL", "Projektant (TRAFON)", "4 – 6 týždňov"],
            ["Stavebné povolenie", "Stavebný úrad", "4 – 8 týždňov"],
            ["Súhlas distribútora s projektom", "Distribútor", "4 – 6 týždňov"],
            ["Východisková revízia EZ", "Revízny technik VN", "Po montáži"],
            ["Kenotrónové meranie VN káblov", "Odborne spôsobilá osoba", "Po montáži"],
            ["Protokol pre pripojenie", "TRAFON + revízor", "Po revízii"],
            ["Kolaudačné rozhodnutie", "Stavebný úrad", "2 – 4 týždne"],
            ["Zmluva o pripojení", "Distribútor", "Po kolaudácii"],
          ]}
        />

        <h2>Najčastejšie chyby</h2>
        <ol>
          <li>Nezadať Vyjadrenie distribútora hneď na začiatku</li>
          <li>Kúpiť pozemok bez overenia možnosti VN pripojenia</li>
          <li>Projektová dokumentácia, ktorá nezohľadňuje podmienky konkrétneho distribútora</li>
          <li>Začať montáž pred právoplatným stavebným povolením</li>
          <li>Vynechať kenotrónové meranie — distribútor bez neho nepripojí</li>
        </ol>

        <h2>Čo vybavujeme za vás my</h2>
        <p>Keď si zvolíte TRAFON ako dodávateľa na kľúč, toto je naša práca — nie vaša:</p>
        <ul>
          <li>Žiadosť o Vyjadrenie k možnosti pripojenia</li>
          <li>Komunikácia s distribútorom po celú dobu projektu</li>
          <li>Projektová dokumentácia pre stavebné povolenie</li>
          <li>Súhlas distribútora s projektom</li>
          <li>Východisková revízia + kenotrónové meranie</li>
          <li>Dokumentácia pre kolaudáciu</li>
          <li>Koordinácia s úradmi pri zmenách</li>
        </ul>
        <p>Vy riešite: financovanie a podpis zmluvy. Zvyšok je na nás.</p>

        <h2>Koľko trvá celý povoľovací proces?</h2>
        <p>
          Reálny čas pre štandardný slovenský projekt: <strong>3 až 5 mesiacov</strong> len na povolenia — ešte pred
          začiatkom montáže. Preto hovoríme: začnite s konzultáciou čo najskôr.
        </p>
      </>
    ),
  },
  {
    slug: "chyby-pri-vybere-dodavatela-trafostanice",
    title: "6 chýb pri výbere dodávateľa trafostanice — a ako sa im vyhnúť",
    description:
      "Vyberáte dodávateľa trafostanice? 6 chýb, ktoré stoja peniaze, termíny a nervy. Praktický návod od ľudí, ktorí trafostanice stavajú.",
    excerpt:
      "6 chýb, ktoré stoja peniaze, termíny a nervy. Praktický návod ako vybrať dodávateľa trafostanice.",
    date: "2024-11-02",
    readTime: "6 minút",
    category: "Odborné rady",
    keywords: "výber dodávateľa trafostanice, dodávateľ trafostanica, porovnanie ponúk trafostanica",
    render: () => (
      <>
        <p className="lead">
          Priemerne 3 ponuky dostane investor pred výberom dodávateľa trafostanice. Jedna je najdrahšia. Jedna
          najlacnejšia. A jedna je tá správna — ale nie vždy tá, ktorú si vyberie.
        </p>

        <h2>Chyba 1 — Rozhodovať sa len podľa ceny</h2>
        <p>
          Trafostanica je infraštruktúra na 30 – 40 rokov. Rozdiel 5 000 € v cene dnes môže znamenať haváriu alebo
          nevyhovujúcu dokumentáciu o 5 rokov. Pýtajte sa: <em>„čo za tú cenu dostanem a čo mi chýba"</em>.
        </p>

        <h2>Chyba 2 — Nevybaviť si Vyjadrenie distribútora pred podpisom zmluvy</h2>
        <p>
          Zákazník podpíše zmluvu, zaplatí zálohu. A potom zistí, že distribútor nemá v lokalite voľnú kapacitu. Pred
          podpisom akejkoľvek zmluvy požiadajte distribútora o Vyjadrenie k možnosti pripojenia. Je to bezplatné a trvá
          4 – 8 týždňov.
        </p>

        <h2>Chyba 3 — Podceniť význam referencií</h2>
        <p>
          „Robíme trafostanice 15 rokov." Krásna veta. Ale kde sú referencie v rovnakej kategórii ako váš projekt? FVE
          trafostanica má iné požiadavky než priemyselná. Pýtajte sa: <em>„Môžete mi dať kontakt na zákazníka s
          podobným projektom?"</em>
        </p>

        <h2>Chyba 4 — Ignorovať dodacie lehoty zariadení</h2>
        <p>
          Transformátory a VN rozvádzače nie sú na sklade. Dodacie lehoty pri niektorých typoch sú 12 – 20 týždňov.
          Dodávateľ, ktorý sľubuje trafostanicu za 6 týždňov bez overenia skladov — klame alebo nevie.
        </p>

        <h2>Chyba 5 — Podpisovať zmluvy bez jasných penalizácií</h2>
        <p>
          Trafostanica oneskorená o 2 mesiace = 2 mesiace bez pripojeného odberu alebo FVE výroby. Zmluva musí
          obsahovať jasné termíny, zodpovednosť za každú fázu a sankcie za neplnenie.
        </p>

        <h2>Chyba 6 — Zabudnúť na servis po odovzdaní</h2>
        <p>
          Montáž sa skončí. Kľúč sa odovzdá. Dodávateľ odíde. A potom o rok príde revízia, alebo porucha. Kto príde?
          Kto má dokumentáciu? Pýtajte sa pred podpisom: <em>„Aká je vaša servisná podpora po odovzdaní?"</em>
        </p>

        <h2>Prečo TRAFON?</h2>
        <p>
          Po každej trafostanici, ktorú odovzdáme, nasleduje <strong>6 rokov servisu ZDARMA</strong> v hodnote 8 590 €.
          Nie ako marketingový trik — ako záväzok, že stojíme za svojou prácou.
        </p>
      </>
    ),
  },
  {
    slug: "trafostanica-priemyselny-park-developer",
    title: "Trafostanica pre priemyselný park alebo developera — na čo myslieť od začiatku",
    description:
      "Developeri robia rovnakú chybu — trafostanicu pridajú na koniec projektového plánu. Pozrite čo overiť ešte pred kúpou pozemku.",
    excerpt:
      "Developeri robia rovnakú chybu — trafostanicu pridajú na koniec plánu. Čo overiť ešte pred kúpou pozemku.",
    date: "2024-11-09",
    readTime: "6 minút",
    category: "Odborné rady",
    keywords: "trafostanica priemyselný park, trafostanica developer, VN kapacita pozemok, infraštruktúra priemyselný areál",
    render: () => (
      <>
        <p className="lead">
          Developeri a investori do priemyselných areálov robia rovnakú chybu. Kupujú pozemok, zadávajú architekta,
          plánujú haly — a trafostanicu pridajú na koniec projektového plánu.
        </p>
        <p>
          Potom zistia, že distribútor nemá voľnú kapacitu. Alebo že príslušný kábel je 2 km ďaleko. Alebo že
          trafostanica potrebuje 6 mesiacov na povolenia.
        </p>

        <h2>Prečo je trafostanica prvý — nie posledný — krok</h2>
        <p>
          Každá priemyselná hala, logistické centrum alebo výrobný závod potrebuje istú kapacitu elektrickej energie.
          Táto kapacita sa dodáva cez distribučnú sieť — a tá má limity. Ak kúpite pozemok v lokalite bez voľnej VN
          kapacity, máte problém.
        </p>

        <h2>Čo overiť ešte pred kúpou pozemku</h2>
        <ol>
          <li><strong>Dostupná kapacita v lokalite</strong> — požiadajte distribútora o neformálne vyjadrenie.</li>
          <li><strong>Vzdialenosť od existujúcej VN linky</strong> — orientačne 30 000 – 60 000 €/km zemného VN kábla.</li>
          <li><strong>Možnosť etapového pripojenia</strong> — väčšie areály si možno pripájať postupne.</li>
          <li><strong>Obmedzenia podľa územného plánu</strong> — ochranné pásma VN vedení.</li>
        </ol>

        <h2>Aké typy trafostaníc používajú developeri</h2>
        <Table
          headers={["Typ projektu", "Typ trafostanice", "Typický výkon"]}
          rows={[
            ["Logistický areál (1 hala)", "Kiosková, 1 transformátor", "630 kVA – 1 MVA"],
            ["Priemyselný park (viac hál)", "Murovaná alebo kiosková 2× trafo", "1 – 4 MVA"],
            ["Dátové centrum / IT budova", "Suchý trafo, redundancia N+1", "1 – 10 MVA"],
            ["Retail park / OC", "Suchý trafo v budove", "500 kVA – 2 MVA"],
            ["Logistický hub 50 000+ m²", "Vlastná 22/110 kV odovzdávacia stanica", "10+ MVA"],
          ]}
        />

        <h2>Koľko trafostaníc potrebuje priemyselný park?</h2>
        <p>
          Závisí od celkového výkonu a od toho, či developer plánuje jedného alebo viacerých nájomcov. Častá varianta:
          jedna hlavná trafostanica pre celý areál + primárne meranie pre každého nájomcu osobitne. Toto treba
          navrhnúť už v projektovej fáze.
        </p>

        <h2>Špeciality pre developerské projekty</h2>
        <ul>
          <li>Diaľkové ovládanie a diaľkové meranie — vyžadované pri výkone nad 1 MVA</li>
          <li>Rozpadové miesto so sieťovou ochranou — povinnosť pri vlastných zdrojoch (FVE na streche)</li>
          <li>Rezervovaná kapacita — pre budúci rast areálu</li>
          <li>Meranie pre jednotlivých nájomcov — schéma navrhnutá vopred</li>
          <li>Dokumentácia pre financujúcu banku</li>
        </ul>

        <h2>Prečo začať s TRAFON skôr než kúpite pozemok</h2>
        <p>
          Ponúkame bezplatné predprojektové konzultácie pre developerov a investorov. Povedzte nám o lokalite,
          plánovanom výkone a harmonograme — dáme vám realistický obraz o možnostiach a nákladoch. Jedna konzultácia
          môže ušetriť mesiace a státisíce eur.
        </p>
      </>
    ),
  },
];

export const blogPostMetas: BlogPostMeta[] = blogPosts.map(({ render, ...meta }) => meta);

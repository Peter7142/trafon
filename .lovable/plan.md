## Analýza kľúčových slov (Semrush, databáza SK)

Pre Slovensko sú objemy nízke (technická B2B oblasť), ale relevantné a takmer bezkonkurenčné — ideálne pre rýchle rankingy:

| Kľúčové slovo | Hľadanosť/mes. | Obtiažnosť |
|---|---|---|
| trafo | 4 400 | nízka |
| transformátor | 1 300 | 11/100 |
| trafostanica | 480 | 7/100 |
| kiosková trafostanica | 20 | 0/100 |
| revízia VN, kenotrón, odborná prehliadka elektro | <10 / netrackované | — |

**Záver:** najsilnejšie ťahúne sú **„trafostanica", „transformátor", „trafo"** + lokalizácia **Bratislava / Nitra / Slovensko** a long-tail frázy ako *„trafostanica na kľúč"*, *„predaj transformátorov"*, *„revízie NN VN"*, *„servis trafostanice"*. Pre AI vyhľadávanie (Google SGE, Perplexity) sa hodia popisné, otázkovo orientované frázy.

## Plán zmien

Cieľ: prepísať H1 a podtituly tak, aby obsahovali primárne kľúčové slová + lokalitu + zámer, bez zhoršenia dizajnu. Aktualizujem aj `<title>`/meta description tam, kde to dáva zmysel pre zhodu s H1.

### 1) `src/pages/Home.tsx` — domovská stránka
- **H1** (teraz): „Trafostanica bez starostí, bez stresu, bez pokút."
- **Nový H1:** „Trafostanice a transformátory na kľúč — Bratislava, Nitra, celé Slovensko"
- Pod H1 doplniť krátky tag-line s frázami: *„Predaj, montáž, revízie NN/VN, servis a údržba trafostaníc bez starostí."*
- `index.html` `<title>`: „Trafostanice a transformátory na kľúč | TRAFON — Foton Energy"

### 2) `src/pages/Trafostanice.tsx`
- **Nový H1:** „Trafostanice na kľúč a predaj transformátorov — nové aj rekonštrukcie"
- Podtitul ostáva, doplním frázy *„kiosková trafostanica"*, *„VN/NN rozvádzače"*.

### 3) `src/pages/Sluzby.tsx`
- **Nový H1:** „Revízie, servis a údržba trafostaníc NN/VN — všetko pod jednou strechou"
- Podtitul rozšíriť o *„kenotrónové merania, odborné prehliadky, úradné skúšky"*.

### 4) `src/pages/Opravnenia.tsx`
- **Nový H1:** „Oprávnenia a osvedčenia pre elektro VN/NN — Technická inšpekcia SR"

### 5) `src/pages/Referencie.tsx`
- **Nový H1:** „Referencie — realizované trafostanice a transformátory na Slovensku"

### 6) `src/pages/ONas.tsx`
- **Nový H1:** „TRAFON — špecialisti na trafostanice a transformátory (Foton Energy s.r.o.)"

### 7) `src/pages/Kontakt.tsx`
- **Nový H1:** „Kontakt — TRAFON, Bratislava & prevádzka Nitra-Janíkovce"

### 8) Schema.org JSON-LD v `index.html`
- Aktualizovať adresu na **Ľubochnianska 4, 831 04 Bratislava** (teraz je tam ešte stará Golianovská).
- Pridať `areaServed: "SK"` a `serviceType` zoznam (Trafostanice, Transformátory, Revízie NN/VN, Servis), čo pomáha AI/Google SGE pochopiť rozsah služieb.

### 9) `public/sitemap.xml`
- Pridať absolútne URL `https://www.trafon.sk/...` namiesto relatívnych, aby ich Google rýchlejšie indexoval.

## Čo NEROBÍM
- Nemením vizuálny dizajn ani layout — len text H1/podtitulov a metadáta.
- Nepridávam nové stránky ani routy.
- Nemením funkcionalitu (AI poradca, formuláre).

Po schválení toto všetko aplikujem naraz.
// src/data/questions.ts
import type { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    title: "Učitel nečekaně oznámí, že se píše pětiminutovka. Co si v duchu pomyslíš?",
    answers: [
      { id: "1a", text: "To si dělá legraci! Začnu hlasitě protestovat, že to není spravedlivé.", temperament: "cholerik" },
      { id: "1b", text: "Nějak to dopadne! Zkusím něco opsat nebo to usmlouvám s úsměvem.", temperament: "sangvinik" },
      { id: "1c", text: "V klidu vytáhnu papír. Nic s tím nenadělám, nemá cenu se rozčilovat.", temperament: "flegmatik" },
      { id: "1d", text: "Zpanikařím. Hned přemýšlím, co všechno jsem si stihnul/a zapomenout zopakovat.", temperament: "melancholik" }
    ]
  },
  {
    id: 2,
    title: "Máte ve třídě pracovat ve skupině na projektu. Jakou roli si přirozeně vezmeš?",
    answers: [
      { id: "2a", text: "Okamžitě převezmu vedení, rozdělím úkoly a určím, jak to udělám.", temperament: "cholerik" },
      { id: "2b", text: "Bavím ostatní, házím nápady a starám se o to, aby byla dobrá nálada.", temperament: "sangvinik" },
      { id: "2c", text: "Uklidňuji situaci, dělám to, co mi ostatní přidělí, a nehádám se.", temperament: "flegmatik" },
      { id: "2d", text: "Zaměřím se na detaily, zkontroluji fakta a zadám si úkol, který udělám perfektně sám/sama.", temperament: "melancholik" }
    ]
  },
  {
    id: 3,
    title: "Někdo ze spolužáků ti omylem shodí věci ze stolu. Jak zareaguješ?",
    answers: [
      { id: "3a", text: "Vyletím! Hned mu ostře řeknu, ať kouká na cestu a sebere to.", temperament: "cholerik" },
      { id: "3b", text: "Uděláme z toho legraci, zasmějeme se tomu a společně to posbíráme.", temperament: "sangvinik" },
      { id: "3c", text: "Přejdu to bez slov, v klidu se sehnou a věci si posbíráme.", temperament: "flegmatik" },
      { id: "3d", text: "Zklamáním vzdychnu. Přemýšlím, jestli se mi něco nepoškodilo nebo nepošpinilo.", temperament: "melancholik" }
    ]
  },
  {
    id: 4,
    title: "Jak vypadá tvá příprava na velký test nebo zkoušení?",
    answers: [
      { id: "4a", text: "Učím se intenzivně na poslední chvíli. Chci mít nejlepší známku ve třídě.", temperament: "cholerik" },
      { id: "4b", text: "Přečtu si to rychle večer. Spoléhám na to, co jsem si zapamatoval/a z hodiny.", temperament: "sangvinik" },
      { id: "4c", text: "Prohlédnu si sešit v klidu před hodinou. Když to vyjde, tak to vyjde.", temperament: "flegmatik" },
      { id: "4d", text: "Mám přehledné výpisky s barvičkami. Učím se několik dní dopředu a dopodrobna.", temperament: "melancholik" }
    ]
  },
  {
    id: 5,
    title: "Plánuje se školní výlet a třída se nemůže shodnout na cíli. Co uděláš?",
    answers: [
      { id: "5a", text: "Prosazuji svůj návrh a přesvědčuji ostatní, dokud neustoupí.", temperament: "cholerik" },
      { id: "5b", text: "Navrhuji samé zábavné věci a snažím se strhnout ostatní pro akci.", temperament: "sangvinik" },
      { id: "5c", text: "Je mi to celkem jedno. Přizpůsobím se jakémukoli rozhodnutí většiny.", temperament: "flegmatik" },
      { id: "5d", text: "Promýšlím výhody a nevýhody jednotlivých míst a bojim se, aby výlet nepropršel.", temperament: "melancholik" }
    ]
  },
  {
    id: 6,
    title: "Jak trávíš o přestávkách čas ve škole?",
    answers: [
      { id: "6a", text: "Organizuji s kamoši nějakou výzvu nebo probírám sport/hry.", temperament: "cholerik" },
      { id: "6b", text: "Lítám po chodbe, povídám si s každým a bavím polovinu třídy.", temperament: "sangvinik" },
      { id: "6c", text: "Sedím v klidu na svém místě, jím svačinu nebo koukám do telefonu.", temperament: "flegmatik" },
      { id: "6d", text: "Povídám si v klidu s jedním nejlepším kamarádem nebo si připravuji věci na další hodinu.", temperament: "melancholik" }
    ]
  },
  {
    id: 7,
    title: "Když ti někdo dá zpětnou vazbu nebo kritiku na tvou práci:",
    answers: [
      { id: "7a", text: "Hned se začnu obhajovat a dokazovat, že nemají pravdu.", temperament: "cholerik" },
      { id: "7b", text: "Moc to neřeším. Chvíli mě to mrzí, ale za minutu už na to nemyslím.", temperament: "sangvinik" },
      { id: "7c", text: "Kývnu, že rozumím, a bez emoci to předělám tak, jak chtějí.", temperament: "flegmatik" },
      { id: "7d", text: "Vezmu si to hodně osobně. Dlouho nad tím přemýšlím a analyzuji své chyby.", temperament: "melancholik" }
    ]
  },
  {
    id: 8,
    title: "Jak vypadá tvůj pokoj doma?",
    answers: [
      { id: "8a", text: "Mám tam věci rozházené podle toho, co zrovna dělám, ale nesnáším, když mi v tom někdo uklízí.", temperament: "cholerik" },
      { id: "8b", text: "Často tam mám tvůrčí chaos. Uklízím, jen když musím nebo když má přijít návštěva.", temperament: "sangvinik" },
      { id: "8c", text: "Není to perfektní, ale ani tam není nepořádek. Vyhovuje mi to tak, jak to je.", temperament: "flegmatik" },
      { id: "8d", text: "Všechno má své přesné místo. Nepořádek me znervózňuje a ruší od soustředění.", temperament: "melancholik" }
    ]
  },
  {
    id: 9,
    title: "Při sportu nebo hře je pro tebe nejdůležitější:",
    answers: [
      { id: "9a", text: "Jednoznačně VYHRÁT! Porážku nesnáším.", temperament: "cholerik" },
      { id: "9b", text: "Užít si zábavu, akci a legraci s ostatními.", temperament: "sangvinik" },
      { id: "9c", text: "Zahrát si bez stresu a bez hádek o pravidla.", temperament: "flegmatik" },
      { id: "9d", text: "Dodržovat přesná pravidla a hrát férově.", temperament: "melancholik" }
    ]
  },
  {
    id: 10,
    title: "Co udělám, když slíbím kamarádovi s nečím pomoct, ale nehodí se mi to?",
    answers: [
      { id: "10a", text: "Rovnou mu řeknu, že teď nemám čas, ať to vyřeší sám.", temperament: "cholerik" },
      { id: "10b", text: "Snažím se to stihnout narychlo, i když se u toho trochu opozdím.", temperament: "sangvinik" },
      { id: "10c", text: "Pomůžu mu, i když se mi nechce – je jednodušší to udělat než odmítat.", temperament: "flegmatik" },
      { id: "10d", text: "Slib je pro mě svatý. I když se mi to nehodí, pomůžu a dám si záležet.", temperament: "melancholik" }
    ]
  },
  {
    id: 11,
    title: "Jak reaguješ na náhlou změnu plánů (např. odpadne hodina nebo trénink)?",
    answers: [
      { id: "11a", text: "Hned vymýšlím náhradní plán a organizuji ostatní.", temperament: "cholerik" },
      { id: "11b", text: "Super! Mám radost z nečekaného volna a jdu dělat cokoli zábavného.", temperament: "sangvinik" },
      { id: "11c", text: "Přijímám to neutrálně. Prostě využiji volno k odpočinku.", temperament: "flegmatik" },
      { id: "11d", text: "Trochu mě to vyvede z míry. Měl/a jsem už den naplánovaný a musím si přebudovat rozvrh.", temperament: "melancholik" }
    ]
  },
  {
    id: 12,
    title: "Když se v třídní skupině na chatu strhne hádka:",
    answers: [
      { id: "12a", text: "Zapojím se a ostře napíšu svúj názor, aby všichni věděli, jak to je.", temperament: "cholerik" },
      { id: "12b", text: "Posílám vtipné memy nebo nálepky, abych odlehčil/a atmosféru.", temperament: "sangvinik" },
      { id: "12c", text: "Chat jen pasivně čtu nebo zprávy ignoruji.", temperament: "flegmatik" },
      { id: "12d", text: "Trápí mě to. Přemýšlím, jak situaci uklidnit a narovnat vztahy.", temperament: "melancholik" }
    ]
  }
];
// Pomocná funkce pro náhodné zamíchání prvku v poli (Fisher-Yates shuffle)
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
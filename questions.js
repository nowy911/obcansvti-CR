const QUESTIONS = [
  {
    "question": "Který svátek slaví Češi i lidé po celém světě 8. března?",
    "options": {
      "A": "Den matek.",
      "B": "Den učitelů.",
      "C": "Mezinárodní den žen.",
      "D": "Mezinárodní den dětí."
    },
    "correct": "C"
  },
  {
    "question": "Kterou přílohu tradičně jedí Češi ke smaženému kaprovi v mnoha domácnostech na Štědrý večer?",
    "options": {
      "A": "Rýži.",
      "B": "Těstoviny.",
      "C": "Bramborový salát.",
      "D": "Houskové knedlíky."
    },
    "correct": "C"
  },
  {
    "question": "Kraslice je vejce, které se barví a zdobí. Kdy ženy a dívky dávají mužům kraslice?",
    "options": {
      "A": "Na Dušičky.",
      "B": "Na Nový rok.",
      "C": "Na Štědrý den.",
      "D": "Na Velikonoce."
    },
    "correct": "D"
  },
  {
    "question": "Který státní svátek se slaví v České republice na podzim?",
    "options": {
      "A": "Den obnovy samostatného českého státu.",
      "B": "Den boje za svobodu a demokracii.",
      "C": "Den upálení mistra Jana Husa.",
      "D": "Den vítězství."
    },
    "correct": "B"
  },
  {
    "question": "Velký pátek je svátek, který připomíná smrt Ježíše Krista. Ke kterému svátečnímu období patří Velký pátek?",
    "options": {
      "A": "K Velikonocům.",
      "B": "K Dušičkám.",
      "C": "K Vánocům.",
      "D": "K adventu."
    },
    "correct": "A"
  },
  {
    "question": "Památce zesnulých se v Česku lidově říká Dušičky. Je to den, kdy se podle české tradice zdobí hroby květinami, rozsvěcují se svíčky a vzpomíná se na zemřelé. Ve kterém období se slaví tento svátek?",
    "options": {
      "A": "Na jaře.",
      "B": "V létě.",
      "C": "Na podzim.",
      "D": "V zimě."
    },
    "correct": "C"
  },
  {
    "question": "Den české státnosti je také svátkem svatého Václava. Kníže Václav z rodu Přemyslovců je patronem Čech a Moravy. Kdy se slaví Den české státnosti?",
    "options": {
      "A": "V září.",
      "B": "V říjnu.",
      "C": "V dubnu.",
      "D": "V květnu."
    },
    "correct": "A"
  },
  {
    "question": "Který den si Češi obyčejně dávají vánoční dárky?",
    "options": {
      "A": "6. ledna.",
      "B": "24. prosince.",
      "C": "25. prosince.",
      "D": "26. prosince."
    },
    "correct": "B"
  },
  {
    "question": "Který z těchto svátků se připomíná v České republice v květnu?",
    "options": {
      "A": "Tři králové.",
      "B": "Svátek práce.",
      "C": "Vznik Československa.",
      "D": "Den boje za svobodu a demokracii."
    },
    "correct": "B"
  },
  {
    "question": "Jana dostala od Mikuláše, čerta a anděla balíček, ve kterém byla jablka, mandarinky, čokoláda, brambory a také drobné dárky. Kdy dostala Jana tento balíček?",
    "options": {
      "A": "6. ledna.",
      "B": "5. prosince.",
      "C": "24. prosince.",
      "D": "31. prosince."
    },
    "correct": "B"
  },
  {
    "question": "Při jízdě osobním autem mají řidič a spolujezdci podle zákona určité povinnosti. Co musí řidič a spolujezdec dodržovat?",
    "options": {
      "A": "Musí mít zapnuté pásy.",
      "B": "Musí mít zavřená přední okna.",
      "C": "Musí mít na sobě reflexní vesty.",
      "D": "Musí mít zamčené přední dveře."
    },
    "correct": "A"
  },
  {
    "question": "Paní Svobodová jezdí na kole do práce. Ve které situaci porušuje pravidla silničního provozu?",
    "options": {
      "A": "Jede na kole po chodníku.",
      "B": "Jede na kole po pravé straně silnice.",
      "C": "Jede na kole v řadě za svou kolegyní.",
      "D": "Jede na kole a dává rukou znamení o změně směru jízdy."
    },
    "correct": "A"
  },
  {
    "question": "Pan Svoboda chce řídit osobní automobil. Který typ řidičského průkazu potřebuje?",
    "options": {
      "A": "Řidičský průkaz skupiny A.",
      "B": "Řidičský průkaz skupiny B.",
      "C": "Řidičský průkaz skupiny C.",
      "D": "Řidičský průkaz skupiny D."
    },
    "correct": "B"
  },
  {
    "question": "Kolik piv s obsahem alkoholu může vypít řidič podle zákona při řízení auta v Česku?",
    "options": {
      "A": "Tři.",
      "B": "Dvě.",
      "C": "Jedno.",
      "D": "Žádné."
    },
    "correct": "D"
  },
  {
    "question": "Který dopravní prostředek má přednost před chodcem na přechodu?",
    "options": {
      "A": "Auto.",
      "B": "Tramvaj.",
      "C": "Autobus.",
      "D": "Motocykl."
    },
    "correct": "B"
  },
  {
    "question": "Paní Svobodová si koupila nový automobil. Které pojištění musí podle zákona uzavřít?",
    "options": {
      "A": "Povinné ručení.",
      "B": "Životní pojištění.",
      "C": "Úrazové pojištění.",
      "D": "Havarijní pojištění."
    },
    "correct": "A"
  },
  {
    "question": "Kdo má povinnost nosit podle zákona oblečení s reflexními prvky?",
    "options": {
      "A": "Osoba, která jde v noci v obci po chodníku.",
      "B": "Osoba, která jde ve dne v obci po chodníku.",
      "C": "Osoba, která jde v noci mimo obec po silnici.",
      "D": "Osoba, která jde ve dne mimo obec po silnici."
    },
    "correct": "C"
  },
  {
    "question": "V České republice je několik druhů dálničních známek, které se liší dobou platnosti. Který druh dálniční známky není možné koupit?",
    "options": {
      "A": "S platností 1 den.",
      "B": "S platností 10 dní.",
      "C": "S platností 30 dní.",
      "D": "S platností 90 dní."
    },
    "correct": "D"
  },
  {
    "question": "Od kolika let mohou jezdit děti po silnici na kole bez dohledu další osoby?",
    "options": {
      "A": "Od 3 let.",
      "B": "Od 6 let.",
      "C": "Od 10 let.",
      "D": "Od 18 let."
    },
    "correct": "C"
  },
  {
    "question": "Která z uvedených věcí patří k povinné výbavě osobního automobilu?",
    "options": {
      "A": "Rádio.",
      "B": "Lékárnička.",
      "C": "Destilovaná voda.",
      "D": "Nádoba na benzin."
    },
    "correct": "B"
  },
  {
    "question": "Paní Novotná vidí požár. Chce zavolat hasiče. Na které z těchto telefonních čísel zavolá?",
    "options": {
      "A": "150.",
      "B": "155.",
      "C": "156.",
      "D": "158."
    },
    "correct": "A"
  },
  {
    "question": "Které telefonní číslo má zdravotnická záchranná služba?",
    "options": {
      "A": "150.",
      "B": "155.",
      "C": "156.",
      "D": "158."
    },
    "correct": "B"
  },
  {
    "question": "Paní Svobodová není spokojená se svou zdravotní pojišťovnou. Jak často může změnit zdravotní pojišťovnu?",
    "options": {
      "A": "Jednou za měsíc.",
      "B": "Jednou za 3 měsíce.",
      "C": "Jednou za 6 měsíců.",
      "D": "Jednou za 12 měsíců."
    },
    "correct": "D"
  },
  {
    "question": "Pan Novák je nemocný. Omylem si smazal SMS s receptem na předepsané léky. Který doklad může pan Novák v lékárně předložit, aby dostal předepsané léky?",
    "options": {
      "A": "Rodný list.",
      "B": "Řidičský průkaz.",
      "C": "Očkovací průkaz.",
      "D": "Občanský průkaz."
    },
    "correct": "D"
  },
  {
    "question": "Integrovaný záchranný systém (IZS) se podílí na řešení mimořádných událostí a provádí záchranné práce. Co nepatří do Integrovaného záchranného systému (IZS) České republiky?",
    "options": {
      "A": "Policie ČR.",
      "B": "Krajské úřady ČR.",
      "C": "Hasičský záchranný sbor ČR.",
      "D": "Poskytovatelé záchranné zdravotnická služby ČR."
    },
    "correct": "B"
  },
  {
    "question": "Které telefonní číslo má jednotný záchranný systém (hasiči, policie, zdravotnická záchranná služba) ve všech státech Evropské unie?",
    "options": {
      "A": "112.",
      "B": "150.",
      "C": "911.",
      "D": "999."
    },
    "correct": "A"
  },
  {
    "question": "Od roku 2020 vystavují lékaři v České republice pouze elektronické neschopenky (doklad o pracovní neschopnosti). Které instituci lékař posílá elektronickou neschopenku?",
    "options": {
      "A": "Zdravotní pojišťovně.",
      "B": "Ministerstvu zdravotnictví.",
      "C": "Okresní hygienické stanici.",
      "D": "Okresní správě sociálního zabezpečení."
    },
    "correct": "D"
  },
  {
    "question": "Pan Novák viděl dopravní nehodu. Chce volat Policii České republiky. Které telefonní číslo použije?",
    "options": {
      "A": "150.",
      "B": "155.",
      "C": "156.",
      "D": "158."
    },
    "correct": "D"
  },
  {
    "question": "Pan Novotný je občanem České republiky, je nezaměstnaný a je registrovaný na úřadu práce jako uchazeč o zaměstnání. Kdo platí jeho povinné zdravotní pojištění?",
    "options": {
      "A": "Stát.",
      "B": "Finanční úřad.",
      "C": "Platí si ho sám.",
      "D": "Jeho poslední zaměstnavatel."
    },
    "correct": "A"
  },
  {
    "question": "Který úřad poskytuje podporu v nezaměstnanosti?",
    "options": {
      "A": "Živnostenský úřad.",
      "B": "Finanční úřad.",
      "C": "Krajský úřad.",
      "D": "Úřad práce."
    },
    "correct": "D"
  },
  {
    "question": "Paní Svobodová má nárok na starobní důchod. Která instituce v České republice vydá rozhodnutí o výši jejího důchodu?",
    "options": {
      "A": "Úřad práce.",
      "B": "Ministerstvo vnitra.",
      "C": "Ministerstvo zdravotnictví.",
      "D": "Česká správa sociálního zabezpečení."
    },
    "correct": "D"
  },
  {
    "question": "Který druh finanční pomoci nevyplácí Česká správa sociálního zabezpečení?",
    "options": {
      "A": "Mateřskou.",
      "B": "Nemocenskou.",
      "C": "Starobní důchod.",
      "D": "Podporu v nezaměstnanosti."
    },
    "correct": "D"
  },
  {
    "question": "Pan Novák pracuje ve stavební firmě, ale v současné době je nemocný. Nedostává mzdu, ale peněžitou dávku. Jak se tato dávka jmenuje?",
    "options": {
      "A": "Výživné.",
      "B": "Ošetřovné.",
      "C": "Nemocenská.",
      "D": "Podpora v nezaměstnanosti."
    },
    "correct": "C"
  },
  {
    "question": "Paní Novotná pečuje o svou maminku, která je vážně nemocná a není schopná se sama o sebe postarat. O kterou sociální dávku je možné v této situaci požádat?",
    "options": {
      "A": "O náhradní výživné.",
      "B": "O příspěvek na péči.",
      "C": "O rodičovský příspěvek.",
      "D": "O mimořádnou okamžitou pomoc."
    },
    "correct": "B"
  },
  {
    "question": "Který úřad rozhoduje o přiznání dávek v hmotné nouzi?",
    "options": {
      "A": "Úřad práce.",
      "B": "Ministerstvo financí.",
      "C": "Charita České republiky.",
      "D": "Česká správa sociálního zabezpečení."
    },
    "correct": "A"
  },
  {
    "question": "Panu Novákovi je 60 let a je nezaměstnaný. Jaká je nejdelší doba, po kterou může dostávat podporu v nezaměstnanosti?",
    "options": {
      "A": "6 měsíců.",
      "B": "11 měsíců.",
      "C": "18 měsíců.",
      "D": "24 měsíců."
    },
    "correct": "B"
  }
];
export const menu = {
  // Garnizon Stuff
  // Morena has a few positions less
  coldDrinks: [
    {
      name: "Woda mineralna (niegazowana / gazowana)",
      volume: "350 ml",
      price: "5 zł",
    },
    { name: "Woda mineralna (dzban)", volume: "1 l", price: "12 zł" },
    {
      name: "Lemoniada domowej roboty (cytryna / grejpfrut / malina / kwiat czarnego bzu)",
      volume: "350 ml",
      price: "10 zł",
    },
    { name: "Lemoniada domowej roboty (dzban)", volume: "1 l", price: "24 zł" },
    { name: "Mojito (bezalkoholowe)", volume: "350 ml", price: "14 zł" },
    { name: "Sok (pomarańcza / jabłko)", volume: "350 ml", price: "8 zł" },
    {
      name: "Coca-Cola (puszka) (klasyczna / zero)",
      volume: "330 ml",
      price: "8 zł",
    },
    {
      name: "Sok świeżo wyciskany (pomarańcza / grejpfrut / mix)",
      volume: "350 ml",
      price: "14 zł",
    },
  ],
  hotDrinks: {
    tea: {
      name: "Herbata Dilmah (różne gatunki i smaki do wyboru)",
      price: "8 zł",
    },
    coffee: [
      { name: "Espresso / Espresso Doppio", prices: ["7 zł", "12 zł"] },
      { name: "Americano", price: "8 zł" },
      { name: "Cappuccino", price: "10 zł" },
      { name: "Flat White", price: "12 zł" },
      { name: "Caffe Latte", price: "12 zł" },
      { name: "Latte Macchiato", price: "12 zł" },
    ],
  },
  desserts: [
    { name: "Panna Cotta", price: "12 zł", available: "Tylko Na Garnizonie" },
    { name: "Tiramisu", price: "12 zł" },
  ],
  alcohol: {
    available: "Alkohol mamy tylko na garnizonie",
    beer: [
      {
        name: "Browar Amber (Złote Lwy, Pszeniczniak, Koźlak, Bezalkoholowe)",
        volume: "0.5 l",
        price: "12 zł",
      },
      {
        name: "Browar Czarna Owca (Tricity, Odrodzenie, Pszeniczne z brzoskwinią)",
        volume: "0.5 l",
        price: "14 zł",
      },
    ],
    cider: { name: "Cydr Sadowski (jabłko / gruszka)", price: "24 zł" },
    wine: [
      { name: "Wino Domu (bianco / rosso)", volume: "150 ml", price: "11 zł" },
      { name: "Wino Domu (karafka)", volume: "0.5 l", price: "29 zł" },
      {
        name: "Prosecco (Casa Gheller DOC Millesimato)",
        prices: ["100 ml - 10 zł", "0.75 l - 65 zł"],
      },
    ],
    cocktails: [
      { name: "Aperol Spritz", price: "24 zł" },
      { name: "Hugo Spritz", price: "24 zł" },
      {
        name: "Domowa Sangria (bianco / rosso)",
        prices: ["dzban 1 l - 36 zł"],
      },
    ],
  },
  appetizers: [
    {
      name: "Krem z pomidorów",
      description: "(podawany z mozzarellą lub mascarpone i kawałkiem focacci)",
      price: "16 zł",
    },
    {
      name: "Focaccia",
      description:
        "(pszenny placek wypiekany z dodatkiem czosnku, rozmarynu, soli morskiej i oliwy extra vergine)",
      price: "14 zł",
    },
    {
      name: "Focaccia Extra",
      description: "(focaccia + suszone pomidory + grana padano)",
      price: "19 zł",
       },
    {
      name: "Deska Antipasti na 2 osoby",
      description:
        "(wybór włoskich wędlin i serów, oliwki, suszone pomidory, rukola, focaccia)",
      price: "38 zł",
    },
    {
      name: "Deska Antipasti na 4 osoby",
      description:
        "(wybór włoskich wędlin i serów, oliwki, suszone pomidory, rukola, focaccia)",
      price: "72 zł",
      available: " Tylko Na Garnizonie",
    },
  ],
  pizzas : [
    {
      numberInMenu: 1,
      name: "Margherita",
      description: "sos pomidorowy, mozzarella, świeża bazylia, oliwa extra vergine",
      price: "27 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 2,
      name: "Napoli",
      description: "sos pomidorowy, mozzarella, anchois, kapary, oliwki, oregano",
      price: "29 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 3,
      name: "Classico",
      description: "sos pomidorowy, mozzarella, pieczarki, oregano",
      price: "29 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 4,
      name: "Piccante",
      description:
        "sos pomidorowy, mozzarella, salami piccante, papryka pepperoni, czerwona cebula",
      price: "31 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 5,
      name: "Melanzana",
      description: "sos pomidorowy, mozzarella, bakłażan, czosnek, grana padano",
      price: "31 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 6,
      name: "Spinaci",
      description: "sos pomidorowy, mozzarella, szpinak, czosnek, suszone pomidory",
      price: "31 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 7,
      name: "Zucchine",
      description: "sos pomidorowy, mozzarella, cukinia, czosnek, czerwona cebula",
      price: "31 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 8,
      name: "Spianata e Mascarpone",
      description: "sos pomidorowy, mozzarella, mascarpone, rukola",
      price: "32 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 9,
      name: "Pepperoni",
      description: "sos pomidorowy, mozzarella, kiełbaska pepperoni, czosnek, grana padano",
      price: "32 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 10,
      name: "Insalata",
      description:
        "sos pomidorowy, mozzarella, włoska szynka gotowana, rukola, ricotta, pomidorki cherry, oliwa EV",
      price: "33 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 11,
      name: "Formaggi e Spianata",
      description:
        "sos pomidorowy, mozzarella, salami piccante, gorgonzola, czarne oliwki, ricotta, grana padano",
      price: "34 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 12,
      name: "Calabrese",
      description: "sos pomidorowy, mozzarella, nduja, czerwona cebula, grana padano",
      price: "34 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 13,
      name: "Caprese e Spianata",
      description:
        "sos pomidorowy, mozzarella, salami piccante, świeża mozzarella, świeża bazylia, pomidorki cherry, oliwa EV",
      price: "34 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 14,
      name: "Nduja",
      description: "sos pomidorowy, mozzarella, nduja, ricotta, miód czosnkowy, świeża mięta",
      price: "35 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 15,
      name: "Tartufo",
      description: "sos truflowy, mozzarella, rukola, ricotta, czarne oliwki, pieczona papryka",
      price: "36 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 16,
      name: "Tartufo 2.0",
      description: "pasta z czarnych trufli, sos truflowy, mascarpone, rukola",
      price: "36 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 17,
      name: "Parma",
      description:
        "sos pomidorowy, mozzarella, rukola, włoska szynka dojrzewająca, grana padano",
      price: "36 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: 18,
      name: "Prosciutto e Mirtilli",
      description: "konfitura z borówek, mozzarella, szynka dojrzewająca, rukola",
      price: "36 zł",
      available: ["Morena", "Garnizon"],
    },
    {
      numberInMenu: null,
      name: "Pizza Miesiąca",
      description: "Zapytaj nas o aktualną kompozycję",
      price: "TBD",
      available: ["Morena", "Garnizon"],
    },
  ]
};

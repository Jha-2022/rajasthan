import { Sun, CloudRain, Snowflake } from "lucide-react";

const wm = (file, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

export const IMG = {
  hero: "/images/hero.jpg",
  ghoomar: "/images/ghoomar.jpg",
  kalbeliya: "/images/kalbeliya.jpg",
  pushkar: "/images/pushkar.jpg",
  diwali: "/images/diwali.jpg",
  folkfest: "/images/folkfest.jpg",
  blockprint: "/images/blockprint.jpg",
  bluepottery: wm("Jaipur Blue Pottery Vase with Raja-Rani Design.jpg", 800),
  pichwai: "/images/pichwai.jpg",
  attire: "/images/attire.jpg",
  hawamahal: "/images/hawamahal.jpg",
  mehrangarh: wm("A view of the Mehrangarh Fort, Jodhpur, Rajasthan.jpg", 1000),
  amber: "/images/amber.jpg",
  citypalace: "/images/citypalace.jpg",
  jaisalmerfort: wm("Fort of Jaisalmer (Sonar Kella).jpg", 1000),
  haveli: "/images/haveli.jpg",
  dalbaati: "/images/dalbaati.jpg",
  laalmaas: "/images/laalmaas.png",
  gatte: "/images/gatte.jpg",
  tiger: "/images/tiger.jpg",
  chital: "/images/chital.jpg",
  chinkara: "/images/chinkara.jpg",
  ranthambore: "/images/ranthambore.jpg",
  sariska: "/images/sariska.jpg",
  dunes: "/images/dunes.jpg",
  camel: "/images/camel.jpg",
  lakepalace: "/images/lakepalace.jpg",
  chandbaori: "/images/chandbaori.jpg",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "culture", label: "Culture & Heritage" },
  { id: "architecture", label: "Architecture" },
  { id: "cuisine", label: "Cuisine" },
  { id: "wildlife", label: "Wildlife" },
  { id: "travel", label: "Travel Guide" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export const DANCES = [
  {
    name: "Ghoomar",
    img: IMG.ghoomar,
    origin: "Bhil tribal roots, adopted by Rajput royalty",
    desc:
      "Ghoomar takes its name from ghoomna, the slow pirouette at its heart. Veiled women in flowing ghaghara skirts turn in widening circles, the fabric blooming outward like a flower with every spin. Once danced only for the women of the royal household, it now opens every Rajasthani wedding and festival.",
    query: "Ghoomar dance Rajasthan performance",
  },
  {
    name: "Kalbeliya",
    img: IMG.kalbeliya,
    origin: "Kalbelia snake-charmer community, Thar Desert",
    desc:
      "Born from the Kalbelia community of snake catchers, this dance mimics the glide of a cobra — dancers in black, mirror-embroidered skirts arch and coil to the hypnotic pull of the been. In 2010, UNESCO inscribed Kalbelia songs and dances on its Intangible Cultural Heritage list.",
    query: "Kalbeliya dance Rajasthan performance",
  },
];

export const FESTIVALS = [
  {
    name: "Pushkar Camel Fair",
    img: IMG.pushkar,
    when: "Kartik Purnima, October–November",
    desc:
      "Tens of thousands of camels, cattle and horses fill the dunes outside the holy town of Pushkar for one of the world's largest livestock fairs. Traders barter beneath the open sky while musicians, acrobats and a Ferris wheel turn the desert into a week-long carnival, ending with a ritual bath in Pushkar Lake.",
  },
  {
    name: "Diwali in Jaipur",
    img: IMG.diwali,
    when: "October–November",
    desc:
      "The Pink City turns gold as the bazaars of Johari and Bapu lights up in strings of diyas and fairy lights. Shopkeepers compete for the best-decorated storefront, families light earthen lamps along window ledges, and the night sky over the City Palace fills with fireworks.",
  },
  {
    name: "Rajasthan International Folk Festival",
    img: IMG.folkfest,
    when: "October, Mehrangarh Fort, Jodhpur",
    desc:
      "Held within the ramparts of Mehrangarh Fort under a full moon, RIFF gathers folk musicians from across Rajasthan and the world for five nights of Manganiyar and Langa ballads, Sufi songs and global collaborations against a floodlit medieval skyline.",
  },
];

export const CRAFTS = [
  {
    name: "Pichwai Painting",
    img: IMG.pichwai,
    desc:
      "Devotional cloth paintings from the temple town of Nathdwara, narrating the life of Krishna in saturated gold, peacock-blue and saffron for over four centuries.",
  },
  {
    name: "Sanganeri Block Printing",
    img: IMG.blockprint,
    desc:
      "In the village of Bagru and the town of Sanganer, carved teak blocks stamp floral motifs onto cotton by hand, a craft documented in the region since the 16th century.",
  },
  {
    name: "Jaipur Blue Pottery",
    img: IMG.bluepottery,
    desc:
      "A Persian-influenced craft made without clay at all — ground quartz and glass are fired into vessels glazed in the signature cobalt and turquoise of the Pink City.",
  },
  {
    name: "Attire & Jewellery",
    img: IMG.attire,
    desc:
      "Mirror-worked ghagra-cholis, tie-dyed bandhani odhnis, and silver jewellery such as the borla and kundan-set timaniya turn everyday dress into wearable heritage.",
  },
];

export const CITIES = ["All", "Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"];

export const LANDMARKS = [
  {
    name: "Hawa Mahal",
    city: "Jaipur",
    year: "1799",
    img: IMG.hawamahal,
    desc:
      "Built by Maharaja Sawai Pratap Singh as a screen for the royal women to watch street life unseen, the five-storey 'Palace of Winds' is pierced by 953 sandstone jharokhas arranged in a honeycomb. The Venturi effect through its lattice keeps the interior cool even in peak summer.",
  },
  {
    name: "Amber Fort",
    city: "Jaipur",
    year: "1592",
    img: IMG.amber,
    desc:
      "Rising in golden and pink sandstone above Maota Lake, Amber Fort was the seat of the Kachwaha Rajputs before the capital moved to Jaipur. Its Sheesh Mahal, the Mirror Palace, was designed so a single candle could illuminate an entire hall in reflected starlight.",
  },
  {
    name: "Mehrangarh Fort",
    city: "Jodhpur",
    year: "1459",
    img: IMG.mehrangarh,
    desc:
      "One of India's most formidable forts, Mehrangarh stands on a sheer 125-metre ridge above the Blue City of Jodhpur. Rao Jodha founded it as his new capital, and its ramparts and palaces have survived cannon fire largely intact for over five centuries.",
  },
  {
    name: "City Palace",
    city: "Udaipur",
    year: "1559",
    img: IMG.citypalace,
    desc:
      "Maharana Udai Singh II began this sprawling complex of courtyards, balconies and towers on the eastern shore of Lake Pichola, fusing Rajput and Mughal styles. Successive maharanas added wings over four centuries, giving it Rajasthan's longest unbroken royal facade.",
  },
  {
    name: "Jaisalmer Fort",
    city: "Jaisalmer",
    year: "1156",
    img: IMG.jaisalmerfort,
    desc:
      "Known as Sonar Quila, the 'Golden Fort', this is one of the few 'living forts' left in the world — nearly a quarter of Jaisalmer's old city still resides within its honey-coloured walls. At sunset, the entire fortress glows amber against the Thar Desert.",
  },
];

export const DISHES = [
  {
    name: "Dal Baati Churma",
    img: IMG.dalbaati,
    spice: 1,
    desc:
      "Rajasthan's signature thali: hard wheat rolls (baati) baked over coals, cracked open and drenched in ghee, served alongside spiced lentils (dal) and a sweet, crumbled-wheat churma. Legend traces the baati to soldiers who buried dough under desert sand to bake in the sun.",
    tip: "Best tried hot at a dhaba along the Jaipur–Pushkar highway, fresh off the coal oven.",
  },
  {
    name: "Laal Maas",
    img: IMG.laalmaas,
    spice: 3,
    desc:
      "A fiery mutton curry once prepared for Rajput hunting parties, simmered in yogurt with whole garlic and the fierce, fruity Mathania chilli that gives the dish its name — 'red meat.' Smoked with a live coal in the dhungar technique for a final layer of depth.",
    tip: "Order it at a heritage haveli restaurant in Jodhpur, the chilli's home district.",
  },
  {
    name: "Gatte ki Sabzi",
    img: IMG.gatte,
    spice: 2,
    desc:
      "A vegetarian answer to the region's scarcity of fresh produce: gram-flour dumplings (gatte) are boiled, sliced and simmered in a tangy yogurt-based gravy, proof that Marwari cooks built a full cuisine around what the desert could store.",
    tip: "Pair it with bajre ki roti, the millet flatbread eaten across rural Rajasthan in winter.",
  },
];

export const PARKS = [
  {
    name: "Ranthambore National Park",
    img: IMG.ranthambore,
    desc:
      "A former royal hunting ground turned India's most reliable place to see a wild Bengal tiger by daylight. Ruined cenotaphs and a 10th-century fort rise from the scrub forest, and tigers are known to walk past tourist jeeps along the lakeshores.",
    best: "October – June",
    species: "Bengal tiger, leopard, sloth bear, marsh crocodile",
  },
  {
    name: "Sariska Tiger Reserve",
    img: IMG.sariska,
    desc:
      "Set in the folded Aravalli hills closer to Jaipur, Sariska combines dry deciduous forest with ancient temple ruins. Its tiger population was reintroduced after a 2004 local extinction and is now carefully monitored, alongside large herds of sambar and nilgai.",
    best: "November – June",
    species: "Tiger, nilgai, sambar deer, peafowl",
  },
];

export const ANIMALS = [
  {
    name: "Bengal Tiger",
    img: IMG.tiger,
    fact: "Ranthambore's tigers are some of the most photographed in the world, several having become famous individuals tracked across generations by naturalists.",
  },
  {
    name: "Chital (Spotted Deer)",
    img: IMG.chital,
    fact: "The chital's sharp alarm call is how guides often locate a hidden tiger first — listen for the bark before you see the cat.",
  },
  {
    name: "Chinkara (Indian Gazelle)",
    img: IMG.chinkara,
    fact: "Revered by the Bishnoi community as sacred, the chinkara can go for days without drinking, surviving on moisture from desert plants alone.",
  },
];

export const SEASONS = [
  { name: "Winter", range: "October – March", temp: "10°–25°C", icon: Snowflake, tag: "Best time to visit", desc: "Crisp mornings and warm afternoons make this peak season for forts, safaris and camel treks." },
  { name: "Summer", range: "April – June", temp: "25°–45°C", icon: Sun, tag: "Hot & dry", desc: "Daytime heat is intense, but evenings cool quickly — palace interiors and hill stations offer relief." },
  { name: "Monsoon", range: "July – September", temp: "25°–35°C", icon: CloudRain, tag: "Lush & quiet", desc: "Short, dramatic rains green the desert and fill lakes, with far fewer crowds at major sites." },
];

export const CIRCUITS = [
  {
    name: "The Golden Triangle",
    route: "Delhi → Agra → Jaipur",
    duration: "5–7 days",
    desc: "India's classic first-timer route, pairing the Taj Mahal with the Pink City's forts and bazaars — easily reached by the high-speed Gatimaan Express.",
  },
  {
    name: "Royal Rajasthan",
    route: "Jaipur → Jodhpur → Jaisalmer → Udaipur",
    duration: "10–14 days",
    desc: "The full sweep of princely states: pink, blue and golden cities, a night under the stars in the Thar Desert, and a finish on the lakes of Udaipur.",
  },
];

export const TIPS = [
  {
    title: "Accommodation",
    content:
      "Rajasthan pioneered the heritage-hotel concept — many forts and havelis have been converted into atmospheric stays, from modest family-run guesthouses to palace hotels in Udaipur and Jodhpur. Book heritage properties well ahead during the October–March peak season.",
  },
  {
    title: "Getting Around",
    content:
      "Trains link the major cities efficiently; the Palace on Wheels offers a luxury rail circuit of the state's forts. Within cities, app-based auto-rickshaws are easiest, while a hired car with driver is the most comfortable way to cover the desert distances between Jodhpur, Jaisalmer and Udaipur.",
  },
  {
    title: "Local Customs & Etiquette",
    content:
      "Dress modestly when visiting temples and forts — shoulders and knees covered is appreciated. Remove footwear before entering shrines. A namaste with palms together is the customary greeting, and bargaining is expected (and enjoyed) in bazaars, but always with good humour.",
  },
  {
    title: "What to Pack",
    content:
      "Light cottons for the day and a warm layer for desert nights, even in winter. Sturdy shoes for fort ramparts, sunscreen and a scarf for dust and sun. If visiting in the monsoon, pack light rain protection rather than heavy gear.",
  },
];

export const GALLERY = [
  { img: IMG.hawamahal, caption: "Hawa Mahal, Jaipur", cat: "Architecture" },
  { img: IMG.mehrangarh, caption: "Mehrangarh Fort, Jodhpur", cat: "Architecture" },
  { img: IMG.dunes, caption: "Sam Sand Dunes, Jaisalmer", cat: "Landscape" },
  { img: IMG.ghoomar, caption: "Ghoomar dancer", cat: "People" },
  { img: IMG.kalbeliya, caption: "Kalbeliya dancer", cat: "People" },
  { img: IMG.pushkar, caption: "Pushkar Camel Fair", cat: "Festival" },
  { img: IMG.diwali, caption: "Diyas lit for Diwali", cat: "Festival" },
  { img: IMG.blockprint, caption: "Hand block printing, Bagru", cat: "Craft" },
  { img: IMG.bluepottery, caption: "Jaipur blue pottery", cat: "Craft" },
  { img: IMG.haveli, caption: "Patwon ki Haveli, Jaisalmer", cat: "Architecture" },
  { img: IMG.lakepalace, caption: "Lake Palace, Udaipur", cat: "Landscape" },
  { img: IMG.tiger, caption: "Bengal tiger, Ranthambore", cat: "Wildlife" },
];

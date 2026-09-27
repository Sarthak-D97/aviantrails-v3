import type { PhotoSlug } from "./photo-sizes";
import { site } from "./site";

// The 2026–27 departures, in the order of Rajesh's poster ("Wildlife Photography Tour 2026-27").
// Dates and seats come from that poster (seats "as on 16 Feb 2026"). Summaries, highlights and
// last-run notes are taken from his tour posters and Instagram trip reports — nothing is invented.
// Prices: none are published yet. Set `price` (e.g. "₹2,45,000 per person, twin sharing") and the
// site shows it; leave it null and every page says "Itinerary & cost on WhatsApp".

export type Shot = { slug: PhotoSlug; caption: string };

export type Clip = { src: string; poster: string; w: number; h: number; caption: string };

export type LineId = "himalaya" | "north-east" | "desert-west" | "abroad";

// The lines a visitor can pick on the departures page.
export const network: { id: LineId; name: string }[] = [
  { id: "himalaya", name: "Himalaya" },
  { id: "north-east", name: "North-East" },
  { id: "desert-west", name: "Desert & West" },
  { id: "abroad", name: "Abroad" },
];

export type Tour = {
  no: number;
  slug: string;
  name: string;
  board: string;
  kind: string;
  where: string;
  region: "India" | "Abroad";
  /** Which line of the network the tour runs on: the departures picker groups by it. */
  line: LineId;
  start: string;
  end: string;
  seats: number;
  price: string | null;
  altitude?: string;
  summary: string;
  highlights: string[];
  lastRun?: { when: string; text: string; ebird?: string };
  shots: Shot[];
  clip?: Clip;
};

export const tours: Tour[] = [
  {
    no: 1,
    slug: "peninsular-malaysia",
    name: "Peninsular Malaysia Bird Photography Tour",
    board: "PENINSULAR MALAYSIA",
    kind: "Bird photography",
    where: "Rainforests of Pahang, Malaysia",
    region: "Abroad",
    line: "abroad",
    start: "2026-06-07",
    end: "2026-06-14",
    seats: 2,
    price: null,
    summary:
      "Eight days in the rainforests of Peninsular Malaysia for its pheasants and pittas, working forest trails, hides and the open feeding stations of the hill forest.",
    highlights: [
      "Great Argus and Malayan Peacock-Pheasant, the trip's two main targets",
      "Rusty-naped and Garnet Pittas",
      "Two species of gibbon and three of macaque",
    ],
    lastRun: {
      when: "7–14 June 2026",
      text: "153 species in eight days, including Great Argus, Malayan and Mountain Peacock-Pheasants, and Rusty-naped and Garnet Pittas. The whole group also watched a pit viper kill and swallow a squirrel.",
      ebird: "https://ebird.org/tripreport/537372",
    },
    shots: [
      { slug: "malaysia-rusty-naped-pitta", caption: "Rusty-naped Pitta · Fraser's Hill, Malaysia · Jul 2025" },
      { slug: "group-malaysia-hide", caption: "The June 2026 group at Taman Negara, Pahang" },
      { slug: "malaysia-collage", caption: "Frames from the June 2026 group" },
    ],
  },
  {
    no: 2,
    slug: "borneo",
    name: "Borneo Wildlife Photography Tour",
    board: "BORNEO WILDLIFE",
    kind: "Wildlife photography",
    where: "Sabah, Malaysian Borneo",
    region: "Abroad",
    line: "abroad",
    start: "2026-06-15",
    end: "2026-06-26",
    seats: 0,
    price: null,
    summary:
      "The wildlife-rich east of Malaysia: Borneo's pheasants, partridges and pittas, with orangutans and proboscis monkeys in the same forests.",
    highlights: [
      "Bulwer's Pheasant, Bornean Peacock-Pheasant, Whitehead's Trogon and Whitehead's Spiderhunter",
      "Orangutan, Proboscis Monkey and Sunda Leopard Cat",
      "A Rafflesia keithii in bloom, 45 minutes from the lodge (2025)",
    ],
    lastRun: {
      when: "June 2025, first group",
      text: "162 species, with Sunda Leopard Cat, Greater Mouse Deer, Proboscis Monkey, Orangutan and Red Giant Flying Squirrel among the mammals. The second group added 123 species a week later.",
      ebird: "https://ebird.org/tripreport/388872",
    },
    shots: [
      { slug: "borneo-peacock-pheasant", caption: "Bornean Peacock-Pheasant · Borneo · Jun 2025" },
      { slug: "borneo-black-crowned-pitta", caption: "Black-crowned Pitta · Borneo · Jul 2025" },
      { slug: "borneo-rafflesia", caption: "Rafflesia keithii · Borneo · Jun 2025" },
      { slug: "borneo-atlas-moth", caption: "Atlas Moth at a feeder · Borneo · Jul 2025" },
    ],
  },
  {
    no: 3,
    slug: "peru",
    name: "Peru Bird Photography Tour",
    board: "PERU",
    kind: "Bird photography",
    where: "Cloud-forest lodges of the Manu road",
    region: "Abroad",
    line: "abroad",
    start: "2026-07-06",
    end: "2026-07-19",
    seats: 0,
    price: null,
    summary:
      "Two weeks in Peru's cloud forest for the tanagers that never come to a feeder and have to be found, and framed, in the wild.",
    highlights: [
      "Paradise Tanager feeding low one morning at Cock of the Rock Lodge",
      "Grass-green Tanager at Wayqecha",
      "Peru joined Avian Trails' photography countries in 2025",
    ],
    lastRun: {
      when: "July 2026",
      text: "The Paradise Tanager, one of the key birds Rajesh plans the trip around, came down to feed at a lower level one morning, and the whole group got it.",
    },
    shots: [
      { slug: "peru-paradise-tanager", caption: "Paradise Tanager · Cock of the Rock Lodge, Peru · Jul 2026" },
      { slug: "peru-grass-green-tanager", caption: "Grass-green Tanager · Wayqecha Cloud Forest Lodge, Peru · Jul 2026" },
      { slug: "peru-blue-naped-chlorophonia", caption: "Blue-naped Chlorophonia · Peru · Jan 2025" },
    ],
  },
  {
    no: 4,
    slug: "colombia",
    name: "Colombia Bird Photography Tour",
    board: "COLOMBIA",
    kind: "Bird photography",
    where: "The Central Andes",
    region: "Abroad",
    line: "abroad",
    start: "2026-07-20",
    end: "2026-07-31",
    seats: 1,
    price: null,
    summary:
      "Colombia's Central Andes: antpittas at dawn, hummingbirds at eye level and some of the most colourful tanagers in South America.",
    highlights: [
      "Nine antpitta species seen in 2026",
      "Rainbow-bearded Thornbill at Termales del Ruiz",
      "Multicolored Tanager, a Near Threatened endemic, at two different sites",
    ],
    lastRun: {
      when: "July 2026",
      text: "Nine species of antpitta, the Rainbow-bearded Thornbill at eye level, and the Multicolored Tanager at two places. In January 2025 a group of four photographers logged 255 species and an Andean Bear.",
      ebird: "https://ebird.org/tripreport/317508",
    },
    shots: [
      { slug: "colombia-rainbow-bearded-thornbill", caption: "Rainbow-bearded Thornbill · Termales del Ruiz, Colombia · Jul 2026" },
      { slug: "colombia-multicolored-tanager", caption: "Multicolored Tanager · La Florida, Colombia · Jul 2026" },
      { slug: "colombia-cock-of-the-rock", caption: "Andean Cock-of-the-rock · Colombia · Jul 2026" },
      { slug: "colombia-crescent-faced-antpitta", caption: "Crescent-faced Antpitta · Hacienda El Bosque, Colombia · Jul 2026" },
      { slug: "colombia-golden-collared-manakin", caption: "Golden-collared Manakin · Colombia · Jul 2026" },
      { slug: "group-colombia-feeders", caption: "At the feeders · Colombia · Jan 2025" },
    ],
  },
  {
    no: 5,
    slug: "lesser-florican",
    name: "Lesser Florican Photography Tour",
    board: "LESSER FLORICAN",
    kind: "Bird photography",
    where: "Monsoon grasslands of Rajasthan",
    region: "India",
    line: "desert-west",
    start: "2026-08-07",
    end: "2026-08-09",
    seats: 2,
    price: null,
    summary:
      "A short monsoon trip to Rajasthan's grasslands, when the male Lesser Florican (kharmor) leaps above the grass to display.",
    highlights: [
      "Displaying male Lesser Floricans",
      "Rain Quail and Painted Francolin in the same grassland",
      "Eight guests photographed it at Sokhaliya in 2024",
    ],
    lastRun: {
      when: "1–3 August 2024",
      text: "Eight participants at Jhalana and Sokhaliya. Along with the florican, the grassland gave Rain Quail and Painted Francolin.",
      ebird: "https://ebird.org/tripreport/264796",
    },
    shots: [{ slug: "lesser-florican", caption: "Lesser Florican · Ajmer, Rajasthan · Aug 2019" }],
  },
  {
    no: 6,
    slug: "papua-new-guinea",
    name: "Papua New Guinea Birds-of-Paradise Photography Tour",
    board: "PAPUA NEW GUINEA",
    kind: "Bird photography",
    where: "Four provinces, three domestic flights",
    region: "Abroad",
    line: "abroad",
    start: "2026-08-11",
    end: "2026-08-23",
    seats: 3,
    price: null,
    summary:
      "The land of the birds-of-paradise: 31 of the world's 42 species live in Papua New Guinea, and 23 of those on the mainland.",
    highlights: [
      "Photograph at least 15 species of birds-of-paradise",
      "More than 250 species of colourful birds",
      "Feeder and hide photography of birds-of-paradise",
      "The culture of PNG's tribal communities",
    ],
    lastRun: {
      when: "August 2024",
      text: "Seven guests from across India saw 18 species of birds-of-paradise and photographed 14 of them well. 169 species in all, across four provinces.",
      ebird: "https://ebird.org/tripreport/270648",
    },
    shots: [
      { slug: "png-raggiana", caption: "Raggiana Bird-of-paradise, PNG's national bird · Varirata NP · Jul 2023" },
      { slug: "png-flame-bowerbird", caption: "Flame Bowerbird · Papua New Guinea · Aug 2024" },
      { slug: "png-bop-collage", caption: "Birds-of-paradise from the August 2024 trip" },
      { slug: "png-wattled-ploughbill", caption: "Wattled Ploughbill · Papua New Guinea · Jul 2023" },
      { slug: "png-fruit-dove", caption: "Orange-bellied Fruit Dove · Varirata NP · 2023" },
    ],
  },
  {
    no: 7,
    slug: "ladakh-passage-migrants",
    name: "Ladakh Passage Migrants Tour",
    board: "LADAKH MIGRANTS",
    kind: "Birding & photography",
    where: "Leh, Pangong Tso and the Changthang",
    region: "India",
    line: "himalaya",
    start: "2026-09-10",
    end: "2026-09-20",
    seats: 2,
    price: null,
    altitude: "3,500 m",
    summary:
      "September on the Ladakh plateau, when migrants move through the high valleys. Rajesh has led groups here every summer for more than ten years.",
    highlights: [
      "Tibetan Sandgrouse by the hundred, Saker Falcon, Red-fronted Rosefinch",
      "Tibetan wolf, Tibetan wild ass, argali, pikas and the Ladakh hamster",
      "Night skies over Pangong Tso",
      "The 2025 group found an Icterine Warbler at Pangong Tso, the first record for India",
    ],
    lastRun: {
      when: "10–20 September 2026",
      text: "Eight participants, 123 bird species, 16 mammals and 2 reptiles: a Saker Falcon with a pika kill, full-frame Red-fronted Rosefinch, 500+ Tibetan Sandgrouse and a Eurasian Eagle-Owl sitting on the ground.",
      ebird: "https://ebird.org/tripreport/574386",
    },
    shots: [
      { slug: "ladakh-milky-way-pangong", caption: "Milky Way over Pangong Tso · Ladakh · 15 Sep 2026" },
      { slug: "ladakh-tibetan-sandgrouse", caption: "Tibetan Sandgrouse · Ladakh" },
      { slug: "ladakh-saker", caption: "Saker Falcon · Hanle, Ladakh · Sep 2019" },
      { slug: "ladakh-snowcock", caption: "Himalayan Snowcock · Ladakh" },
      { slug: "icterine-warbler-first-record", caption: "Icterine Warbler, first record for India · Pangong Tso · Sep 2025" },
      { slug: "ladakh-mammals-collage", caption: "Mammals of the September 2026 trip" },
    ],
  },
  {
    no: 8,
    slug: "mongolia",
    name: "Mongolia Wildlife Photography Tour",
    board: "MONGOLIA WILDLIFE",
    kind: "Wildlife photography",
    where: "Hustai, the Altai and the dunes",
    region: "Abroad",
    line: "abroad",
    start: "2026-10-02",
    end: "2026-10-15",
    seats: 2,
    price: null,
    summary:
      "Two weeks across Mongolia for its predators: Snow Leopard, Pallas's Cat and the Golden Eagles of the eagle hunters, with nights in gers under some of the darkest skies anywhere.",
    highlights: [
      "A whole day with a male Snow Leopard on a kill (2025)",
      "Pallas's Cat, Takhi horses, Altai Ibex",
      "Golden Eagles with Mongolia's eagle hunters",
      "Bactrian camels on the dunes, star trails at −12 °C",
      "Excellent vegetarian meals at every stop in 2025",
    ],
    lastRun: {
      when: "October 2025, the first trip",
      text: "Takhi horses at close range in Hustai on day one; later a full day with a male Snow Leopard feeding on a goat kill in the Altai. Rajesh had worried about vegetarian food. Every place served excellent vegetarian meals.",
    },
    shots: [
      { slug: "mongolia-snow-leopard", caption: "Snow Leopard on a kill · Altai, Mongolia · Oct 2025" },
      { slug: "mongolia-eagle-fox", caption: "Golden Eagle · Mongolia · Oct 2025" },
      { slug: "mongolia-pallas-cat", caption: "Pallas's Cat · Mongolia · Oct 2025" },
      { slug: "mongolia-takhi", caption: "Takhi horse · Mongolia · Oct 2025" },
      { slug: "mongolia-camels", caption: "Bactrian camels on the dunes · Mongolia · Oct 2025" },
      { slug: "mongolia-ger-stars", caption: "Star trails over the gers · Mongolia · Oct 2025" },
      { slug: "mongolia-eagle-hunters", caption: "Eagle hunters · Mongolia · 2025" },
    ],
  },
  {
    no: 9,
    slug: "tal-chhapar",
    name: "Tal Chhapar Wildlife Photography Tour",
    board: "TAL CHHAPAR",
    kind: "Wildlife photography",
    where: "Churu district, Rajasthan",
    region: "India",
    line: "desert-west",
    start: "2026-10-23",
    end: "2026-10-25",
    seats: 2,
    price: null,
    summary:
      "Three days on the open grassland of Tal Chhapar sanctuary in Rajasthan's Churu district, known for its blackbuck and its wintering raptors.",
    highlights: ["Blackbuck on open grassland", "Harriers and eagles arriving for the winter", "A three-day trip"],
    shots: [
      { slug: "persian-wheatear-flight", caption: "Persian Wheatear · Netsi, Rajasthan · Jan 2024" },
      { slug: "desert-laggar-falcon", caption: "Laggar Falcon · Rajasthan · Jan 2021" },
    ],
  },
  {
    no: 10,
    slug: "nagaland-manipur",
    name: "Nagaland–Manipur Bird Photography Tour",
    board: "NAGALAND–MANIPUR",
    kind: "Bird photography",
    where: "The hills of Nagaland and Manipur",
    region: "India",
    line: "north-east",
    start: "2026-11-12",
    end: "2026-11-20",
    seats: 2,
    price: null,
    summary:
      "Nine days in the north-eastern hills in November, the month the Amur Falcons pass through Nagaland in their thousands.",
    highlights: [
      "Amur Falcon roosts on their autumn passage",
      "Hill-forest birding in two north-eastern states",
      "Rajesh has led Nagaland trips since 2018",
    ],
    shots: [{ slug: "amur-falcon", caption: "Amur Falcon · Rangat, Andaman Islands · Dec 2021" }],
    clip: {
      src: "/clips/amur-falcons-pangti.mp4",
      poster: "/clips/amur-falcons-pangti.jpg",
      w: 720,
      h: 340,
      caption: "Amur Falcons over Pangti, Nagaland · Nov 2018",
    },
  },
  {
    no: 11,
    slug: "meghalaya",
    name: "Meghalaya Birds and Waterfalls Photography Tour",
    board: "MEGHALAYA",
    kind: "Birds & waterfalls",
    where: "Sohra and the Khasi Hills",
    region: "India",
    line: "north-east",
    start: "2026-10-31",
    end: "2026-11-02",
    seats: 2,
    price: null,
    summary:
      "A short trip for the two things Meghalaya does like nowhere else: wren-babblers in the forest and waterfalls falling off the plateau.",
    highlights: [
      "Tawny-breasted Wren-babbler and Dark-rumped Swift",
      "Nohkalikai and three more waterfalls in 2025",
      "With local guide Prasanna Kalita",
    ],
    lastRun: {
      when: "August–September 2025, three days",
      text: "Out of season, yet both prime targets, Tawny-breasted Wren-babbler and Dark-rumped Swift, came through. 73 species and four waterfalls, including Nohkalikai.",
      ebird: "https://ebird.org/tripreport/407167",
    },
    shots: [
      { slug: "meghalaya-wren-babbler", caption: "Tawny-breasted Wren-babbler · Meghalaya · Aug 2025" },
      { slug: "meghalaya-waterfalls", caption: "Waterfalls of the 2025 trip · Meghalaya" },
      { slug: "meghalaya-group", caption: "The 2025 group · Meghalaya" },
    ],
  },
  {
    no: 12,
    slug: "madagascar",
    name: "Madagascar Wildlife Photography Tour",
    board: "MADAGASCAR",
    kind: "Wildlife photography",
    where: "Five national parks",
    region: "Abroad",
    line: "abroad",
    start: "2026-11-21",
    end: "2026-12-05",
    seats: 0,
    price: null,
    summary:
      "Fifteen days through Madagascar's national parks for lemurs, chameleons, leaf-tailed geckos and birds that live nowhere else.",
    highlights: [
      "16 species of lemur and 15 of chameleon in 2024",
      "Eben's leaf-tailed gecko and Goodman's mouse lemur",
      "Sunrise through the baobabs and a night-sky session",
    ],
    lastRun: {
      when: "October 2024",
      text: "117 bird species, 16 lemurs, 15 chameleons and 2 snakes, plus astrophotography, sunrise through the baobabs, a folk-dance evening and a handmade-paper workshop.",
      ebird: "https://ebird.org/tripreport/288678",
    },
    shots: [
      { slug: "madagascar-gecko", caption: "Eben's Leaf-tailed Gecko · Madagascar · Oct 2024" },
      { slug: "madagascar-mouse-lemur", caption: "Goodman's Mouse Lemur · Madagascar · Oct 2024" },
      { slug: "madagascar-chameleons", caption: "Chameleons of the 2024 trip · Madagascar" },
      { slug: "group-madagascar", caption: "The October 2024 group · Madagascar" },
    ],
  },
  {
    no: 13,
    slug: "desert-national-park",
    name: "Desert National Park Bird Photography Tour",
    board: "DESERT NATIONAL PARK",
    kind: "Bird photography",
    where: "The Thar, around Jaisalmer",
    region: "India",
    line: "desert-west",
    start: "2026-12-25",
    end: "2026-12-30",
    seats: 0,
    price: null,
    summary:
      "Six winter days in the Thar Desert for the Great Indian Bustard and the desert's falcons, larks, finches and vultures.",
    highlights: [
      "Great Indian Bustard",
      "Laggar Falcon, Red-headed and Cinereous Vultures",
      "Trumpeter Finch and Greater Hoopoe-Lark",
    ],
    lastRun: {
      when: "January 2024, a custom trip",
      text: "75 species on a customised trip. The January 2020 group tour covered almost every desert speciality with 69 species.",
    },
    shots: [
      { slug: "desert-great-indian-bustard", caption: "Great Indian Bustard · Desert National Park · Jan 2021" },
      { slug: "desert-trumpeter-finch", caption: "Trumpeter Finch · Desert National Park · Jan 2024" },
      { slug: "desert-vultures", caption: "Red-headed and Cinereous Vultures · Rajasthan · Jan 2021" },
      { slug: "desert-hoopoe-lark", caption: "Greater Hoopoe-Lark · Rajasthan · Jan 2020" },
    ],
  },
  {
    no: 14,
    slug: "namdapha-walong-dehing-patkai",
    name: "Namdapha–Walong–Dehing Patkai Birding Tour",
    board: "NAMDAPHA–WALONG",
    kind: "Birding",
    where: "Eastern Arunachal Pradesh and Upper Assam",
    region: "India",
    line: "north-east",
    start: "2027-01-02",
    end: "2027-01-13",
    seats: 0,
    price: null,
    summary:
      "Twelve days in India's far east: the rainforest of Namdapha, the Lohit valley at Walong and the Dehing Patkai forests of Upper Assam.",
    highlights: [
      "Blyth's Kingfisher and Brown Hornbill at Namdapha",
      "Black-browed Bushtit, Spot-breasted Parrotbill and Derbyan Parakeet around Walong",
      "White-winged Wood Duck in Assam's forests",
    ],
    lastRun: {
      when: "May–June 2025, Walong and the Mishmi Hills",
      text: "Two back-to-back groups logged 260 species, with Derbyan Parakeet, Chinese Vivid Niltava, Australasian Grass-Owl, Grey-headed Parakeet and Malayan Night Heron. Floods covered the White-bellied Heron's feeding areas and both groups missed it.",
    },
    shots: [
      { slug: "namdapha-blyths-kingfisher", caption: "Blyth's Kingfisher · Namdapha Tiger Reserve · Nov 2024" },
      { slug: "mishmi-blyths-tragopan", caption: "Blyth's Tragopan · Mishmi Hills · Apr 2022" },
      { slug: "namdapha-brown-hornbill", caption: "Brown Hornbill · Namdapha Tiger Reserve · Nov 2024" },
      { slug: "walong-parrotbill", caption: "Spot-breasted Parrotbill · Anjaw, Arunachal · Feb 2021" },
      { slug: "walong-golden-throated-barbet", caption: "Golden-throated Barbet · Anjaw, Arunachal · Feb 2021" },
      { slug: "assam-white-winged-wood-duck", caption: "White-winged Wood Duck · Assam" },
    ],
  },
  {
    no: 15,
    slug: "sri-lanka",
    name: "Sri Lanka Wildlife Photography Tour",
    board: "SRI LANKA",
    kind: "Wildlife photography",
    where: "Sinharaja and the wet zone",
    region: "Abroad",
    line: "abroad",
    start: "2027-01-16",
    end: "2027-01-24",
    seats: 0,
    price: null,
    summary:
      "Nine days for Sri Lanka's endemic birds, mammals and reptiles. Rajesh gave a whole talk on chasing them.",
    highlights: [
      "Sri Lanka Blue Magpie, Crimson-backed Goldenback, Serendib Scops Owl",
      "Red-faced Malkoha, Sri Lanka Hanging Parrot, Legge's Flowerpecker",
      "Endemic mammals and reptiles as well as birds",
    ],
    shots: [
      { slug: "srilanka-blue-magpie", caption: "Sri Lanka Blue Magpie · Sinharaja · Dec 2019" },
      { slug: "srilanka-serendib-scops-owl", caption: "Serendib Scops Owl · Sri Lanka" },
      { slug: "srilanka-goldenback", caption: "Crimson-backed Goldenback · Sinharaja · Dec 2019" },
      { slug: "srilanka-red-faced-malkoha", caption: "Red-faced Malkoha · Sri Lanka" },
      { slug: "srilanka-hanging-parrot", caption: "Sri Lanka Hanging Parrot · Dec 2019" },
    ],
  },
  {
    no: 16,
    slug: "rajaji-bhagirathi-valley",
    name: "Rajaji and Bhagirathi Valley Bird Photography Tour",
    board: "RAJAJI–BHAGIRATHI",
    kind: "Bird photography",
    where: "Rajaji NP and the Harsil valley, Uttarakhand",
    region: "India",
    line: "himalaya",
    start: "2027-01-30",
    end: "2027-02-04",
    seats: 3,
    price: null,
    altitude: "2,620 m",
    summary:
      "Six winter days from the Shivalik foothills of Rajaji up to Harsil in the Bhagirathi valley, where Rajesh and Sheela found flocks of Grandalas feeding on sea-buckthorn berries.",
    highlights: [
      "Grandala flocks on sea-buckthorn in the Bhagirathi valley",
      "White-throated Bushtit, White-cheeked Nuthatch, Beautiful Rosefinch, Goldcrest",
      "Everything on the 2021 recce was seen from the road: no trekking",
    ],
    lastRun: {
      when: "February 2021, the recce with Sheela",
      text: "At the invitation of Uttarakhand's Head of Forest Force they stayed at the Harsil forest rest house: two big Grandala flocks, three White-throated Bushtit sightings, and a Golden Eagle attacking Himalayan Monals. The recce made the Times of India.",
      ebird: "https://ebird.org/tripreport/217018",
    },
    shots: [
      { slug: "grandala-flight-harsil", caption: "Grandalas on sea-buckthorn · Harsil, Bhagirathi valley · Feb 2021" },
      { slug: "harsil-white-throated-bushtit", caption: "White-throated Bushtit · Bhagirathi valley · Feb 2021" },
      { slug: "harsil-star-trails", caption: "Star trails · Harsil · Nov 2022" },
      { slug: "press-toi-grandala-2", caption: "Times of India, February 2021" },
    ],
  },
  {
    no: 17,
    slug: "costa-rica",
    name: "Costa Rica Bird Photography Tour",
    board: "COSTA RICA",
    kind: "Bird photography",
    where: "Highlands, Caribbean and Pacific lowlands",
    region: "Abroad",
    line: "abroad",
    start: "2027-02-13",
    end: "2027-02-24",
    seats: 4,
    price: null,
    summary:
      "Twelve days across Costa Rica's highlands and both coasts. Rajesh has taken a group here every year since 2023.",
    highlights: [
      "More than 250 bird species on every trip: 301 in January 2026",
      "Resplendent Quetzal, White-crested Coquette, Fiery-billed Aracari",
      "Macro photography of frogs and snakes; studio photography of hummingbirds and bats",
      "All four Costa Rican monkeys on the 2026 trip",
    ],
    lastRun: {
      when: "January 2026",
      text: "301 species, and the first Avian Trails group in five years to see all four of Costa Rica's monkeys. Earlier runs: 351 species across two groups in 2025, 307 in 2024.",
      ebird: "https://ebird.org/tripreport/350835",
    },
    shots: [
      { slug: "costarica-quetzal", caption: "Resplendent Quetzal · Costa Rica · Mar 2023" },
      { slug: "costarica-red-headed-barbet", caption: "Red-headed Barbet · Costa Rica · Feb 2024" },
      { slug: "costarica-speckled-tanager", caption: "Speckled Tanager · Costa Rica · Feb 2024" },
      { slug: "costarica-macro", caption: "Frogs and a snake, shot macro · Costa Rica · 2024" },
      { slug: "group-costa-rica-2026", caption: "The January 2026 group · Costa Rica" },
    ],
    clip: {
      src: "/clips/oropendola-courtship-costa-rica.mp4",
      poster: "/clips/oropendola-courtship-costa-rica.jpg",
      w: 720,
      h: 1080,
      caption: "Montezuma Oropendola courtship · Costa Rica · Jan 2026",
    },
  },
];

// ---------------------------------------------------------------------------------------------
// Status, the way a station board reads it.

export type SeatStatus =
  | { code: "AVL"; label: string; seats: number }
  | { code: "WL"; label: string }
  | { code: "ON TOUR"; label: string }
  | { code: "DEPARTED"; label: string };

const DAY = 24 * 60 * 60 * 1000;

export function startOfDayIST(d: Date) {
  // The business runs on Indian Standard Time; compare calendar days there.
  const ist = new Date(d.getTime() + 5.5 * 60 * 60 * 1000);
  return Date.UTC(ist.getUTCFullYear(), ist.getUTCMonth(), ist.getUTCDate());
}

function parseDay(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return Date.UTC(y, m - 1, d);
}

export function seatStatus(t: Tour, now = new Date()): SeatStatus {
  const today = startOfDayIST(now);
  if (parseDay(t.end) < today) return { code: "DEPARTED", label: "Departed" };
  if (parseDay(t.start) <= today) return { code: "ON TOUR", label: "Group on tour now" };
  if (t.seats > 0) return { code: "AVL", label: `${t.seats} ${t.seats === 1 ? "seat" : "seats"} available`, seats: t.seats };
  return { code: "WL", label: "Full, waiting list open" };
}

export function days(t: Tour) {
  return Math.round((parseDay(t.end) - parseDay(t.start)) / DAY) + 1;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function dateRange(t: Tour, style: "short" | "long" | "compact" = "short") {
  const [ys, ms, ds] = t.start.split("-").map(Number);
  const [ye, me, de] = t.end.split("-").map(Number);
  const pad = (n: number) => String(n).padStart(2, "0");
  if (style === "short") {
    return ms === me ? `${pad(ds)}–${pad(de)} ${MONTHS[me - 1].toUpperCase()}` : `${pad(ds)} ${MONTHS[ms - 1].toUpperCase()}–${pad(de)} ${MONTHS[me - 1].toUpperCase()}`;
  }
  if (style === "compact") {
    return ms === me ? `${ds}–${de} ${MONTHS[me - 1]}` : `${ds} ${MONTHS[ms - 1]} – ${de} ${MONTHS[me - 1]}`;
  }
  const full = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  if (ys !== ye) return `${ds} ${full[ms - 1]} ${ys} – ${de} ${full[me - 1]} ${ye}`;
  if (ms === me) return `${ds}–${de} ${full[me - 1]} ${ye}`;
  return `${ds} ${full[ms - 1]} – ${de} ${full[me - 1]} ${ye}`;
}

export function upcoming(now = new Date()) {
  const today = startOfDayIST(now);
  return [...tours].filter((t) => parseDay(t.end) >= today).sort((a, b) => parseDay(a.start) - parseDay(b.start));
}

export function departed(now = new Date()) {
  const today = startOfDayIST(now);
  return [...tours].filter((t) => parseDay(t.end) < today).sort((a, b) => parseDay(b.start) - parseDay(a.start));
}

/** The board name in normal case, for screens and lists. */
export function title(t: Tour) {
  return t.board.toLowerCase().replace(/(^|[\s–-])([a-z])/g, (_, sep: string, ch: string) => sep + ch.toUpperCase());
}

export function tourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug);
}

export function enquiryText(t: Tour) {
  return `Hello Rajesh, I'd like to reserve a seat on Tour No. ${String(t.no).padStart(2, "0")}, ${t.name} (${dateRange(t, "long")}). Please share the itinerary and cost.`;
}

export const seatsAsOnLabel = (() => {
  const [y, m, d] = site.seatsAsOn.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
})();

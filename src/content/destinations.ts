import type { PhotoSlug } from "./photo-sizes";

// Where Avian Trails runs private, customised trips — the list from the old site's
// "Customized Tours" page, plus places Rajesh has led or scouted since (from his posts).

export type Line = {
  id: string;
  name: string;
  note: string;
  photo: PhotoSlug;
  photoCaption: string;
  stations: string[];
};

export const lines: Line[] = [
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    note: "Home. More than 700 species, fourth in India, and a network of local guides at almost every hotspot. Rajesh and Sheela opened up Manila and the Bhagirathi valley themselves.",
    photo: "panchachuli-dawn",
    photoCaption: "Panchachuli at first light · Munsyari · Dec 2024",
    stations: [
      "Kaladhungi", "Corbett Tiger Reserve", "Sattal", "Pangot", "Nainital", "Manila", "Binsar", "Jageshwar",
      "Munsyari", "Darma Valley", "Vyas Valley", "Chaukori", "Abbott Mount", "Chopta & Tungnath", "Mandal",
      "Gangotri NP & Harsil", "Chakrata", "Koti Kanasar", "Nandhaur", "Pawalgarh", "Kotdwar", "Sitlakhet",
      "Nanda Devi Biosphere Reserve",
    ],
  },
  {
    id: "western-himalaya",
    name: "Ladakh, Kashmir & Himachal",
    note: "The high, dry Himalaya. Rajesh has run Ladakh trips every summer for over a decade, up to Umling La, the highest motorable pass in the world.",
    photo: "ladakh-tibetan-sandgrouse",
    photoCaption: "Tibetan Sandgrouse · Ladakh",
    stations: ["Leh", "Pangong Tso", "Hanle", "Tso Kar", "Nubra", "Changthang", "Dachigam", "Ganderbal", "Yusmarg", "Chhitkul", "Kalpa", "Nako", "Kibber"],
  },
  {
    id: "north-east",
    name: "The North-East",
    note: "India's richest birding: tragopans, wren-babblers, hornbills and the skulkers photographers wait years for.",
    photo: "arunachal-grandala-sela",
    photoCaption: "Grandala · Sela Pass, Arunachal Pradesh · May 2026",
    stations: [
      "Eaglenest", "Mandala", "Sela Pass", "Tawang", "Mishmi Hills", "Walong", "Namdapha", "Pakke", "Kaziranga", "Nameri",
      "Manas", "Maguri Beel", "Tinsukia", "Dehing Patkai", "Dosdewa", "Khonoma", "Pangti", "Meghalaya", "Mizoram",
      "North & East Sikkim", "Lava & Neora Valley", "Singalila", "Rishyap", "Mahananda", "Sunderban",
    ],
  },
  {
    id: "west-desert",
    name: "The desert & the west",
    note: "Bustards, coursers, larks and falcons on the Thar and in the Rann; the Lesser Florican's monsoon display.",
    photo: "desert-great-indian-bustard",
    photoCaption: "Great Indian Bustard · Desert National Park · Jan 2021",
    stations: ["Desert National Park", "Tal Chhapar", "Bikaner", "Bharatpur", "Sokhaliya", "Pokhran", "Little Rann of Kutch", "Greater Rann of Kutch", "Nal Sarovar", "Mount Abu"],
  },
  {
    id: "south",
    name: "The south & the islands",
    note: "Western Ghats endemics at Thattekad and Munnar, the Nilgiris, Goa, and the Andaman Islands.",
    photo: "g-golden-fronted-leafbird",
    photoCaption: "Golden-fronted Leafbird · Kaladhungi · Aug 2019",
    stations: ["Thattekad", "Munnar", "Ooty", "North Goa", "Andaman Islands"],
  },
  {
    id: "abroad",
    name: "Abroad",
    note: "Groups in ten countries in 2025 alone. In Vietnam and Mongolia, vegetarian meals were excellent at every stop.",
    photo: "costarica-quetzal",
    photoCaption: "Resplendent Quetzal · Costa Rica · Mar 2023",
    stations: ["Bhutan", "Sri Lanka", "Peninsular Malaysia", "Borneo", "Vietnam & Cambodia", "Mongolia", "Kenya", "Madagascar", "Papua New Guinea", "Costa Rica", "Colombia", "Peru", "Ecuador"],
  },
];

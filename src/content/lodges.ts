import type { PhotoSlug } from "./photo-sizes";
import type { Clip, Shot } from "./tours";

// The two lodges Rajesh and Sheela run themselves. Facts come from Rajesh's posts ("Living the
// Dream", June 2023; New Year 2023) and the Manila Birding Lodge website.

export type Season = { months: string; birds: string };

export type Lodge = {
  slug: string;
  name: string;
  station: string;
  place: string;
  altitude: string;
  opened: string;
  lead: string;
  rooms: string[];
  facts: string[];
  seasons: Season[];
  doorstep: Shot[];
  hero: PhotoSlug;
  heroCaption: string;
  building: Shot[];
  clip?: Clip;
  gettingThere: { label: string; value: string }[];
  enquiry: string;
};

export const lodges: Lodge[] = [
  {
    slug: "milieu-villa",
    name: "Milieu Villa Birding Lodge",
    station: "CHHOTI HALDWANI",
    place: "Corbett's Village, Chhoti Haldwani, Kaladhungi",
    altitude: "386 m",
    opened: "October 2022",
    lead: "Our home, and a homestay built for birders: the house stands at the edge of the Kaladhungi reserve forest, and you enter it through the forest.",
    rooms: [
      "Four air-conditioned, theme-based rooms on the second floor, each with a private balcony",
      "Dining room and lobby on the first floor; Rajesh and Sheela live on the ground floor",
      "A terrace with a 70+ species list, and dark enough skies for the Milky Way",
    ],
    facts: [
      "Tiger, leopard, civets and deer in the surrounding forest; leopards cross in front of the house in winter",
      "Birding through the year with our own professional guides",
      "This is Jim Corbett's village: his old Kaladhungi home is now the Corbett Museum",
    ],
    seasons: [
      { months: "Apr–Jun", birds: "Grey-crowned Prinia, Spot-winged Starling, Crested Bunting, Hooded and Indian Pitta, Long-tailed Broadbill, Pied Thrush 45 minutes away" },
      { months: "Jul–Aug", birds: "Monsoon birds of the terai: Bristled Grassbird, all four weavers, Chestnut-capped Babbler" },
      { months: "Nov–Mar", birds: "Winter migrants: Yellow-breasted Bunting at Baur Reservoir, Vinaceous Rosefinch near Nainital" },
    ],
    doorstep: [
      { slug: "grey-crowned-prinia", caption: "Grey-crowned Prinia · Kaladhungi · Jul 2019" },
      { slug: "hooded-pitta-kaladhungi", caption: "Hooded Pitta · near the lodge · Jul 2024" },
      { slug: "brown-capped-pygmy-woodpecker", caption: "Brown-capped Pygmy Woodpecker · Milieu Villa · Apr 2024" },
      { slug: "milieu-villa-eagle-owl", caption: "Spot-bellied Eagle Owl, from the terrace · Oct 2023" },
      { slug: "spot-winged-starling", caption: "Spot-winged Starling · near the lodge · 2024" },
      { slug: "tawny-bellied-babbler", caption: "Tawny-bellied Babbler · the backyard · Apr 2024" },
      { slug: "long-tailed-broadbill", caption: "Long-tailed Broadbill · Kaladhungi foothills" },
      { slug: "pied-thrush-male-2026", caption: "Pied Thrush · Nainital area · Jun 2026" },
    ],
    hero: "milieu-villa-terrace-view",
    heroCaption: "The view from our terrace · Milieu Villa · Jul 2024",
    building: [
      { slug: "milieu-villa-house", caption: "Milieu Villa Birding Lodge" },
      { slug: "milieu-villa-room", caption: "One of the four theme rooms" },
      { slug: "milieu-villa-dining", caption: "The buffet, under a Kumaoni aipan" },
      { slug: "milieu-villa-lounge", caption: "The lobby and dining floor" },
    ],
    clip: {
      src: "/clips/leopard-main-gate.mp4",
      poster: "/clips/leopard-main-gate.jpg",
      w: 1280,
      h: 720,
      caption: "Night visitors at our main gate, February 2026: a leopard, then a Black-naped Hare (CCTV)",
    },
    gettingThere: [
      { label: "From Delhi", value: "255 km by road, about 6 hours" },
      { label: "Railheads", value: "Haldwani (HDW), Kathgodam (KGM), Ramnagar (RMR)" },
      { label: "Corbett Tiger Reserve", value: "30 km · 30 minutes" },
      { label: "Nainital", value: "34 km · 1 hour" },
    ],
    enquiry: "Hello Rajesh, I'd like to stay at Milieu Villa Birding Lodge. Dates: ___ · Guests: ___ · Birding with a guide: yes / no",
  },
  {
    slug: "manila",
    name: "Manila Birding Lodge",
    station: "MANILA",
    place: "Manila, Almora district",
    altitude: "1,830 m",
    opened: "April 2022",
    lead: "A pine-forest village named for the temple of Maa Neela, and probably the best place in India to photograph the Cheer Pheasant: our team knows more than twenty spots for it.",
    rooms: [
      "Four rooms named Kalij, Koklass, Cheer and Chukar, with balconies, double beds and attached baths with geysers",
      "Home-style buffet meals from local, organic ingredients, served across the road",
      "Packed breakfasts for early starts; night outings for owls",
    ],
    facts: [
      "Cheer Pheasant through the year, best in summer when the pheasants call",
      "Koklass Pheasant, Mountain Scops Owl, Wallcreeper, Eurasian Woodcock",
      "Our own team of guides and drivers; pick-up from Ramnagar station",
    ],
    seasons: [
      { months: "Apr–Jun", birds: "Pheasants at their most vocal: the best time for Cheer and Koklass" },
      { months: "Nov", birds: "Cherry blossom in the hills" },
      { months: "Nov–Mar", birds: "Wallcreeper, Eurasian Woodcock, White-capped and Chestnut-eared Buntings, Black-throated Accentor, Himalayan Bluetail" },
    ],
    doorstep: [
      { slug: "manila-cheer-pheasants", caption: "Cheer Pheasants · Manila" },
      { slug: "manila-koklass", caption: "Koklass Pheasant · Manila · Nov 2022" },
      { slug: "manila-mountain-scops-owl", caption: "Mountain Scops Owl · Manila · Nov 2022" },
      { slug: "manila-wallcreeper", caption: "Wallcreeper · Manila Birding Lodge · winter" },
      { slug: "manila-woodcock", caption: "Eurasian Woodcock · Manila" },
      { slug: "manila-himalayan-bluetail", caption: "Himalayan Bluetail · Manila · Dec 2020" },
      { slug: "manila-cherry-bulbul", caption: "Himalayan Bulbul on cherry blossom · November" },
      { slug: "manila-blue-whistling-thrush", caption: "Blue Whistling Thrush · Manila Birding Lodge · Jan 2023" },
    ],
    hero: "manila-sunrise",
    heroCaption: "Sunrise on the way to Manila · Nov 2022",
    building: [{ slug: "manila-lodge-night", caption: "Manila Birding Lodge, lit up at night" }],
    gettingThere: [
      { label: "From Ramnagar", value: "80 km by road; pick-up arranged" },
      { label: "Railhead", value: "Ramnagar (RMR)" },
      { label: "Pairs well with", value: "Milieu Villa, Sattal, Munsyari" },
    ],
    enquiry: "Hello Rajesh, I'd like to stay at Manila Birding Lodge. Dates: ___ · Guests: ___ · Target birds: ___",
  },
];

export function lodgeBySlug(slug: string) {
  return lodges.find((l) => l.slug === slug);
}

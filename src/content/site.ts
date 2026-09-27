// Contact details and standing facts. Everything here is taken from Rajesh's own channels
// (old aviantrails.in contact page, Instagram captions, tour posters).

export const site = {
  name: "Avian Trails",
  url: "https://aviantrails.in",
  description:
    "Small-group birding, bird photography and wildlife photography tours led by Rajesh Panwar — across India and abroad — plus two birding lodges in Kumaon, Uttarakhand.",
  whatsapp: {
    number: "918979037355",
    display: "+91 89790 37355",
  },
  phone: {
    number: "+919837477661",
    display: "+91 98374 77661",
  },
  email: "birding@aviantrails.in",
  address: {
    lines: ["Corbett's Village, Chhoti Haldwani", "P.O. Kaladhungi, District Nainital", "Uttarakhand 263140, India"],
    locality: "Kaladhungi",
    region: "Uttarakhand",
    postalCode: "263140",
    country: "IN",
  },
  // 29°17′13.60″N 79°19′54.75″E — as published on the old site
  geo: { lat: 29.28711, lng: 79.33188 },
  social: {
    instagram: "https://www.instagram.com/aviantrails/",
    youtube: "https://www.youtube.com/@rajeshpanwar2002",
    facebook: "https://www.facebook.com/rajeshpanwarcorbett",
    x: "https://twitter.com/rajeshpbirder",
    whatsappChannel: "https://whatsapp.com/channel/0029Vb6GQN3BKfi9ObhIVD2Y",
  },
  seasonLabel: "2026–27",
  // The seat column on the 2026–27 poster reads "Seats available as on 16th Feb 2026".
  seatsAsOn: "2026-02-16",
} as const;

// On Vercel the production address is known at build time: the real domain once it is attached, the
// *.vercel.app address before that. Links, share cards and the sitemap follow it, and only the real
// domain is open to search engines, so trial deployments never compete with aviantrails.in.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const origin = vercelHost ? `https://${vercelHost}` : site.url;
export const indexable = !vercelHost || /(^|\.)aviantrails\.in$/.test(vercelHost);

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// The record, exactly as Rajesh has published it (eBird profile screenshots and New Year posts).
// Sources, by Instagram post code (see docs/research/business-brief.md for the full table):
//   world 2,952 / 3,606 checklists, India all-time #10 (1,155), Uttarakhand all-time #1 (621), 2025 = 1,984 → DS865yrEzCh
//   2019 #1 India (791) → B6zSvYaA4DQ · 2021 #1 India (807) → CYK-Tz_vXR-
export const record = {
  worldSpecies: 2952,
  worldChecklists: 3606,
  worldAsOn: "Dec 2025",
  indiaAllTimeRank: 10,
  indiaAllTimeSpecies: 1155,
  uttarakhandAllTimeRank: 1,
  uttarakhandAllTimeSpecies: 621,
  species2025: 1984,
  countries2025: 10,
  topIndia: [
    { year: 2019, species: 791 },
    { year: 2021, species: 807 },
  ],
} as const;

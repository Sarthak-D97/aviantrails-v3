import type { PhotoSlug } from "./photo-sizes";

// Rajesh's record, season by season, from his own New Year posts and eBird screenshots.
// Sources by Instagram post code: 2019 → B6zSvYaA4DQ · 2021 → CYK-Tz_vXR- · 2022 (876, lodges) → Cm20gf7yQb7 ·
// 2023 (1,744; life list 2,096) → C1nleIMBsTM · 2024 India lists → C-g5JnhhI7D · 2025 → DS865yrEzCh · 2017 monal → C1VtO6yhZc_

export type Course = { year: string; lines: string[]; figure?: { value: string; label: string } };

export const courses: Course[] = [
  {
    year: "2008",
    lines: [
      "At a rural-tourism workshop at Jim's Jungle Retreat in Corbett, a Sony bridge camera and a bird he can't name on a guava tree. Imran Khan, one of the resource people, tells him it is a paradise flycatcher.",
    ],
  },
  {
    year: "2013",
    lines: ["After five years promoting rural tourism in Corbett's Village, Chhoti Haldwani, he switches to birding, and realises the flycatcher was his first bird photograph."],
  },
  {
    year: "2016–17",
    lines: ["Camp Milieu near Chhoti Haldwani: mud huts, a feeder, home-cooked food, and guests on foot in the forest."],
  },
  {
    year: "2017",
    lines: ["Photographs the white-tailed form of Sclater's Monal at Sela Pass, among the first photographs of the bird since it was described."],
  },
  {
    year: "2019",
    figure: { value: "791", label: "species in India, #1 on eBird" },
    lines: ["Top eBirder in India for the year. 34 tours as team leader across India, Bhutan and Sri Lanka."],
  },
  {
    year: "2021",
    figure: { value: "807", label: "species in India, #1 again" },
    lines: ["Top eBirder in India again. With Sheela, scouts Manila and the Bhagirathi valley; the Grandala recce makes the Times of India."],
  },
  {
    year: "2022",
    figure: { value: "876", label: "species in India, #2" },
    lines: ["Opens Manila Birding Lodge (April) and Milieu Villa Birding Lodge (October): \"Having my own birding lodge was a long-awaited dream.\""],
  },
  {
    year: "2023",
    figure: { value: "1,744", label: "species in one year" },
    lines: ["Leads groups in eight countries. Life list reaches 2,096."],
  },
  {
    year: "2024",
    lines: ["Tenth year of birding in Ladakh. Seven guests see 18 birds-of-paradise in Papua New Guinea. India list 1,140; Sheela's, 900."],
  },
  {
    year: "2025",
    figure: { value: "1,984", label: "species, a personal best" },
    lines: [
      "Ten countries with Avian Trails groups. An Icterine Warbler at Pangong Tso: the first record for India.",
      "All-time #1 eBirder in Uttarakhand (621 species) and #10 in India (1,155). World list: 2,952.",
    ],
  },
  {
    year: "2026",
    lines: ["Seventeen departures on the 2026–27 timetable, from Peninsular Malaysia to Costa Rica."],
  },
];

export const talks = [
  { title: "A Decade of Birding", id: "oCEykJYs7x4" },
  { title: "Chasing Rare Birds and Mammals in Ladakh", id: "wNRwUutU3PE" },
  { title: "Bird Photography in Bhutan", id: "thX4JUtZz4E" },
  { title: "Chasing Endemic Fauna in Sri Lanka", id: "Gmr4RqM3m30" },
  { title: "Discovery of Two Potential Birding Destinations in Uttarakhand", id: "U7ZACTidMiI" },
  { title: "Cheer Pheasant", id: "hQIKxZyGz7A" },
] as const;

export const press: { title: string; source: string; when: string; href?: string; photo?: PhotoSlug }[] = [
  {
    title: "Grandala flocks found at low altitude in the Bhagirathi valley, on the forest department's recce",
    source: "The Times of India and Uttarakhand press",
    when: "February 2021",
    photo: "press-toi-grandala-2",
  },
  {
    title: "36 of the photographs in \"Avian Paradise of India: Sattal\", the Nainital district administration's pocket guide to 122 species",
    source: "Rajesh and Sheela Panwar, contributors",
    when: "2020",
    photo: "sattal-guide-cover",
  },
];

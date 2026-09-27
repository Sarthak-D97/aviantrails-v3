// Region colour: each line, destination and gallery group wears one plumage accent, so the site
// reads in more colour than the ground and the one action blue. Himalaya keeps Grandala blue (it's
// the home range); the rest borrow from birds found there. Selected everywhere is safe on every
// phase (see DESIGN.md's contrast table for --tragopan/--teal/--plum).

export type Accent = "grandala" | "tragopan" | "ochre" | "teal" | "plum" | "moss" | "fern";

const BY_ID: Record<string, Accent> = {
  // Departure lines (src/content/tours.ts `network`)
  himalaya: "grandala",
  "north-east": "tragopan",
  "desert-west": "ochre",
  abroad: "plum",
  // Custom-tour lines (src/content/destinations.ts)
  uttarakhand: "grandala",
  "western-himalaya": "grandala",
  "west-desert": "ochre",
  south: "teal",
  // Gallery groups (src/content/gallery.ts)
  "ladakh-kashmir": "ochre",
  "home-patch": "moss",
  "night-and-land": "fern",
};

export function accentFor(id: string): Accent {
  return BY_ID[id] ?? "grandala";
}

/** Selected-state text colour, at AA contrast on a well in every phase. */
export const accentText: Record<Accent, string> = {
  grandala: "text-grandala-ink",
  tragopan: "text-tragopan",
  ochre: "text-ochre",
  teal: "text-teal",
  plum: "text-plum",
  moss: "text-moss",
  fern: "text-fern",
};

/** A small solid dot marking the region, decorative only. */
export const accentDot: Record<Accent, string> = {
  grandala: "bg-grandala",
  tragopan: "bg-tragopan",
  ochre: "bg-ochre",
  teal: "bg-teal",
  plum: "bg-plum",
  moss: "bg-moss",
  fern: "bg-fern",
};

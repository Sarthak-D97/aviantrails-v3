# Avian Trails — aviantrails.in · version 3 (bird hide at first light)

The new website for **Avian Trails**, the birding and bird-photography tour business of **Rajesh and Sheela Panwar**
(Chhoti Haldwani, Kaladhungi, Uttarakhand). Built with Next.js 16, React 19 and Tailwind CSS 4.

The design is a **bird hide at first light**: soft, moulded surfaces on a lichen-sage ground, lit from where the sun is
for the visitor right now. The page follows the visitor's clock (dawn, daylight, golden hour, night): the ground, the
shadows, the sky in the hide window and even the softness of the Fraunces headings change with the hour. A chip on the
home page shows the light and lets you preview the others. Headings are Fraunces, everything else Lexend. Grandala
blue is the one action colour (WhatsApp), the Sunbird flame marks the next departure, and each region wears a bird's
colour of its own (Tragopan crimson for the North-East, teal for the south, plum for trips abroad, ochre for the desert).

Motion, all in plain JavaScript and all switched off for visitors who ask for reduced motion:

- **The flock** — small birds school across the hide window (separation, alignment, cohesion) and part round your
  pointer like a flock round a hawk.
- **Elastic pull** — the WhatsApp tag at the foot of the home page stretches when tugged and springs back; tug it far
  enough and it opens WhatsApp. Shelves of tours and photographs stretch at their ends when dragged with a mouse.
- **Landing** — lists land one after another like birds settling, when they scroll into view or when you pick a
  region, year or filter.
- **First light** — on the first page of a visit, a short preloader: the Sunbird in a moulded pebble, a groove that
  fills in plumage colours, the name of the hour, and a small flock crossing the screen. It shows once per visit and
  never holds the page for more than about 2.5 seconds. Between pages, a soft skeleton shows while a page loads.

Every photograph and video clip is Rajesh's own (or his guests'), taken from his Instagram and the old website.
Nothing on the site is AI-generated.

**Look, per hour.** Each time of day is a full palette: the page ground, lifted paper cards, a deep band colour (plum at
dawn, forest by day, burgundy at golden hour, indigo at night), a warm band (peach, sand, apricot, moss) and a glow
accent (rose, sun gold, amber, moon teal). Pages alternate light, deep and warm sections. The home page opens on a
full-width photograph chosen by the hour, and every inner page opens on a photo banner.

## Pages

| Route | What it is |
| --- | --- |
| `/` | A full-width photograph for the hour with the promise and the next departure, four figures from Rajesh's record, a shelf of next departures, three ways to travel, frames from the gallery, both lodges with three doorstep birds each, the latest field reports, Rajesh & Sheela with guest words, an FAQ, and the pull tag |
| `/departures` | The 2026–27 departures as tags (filter by region; tap a tour to open it) and, folded away, the tours already departed |
| `/departures/[tour]` | One page per tour: dates, days, seats, cost, highlights, the last run's report and eBird list, a photo shelf, reservation form |
| `/custom-tours` | Six regions, each with its places folded under a count, and a custom-trip request |
| `/lodges`, `/lodges/milieu-villa`, `/lodges/manila` | The two lodges: rooms, seasons, doorstep birds, getting there |
| `/field-reports` | 32 trip reports since 2024, one year at a time, with species totals and eBird links |
| `/gallery` | 78 of Rajesh's photographs, one region at a time, with a keyboard-friendly lightbox |
| `/about` | Rajesh & Sheela: the story, the record as a shelf of seasons, press, talks, groups, local partners |
| `/reviews` | 14 guest testimonials: the line that stands out, with the full words a tap away |
| `/enquiry` | Contact details and the reservation form |

Add `?phase=dawn`, `?phase=day`, `?phase=dusk` or `?phase=night` to any address to see that light.

Old WordPress addresses (`/customized-tours`, `/contact-us`, `/a-decade-of-birding`, …) redirect to the new pages
(see `next.config.ts`), so old links and Google results keep working.

Every link to the site shows a **share card** on WhatsApp / Instagram / Facebook: the tour's name, dates and seats
left on the sage ground, beside one of Rajesh's photographs in a moulded frame. They are generated automatically
(`src/app/**/opengraph-image.tsx`).

## Updating the site (no design work needed)

Everything that changes lives in `src/content/`:

- **Seats** — `src/content/tours.ts`, the `seats` number on each tour. Update `seatsAsOn` in `src/content/site.ts` to
  the date you checked them; the site prints "Seats as on …" everywhere.
- **Prices** — set `price` on a tour, e.g. `price: "₹2,45,000 per person, twin sharing"`. While it is `null` the site
  says "Cost: On WhatsApp".
- **A new tour** — copy one entry in `tours.ts`, give it the next `no`, a `slug`, its `line` (`himalaya`,
  `north-east`, `desert-west` or `abroad`), dates, seats and photos. Its page, departure tag, share card and sitemap
  entry appear automatically. Tours move to "Departed" on their own after the end
  date (pages rebuild daily).
- **A field report** — add an entry at the top of `src/content/reports.ts`.
- **New photos** — put a JPEG in `public/photos/` and add its pixel size to `src/content/photo-sizes.ts`.

## What still needs Rajesh

1. **Current seat counts** — the site shows the poster's numbers "as on 16 Feb 2026".
2. **Prices** for each departure, if he wants them public (you said yes; none were available).
3. A few **photos of Manila Birding Lodge** in daylight (only one small night photo exists) and of the Milieu Villa
   rooms at full resolution.
4. Photos for **Tal Chhapar** (the page uses his Rajasthan photos from other sites, captioned truthfully) and Rajaji.
5. A look at the testimonials: they are the 2016–2020 ones from the old site; newer guest words would help.

## Develop, build, deploy

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (54 static routes)
```

**Deploy on Vercel:** import the folder (or a Git repo of it) at vercel.com → New Project → Next.js, no settings
needed. Then in Vercel → Domains add `aviantrails.in` and `www.aviantrails.in`, and at the domain registrar point the
DNS to Vercel (an `A` record `76.76.21.21` for the apex and a `CNAME` `cname.vercel-dns.com` for `www`, or whatever
Vercel shows). The WhatsApp, phone and email links need no backend: the reservation form composes a WhatsApp message
(or an email) in the visitor's own app; nothing is stored.

## Ads

The reel and timetable posters were made in the v1 (railway) look; their generator lives in the `aviantrails-v1`
repository under `promo/`. If this version is chosen, they get restyled to match it.

## Where things came from

- `docs/research/business-brief.md` — everything learned about the business, with sources.
- `PRODUCT.md` — the product record the design follows. `.impeccable/` — design-process files.
- Every image in `public/photos` and `public/clips` has its origin (Instagram post or old-site file) embedded in its
  metadata. Clips were trimmed and **muted** (Instagram music is not licensed for re-use).
- Guest quotes are verbatim apart from trimmed passages (marked …) and corrected spellings of place and bird names.

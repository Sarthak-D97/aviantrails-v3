---
name: Avian Trails
description: A bird hide at first light. Soft UI moulded from one flora ground, lit by the visitor's own sun.
colors:
  ground: "#e3e9d7"
  well: "#d6dec8"
  rule: "#c8d2b8"
  ink: "#1d2a1c"
  ink-2: "#455541"
  ink-3: "#4c5a46"
  moss: "#34502e"
  grandala: "#2c4dcc"
  grandala-deep: "#223fae"
  grandala-ink: "#223fae"
  on-grandala: "#ffffff"
  sunbird: "#c93a21"
  on-sunbird: "#ffffff"
  ochre: "#a97718"
  tragopan: "#96203f"
  teal: "#0a5c57"
  plum: "#623570"
  seat: "#2f6b2c"
  seat-bg: "#d2e3c2"
  wait: "#7a4f08"
  wait-bg: "#efdfb8"
  gone: "#5c6457"
  alert: "#b0301c"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.7rem, 5.6vw, 4.9rem)"
    fontWeight: 560
    lineHeight: 0.98
    letterSpacing: "-0.025em"
    fontVariation: "'SOFT' var(--soft), 'WONK' 0"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.4rem, 6vw, 4.4rem)"
    fontWeight: 560
    lineHeight: 1.02
    letterSpacing: "-0.015em"
    fontVariation: "'SOFT' var(--soft), 'WONK' 0"
  section:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)"
    fontWeight: 560
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.12
  body:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 380
    lineHeight: 1.6
  lead:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 380
    lineHeight: 1.55
  label:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.3
  meta:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 380
    fontFeature: "'lnum' 1, 'tnum' 1"
  badge:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 500
    lineHeight: 1.25
rounded:
  field: "1rem"
  media: "1.2rem"
  pull-tag: "1.4rem"
  soft: "1.5rem"
  bezel: "1.75rem"
  window: "2.4rem"
  pebble: "999px"
spacing:
  gutter: "clamp(1.25rem, 4.5vw, 2.75rem)"
  container: "78rem"
  grid-gap: "1.5rem"
  section: "7rem"
  touch-min: "2.75rem"
components:
  button-action:
    backgroundColor: "{colors.grandala}"
    textColor: "{colors.on-grandala}"
    typography: "{typography.label}"
    rounded: "{rounded.pebble}"
    padding: "0 24px"
    height: "52px"
  button-action-hover:
    backgroundColor: "{colors.grandala-deep}"
  button-pebble:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pebble}"
    padding: "0 24px"
    height: "52px"
  chip-filter:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.pebble}"
    padding: "0 16px"
    height: "44px"
  chip-filter-selected:
    backgroundColor: "{colors.well}"
    textColor: "{colors.grandala-ink}"
  card-soft:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.soft}"
    padding: "20px"
  departure-tag-next-flag:
    backgroundColor: "{colors.sunbird}"
    textColor: "{colors.on-sunbird}"
    rounded: "{rounded.pebble}"
    padding: "2px 10px"
  badge-seat:
    backgroundColor: "{colors.seat-bg}"
    textColor: "{colors.seat}"
    typography: "{typography.badge}"
    rounded: "{rounded.pebble}"
    padding: "4px 12px"
  badge-wait:
    backgroundColor: "{colors.wait-bg}"
    textColor: "{colors.wait}"
    typography: "{typography.badge}"
    rounded: "{rounded.pebble}"
    padding: "4px 12px"
  badge-gone:
    backgroundColor: "{colors.well}"
    textColor: "{colors.gone}"
    typography: "{typography.badge}"
    rounded: "{rounded.pebble}"
    padding: "4px 12px"
  badge-on-tour:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.badge}"
    rounded: "{rounded.pebble}"
    padding: "4px 12px"
  input-field:
    backgroundColor: "{colors.well}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
    height: "52px"
  nav-pill:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pebble}"
    height: "64px"
---

# Design System: Avian Trails

## 1. Overview

**Creative North Star: "The Bird Hide at First Light"**

The site is a hide: soft, tactile and moulded out of one flora ground. Its window shows the sky of the visitor's own hour with a live flock crossing it, and everything else is pinned inside as specimen tags, pebble buttons and bezelled photographs. Surfaces are not drawn, they are pressed out of the ground (raised) or into it (inset), and the light that shapes them comes from the real sun position of the visitor's local time.

The page follows the clock. Four circadian phases (dawn 05:00–08:00, day 08:00–16:30, dusk 16:30–19:30, night 19:30–05:00) swap the ground, sky and flock colours; between them the sun's angle continuously sets the shadow offset (`--lx`, `--ly`) and the softness of the headings (`--soft`). An inline head script sets all of it before first paint, so the page never flashes the wrong light; `?phase=dawn|day|dusk|night` previews a phase and the circadian chip cycles through them. Day is the default and the phase the share cards are drawn in.

The system refuses the stock tour-operator page and flat glassy SaaS softness. It must never read as "a generic travel agency (stock 'Book Now' banners, icon rows, package cards), luxury-safari gloss (dark/gold/moody 'exclusive'), a cold white photo portfolio that doesn't sell trips or show the people, or a pretty site where upcoming dates and seats are hard to find." Pages are short and low in cognitive load: one promise, one action, one line of proof.

Layout is a single centred container (78rem max, gutter `clamp(1.25rem, 4.5vw, 2.75rem)`), sections spaced 5rem apart on phones and 7rem from `md`, card grids at 1rem gaps on phones and 1.5rem from `sm`. The nav is a floating soft pill, sticky 12–16px from the top. Every tap target is at least 44px tall; primary actions are 52px.

Motion is spring-led on purpose: the owner asked for an elastic pull and a flock landing, so overshoot (`--ease-spring`, `cubic-bezier(0.34, 1.56, 0.64, 1)`) is the house easing for anything physical. Everything moves from a visible default state and everything is still under reduced motion.

**Key Characteristics:**
- One flora ground per phase; surfaces are raised or inset from it, never a different colour card on top.
- Shadows cast from the computed sun position, never a fixed top-left light.
- Plumage-only accents: Grandala ultramarine for the action, Sunbird flame for the next departure.
- Fraunces headings whose SOFT axis follows the hour; Lexend body that thins at night.
- Pebbles, specimen tags with eyelets, bezelled photos, a hide window with a live boids flock.
- Springs with overshoot for physical motion; staggered "flock" landings; stillness under reduced motion.

## 2. Colors: The Flora and Plumage Palette

A single sage-lichen ground carries the surfaces; colour arrives as plumage, and each hue means something: the action, the next departure, a seat state, or a region. The ground also catches the hour's sky in two soft washes at the top of each page. Frontmatter values are the day phase (the default); the other phases are below.

### Primary
- **Grandala Ultramarine** (`grandala`): the one action colour. The WhatsApp pebble, the pull tag, focus rings and text selection. Hover deepens to **Grandala Deep** (`grandala-deep`). Night lifts it to #4d69e8.
- **Grandala Ink** (`grandala-ink`): the action colour's text form, for a choice pressed into a well (selected region, year and gallery pebbles; checked form choices). Night #9fb0ff. At least 5:1 on `well` in every phase.

### Secondary
- **Fire-tailed Sunbird Flame** (`sunbird`): the "Next departure" flag and nothing else. Night lifts it to #ff7a5a with dark text (#1c100c).

### Tertiary
- **Hill Ochre** (`ochre`): the phase icon in the circadian chip, and the region colour of the desert lines and Ladakh & Kashmir (waitlist uses `wait`, not ochre). Night #e0b155.
- **Moss** (`moss`): the Sunbird bird mark, the lodge links on the home page, and the Kaladhungi & Corbett gallery group. Night #b9cf9f.
- **Fern** (`fern`): the Night & landscape gallery group. Night #9fbb7e.

### Region plumage
Each departure line, custom-tour region and gallery group wears one accent, mapped in `src/content/accents.ts`. It shows as a small solid dot (on pebbles, departure tags and region headings) and as the text colour of a chosen pebble. All three new hues hold at least 4.8:1 on `well` and `ground` in every phase.
- **Grandala** (`grandala-ink` text): Himalaya, Uttarakhand, Ladakh-Kashmir-Himachal custom line.
- **Satyr Tragopan Crimson** (`tragopan`): the North-East. Also the record figures (791, 807, 621) and the lodges link on the home page's "Three ways". Night #ff9bb0.
- **Verditer Teal** (`teal`): the south and the islands; the custom-tours link on "Three ways". Night #7ee0d6.
- **Monal Plum** (`plum`): trips abroad. Night #d3a8e8.
- **Hill Ochre** (`ochre`): the desert and the west; Ladakh & Kashmir in the gallery.

### State
- **Seat** (`seat` on `seat-bg`): seats available. Night #a8d98f on #213a22.
- **Wait** (`wait` on `wait-bg`, 5.4:1): waitlist. Night #f0c56a on #3e3218.
- **Gone** (`gone` on `well`): departed. Night #97a28c.
- **On tour**: inverted, `ground` on `ink`.
- **Alert** (`alert`): form errors and invalid outlines only. Night #ff8a70.

### Neutral
- **Lichen Sage Ground** (`ground`): page, raised surfaces, pebbles, the eyelet. Surface equals ground; depth comes from shadow alone.
- **Pressed Well** (`well`): inset wells, form fields, selected chips, photo placeholders.
- **Rule** (`rule`): scrollbar thumb and resting link underline.
- **Ink / Ink 2 / Ink 3** (`ink`, `ink-2`, `ink-3`): headings and key numbers; body and nav; meta, dates and captions. Ink 3 holds at least 4.6:1 on `well` by day and at dusk, so captions may sit in wells.

### Circadian phases
| Phase | ground | well | rule | sky-a to sky-b | flock | hi | lo |
|---|---|---|---|---|---|---|---|
| Dawn | #e6e7d9 | #d9dbca | #cfd1bd | #f3cdb4 to #d9d6ec | #3a3548 | rgb(255 253 247/.88) | rgb(118 108 88/.28) |
| Day | #e3e9d7 | #d6dec8 | #c8d2b8 | #cfe0ee to #eef2e6 | #28402a | rgb(255 255 255/.82) | rgb(80 102 64/.30) |
| Dusk (golden grass) | #e6d9aa | #dacb98 | #cdbd86 | #f0b27a to #e8a3a0 | #3b2a22 | rgb(255 248 220/.80) | rgb(122 92 30/.32) |
| Night | #172019 (surface #202b22) | #121a14 | #2c3a2e | #0e1531 to #1b2a3a | #dfe7d2 | rgb(210 230 190/.09) | rgb(0 0 0/.55) |

Dusk also warms `ink-2` (#454c3a) and `ink-3` (#4a4f3e). Night lifts the surface a step above the ground so raised shapes read in the dark, inverts ink (#e3e9d7 / #b6c1a9 / #95a188) and sets `color-scheme: dark`. The sky gradient (170deg, sky-a to sky-b) fills the hide window; the same two sky colours also wash the top of the page body (sky-a at 42% from the top right, sky-b at 34% from the left), so dawn reads peach and lavender, dusk orange and rose, night indigo. Moulded surfaces keep the plain ground colour.

### Named Rules
**The One Action Rule.** Grandala blue means "do this" (and, as a dot, the Himalaya region). It is never a heading colour or a background panel. When a chosen option is pressed into a well, its text takes the action's text form, `grandala-ink`, never raw `grandala`.

**The One Flame Rule.** Sunbird flame marks the single next departure. One flag per view; no other element may wear it.

**The Plumage Rule.** Every accent is a real bird's colour. No new hue enters without a bird behind it. Region hues mark place, never state: seat colours stay the only state colours.

**The State in Words Rule.** Seat colours always travel with the words ("3 seats left", "Waitlist") and a dot; colour is never the only signal.

## 3. Typography

**Display Font:** Fraunces (variable: opsz, SOFT, WONK; roman and italic) with Georgia
**Body Font:** Lexend (variable) with system-ui

**Character:** An organic, soft-shouldered serif over an ultra-clean geometric sans built for reading ease. The serif carries the voice; the sans carries the facts.

### Hierarchy
- **Display** (560, `clamp(2.7rem, 5.6vw, 4.9rem)`, 0.98, -0.025em): the home promise only. Its last words may go italic at SOFT 100, WONK 1.
- **Headline** (560, `clamp(2.4rem, 6vw, 4.4rem)`, 1.02): page names.
- **Section** (560, `clamp(1.8rem, 3.6vw, 2.6rem)`, 1.08): section titles.
- **Title** (600 on tags and form heads, 560 on cards; 1.15–1.6rem, 1.12–tight): tag names, card heads, lodge and report names. Pull quotes set Fraunces italic at 1.25rem.
- **Body** (Lexend 380, 1.0625rem rising to 1.125rem at 48rem, 1.6): running text. Leads 1.12rem to 1.2rem at 1.55–1.6, max 32–42rem.
- **Label** (Lexend 500, 0.92–1rem): buttons, pebbles, nav, form labels.
- **Meta** (Lexend 380, 0.85–0.95rem, `ink-3`, tabular lining numerals): dates, tour numbers, captions, "seats as on".
- **Badge** (Lexend 500, 0.82rem; the next flag 600 at 0.75rem): seat badges and the flame flag.

### Named Rules
**The Hour-Soft Rule.** Fraunces headings run `font-variation-settings: "SOFT" var(--soft), "WONK" 0`. `--soft` is 100 × (1 − sin θ) of the sun angle: crisp at noon, rounded at dawn and dusk, fully soft (100) at night. Never hard-code SOFT on a heading except the one italic flourish in the hero.

**The Night Thinning Rule.** Lexend body is weight 380 by day and 340 at night with +0.005em tracking, because light text on the moss night ground blooms.

**The Tabular Numbers Rule.** Every date, count, seat number and tour number uses lining tabular numerals.

**The Sentence Case Rule.** No uppercase labels and no tracked-out small caps anywhere; there are no kickers above headings.

## 4. Elevation

Depth is soft UI: dual shadows (a light `--hi` on the sun side, a coloured `--lo` on the shade side) with offsets that come from the sun. The circadian script sets `--lx = cos θ × 7px` and `--ly = max(sin θ, 0.45) × 7px` where θ runs 0 to π from 06:00 to 18:00; at night the light is fixed at 3px / 6px. Surfaces are either raised out of the ground or pressed into it; there is no third level and no floating card with a grey drop shadow.

### Shadow Vocabulary
- **Raised** (`box-shadow: calc(var(--lx) * -1) calc(var(--ly) * -1) 18px var(--hi), var(--lx) var(--ly) 20px var(--lo)`): cards, tags, the nav pill, the hide window frame, forms.
- **Inset** (`box-shadow: inset var(--lx) var(--ly) 12px var(--lo), inset calc(var(--lx) * -1) calc(var(--ly) * -1) 12px var(--hi)`): wells, fields, quotes, the hide window, selected filters.
- **Pebble** (0.6× the raised offsets, 10px / 12px blur): chips, icon buttons, secondary buttons.
- **Action glow** (sun-side `--hi` at 0.6× plus a 0.8× 18px shade of 45% Grandala): the blue action only.
- **Bezel** (raised, 22px shade): the moulded frame around photographs.
- **Eyelet** (0.35× inset, 3px): the punched hole on a specimen tag.
- **Current** (`inset 2px 2px 5px var(--lo), inset -2px -2px 5px var(--hi)`): the active nav link and checked radio pebble.

### Named Rules
**The Sun-Cast Rule.** Every shadow reads `--lx`/`--ly`. A shadow with fixed pixel offsets is a defect.

**The Same-Ground Rule.** Raised and inset surfaces share the ground colour (inset uses `well`). If a card needs a different fill to be seen, the shadow is wrong.

## 5. Components

### Buttons
- **Action (WhatsApp):** a Grandala pebble, full radius, 52px tall (48px in the nav), 24px sides, Lexend 500 1rem, a leading message icon, the action glow. Hover deepens to `grandala-deep`.
- **Pebble (secondary):** raised ground pebble, `ink` text, same size, a trailing arrow that springs 4px right on hover.
- **Text link:** `ink` 500 with a 2px `rule` underline at 0.28em offset that darkens to `ink` on hover, plus the springing arrow.
- **Press behaviour (all pressables):** lift 2px on hover, sink 1px and scale 0.975 on press (90ms), transform on the spring over 360ms, shadow 240ms out, colour 200ms out.
- **Focus:** 2.5px Grandala outline, 3px offset, following each element's own radius (focus never reshapes the element).

### Chips
- **Filter pebbles** (departures by region, reports by year): 44px, full radius, 0.95rem, a count in 0.82rem tabular. Unselected: raised pebble, `ink-2`. Selected: pressed inset into `well`, `grandala-ink` text, 500. Gallery region pebbles work the same way. Choosing one re-flies the list with the flock landing; nothing moves on first load.
- **Circadian chip:** a pebble with the phase icon in `ochre` (lands on the spring when it changes), the phase name in `ink` 500, the local time in tabular `ink-3`. Tapping previews the next phase; a "Now" pebble returns to the real hour.

### Cards / Containers
- **Corner Style:** soft cards 1.5rem; images inside cards 1.1–1.25rem; the bezel 1.75rem with 0.5rem padding; the hide window 2.4rem outer frame over a 1.9rem inset.
- **Background:** `ground` raised, `well` inset. **Border:** none, ever.
- **Internal Padding:** 12px around a photo card, 16–20px on tags, 20–40px on forms and feature blocks.
- Cards that link use the press behaviour; their photo scales 1.04 on hover over 700ms (ease-out).

### Inputs / Fields
- **Style:** pressed wells (`well`, inset shadow), 1rem radius, 52px min height, 12px × 16px padding, Lexend 1rem `ink`, `ink-3` placeholder, labels 0.92rem 500 `ink-2` above.
- **Radio choices:** pebbles that press in when checked (inset, `well`, `grandala-ink` 500).
- **Focus:** 2px Grandala outline, 2px offset. **Error:** 2px `alert` outline and a 0.9rem 500 `alert` message.

### Navigation
- A raised pill, 64px tall, max 74rem, sticky 12px (16px from `sm`) from the top. Links 0.95rem `ink-2` in 44px full-radius slots; the current page goes `ink` 500 and is pressed in. The WhatsApp action sits at the right end.
- Below `lg`: a 48px pebble menu button drops a raised panel that lands on the spring (420ms), links in Fraunces 1.35rem in 1rem-radius slots.

### Departure Tag (signature)
A specimen tag: raised card, an eyelet top-left (a punched hole in the ground colour; at night it takes `well`, so the hole stays darker than the lifted surface), "Tour 07" in tabular meta, the name in Fraunces 600 (1.2rem to 1.45rem), dates and days, and the seat badge pinned to the foot. Hover tilts it -0.6deg on top of the press lift. The next departure carries the flame flag ("Next departure", 0.75rem 600, full radius). Tags live on a **shelf**: a full-bleed horizontal snap row whose side padding (and scroll padding) is `max(gutter, (100vw − 78rem) / 2 + gutter)`, so the first tag lines up with the container edge at every width. It drags with a mouse, stretches like a rubber band past either end and springs back; touch keeps native scroll; pebble arrows step it.

### Seat Badge
A pressed pill (inset 1px 1px 3px shadow), 0.82rem 500, a 6px dot in `currentColor`, the state in words. Available `seat` on `seat-bg`; waitlist `wait` on `wait-bg`; departed `gone` on `well`; on tour `ground` on `ink`.

### Pull Tag (signature)
The closing WhatsApp action as a Grandala tag on a string: 1.4rem radius, a pebble pin and a punched hole, Fraunces 600 1.35rem title. At rest it sways ±1.6deg over 4.8s. Tug past 78px to open WhatsApp; release sooner and it springs back with overshoot (damped spring). A mouse or pen can tug anywhere on the tag; on touch screens only the 44px eyelet grip tugs, and the tag face keeps normal touch behaviour so a thumb on it scrolls the page. A plain tap always works. Under reduced motion it does not sway or stretch.

### Hide Window and Flock (signature)
An inset rounded slot filled with the phase's sky gradient, holding a 64-bird boids canvas (separation, alignment, cohesion) drawn in the `--flock` colour, sweeping towards a point that wanders in the open upper sky (x 0.36 ± 0.24, y 0.22 ± 0.10 of the window, clear of the pinned photo and tag) and parting around the pointer like a flock round a hawk. Birds draw at full size on phones. It pauses off-screen and draws once, still, under reduced motion. A bezelled photo (-3deg) and the next-departure tag (+2.5deg) are pinned over it.

### Flock Landing
Lists below the fold arrive like a flock: from 25% opacity and a small curved offset (about ±14–32px, ±2.5–3deg), each item lands over 760ms on the spring, 70ms apart, cycling every 8 items. Items already in view are never held back, and the resting state is always visible.

### Preloader (signature)
First light in the hide, once per visit: a full-screen ground with the sky washes, a raised pebble (7.5rem) holding the moss Sunbird and breathing on a 2.4s loop, the wordmark in Fraunces, a groove pressed into the ground that fills in plumage colours (grandala → teal → ochre → sunbird → tragopan) over 1.1s, and the hour's name ("Golden hour · finding the birds"). A V of seven stroked birds crosses the screen, wings beating. It lifts (fade, content rises 14px) once fonts and the first photographs are in, no sooner than 1.1s and no later than 2.4s; a CSS animation clears it at 2.6s if script never runs. The head script marks repeat views in the session before paint, so later pages never see it. Reduced motion: no flight, no breathing.

### Loading Skeleton
Between pages (`app/loading.tsx`): the Sunbird pebble and the plumage groove on a loop, then grooves pressed into the ground in the shape of a page opening and three cards, with light passing along them (1.6s).

### Share Cards
1200 × 630, day palette only: sage ground, the name in Fraunces 600, facts in Lexend 400/500 (static woffs), a pressed seat badge, one of Rajesh's photographs in a bezel, and the flame "Next" flag when relevant.

## 6. Do's and Don'ts

### Do:
- **Do** derive every shadow from `--lx`/`--ly`/`--hi`/`--lo` so it follows the sun and the phase.
- **Do** keep Grandala ultramarine for the action (and `grandala-ink` for chosen options pressed into a well) and Sunbird flame for the single next departure.
- **Do** set headings in Fraunces with `"SOFT" var(--soft)` and body in Lexend 380 (340 at night).
- **Do** use `--ease-spring` for physical motion (press, pull, land, arrows) and `--ease-out` for colour, shadow and photo zoom.
- **Do** start every animation from a visible state and make reduced motion fully still: no sway, no flock flight, no landing.
- **Do** keep tap targets 44px minimum and primary actions 52px.
- **Do** write seat state in words next to its colour, with the date the seats are as of.

### Don't:
- **Don't** read as "a generic travel agency (stock 'Book Now' banners, icon rows, package cards)".
- **Don't** drift into "luxury-safari gloss (dark/gold/moody 'exclusive')"; night is moss green, not black and gold.
- **Don't** become "a cold white photo portfolio that doesn't sell trips or show the people".
- **Don't** make "upcoming dates and seats … hard to find".
- **Don't** use flat glassy SaaS softness: no glassmorphism, no backdrop blur, no gradient buttons.
- **Don't** add borders or hairline outlines to soft surfaces, or give a card a fill different from the ground to separate it.
- **Don't** use a fixed top-left light or a grey drop shadow with hard-coded offsets.
- **Don't** add uppercase kickers or eyebrow labels above headings.
- **Don't** use Sunbird flame or seat colours for decoration, give a region hue to a state, or add any accent hue without a bird behind it.
- **Don't** use stock or AI-generated imagery of birds, people or places.

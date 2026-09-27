---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app"]
---

# Surface brief — aviantrails.in v3 (whole marketing site; home is the primary surface)

**Mode:** Persuade. **Surface:** the public site: home, departures (+ one page per tour), custom tours, two lodges,
field reports, Rajesh & Sheela, gallery, reviews, enquiry. Third design in a side-by-side comparison with v1
(railway) and v2 (metro); same content and features.

**Audience & job:** Indian and foreign birders and bird photographers, many 50+, mostly on phones from Instagram
and WhatsApp links; lodge guests. Trust Rajesh, find a departure / custom trip / lodge stay, check dates and seats,
start a WhatsApp chat (+91 89790 37355). **Proof:** his eBird record, trip reports, guest reviews, his own photos
and clips. **Constraints:** no invented prices, seats or claims; seats are the 16 Feb 2026 values with their date;
real photos only, nothing AI-generated; **no Hindi**.

**Owner's brief (pinned):** skeuomorphism and soft UI; colour palette with a flora base and fauna accents; organic
serifs for headers with ultra-clean, highly readable geometric sans for text; Circadian UI typography; motion: the
"Flock" effect, elastic pull, hover effects, JS microinteractions; low cognitive load and short pages.

## Direction contract

THESIS: A bird hide at first light: the site is the hide, soft and tactile, its window showing the sky of the
visitor's own hour with a live flock crossing it, and everything else pinned inside as tags, notes and photos.
Refuses both the stock tour-operator page and flat glassy SaaS softness.

OWN-WORLD: Soft UI moulded from one flora ground (lichen-sage by day, dawn mist, golden grass at dusk, moss at
night), extruded and inset surfaces whose shadows are cast by the real sun position of the visitor's local time;
accents taken from plumage only: Grandala ultramarine for the action, Fire-tailed Sunbird flame for the next
departure, ochre for waitlist; Fraunces for headings with its SOFT axis following the day, Lexend for text;
specimen tags on string, pebble buttons, bezelled photo frames.

STORY: The visitor meets Rajesh's promise inside the hide, sees the next departures as tags they can drag and
open, chooses tours, a custom trip or a lodge, sees one line of proof, and tugs the tag to WhatsApp.

FIRST VIEWPORT: Floating soft nav pill. Left: Fraunces headline "Rajesh Panwar gets you the birds.", one line, the
ultramarine WhatsApp pebble and the circadian chip. Right: the hide window, an inset rounded slot with the hour's
sky and the flock, and pinned over it Rajesh's Grandala photo in a bezel plus the next-departure tag. Phone: the
window on top, the headline and action below, all inside 844px.

FORM: Bird hide at first light, #3 of 7 on the ordered list (1 field kit on felt, 2 herbarium sheet, 3 bird hide,
4 ringing station, 5 field-guide plate, 6 migration map, 7 dawn-chorus score), fused with the owner's pinned
soft-UI world. Seed key 19697f94; assigned. Raise (daylight section): every shadow is cast from computed sun
position, not a fixed top-left light. Signature interactions: the flock (boids that part around the pointer),
the elastic pull tag to WhatsApp, the draggable tag shelf with rubber-band edges. Motion: springs from a visible
default; everything still under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

import { ArrowRight, ExternalLink, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { altFromCaption, Photo } from "@/components/media/Photo";
import { TextLink, WhatsAppButton } from "@/components/site/Actions";
import { Faq, type QA } from "@/components/site/Faq";
import { SectionTitle } from "@/components/site/PageHead";
import { PhaseHero } from "@/components/site/PhaseHero";
import { DepartureTag } from "@/components/soft/DepartureTag";
import { FlockIn } from "@/components/soft/FlockIn";
import { PullTag } from "@/components/soft/PullTag";
import { Shelf } from "@/components/soft/Shelf";
import { toTag } from "@/content/board";
import { lines as destinations } from "@/content/destinations";
import { lodges } from "@/content/lodges";
import type { PhotoSlug } from "@/content/photo-sizes";
import { reports } from "@/content/reports";
import { reviews } from "@/content/reviews";
import { record, site, whatsappLink } from "@/content/site";
import { seatsAsOnLabel, tours, upcoming } from "@/content/tours";

// Rebuilt daily so seat states (departed, on tour) follow the calendar.
export const revalidate = 86400;

const hello = "Hello Rajesh, I found Avian Trails online and would like to know about your upcoming tours.";

const ways: { title: string; text: string; href: string; link: string; photo: PhotoSlug; caption: string; tone: string }[] = [
  {
    title: "Departures",
    text: "Fixed-date small groups, India and abroad, each led by Rajesh.",
    href: "/departures",
    link: "See the dates",
    photo: "mongolia-eagle-fox",
    caption: "Golden Eagle · Mongolia · Oct 2025",
    tone: "text-grandala-ink",
  },
  {
    title: "Custom tours",
    text: "Your dates and target birds, planned with the guides he trusts.",
    href: "/custom-tours",
    link: "Plan one",
    photo: "panchachuli-dawn",
    caption: "Panchachuli at first light · Munsyari · Dec 2024",
    tone: "text-teal",
  },
  {
    title: "Our two lodges",
    text: "Milieu Villa by Corbett's forest, and Manila in the Cheer Pheasant hills.",
    href: "/lodges",
    link: "Stay with us",
    photo: "manila-cheer-pheasants",
    caption: "Cheer Pheasants · Manila",
    tone: "text-tragopan",
  },
];

// A few frames from the gallery, chosen for colour and range: Himalaya to the Andes and New Guinea.
const frames: { slug: PhotoSlug; caption: string }[] = [
  { slug: "g-satyr-tragopan", caption: "Satyr Tragopan · Bhutan" },
  { slug: "fire-tailed-sunbird-tawang", caption: "Fire-tailed Sunbird · Tawang · May 2026" },
  { slug: "costarica-quetzal", caption: "Resplendent Quetzal · Costa Rica · Mar 2023" },
  { slug: "g-scarlet-finch", caption: "Scarlet Finch · Munsiyari · Dec 2019" },
  { slug: "colombia-multicolored-tanager", caption: "Multicolored Tanager · Colombia · Jul 2026" },
  { slug: "g-sclaters-monal-white-tailed-2017", caption: "Sclater's Monal · Sela Pass · May 2017" },
  { slug: "srilanka-blue-magpie", caption: "Sri Lanka Blue Magpie · Sinharaja · Dec 2019" },
  { slug: "colombia-cock-of-the-rock", caption: "Andean Cock-of-the-rock · Colombia · Jul 2026" },
  { slug: "png-flame-bowerbird", caption: "Flame Bowerbird · Papua New Guinea · Aug 2024" },
];

// Three birds from each lodge's doorstep, picked for colour; captions come from the lodge record.
const doorstepPicks: Record<string, string[]> = {
  "milieu-villa": ["hooded-pitta-kaladhungi", "long-tailed-broadbill", "pied-thrush-male-2026"],
  manila: ["manila-koklass", "manila-himalayan-bluetail", "manila-wallcreeper"],
};

export default function Home() {
  const now = new Date();
  const next = upcoming(now);
  const tags = next.map((t) => toTag(t, now));
  const quote = reviews[0];
  const words = reviews.filter((r) => !r.camp && r.name !== quote.name).slice(0, 3);
  const latest = reports.slice(0, 3);
  const places = destinations.reduce((n, l) => n + l.stations.length, 0);
  const countries = destinations.find((l) => l.id === "abroad")?.stations.length ?? 0;

  const stats: { value: string; label: string; tone: string }[] = [
    { value: "#1", label: "eBirder in India, 2019 and 2021", tone: "text-grandala-ink" },
    { value: record.worldSpecies.toLocaleString("en-IN"), label: "species on Rajesh's world list", tone: "text-tragopan" },
    { value: String(tours.length), label: `departures on the ${site.seasonLabel} calendar`, tone: "text-teal" },
    { value: String(record.countries2025), label: "countries with our groups in 2025", tone: "text-plum" },
  ];

  const faq: QA[] = [
    {
      q: "How do I book a seat?",
      a: (
        <>
          Send the tour number to Rajesh on WhatsApp ({site.whatsapp.display}), or fill in the{" "}
          <Link href="/enquiry" className="font-medium text-ink">
            enquiry form
          </Link>
          . He replies with the day-by-day itinerary and the cost.
        </>
      ),
    },
    { q: "Why are prices not on the website?", a: "Rajesh shares the cost together with the day-by-day itinerary on WhatsApp, for any departure you ask about." },
    {
      q: "Who leads the tours?",
      a: "Rajesh Panwar leads the group departures himself; he is the team leader on every tour poster. Sheela co-guides some trips, and local birding guides join on many routes, such as Irfan Jeelani and Ansar Ahmad in Kashmir.",
    },
    { q: "How big are the groups?", a: "Small. The Ladakh group in September 2026 had eight participants. Ask Rajesh about the size of the departure you have in mind." },
    {
      q: "Are the tours for birders or for photographers?",
      a: "Both. Each departure is labelled birding, bird photography or wildlife photography, and the enquiry form asks which you are coming for. Rajesh himself shoots Nikon mirrorless bodies with long lenses.",
    },
    {
      q: "Can you plan a private trip on my dates?",
      a: (
        <>
          Yes. Custom tours run to {places} places across India and {countries} countries, planned around your dates and target birds.{" "}
          <Link href="/custom-tours" className="font-medium text-ink">
            See where we go
          </Link>
          .
        </>
      ),
    },
    { q: "What if a departure is full?", a: "Waitlisted seats do reopen, and most routes also run as custom trips. Ask on WhatsApp either way." },
    { q: "How current are the seat counts?", a: `They are as on ${seatsAsOnLabel}, from Rajesh's ${site.seasonLabel} poster. Always confirm on WhatsApp before you plan travel.` },
    {
      q: "Can I stay at a lodge without joining a tour?",
      a: "Yes, ask Rajesh for dates. Milieu Villa is 255 km by road from Delhi, about six hours; Manila is 80 km from Ramnagar station, with pick-up arranged.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: site.name,
    url: site.url,
    description: site.description,
    image: `${site.url}/photos/grandala-flock-lachen.jpg`,
    logo: `${site.url}/icon.svg`,
    telephone: site.phone.number,
    email: site.email,
    founder: [
      { "@type": "Person", name: "Rajesh Panwar" },
      { "@type": "Person", name: "Sheela Panwar" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Corbett's Village, Chhoti Haldwani, P.O. Kaladhungi",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    sameAs: [site.social.instagram, site.social.youtube, site.social.facebook, site.social.x],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq
      .filter((f) => typeof f.a === "string")
      .map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a as string } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />

      <PhaseHero next={tags[0]} message={hello} />

      {/* The record in four figures, lifted over the edge of the photograph. */}
      <section aria-label="Avian Trails in figures" className="container-x relative z-10 -mt-10 md:-mt-14">
        <dl className="soft grid grid-cols-2 gap-y-8 px-5 py-7 sm:px-8 md:grid-cols-4 md:divide-x md:divide-rule md:px-4 md:py-9">
          {stats.map((s) => (
            <div key={s.label} className="px-1 md:px-6">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className={`num serif block text-[clamp(2.1rem,4vw,3rem)] leading-none font-semibold ${s.tone}`}>{s.value}</span>
                <span className="mt-2 block text-[0.92rem] leading-snug text-ink-2">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* What leaves next: tags dragged along a shelf. */}
      <section aria-labelledby="next" className="pt-16 md:pt-24">
        <div className="container-x flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionTitle id="next">Next departures</SectionTitle>
            <p className="mt-2 text-[0.95rem] text-ink-3">Seats as on {seatsAsOnLabel}. Drag the shelf, or tap a tour to open it.</p>
          </div>
          <TextLink href="/departures">All {next.length} departures</TextLink>
        </div>
        <Shelf label="Next departures" className="mt-4" itemClassName="w-[15.5rem] sm:w-[16.5rem]">
          {tags.map((t, i) => (
            <DepartureTag key={t.slug} row={t} next={i === 0} />
          ))}
        </Shelf>
      </section>

      <section aria-labelledby="ways" className="container-x pt-16 md:pt-24">
        <SectionTitle id="ways">Three ways to go birding with us</SectionTitle>
        <FlockIn className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
          {ways.map((w) => (
            <Link key={w.href} href={w.href} className="soft press group grid grid-cols-[6.5rem_1fr] items-center gap-4 p-3 text-ink no-underline md:flex md:flex-col md:items-stretch md:gap-0">
              <div className="relative aspect-square overflow-hidden rounded-[1.2rem] bg-well md:aspect-[4/3]">
                <Image src={`/photos/${w.photo}.jpg`} alt={altFromCaption(w.caption)} fill sizes="(min-width: 768px) 30vw, 7rem" className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]" />
              </div>
              <div className="flex flex-1 flex-col py-1 pr-1 md:px-3 md:pt-5 md:pb-3">
                <h3 className="text-[1.3rem] leading-tight md:text-[1.6rem]">{w.title}</h3>
                <p className="mt-1.5 text-[0.95rem] text-ink-2 md:mt-2 md:text-[1rem]">{w.text}</p>
                <span className={`mt-auto hidden items-center gap-1.5 pt-5 font-medium md:inline-flex ${w.tone}`}>
                  {w.link}
                  <ArrowRight className="size-4 transition-transform duration-300 ease-[var(--ease-spring)] group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </FlockIn>
      </section>

      {/* The camera, on the hour's deep colour: the most colour on the page. */}
      <section aria-labelledby="frames" className="band band-deep">
        <div className="container-x flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionTitle id="frames">Frames from the field</SectionTitle>
            <p className="mt-2 max-w-[34rem] text-[0.98rem] text-ink-2">Rajesh&apos;s own photographs, made on the same routes the tours run. Nothing on this site is stock or generated.</p>
          </div>
          <TextLink href="/gallery">The full gallery</TextLink>
        </div>
        <Shelf label="Frames from the gallery" className="mt-4" itemClassName="w-[13rem] sm:w-[15.5rem]">
          {frames.map((f) => (
            <Link key={f.slug} href="/gallery" draggable={false} className="group block text-ink no-underline">
              <Photo slug={f.slug} caption={f.caption} ratio={4 / 5} sizes="(min-width: 640px) 15.5rem, 13rem" imgClassName="transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.05]" />
            </Link>
          ))}
        </Shelf>
      </section>

      {/* Where you sleep, on the hour's warm colour: both lodges, three birds from each doorstep. */}
      <section aria-labelledby="lodges" className="band band-warm">
        <div className="container-x flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionTitle id="lodges">Stay where the birds are</SectionTitle>
            <p className="mt-2 text-[0.98rem] text-ink-2">Two birding lodges of our own in Kumaon, both run by Rajesh and Sheela.</p>
          </div>
          <TextLink href="/lodges">Both lodges</TextLink>
        </div>
        {/* A swipeable shelf on phones and tablets; side by side from desktop width. */}
        <FlockIn className="shelf mt-2 gap-4 py-6 lg:mx-auto lg:mt-8 lg:max-w-[78rem] lg:grid-flow-row lg:grid-cols-2 lg:gap-6 lg:overflow-visible lg:px-[clamp(1.25rem,4.5vw,2.75rem)] lg:py-0">
          {lodges.map((l) => {
            const picks = (doorstepPicks[l.slug] ?? []).map((slug) => l.doorstep.find((d) => d.slug === slug)).filter((d) => d !== undefined);
            return (
              <article key={l.slug} className="soft flex w-[82vw] max-w-[27rem] flex-col p-3 sm:w-[62vw] lg:w-auto lg:max-w-none">
                <Link href={`/lodges/${l.slug}`} tabIndex={-1} aria-hidden="true" className="group relative block overflow-hidden rounded-[1.2rem] bg-well">
                  <div className="relative aspect-[16/10]">
                    <Image src={`/photos/${l.hero}.jpg`} alt={altFromCaption(l.heroCaption)} fill sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]" />
                  </div>
                  <span className="pebble num absolute top-3 left-3 px-3 py-1 text-[0.82rem] font-medium text-ink">{l.altitude}</span>
                </Link>
                <div className="flex flex-1 flex-col px-3 pt-5 pb-3 sm:px-4">
                  <h3 className="text-[clamp(1.4rem,2.4vw,1.75rem)] leading-tight">
                    <Link href={`/lodges/${l.slug}`} className="text-ink no-underline hover:underline">
                      {l.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-[0.92rem] text-ink-3">
                    {l.place} · since {l.opened}
                  </p>
                  <p className="mt-3 text-ink-2">{l.lead}</p>
                  {picks.length ? (
                    <div className="mt-auto pt-5">
                      <p className="text-[0.85rem] font-medium text-ink-3">On the doorstep</p>
                      <ul className="mt-2.5 grid grid-cols-3 gap-3">
                        {picks.map((d) => (
                          <li key={d.slug}>
                            <Photo slug={d.slug} ratio={1} bezel={false} showCaption={false} alt={altFromCaption(d.caption)} sizes="(min-width: 1024px) 9rem, 30vw" />
                            <p className="mt-1.5 text-[0.78rem] leading-snug text-ink-3">{d.caption.split(" · ")[0]}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <Link href={`/lodges/${l.slug}`} className={`group/link inline-flex items-center gap-1.5 self-start pt-5 font-medium text-moss no-underline ${picks.length ? "" : "mt-auto"}`}>
                    Rooms, seasons and getting there
                    <ArrowRight className="size-4 transition-transform duration-300 ease-[var(--ease-spring)] group-hover/link:translate-x-1" strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </FlockIn>
      </section>

      {/* What the last groups actually saw. */}
      <section aria-labelledby="latest" className="container-x pt-16 md:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionTitle id="latest">Latest from the field</SectionTitle>
            <p className="mt-2 text-[0.95rem] text-ink-3">Totals as Rajesh posted them after each trip, with the eBird list where he shared one.</p>
          </div>
          <TextLink href="/field-reports">All {reports.length} field reports</TextLink>
        </div>
        <FlockIn className="shelf -mx-[clamp(1.25rem,4.5vw,2.75rem)] mt-2 gap-4 py-6 md:mx-0 md:grid-flow-row md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:py-0 md:mt-8">
          {latest.map((r) => (
            <article key={r.id} className="soft flex w-[80vw] max-w-[22rem] flex-col p-3 md:w-auto md:max-w-none">
              {r.photo ? <Photo slug={r.photo} ratio={16 / 10} bezel={false} showCaption={false} alt={r.place} sizes="(min-width: 768px) 30vw, 100vw" /> : null}
              <div className="flex flex-1 flex-col px-3 pt-4 pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[1.25rem] leading-tight">{r.place}</h3>
                    <p className="mt-1 text-[0.88rem] text-ink-3">{r.when}</p>
                  </div>
                  {r.species ? (
                    <p className="shrink-0 text-right">
                      <span className="num serif block text-[1.6rem] leading-none font-semibold text-teal">{r.species}</span>
                      <span className="text-[0.75rem] text-ink-3">species</span>
                    </p>
                  ) : null}
                </div>
                <p className="mt-3 line-clamp-3 text-[0.95rem] text-ink-2">{r.text}</p>
                <p className="mt-auto flex flex-wrap gap-x-5 pt-4 text-[0.92rem]">
                  {r.ebird ? (
                    <a href={r.ebird} target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-medium text-ink">
                      eBird list <ExternalLink className="size-3.5" strokeWidth={2} aria-hidden="true" />
                    </a>
                  ) : null}
                  <Link href={`/field-reports#${r.id}`} className="text-ink-2">
                    The full report
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </FlockIn>
      </section>

      {/* One piece of proof, then three guests in their own words. */}
      <section aria-labelledby="proof" className="container-x pt-16 md:pt-24">
        <div className="soft grid items-center gap-8 p-4 sm:p-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12">
          <Photo slug="rajesh-sheela" ratio={1} bezel={false} showCaption={false} alt="Rajesh and Sheela Panwar at home" sizes="(min-width: 768px) 34vw, 100vw" />
          <div className="px-1 pb-2 sm:px-0">
            <h2 id="proof" className="text-[clamp(1.8rem,3.4vw,2.5rem)] leading-[1.08]">
              India’s top eBirder, in 2019 and again in 2021.
            </h2>
            <p className="mt-4 text-ink-2">
              Rajesh saw <span className="num font-semibold text-tragopan">{record.topIndia[0].species}</span> species in India in 2019 and{" "}
              <span className="num font-semibold text-tragopan">{record.topIndia[1].species}</span> in 2021, and is #1 all-time in Uttarakhand with{" "}
              <span className="num font-semibold text-tragopan">{record.uttarakhandAllTimeSpecies}</span>. He and Sheela run every trip and both lodges themselves.
            </p>
            <blockquote className="soft-in mt-6 p-5">
              <p className="serif text-[1.25rem] leading-snug italic">“{quote.pull}”</p>
              <footer className="mt-2 text-[0.92rem] text-ink-3">
                {quote.name}, {quote.from}
              </footer>
            </blockquote>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <TextLink href="/about">Their story</TextLink>
              <TextLink href="/reviews">What guests say</TextLink>
            </div>
          </div>
        </div>
        <FlockIn className="shelf -mx-[clamp(1.25rem,4.5vw,2.75rem)] mt-2 gap-4 py-6 md:mx-0 md:grid-flow-row md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:py-0 md:mt-6">
          {words.map((r, i) => (
            <figure key={r.name} className="soft flex w-[80vw] max-w-[22rem] flex-col p-6 md:w-auto md:max-w-none">
              <Quote className={`size-7 ${["text-grandala-ink", "text-teal", "text-plum"][i % 3]}`} strokeWidth={1.6} aria-hidden="true" />
              <blockquote className="serif mt-3 text-[1.18rem] leading-snug font-medium">“{r.pull}”</blockquote>
              <figcaption className="mt-auto pt-5 text-[0.92rem]">
                <span className="font-medium">{r.name}</span>, {r.from}
                {r.context ? <span className="block text-ink-3">{r.context}</span> : null}
              </figcaption>
            </figure>
          ))}
        </FlockIn>
      </section>

      {/* Before you write: what people ask. */}
      <section aria-labelledby="faq" className="container-x grid gap-10 pt-16 md:pt-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <SectionTitle id="faq">Before you write</SectionTitle>
          <p className="mt-4 text-ink-2">What people usually ask Rajesh first. Anything else, ask him directly; he answers on WhatsApp himself.</p>
          <WhatsAppButton message={hello} className="mt-6">
            Ask on WhatsApp
          </WhatsAppButton>
        </div>
        <div className="lg:col-span-8">
          <Faq items={faq} />
        </div>
      </section>

      {/* The close, on the hour's deep colour: tug the tag. */}
      <section aria-labelledby="ask" className="container-x pt-16 md:pt-24">
        <div className="band-deep relative isolate grid items-center gap-8 overflow-hidden rounded-[2rem] p-7 sm:p-12 md:grid-cols-[1fr_auto] md:gap-12">
          <div aria-hidden="true" className="banner-plain absolute inset-0 -z-10" />
          <div>
            <h2 id="ask" className="text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.06]">
              Ask Rajesh about a trip
            </h2>
            <p className="mt-4 max-w-[34rem] text-ink-2">Send a tour number, or just your dates and target birds. He replies with the day-by-day plan and the cost.</p>
            <p className="mt-5 text-[0.98rem] text-ink-2">
              Or{" "}
              <Link href="/enquiry" className="font-medium text-ink">
                fill in the form
              </Link>
              , call{" "}
              <a href={`tel:${site.phone.number}`} className="num font-medium text-ink">
                {site.phone.display}
              </a>
              .
            </p>
          </div>
          <PullTag href={whatsappLink(hello)} title="WhatsApp Rajesh" note={site.whatsapp.display} className="justify-self-center" />
        </div>
      </section>
    </>
  );
}

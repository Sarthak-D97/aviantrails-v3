import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { altFromCaption, Photo } from "@/components/media/Photo";
import { ButtonLink, TextLink, WhatsAppButton } from "@/components/site/Actions";
import { SectionTitle } from "@/components/site/PageHead";
import { CircadianChip } from "@/components/soft/CircadianChip";
import { DepartureTag } from "@/components/soft/DepartureTag";
import { Flock } from "@/components/soft/Flock";
import { FlockIn } from "@/components/soft/FlockIn";
import { PullTag } from "@/components/soft/PullTag";
import { Shelf } from "@/components/soft/Shelf";
import { toTag } from "@/content/board";
import type { PhotoSlug } from "@/content/photo-sizes";
import { reviews } from "@/content/reviews";
import { record, site, whatsappLink } from "@/content/site";
import { seatsAsOnLabel, upcoming } from "@/content/tours";

// Rebuilt daily so seat states (departed, on tour) follow the calendar.
export const revalidate = 86400;

const hello = "Hello Rajesh, I found Avian Trails online and would like to know about your upcoming tours.";

const ways: { title: string; text: string; href: string; link: string; photo: PhotoSlug; caption: string; position?: string }[] = [
  {
    title: "Departures",
    text: "Fixed-date small groups, India and abroad, each led by Rajesh.",
    href: "/departures",
    link: "See the dates",
    photo: "mongolia-eagle-fox",
    caption: "Golden Eagle · Mongolia · Oct 2025",
  },
  {
    title: "Custom tours",
    text: "Your dates and target birds, planned with the guides he trusts.",
    href: "/custom-tours",
    link: "Plan one",
    photo: "panchachuli-dawn",
    caption: "Panchachuli at first light · Munsyari · Dec 2024",
  },
  {
    title: "Our two lodges",
    text: "Milieu Villa by Corbett's forest, and Manila in the Cheer Pheasant hills.",
    href: "/lodges",
    link: "Stay with us",
    photo: "manila-cheer-pheasants",
    caption: "Cheer Pheasants · Manila",
  },
];

export default function Home() {
  const now = new Date();
  const next = upcoming(now);
  const tags = next.map((t) => toTag(t, now));
  const quote = reviews[0];

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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      {/* The hide: the promise on one side, the window on the other. */}
      <section className="container-x pt-6 md:pt-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div className="order-2 lg:order-1">
            <h1 className="text-[clamp(2.7rem,5.6vw,4.9rem)] leading-[0.98] tracking-[-0.025em]">
              Rajesh Panwar gets you <em className="font-medium italic [font-variation-settings:'SOFT'_100,'WONK'_1]">the birds.</em>
            </h1>
            <p className="mt-5 max-w-[32rem] text-[1.12rem] leading-[1.55] text-ink-2 md:text-[1.2rem]">
              Small-group birding and bird-photography tours, India and abroad. Two birding lodges of our own in Kumaon.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <WhatsAppButton message={hello} />
              <ButtonLink href="/departures">See departures</ButtonLink>
            </div>
            <CircadianChip className="mt-8" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="soft rounded-[2.4rem] p-3 sm:p-4">
              <div className="soft-in relative aspect-[5/4.2] overflow-hidden rounded-[1.9rem] sm:aspect-[5/4]" style={{ background: "linear-gradient(170deg, var(--sky-a), var(--sky-b))" }}>
                <Flock />
                <figure className="bezel absolute bottom-[5%] left-[5%] w-[60%] -rotate-[3deg] sm:bottom-[7%] sm:w-[58%] p-1.5 transition-transform duration-500 ease-[var(--ease-spring)] hover:-rotate-1 sm:p-2">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[1.1rem]">
                    <Image
                      src="/photos/grandala-flock-lachen.jpg"
                      alt="A flock of Grandalas in a bare tree at Lachen, the males an electric ultramarine among the brown females"
                      fill
                      priority
                      quality={80}
                      sizes="(min-width: 1024px) 26vw, 55vw"
                      className="object-cover"
                      style={{ objectPosition: "46% 38%" }}
                    />
                  </div>
                  <figcaption className="px-1.5 pt-1.5 pb-0.5 text-[0.72rem] leading-snug text-ink-3 sm:text-[0.78rem]">Grandalas · Lachen · Mar 2019</figcaption>
                </figure>
                {tags[0] ? (
                  <div className="absolute top-[5%] right-[4%] w-[38%] max-w-[13rem] rotate-[2.5deg] sm:top-[7%] sm:right-[5%] sm:w-[40%]">
                    <DepartureTag row={tags[0]} next small />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What leaves next: tags on the hide's board, dragged along a shelf. */}
      <section aria-labelledby="next" className="pt-20 md:pt-28">
        <div className="container-x flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionTitle id="next">Next departures</SectionTitle>
            <p className="mt-2 text-[0.95rem] text-ink-3">Seats as on {seatsAsOnLabel}. Drag the shelf, or tap a tag to open it.</p>
          </div>
          <TextLink href="/departures">All {next.length} departures</TextLink>
        </div>
        <Shelf label="Next departures" className="mt-4" itemClassName="w-[15.5rem] sm:w-[16.5rem]">
          {tags.map((t, i) => (
            <DepartureTag key={t.slug} row={t} next={i === 0} />
          ))}
        </Shelf>
      </section>

      <section aria-labelledby="ways" className="container-x pt-20 md:pt-28">
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
                <span className="mt-auto hidden items-center gap-1.5 pt-5 font-medium md:inline-flex">
                  {w.link}
                  <ArrowRight className="size-4 transition-transform duration-300 ease-[var(--ease-spring)] group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </FlockIn>
      </section>

      {/* One piece of proof, not a wall of it. */}
      <section aria-labelledby="proof" className="container-x pt-20 md:pt-28">
        <div className="soft grid items-center gap-8 p-4 sm:p-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12">
          <Photo slug="rajesh-sheela" ratio={1} bezel={false} showCaption={false} alt="Rajesh and Sheela Panwar at home" sizes="(min-width: 768px) 34vw, 100vw" />
          <div className="px-1 pb-2 sm:px-0">
            <h2 id="proof" className="text-[clamp(1.8rem,3.4vw,2.5rem)] leading-[1.08]">
              India’s top eBirder, in 2019 and again in 2021.
            </h2>
            <p className="mt-4 text-ink-2">
              Rajesh saw <span className="num font-medium text-ink">{record.topIndia[0].species}</span> species in India in 2019 and{" "}
              <span className="num font-medium text-ink">{record.topIndia[1].species}</span> in 2021, and is #1 all-time in Uttarakhand with{" "}
              <span className="num font-medium text-ink">{record.uttarakhandAllTimeSpecies}</span>. He and Sheela run every trip and both lodges themselves.
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
      </section>

      {/* The close: tug the tag. */}
      <section aria-labelledby="ask" className="container-x pt-20 md:pt-28">
        <div className="soft grid items-center gap-6 p-6 sm:p-10 md:grid-cols-[1fr_auto] md:gap-12">
          <div>
            <h2 id="ask" className="text-[clamp(1.8rem,3.4vw,2.5rem)] leading-[1.08]">
              Ask Rajesh about a trip
            </h2>
            <p className="mt-4 max-w-[34rem] text-ink-2">Send a tour number, or just your dates and target birds. He replies with the day-by-day plan and the cost.</p>
            <p className="mt-5 text-[0.98rem] text-ink-2">
              Or <Link href="/enquiry" className="font-medium text-ink">fill in the form</Link>, call{" "}
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

import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clip } from "@/components/media/Clip";
import { Photo } from "@/components/media/Photo";
import { WhatsAppButton } from "@/components/site/Actions";
import { PageHead, SectionTitle } from "@/components/site/PageHead";
import { DepartureTag } from "@/components/soft/DepartureTag";
import { ReservationForm } from "@/components/soft/ReservationForm";
import { SeatBadge } from "@/components/soft/SeatBadge";
import { Shelf } from "@/components/soft/Shelf";
import { journeyOptions, toTag } from "@/content/board";
import { reports } from "@/content/reports";
import { site } from "@/content/site";
import { dateRange, days, enquiryText, seatStatus, seatsAsOnLabel, tourBySlug, tours, upcoming } from "@/content/tours";

export const revalidate = 86400;

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = tourBySlug(slug);
  if (!t) return {};
  return {
    title: `${t.name}, ${dateRange(t, "long")}`,
    description: t.summary,
    alternates: { canonical: `/departures/${t.slug}` },
  };
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = tourBySlug(slug);
  if (!t) notFound();

  const now = new Date();
  const status = seatStatus(t, now);
  const isGone = status.code === "DEPARTED";
  const [lead, ...rest] = t.shots;
  const ahead = upcoming(now);
  const isNext = ahead[0]?.slug === t.slug;
  const others = ahead.filter((o) => o.slug !== t.slug);
  const field = reports.filter((r) => r.tour === t.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: t.name,
    description: t.summary,
    touristType: ["Birdwatchers", "Wildlife photographers"],
    url: `${site.url}/departures/${t.slug}`,
    image: lead ? `${site.url}/photos/${lead.slug}.jpg` : undefined,
    provider: { "@type": "TravelAgency", name: site.name, url: site.url, telephone: site.phone.number, email: site.email },
    offers: {
      "@type": "Offer",
      url: `${site.url}/departures/${t.slug}`,
      availability: isGone ? "https://schema.org/Discontinued" : t.seats > 0 ? "https://schema.org/LimitedAvailability" : "https://schema.org/SoldOut",
      validThrough: t.start,
      ...(t.price ? { description: t.price } : {}),
    },
  };

  const facts: { k: string; v: React.ReactNode }[] = [
    { k: "Dates", v: dateRange(t, "long") },
    { k: "Days", v: String(days(t)) },
    { k: `Seats, as on ${seatsAsOnLabel}`, v: <SeatBadge status={status} /> },
    { k: "Cost", v: t.price ?? "On WhatsApp" },
  ];

  const badge = (
    <span className="soft mt-1 hidden shrink-0 flex-col items-center gap-1.5 rounded-[1.2rem] px-3.5 pt-3 pb-3.5 sm:flex">
      <span className="eyelet" aria-hidden="true" />
      <span className="text-[0.72rem] text-ink-3">Tour</span>
      <span className="num serif text-[1.9rem] leading-none font-semibold">{String(t.no).padStart(2, "0")}</span>
    </span>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <PageHead
        badge={badge}
        name={t.name}
        note={
          <>
            <span className="num sm:hidden">Tour {String(t.no).padStart(2, "0")} · </span>
            {t.kind} · {t.where}
            {isNext ? <span className="ml-2 inline-block rounded-full bg-sunbird px-2.5 py-0.5 align-[0.1em] text-[0.75rem] font-semibold text-on-sunbird">Next departure</span> : null}
          </>
        }
      />

      <section className="container-x grid gap-10 pt-8 md:pt-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <p className="serif text-[clamp(1.35rem,2.3vw,1.75rem)] leading-[1.3] font-medium">{t.summary}</p>
          <dl className="soft-in mt-8 grid grid-cols-2 gap-x-6 gap-y-5 p-5 sm:p-6">
            {facts.map((f) => (
              <div key={f.k}>
                <dt className="text-[0.85rem] text-ink-3">{f.k}</dt>
                <dd className="num mt-1.5 font-medium">{f.v}</dd>
              </div>
            ))}
          </dl>
          <WhatsAppButton message={isGone ? `Hello Rajesh, when is the next ${t.name}? Please share the dates and cost.` : enquiryText(t)} className="mt-7">
            {isGone ? "Ask about the next run" : status.code === "WL" ? "Join the waitlist" : "Reserve on WhatsApp"}
          </WhatsAppButton>
        </div>
        <div className="lg:col-span-6">
          {lead ? (
            <Photo slug={lead.slug} caption={lead.caption} priority quality={85} sizes="(min-width: 1024px) 46vw, 100vw" />
          ) : (
            <div className="soft-in flex aspect-[4/3] items-center justify-center p-8 text-center text-ink-3">Photographs from this trip will follow.</div>
          )}
        </div>
      </section>

      <section aria-labelledby="built" className="container-x grid gap-10 pt-16 md:pt-24 lg:grid-cols-12 lg:gap-14">
        <div className={t.lastRun ? "lg:col-span-6" : "lg:col-span-8"}>
          <SectionTitle id="built">Built around</SectionTitle>
          <ul className="mt-6 grid gap-3.5">
            {t.highlights.map((h) => (
              <li key={h} className="grid grid-cols-[1.25rem_1fr] gap-3">
                <span aria-hidden="true" className="eyelet mt-[0.35rem] !size-3" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
        {t.lastRun ? (
          <aside aria-labelledby="last" className="lg:col-span-6">
            <div className="soft p-6 sm:p-7">
              <h2 id="last" className="text-[1.35rem]">
                Last run · {t.lastRun.when}
              </h2>
              <p className="mt-3 text-ink-2">{t.lastRun.text}</p>
              {t.lastRun.ebird ? (
                <a href={t.lastRun.ebird} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1.5 font-medium text-ink">
                  The eBird trip report <ExternalLink className="size-4" strokeWidth={2} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </aside>
        ) : null}
      </section>

      {rest.length > 0 || t.clip ? (
        <section aria-labelledby="frames" className="pt-16 md:pt-24">
          <div className="container-x">
            <SectionTitle id="frames">From Rajesh&apos;s camera</SectionTitle>
          </div>
          <Shelf label="Photographs from this route" className="mt-2" itemClassName="w-[17rem] sm:w-[22rem]">
            {[
              ...(t.clip ? [<Clip key="clip" {...t.clip} ratio={4 / 3} />] : []),
              ...rest.map((s) => <Photo key={s.slug} slug={s.slug} caption={s.caption} ratio={4 / 3} sizes="(min-width: 640px) 22rem, 17rem" />),
            ]}
          </Shelf>
        </section>
      ) : null}

      {field.length > 0 ? (
        <section aria-labelledby="reports" className="container-x pt-16 md:pt-24">
          <SectionTitle id="reports">Field reports from this route</SectionTitle>
          <ol className="mt-6 grid gap-3">
            {field.map((r) => (
              <li key={r.id} className="soft-in grid gap-2 p-5 md:grid-cols-[10rem_1fr_7rem] md:gap-6">
                <span className="text-[0.95rem] text-ink-3">{r.when}</span>
                <span className="text-ink-2">{r.text}</span>
                <span className="serif num font-semibold md:text-right">{r.species ? `${r.species} species` : ""}</span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <section aria-labelledby="reserve" className="container-x grid gap-10 pt-16 md:pt-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <SectionTitle id="reserve">{isGone ? "Ask about the next run" : "Reserve a seat"}</SectionTitle>
          <p className="mt-4 text-ink-2">The form becomes a WhatsApp message to Rajesh with this tour already filled in. He replies with the day-by-day plan and the cost.</p>
          <p className="num mt-5 text-[0.95rem] text-ink-3">Or call {site.phone.display}</p>
        </div>
        <div className="lg:col-span-8">
          <ReservationForm journeys={journeyOptions(now)} initial={isGone ? "custom" : t.slug} />
        </div>
      </section>

      {others.length > 0 ? (
        <section aria-labelledby="also" className="pt-16 md:pt-24">
          <div className="container-x">
            <SectionTitle id="also">Also departing</SectionTitle>
          </div>
          <Shelf label="Also departing" className="mt-2" itemClassName="w-[15.5rem] sm:w-[16.5rem]">
            {others.slice(0, 8).map((o) => (
              <DepartureTag key={o.slug} row={toTag(o, now)} next={o.slug === ahead[0]?.slug} />
            ))}
          </Shelf>
        </section>
      ) : null}
      <div className="pb-20 md:pb-28" />
    </>
  );
}

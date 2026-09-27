import { ArrowRight, ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/site/Actions";
import { PageHead } from "@/components/site/PageHead";
import { SeatBadge } from "@/components/soft/SeatBadge";
import { TagBoard } from "@/components/soft/TagBoard";
import { lines, toTag } from "@/content/board";
import { reports } from "@/content/reports";
import { site } from "@/content/site";
import { dateRange, departed, seatStatus, seatsAsOnLabel, title, tours, upcoming } from "@/content/tours";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Departures 2026–27: small-group birding and photography tours",
  description:
    "Seventeen fixed-date tours led by Rajesh Panwar in 2026–27: Mongolia, Madagascar, Namdapha, Sri Lanka, Costa Rica, Ladakh, Papua New Guinea and more, with dates and seats.",
  alternates: { canonical: "/departures" },
};

export default function DeparturesPage() {
  const now = new Date();
  const next = upcoming(now);
  const past = departed(now);

  return (
    <>
      <PageHead
        name={`Departures ${site.seasonLabel}`}
        note={`${tours.length} small-group tours this season · seats as on ${seatsAsOnLabel}`}
        lead="Tap a tour to open it. Send its number to Rajesh on WhatsApp for the day-by-day plan and the cost."
      />

      <section aria-label="Upcoming departures" className="container-x pt-8 md:pt-10">
        <TagBoard rows={next.map((t) => toTag(t, now))} lines={lines} />

        <div className="soft-in mt-12 flex flex-wrap items-center justify-between gap-5 p-6 sm:p-7">
          <p className="max-w-xl text-ink-2">Full, or a date that doesn&apos;t suit? Waitlisted seats do reopen, and Rajesh runs most routes as custom trips too.</p>
          <WhatsAppButton message="Hello Rajesh, please share the itinerary and cost for Tour No. __">Ask for an itinerary</WhatsAppButton>
        </div>
      </section>

      {past.length > 0 ? (
        <section aria-label="Departed this season" className="container-x pt-10">
          <details className="soft group/past">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 sm:px-7 [&::-webkit-details-marker]:hidden">
              <span>
                <span className="serif block text-[1.3rem] font-semibold">Departed this season</span>
                <span className="block text-[0.92rem] text-ink-3">
                  {past.length} {past.length === 1 ? "group has" : "groups have"} been and come back
                </span>
              </span>
              <span className="pebble grid size-11 shrink-0 place-items-center text-ink">
                <ChevronDown className="size-5 transition-transform duration-500 ease-[var(--ease-spring)] group-open/past:rotate-180" strokeWidth={2} aria-hidden="true" />
              </span>
            </summary>
            <ol className="grid gap-3 px-3 pb-3 sm:px-4 sm:pb-4">
              {past.map((t) => {
                const report = reports.find((r) => r.tour === t.slug);
                return (
                  <li key={t.slug}>
                    <Link
                      href={`/departures/${t.slug}`}
                      className="soft-in group grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 rounded-[1.1rem] px-4 py-3.5 text-ink no-underline sm:px-5 md:grid-cols-[4.5rem_1fr_10rem_auto_auto]"
                    >
                      <span className="num hidden text-[0.9rem] text-ink-3 md:block">Tour {String(t.no).padStart(2, "0")}</span>
                      <span className="min-w-0">
                        <span className="block font-medium">{title(t)}</span>
                        <span className="block text-[0.9rem] text-ink-3">
                          <span className="md:hidden">{dateRange(t, "compact")}</span>
                          {report?.species ? (
                            <>
                              <span className="md:hidden"> · </span>
                              {report.species} species{report.extra ? ` · ${report.extra}` : ""}
                            </>
                          ) : null}
                        </span>
                      </span>
                      <span className="num hidden text-[0.95rem] text-ink-3 md:block">{dateRange(t, "compact")}</span>
                      <SeatBadge status={seatStatus(t, now)} />
                      <ArrowRight className="hidden size-5 text-ink-3 transition-transform duration-300 ease-[var(--ease-spring)] group-hover:translate-x-1 md:block" strokeWidth={2} aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ol>
          </details>
        </section>
      ) : null}
      <div className="pb-20 md:pb-28" />
    </>
  );
}

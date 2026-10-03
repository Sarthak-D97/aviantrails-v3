import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import { Photo } from "@/components/media/Photo";
import { PageHead, SectionTitle } from "@/components/site/PageHead";
import { FlockIn } from "@/components/soft/FlockIn";
import { ReservationForm } from "@/components/soft/ReservationForm";
import { accentDot, accentFor, accentText } from "@/content/accents";
import { journeyOptions } from "@/content/board";
import { lines } from "@/content/destinations";

export const metadata: Metadata = {
  title: "Custom birding and photography tours in India and abroad",
  description:
    "Private trips planned by Rajesh Panwar around your dates and target birds: Uttarakhand, Ladakh, Kashmir, the North-East, the Thar, the Western Ghats and a dozen countries.",
  alternates: { canonical: "/custom-tours" },
};

export default function CustomToursPage() {
  const placeCount = lines.reduce((n, l) => n + l.stations.length, 0);
  return (
    <>
      <PageHead
        photo={{ slug: "panchachuli-sunset", caption: "Panchachuli at sunset · Munsyari · Nov 2022", position: "50% 55%" }}
        name="Custom tours"
        note={`${lines.length} regions · ${placeCount} places · your dates, your target birds`}
        lead="Tell Rajesh what you want to see, when you can travel and how you like to shoot. He plans the route, the stays and the local guides, then sends the day-by-day plan and the cost on WhatsApp."
      />

      <section aria-label="Where we go" className="container-x pt-12 md:pt-16">
        <FlockIn as="ol" className="grid gap-6 md:grid-cols-2">
          {lines.map((l) => {
            const accent = accentFor(l.id);
            return (
              <li key={l.id} className="soft flex flex-col p-3">
                <Photo slug={l.photo} caption={l.photoCaption} ratio={16 / 9} bezel={false} showCaption={false} sizes="(min-width: 768px) 44vw, 100vw" />
                <div className="flex flex-1 flex-col px-3 pt-5 pb-3 sm:px-4">
                  <h2 className="flex items-center gap-2.5 text-[clamp(1.45rem,2.6vw,1.85rem)] leading-tight">
                    <span aria-hidden="true" className={`size-2.5 shrink-0 rounded-full ${accentDot[accent]}`} />
                    {l.name}
                  </h2>
                  <p className="mt-2 text-ink-2">{l.note}</p>
                  <details className="group/places mt-auto pt-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                      <span className={`text-[0.95rem] font-medium ${accentText[accent]}`}>
                        {l.stations.slice(0, 3).join(", ")}
                        {l.stations.length > 3 ? <span className="text-ink-3 font-normal"> and {l.stations.length - 3} more</span> : null}
                      </span>
                      <span className="pebble press grid size-10 shrink-0 place-items-center text-ink">
                        <ChevronDown className="size-4.5 transition-transform duration-500 ease-[var(--ease-spring)] group-open/places:rotate-180" strokeWidth={2} aria-hidden="true" />
                        <span className="sr-only">All {l.stations.length} places</span>
                      </span>
                    </summary>
                    <ul aria-label={`${l.name}: places`} className="mt-4 flex flex-wrap gap-2">
                      {l.stations.map((s) => (
                        <li key={s} className="soft-in rounded-full px-3 py-1 text-[0.85rem] text-ink-2">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </li>
            );
          })}
        </FlockIn>
      </section>

      <section aria-labelledby="plan" className="container-x grid gap-10 pt-16 md:pt-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <SectionTitle id="plan">Plan yours</SectionTitle>
          <p className="mt-4 text-ink-2">Put your target birds, your lens and any limits on walking or altitude in the note. Rajesh works out the season and the route from there.</p>
        </div>
        <div className="lg:col-span-8">
          <ReservationForm journeys={journeyOptions()} initial="custom" />
        </div>
      </section>
    </>
  );
}

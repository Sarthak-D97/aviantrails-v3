"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Photo } from "@/components/media/Photo";
import type { Report } from "@/content/reports";

// Field reports, one year at a time. Every year stays in the page for search and for no-script
// readers; the pebbles only choose which one is on show, and its cards land like a flock.

export function ReportBoard({ reports }: { reports: Report[] }) {
  const years = [...new Set(reports.map((r) => r.sort.slice(0, 4)))];
  const [year, setYear] = useState(years[0]);
  const [flight, setFlight] = useState(0);

  const pick = (y: string) => {
    if (y === year) return;
    setYear(y);
    setFlight((f) => f + 1);
  };

  return (
    <div>
      <div role="group" aria-label="Year" className="-mx-1 flex gap-3 overflow-x-auto px-1 py-2 [scrollbar-width:none]">
        {years.map((y) => {
          const on = y === year;
          const n = reports.filter((r) => r.sort.startsWith(y)).length;
          return (
            <button
              key={y}
              type="button"
              aria-pressed={on}
              onClick={() => pick(y)}
              className={`press num inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-4 text-[0.95rem] ${on ? "soft-in font-medium text-grandala-ink" : "pebble text-ink-2 hover:text-ink"}`}
            >
              {y}
              <span className={`text-[0.82rem] ${on ? "text-grandala-ink" : "text-ink-3"}`}>{n}</span>
            </button>
          );
        })}
      </div>

      {years.map((y) => (
        <section key={y} aria-label={`Field reports, ${y}`} hidden={y !== year}>
          <ol key={y === year ? flight : 0} className={`mt-6 grid gap-6 md:grid-cols-2 ${y === year && flight ? "flock-landed" : ""}`}>
            {reports
              .filter((r) => r.sort.startsWith(y))
              .map((r, i) => (
                <li
                  key={r.id}
                  id={r.id}
                  className="soft flex flex-col p-3"
                  style={{ "--i": i, "--fx": `${(i % 2 ? 1 : -1) * 18}px`, "--fy": `${22 + (i % 3) * 6}px`, "--fr": `${(i % 2 ? 1 : -1) * 2.5}deg` } as React.CSSProperties}
                >
                  <div className="grid grid-cols-[1fr_auto] items-start gap-4 px-3 pt-3 sm:px-4">
                    <div>
                      <h3 className="text-[1.35rem] leading-tight">{r.place}</h3>
                      <p className="mt-1 text-[0.9rem] text-ink-3">
                        {r.when}
                        {r.guests ? ` · ${r.guests}` : ""}
                      </p>
                    </div>
                    {r.species ? (
                      <p className="soft-in rounded-[1rem] px-3.5 py-2 text-center">
                        <span className="num serif block text-[1.6rem] leading-none font-semibold">{r.species}</span>
                        <span className="text-[0.75rem] text-ink-3">species</span>
                      </p>
                    ) : null}
                  </div>
                  {r.photo ? (
                    <Photo slug={r.photo} ratio={2} bezel={false} showCaption={false} className="mt-4" sizes="(min-width: 768px) 38vw, 100vw" />
                  ) : null}
                  <div className="flex flex-1 flex-col px-3 pt-4 pb-3 sm:px-4">
                    <p className="text-ink-2">{r.text}</p>
                    {r.extra ? <p className="mt-2 text-[0.92rem] text-ink-3">{r.species ? "Also: " : ""}{r.extra}</p> : null}
                    <p className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4 text-[0.95rem]">
                      {r.ebird ? (
                        <a href={r.ebird} target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-medium text-ink">
                          eBird list <ExternalLink className="size-3.5" strokeWidth={2} aria-hidden="true" />
                        </a>
                      ) : null}
                      <a href={`https://www.instagram.com/p/${r.post}/`} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-ink-2">
                        Rajesh&apos;s post <ExternalLink className="size-3.5" strokeWidth={2} aria-hidden="true" />
                      </a>
                      {r.tour ? (
                        <Link href={`/departures/${r.tour}`} className="text-ink-2">
                          This route
                        </Link>
                      ) : null}
                    </p>
                  </div>
                </li>
              ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

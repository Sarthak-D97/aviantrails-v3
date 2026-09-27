"use client";

import { useState } from "react";
import { DepartureTag, type TagRow } from "./DepartureTag";

// The departures board: pebbles pick a region, and the tags that match fly in and land in order.
// Nothing moves on first load; the flock only lands after a choice.

export function TagBoard({ rows, lines }: { rows: TagRow[]; lines: { id: string; name: string }[] }) {
  const [line, setLine] = useState("all");
  const [flight, setFlight] = useState(0);
  const shown = line === "all" ? rows : rows.filter((r) => r.line === line);
  const counts = Object.fromEntries(lines.map((l) => [l.id, rows.filter((r) => r.line === l.id).length]));
  const choices = [{ id: "all", name: "All", n: rows.length }, ...lines.map((l) => ({ ...l, n: counts[l.id] }))].filter((c) => c.n > 0);

  const pick = (id: string) => {
    if (id === line) return;
    setLine(id);
    setFlight((f) => f + 1);
  };

  return (
    <div>
      <div role="group" aria-label="Show departures in" className="-mx-1 flex gap-3 overflow-x-auto px-1 py-2 [scrollbar-width:none] sm:flex-wrap">
        {choices.map((c) => {
          const on = c.id === line;
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={on}
              onClick={() => pick(c.id)}
              className={`press inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-4 text-[0.95rem] ${
                on ? "soft-in font-medium text-grandala-ink" : "pebble text-ink-2 hover:text-ink"
              }`}
            >
              {c.name}
              <span className={`num text-[0.82rem] ${on ? "text-grandala-ink" : "text-ink-3"}`}>{c.n}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        {shown.length} departures shown
      </p>
      <ol key={flight} className={`mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 ${flight ? "flock-landed" : ""}`}>
        {shown.map((r, i) => (
          <li
            key={r.slug}
            style={{ "--i": i, "--fx": `${(i % 2 ? 1 : -1) * (16 + (i % 3) * 8)}px`, "--fy": `${24 + (i % 4) * 6}px`, "--fr": `${(i % 2 ? 1 : -1) * 3}deg` } as React.CSSProperties}
          >
            <DepartureTag row={r} next={r.slug === rows[0]?.slug} />
          </li>
        ))}
      </ol>
    </div>
  );
}

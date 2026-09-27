"use client";

import { Moon, Sun, Sunrise, Sunset } from "lucide-react";
import { useEffect, useState } from "react";
import { applyLight, type Phase, PHASES, phaseAt } from "./circadian";

// The circadian chip: says which light the page is in and the visitor's own time. Tap it to preview
// the other lights of the day; "Now" returns to the real hour. The light keeps following the clock.

const icons = { dawn: Sunrise, day: Sun, dusk: Sunset, night: Moon } as const;

function localHour() {
  const d = new Date();
  return d.getHours() + d.getMinutes() / 60;
}

export function CircadianChip({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);
  const [preview, setPreview] = useState<Phase | null>(null);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setNow(d);
    };
    // Read the clock, and a ?phase= preview link, which opens the chip on that light.
    const start = () => {
      tick();
      const asked = new URLSearchParams(location.search).get("phase");
      if (PHASES.some((p) => p.id === asked)) setPreview(asked as Phase);
    };
    start();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!now) return;
    if (preview) {
      applyLight(PHASES.find((p) => p.id === preview)!.at, preview);
    } else if (!new URLSearchParams(location.search).get("phase")) {
      applyLight(localHour());
    }
  }, [now, preview]);

  const live = now ? phaseAt(now.getHours() + now.getMinutes() / 60) : "day";
  const shown = preview ?? live;
  const Icon = icons[shown];
  const label = PHASES.find((p) => p.id === shown)!.label;
  const time = now ? now.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", hour12: true }).replace(/\s?([ap])m$/i, (_, a: string) => ` ${a.toUpperCase()}M`) : "";

  const cycle = () => {
    const order = PHASES.map((p) => p.id);
    setPreview(order[(order.indexOf(shown) + 1) % order.length]);
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={cycle}
        className="pebble press inline-flex min-h-11 items-center gap-2.5 px-4 text-[0.92rem] text-ink-2"
        aria-label={`The page is in ${label.toLowerCase()} light. Preview the next light of the day.`}
      >
        <Icon key={shown} className="size-[1.1rem] animate-[land_600ms_var(--ease-spring)_both] text-ochre" strokeWidth={2} aria-hidden="true" />
        <span className="font-medium text-ink">{label}</span>
        {preview ? <span className="text-ink-3">preview</span> : <span className="num text-ink-3" suppressHydrationWarning>{time}</span>}
      </button>
      {preview ? (
        <button type="button" onClick={() => setPreview(null)} className="pebble press min-h-11 px-4 text-[0.92rem] font-medium text-ink">
          Now
        </button>
      ) : null}
    </div>
  );
}

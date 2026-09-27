import { Sunbird } from "@/components/brand/Sunbird";
import { PreloaderExit } from "./PreloaderExit";

// The first-light preloader: the hide opens on a moulded pebble with the Sunbird in it, a groove
// that fills in plumage colours, the name of the hour, and a small flock crossing the screen.
// It shows once per visit (the head script marks repeat views before paint), never holds the page
// for more than about 2.5 s, and clears itself by CSS alone if script never runs.

const FLOCK = [
  { x: 0, y: 0, d: 0 },
  { x: -34, y: -16, d: 0.08 },
  { x: -34, y: 16, d: 0.12 },
  { x: -66, y: -30, d: 0.18 },
  { x: -66, y: 30, d: 0.22 },
  { x: -96, y: -42, d: 0.28 },
  { x: -98, y: 44, d: 0.3 },
];

export function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader-flock">
        {FLOCK.map((b, i) => (
          <svg key={i} className="preloader-bird" viewBox="-10 -7 20 12" style={{ "--bx": `${b.x}px`, "--by": `${b.y}px`, "--bd": `${b.d}s`, "--bf": `${0.22 + (i % 3) * 0.03}s` } as React.CSSProperties}>
            <path d="M-9 -1.5Q-4.5 -6.5 0 0Q4.5 -6.5 9 -1.5" />
          </svg>
        ))}
      </div>
      <div className="preloader-body">
        <span className="preloader-pebble soft">
          <Sunbird className="h-12 w-auto text-moss" />
        </span>
        <span className="serif mt-6 text-[1.6rem] leading-none font-semibold tracking-[-0.01em] text-ink">Avian Trails</span>
        <span className="preloader-track soft-in mt-5">
          <span className="preloader-fill" />
        </span>
        <span className="preloader-phase mt-4 text-[0.88rem] text-ink-3" />
      </div>
      <PreloaderExit />
    </div>
  );
}

"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// A short, muted loop from Rajesh's own footage in a moulded bezel. Plays only while on screen; with
// reduced motion it waits for a tap.
export function Clip({ src, poster, w, h, caption, className = "", ratio }: { src: string; poster: string; w: number; h: number; caption: string; className?: string; ratio?: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !userPaused) v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [userPaused]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      setUserPaused(false);
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      setUserPaused(true);
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <figure className={className}>
      <div className="bezel">
        <div className="relative overflow-hidden rounded-[1.25rem] bg-well" style={{ aspectRatio: ratio ?? w / h }}>
          <video ref={ref} className="absolute inset-0 h-full w-full object-cover" src={src} poster={poster} muted loop playsInline preload="none" aria-label={caption} />
          <button type="button" onClick={toggle} className="pebble press absolute right-3 bottom-3 grid size-11 place-items-center text-ink" aria-label={playing ? "Pause clip" : "Play clip"}>
            {playing ? <Pause className="size-4" strokeWidth={2.2} /> : <Play className="size-4 translate-x-px" strokeWidth={2.2} />}
          </button>
        </div>
      </div>
      <figcaption className="mt-3 px-1 text-[0.85rem] leading-snug text-ink-3">{caption}</figcaption>
    </figure>
  );
}

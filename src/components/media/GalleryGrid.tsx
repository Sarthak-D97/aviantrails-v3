"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryGroup } from "@/content/gallery";
import { photoSizes } from "@/content/photo-sizes";

function alt(caption: string) {
  return caption.replace(/ · /g, ", ");
}

// One region at a time: pebbles choose it and its photographs land like a flock. Every region stays
// in the page (hidden) for search and no-script readers. The lightbox steps through the region on show.

export function GalleryGrid({ groups }: { groups: GalleryGroup[] }) {
  const [group, setGroup] = useState(groups[0]?.id);
  const [flight, setFlight] = useState(0);
  const all = (groups.find((g) => g.id === group) ?? groups[0]).shots;
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const close = useCallback(() => dialog.current?.close(), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + all.length) % all.length)), [all.length]);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setIndex(null);
    el.addEventListener("keydown", onKey);
    el.addEventListener("close", onClose);
    return () => {
      el.removeEventListener("keydown", onKey);
      el.removeEventListener("close", onClose);
    };
  }, [step]);

  const pick = (id: string) => {
    if (id === group) return;
    setGroup(id);
    setFlight((f) => f + 1);
  };
  const current = index === null ? null : all[index];

  return (
    <>
      <div role="group" aria-label="Region" className="-mx-1 flex gap-3 overflow-x-auto px-1 py-2 [scrollbar-width:none] sm:flex-wrap">
        {groups.map((g) => {
          const on = g.id === group;
          return (
            <button
              key={g.id}
              type="button"
              aria-pressed={on}
              onClick={() => pick(g.id)}
              className={`press inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-4 text-[0.95rem] ${on ? "soft-in font-medium text-grandala-ink" : "pebble text-ink-2 hover:text-ink"}`}
            >
              {g.name}
              <span className={`num text-[0.82rem] ${on ? "text-grandala-ink" : "text-ink-3"}`}>{g.shots.length}</span>
            </button>
          );
        })}
      </div>

      {groups.map((g) => (
        <section key={g.id} aria-label={g.name} hidden={g.id !== group}>
          <ul key={g.id === group ? flight : 0} className={`mt-6 columns-2 gap-4 md:columns-3 md:gap-5 xl:columns-4 [&>li]:mb-4 [&>li]:break-inside-avoid md:[&>li]:mb-5 ${g.id === group && flight ? "flock-landed" : ""}`}>
            {g.shots.map((s, j) => {
              const [w, h] = photoSizes[s.slug];
              return (
                <li key={s.slug} style={{ "--i": j % 8, "--fx": `${(j % 2 ? 1 : -1) * 16}px`, "--fy": `${20 + (j % 3) * 6}px`, "--fr": `${(j % 2 ? 1 : -1) * 2.5}deg` } as React.CSSProperties}>
                  <button type="button" onClick={() => open(j)} className="bezel press group block w-full text-left" aria-label={`Open: ${alt(s.caption)}`}>
                    <span className="relative block overflow-hidden rounded-[1.1rem] bg-well" style={{ aspectRatio: w / h }}>
                      <Image src={`/photos/${s.slug}.jpg`} alt="" fill sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 46vw" className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]" />
                    </span>
                    <span className="mt-2 block px-1 text-[0.8rem] leading-snug text-ink-3 group-hover:text-ink-2">{s.caption}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <dialog ref={dialog} aria-label="Photograph" className="m-0 h-dvh max-h-none w-dvw max-w-none bg-[#0f1611] p-0 text-[#e3e9d7] backdrop:bg-black/80" onClick={(e) => e.target === dialog.current && close()}>
        {current ? (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <p className="num text-[0.95rem] opacity-80">
                {(index ?? 0) + 1} / {all.length}
              </p>
              <button type="button" onClick={close} className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Close" autoFocus>
                <X className="size-5" strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
            <div className="relative min-h-0 flex-1">
              <Image src={`/photos/${current.slug}.jpg`} alt={alt(current.caption)} fill sizes="100vw" quality={85} className="object-contain" />
            </div>
            <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
              <button type="button" onClick={() => step(-1)} className="grid size-12 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Previous photograph">
                <ChevronLeft className="size-6" strokeWidth={2} aria-hidden="true" />
              </button>
              <p className="text-center text-[0.95rem]">{current.caption}</p>
              <button type="button" onClick={() => step(1)} className="grid size-12 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Next photograph">
                <ChevronRight className="size-6" strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}

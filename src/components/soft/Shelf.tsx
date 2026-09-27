"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

// A shelf of cards you can drag sideways. With a mouse, dragging past either end stretches the
// shelf like elastic and it springs back on release; touch screens keep their native scroll.
// Pebble arrows step through it for keyboard and pointer users.

function band(d: number, limit = 160) {
  return d / (1 + Math.abs(d) / limit);
}

export function Shelf({ children, label, className = "", itemClassName = "" }: { children: React.ReactNode; label: string; className?: string; itemClassName?: string }) {
  const scroller = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sc = scroller.current;
    const tr = track.current;
    if (!sc || !tr) return;
    let drag = false;
    let startX = 0;
    let startScroll = 0;
    let moved = 0;

    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      drag = true;
      moved = 0;
      startX = e.clientX;
      startScroll = sc.scrollLeft;
      sc.style.scrollSnapType = "none";
      tr.style.transition = "none";
    };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      if (moved > 4) sc.setPointerCapture(e.pointerId);
      const max = sc.scrollWidth - sc.clientWidth;
      const want = startScroll - dx;
      if (want < 0) {
        sc.scrollLeft = 0;
        tr.style.transform = `translateX(${band(-want)}px)`;
      } else if (want > max) {
        sc.scrollLeft = max;
        tr.style.transform = `translateX(${-band(want - max)}px)`;
      } else {
        sc.scrollLeft = want;
        tr.style.transform = "";
      }
    };
    const up = () => {
      if (!drag) return;
      drag = false;
      tr.style.transition = "transform 620ms var(--ease-spring)";
      tr.style.transform = "";
      sc.style.scrollSnapType = "";
    };
    const click = (e: MouseEvent) => {
      if (moved > 6) {
        e.preventDefault();
        e.stopPropagation();
        moved = 0;
      }
    };
    sc.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    sc.addEventListener("click", click, true);
    return () => {
      sc.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      sc.removeEventListener("click", click, true);
    };
  }, []);

  const stepBy = (dir: number) => {
    const sc = scroller.current;
    if (!sc) return;
    const first = sc.querySelector<HTMLElement>("[data-shelf-item]");
    const stepW = first ? first.offsetWidth + 20 : sc.clientWidth * 0.8;
    sc.scrollBy({ left: dir * stepW, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  return (
    <div className={className}>
      <div ref={scroller} role="region" aria-label={label} tabIndex={0} className="shelf cursor-grab gap-5 py-6 active:cursor-grabbing">
        <div ref={track} className="flex gap-5">
          {Array.isArray(children)
            ? children.map((c, i) => (
                <div key={i} data-shelf-item className={`shrink-0 ${itemClassName}`} style={{ scrollSnapAlign: "start" }}>
                  {c}
                </div>
              ))
            : children}
        </div>
      </div>
      <div className="container-x flex justify-end gap-3">
        <button type="button" onClick={() => stepBy(-1)} aria-label="Scroll back" className="pebble press grid size-11 place-items-center text-ink">
          <ArrowLeft className="size-5" strokeWidth={2} aria-hidden="true" />
        </button>
        <button type="button" onClick={() => stepBy(1)} aria-label="Scroll on" className="pebble press grid size-11 place-items-center text-ink">
          <ArrowRight className="size-5" strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

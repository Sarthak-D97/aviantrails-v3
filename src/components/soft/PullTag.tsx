"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";

// The pull tag: a specimen tag hanging on a string from a pin. Tap it like any link, or tug it:
// the string stretches with rubber-band resistance, and a tug past the mark opens WhatsApp. On release
// it springs back with a little overshoot. At rest it sways as if in a breeze. On touch screens only the
// eyelet grip tugs, so a thumb on the tag's face still scrolls the page.

const REST = 46; // string length at rest, px
const OPEN_AT = 78; // tug this far to open

function band(d: number, limit = 240) {
  return d / (1 + Math.abs(d) / limit);
}

export function PullTag({ href, title, note, className = "" }: { href: string; title: string; note?: string; className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const tag = useRef<HTMLAnchorElement>(null);
  const cord = useRef<SVGPathElement>(null);
  const s = useRef({ x: 0, y: 0, vx: 0, vy: 0, drag: false, sx: 0, sy: 0, moved: 0, raf: 0, opened: false });

  useEffect(() => {
    const st = s.current;
    const el = tag.current;
    const path = cord.current;
    const box = wrap.current;
    if (!el || !path || !box) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = () => {
      const mid = box.clientWidth / 2;
      el.style.transform = `translate(${st.x.toFixed(2)}px, ${st.y.toFixed(2)}px) rotate(${(st.x * 0.12).toFixed(2)}deg)`;
      const endX = mid + st.x;
      const endY = REST + st.y;
      path.setAttribute("d", `M ${mid} 6 Q ${mid + st.x * 0.35} ${(6 + endY) / 2 + Math.abs(st.x) * 0.08} ${endX} ${endY}`);
    };

    const spring = () => {
      const k = 0.16;
      const damping = 0.8;
      st.vx = (st.vx - st.x * k) * damping;
      st.vy = (st.vy - st.y * k) * damping;
      st.x += st.vx;
      st.y += st.vy;
      render();
      if (Math.abs(st.x) + Math.abs(st.y) + Math.abs(st.vx) + Math.abs(st.vy) > 0.05) {
        st.raf = requestAnimationFrame(spring);
      } else {
        st.x = st.y = st.vx = st.vy = 0;
        render();
        box.dataset.idle = "true";
      }
    };

    const down = (e: PointerEvent) => {
      if (e.button !== 0) return;
      // a thumb on the tag's face is scrolling the page; only the eyelet grip tugs on touch
      if (e.pointerType === "touch" && !(e.target as Element).closest("[data-grip]")) return;
      cancelAnimationFrame(st.raf);
      st.drag = true;
      st.sx = e.clientX - st.x;
      st.sy = e.clientY - st.y;
      st.moved = 0;
      st.opened = false;
      box.dataset.idle = "false";
      el.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (!st.drag) return;
      const dx = e.clientX - st.sx;
      const dy = e.clientY - st.sy;
      st.moved = Math.max(st.moved, Math.hypot(dx, dy));
      st.x = band(dx * 0.7, 120);
      st.y = dy < 0 ? band(dy, 40) : band(dy, 240);
      box.dataset.armed = st.y > OPEN_AT ? "true" : "false";
      render();
    };
    const up = () => {
      if (!st.drag) return;
      st.drag = false;
      if (st.y > OPEN_AT && !st.opened) {
        st.opened = true;
        window.open(href, "_blank", "noopener");
      }
      box.dataset.armed = "false";
      if (reduce) {
        st.x = st.y = 0;
        render();
        box.dataset.idle = "true";
        return;
      }
      st.vx = 0;
      st.vy = -st.y * 0.12;
      st.raf = requestAnimationFrame(spring);
    };
    const click = (e: MouseEvent) => {
      // a tug is not a click
      if (st.moved > 6) e.preventDefault();
    };

    render();
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener("click", click);
    return () => {
      cancelAnimationFrame(st.raf);
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      el.removeEventListener("click", click);
    };
  }, [href]);

  return (
    <div ref={wrap} data-idle="true" data-armed="false" className={`group/tag relative w-[15.5rem] select-none ${className}`}>
      <span aria-hidden="true" className="pebble absolute top-0 left-1/2 z-10 size-3.5 -translate-x-1/2" />
      <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[20rem] w-full overflow-visible">
        <path ref={cord} fill="none" stroke="var(--ink-3)" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <div className="origin-top pt-[46px] group-data-[idle=true]/tag:animate-[sway_4.8s_ease-in-out_infinite]">
        <a
          ref={tag}
          href={href}
          target="_blank"
          rel="noopener"
          draggable={false}
          className="action relative flex cursor-grab flex-col items-center gap-1 rounded-[1.4rem] px-6 pt-7 pb-5 text-center no-underline transition-[background-color] duration-200 active:cursor-grabbing"
        >
          <span data-grip aria-hidden="true" className="absolute -top-3 left-1/2 h-11 w-16 -translate-x-1/2" style={{ touchAction: "none" }}>
            <span className="absolute top-[22px] left-1/2 size-3 -translate-x-1/2 rounded-full bg-[color-mix(in_oklab,var(--grandala)_40%,black)] shadow-[inset_1px_1px_2px_rgb(0_0_0/0.4)]" />
          </span>
          <MessageCircle className="size-5" strokeWidth={2} aria-hidden="true" />
          <span className="serif text-[1.35rem] leading-tight font-semibold">{title}</span>
          {note ? <span className="num text-[0.92rem] opacity-90">{note}</span> : null}
          <span className="mt-1 text-[0.78rem] opacity-80 group-data-[armed=true]/tag:opacity-100">
            <span className="group-data-[armed=true]/tag:hidden">Tap, or tug the tag</span>
            <span className="hidden group-data-[armed=true]/tag:inline">Let go to open WhatsApp</span>
          </span>
        </a>
      </div>
    </div>
  );
}

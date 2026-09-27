"use client";

import { useEffect, useRef } from "react";

// The Flock: small birds that school like a real flock (separation, alignment, cohesion), sweep
// towards a slowly wandering point, and part around the pointer the way a flock parts round a hawk.
// Colour follows the circadian --flock token. Pauses off-screen; a still flock under reduced motion.

type Bird = { x: number; y: number; vx: number; vy: number; flap: number };

export function Flock({ count = 64, className = "" }: { count?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let colour = "#28402a";
    const pointer = { x: -9999, y: -9999 };
    const birds: Bird[] = [];

    const readColour = () => {
      colour = getComputedStyle(document.documentElement).getPropertyValue("--flock").trim() || colour;
    };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      birds.length = 0;
      const n = w < 640 ? Math.round(count * 0.6) : count;
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2;
        birds.push({
          x: w * (0.15 + Math.random() * 0.5),
          y: h * (0.1 + Math.random() * 0.3),
          vx: Math.cos(a) * 1.2,
          vy: Math.sin(a) * 0.6,
          flap: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawBird = (b: Bird, t: number) => {
      const angle = Math.atan2(b.vy, b.vx);
      const wing = Math.sin(t * 0.012 + b.flap) * 3.2;
      const s = 1;
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(angle);
      ctx.scale(s, s);
      ctx.beginPath();
      // a swift-like silhouette: body forward, two wings swept back, flapping
      ctx.moveTo(6, 0);
      ctx.quadraticCurveTo(-1, -1.6 - wing, -6, -6 - wing);
      ctx.quadraticCurveTo(-2, -1, -4, 0);
      ctx.quadraticCurveTo(-2, 1, -6, 6 + wing);
      ctx.quadraticCurveTo(-1, 1.6 + wing, 6, 0);
      ctx.fill();
      ctx.restore();
    };

    let target = { x: 0, y: 0 };
    const step = (t: number) => {
      target = {
        x: w * (0.36 + 0.24 * Math.sin(t * 0.00021)),
        y: h * (0.22 + 0.1 * Math.sin(t * 0.00033 + 1.3)),
      };
      for (const b of birds) {
        let sx = 0, sy = 0, ax = 0, ay = 0, cx = 0, cy = 0, n = 0;
        for (const o of birds) {
          if (o === b) continue;
          const dx = o.x - b.x;
          const dy = o.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 2600) {
            n++;
            ax += o.vx;
            ay += o.vy;
            cx += o.x;
            cy += o.y;
            if (d2 < 300) {
              sx -= dx / (d2 + 1);
              sy -= dy / (d2 + 1);
            }
          }
        }
        if (n) {
          b.vx += (ax / n - b.vx) * 0.045 + (cx / n - b.x) * 0.0009;
          b.vy += (ay / n - b.vy) * 0.045 + (cy / n - b.y) * 0.0009;
        }
        b.vx += sx * 1.4 + (target.x - b.x) * 0.00011;
        b.vy += sy * 1.4 + (target.y - b.y) * 0.00011;
        // the hawk: part around the pointer
        const px = b.x - pointer.x;
        const py = b.y - pointer.y;
        const p2 = px * px + py * py;
        if (p2 < 14000) {
          const f = (14000 - p2) / 14000;
          b.vx += (px / Math.sqrt(p2 + 1)) * f * 0.9;
          b.vy += (py / Math.sqrt(p2 + 1)) * f * 0.9;
        }
        // keep inside the sky, softly
        const m = 30;
        if (b.x < m) b.vx += 0.12;
        if (b.x > w - m) b.vx -= 0.12;
        if (b.y < m) b.vy += 0.12;
        if (b.y > h - m) b.vy -= 0.12;
        const sp = Math.hypot(b.vx, b.vy);
        const max = 2.1;
        const min = 0.9;
        if (sp > max) {
          b.vx = (b.vx / sp) * max;
          b.vy = (b.vy / sp) * max;
        } else if (sp < min) {
          b.vx = (b.vx / (sp || 1)) * min;
          b.vy = (b.vy / (sp || 1)) * min;
        }
        b.x += b.vx;
        b.y += b.vy;
      }
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = colour;
      ctx.globalAlpha = 0.85;
      for (const b of birds) drawBird(b, t);
    };

    let raf = 0;
    let running = false;
    let last = 0;
    const loop = (t: number) => {
      if (t - last > 2000) {
        readColour();
        last = t;
      }
      step(t);
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduce) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    seed();
    readColour();
    if (reduce) {
      for (let i = 0; i < 160; i++) step(i * 16);
      draw(0);
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const host = canvas.parentElement ?? canvas;
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);

    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw(0);
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0.05 });
    io.observe(canvas);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, [count]);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
}

"use client";

import { useEffect, useRef } from "react";

// Lists land like a flock: each item glides in on its own slightly curved line, one after another.
// Only items below the fold are held back, and only once script is running, so nothing is ever hidden
// by default.

export function FlockIn({ children, className = "", as: Tag = "div" }: { children: React.ReactNode; className?: string; as?: "div" | "ol" | "ul" }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92) return; // already in view: leave it be
    [...el.children].forEach((c, i) => {
      const node = c as HTMLElement;
      node.style.setProperty("--i", String(i % 8));
      node.style.setProperty("--fx", `${(i % 2 ? 1 : -1) * (14 + (i % 3) * 6)}px`);
      node.style.setProperty("--fy", `${20 + (i % 4) * 5}px`);
      node.style.setProperty("--fr", `${(i % 2 ? 1 : -1) * 2.5}deg`);
    });
    el.classList.add("flock-armed");
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        el.classList.remove("flock-armed");
        el.classList.add("flock-landed");
        io.disconnect();
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    // @ts-expect-error the ref type follows the chosen tag
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

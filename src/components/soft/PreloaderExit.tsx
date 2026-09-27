"use client";

import { useEffect } from "react";

// Lifts the preloader once the fonts and the first photographs are in, but not before the groove
// has had time to fill (MIN) and never later than MAX. Marks the visit so the next page skips it.

const MIN = 1100;
const MAX = 2400;

export function PreloaderExit() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.preloaded) return;
    const started = performance.now();
    let done = false;

    const lift = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, MIN - (performance.now() - started));
      window.setTimeout(() => {
        root.dataset.loaded = "true";
        try {
          sessionStorage.setItem("at-seen", "1");
        } catch {}
      }, wait);
    };

    const loaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", () => resolve(), { once: true });
    });
    Promise.all([document.fonts?.ready ?? Promise.resolve(), loaded]).then(lift);
    const cap = window.setTimeout(lift, MAX);
    return () => window.clearTimeout(cap);
  }, []);

  return null;
}

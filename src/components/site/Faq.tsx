import { Plus } from "lucide-react";

// Questions people ask before booking, answered only with what Rajesh has published (tour posters,
// captions, the old site). Each opens in place; the first is open so the pattern is plain.

export type QA = { q: string; a: React.ReactNode };

export function Faq({ items }: { items: QA[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((it, i) => (
        <li key={it.q}>
          <details className="soft group/faq px-5 sm:px-6" open={i === 0}>
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
              <span className="serif text-[1.12rem] leading-snug font-semibold sm:text-[1.2rem]">{it.q}</span>
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-well text-ink transition-transform duration-500 ease-[var(--ease-spring)] group-open/faq:rotate-45">
                <Plus className="size-4" strokeWidth={2.2} aria-hidden="true" />
              </span>
            </summary>
            <div className="max-w-[46rem] pb-5 text-ink-2">{it.a}</div>
          </details>
        </li>
      ))}
    </ul>
  );
}

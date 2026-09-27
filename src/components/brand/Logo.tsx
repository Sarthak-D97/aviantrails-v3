import Link from "next/link";
import { Sunbird } from "./Sunbird";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Avian Trails, home" className={`group inline-flex shrink-0 items-center gap-2 text-ink no-underline ${className}`}>
      <Sunbird className="h-8 w-auto text-moss transition-transform duration-500 ease-[var(--ease-spring)] group-hover:-translate-y-0.5 group-hover:rotate-[-6deg]" />
      <span className="serif text-[1.25rem] leading-none font-semibold tracking-[-0.01em]">Avian Trails</span>
    </Link>
  );
}

"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { whatsappLink } from "@/content/site";

export const nav = [
  { href: "/departures", label: "Departures" },
  { href: "/custom-tours", label: "Custom tours" },
  { href: "/lodges", label: "Lodges" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "Rajesh & Sheela" },
] as const;

const hello = "Hello Rajesh, I found Avian Trails online and would like to know about your upcoming tours.";

// A soft pill floating over the page. On phones the links fold into a panel that drops out of it.
export function Header() {
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-50 focus:rounded-full focus:bg-grandala focus:px-4 focus:py-2 focus:text-on-grandala">
        Skip to content
      </a>
      <div className="soft mx-auto flex h-16 max-w-[74rem] items-center gap-3 rounded-full pr-2 pl-5 sm:pl-6">
        <Logo />
        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="inline-flex min-h-11 items-center rounded-full px-4 text-[0.95rem] text-ink-2 no-underline transition-colors hover:text-ink aria-[current=page]:font-medium aria-[current=page]:text-ink aria-[current=page]:shadow-[inset_2px_2px_5px_var(--lo),inset_-2px_-2px_5px_var(--hi)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={whatsappLink(hello)}
          target="_blank"
          rel="noopener"
          className="action press ml-auto inline-flex min-h-12 items-center gap-2 px-5 text-[0.95rem] font-medium no-underline lg:ml-2"
        >
          <MessageCircle className="size-[1.1em]" strokeWidth={2} aria-hidden="true" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setOpenOn((prev) => (prev === pathname ? null : pathname))}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="pebble press grid size-12 place-items-center text-ink lg:hidden"
        >
          {open ? <X className="size-5" strokeWidth={2} aria-hidden="true" /> : <Menu className="size-5" strokeWidth={2} aria-hidden="true" />}
        </button>
      </div>

      <div id="site-menu" hidden={!open} className="mx-auto mt-3 max-w-[74rem] lg:hidden">
        <nav aria-label="Main" className="soft animate-[land_420ms_var(--ease-spring)_both] p-3">
          <ul className="grid gap-1">
            {[...nav, { href: "/field-reports", label: "Field reports" }, { href: "/reviews", label: "Guest words" }, { href: "/enquiry", label: "Enquiry" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="serif flex min-h-13 items-center rounded-2xl px-4 text-[1.35rem] text-ink no-underline aria-[current=page]:shadow-[inset_2px_2px_6px_var(--lo),inset_-2px_-2px_6px_var(--hi)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

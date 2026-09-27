import Link from "next/link";
import { Sunbird } from "@/components/brand/Sunbird";
import { site } from "@/content/site";
import { seatsAsOnLabel } from "@/content/tours";

const pages = [
  { href: "/departures", label: "Departures" },
  { href: "/custom-tours", label: "Custom tours" },
  { href: "/lodges", label: "Lodges" },
  { href: "/field-reports", label: "Field reports" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "Rajesh & Sheela" },
  { href: "/reviews", label: "Guest words" },
  { href: "/enquiry", label: "Enquiry" },
];

const follow = [
  { href: site.social.instagram, label: "Instagram" },
  { href: site.social.youtube, label: "YouTube" },
  { href: site.social.whatsappChannel, label: "WhatsApp channel" },
  { href: site.social.facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="container-x pt-10 pb-8">
      <div className="soft grid grid-cols-2 gap-x-6 gap-y-8 p-7 sm:p-10 md:grid-cols-[1.2fr_1fr_1fr] md:gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="flex items-center gap-2.5">
            <Sunbird className="h-9 w-auto text-moss" />
            <span className="serif text-[1.5rem] font-semibold">Avian Trails</span>
          </p>
          <address className="mt-4 text-[0.95rem] leading-relaxed text-ink-2 not-italic">
            {site.address.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
          <p className="mt-4 grid gap-1 text-[0.95rem]">
            <a href={`tel:${site.phone.number}`} className="num w-fit text-ink">
              Call {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`} className="w-fit text-ink">
              {site.email}
            </a>
          </p>
        </div>
        <nav aria-label="Pages">
          <ul className="grid gap-1 text-[0.98rem]">
            {pages.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="inline-block py-1 text-ink-2 no-underline hover:text-ink hover:underline">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Follow the trips">
          <ul className="grid gap-1 text-[0.98rem]">
            {follow.map((f) => (
              <li key={f.href}>
                <a href={f.href} target="_blank" rel="noopener" className="inline-block py-1 text-ink-2 no-underline hover:text-ink hover:underline">
                  {f.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mt-6 flex flex-col gap-1 px-2 text-[0.85rem] text-ink-3 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Avian Trails, Kaladhungi. Photographs by Rajesh Panwar and Avian Trails guests.</span>
        <span>Seats as on {seatsAsOnLabel}; always confirm on WhatsApp.</span>
      </p>
    </footer>
  );
}

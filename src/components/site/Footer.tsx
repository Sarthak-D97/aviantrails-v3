import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { FacebookMark, InstagramMark, YouTubeMark } from "@/components/brand/Social";
import { Sunbird } from "@/components/brand/Sunbird";
import { lodges } from "@/content/lodges";
import { site, whatsappLink } from "@/content/site";
import { seatsAsOnLabel } from "@/content/tours";

const explore = [
  { href: "/departures", label: "Departures 2026–27" },
  { href: "/custom-tours", label: "Custom tours" },
  { href: "/field-reports", label: "Field reports" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "Rajesh & Sheela" },
  { href: "/reviews", label: "Guest words" },
  { href: "/enquiry", label: "Enquiry" },
];

const follow = [
  { href: site.social.instagram, label: "Instagram", Mark: InstagramMark },
  { href: site.social.youtube, label: "YouTube", Mark: YouTubeMark },
  { href: site.social.facebook, label: "Facebook", Mark: FacebookMark },
];

const hello = "Hello Rajesh, I found Avian Trails online and would like to know about your upcoming tours.";

// The footer sits on the hour's deep colour, full width: the business, how to reach it, where to
// go next, and the date the seat counts were checked.
export function Footer() {
  const a = "text-ink-2 no-underline transition-colors hover:text-ink";
  return (
    <footer className="band-deep mt-16 md:mt-20">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.1fr] md:gap-10 md:py-20">
        <div className="col-span-2 md:col-span-1">
          <p className="flex items-center gap-2.5">
            <Sunbird className="h-9 w-auto text-moss" />
            <span className="serif text-[1.6rem] font-semibold">Avian Trails</span>
          </p>
          <p className="mt-4 max-w-[22rem] text-[0.98rem] text-ink-2">
            Small-group birding and bird-photography tours led by Rajesh Panwar, and two birding lodges of our own in Kumaon.
          </p>
          <a href={whatsappLink(hello)} target="_blank" rel="noopener" className="action press mt-6 inline-flex min-h-12 items-center gap-2 px-5 text-[0.95rem] font-medium no-underline">
            <MessageCircle className="size-[1.1em]" strokeWidth={2} aria-hidden="true" />
            Plan a trip on WhatsApp
          </a>
        </div>

        <nav aria-label="Explore">
          <p className="text-[0.82rem] font-medium tracking-wide text-glow">Explore</p>
          <ul className="mt-4 grid gap-1 text-[0.98rem]">
            {explore.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className={`${a} inline-block py-1`}>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[0.82rem] font-medium tracking-wide text-glow">Our lodges</p>
          <ul className="mt-4 grid gap-3 text-[0.98rem]">
            {lodges.map((l) => (
              <li key={l.slug}>
                <Link href={`/lodges/${l.slug}`} className={a}>
                  {l.name}
                </Link>
                <span className="block text-[0.85rem] text-ink-3">
                  {l.place.split(",").slice(-1)[0].trim()} · {l.altitude}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[0.82rem] font-medium tracking-wide text-glow">Follow the trips</p>
          <ul className="mt-3 flex items-center gap-2">
            {follow.map(({ href, label, Mark }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener" aria-label={label} className="pebble press grid size-11 place-items-center text-ink [--yt-play:var(--deep-2)]">
                  <Mark className="size-[1.1rem]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <address className="col-span-2 not-italic md:col-span-1">
          <p className="text-[0.82rem] font-medium tracking-wide text-glow">Reach us</p>
          <ul className="mt-4 grid gap-3 text-[0.98rem]">
            <li className="flex gap-2.5 text-ink-2">
              <MapPin className="mt-1 size-4 shrink-0 text-glow" strokeWidth={2} aria-hidden="true" />
              <span>
                {site.address.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </span>
            </li>
            <li>
              <a href={`tel:${site.phone.number}`} className={`${a} num inline-flex items-center gap-2.5`}>
                <Phone className="size-4 text-glow" strokeWidth={2} aria-hidden="true" />
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener" className={`${a} num inline-flex items-center gap-2.5`}>
                <MessageCircle className="size-4 text-glow" strokeWidth={2} aria-hidden="true" />
                {site.whatsapp.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={`${a} inline-flex items-center gap-2.5 break-all`}>
                <Mail className="size-4 shrink-0 text-glow" strokeWidth={2} aria-hidden="true" />
                {site.email}
              </a>
            </li>
          </ul>
        </address>
      </div>
      <div className="border-t border-rule">
        <p className="container-x flex flex-col gap-1 py-5 text-[0.85rem] text-ink-3 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Avian Trails, Kaladhungi. Photographs by Rajesh Panwar and Avian Trails guests.</span>
          <span>Seats as on {seatsAsOnLabel}; always confirm on WhatsApp.</span>
        </p>
      </div>
    </footer>
  );
}

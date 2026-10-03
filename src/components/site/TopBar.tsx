import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FacebookMark, InstagramMark, YouTubeMark } from "@/components/brand/Social";
import { site, whatsappLink } from "@/content/site";

// The contact strip above the header, on the hour's deep colour: how to reach Rajesh, where the
// business is, and where the trips are posted. On phones it keeps just WhatsApp and call.
export function TopBar() {
  const link = "inline-flex min-h-10 items-center gap-1.5 text-on-deep-2 no-underline transition-colors hover:text-on-deep";
  return (
    <div className="band-deep relative z-50 text-[0.82rem]">
      <div className="mx-auto flex max-w-[78rem] items-center justify-between gap-4 px-[clamp(1.25rem,4.5vw,2.75rem)]">
        <p className="hidden items-center gap-1.5 text-on-deep-2 lg:inline-flex">
          <MapPin className="size-3.5 text-glow" strokeWidth={2} aria-hidden="true" />
          {site.address.lines[0]}, Kaladhungi · Uttarakhand
        </p>
        <ul className="flex items-center gap-x-5">
          <li>
            <a href={whatsappLink()} target="_blank" rel="noopener" className={link}>
              <MessageCircle className="size-3.5 text-glow" strokeWidth={2} aria-hidden="true" />
              <span className="num">{site.whatsapp.display}</span>
            </a>
          </li>
          <li>
            <a href={`tel:${site.phone.number}`} className={link}>
              <Phone className="size-3.5 text-glow" strokeWidth={2} aria-hidden="true" />
              <span className="num">
                <span className="sm:hidden">Call</span>
                <span className="hidden sm:inline">{site.phone.display}</span>
              </span>
            </a>
          </li>
          <li className="hidden md:block">
            <a href={`mailto:${site.email}`} className={link}>
              <Mail className="size-3.5 text-glow" strokeWidth={2} aria-hidden="true" />
              {site.email}
            </a>
          </li>
        </ul>
        <ul className="hidden items-center gap-1 sm:flex" aria-label="Follow the trips">
          {[
            { href: site.social.instagram, label: "Instagram", Mark: InstagramMark },
            { href: site.social.youtube, label: "YouTube", Mark: YouTubeMark },
            { href: site.social.facebook, label: "Facebook", Mark: FacebookMark },
          ].map(({ href, label, Mark }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener" aria-label={label} className="grid size-10 place-items-center text-on-deep-2 transition-colors hover:text-glow [--yt-play:var(--deep)]">
                <Mark className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

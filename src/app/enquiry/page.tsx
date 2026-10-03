import type { Metadata } from "next";
import { PageHead } from "@/components/site/PageHead";
import { ReservationForm } from "@/components/soft/ReservationForm";
import { journeyOptions } from "@/content/board";
import { site, whatsappLink } from "@/content/site";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Enquiry and reservations",
  description: "Reserve a seat on an Avian Trails departure, plan a custom birding tour or book a lodge stay: WhatsApp +91 89790 37355, call +91 98374 77661 or email birding@aviantrails.in.",
  alternates: { canonical: "/enquiry" },
};

export default function EnquiryPage() {
  const maps = `https://www.google.com/maps/search/?api=1&query=${site.geo.lat},${site.geo.lng}`;
  const contact: { k: string; v: React.ReactNode }[] = [
    {
      k: "WhatsApp",
      v: (
        <a href={whatsappLink()} target="_blank" rel="noopener" className="num font-medium text-ink">
          {site.whatsapp.display}
        </a>
      ),
    },
    {
      k: "Phone",
      v: (
        <a href={`tel:${site.phone.number}`} className="num font-medium text-ink">
          {site.phone.display}
        </a>
      ),
    },
    {
      k: "Email",
      v: (
        <a href={`mailto:${site.email}`} className="font-medium break-all text-ink">
          {site.email}
        </a>
      ),
    },
    {
      k: "Address",
      v: (
        <>
          {site.address.lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
          <a href={maps} target="_blank" rel="noopener" className="mt-1.5 inline-block font-medium text-ink">
            Open in Maps
          </a>
        </>
      ),
    },
    {
      k: "Trip news first",
      v: (
        <a href={site.social.whatsappChannel} target="_blank" rel="noopener" className="font-medium text-ink">
          The WhatsApp channel
        </a>
      ),
    },
  ];

  return (
    <>
      <PageHead
        photo={{ slug: "milieu-villa-terrace-view", caption: "The view from our terrace · Milieu Villa · Jul 2024", position: "50% 55%" }} name="Enquiry" note="Send the form, or just a tour number. Rajesh replies with the day-by-day plan and the cost." />
      <section className="container-x grid gap-10 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-8">
          <ReservationForm journeys={journeyOptions()} />
        </div>
        <dl className="soft-in grid content-start gap-5 p-6 sm:p-7 lg:col-span-4">
          {contact.map((c) => (
            <div key={c.k}>
              <dt className="text-[0.85rem] text-ink-3">{c.k}</dt>
              <dd className="mt-1 leading-relaxed">{c.v}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clip } from "@/components/media/Clip";
import { Photo } from "@/components/media/Photo";
import { WhatsAppButton } from "@/components/site/Actions";
import { PageHead, SectionTitle } from "@/components/site/PageHead";
import { FlockIn } from "@/components/soft/FlockIn";
import { ReservationForm } from "@/components/soft/ReservationForm";
import { Shelf } from "@/components/soft/Shelf";
import { journeyOptions } from "@/content/board";
import { lodgeBySlug, lodges } from "@/content/lodges";
import { site } from "@/content/site";

export function generateStaticParams() {
  return lodges.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = lodgeBySlug(slug);
  if (!l) return {};
  return { title: `${l.name}, ${l.place}`, description: l.lead, alternates: { canonical: `/lodges/${l.slug}` } };
}

export default async function LodgePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = lodgeBySlug(slug);
  if (!l) notFound();
  const other = lodges.find((o) => o.slug !== l.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: l.name,
    description: l.lead,
    url: `${site.url}/lodges/${l.slug}`,
    image: `${site.url}/photos/${l.hero}.jpg`,
    telephone: site.whatsapp.number,
    email: site.email,
    address: { "@type": "PostalAddress", addressLocality: l.place, addressRegion: "Uttarakhand", addressCountry: "IN" },
    parentOrganization: { "@type": "TravelAgency", name: site.name, url: site.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHead name={l.name} note={`${l.place} · ${l.altitude} above sea level · open since ${l.opened}`} />

      <section className="container-x grid gap-10 pt-8 md:pt-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-5">
          <p className="serif text-[clamp(1.35rem,2.3vw,1.75rem)] leading-[1.3] font-medium">{l.lead}</p>
          <WhatsAppButton message={l.enquiry} className="mt-7">
            Ask for dates
          </WhatsAppButton>
        </div>
        <div className="lg:col-span-7">
          <Photo slug={l.hero} caption={l.heroCaption} ratio={3 / 2} priority quality={85} sizes="(min-width: 1024px) 55vw, 100vw" />
        </div>
      </section>

      <section aria-labelledby="stay" className="container-x grid gap-10 pt-16 md:pt-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <SectionTitle id="stay">The stay</SectionTitle>
          <ul className="mt-6 grid gap-3.5">
            {l.rooms.concat(l.facts).map((f) => (
              <li key={f} className="grid grid-cols-[1.25rem_1fr] gap-3">
                <span aria-hidden="true" className="eyelet mt-[0.35rem] !size-3" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={`grid gap-5 lg:col-span-6 ${l.building.length > 1 ? "grid-cols-2" : ""}`}>
          {l.building.map((b) => (
            <Photo key={b.slug} slug={b.slug} caption={b.caption} ratio={l.building.length > 1 ? 4 / 5 : undefined} sizes="(min-width: 1024px) 24vw, 50vw" />
          ))}
        </div>
      </section>

      <section aria-labelledby="calendar" className="container-x pt-16 md:pt-24">
        <SectionTitle id="calendar">When to come</SectionTitle>
        <FlockIn as="ol" className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {l.seasons.map((s) => (
            <li key={s.months} className="soft-in p-5 sm:p-6">
              <p className="serif text-[1.2rem] font-semibold">{s.months}</p>
              <p className="mt-2 text-ink-2">{s.birds}</p>
            </li>
          ))}
        </FlockIn>
      </section>

      <section aria-labelledby="doorstep" className="pt-16 md:pt-24">
        <div className="container-x">
          <SectionTitle id="doorstep">On the doorstep</SectionTitle>
          <p className="mt-3 text-ink-3">Photographed by Rajesh at or near the lodge.</p>
        </div>
        <Shelf label="Birds at the lodge" className="mt-2" itemClassName="w-[15rem] sm:w-[19rem]">
          {[
            ...(l.clip ? [<Clip key="clip" {...l.clip} ratio={4 / 5} />] : []),
            ...l.doorstep.map((s) => <Photo key={s.slug} slug={s.slug} caption={s.caption} ratio={4 / 5} sizes="(min-width: 640px) 19rem, 15rem" />),
          ]}
        </Shelf>
      </section>

      <section aria-labelledby="getting-there" className="container-x grid gap-10 pt-16 pb-20 md:pt-24 md:pb-28 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <SectionTitle id="getting-there">Getting there</SectionTitle>
          <dl className="soft-in mt-6 grid gap-0.5 p-2">
            {l.gettingThere.map((g) => (
              <div key={g.label} className="grid grid-cols-[7.5rem_1fr] gap-3 px-3 py-2.5">
                <dt className="text-ink-3">{g.label}</dt>
                <dd className="font-medium">{g.value}</dd>
              </div>
            ))}
          </dl>
          {other ? (
            <p className="mt-6 text-ink-2">
              Pairs well with{" "}
              <Link href={`/lodges/${other.slug}`} className="font-medium text-ink">
                {other.name}
              </Link>
              .
            </p>
          ) : null}
        </div>
        <div className="lg:col-span-8">
          <ReservationForm journeys={journeyOptions()} initial={`lodge-${l.slug}`} />
        </div>
      </section>
    </>
  );
}

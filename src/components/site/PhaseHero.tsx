import Image from "next/image";
import { ButtonLink, WhatsAppButton } from "@/components/site/Actions";
import { CircadianChip } from "@/components/soft/CircadianChip";
import { DepartureTag, type TagRow } from "@/components/soft/DepartureTag";
import { Flock } from "@/components/soft/Flock";
import type { PhotoSlug } from "@/content/photo-sizes";

// The home page opens on one of Rajesh's photographs chosen by the visitor's hour: Panchachuli at
// first light, the Paradise Flycatcher that was his first bird photograph, Panchachuli at sunset,
// star trails over Harsil. Only the hour's photograph is displayed, so only it loads (the others are
// lazy and hidden). A live flock crosses the sky; the next departure is pinned in the corner.

const PHOTOS: { phase: "dawn" | "day" | "dusk" | "night"; slug: PhotoSlug; caption: string; position: string }[] = [
  { phase: "dawn", slug: "panchachuli-dawn", caption: "Panchachuli at first light · Munsyari · Dec 2024", position: "60% 40%" },
  { phase: "day", slug: "paradise-flycatcher-kaladhungi", caption: "Indian Paradise Flycatcher · Kaladhungi · May 2026", position: "70% 40%" },
  { phase: "dusk", slug: "panchachuli-sunset", caption: "Panchachuli at sunset · Munsyari · Nov 2022", position: "60% 45%" },
  { phase: "night", slug: "harsil-star-trails", caption: "Star trails · Harsil · Nov 2022", position: "50% 40%" },
];

export function PhaseHero({ next, message }: { next?: TagRow; message: string }) {
  return (
    <section aria-labelledby="hero-title" className="band-deep relative isolate -mt-[4.75rem] flex min-h-[min(100svh,54rem)] items-end overflow-hidden sm:-mt-[5rem]">
      {PHOTOS.map((p) => (
        <Image
          key={p.phase}
          src={`/photos/${p.slug}.jpg`}
          alt=""
          fill
          loading="lazy"
          quality={80}
          sizes="100vw"
          data-for={p.phase}
          className="hero-photo -z-20 object-cover"
          style={{ objectPosition: p.position }}
        />
      ))}
      <div aria-hidden="true" className="hero-wash absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 top-0 h-[55%] [--hero-flock:rgb(246_241_228/0.92)]">
        <Flock count={56} colorVar="--hero-flock" />
      </div>

      <div className="container-x relative w-full pt-40 pb-16 md:pb-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-[40rem]">
            <h1 id="hero-title" className="text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.98] tracking-[-0.025em]">
              Rajesh Panwar gets you <em className="font-medium text-glow italic [font-variation-settings:'SOFT'_100,'WONK'_1]">the birds.</em>
            </h1>
            <p className="mt-5 max-w-[34rem] text-[1.12rem] leading-[1.55] text-ink-2 md:text-[1.22rem]">
              Small-group birding and bird-photography tours across India and abroad, led by India&apos;s top eBirder of 2019 and 2021. Two birding lodges of
              our own in Kumaon.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton message={message} />
              <ButtonLink href="/departures">See departures</ButtonLink>
            </div>
            <CircadianChip className="mt-8" />
          </div>
          {next ? (
            <div className="hidden w-[16rem] rotate-[2deg] lg:block">
              <DepartureTag row={next} next />
            </div>
          ) : null}
        </div>
      </div>

      {PHOTOS.map((p) => (
        <p key={p.phase} data-for={p.phase} className="hero-caption absolute right-4 bottom-14 rounded-full md:bottom-[4.5rem] bg-black/35 px-3 py-1 text-[0.75rem] text-white/85">
          {p.caption}
        </p>
      ))}
    </section>
  );
}

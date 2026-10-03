import Image from "next/image";
import type { PhotoSlug } from "@/content/photo-sizes";

export type Banner = { slug: PhotoSlug; caption: string; position?: string };

// Page openings: the name in Fraunces, a short line under it, and at most one lead sentence.
// With a `photo`, the opening becomes a full-bleed banner: one of Rajesh's photographs running under
// the floating header, washed from the left in the hour's deep colour so the title reads, with the
// photograph's own caption in the corner. Without one, it sits on the hour's deep band.
export function PageHead({
  name,
  note,
  lead,
  badge,
  photo,
  children,
}: {
  name: string;
  note?: React.ReactNode;
  lead?: string;
  badge?: React.ReactNode;
  photo?: Banner;
  children?: React.ReactNode;
}) {
  return (
    <section className="band-deep relative isolate -mt-[4.75rem] overflow-hidden sm:-mt-[5rem]">
      {photo ? (
        <>
          <Image
            src={`/photos/${photo.slug}.jpg`}
            alt=""
            fill
            priority
            quality={80}
            sizes="100vw"
            className="-z-20 object-cover"
            style={{ objectPosition: photo.position ?? "50% 50%" }}
          />
          <div aria-hidden="true" className="banner-wash absolute inset-0 -z-10" />
          <p className="absolute right-4 bottom-3 hidden rounded-full bg-black/35 px-3 py-1 text-[0.75rem] text-white/85 backdrop-blur-[2px] sm:block">{photo.caption}</p>
        </>
      ) : (
        <div aria-hidden="true" className="banner-plain absolute inset-0 -z-10" />
      )}
      <div className={`container-x pt-32 sm:pt-36 ${photo ? "pb-14 md:pt-44 md:pb-20" : "pb-12 md:pt-40 md:pb-16"}`}>
        <div className="flex items-start gap-4 md:gap-6">
          {badge}
          <div className="min-w-0">
            <h1 className="max-w-[18ch] text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.02] text-balance">{name}</h1>
            {note ? <p className="mt-3 text-[1rem] text-ink-2 md:text-[1.08rem]">{note}</p> : null}
          </div>
        </div>
        {lead ? <p className="mt-6 max-w-[40rem] text-[1.08rem] leading-[1.6] text-ink-2 md:text-[1.18rem]">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <h2 id={id} className={`text-[clamp(1.8rem,3.6vw,2.6rem)] leading-[1.08] ${className}`}>
      {children}
    </h2>
  );
}

import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { altFromCaption } from "@/components/media/Photo";
import { PageHead } from "@/components/site/PageHead";
import { lodges } from "@/content/lodges";

export const metadata: Metadata = {
  title: "Our birding lodges: Milieu Villa (Kaladhungi) and Manila (Almora)",
  description:
    "Two birding lodges run by Rajesh and Sheela Panwar: Milieu Villa at Jim Corbett's village on the edge of the Kaladhungi forest, and Manila Birding Lodge in the Almora hills for Cheer and Koklass Pheasants.",
  alternates: { canonical: "/lodges" },
};

export default function LodgesPage() {
  return (
    <>
      <PageHead
        name="Our lodges"
        note="Two birding lodges of our own, both opened in 2022"
        lead="Having our own birding lodges was a long-awaited dream. We run both ourselves, with our own guides, and both sit where the birds are: one at the edge of Corbett's forest, one in the Cheer Pheasant hills."
      />
      <section className="container-x grid gap-8 pt-8 pb-20 md:pt-10 md:pb-28 lg:grid-cols-2">
        {lodges.map((l, i) => (
          <Link key={l.slug} href={`/lodges/${l.slug}`} className="soft press group flex flex-col p-3 text-ink no-underline">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem] bg-well">
              <Image
                src={`/photos/${l.hero}.jpg`}
                alt={altFromCaption(l.heroCaption)}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col px-3 pt-6 pb-3 sm:px-5">
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] leading-tight">{l.name}</h2>
              <p className="mt-2 text-[0.95rem] text-ink-3">
                {l.place} · {l.altitude} · open since {l.opened}
              </p>
              <p className="mt-4 max-w-[36rem] text-ink-2">{l.lead}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-medium">
                Rooms, seasons and getting there
                <ArrowRight className="size-4 transition-transform duration-300 ease-[var(--ease-spring)] group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

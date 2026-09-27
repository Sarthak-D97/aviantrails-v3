import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import { Photo } from "@/components/media/Photo";
import { WhatsAppButton } from "@/components/site/Actions";
import { PageHead, SectionTitle } from "@/components/site/PageHead";
import { FlockIn } from "@/components/soft/FlockIn";
import { reviews } from "@/content/reviews";

export const metadata: Metadata = {
  title: "Guest words: what birders say about travelling with Rajesh Panwar",
  description: "Fourteen guests on birding with Rajesh and Sheela Panwar, in their own words, from Munsiyari and Nagaland to Sri Lanka and Goa.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  const guide = reviews.filter((r) => !r.camp);
  const camp = reviews.filter((r) => r.camp);
  return (
    <>
      <PageHead
        name="Guest words"
        note={`${reviews.length} guests, in their own words`}
        lead="Written by guests for the old website between 2016 and 2020, quoted as they wrote them, trimmed where marked. The misses stayed in."
      />

      <section className="container-x pt-8 md:pt-10">
        <FlockIn as="ol" className="columns-1 gap-6 lg:columns-2 [&>li]:mb-6 [&>li]:break-inside-avoid">
          {guide.map((r) => (
            <li key={r.name}>
              <figure className="soft p-6 sm:p-8">
                <p className="serif text-[clamp(1.3rem,2.1vw,1.55rem)] leading-[1.3] font-medium">&ldquo;{r.pull}&rdquo;</p>
                <details className="group/q mt-3">
                  <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 text-[0.95rem] font-medium text-ink-2 hover:text-ink [&::-webkit-details-marker]:hidden">
                    <span className="group-open/q:hidden">Read what they wrote</span>
                    <span className="hidden group-open/q:inline">Close</span>
                    <ChevronDown className="size-4 transition-transform duration-500 ease-[var(--ease-spring)] group-open/q:rotate-180" strokeWidth={2} aria-hidden="true" />
                  </summary>
                  <blockquote className="mt-2 text-[1rem] leading-[1.65] text-ink-2">{r.quote}</blockquote>
                </details>
                <figcaption className="soft-in mt-4 rounded-[1rem] px-4 py-3 text-[0.95rem]">
                  <span className="font-medium">{r.name}</span>, {r.from}
                  {r.context ? <span className="block text-[0.9rem] text-ink-3">{r.context}</span> : null}
                </figcaption>
              </figure>
            </li>
          ))}
        </FlockIn>
      </section>

      <section aria-labelledby="camp" className="container-x pt-14 md:pt-20">
        <SectionTitle id="camp">Before the lodge: Camp Milieu</SectionTitle>
        <p className="mt-3 max-w-2xl text-ink-2">
          In 2016–17, before Milieu Villa, the family ran Camp Milieu near Chhoti Haldwani: four mud huts, a feeder, a studio and home-cooked food.
          Three guests wrote about it.
        </p>
        <ol className="mt-6 grid gap-5 lg:grid-cols-3">
          {camp.map((r) => (
            <li key={r.name}>
              <figure className="soft-in h-full p-6">
                <p className="serif text-[1.2rem] leading-[1.3] font-medium">&ldquo;{r.pull}&rdquo;</p>
                <details className="group/q mt-2">
                  <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 text-[0.95rem] font-medium text-ink-2 hover:text-ink [&::-webkit-details-marker]:hidden">
                    <span className="group-open/q:hidden">Read what they wrote</span>
                    <span className="hidden group-open/q:inline">Close</span>
                    <ChevronDown className="size-4 transition-transform duration-500 ease-[var(--ease-spring)] group-open/q:rotate-180" strokeWidth={2} aria-hidden="true" />
                  </summary>
                  <blockquote className="mt-2 text-[0.98rem] leading-[1.6] text-ink-2">{r.quote}</blockquote>
                </details>
                <figcaption className="mt-4 text-[0.95rem]">
                  <span className="font-medium">{r.name}</span>, {r.from}
                  {r.context ? <span className="block text-ink-3">{r.context}</span> : null}
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-x pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="soft grid gap-8 p-4 sm:p-8 lg:grid-cols-12 lg:items-center">
          <div className="grid grid-cols-2 gap-4 lg:col-span-7">
            <Photo slug="group-road-2020" ratio={4 / 3} bezel={false} sizes="(min-width: 1024px) 28vw, 45vw" caption="A group on the road · 2020" alt="An Avian Trails group on a mountain road" />
            <Photo slug="group-nal-sarovar-boat" ratio={4 / 3} bezel={false} sizes="(min-width: 1024px) 28vw, 45vw" caption="Nal Sarovar · Mar 2024" alt="An Avian Trails group in a boat at Nal Sarovar" />
          </div>
          <div className="px-2 pb-2 lg:col-span-5">
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.1]">Travelled with Rajesh? He&apos;d like to hear it.</h2>
            <WhatsAppButton message="Hello Rajesh, a few words about my trip with Avian Trails: " className="mt-6">
              Send him a few words
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}

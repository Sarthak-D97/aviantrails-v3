import { ExternalLink, Play } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Photo } from "@/components/media/Photo";
import { TextLink, WhatsAppButton } from "@/components/site/Actions";
import { PageHead, SectionTitle } from "@/components/site/PageHead";
import { Shelf } from "@/components/soft/Shelf";
import { site } from "@/content/site";
import { courses, press, talks } from "@/content/story";

export const metadata: Metadata = {
  title: "Rajesh & Sheela Panwar: the people behind Avian Trails",
  description:
    "From a paradise flycatcher on a guava tree in 2008 to India's top eBirder and two birding lodges in Kumaon: the story and record of Rajesh and Sheela Panwar.",
  alternates: { canonical: "/about" },
};

const groups = [
  { slug: "group-kenya-samburu" as const, caption: "Kenya · Oct 2024" },
  { slug: "group-chaukori-dawn" as const, caption: "Chaukori, Uttarakhand · Dec 2025" },
  { slug: "group-costa-rica-2026" as const, caption: "Costa Rica · Jan 2026" },
  { slug: "group-ladakh-2025" as const, caption: "Ladakh · Aug 2025" },
  { slug: "group-colombia-feeders" as const, caption: "Colombia · Jan 2025" },
  { slug: "group-snow-2020" as const, caption: "In the snow · 2020" },
];

const proof = [
  { slug: "ebird-top100-india-2019" as const, caption: "eBird Top 100, India, 2019" },
  { slug: "ebird-top100-india-2021" as const, caption: "eBird Top 100, India, 2021" },
  { slug: "ebird-2025-uttarakhand" as const, caption: "Uttarakhand, all-time and 2025" },
  { slug: "ebird-2025-india-alltime" as const, caption: "India, all-time: 10th" },
];

const partners = [
  { name: "Irfan Jeelani & Ansar Ahmad", where: "Kashmir", note: "found the group 20+ Long-eared Owls at one roost" },
  { name: "Prasanna Kalita", where: "Meghalaya", note: "Tawny-breasted Wren-babbler and Dark-rumped Swift, out of season" },
  { name: "Rejoice L Gassah", where: "Dosdewa, Assam", note: "five of six Dosdewa specialities on the first trip" },
  { name: "Joe Rz Thanga", where: "Mizoram", note: "all the logistics for the Mizoram trip" },
  { name: "Radheshyam Pemani Bishnoi", where: "Pokhran, Rajasthan", note: "a day at Pokhran when heavy rain kept the group from Desert National Park" },
];

export default function AboutPage() {
  return (
    <>
      <PageHead
        photo={{ slug: "group-road-2020", caption: "A group on the road · 2020", position: "50% 35%" }} name="Rajesh & Sheela" note="Chhoti Haldwani, Kaladhungi · birding since 2013" />

      <section className="container-x grid gap-10 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Photo slug="rajesh-sheela" ratio={1} priority sizes="(min-width: 1024px) 38vw, 100vw" alt="Rajesh and Sheela Panwar at home" caption="Rajesh and Sheela Panwar, at home" />
        </div>
        <div className="max-w-[40rem] lg:col-span-7">
          <h2 className="text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.1]">It started with a bird he couldn&apos;t name.</h2>
          <div className="mt-5 space-y-5 text-ink-2">
            <p>
              In 2008 Rajesh had a Sony bridge camera and a seat at a rural-tourism workshop at Jim&apos;s Jungle Retreat, in the Dhela area of
              Corbett. A male flycatcher kept flying here and there; he finally got a picture of it on a guava tree. He didn&apos;t know what it
              was. Imran Khan, one of the workshop&apos;s resource people, told him its name and how it breeds.
            </p>
            <p>
              For the next five years he forgot about the bird. He was busy promoting rural tourism in Corbett&apos;s Village, Chhoti Haldwani,
              where he lives. In 2013 he switched to birding, and realised the Indian Paradise Flycatcher had been his first bird photograph.
            </p>
            <p>
              Sheela, his wife, is a birder in her own right: 900 species on her India list by 2024. She co-guides some trips, scouted Manila and
              the Bhagirathi valley with him, and is the host guests keep writing about. The two of them run both lodges themselves.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            <Photo slug="rajesh-snow" ratio={3 / 4} position="50% 30%" sizes="(min-width: 640px) 13rem, 45vw" caption="Rajesh, winter 2022–23" alt="Rajesh Panwar in the snow with his camera and binoculars" />
            <Photo slug="sheela-snow" ratio={3 / 4} position="50% 25%" sizes="(min-width: 640px) 13rem, 45vw" caption="Sheela, winter 2022–23" alt="Sheela Panwar in the snow with her camera" />
            <Photo
              slug="paradise-flycatcher-kaladhungi"
              ratio={3 / 4}
              position="64% 50%"
              sizes="(min-width: 640px) 13rem, 45vw"
              caption="The first bird, again · Kaladhungi · May 2026"
              alt="An Indian Paradise Flycatcher in flight, white ribbon tail streaming"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="record" className="band band-warm">
        <div className="container-x">
          <SectionTitle id="record">The record, season by season</SectionTitle>
          <p className="mt-3 max-w-2xl text-ink-2">From Rajesh&apos;s own year-end posts and his eBird profile, the closest thing birding has to a public ledger.</p>
        </div>
        <Shelf label="Rajesh Panwar's record, season by season" className="mt-2" itemClassName="w-[16.5rem] sm:w-[19rem]">
          {courses.map((c) => (
            <article key={c.year} className="soft flex h-full flex-col p-5 sm:p-6">
              <p className="num serif text-[1.9rem] leading-none font-semibold">{c.year}</p>
              {c.figure ? (
                <p className="soft-in mt-4 self-start rounded-full px-3 py-1 text-[0.85rem] text-ink-2">
                  <span className="num font-semibold text-ink">{c.figure.value}</span> {c.figure.label}
                </p>
              ) : null}
              {c.lines.map((l) => (
                <p key={l} className="mt-4 text-[0.98rem] text-ink-2">
                  {l}
                </p>
              ))}
            </article>
          ))}
        </Shelf>
        <div className="container-x mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {proof.map((p) => (
            <Photo key={p.slug} slug={p.slug} caption={p.caption} ratio={3 / 4} position="50% 0%" sizes="(min-width: 768px) 22vw, 45vw" />
          ))}
        </div>
      </section>

      <section aria-labelledby="print" className="container-x grid gap-10 pt-16 md:pt-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionTitle id="print">In print</SectionTitle>
          <ul className="mt-6 grid gap-5">
            {press.map((p) => (
              <li key={p.title} className="soft grid grid-cols-[5.5rem_1fr] gap-5 p-4 sm:grid-cols-[7rem_1fr]">
                {p.photo ? <Photo slug={p.photo} ratio={3 / 4} bezel={false} showCaption={false} sizes="7rem" /> : <span />}
                <div className="py-1">
                  <p className="serif text-[1.1rem] leading-[1.3] font-semibold">{p.title}</p>
                  <p className="mt-2 text-[0.88rem] text-ink-3">
                    {p.source} · {p.when}
                  </p>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener" className="mt-2 inline-flex items-center gap-1 font-medium text-ink">
                      Read it <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <SectionTitle id="talks">Rajesh&apos;s talks</SectionTitle>
          <p className="mt-3 text-ink-2">Webinars from the lockdown years and after, on his YouTube channel.</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-5">
            {talks.map((t) => (
              <li key={t.id}>
                <a href={`https://www.youtube.com/watch?v=${t.id}`} target="_blank" rel="noopener" className="press group block text-ink no-underline">
                  <span className="bezel block">
                    <span className="relative block aspect-video overflow-hidden rounded-[1rem] bg-well">
                      <Image src={`https://i.ytimg.com/vi/${t.id}/hqdefault.jpg`} alt="" fill sizes="(min-width: 1024px) 26vw, 45vw" className="object-cover" />
                      <span className="absolute inset-0 grid place-items-center">
                        <span className="pebble grid size-12 place-items-center text-ink transition-transform duration-300 ease-[var(--ease-spring)] group-hover:scale-110">
                          <Play className="size-5 translate-x-px" strokeWidth={2.2} aria-hidden="true" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="mt-3 block px-1 text-[0.92rem] leading-snug font-medium sm:text-[1rem]">{t.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="groups" className="band band-deep">
        <div className="container-x">
          <SectionTitle id="groups">With the groups</SectionTitle>
        </div>
        <Shelf label="Avian Trails groups" className="mt-2" itemClassName="w-[17rem] sm:w-[22rem]">
          {groups.map((g) => (
            <Photo key={g.slug} slug={g.slug} ratio={4 / 3} sizes="(min-width: 640px) 22rem, 17rem" caption={g.caption} alt={`An Avian Trails group, ${g.caption}`} />
          ))}
        </Shelf>
      </section>

      <section aria-labelledby="partners" className="container-x pt-12">
        <div className="soft-in p-5 sm:p-7">
          <h3 id="partners" className="text-[1.35rem]">
            Local partners Rajesh credits
          </h3>
          <ul className="mt-4 grid gap-x-8 gap-y-4 md:grid-cols-2">
            {partners.map((p) => (
              <li key={p.name}>
                <span className="font-medium">{p.name}</span>
                <span className="text-ink-3"> · {p.where}</span>
                <span className="block text-[0.95rem] text-ink-2">{p.note}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <WhatsAppButton message="Hello Rajesh, I'd like to travel with Avian Trails.">Talk to Rajesh</WhatsAppButton>
          <TextLink href="/reviews">What guests say</TextLink>
          <a href={site.social.instagram} target="_blank" rel="noopener" className="font-medium text-ink">
            Follow the trips on Instagram
          </a>
        </div>
      </section>
    </>
  );
}

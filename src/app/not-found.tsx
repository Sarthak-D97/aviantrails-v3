import { ButtonLink, TextLink } from "@/components/site/Actions";
import { Flock } from "@/components/soft/Flock";

export default function NotFound() {
  return (
    <section className="container-x grid items-center gap-10 pt-10 md:pt-16 lg:grid-cols-2">
      <div>
        <h1 className="text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.02]">Page not found</h1>
        <p className="mt-5 max-w-xl text-[1.12rem] text-ink-2 md:text-[1.2rem]">
          This one has flown, perhaps an address from the old website. The tours are still running.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <ButtonLink href="/departures">The 2026–27 departures</ButtonLink>
          <TextLink href="/lodges">Our lodges</TextLink>
          <TextLink href="/">Home</TextLink>
        </div>
      </div>
      <div className="soft rounded-[2.2rem] p-3">
        <div className="soft-in relative aspect-[5/3] overflow-hidden rounded-[1.7rem]" style={{ background: "linear-gradient(170deg, var(--sky-a), var(--sky-b))" }}>
          <Flock count={40} />
        </div>
      </div>
    </section>
  );
}

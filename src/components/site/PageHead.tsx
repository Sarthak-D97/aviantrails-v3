// Page openings: the name in Fraunces, a short line under it, and at most one lead sentence.
export function PageHead({ name, note, lead, badge, children }: { name: string; note?: React.ReactNode; lead?: string; badge?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="container-x pt-10 pb-2 md:pt-16">
      <div className="flex items-start gap-4 md:gap-6">
        {badge}
        <div className="min-w-0">
          <h1 className="text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.02]">{name}</h1>
          {note ? <p className="mt-3 text-[1rem] text-ink-3 md:text-[1.08rem]">{note}</p> : null}
        </div>
      </div>
      {lead ? <p className="mt-6 max-w-[42rem] text-[1.12rem] leading-[1.6] text-ink-2 md:text-[1.2rem]">{lead}</p> : null}
      {children}
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

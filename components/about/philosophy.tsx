import { Container } from "@/components/container";

const pillars = [
  {
    name: "People",
    copy: "Culture drives compliance. Incentive structures and organisational behaviour decide whether controls feel natural or abrasive.",
  },
  {
    name: "Processes",
    copy: "Workflows hide friction and risk. Mapping them exposes where value leaks before it reaches the financial statements.",
  },
  {
    name: "Controls",
    copy: "Targeted safety nets, not off-the-shelf policy packs. Protect value without stifling the agility your organisation needs.",
  },
] as const;

export function Philosophy() {
  return (
    <section className="bg-surface-container py-[clamp(4rem,10vw,7.5rem)]">
      <Container>
        <div className="about-reveal mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            The approach
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-primary">
            Root cause over checklist theatre
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-on-surface-variant sm:text-lg">
            Resilience comes from understanding why risk exists, not from
            stacking another framework on top of the symptoms.
          </p>
        </div>

        <div className="about-reveal about-reveal-delay-1 mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar, index) => (
            <article key={pillar.name} className="relative md:pt-2">
              <span
                aria-hidden
                className="font-display text-5xl font-bold leading-none text-primary/10"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="-mt-6 font-display text-2xl font-semibold text-primary">
                {pillar.name}
              </h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-on-surface-variant">
                {pillar.copy}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

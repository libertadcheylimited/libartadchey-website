import { Container } from "@/components/container";

const reasons = [
  "Nearly six years of experience across Big 4 audit, startup advisory, franchise operations, and corporate risk management.",
  "Every engagement handled personally by the founder. You get senior expertise from the very first conversation.",
  "Clients have seen meaningful gains in loss reduction, cycle time, and control-testing efficiency when the work sticks.",
  "Four complementary qualifications (CIA, ACA, ISO 31000, ISO 9001:2015) built deliberately to cover every layer of organisational risk.",
  "Trusted with real financial responsibility at organisational level for over eight years.",
  "The work is not done when the report is delivered. It is done when your organisation is in a stronger position.",
] as const;

export function WhyWorkWithMe() {
  return (
    <section className="bg-background py-[clamp(4rem,10vw,7.5rem)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="about-reveal lg:col-span-4">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              Why work with me
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-primary">
              Senior attention, root-cause focus
            </h2>
            <p className="mt-4 max-w-[36ch] font-sans text-base leading-relaxed text-on-surface-variant sm:text-lg">
              Boutique means you work with me directly. The goal is not a
              polished binder; it is a stronger operating position.
            </p>
          </div>

          <ul className="about-reveal about-reveal-delay-1 space-y-0 lg:col-span-8">
            {reasons.map((reason, index) => (
              <li
                key={reason}
                className="group flex gap-5 border-b border-outline-variant/40 py-5 first:pt-0 last:border-b-0 last:pb-0"
              >
                <span
                  aria-hidden
                  className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-fixed font-sans text-xs font-semibold text-on-primary-fixed-variant transition-colors duration-300 group-hover:bg-secondary-container group-hover:text-on-secondary-container"
                >
                  {index + 1}
                </span>
                <p className="font-sans text-base leading-relaxed text-on-surface sm:text-lg">
                  {reason}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Restrained results note: avoid hero-metric stat strip */}
        <aside className="about-reveal about-reveal-delay-2 mt-14 max-w-3xl rounded-xl border border-outline-variant/50 bg-surface-container-lowest px-6 py-6 sm:px-8 sm:py-7">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-outline">
            Proven results, stated carefully
          </p>
          <p className="mt-3 font-sans text-base leading-relaxed text-on-surface-variant sm:text-lg">
            Across engagements, clients have seen up to a 25% reduction in
            operational losses, 15% faster process cycle times, and a 20%
            improvement in control testing efficiency. Those figures reflect
            specific contexts, not a universal promise; the constant is
            founder-led depth on the work that produces them.
          </p>
        </aside>
      </Container>
    </section>
  );
}

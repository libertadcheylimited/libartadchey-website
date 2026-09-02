import { Container } from "@/components/container";

const sectors = [
  {
    title: "Startups",
    body: "Controls early enough to attract investors and scale securely.",
  },
  {
    title: "SMEs",
    body: "Process clarity and risk mitigation that protect margins and continuity.",
  },
  {
    title: "Corporates",
    body: "Independent audits and compliance advisory for complex structures.",
  },
  {
    title: "NGOs & churches",
    body: "Grant compliance, transparency, and responsible resource stewardship.",
  },
] as const;

export function HomeSectors() {
  return (
    <section
      className="relative overflow-hidden bg-inverse-surface py-20 text-inverse-on-surface lg:py-[7.5rem]"
      aria-labelledby="sectors-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,color-mix(in_oklab,var(--primary-container)_40%,transparent),transparent_45%),radial-gradient(ellipse_at_90%_80%,color-mix(in_oklab,var(--brand-gold)_18%,transparent),transparent_40%)]"
      />

      <Container className="relative z-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 border-b border-outline-variant/25 pb-8 lg:mb-12 lg:flex-row lg:items-end">
          <div>
            <h2
              id="sectors-heading"
              className="font-display max-w-xl text-[clamp(1.75rem,3.5vw,3rem)] font-bold leading-tight"
            >
              Who we secure
            </h2>
          </div>
          <p className="max-w-sm font-sans text-base leading-relaxed text-surface-variant">
            Agile methods for organisations at crucial inflection points, in
            Nigeria and internationally.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <li
              key={sector.title}
              className="group relative overflow-hidden rounded-lg bg-surface-container-highest/10 p-8 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-surface-container-highest/15"
            >
              <span
                aria-hidden
                className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-secondary-fixed transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
              <h3 className="font-display mb-2 text-xl font-semibold">
                {sector.title}
              </h3>
              <p className="font-sans text-base leading-relaxed text-surface-variant/90">
                {sector.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

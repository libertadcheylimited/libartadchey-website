import Link from "next/link";
import type { Service } from "@/components/services/content";

type RiskStepsSectionProps = {
  service: Service;
};

export function RiskStepsSection({ service }: RiskStepsSectionProps) {
  return (
    <section
      id={service.slug}
      className="scroll-mt-40"
      aria-labelledby={`${service.slug}-heading`}
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-secondary">
            {service.number} · Advisory
          </p>
          <h2
            id={`${service.slug}-heading`}
            className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.01em] text-primary"
          >
            {service.title}
          </h2>
          <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-on-surface-variant">
            {service.summary}
          </p>
          <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-on-surface-variant">
            {service.problem}
          </p>
          <Link
            href={`/services/${service.slug}`}
            className="mt-6 inline-flex font-sans text-sm font-semibold tracking-[0.05em] text-primary-container underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Full service detail
          </Link>
        </div>

        <ol className="flex flex-col gap-0 border-l border-outline-variant/60 lg:col-span-7">
          {service.methodology.map((step, index) => (
            <li
              key={step}
              className="relative grid gap-2 border-b border-outline-variant/40 py-6 pl-8 last:border-b-0 sm:grid-cols-[4rem_1fr] sm:items-baseline sm:gap-6"
            >
              <span
                aria-hidden
                className="absolute -left-[5px] top-8 h-2.5 w-2.5 rounded-full bg-brand-gold"
              />
              <span className="font-display text-2xl font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-sans text-base leading-relaxed text-on-surface-variant">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

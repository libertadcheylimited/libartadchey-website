import Link from "next/link";
import type { Service } from "@/components/services/content";

type ComplianceSectionProps = {
  service: Service;
};

export function ComplianceSection({ service }: ComplianceSectionProps) {
  return (
    <section
      id={service.slug}
      className="scroll-mt-40"
      aria-labelledby={`${service.slug}-heading`}
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-secondary">
            {service.number} · Regulatory
          </p>
          <h2
            id={`${service.slug}-heading`}
            className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.2] text-primary"
          >
            {service.title}
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-on-surface-variant">
            {service.summary}
          </p>
          <Link
            href={`/services/${service.slug}`}
            className="mt-6 inline-flex font-sans text-sm font-semibold tracking-[0.05em] text-primary-container underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Full service detail
          </Link>
        </div>

        <div className="lg:col-span-8">
          <p className="max-w-[65ch] font-sans text-lg leading-relaxed text-on-surface">
            {service.problem}
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl bg-outline-variant/40 sm:grid-cols-2">
            {service.included.map((item, index) => (
              <div
                key={item}
                className="bg-background px-5 py-6"
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-secondary">
                  Focus {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-primary">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-sans text-sm font-semibold tracking-[0.05em] text-on-surface-variant">
            Deliverable: {service.deliverable}
          </p>
        </div>
      </div>
    </section>
  );
}

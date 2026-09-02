import Link from "next/link";
import type { Service } from "@/components/services/content";
import { primaryCta } from "@/lib/site";

type PolicyStripSectionProps = {
  service: Service;
};

export function PolicyStripSection({ service }: PolicyStripSectionProps) {
  return (
    <section
      id={service.slug}
      className="scroll-mt-40"
      aria-labelledby={`${service.slug}-heading`}
    >
      <div className="grid overflow-hidden rounded-2xl border border-outline-variant/50 lg:grid-cols-12">
        <div className="bg-surface-container-lowest px-8 py-10 lg:col-span-7 lg:px-10">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-secondary">
            {service.number} · Governance
          </p>
          <h2
            id={`${service.slug}-heading`}
            className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.2] text-primary"
          >
            {service.title}
          </h2>
          <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-on-surface-variant">
            {service.summary}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.included.map((item) => (
              <li
                key={item}
                className="font-sans text-sm leading-relaxed text-on-surface-variant"
              >
                <span className="mr-2 text-brand-gold" aria-hidden>
                  ·
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-8 bg-surface-container px-8 py-10 lg:col-span-5 lg:px-10">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-on-surface-variant">
              Deliverable
            </p>
            <p className="mt-2 font-display text-2xl font-semibold text-primary">
              {service.deliverable}
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-on-surface-variant">
              {service.problem}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center justify-center rounded-lg border border-primary-container px-5 py-3 font-sans text-sm font-semibold tracking-[0.05em] text-primary-container transition-colors hover:bg-primary-fixed/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Full service detail
            </Link>
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-secondary-container px-5 py-3 font-sans text-sm font-semibold tracking-[0.05em] text-on-secondary-container transition-[filter] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

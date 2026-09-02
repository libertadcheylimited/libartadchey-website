import Link from "next/link";
import type { Service } from "@/components/services/content";
import { primaryCta } from "@/lib/site";

type FeaturedProcessAuditProps = {
  service: Service;
};

export function FeaturedProcessAudit({ service }: FeaturedProcessAuditProps) {
  return (
    <section
      id={service.slug}
      className="scroll-mt-40"
      aria-labelledby={`${service.slug}-heading`}
    >
      <div className="overflow-hidden rounded-2xl bg-primary text-on-primary">
        <div className="grid gap-0 lg:grid-cols-12">
          <div className="relative flex flex-col justify-between gap-8 px-8 py-10 sm:px-10 lg:col-span-5 lg:py-12">
            <div>
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-secondary-fixed">
                Featured · {service.number}
              </p>
              <h2
                id={`${service.slug}-heading`}
                className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-[-0.01em]"
              >
                {service.title}
              </h2>
              <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-primary-fixed">
                {service.summary}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex rounded-lg border border-on-primary/40 px-5 py-3 font-sans text-sm font-semibold tracking-[0.05em] text-on-primary transition-colors hover:bg-on-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-fixed"
              >
                View methodology
              </Link>
              <Link
                href={primaryCta.href}
                className="inline-flex rounded-lg bg-secondary-container px-5 py-3 font-sans text-sm font-semibold tracking-[0.05em] text-on-secondary-container transition-[filter] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-fixed"
              >
                Enquire about this service
              </Link>
            </div>
          </div>

          <div className="border-t border-on-primary/10 bg-primary-container/40 px-8 py-10 sm:px-10 lg:col-span-7 lg:border-l lg:border-t-0 lg:py-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-semibold text-secondary-fixed">
                  The problem we solve
                </h3>
                <p className="mt-3 font-sans text-base leading-relaxed text-primary-fixed">
                  {service.problem}
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-secondary-fixed">
                  What is included
                </h3>
                <ul className="mt-3 flex flex-col gap-3 font-sans text-base leading-relaxed text-primary-fixed">
                  {service.included.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-fixed"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-2 border-t border-on-primary/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-on-primary-container">
                  Deliverable
                </p>
                <p className="mt-1 font-display text-xl font-semibold text-on-primary">
                  {service.deliverable}
                </p>
              </div>
              <p className="font-sans text-sm font-semibold tracking-[0.05em] text-secondary-fixed">
                {service.deliverableTag}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

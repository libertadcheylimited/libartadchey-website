import Link from "next/link";
import type { Service } from "@/components/services/content";

type ServiceEditorialBlockProps = {
  service: Service;
  reverse?: boolean;
  tone?: "light" | "muted";
};

export function ServiceEditorialBlock({
  service,
  reverse = false,
  tone = "light",
}: ServiceEditorialBlockProps) {
  const shell =
    tone === "muted"
      ? "bg-surface-container-low"
      : "bg-surface-container-lowest";

  return (
    <section
      id={service.slug}
      className="scroll-mt-40"
      aria-labelledby={`${service.slug}-heading`}
    >
      <div className={`grid gap-10 lg:grid-cols-12 lg:gap-12 ${shell} rounded-2xl p-6 sm:p-8 lg:p-10`}>
        <div
          className={`relative lg:col-span-4 ${
            reverse ? "lg:order-2 lg:text-right" : ""
          }`}
        >
          <p
            aria-hidden
            className={`pointer-events-none absolute -top-4 font-display text-[5rem] font-bold leading-none text-primary-fixed-dim/40 select-none ${
              reverse ? "right-0" : "left-0"
            }`}
          >
            {service.number}
          </p>
          <div className="relative pt-10">
            <h2
              id={`${service.slug}-heading`}
              className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.01em] text-primary"
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
        </div>

        <div
          className={`grid gap-6 md:grid-cols-2 lg:col-span-8 ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <div className="border-t-4 border-secondary pt-5">
            <h3 className="font-display text-xl font-semibold text-primary">
              The problem we solve
            </h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-on-surface-variant">
              {service.problem}
            </p>
          </div>
          <div className="pt-5 md:border-t md:border-transparent md:pt-5">
            <h3 className="font-display text-xl font-semibold text-primary">
              What is included
            </h3>
            <ul className="mt-3 flex flex-col gap-2.5 font-sans text-base leading-relaxed text-on-surface-variant">
              {service.included.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`flex flex-col gap-1 rounded-xl px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:col-span-2 ${
              reverse
                ? "bg-inverse-surface text-inverse-on-surface"
                : "bg-primary text-on-primary"
            }`}
          >
            <div>
              <p
                className={`font-sans text-xs font-semibold uppercase tracking-[0.12em] ${
                  reverse ? "text-outline-variant" : "text-primary-fixed"
                }`}
              >
                Deliverable
              </p>
              <p className="mt-1 font-display text-lg font-semibold sm:text-xl">
                {service.deliverable}
              </p>
            </div>
            <p
              className={`mt-2 font-sans text-sm font-semibold tracking-[0.05em] sm:mt-0 ${
                reverse ? "text-secondary-fixed-dim" : "text-secondary-fixed"
              }`}
            >
              {service.deliverableTag}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

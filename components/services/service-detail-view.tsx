import Link from "next/link";
import { Container } from "@/components/container";
import type { Service } from "@/components/services/content";
import { services } from "@/components/services/content";
import { ServicesCta } from "@/components/services/services-cta";
import { primaryCta } from "@/lib/site";

type ServiceDetailViewProps = {
  service: Service;
};

export function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <section className="relative overflow-hidden pb-12 pt-[clamp(3rem,8vw,5rem)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary-fixed/40 blur-3xl"
        />
        <Container className="relative">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-secondary">
            <Link
              href="/services"
              className="text-secondary transition-colors hover:text-primary"
            >
              Services
            </Link>
            <span aria-hidden className="mx-2 text-outline">
              /
            </span>
            {service.number}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-primary">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-on-surface-variant">
            {service.detailLead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryCta.href}
              className="inline-flex rounded-lg bg-secondary-container px-6 py-3.5 font-sans text-sm font-semibold tracking-[0.05em] text-on-secondary-container transition-[filter] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Book a consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex rounded-lg border border-primary-container px-6 py-3.5 font-sans text-sm font-semibold tracking-[0.05em] text-primary-container transition-colors hover:bg-primary-fixed/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              All services
            </Link>
          </div>
        </Container>
      </section>

      <Container className="pb-[clamp(3rem,8vw,5rem)]">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-12 lg:col-span-7">
            <section aria-labelledby="problem-heading">
              <h2
                id="problem-heading"
                className="font-display text-2xl font-semibold text-primary sm:text-3xl"
              >
                The problem we solve
              </h2>
              <p className="mt-4 max-w-[65ch] font-sans text-base leading-relaxed text-on-surface-variant">
                {service.problem}
              </p>
            </section>

            <section aria-labelledby="method-heading">
              <h2
                id="method-heading"
                className="font-display text-2xl font-semibold text-primary sm:text-3xl"
              >
                How we work
              </h2>
              <ol className="mt-6 flex flex-col gap-5">
                {service.methodology.map((step, index) => (
                  <li
                    key={step}
                    className="grid gap-2 border-b border-outline-variant/40 pb-5 last:border-b-0 sm:grid-cols-[3.5rem_1fr]"
                  >
                    <span className="font-display text-xl font-semibold text-brand-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-sans text-base leading-relaxed text-on-surface-variant">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="included-heading">
              <h2
                id="included-heading"
                className="font-display text-2xl font-semibold text-primary sm:text-3xl"
              >
                What is included
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl bg-surface-container-low px-4 py-4 font-sans text-base leading-relaxed text-on-surface-variant"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="flex flex-col gap-8 lg:col-span-5">
            <div className="rounded-2xl bg-primary px-6 py-8 text-on-primary">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-secondary-fixed">
                Deliverable
              </p>
              <p className="mt-3 font-display text-2xl font-semibold leading-snug">
                {service.deliverable}
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-primary-fixed">
                {service.outcome}
              </p>
              <Link
                href={primaryCta.href}
                className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-secondary-container px-5 py-3.5 font-sans text-sm font-semibold tracking-[0.05em] text-on-secondary-container transition-[filter] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-fixed sm:w-auto"
              >
                Enquire about this service
              </Link>
            </div>

            <div className="rounded-2xl border border-outline-variant/50 bg-surface-container-lowest px-6 py-7">
              <h2 className="font-display text-xl font-semibold text-primary">
                A strong fit when
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {service.suitedFor.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-sans text-base leading-relaxed text-on-surface-variant"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-16 border-t border-outline-variant/40 pt-12">
          <h2 className="font-display text-2xl font-semibold text-primary">
            Related services
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex h-full flex-col gap-2 rounded-xl border border-transparent bg-surface-container-low px-4 py-5 transition-colors hover:border-outline-variant hover:bg-surface-container-lowest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-secondary">
                    {item.number}
                  </span>
                  <span className="font-display text-lg font-semibold text-primary group-hover:text-primary-container">
                    {item.shortTitle}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>

      <ServicesCta />
    </>
  );
}

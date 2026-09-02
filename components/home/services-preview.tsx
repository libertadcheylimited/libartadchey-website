import Link from "next/link";
import { Container } from "@/components/container";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const services = [
  {
    title: "Process Audits",
    href: "/services/process-audits",
    body: "We dissect operational workflows to find inefficiencies, redundancies, and control gaps before they become financial losses.",
    tone: "featured" as const,
  },
  {
    title: "Financial Audits",
    href: "/services/financial-audits",
    body: "Rigorous examination of financial records for transparency, accuracy, and stakeholder trust.",
    tone: "light" as const,
  },
  {
    title: "Risk Management Advisory",
    href: "/services/risk-management-advisory",
    body: "Proactive identification and mitigation of strategic, operational, and financial risks for your landscape.",
    tone: "primary" as const,
  },
  {
    title: "Compliance Advisory",
    href: "/services/compliance-advisory",
    body: "Navigate local and international standards with confidence and clear operational alignment.",
    tone: "light" as const,
  },
  {
    title: "Policy & SOP Development",
    href: "/services/policy-sop-development",
    body: "Bespoke procedures that institutionalize best practice and protect institutional memory.",
    tone: "light" as const,
  },
] as const;

export function HomeServicesPreview() {
  return (
    <section
      className="bg-surface-container-lowest py-20 lg:py-[6.25rem]"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center lg:mb-16">
          <h2
            id="services-heading"
            className="font-display mb-4 text-[clamp(1.75rem,3.5vw,3rem)] font-bold leading-tight text-on-surface"
          >
            Strategic capabilities
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-surface-variant">
            Defense and optimization for the processes that protect your
            numbers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            if (service.tone === "featured") {
              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-xl border-b-2 border-transparent bg-surface-container p-8 transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-secondary-fixed hover:shadow-[0_12px_32px_rgba(25,28,29,0.06)] lg:col-span-2 lg:p-10"
                >
                  <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                    <div>
                      <h3 className="font-display mb-3 text-2xl font-semibold text-on-surface">
                        {service.title}
                      </h3>
                      <p className="max-w-md font-sans text-base leading-relaxed text-on-surface-variant">
                        {service.body}
                      </p>
                    </div>
                    <Link
                      href={service.href}
                      className={`inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-[0.05em] text-primary transition-colors duration-300 group-hover:text-secondary ${focusRing}`}
                    >
                      Explore process audits
                      <span
                        aria-hidden
                        className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              );
            }

            if (service.tone === "primary") {
              return (
                <article
                  key={service.title}
                  className="relative overflow-hidden rounded-xl bg-primary p-8 text-on-primary"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_oklab,white_10%,transparent),transparent)]"
                  />
                  <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                    <div>
                      <h3 className="font-display mb-3 text-2xl font-semibold">
                        {service.title}
                      </h3>
                      <p className="font-sans text-base leading-relaxed text-on-primary/80">
                        {service.body}
                      </p>
                    </div>
                    <Link
                      href={service.href}
                      className={`inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-[0.05em] text-secondary-fixed transition-colors duration-300 hover:text-secondary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-fixed`}
                    >
                      Learn more
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={service.title}
                className="flex flex-col justify-between rounded-xl bg-surface p-8 shadow-[inset_0_0_0_1px_rgba(25,28,29,0.06)] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-surface-container-low"
              >
                <div>
                  <h3 className="font-display mb-3 text-2xl font-semibold text-on-surface">
                    {service.title}
                  </h3>
                  <p className="font-sans text-base leading-relaxed text-on-surface-variant">
                    {service.body}
                  </p>
                </div>
                <Link
                  href={service.href}
                  className={`mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-[0.05em] text-primary-container transition-colors duration-300 hover:text-secondary ${focusRing}`}
                >
                  Learn more
                  <span aria-hidden>→</span>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className={`inline-flex min-h-12 items-center justify-center rounded-lg border border-primary-container px-6 py-3 font-sans text-sm font-semibold tracking-[0.05em] text-primary-container transition-colors duration-300 hover:bg-primary-fixed ${focusRing}`}
          >
            Explore the full service suite
          </Link>
        </div>
      </Container>
    </section>
  );
}

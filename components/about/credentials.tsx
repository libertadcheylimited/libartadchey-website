import { Container } from "@/components/container";

const credentials = [
  {
    title: "Certified Internal Auditor (CIA)",
    org: "The Institute of Internal Auditors (IIA)",
  },
  {
    title: "Associate Chartered Accountant (ACA)",
    org: "Institute of Chartered Accountants of Nigeria (ICAN)",
  },
  {
    title: "ISO 31000 Certified Risk Manager",
    org: "PECB",
  },
  {
    title: "ISO 9001:2015 Internal Auditor",
    org: "ISO International Organization for Standardization",
  },
  {
    title: "MSc, Information Resources Management",
    org: "Ahmadu Bello University · Distinction",
  },
] as const;

export function Credentials() {
  return (
    <section className="bg-surface-container-low py-[clamp(4rem,10vw,7.5rem)]">
      <Container>
        <div className="about-reveal max-w-2xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            Credentials
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-primary">
            Built layer by layer on purpose
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-on-surface-variant sm:text-lg">
            CIA, ACA, ISO 31000, ISO 9001:2015, plus an MSc in information
            management: each credential covers a different layer of
            organisational risk.
          </p>
        </div>

        <ol className="about-reveal about-reveal-delay-1 mt-12 divide-y divide-outline-variant/50 border-y border-outline-variant/50">
          {credentials.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-2 py-6 sm:grid-cols-[4rem_1fr] sm:items-baseline sm:gap-8"
            >
              <span className="font-display text-2xl font-semibold tabular-nums text-brand-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-on-surface sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-on-surface-variant sm:text-base">
                  {item.org}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

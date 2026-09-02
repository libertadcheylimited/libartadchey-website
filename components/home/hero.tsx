import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

const brandValues = ["Intelligence", "Integrity", "Insight"] as const;

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function HomeHero() {
  return (
    <section className="relative flex min-h-[min(92svh,52rem)] flex-col overflow-hidden bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_92%_8%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_-5%_95%,color-mix(in_oklab,var(--secondary-container)_38%,transparent),transparent_52%)]" />
        <svg
          className="home-bloom absolute top-[-12%] right-[-22%] hidden h-[105%] w-[72%] text-primary opacity-[0.09] sm:block lg:right-[-10%] lg:w-[54%] lg:opacity-[0.11]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,96.5,-2.9C96.2,12.3,89.5,27.3,80.3,40.1C71.1,52.9,59.3,63.5,45.8,71.3C32.3,79.1,17.2,84.1,1.5,81.5C-14.2,78.9,-30.3,68.7,-43.3,58.3C-56.3,47.9,-66.2,37.3,-74.6,24.8C-83,12.3,-89.9,-2.1,-87.3,-15.1C-84.7,-28.1,-72.6,-39.7,-60.6,-49.6C-48.6,-59.5,-36.7,-67.7,-23.7,-73.4C-10.7,-79.1,3.4,-82.3,17.8,-80.6C32.2,-78.9,46.8,-72.3,44.7,-76.4Z"
            fill="currentColor"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-center py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="relative flex flex-col gap-5 lg:col-span-8 lg:gap-6">
            <div className="home-rise home-delay-1 flex items-center gap-3.5 sm:gap-4">
              <Image
                src="/brand/logo.png"
                alt=""
                width={80}
                height={80}
                className="h-14 w-14 object-contain sm:h-[4.5rem] sm:w-[4.5rem]"
                priority
              />
              <p className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.02em] text-primary">
                {siteConfig.shortName}
              </p>
            </div>

            <h1 className="home-rise home-delay-2 font-display max-w-[17ch] text-[clamp(1.75rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-on-surface">
              Uncovering process loopholes{" "}
              <span className="font-light italic text-secondary">before</span>{" "}
              they reach your financials.
            </h1>

            <p className="home-rise home-delay-3 max-w-[40ch] font-sans text-base leading-relaxed text-on-surface-variant sm:text-lg">
              Founder-led risk management, process audits, and compliance
              advisory for startups, SMEs, corporates, NGOs, and churches.
            </p>

            <div className="home-rise home-delay-4 flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-secondary-container px-8 py-3.5 font-sans text-sm font-semibold tracking-[0.05em] text-on-secondary-container transition-[filter,box-shadow,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_8px_24px_rgba(184,150,12,0.25)] hover:brightness-105 ${focusRing}`}
              >
                Book a consultation
                <ArrowIcon />
              </Link>
              <Link
                href="/services"
                className={`inline-flex min-h-12 items-center justify-center rounded-lg px-8 py-3.5 font-sans text-sm font-semibold tracking-[0.05em] text-primary-container shadow-[inset_0_0_0_1px_currentColor] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-surface-container ${focusRing}`}
              >
                Explore services
              </Link>
            </div>
          </div>

          <aside
            aria-label="Brand values"
            className="home-fade home-delay-5 hidden lg:col-span-4 lg:flex lg:justify-end"
          >
            <ul className="flex flex-col border-l border-outline-variant/50 pl-8">
              {brandValues.map((word, index) => (
                <li key={word} className="flex flex-col">
                  {index > 0 ? (
                    <span
                      aria-hidden
                      className="my-6 block h-8 w-px bg-outline-variant/70"
                    />
                  ) : null}
                  <span className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-on-surface-variant">
                    {word}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

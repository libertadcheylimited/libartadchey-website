import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

const credentials = ["ACA", "CIA", "ISO 31000"] as const;

export function HomeHero() {
  return (
    <section className="relative flex min-h-[min(88vh,52rem)] flex-col overflow-hidden bg-surface">
      {/* Full-bleed atmosphere — kept behind content, soft enough for body contrast */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_-5%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_0%_100%,color-mix(in_oklab,var(--secondary-container)_40%,transparent),transparent_55%)]" />
        <svg
          className="home-bloom absolute top-[-18%] right-[-16%] hidden h-[110%] w-[70%] text-primary opacity-[0.1] sm:block lg:right-[-8%] lg:w-[58%] lg:opacity-[0.12]"
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

      <Container className="relative z-10 flex flex-1 flex-col justify-center py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="relative flex flex-col gap-5 lg:col-span-8 lg:gap-6">
            <div className="home-rise home-delay-1 flex items-center gap-3 sm:gap-4">
              <Image
                src="/brand/logo.png"
                alt=""
                width={72}
                height={72}
                className="h-12 w-12 object-contain sm:h-16 sm:w-16"
                priority
              />
              <p className="font-display text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-primary">
                {siteConfig.shortName}
              </p>
            </div>

            <h1 className="home-rise home-delay-2 font-display max-w-[18ch] text-[clamp(1.65rem,4vw,3.5rem)] font-bold leading-[1.12] tracking-[-0.02em] text-on-surface">
              Uncovering process loopholes{" "}
              <span className="font-light italic text-secondary">before</span>{" "}
              they reach your financials.
            </h1>

            <p className="home-rise home-delay-3 max-w-[42ch] font-sans text-base leading-relaxed text-on-surface-variant sm:text-lg">
              Founder-led risk management, process audits, and compliance
              advisory for startups, SMEs, corporates, NGOs, and churches.
            </p>

            <div className="home-rise home-delay-4 flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary-container px-8 py-3.5 font-sans text-sm font-semibold tracking-[0.05em] text-on-secondary-container transition-[filter,box-shadow,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_8px_24px_rgba(184,150,12,0.25)] hover:brightness-105"
              >
                Book a consultation
                <ArrowIcon />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 font-sans text-sm font-semibold tracking-[0.05em] text-primary-container shadow-[inset_0_0_0_1px_currentColor] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-surface-container"
              >
                Explore services
              </Link>
            </div>
          </div>

          <aside className="home-fade home-delay-5 hidden h-full flex-col justify-end border-l border-outline-variant/40 pl-8 lg:col-span-4 lg:flex">
            <ul className="flex flex-col font-sans text-sm font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
              {["Intelligence", "Integrity", "Insight"].map((word, index) => (
                <li key={word} className="flex flex-col items-start">
                  {index > 0 ? (
                    <span
                      aria-hidden
                      className="my-5 block h-10 w-px bg-outline-variant"
                    />
                  ) : null}
                  <span>{word}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>

      <div className="relative z-10 border-t border-outline-variant/30 bg-surface-container-low/80">
        <Container className="flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-on-surface-variant">
            Founder credentials
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {credentials.map((item) => (
              <li
                key={item}
                className="rounded-full bg-primary-fixed px-4 py-2 font-sans text-sm font-semibold tracking-[0.05em] text-on-primary-fixed"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </div>
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

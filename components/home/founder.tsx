import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";

const credentials = ["ACA", "CIA", "ISO 31000"] as const;

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function HomeFounder() {
  return (
    <section
      className="bg-background py-20 lg:py-[7.5rem]"
      aria-labelledby="founder-heading"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div
              aria-hidden
              className="absolute -top-3 -left-3 -z-10 h-full w-full rounded-xl bg-surface-container-high"
            />
            <div
              aria-hidden
              className="absolute -right-3 -bottom-3 -z-10 h-24 w-24 rounded-full bg-secondary-fixed/25 blur-2xl"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/brand/uche-maduka.jpg"
                alt="Uche Maduka, Founder of Libertad Chey Ltd"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[center_18%]"
                priority={false}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-secondary-container"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-6 lg:col-start-7">
            <h2
              id="founder-heading"
              className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold leading-tight text-on-background"
            >
              Uchechukwu Maduka
            </h2>
            <div
              aria-hidden
              className="h-1 w-16 rounded-full bg-secondary-fixed"
            />
            <p className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-on-surface-variant">
              Founder &amp; Principal Advisor
            </p>
            <ul className="flex flex-wrap gap-2" aria-label="Credentials">
              {credentials.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-primary-fixed px-3.5 py-1.5 font-sans text-sm font-semibold tracking-[0.04em] text-on-primary-fixed"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="max-w-[58ch] font-sans text-lg leading-relaxed text-on-surface-variant">
              At Libertad Chey, we do not just point out problems; we architect
              resilience. With a foundation built in Big 4 environments, the
              approach stays intensely hands-on.
            </p>
            <p className="max-w-[58ch] font-sans text-base leading-relaxed text-on-surface-variant">
              True risk management is not a checklist; it is a strategic
              advantage. Direct engagement with your team cuts through
              bureaucratic noise to deliver actionable intelligence that
              protects the bottom line and fuels sustainable growth.
            </p>
            <div className="mt-2">
              <Link
                href="/about"
                className={`inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-[0.05em] text-primary-container transition-colors duration-300 hover:text-secondary ${focusRing}`}
              >
                Meet the founder
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

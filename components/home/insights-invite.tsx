import Link from "next/link";
import { Container } from "@/components/container";

export function HomeInsightsInvite() {
  return (
    <section
      className="bg-background py-16 lg:py-24"
      aria-labelledby="insights-invite-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-surface-container px-8 py-10 sm:px-12 sm:py-12 lg:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 h-full w-1/2 opacity-[0.06]"
          >
            <svg
              className="h-full w-full text-primary"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path d="M0,100 Q50,0 100,100" fill="currentColor" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-md">
              <h2
                id="insights-invite-heading"
                className="font-display mb-2 text-2xl font-semibold text-on-surface sm:text-[1.75rem]"
              >
                Stay ahead of governance and risk
              </h2>
              <p className="font-sans text-base leading-relaxed text-on-surface-variant">
                Occasional insights from Uche on process, compliance, and
                building resilience before the numbers break.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/insights"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-sans text-sm font-semibold tracking-[0.05em] text-on-primary transition-[filter] duration-300 hover:brightness-110"
              >
                Read insights
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-sans text-sm font-semibold tracking-[0.05em] text-primary-container shadow-[inset_0_0_0_1px_currentColor] transition-colors duration-300 hover:bg-surface"
              >
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

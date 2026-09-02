import Link from "next/link";
import { Container } from "@/components/container";
import { primaryCta, siteConfig } from "@/lib/site";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-primary text-on-primary">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 15% 20%, color-mix(in oklab, var(--primary-fixed-dim) 35%, transparent), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 80%, color-mix(in oklab, var(--brand-gold) 18%, transparent), transparent 50%)",
        }}
      />
      <Container className="relative py-[clamp(3.5rem,8vw,6.5rem)]">
        <div className="about-reveal max-w-3xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-secondary-fixed">
            {siteConfig.name}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.02em] text-on-primary">
            Why work with me
          </h1>
          <p className="mt-5 max-w-[42rem] font-sans text-lg leading-relaxed text-on-primary/85">
            Big 4 discipline, applied upstream: processes, risk, and information
            before the damage shows up in the numbers.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-secondary-container px-6 py-3 font-sans text-sm font-semibold tracking-[0.05em] text-on-secondary-container transition-[filter,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:brightness-110 motion-safe:hover:-translate-y-0.5"
            >
              {primaryCta.label}
            </Link>
            <Link
              href="#who-i-am"
              className="inline-flex items-center justify-center rounded-lg border border-on-primary/35 px-6 py-3 font-sans text-sm font-semibold tracking-[0.05em] text-on-primary transition-colors hover:border-secondary-fixed hover:text-secondary-fixed"
            >
              Meet the founder
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

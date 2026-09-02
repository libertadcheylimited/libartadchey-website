import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { primaryCta, siteConfig } from "@/lib/site";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-[clamp(3rem,8vw,5rem)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-16 h-[28rem] w-[28rem] rounded-full bg-primary-fixed-dim/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-surface-container-low/80 to-transparent"
      />

      <Container className="relative grid items-end gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-secondary">
            {siteConfig.shortName} · Services
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.02em] text-primary">
            Expert advisory across{" "}
            <span className="relative inline-block text-on-background">
              the risk spectrum
              <svg
                aria-hidden
                className="absolute -bottom-1 left-0 h-3 w-full text-secondary-container"
                fill="currentColor"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path d="M0,5 Q50,10 100,0 L100,10 L0,10 Z" />
              </svg>
            </span>
          </h1>
          <p className="max-w-[42rem] font-sans text-lg leading-relaxed text-on-surface-variant">
            Process, financial, risk, compliance, and policy work that finds
            root causes before they become reporting problems. Book a
            consultation to scope what your organisation needs.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-secondary-container px-6 py-3.5 font-sans text-sm font-semibold tracking-[0.05em] text-on-secondary-container transition-[filter,transform] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Book a consultation
            </Link>
            <a
              href="#process-audits"
              className="inline-flex items-center justify-center rounded-lg border border-primary-container px-6 py-3.5 font-sans text-sm font-semibold tracking-[0.05em] text-primary-container transition-colors hover:bg-primary-fixed/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Explore services
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-10 text-on-primary shadow-[0_12px_40px_rgba(62,0,100,0.18)]">
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-container blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-8 left-8 h-24 w-24 rounded-full bg-secondary-container/30 blur-xl"
            />
            <div className="relative flex flex-col gap-6">
              <Image
                src="/brand/logo.png"
                alt=""
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
              <p className="font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                Founder-led audits and advisory for organisations that need
                clarity before risk compounds.
              </p>
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.1em] text-secondary-fixed">
                ACA · CIA · ISO 31000
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

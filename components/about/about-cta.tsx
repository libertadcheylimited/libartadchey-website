import Link from "next/link";
import { Container } from "@/components/container";
import { primaryCta } from "@/lib/site";

export function AboutCta() {
  return (
    <section className="bg-background py-[clamp(4rem,10vw,7.5rem)]">
      <Container>
        <div className="about-reveal mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight text-primary">
            Ready for a discreet conversation?
          </h2>
          <p className="mt-4 font-sans text-lg leading-relaxed text-on-surface-variant">
            Book a consultation tailored to the risks and process gaps your
            organisation is actually facing.
          </p>
          <Link
            href={primaryCta.href}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-secondary-container px-8 py-4 font-sans text-sm font-semibold tracking-[0.05em] text-on-secondary-container shadow-[0_8px_24px_rgba(184,150,12,0.18)] transition-[filter,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:brightness-110 motion-safe:hover:-translate-y-0.5"
          >
            {primaryCta.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}

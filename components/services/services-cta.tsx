import Link from "next/link";
import { Container } from "@/components/container";
import { primaryCta } from "@/lib/site";

export function ServicesCta() {
  return (
    <section className="relative mt-[clamp(3rem,8vw,5rem)] overflow-hidden bg-primary py-[clamp(4rem,10vw,6.25rem)] text-on-primary">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-primary-container blur-[100px]"
      />
      <Container className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary-fixed">
          Secure your operations
        </p>
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.2] tracking-[-0.01em] text-surface-container-lowest">
          Ready to fortify how your organisation runs?
        </h2>
        <p className="max-w-2xl font-sans text-lg leading-relaxed text-primary-fixed">
          Talk through your processes, controls, and compliance pressure with
          the founder.
        </p>
        <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-lg bg-secondary-container px-8 py-4 font-sans text-sm font-semibold tracking-[0.05em] text-on-secondary-container shadow-[0_8px_24px_rgba(25,28,29,0.18)] transition-[filter,transform] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-fixed"
          >
            Book a consultation
          </Link>
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-lg border border-outline-variant px-8 py-4 font-sans text-sm font-semibold tracking-[0.05em] text-on-primary transition-colors hover:bg-on-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-fixed"
          >
            Send an enquiry
          </Link>
        </div>
      </Container>
    </section>
  );
}

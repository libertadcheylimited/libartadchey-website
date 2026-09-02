import Link from "next/link";
import { primaryCta } from "@/lib/site";

type InsightsConsultationCtaProps = {
  className?: string;
  compact?: boolean;
};

export function InsightsConsultationCta({
  className = "",
  compact = false,
}: InsightsConsultationCtaProps) {
  return (
    <aside
      className={`rounded-xl border border-outline-variant/60 bg-surface-container-low p-6 md:p-8 ${className}`}
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.05em] text-primary">
        Next step
      </p>
      <h2
        className={`mt-2 font-display font-semibold text-on-surface ${
          compact ? "text-xl" : "text-2xl md:text-3xl"
        }`}
      >
        Prefer a conversation to another article?
      </h2>
      <p className="mt-3 max-w-[65ch] font-sans text-base leading-relaxed text-on-surface-variant">
        Book a consultation with Uche to walk through process, risk, or
        compliance priorities for your organisation.
      </p>
      <Link
        href={primaryCta.href}
        className="mt-6 inline-flex rounded-lg bg-secondary-container px-6 py-3 font-sans text-sm font-semibold tracking-[0.05em] text-on-secondary-container transition-[filter] hover:brightness-110"
      >
        {primaryCta.label}
      </Link>
    </aside>
  );
}

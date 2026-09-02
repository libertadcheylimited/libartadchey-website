import type { ReactNode } from "react";

type PagePlaceholderProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

/** Minimal stub shell for screen agents to replace. */
export function PagePlaceholder({
  title,
  description = "Content owned by the screen agent for this route.",
  children,
}: PagePlaceholderProps) {
  return (
    <section className="bg-background py-[var(--section-padding)]">
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--margin-mobile)] md:px-[var(--gutter)]">
        <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary">
          Libertad Chey Ltd
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-[65ch] font-sans text-lg leading-relaxed text-on-surface-variant">
          {description}
        </p>
        {/* TODO: Screen agent — replace this placeholder with full page content. */}
        {children}
      </div>
    </section>
  );
}

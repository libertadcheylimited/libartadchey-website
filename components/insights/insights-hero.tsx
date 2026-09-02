import { Container } from "@/components/container";
import { insightPosts } from "@/lib/insights";

export function InsightsHero() {
  return (
    <section className="relative overflow-hidden bg-surface-container py-[var(--section-padding)]">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-10%] left-[-5%] h-96 w-96 rounded-full bg-primary opacity-5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-5%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-secondary opacity-10 blur-3xl"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-start justify-between gap-8 border-b-2 border-secondary pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-2 block font-sans text-sm font-semibold uppercase tracking-[0.15em] text-on-surface-variant">
              Intelligence hub
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-on-surface md:text-5xl lg:text-[3.75rem] lg:leading-[1.1] lg:tracking-[-0.02em]">
              Insights &amp; Resources
            </h1>
            <p className="mt-4 max-w-[65ch] font-sans text-lg leading-relaxed text-on-surface-variant">
              Practical notes on governance, process, and risk for leaders who
              want root-cause clarity, not checklist theatre. Sample articles
              below; client-authored posts will replace them after launch.
            </p>
          </div>
          <p className="pb-1 font-display text-xl font-semibold text-on-surface md:text-2xl">
            <span className="tabular-nums">{insightPosts.length}</span> sample
            pieces
          </p>
        </div>
      </Container>
    </section>
  );
}

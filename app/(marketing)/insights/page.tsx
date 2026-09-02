import type { Metadata } from "next";
import { InsightsFilterGrid } from "@/components/insights/insights-filter-grid";
import { InsightsHero } from "@/components/insights/insights-hero";
import { InsightsSidebar } from "@/components/insights/insights-sidebar";
import { Container } from "@/components/container";
import { getFeaturedInsight, insightPosts } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Sample insights on process audits, risk strategy, compliance, and SOPs from Libertad Chey Ltd. Live articles arrive after launch.",
};

export default function InsightsPage() {
  const featured = getFeaturedInsight();

  return (
    <>
      <InsightsHero />
      <section className="bg-background py-[var(--section-padding)]">
        <Container className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          <div className="min-w-0 flex-1">
            <InsightsFilterGrid posts={insightPosts} featured={featured} />
          </div>
          <InsightsSidebar />
        </Container>
      </section>
    </>
  );
}

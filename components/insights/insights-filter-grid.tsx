"use client";

import { useMemo, useState } from "react";
import { FeaturedInsight } from "@/components/insights/featured-insight";
import { InsightCard } from "@/components/insights/insight-card";
import {
  insightCategories,
  type InsightCategory,
  type InsightPost,
} from "@/lib/insights";

type FilterKey = "all" | InsightCategory;

type InsightsFilterGridProps = {
  posts: InsightPost[];
  featured: InsightPost;
};

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All insights" },
  ...insightCategories.map((category) => ({
    key: category as FilterKey,
    label: category,
  })),
];

export function InsightsFilterGrid({
  posts,
  featured,
}: InsightsFilterGridProps) {
  const [active, setActive] = useState<FilterKey>("all");

  const visible = useMemo(() => {
    if (active === "all") return posts;
    return posts.filter((post) => post.category === active);
  }, [active, posts]);

  const showFeatured =
    active === "all" || featured.category === active;

  const gridPosts = showFeatured
    ? visible.filter((post) => post.slug !== featured.slug)
    : visible;

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter insights by topic"
      >
        {filters.map((filter) => {
          const selected = active === filter.key;
          return (
            <button
              key={filter.key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(filter.key)}
              className={`rounded-full px-5 py-2 font-sans text-sm font-semibold tracking-[0.05em] transition-colors ${
                selected
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-variant"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {showFeatured ? (
        <div className="mb-8">
          <FeaturedInsight post={featured} />
        </div>
      ) : null}

      {gridPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {gridPosts.map((post) => (
            <InsightCard key={post.slug} post={post} />
          ))}
        </div>
      ) : !showFeatured ? (
        <p className="font-sans text-base text-on-surface-variant">
          No sample articles in this topic yet. Try All insights, or check back
          after launch content is published.
        </p>
      ) : null}
    </div>
  );
}

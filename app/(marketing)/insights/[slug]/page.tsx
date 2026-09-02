import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticle } from "@/components/insights/insight-article";
import {
  getInsightBySlug,
  insightPosts,
} from "@/lib/insights";

type InsightSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: InsightSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) {
    return { title: "Insight not found" };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function InsightSlugPage({ params }: InsightSlugPageProps) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);

  if (!post) {
    notFound();
  }

  return <InsightArticle post={post} />;
}

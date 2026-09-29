import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticle } from "@/components/insights/insight-article";
import { getInsightBySlug, getAllInsights } from "@/lib/insights";

type InsightSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllInsights();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: InsightSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getInsightBySlug(slug);
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
  const post = await getInsightBySlug(slug);

  if (!post) {
    notFound();
  }

  return <InsightArticle post={post} />;
}

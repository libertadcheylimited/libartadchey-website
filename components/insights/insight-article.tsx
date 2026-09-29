import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { InsightsConsultationCta } from "@/components/insights/consultation-cta";
import { NewsletterSignup } from "@/components/insights/newsletter-signup";
import { Container } from "@/components/container";
import {
  formatInsightDate,
  type InsightPost,
} from "@/lib/insights";

type InsightArticleProps = {
  post: InsightPost;
};

export function InsightArticle({ post }: InsightArticleProps) {
  const isPortableText =
    Array.isArray(post.body) &&
    post.body.length > 0 &&
    typeof post.body[0] === "object" &&
    post.body[0] !== null &&
    "_type" in post.body[0];

  return (
    <article>
      <header className="border-b border-outline-variant/60 bg-surface-container py-[var(--section-padding)]">
        <Container>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-on-surface-variant">
            <Link
              href="/insights"
              className="text-inherit no-underline transition-colors hover:text-primary"
            >
              Insights
            </Link>
            <span aria-hidden className="mx-2 text-outline">
              /
            </span>
            {post.category}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {post.isSample ? (
              <span className="rounded-full bg-primary-fixed px-3 py-1 font-sans text-xs font-semibold text-on-primary-fixed-variant">
                Sample content
              </span>
            ) : null}
          </div>
          <h1 className="mt-4 max-w-[20ch] font-display text-4xl font-bold tracking-tight text-on-surface md:max-w-[18ch] md:text-5xl lg:text-[3.5rem] lg:leading-[1.15]">
            {post.title}
          </h1>
          <p className="mt-5 max-w-[65ch] font-sans text-lg leading-relaxed text-on-surface-variant">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-sm font-semibold tracking-[0.05em] text-on-surface-variant">
            <span>By {post.author}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.publishedAt}>
              {formatInsightDate(post.publishedAt)}
            </time>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </Container>
      </header>

      <Container className="py-[var(--section-padding)]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div className="max-w-[70ch]">
            <div className="space-y-6 font-sans text-lg leading-[1.7] text-on-surface [&_p]:max-w-[70ch] [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_blockquote]:border-l-4 [&_blockquote]:border-brand-gold [&_blockquote]:pl-4 [&_blockquote]:italic [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
              {isPortableText ? (
                <PortableText value={post.body} />
              ) : (
                (post.body as string[]).map((paragraph, index) => (
                  <p key={`${post.slug}-${index}`}>{paragraph}</p>
                ))
              )}
            </div>

            {post.isSample ? (
              <p className="mt-10 rounded-lg bg-surface-container px-4 py-3 font-sans text-sm leading-relaxed text-on-surface-variant">
                This is sample copy for layout and voice. Managing insights via
                Sanity CMS allows updating articles seamlessly without code redeploys.
              </p>
            ) : null}

            <div className="mt-12">
              <InsightsConsultationCta />
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:pt-2">
            <div className="lg:sticky lg:top-24">
              <NewsletterSignup variant="sidebar" />
              <Link
                href="/insights"
                className="mt-6 inline-flex font-sans text-sm font-semibold tracking-[0.05em] text-primary transition-colors hover:text-secondary"
              >
                ← All insights
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}

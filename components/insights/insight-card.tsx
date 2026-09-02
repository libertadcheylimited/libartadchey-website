import Link from "next/link";
import {
  formatInsightDate,
  type InsightPost,
} from "@/lib/insights";

type InsightCardProps = {
  post: InsightPost;
};

export function InsightCard({ post }: InsightCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-outline-variant/50 bg-surface-container-lowest p-6 transition-shadow hover:shadow-[0_8px_24px_rgba(25,28,29,0.06)]">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 bg-surface-variant transition-colors group-hover:bg-brand-gold"
      />
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-surface-variant px-3 py-1 font-sans text-xs font-medium text-on-surface-variant">
          {post.category}
        </span>
        {post.isSample ? (
          <span className="rounded-full bg-primary-fixed px-3 py-1 font-sans text-xs font-semibold text-on-primary-fixed-variant">
            Sample
          </span>
        ) : null}
      </div>
      <h3 className="font-display text-xl font-semibold leading-snug text-on-surface md:text-2xl">
        <Link
          href={`/insights/${post.slug}`}
          className="text-inherit no-underline transition-colors hover:text-primary-container"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 line-clamp-3 font-sans text-base leading-relaxed text-on-surface-variant">
        {post.excerpt}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-xs font-medium text-on-surface-variant">
        <time dateTime={post.publishedAt}>
          {formatInsightDate(post.publishedAt)}
        </time>
        <span aria-hidden>·</span>
        <span>{post.readingMinutes} min</span>
      </div>
      <Link
        href={`/insights/${post.slug}`}
        className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-[0.05em] text-primary transition-colors hover:text-secondary"
      >
        Read analysis
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </article>
  );
}

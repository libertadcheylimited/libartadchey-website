import Link from "next/link";
import {
  formatInsightDate,
  type InsightPost,
} from "@/lib/insights";

type FeaturedInsightProps = {
  post: InsightPost;
};

export function FeaturedInsight({ post }: FeaturedInsightProps) {
  return (
    <article className="group overflow-hidden rounded-xl bg-primary text-on-primary shadow-[0_8px_32px_rgba(62,0,100,0.18)] transition-transform duration-500 ease-out motion-safe:hover:-translate-y-1">
      <Link
        href={`/insights/${post.slug}`}
        className="relative flex min-h-[280px] flex-col justify-end p-6 no-underline md:min-h-[360px] md:p-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(206,137,255,0.28),transparent_55%),radial-gradient(ellipse_at_90%_80%,rgba(254,215,82,0.18),transparent_45%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-inverse-surface/80 to-transparent"
        />

        <div className="relative z-10">
          <span className="inline-block rounded-full bg-on-primary/15 px-3 py-1 font-sans text-xs font-medium tracking-wide text-on-primary">
            {post.category}
          </span>
          {post.isSample ? (
            <span className="ml-2 inline-block rounded-full bg-secondary-container/90 px-3 py-1 font-sans text-xs font-semibold tracking-wide text-on-secondary-container">
              Sample
            </span>
          ) : null}
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-on-primary transition-colors group-hover:text-secondary-fixed md:text-4xl md:leading-tight">
            {post.title}
          </h2>
          <p className="mt-3 max-w-[65ch] font-sans text-base leading-relaxed text-on-primary/85 md:text-lg">
            {post.excerpt}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-sm font-semibold tracking-[0.05em] text-on-primary/75">
            <span>By {post.author}</span>
            <span
              aria-hidden
              className="inline-block h-1 w-1 rounded-full bg-secondary"
            />
            <span>{post.readingMinutes} min read</span>
            <span
              aria-hidden
              className="inline-block h-1 w-1 rounded-full bg-secondary"
            />
            <time dateTime={post.publishedAt}>
              {formatInsightDate(post.publishedAt)}
            </time>
          </div>
        </div>
      </Link>
    </article>
  );
}

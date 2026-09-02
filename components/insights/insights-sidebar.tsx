import { InsightsConsultationCta } from "@/components/insights/consultation-cta";
import { NewsletterSignup } from "@/components/insights/newsletter-signup";
import { insightCategories } from "@/lib/insights";

export function InsightsSidebar() {
  return (
    <aside className="flex w-full flex-col gap-8 lg:w-[380px] lg:shrink-0">
      <div className="sticky top-24 flex flex-col gap-8">
        <NewsletterSignup variant="sidebar" />

        <div className="rounded-xl bg-surface-container-low p-6 md:p-8">
          <h3 className="border-b border-surface-variant pb-3 font-display text-xl font-semibold text-on-surface">
            Themes we write about
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {insightCategories.map((theme) => (
              <li key={theme}>
                <span className="font-sans text-sm font-semibold tracking-[0.05em] text-on-surface-variant">
                  {theme}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-sans text-sm leading-relaxed text-on-surface-variant">
            Live topic counts will appear when Sanity (or your CMS of choice)
            feeds this list.
          </p>
        </div>

        <InsightsConsultationCta compact />
      </div>
    </aside>
  );
}

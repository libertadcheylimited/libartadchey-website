import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

export function FounderStory() {
  return (
    <section
      id="who-i-am"
      className="relative scroll-mt-[calc(var(--header-height)+1rem)] bg-background py-[clamp(4rem,10vw,7.5rem)]"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="about-reveal lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-high">
              <Image
                src="/brand/uche-maduka.jpg"
                alt="Uche Maduka, Founder of Libertad Chey Ltd"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[center_18%]"
                priority
              />
              <div
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-1.5 bg-secondary-container"
              />
            </div>
          </div>

          <div className="about-reveal about-reveal-delay-1 lg:col-span-7">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              Who I am
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight tracking-tight text-primary">
              From Big 4 audit rooms to upstream risk work
            </h2>

            <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-on-surface-variant sm:text-lg">
              <p>
                I spent the early part of my career in a Big 4 firm, sitting
                inside some of Nigeria&apos;s largest financial audit
                engagements. The work was rigorous, and it taught me a great
                deal. But the longer I did it, the more one thing became clear:
                we were always arriving after the fact. By the time a problem
                reached the financial statements, it had already done its
                damage. The real story was upstream, in processes nobody had
                mapped, risks nobody had owned, information gaps that made it
                impossible to see what was coming.
              </p>
              <p>
                I did not just leave that observation in a workpaper and move
                on. I went and built the capability to do something about it.
              </p>
              <p>
                Each qualification was deliberate. Together they give me
                something most advisors in this space do not have: the ability
                to see an organisation across every layer at once, the process,
                the risk, the financial exposure, and the information that
                connects all three.
              </p>
              <p>
                I built {siteConfig.name} because I am relentless about one
                thing: I hate seeing businesses fail when the failure was
                preventable. The gaps are almost always findable. The risks are
                almost always manageable. What is usually missing is someone
                who knows where to look and cares enough to look properly.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-outline-variant/40 pt-6">
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-outline">
                  Previous experience
                </p>
                <p className="mt-1 font-sans text-sm font-semibold text-primary">
                  Big 4 consulting &amp; advisory
                </p>
              </div>
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-2.5 font-sans text-sm font-semibold tracking-[0.05em] text-primary transition-colors hover:bg-primary hover:text-on-primary"
              >
                Connect on LinkedIn
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

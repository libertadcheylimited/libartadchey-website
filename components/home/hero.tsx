import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

const brandValues = ["Intelligence", "Integrity", "Insight"] as const;

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function HomeHero() {
  return (
    <section className="relative flex min-h-[min(92svh,54rem)] flex-col overflow-hidden bg-surface">
      {/* Background Radial & Geometric Motifs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_92%_8%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_-5%_95%,color-mix(in_oklab,var(--secondary-container)_38%,transparent),transparent_52%)]" />
        
        {/* Geometric Shield Motif Background Accent - Semi-Transparent Royal Purple (Overdrive, Bolder & Animated) */}
        <svg
          className="home-shield-animated absolute -top-[18%] -right-[34%] hidden h-[170%] w-[82%] lg:block pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-40"
          viewBox="0 0 500 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="purpleShieldGradient" x1="250" y1="50" x2="250" y2="520" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--primary)" stopOpacity="0.28" />
              <stop offset="0.6" stopColor="var(--primary-container)" stopOpacity="0.16" />
              <stop offset="1" stopColor="var(--brand-gold)" stopOpacity="0.08" />
            </linearGradient>
            <radialGradient id="purpleShieldGlow" cx="250" cy="285" r="250" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--primary)" stopOpacity="0.35" />
              <stop offset="0.7" stopColor="var(--primary-container)" stopOpacity="0.1" />
              <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Soft Radial Ambient Glow */}
          <circle cx="250" cy="285" r="250" fill="url(#purpleShieldGlow)" />

          {/* Outer Semi-Transparent Filled Purple Shield Shape */}
          <path
            d="M250 50 L420 120 V280 C420 400 250 520 250 520 C250 520 80 400 80 280 V120 L250 50 Z"
            fill="url(#purpleShieldGradient)"
            stroke="var(--primary)"
            strokeWidth="4.5"
            strokeLinejoin="round"
            strokeOpacity="0.45"
          />

          {/* Inner Concentric Shield Line with Gold Accent */}
          <path
            d="M250 78 L395 138 V275 C395 378 250 482 250 482 C250 482 105 378 105 275 V138 L250 78 Z"
            stroke="var(--brand-gold)"
            strokeWidth="2.5"
            strokeOpacity="0.6"
            strokeDasharray="8 8"
          />

          {/* Radial Geometry & Crosshairs */}
          <circle cx="250" cy="285" r="140" stroke="var(--primary)" strokeWidth="2.25" strokeOpacity="0.4" />
          <circle cx="250" cy="285" r="90" stroke="var(--primary-container)" strokeWidth="1.75" strokeDasharray="5 5" strokeOpacity="0.45" />
          <path d="M250 145 V425 M110 285 H390" stroke="var(--primary)" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.35" />
          
          {/* Subtle LC Monogram Watermark */}
          <text
            x="250"
            y="302"
            textAnchor="middle"
            fontFamily="var(--font-playfair), Georgia, serif"
            fontSize="58"
            fontWeight="bold"
            fill="var(--primary)"
            fillOpacity="0.28"
            letterSpacing="3"
          >
            LC
          </text>
        </svg>
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-center py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Hero Story */}
          <div className="relative flex flex-col gap-5 lg:col-span-7 lg:gap-6">
            <div className="home-rise home-delay-1 flex items-center gap-3.5 sm:gap-4">
              <Image
                src="/brand/logo.png"
                alt=""
                width={80}
                height={80}
                className="h-14 w-14 object-contain sm:h-[4.5rem] sm:w-[4.5rem]"
                priority
              />
              <p className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.02em] text-primary">
                {siteConfig.shortName}
              </p>
            </div>

            <h1 className="home-rise home-delay-2 font-display max-w-[17ch] text-[clamp(1.85rem,4.2vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.02em] text-on-surface">
              Uncovering process loopholes{" "}
              <span className="font-light italic text-secondary">before</span>{" "}
              they reach your financials.
            </h1>

            <p className="home-rise home-delay-3 max-w-[42ch] font-sans text-base leading-relaxed text-on-surface-variant sm:text-lg">
              Founder-led risk management, process audits, and compliance
              advisory for startups, SMEs, corporates, NGOs, and churches.
            </p>

            <div className="home-rise home-delay-4 flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-secondary-container px-8 py-3.5 font-sans text-sm font-semibold tracking-[0.05em] text-on-secondary-container transition-[filter,box-shadow,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_8px_24px_rgba(184,150,12,0.25)] hover:brightness-105 ${focusRing}`}
              >
                Book a consultation
                <ArrowIcon />
              </Link>
              <Link
                href="/services"
                className={`inline-flex min-h-12 items-center justify-center rounded-lg px-8 py-3.5 font-sans text-sm font-semibold tracking-[0.05em] text-primary-container shadow-[inset_0_0_0_1px_currentColor] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-surface-container ${focusRing}`}
              >
                Explore services
              </Link>
            </div>
          </div>

          {/* Right Hero Integrated SVG Audit Framework */}
          <aside
            aria-label="Process & Risk Audit Framework"
            className="home-fade home-delay-5 lg:col-span-5 flex flex-col justify-center"
          >
            <div className="relative overflow-hidden rounded-2xl border border-outline-variant/60 bg-surface-container-lowest/90 p-6 sm:p-7 shadow-[0_20px_48px_rgba(62,0,100,0.08)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_24px_56px_rgba(62,0,100,0.12)]">
              {/* Top Accent Gradient Line */}
              <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--primary),var(--brand-gold))]" />

              {/* Integrated SVG Connecting Pathway */}
              <svg
                aria-hidden
                className="pointer-events-none absolute left-8 top-28 bottom-6 w-6 text-primary opacity-25"
                viewBox="0 0 24 320"
                fill="none"
              >
                <path
                  d="M12 0 V320"
                  stroke="url(#auditPathwayGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                />
                <defs>
                  <linearGradient id="auditPathwayGrad" x1="0" y1="0" x2="0" y2="320" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--primary)" />
                    <stop offset="0.5" stopColor="var(--brand-gold)" />
                    <stop offset="1" stopColor="var(--primary-container)" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="relative z-10">
                {/* Header Badge */}
                <div className="mb-4 flex items-center justify-between border-b border-outline-variant/40 pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-brand-gold animate-pulse" />
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      Audit Framework
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-primary-fixed px-2.5 py-0.5 font-sans text-[11px] font-bold tracking-wider text-on-primary-fixed">
                      ACA
                    </span>
                    <span className="rounded-full bg-primary-fixed px-2.5 py-0.5 font-sans text-[11px] font-bold tracking-wider text-on-primary-fixed">
                      CIA
                    </span>
                    <span className="rounded-full bg-secondary-fixed px-2.5 py-0.5 font-sans text-[11px] font-bold tracking-wider text-on-secondary-fixed">
                      ISO 31000
                    </span>
                  </div>
                </div>

                <h2 className="font-display text-lg font-bold text-on-surface">
                  5-Step Risk &amp; Process Assurance
                </h2>
                <p className="mt-1 font-sans text-xs text-on-surface-variant leading-relaxed">
                  Upstream root-cause methodology applied directly to your controls.
                </p>

                {/* 5-Step Connected List */}
                <ol className="mt-5 flex flex-col gap-3">
                  {[
                    { step: "01", title: "Process Mapping", desc: "Uncovering invisible workflow gaps" },
                    { step: "02", title: "Control Testing", desc: "Stress-testing internal controls" },
                    { step: "03", title: "Risk Mitigation", desc: "Preventing financial exposure early" },
                    { step: "04", title: "Compliance Advisory", desc: "Aligning with CAMA & IFRS standards" },
                    { step: "05", title: "Actionable Outcomes", desc: "Bespoke SOPs & institutional resilience" },
                  ].map((item, idx) => (
                    <li
                      key={item.step}
                      className="group relative flex items-center gap-3.5 rounded-xl bg-surface-container-low/70 p-3 transition-all duration-300 hover:bg-surface-container-high/80 hover:translate-x-1 hover:shadow-sm"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-sans text-xs font-bold text-on-primary shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-secondary-container group-hover:text-on-secondary-container">
                        {item.step}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span className="font-sans text-xs font-bold text-on-surface truncate group-hover:text-primary transition-colors">
                          {item.title}
                        </span>
                        <span className="font-sans text-[11px] text-on-surface-variant truncate">
                          {item.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

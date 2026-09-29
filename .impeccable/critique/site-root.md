---
target: site-root
total_score: 31
max_score: 40
na_heuristics: ''
p0_count: 0
p1_count: 2
p2_count: 2
p3_count: 1
date: 2026-09-12
---

# Libertad Chey Design Critique Report

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Good state indicators; contact page form feedback is clear |
| 2 | Match System / Real World | 3 | Warm executive tone; domain terms clear, could define outcomes more explicitly |
| 3 | User Control and Freedom | 3 | Simple navigation with clear exits; smooth scrolling |
| 4 | Consistency and Standards | 4 | Design system tokens strictly defined and mapped across all components |
| 5 | Error Prevention | 3 | Clean form fields with browser validation; Calendly integration safeguards booking |
| 6 | Recognition Rather Than Recall | 3 | Strong visual distinction between primary purple CTA and secondary options |
| 7 | Flexibility and Efficiency | 3 | Direct access to primary CTA (/contact) from all viewports |
| 8 | Aesthetic and Minimalist Design | 3 | Editorial Playfair typography with generous whitespace; hero background SVG shape feels arbitrary |
| 9 | Error Recovery | 3 | Clear form validation feedback on contact surface |
| 10 | Help and Documentation | 3 | Insights section provides guidance; footer contains quick contact details |
| **Total** | | **31/40** | **Good** |

## Design Specificity Verdict

**LLM Assessment**: The visual design is strongly aligned with Libertad Chey's identity as a boutique risk & audit consultancy. The palette of Deep Royal Purple (`#3e0064`) and Rich Warm Gold (`#B8960C`) paired with Playfair Display headings provides an authoritative editorial atmosphere. However, certain elements like hero background decorative blobs (`M44.7,-76.4...`) and generic vertical brand value lists feel category-interchangeable rather than bespoke to Libertad Chey's audit methodology.

**Deterministic Scan**: Evaluated via static code analysis of Next.js Tailwind CSS tokens and JSX structures in `app/` and `components/`. Header, founder, services, sectors, and contact components adhere strictly to system design tokens.

## Overall Impression

Libertad Chey's website delivers a refined executive feel that avoids the cold cliché of Big 4 audit firms. The biggest design opportunity lies in deepening visual craft—upgrading decorative hero elements into brand-specific motifs, introducing subtle micro-animations for card interactions, and perfecting fluid typography rhythm on mobile devices.

## What's Working

1. **Color & Brand Identity**: Deep Royal Purple and Warm Gold create an unmistakable executive presence that radiates trust and boutique authority.
2. **Founder-First Positioning**: Uche Maduka's profile and credentials (ACA, CIA, ISO 31000) are prominently integrated on the homepage and about page.
3. **Structured Service Layouts**: Service cards utilize asymmetric layout weighting (`featured`, `primary`, and `light` card tones) to guide reader focus effectively.

## Priority Issues

### [P1] Hero Visual Weight & Brand Character
- **Why it matters**: The right column in `HeroHome` displays a static vertical list of 3 words ("Intelligence", "Integrity", "Insight"). On desktop screens, this leaves half the viewport visually underpowered.
- **Fix**: Replace the static text column with a bespoke visual framework component—such as an interactive Process & Risk Audit Matrix preview or a dual founder/framework visual badge.
- **Suggested command**: `$impeccable layout` or `$impeccable bolder`

### [P1] Mobile Navigation Touch Targets & Contrast
- **Why it matters**: The mobile menu toggle button and navigation links rely on minimal padding on smaller devices. On mobile dark purple backgrounds (`bg-primary`), item hover states need higher contrast focus rings.
- **Fix**: Increase mobile link tap targets to at least 44px, add explicit `prefers-reduced-motion` handling to the menu toggle animation, and refine focus ring offsets.
- **Suggested command**: `$impeccable adapt`

### [P2] Micro-interactions & Card Hover Polish
- **Why it matters**: Service cards in `HomeServicesPreview` have static borders and default hover filters that feel slightly rigid.
- **Fix**: Add fluid spring transitions for card elevation, ambient gold border glow on hover, and smooth arrow movement on link hover.
- **Suggested command**: `$impeccable animate` or `$impeccable polish`

### [P2] Fluid Typography & Mobile Display Scaling
- **Why it matters**: Headings use arbitrary font size clamps (`[clamp(1.75rem,3.5vw,3rem)]`) without tight tracking or line-height adjustments, causing uneven line breaks on mid-sized tablet viewports.
- **Fix**: Standardize typography scale using defined design tokens for display titles (`headline-xl`, `headline-lg`, `headline-md`) with optical tracking.
- **Suggested command**: `$impeccable typeset`

## Persona Red Flags

- **Alex (Executive CFO)**: Wants to assess founder credentials instantly. Finding the consultation link is fast, but the hero section lacks a direct credentials badge summary alongside the hero text.
- **Jordan (First-Time SME Owner)**: Service overview cards use technical labels ("Process Audits", "Financial Audits"). Adding a short "What to expect" outcome highlight on card hover would reduce hesitation.
- **Sam (Accessibility-Dependent User)**: Inline SVG animations in `HomeHero` do not strictly enforce `prefers-reduced-motion` disabling on custom CSS keyframes.

## Minor Observations

- Decorative SVG shape paths in `hero.tsx` and `insights-invite.tsx` use generic blob geometries rather than shield/lattice motifs derived from Libertad Chey's logo.
- Footer social links and copyright notice could include subtle gold hover highlights for visual consistency with the header.

## Questions to Consider

- What if the Hero section included a subtle interactive preview of the 5-step Risk & Audit Methodology?
- Would elevating card animations and typography hierarchy on the Home and Services pages give Libertad Chey a more distinct competitive edge over generic B2B consultancy sites?

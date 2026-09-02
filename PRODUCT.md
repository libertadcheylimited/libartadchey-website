# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Decision-makers at organisations of any size (startups, SMEs, NGOs, churches, and corporates) in Nigeria and internationally who need to understand where processes are breaking down and get ahead of risk before it becomes a financial or reputational problem. They arrive seeking credible expertise and a clear next step: book a consultation with the founder.

## Product Purpose

Libertad Chey Ltd is a boutique risk and audit consultancy founded by Uchechukwu (Uche) Maduka (ACA, CIA, ISO 31000). The marketing site is the firm's public presence: establish trust in founder-led expertise, explain services (process audits, financial audits, risk management, compliance, policy/SOP development), and convert visitors primarily into booked consultation calls. Secondary goals: enquiry form submissions, reading insights, and newsletter signup. No pricing on-site, no auth, no client portals.

Source of truth for scope and requirements: `libartadtachey-website-questionnaire..pdf`. Future product work must not stray from that brief.

## Positioning

Founder-led root-cause consultancy: every engagement is handled personally by a seasoned professional (Big 4 background; CIA, ACA, ISO 31000) who goes beyond surface compliance and fee-led audit theatre to find gaps in people, processes, and controls before they reach the financial statements. Clients get genuine care and actionable outcomes, not templated reports. Neighbouring firms can claim audits; they cannot truthfully claim this personal stake and upstream focus as the default engagement model.

## Operating Context

- Engagement starts with a consultation call; pricing is project-based and agreed after that conversation (never shown on the site).
- Regulatory framing includes applicable Nigerian requirements (e.g. CAMA) and sector-specific rules, plus IFRS-aligned financial audit work where relevant.
- Contact and booking: Calendly (or equivalent) for scheduling; enquiry form for inbound leads; email/phone/LinkedIn published for direct contact (Lagos, Nigeria).
- Insights/blog and downloadable tips are part of the funnel; client writes posts after launch. Newsletter signup is a secondary path.
- Planned integrations (partially wired): Calendly embed, transactional enquiry email, newsletter tool, basic analytics, CMS for publishing insights.

## Capabilities and Constraints

**In scope**

- Public marketing site only: Home, Services (overview + detail), About / Why Work With Me, Insights (list + article), Contact / Book a call.
- Primary CTA: book a consultation (`/contact`). Secondary: enquiry, read insights, newsletter.
- Services: Process Audits; Financial Audits; Risk Management Advisory; Compliance Advisory; Policy & SOP Development; plus insights/resources.

**Out of scope / undecided**

- No on-site pricing, calculators, authentication, or client portals.
- CMS for independent blog publishing is required by the questionnaire; implementation stack (e.g. Sanity) may still be completing.
- Domain registration and hosting setup are client-cost items; deploy target in repo is Vercel Hobby.

## Brand Commitments

- **Name:** Libertad Chey Ltd (short: Libertad Chey). Logo: purple shield with gold "LC" and wordmark (`public/brand/logo.png`).
- **Founder:** Uchechukwu (Uche) Maduka; credentials include ACA, CIA, ISO 31000 (ISO 9001:2015 also appears in profile materials). Headshot provided for About/profile use (`public/brand/uche-maduka.jpg`).
- **Voice:** Warm, personal, approachable, credible, authoritative. Conversational and direct without Big 4 stiffness. Human enough that visitors feel they will work with a real person who cares about outcomes.
- **Emotional goals:** secured trust, sophisticated intelligence, approachable exclusivity.
- **Binding brief:** `libartadtachey-website-questionnaire..pdf` (and firm profile PDF for About depth). Do not invent claims that conflict with it.
- **Anti-references:** stiff impersonal Big 4 / generic mid-tier audit sites; SaaS marketing defaults (gradient text, decorative glass, identical icon-card grids, hero-metric strips as the main story); template consultancy clones that bury the founder; price-led B2B funnels; em dashes and AI-slop phrasing that could belong to any brand.

## Evidence on Hand

**Confirmed absent (do not fabricate or cite as proven):** named client logos, case studies, testimonials, press quotes, and specific outcome percentages or benchmarks.

**Assets on hand for site use (not proof of results):** brand logo (`public/brand/logo.png`); founder headshot (`public/brand/uche-maduka.jpg`); discovery questionnaire and firm profile PDFs in the repo root; Stitch design references under `stitch_libertad_chey_consultancy_website/`. Insights content currently uses sample/static posts until CMS and client-written posts land.

## Product Principles

1. **Founder first.** The site should feel like meeting Uche: personal stake and senior attention from the first conversation, not a faceless firm.
2. **Book the call.** Every major surface makes the primary CTA (book a consultation) obvious without cluttering secondary paths.
3. **Root-cause over checklist.** Messaging emphasises process, people, and controls upstream of the financials, not surface-level compliance theatre.
4. **Outcomes over templates.** Promise genuine care and actionable recommendations, not fee extraction or binder theatre.
5. **Stay inside the brief.** Scope, goals, integrations, and claims stay aligned with the completed discovery questionnaire.

## Accessibility & Inclusion

Aim for WCAG 2.2 AA on interactive elements and text contrast. Support `prefers-reduced-motion`. Keep body copy readable (generous line-height, max ~65–75ch). Do not rely on color alone for meaning. Forms must have visible labels and clear error states when contact/booking is implemented.

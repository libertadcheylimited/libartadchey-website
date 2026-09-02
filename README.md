# Libertad Chey Ltd website

Marketing site for Libertad Chey Ltd, a boutique risk and audit consultancy.

## Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS** v4 with design tokens from `DESIGN.md`
- **Fonts:** Playfair Display + Plus Jakarta Sans (`next/font`)
- **Deploy target:** Vercel Hobby

Planned later (not fully wired): Sanity CMS, GA4.

## Contact / booking env

Set these for production email and scheduling on `/contact`:

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_CALENDLY_URL` | For embed | Full Calendly event URL; without it the page shows a “coming soon” scheduling panel |
| `RESEND_API_KEY` | For live email | Sends enquiry emails via [Resend](https://resend.com); without it submissions are logged server-side and still return success (local/dev) |
| `RESEND_FROM_EMAIL` | Recommended with Resend | Verified sender, e.g. `Libertad Chey Ltd <hello@yourdomain.com>` |
| `CONTACT_TO_EMAIL` | Optional | Inbox for enquiries (defaults to `uchemaduka98@gmail.com` from `lib/site.ts`) |

## Scripts

```bash
npm run dev      # local development
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Design context (Impeccable)

- `PRODUCT.md` — users, purpose, brand personality, principles (register: **brand**)
- `DESIGN.md` — colors, typography, elevation, components
- Load context: `node .agents/skills/impeccable/scripts/load-context.mjs`

## Routes

| Path | Owner note |
|------|------------|
| `/` | Home |
| `/services` | Services overview |
| `/services/[slug]` | Service detail (5 SSG slugs) |
| `/about` | Why Work With Me / founder |
| `/insights` | Insights listing (static sample posts) |
| `/insights/[slug]` | Insight article |
| `/contact` | Contact / Book a call (Calendly + enquiry form) |

Shared shell: sticky header + footer in `app/(marketing)/layout.tsx`.

## Brand assets

- Logo: `public/brand/logo.png`
- Source references: questionnaire PDFs + `stitch_libertad_chey_consultancy_website/`

## Constraints

- Primary CTA: book a consultation (`/contact`)
- No pricing, no auth/portals
- Warm, personal, credible; avoid AI-slop patterns (see `PRODUCT.md`)

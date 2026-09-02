---
name: Libertad Chey Boutique
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#4d4451'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#7e7382'
  outline-variant: '#cfc2d3'
  surface-tint: '#813db2'
  primary: '#3e0064'
  on-primary: '#ffffff'
  primary-container: '#5b0f8c'
  on-primary-container: '#ce89ff'
  inverse-primary: '#e2b6ff'
  secondary: '#725c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed752'
  on-secondary-container: '#735d00'
  tertiary: '#262626'
  on-tertiary: '#ffffff'
  tertiary-container: '#3c3c3c'
  on-tertiary-container: '#a8a6a6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f3daff'
  primary-fixed-dim: '#e2b6ff'
  on-primary-fixed: '#2e004d'
  on-primary-fixed-variant: '#672198'
  secondary-fixed: '#ffe082'
  secondary-fixed-dim: '#e9c340'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#564500'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 60px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 80px
---

## Brand & Style

The design system is engineered for a premium boutique consultancy that balances authoritative expertise with human-centric warmth. The aesthetic is **Corporate Modern with a Minimalist Editorial influence**, prioritizing high-end typography and generous whitespace to signify confidence and clarity.

The interface should feel curated rather than mass-produced. It avoids heavy shadows in favor of structured card layouts, subtle gold accents, and a "Warm Professional" atmosphere. The emotional response should be one of secured trust, sophisticated intelligence, and approachable exclusivity.

## Colors

The palette centers on **Deep Royal Purple (#5B0F8C)** to establish a sense of wisdom and premium heritage. This is accented by **Rich Warm Gold (#B8960C)**, used sparingly for high-impact call-to-actions and decorative highlights.

- **Backgrounds:** Primary surfaces use a soft Slate Gray/White (#F8F9FA) to reduce eye strain and feel warmer than pure hex white. 
- **Dark Mode/Contrast Sections:** Use a deep charcoal-purple mix for high-impact sections (e.g., footers or hero backgrounds) to maintain brand presence.
- **Typography:** Text should remain high-contrast charcoal for maximum legibility, avoiding pure black to maintain the "warm" boutique feel.

## Typography

This design system utilizes a high-contrast typographic pair. **Playfair Display** provides an authoritative, editorial feel for headlines, evoking the "boutique" nature of the consultancy. **Plus Jakarta Sans** is used for all functional and body text to ensure modern legibility and a friendly, approachable tone.

- **Headlines:** Use tight letter spacing for large display text.
- **Body:** Ensure generous line heights (1.6) to facilitate comfortable reading of long-form consultancy insights.
- **Labels:** Small labels and overlines should use uppercase with slight letter-spacing to create a "Trust Badge" or "Certification" appearance.

## Layout & Spacing

The layout philosophy follows a **Fixed-Width Centered Grid** for desktop to maintain an editorial, controlled feel. 

- **Grid:** 12-column grid with 24px gutters.
- **Rhythm:** Vertical rhythm is driven by an 8px base unit. 
- **Sectioning:** Use large vertical padding (80px to 120px) between major content blocks to convey a sense of luxury and breathing room.
- **Mobile:** Transition to a single-column layout with 20px side margins. Service cards should stack vertically but maintain their internal padding.

## Elevation & Depth

To maintain a "Premium Boutique" feel, this design system avoids heavy drop shadows. Instead, it utilizes **Tonal Layers** and **Low-Contrast Outlines**.

- **Surfaces:** Use subtle shifts in background color (e.g., white to #F8F9FA) to define different content zones.
- **Cards:** Cards are defined by 1px solid borders in a very light slate or purple-tinted gray rather than shadows. 
- **Active States:** For interactive elements, use a very soft, "Ambient Shadow" (4% opacity, 12px blur) to suggest a gentle lift without breaking the clean aesthetic.
- **Gold Accents:** Use 2px gold border-bottoms on headers or cards to denote "Premium" status.

## Shapes

The shape language is **Rounded**, using an 8px (0.5rem) base radius to soften the corporate edge and make the brand feel approachable.

- **Standard Elements:** Buttons, input fields, and small components use 8px corners.
- **Large Elements:** Featured service cards and image containers use 16px (1rem) corners for a more modern, friendly silhouette.
- **Interactive Accents:** Gold highlights should follow the same corner radius as their parent container.

## Components

### Buttons & CTAs
- **Primary:** Solid Deep Purple background with White text. 8px corner radius.
- **Secondary/Accent:** Gold Gradient (subtle) or Solid Gold with High-Contrast Charcoal text. Reserved for the most important "Contact Us" or "Schedule Consultation" actions.
- **Ghost:** Transparent background with a 1px Purple border.

### Service Cards
Cards should have a 1px #E9ECEF border and 32px of internal padding. Headlines within cards should use `headline-sm`. Hover states should trigger a 2px Gold border-bottom.

### Trust Badges & Labels
Small, rounded pills with a light purple background and dark purple text (`label-md`). Used for industry certifications or client logos.

### Input Fields
Minimalist design with 1px borders. Focus state shifts the border color to Deep Purple with a subtle Gold "glow" (shadow) to highlight the active area.

### Lists
Use custom Gold "check" icons for bullet points to reinforce the premium nature of the service offerings.
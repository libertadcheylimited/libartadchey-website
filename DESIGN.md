---
name: Libertad Chey
description: Premium risk and audit consultancy aesthetic balancing authoritative expertise with human-centric warmth.
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
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  brand-gold: '#B8960C'
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
components:
  button-primary:
    backgroundColor: '{colors.primary-container}'
    textColor: '{colors.on-primary}'
    rounded: '{rounded.DEFAULT}'
    padding: 12px 24px
  button-cta:
    backgroundColor: '{colors.secondary-container}'
    textColor: '{colors.on-secondary-container}'
    rounded: '{rounded.DEFAULT}'
    padding: 12px 24px
  button-ghost:
    backgroundColor: transparent
    textColor: '{colors.primary-container}'
    rounded: '{rounded.DEFAULT}'
    padding: 12px 24px
  header-bar:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    height: 80px
---

## Overview

Corporate Modern with a Minimalist Editorial influence for a premium boutique risk and audit consultancy. High-end typography, generous whitespace, and tonal surface layers convey confidence and clarity. The interface should feel curated rather than mass-produced: structured layouts, subtle gold accents, and a warm professional atmosphere. Emotional response: secured trust, sophisticated intelligence, approachable exclusivity.

Color strategy: **Committed** (deep royal purple carries identity; gold is reserved for high-impact CTAs). Theme scene: a Lagos-based founder meeting a CFO in a bright conference room mid-morning; light, warm surfaces with purple authority, not dark-mode finance cliché.

## Colors

Palette centers on **Deep Royal Purple** (`primary` `#3e0064`, `primary-container` `#5b0f8c`) for wisdom and premium heritage, accented by **Rich Warm Gold** (`brand-gold` `#B8960C`, `secondary-container` `#fed752`) used sparingly for booking CTAs and decorative highlights.

- Backgrounds use soft slate (`#f8f9fa`), never pure white or pure black.
- High-contrast / footer sections may use `inverse-surface` charcoal.
- Body text stays charcoal (`on-surface` / `on-surface-variant`) for legibility and warmth.
- Avoid gradient text and decorative glass as defaults.

## Typography

**Playfair Display** for headlines (editorial boutique authority). **Plus Jakarta Sans** for body, labels, and UI (modern, approachable).

- Large display: tight letter-spacing.
- Body: line-height 1.6; cap measure ~65–75ch.
- Labels: uppercase with slight tracking for trust badges and nav.

## Elevation

Prefer **tonal layers** and **low-contrast outlines** over heavy shadows.

- Zone separation via surface steps (white ↔ `#f8f9fa` ↔ container tones).
- Cards: 1px light border; hover may add a 2px gold bottom border for premium emphasis.
- Interactive lift: soft ambient shadow (~4% opacity, 12px blur) sparingly.
- Header: solid `primary` bar (fixed/sticky), not glass.

## Components

- **Primary button:** solid purple, white text, 8px radius.
- **CTA / Book a call:** gold container (`secondary-container`) with charcoal-gold text; reserved for consultation booking.
- **Ghost:** transparent with 1px purple border.
- **Header:** fixed 80px, max-width 1280px inner, logo + wordmark, nav links, prominent Book CTA.
- **Footer:** surface-container, quick links, contact, copyright.
- **Inputs (later):** 1px outline; focus border purple with subtle gold glow.
- Cards and service layouts are owned by screen agents; do not default the whole site to identical icon-card grids.

## Do's and Don'ts

**Do**

- Lead with brand name and founder credibility.
- Keep "Book a call" / consultation as the clearest action.
- Use purple for structure and gold for conversion.
- Leave generous section padding (80–120px) on marketing pages.
- Write warm, direct copy without em dashes.

**Don't**

- Show pricing or auth/portals.
- Use gradient text, glassmorphism defaults, or hero-metric template as the main story.
- Fill pages with identical icon + heading + text card grids.
- Impersonate stiff Big 4 visual language (cold navy, stock handshakes, jargon walls).
- Put secondary marketing clutter in the first viewport when crafting heroes (screen agents: brand, one headline, one support line, CTA, one visual).

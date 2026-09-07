# Insider One — Design System

Insider is an omnichannel customer-experience / marketing-automation platform (web, email, SMS, WhatsApp, RCS, push, app, ads, and an AI-driven "Architect" journey builder). This design system is built from the **"Insider One" Partner Deck Brand Kit** — an internal enablement toolkit that Customer Success Managers (CSMs) and Customer Onboarding Managers (COM) use to build partner-facing presentation decks that stay on-brand.

**Source material** (uploaded by the user, stored for reference at `uploads/brand-kit.pdf`, text dump at `uploads/brand-kit-text.txt`):
- `uploads/Copy of [COPY & USE] Partner Deck Brand Kit.pdf` — 36-page brand kit covering logo usage, color palette, typography, shapes, avatars, logo walls (investor/client/competitor), product-channel icons, global metrics, "Architect" journey-builder module graphics, goal/segment boxes, and slide templates.

No codebase, Figma file, or live product screens were provided — **this is a brand-guidelines-only run.** Everything here is built from the brand kit's own pages: real logo files and brand shapes were extracted directly from the PDF; colors, type, and copy voice are transcribed from the kit; components are the kit's own building blocks (metric stats, goal/segment boxes, journey nodes) rather than an invented generic UI library, since the source deck doesn't define app-style primitives like inputs or dialogs.

## What Insider One actually is
The brand kit itself is for **partner/sales decks** — not a web or mobile app. Its "product" is a slide-deck system used by CS teams, built around: an approved logo lockup, a 10-color palette with matching gradients, two brand fonts (Red Hat Display for display type, Figtree for body), organic "blob" brand shapes, and modular graphics for the Architect journey-builder (channel icons, goal boxes, segment boxes, flow nodes) that CS teams paste into partner-specific decks.

## Index
- `styles.css` — root stylesheet; imports every token file below. Link this one file to get all tokens + fonts.
- `tokens/colors.css` — brand palette + gradients + semantic aliases
- `tokens/typography.css` — type scale (Red Hat Display / Figtree)
- `tokens/spacing.css` — spacing, radius, shadow, motion tokens
- `tokens/fonts.css` — `@font-face` rules (self-hosted, from `assets/fonts/`)
- `assets/logo/` — real Insider One logo lockups + mark tile, extracted from the brand kit PDF
- `assets/shapes/` — real brand "blob" shapes extracted from the brand kit PDF
- `assets/fonts/` — self-hosted Red Hat Display & Figtree variable woff2 files
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand) shown in the Design System tab
- `components/metrics/MetricStat.jsx` — big-number stat block (Metrics page)
- `components/journey/GoalBox.jsx`, `SegmentBox.jsx`, `JourneyNode.jsx` — Architect journey-builder graphics
- `components/brand/LogoLockup.jsx`, `ChannelChip.jsx` — logo lockup + channel/product icon chip
- `templates/partner-deck/` — sample partner-deck slide template (Title, Agenda, Metrics, Architect Journey, Goals, Quote, Closing)
- `SKILL.md` — Claude-Code-compatible skill wrapper for this design system

## Content fundamentals
Voice observed directly in the kit (internal CS enablement copy — treat as the closest available proxy for Insider's tone; external marketing copy wasn't in the source):
- **Direct, instructional, second-person.** Guidelines speak straight to the CSM: <the guidelines say> "Do not modify the logo in any way," "Refrain from re-creating, resizing disproportionately, or distorting the logo," "Keep slides clean and professional by using only approved visuals."
- **Bulleted, scannable, imperative-verb-led.** Sections open with a bolded action ("Start with Ready-to-Use Templates," "Stay on Brand," "Save Time, Stay Consistent") followed by sub-bullets marked with `○`.
- **One functional emoji as a section flag, not decoration.** Only one emoji appears in the whole 36-page kit: 🎯 marking "Toolkit Purpose." Emoji are not used as bullet icons, inline flourish, or in body copy — treat emoji as rare, purposeful section markers only, never decorative.
- **Confident, numeric proof-points for brand claims.** "Insider Powers Top Global Brands," "1500+ Top Global Brands" — short, stat-led headlines rather than narrative copy.
- **Plain, un-jargony English.** No wordplay, no forced enthusiasm. Sentences are short and procedural ("Just duplicate and personalize for your specific partner").
- Placeholder copy throughout the kit uses classic "Lorem Ipsum" filler labeled explicitly (e.g. "Lorem Ipsum: Segment 1") — a sign that exact wording in journey-builder mockups is meant to be replaced per-partner, not treated as brand copy itself.

## Visual foundations
- **Color:** A 10-color named palette — warm neutrals (Nova cream, Lunar mauve-gray) plus two dark "ink" tones (Dark Matter near-black, Eclipse deep plum-black) anchor most surfaces; **Solar** (red-orange, `#F4482B`) is the single hot accent used in the logo mark and for primary CTAs; **Celestial** (mint/teal, `#50E9C3`) is a secondary energetic accent. Two more duotones — **Orbit** (forest green) and **Stratos** (maroon-brown) — read as deep, moody alternates for section breaks. Every solid color also ships as a matching diagonal gradient (e.g. Solar gradient = `#E92E2F → #FF6126`), used for hero backgrounds and the logo mark itself rather than flat fills.
- **Type:** Red Hat Display (headlines, key visual moments) paired with Figtree (body, paragraphs, documentation). Both are geometric-humanist sans-serifs — Red Hat Display is more condensed/structural for impact at large sizes, Figtree is rounder and friendlier for reading.
- **Backgrounds:** Full-bleed solid or gradient fields are the norm (cream Nova for light slides, Eclipse/Dark Matter for dark slides). No photographic imagery, no repeating textures/patterns, no grain. The one recurring graphic motif is the **organic "blob" shape** — an amorphous rounded form (seen in the logo mark itself and as a standalone background shape) in the Solar red-orange gradient. No hand-drawn illustration style was present in the source.
- **Logo mark as motif:** The Insider One mark is an abstract ring/blob logotype rendered in the Solar gradient (light backgrounds, paired with black wordmark) or flat cream/Nova (dark backgrounds, monochrome). The same blob silhouette recurs as a decorative background shape independent of the logo — treat it as the brand's core geometric signature.
- **Animation / hover / press:** Not demonstrated in the source (a static brand-kit PDF has no interaction states). Component states below use restrained, standard defaults consistent with the brand's plain, unfussy tone: hover = ~8% darken or a subtle lift shadow, press = slight scale-down (0.98), transitions ~150–200ms ease-out. Flag these as authored defaults, not observed brand rules.
- **Borders & shadows:** No hard-bordered or left-accent-bar card style appears in the source. Cards/boxes in the journey-builder graphics (goal boxes, segment boxes) are soft, filled, unbordered shapes with generous corner radius and no border — shadows (where present) are soft and low-contrast rather than crisp/hard.
- **Corner radii:** Generously rounded throughout — journey-builder boxes and stat cards use large, soft radii (approximating 16–24px at deck scale); no sharp-cornered UI elements were observed.
- **Transparency / blur:** Not used in the source; kit graphics are flat, opaque fills.
- **Imagery color vibe:** No photography in the source kit at all — only flat color, gradient, and the one blob shape. If/when partner decks need photography, there's no brand precedent yet; ask before introducing a photographic style.
- **Layout rhythm (Architect journey builder):** A left-to-right flow of small rounded rectangular nodes (Starter → Wait → Channel/Action → Check elements) connected implicitly by sequence, each labeled with an icon + short text, gated by branching "Matching / Not Matching" decision points — this is Insider's own product surface (the journey/flow-builder canvas) simplified into brand-kit graphics for use in decks.

## Iconography
- The kit's own icon system is a set of **product/channel icons** (Web, App, Email, SMS, MMS, RCS, WhatsApp, Push Notification, TikTok, Search & Merch, Smart Recommender, Behavioral Analytics, Campaign Analytics, Conversational AI, Gamification, A/B Testing) plus a parallel flag-icon set for country/locale reference — these appear in the kit as vector art embedded directly in slides, not as a distributable icon font or SVG sprite, so the underlying files could not be extracted programmatically (PDF vector paths, not raster assets).
- **Substitution:** channel/product icons in this design system's `ChannelChip` component use **Lucide** (CDN, stroke-based, matches the kit's simple single-weight linear icon style) as the closest open substitute. This is a flagged substitution — swap in Insider's real icon set if/when it becomes available.
- No emoji are used as UI iconography anywhere in the kit (the one 🎯 is prose, not UI). No unicode-character icons observed.
- **No logo was invented.** The real Insider One logo (mark + wordmark, light- and dark-background versions) was extracted directly from the brand kit PDF and lives in `assets/logo/`. Client, investor, and competitor logo walls exist in the source kit (pages 22–28) but were **not** copied into this design system — those are third-party trademarks, out of scope for a reusable brand kit, and are noted here only for completeness. If you need to reproduce one of those slides, source the individual company logos directly from the partner/investor/competitor rather than this kit.

## Fonts
Red Hat Display and Figtree are both freely available on Google Fonts and were self-hosted here (`assets/fonts/*.woff2`, both variable fonts covering weight 400–700) — **no substitution needed**, these are the exact typefaces named in the brand kit.

## Caveats & what's missing
- No Figma file, codebase, or live product screenshots were provided, so the "Architect" journey-builder recreation in `templates/partner-deck/` is a simplified, cosmetic approximation of the brand kit's own journey-builder graphics — not a recreation of Insider's real product UI.
- Product-channel icons are Lucide substitutes (see Iconography above) — swap for Insider's real icon set if you can get it.
- Client/investor/competitor logo walls from the source kit were intentionally omitted (third-party trademarks).
- Avatars page (kit page 21) contained only placeholder/gray silhouette art, nothing extractable — omitted.

**Ask:** this system is built entirely from a 36-page internal brand-kit PDF with no product codebase or Figma behind it. If you have Insider's actual product Figma, marketing site, or app codebase, attach it and I'll extend this system with real UI kits (web app, marketing site) and the real Architect/journey-builder icon set — that would meaningfully sharpen the components and let me build a true UI kit instead of the current deck-only recreation. In the meantime, tell me if the color/type/voice reads right and I'll iterate.

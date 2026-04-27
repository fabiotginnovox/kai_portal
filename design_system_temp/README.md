# Kai Design System

**Product:** kaiAssist — an AI Maturity Assessment platform that helps companies diagnose their AI readiness, map a personalised roadmap, and implement intelligent automation.

**Sources provided:**
- `uploads/logoKaiAssist.png` — Primary logo (PNG)
- `uploads/~ai-94c1dd7e-f324-4824-a792-40d62deb3734_.tmp` — Logo source file (Adobe Illustrator PDF, titled "logoKai", created Dec 2025)
- `uploads/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf` — Primary display font (variable)
- `uploads/Fraunces-Italic-VariableFont_SOFT,WONK,opsz,wght.ttf` — Primary display font italic axis (variable)
- `uploads/screencapture-kai-portal-pages-dev-2026-04-23-14_47_07.png` — Full-page screenshot of the kai portal marketing site at `kai-portal-pages.dev`

---

## Products

| Product | Description |
|---------|-------------|
| **kaiAssist Portal** | Marketing + assessment web app. Landing page, 5-level AI maturity assessment flow, personalised report delivery. |

---

## CONTENT FUNDAMENTALS

**Tone:** Authoritative but approachable. Confident without being boastful. The voice is that of a knowledgeable guide — helping organisations navigate something complex without condescending. Think "trusted advisor", not "vendor".

**Voice characteristics:**
- Direct and action-oriented: "Find out where your company stands"
- Uses "you" and "your" throughout — second person, client-focused
- No first-person "I/we" overuse; when used, it's subtle: "We help companies…"
- Avoids jargon unless contextually necessary (e.g. "AI maturity" is core vocabulary)
- Rhetorical questions used sparingly but effectively in headlines: "Where does your company stand in the AI era?"

**Casing:**
- Headlines: Sentence case (not Title Case)
- CTAs: Sentence case with action verbs ("Start your assessment", "Learn more")
- Labels/eyebrows: ALL CAPS with wide letter spacing
- Nav links: Title case

**Punctuation:**
- Em dashes used in headlines for dramatic pauses: "Find out where your company stands — and what to do next"
- Ellipses avoided; definitive statements preferred
- No exclamation marks

**Emoji:** Not used. The brand is professional and restrained.

**Numbers:** Used prominently as hero stats ("5", "40+", "AI") — Fraunces display font makes them feel weighty and trustworthy.

**Copy examples from the site:**
- "Where does your company stand in the AI era?"
- "Three steps from diagnosis to intelligent automation"
- "The five levels of AI maturity"
- "Four concrete deliverables"
- "Find out where your company stands — and what to do next"
- "From stagnation begins the AI era conversation — where to start"

---

## VISUAL FOUNDATIONS

### Colors
The palette is organic, earthy, and considered — rooted in nature (kiwi fruit in logo) and avoiding tech-sector clichés.

| Role | Token | Value | Notes |
|------|-------|-------|-------|
| Page background | `--bg-page` | `#F4F0E7` | Warm cream — distinguishes from cold white SaaS |
| Surface / cards | `--bg-surface` | `#FAF8F4` | Slightly lighter cream |
| Dark section | `--bg-dark` | `#1A3830` | Deep forest green — used for footer, CTA bands |
| Primary interactive | `--accent-primary` | `#265C4A` | Forest teal — buttons, links, active states |
| Brand olive | `--brand-olive` | `#8A9C1F` | Logo color — used for eyebrow labels, accents |
| Body text | `--fg-primary` | `#1A1813` | Warm near-black |
| Muted text | `--fg-secondary` | `#6B6557` | Warm medium gray |

### Typography
**Display/Headlines:** Fraunces (variable font, provided)
- Used italic + low weight (300) for hero headlines — creates a distinctive, editorial quality
- Variable axes: `opsz` (optical size, higher = wider/more display), `SOFT` (adds rounded strokes), `WONK` (asymmetric letterforms)
- Hero usage: `font-weight: 300`, `font-style: italic`, `font-variation-settings: 'opsz' 144, 'SOFT' 30`
- H1/H2 usage: `font-weight: 600`, upright

**Body:** DM Sans (Google Fonts fallback — not provided but closest match to the clean sans-serif on the site)

**Mono:** JetBrains Mono / Fira Code (for any code/data contexts)

**Scale:** 12 → 80px. Hero at 72–80px; H1 52px; H2 40px; H3 32px; body 16px; labels 11px uppercase.

### Spacing
Base-4 grid. Key spacings: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128px. Sections get generous padding (64–96px vertical).

### Backgrounds
- Sections alternate between `--bg-page` (cream) and `--bg-surface` (lighter cream) — subtle warmth variation, not harsh contrast
- Dark "CTA band" sections use `--bg-dark` (forest green) — used for hero CTAs and footer
- No background images, gradients, or textures on the portal. Clean and confident.

### Cards
- White (`#FFFFFF`) on cream backgrounds — subtle lift
- Border-radius: 16px (`--radius-xl`) for content cards, 24px for modal/overlay cards
- Shadow: `0 4px 16px rgba(15,38,32,0.10)` — warm-tinted, subtle
- Some cards use 1.5px border (`--border-default`) instead of shadow — for outlined / secondary cards

### Borders
- Default: `1px solid #DDD8CD` (warm gray)
- Focus/active: `1.5px solid #3D8C72` (forest-400)
- All borders use warm-tinted grays, not cool/blue grays

### Corner Radii
- Small inputs/badges: 4–8px
- Cards: 16px
- Larger panels: 20–24px
- Buttons: `border-radius: 9999px` (pill shape — all CTAs are pill-shaped)

### Buttons
- All CTAs use pill shape (border-radius: 999px)
- Primary: forest green fill, white text
- Outline: transparent fill, forest green border + text
- Ghost: transparent fill, cream border, dark text
- Dark CTA band buttons: white fill, forest text (for contrast on dark bg)
- No icon-only buttons observed; text is always present

### Animations / Motion
- Minimal — the site feels deliberate and unhurried
- Hover: subtle background color shift (no transform/scale on links)
- Button active: slight `transform: scale(0.98)` press state
- Transitions: `0.15s` ease — fast and unobtrusive
- No scroll animations, parallax, or entrance animations observed
- Tab/step transitions: immediate with slight delay (~280ms) for perceived processing

### Hover / Press States
- Hover on buttons: darker fill (`--accent-hover`)
- Hover on text links: opacity reduction
- Press: `scale(0.98)`
- No color inversion on hover

### Iconography
See ICONOGRAPHY section below.

### Use of Transparency / Blur
- No frosted glass / backdrop-blur observed
- Overlays and modals use solid backgrounds
- Subtle transparency in muted text colors (e.g. `color: rgba(255,255,255,0.5)` on dark bg)

### Imagery
- No photography or illustrations observed in the provided screenshot
- Design is type + color + layout driven
- The kiwi icon in the logo is the most illustrative element — circular, green

### Color vibe of imagery
- Warm, organic, natural — the olive and forest greens evoke growth and nature
- Avoids cool blues, purples, or techy neons

---

## ICONOGRAPHY

**Approach:** Minimal. The portal design is largely icon-free — typographic hierarchy and layout carry the visual weight.

**Logo:** The kaiAssist logo features:
- Lowercase "kai" in olive-green (`#8A9C1F`), rounded letterforms
- "Assist" in the same olive green, slightly bolder weight
- A kiwi fruit icon above the "i" in "kai" — circular, dark teal (`#265C4A` fill), with a stylised seed pattern
- Created in Adobe Illustrator (source file provided as .tmp PDF)

**Icon system:** No dedicated icon font or SVG library was observed in the provided assets. The site uses text labels and step numbers instead of icons for navigation and process steps.

**Emoji:** Not used in UI.

**Recommendation:** If icons are needed, Lucide Icons (CDN: `https://unpkg.com/lucide@latest`) is a good match — thin stroke weight, clean geometric style that would complement the restrained typographic approach.

**Assets available:**
- `assets/logoKaiAssist.png` — primary logo, use on cream or dark backgrounds

---

## FILE INDEX

```
/
├── README.md                          ← This file
├── SKILL.md                           ← Agent skill descriptor
├── colors_and_type.css                ← All CSS variables: color, type, spacing, shadow, radius
├── fonts/
│   ├── Fraunces-Variable.ttf          ← Display font (upright axis)
│   └── Fraunces-Italic-Variable.ttf   ← Display font (italic axis)
├── assets/
│   └── logoKaiAssist.png              ← Primary logo
├── preview/
│   ├── brand-logo.html                ← Logo on light/dark backgrounds
│   ├── colors-brand.html              ← Full color scale (Forest, Olive, Cream)
│   ├── colors-semantic.html           ← Semantic color tokens
│   ├── type-display.html              ← Fraunces display type scale
│   ├── type-body.html                 ← DM Sans body type scale
│   ├── spacing-tokens.html            ← Spacing, radii, shadows
│   ├── components-buttons.html        ← Button variants
│   ├── components-cards.html          ← Card variants
│   ├── components-nav-badges.html     ← Nav, badges, step indicators
│   └── components-sections.html      ← Hero and dark section patterns
└── ui_kits/
    └── kai_portal/
        └── index.html                 ← Full interactive portal prototype
```

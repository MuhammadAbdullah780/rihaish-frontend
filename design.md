# Rihaish — Design System ("Verified Ground")

**Version:** 1.0
**Scope:** All Rihaish screens — web (desktop) and mobile (app)
**Purpose:** Paste this once into Google Stitch at the start of a project so you never
have to repeat the theme in individual screen prompts.

---

## 0. How to use this file with Google Stitch

1. Open a **new Stitch project** (one project for `web`, a separate one for `mobile` —
   do not mix modes in the same chat, Stitch carries layout assumptions across turns).
2. Set the Stitch mode toggle to **Web** or **Mobile** to match the project.
3. **First message in the chat:** paste the block in
   [Section 12 — Stitch System Message](#12-stitch-system-message-paste-this-first).
   Wait for Stitch to acknowledge / generate. Do not attach a screen request to it.
4. **Every message after that:** paste only the screen prompt from
   `design-prompts/web/*.txt` or `design-prompts/mobile/*.txt`.
5. If your Stitch build exposes a **theme / customise panel** (colours, fonts, corner
   radius), also set it there — panel values survive better than chat context.
6. **Context resets when you start a new chat.** Re-paste Section 12 at the top of
   every new chat, and re-paste it after ~15 turns if you notice drift.

**Stitch cannot produce animation.** Every screen file has a `MOTION HANDOFF` section.
That is for the React developer, not for Stitch. Do not paste it into a prompt.

---

## 1. Positioning & aesthetic

Rihaish is a verified real-estate platform for Pakistan. It sells **trust in land and
paperwork** — approval status, utilities, plot records, AI-checked pricing.

The visual language should feel like **a land-records authority redesigned by a good
product team**: precise, quiet, editorial, credible. Reference discipline (not pixels)
from Zameen.com's local familiarity, Compass / Sotheby's editorial restraint, and
Stripe's typographic hygiene.

It must NOT feel playful, futuristic, or template-generated.

---

## 2. Colour tokens

| Token                | Hex       | Use                                                        |
| -------------------- | --------- | ---------------------------------------------------------- |
| `brand-primary`      | `#0E5C4A` | Deep pine green. The ONLY brand + CTA colour               |
| `brand-primary-hover`| `#0A4739` | Hover / pressed                                            |
| `brand-tint`         | `#E8F1ED` | Selected chips, icon tiles, subtle fills                   |
| `ink-900`            | `#0F1720` | Headings, prices, primary values                           |
| `ink-600`            | `#4A5560` | Body copy, input labels                                    |
| `ink-400`            | `#79838E` | Meta text, captions, placeholders                          |
| `bg-page`            | `#F6F7F6` | Page background (warm neutral, never pure white)           |
| `surface`            | `#FFFFFF` | Cards, inputs, sheets, modals                              |
| `border-hairline`    | `#E3E7E4` | 1px borders only                                           |
| `accent-data`        | `#B4623A` | Terracotta. Data highlights ONLY (investment score, AI     |
|                      |           | price prediction, trend arrows). NEVER a button.           |
| `success`            | `#1E7F4F` | Approved, Verified, valid, match                           |
| `success-bg`         | `#E8F1ED` | Success banner fill                                        |
| `warning`            | `#B0761C` | Pending, Under review, expired                             |
| `warning-bg`         | `#FDF4E6` | Warning banner fill                                        |
| `danger`             | `#B3261E` | Rejected, destructive, form errors                         |
| `danger-bg`          | `#FDECEA` | Error banner fill                                          |

**Hard rule:** one green. If a screen shows two competing accent colours, one is wrong.
`accent-data` is never used for interactive elements.

---

## 3. Typography

| Role          | Font            | Notes                                              |
| ------------- | --------------- | -------------------------------------------------- |
| UI + body     | **Inter**       | All labels, buttons, inputs, tables, nav           |
| Numbers       | **Inter**       | `font-variant-numeric: tabular-nums` on every price, area, OTP digit, stat, timer |
| Display only  | **Source Serif 4 SemiBold** | Welcome hero, splash wordmark, marketing headings. Nowhere else. |

The serif is what stops the product reading as a template. Do not use it on form
headings, dashboards, or tables.

**Web scale (px):** 48 / 34 / 26 / 20 / 16 / 14 / 12
**Mobile scale (px):** 32 / 24 / 20 / 17 / 15 / 13

- Line-height: `1.5` body, `1.15` display
- Letter-spacing: `-0.01em` display, `0` body, `+0.04em` on 11–12px uppercase labels
- Input labels sit **above** the field. Never floating, never placeholder-as-label.

---

## 4. Shape, elevation, spacing

- **Radius:** `10px` cards / inputs / sheets, `8px` buttons, `999px` chips + badges only.
  Nothing bubbly. No `rounded-3xl`.
- **Mobile bottom sheets:** `20px` radius on top corners only, square bottom.
- **Shadow:** resting `0 1px 2px rgba(15,23,32,0.06)`; overlays/modals/sheets
  `0 12px 32px rgba(15,23,32,0.10)`. Nothing else. No coloured glow, ever.
- **Borders do the work, not shadows.**
- **Spacing:** 8px grid (4px allowed for icon/text gaps).

---

## 5. Layout grids

**Web**
- 12 column, `1280px` max content width, `24px` gutters, `48px` page side padding
- Top bar `72px`
- Two patterns only:
  - **Split 44 / 56** — form left on white, full-bleed photograph right (Welcome, Login)
  - **Centred card** — `#F6F7F6` page, white card `440px` (single-purpose) or
    `640px` (multi-field), `36–40px` padding

**Mobile**
- `390 x 844` reference, `20px` side margins, `48px` minimum touch target
- Header row `56px`
- Sticky bottom action bar: white, `1px #E3E7E4` top border, `20px` side padding,
  `12px` vertical padding, sits above the home indicator
- Primary buttons `52px` tall; inputs `52px` tall

---

## 6. Component specs

**Primary button** — solid `#0E5C4A`, white label, Inter SemiBold, `8px` radius,
48px tall (web) / 52px tall (mobile), full-width in forms.
Disabled = same colour at 40% opacity, no greying out.

**Secondary button** — white fill, `1px #0E5C4A` border, `#0E5C4A` label.

**Tertiary / outlined (social, neutral)** — white fill, `1px #E3E7E4` border,
`#0F1720` label, monochrome logo icons only (never multicolour Google "G").

**Text link** — Inter Medium, `#0E5C4A`, no underline; underline only for legal
document names, which are `#0F1720`.

**Input** — white fill, `1px #E3E7E4` border, `10px` radius, 48px (web) / 52px (mobile).
- Focus: `1px #0E5C4A` border + `2px` `#0E5C4A` ring at 20% opacity
- Error: `1px #B3261E` border + 13px `#B3261E` message with a 14px alert icon below
- Valid: 16px `#1E7F4F` check inset right
- Phone input: fixed `+92` prefix section in `#4A5560` tabular, separated by a
  `1px #E3E7E4` vertical divider
- Password input: 20px monoline eye icon in `#79838E` inset right

**Segmented control** — `#F6F7F6` track, `1px #E3E7E4` border, `8px` radius, 44px tall.
Active tab = white pill + faint shadow + `#0E5C4A` SemiBold label. Inactive = `#79838E`.

**Chip / badge** — full pill, 28px tall, 10px horizontal padding, Inter Medium 12px.
- Verified / Approved / Active: `#E8F1ED` fill, `#1E7F4F` text + check icon
- Pending / Under review: `#FDF4E6` fill, `#B0761C` text
- Rejected / Sold: `#FDECEA` fill, `#B3261E` text
- Neutral / unmet: `#F6F7F6` fill, `#79838E` text

**Selectable card (role, plan, option)** — `12px` radius, `1px #E3E7E4`, white, 20px
padding. Selected = `1.5px #0E5C4A` border, `#E8F1ED` fill, 20px solid green circle with
a white check in the top-right corner. No scale-up, no lift on selection.

**Icon tile** — 44x44px, `#E8F1ED` fill, `10px` radius, 22px monoline `#0E5C4A` icon.
Used as the visual anchor at the top of single-purpose screens.

**Strength meter** — four 3px rounded segments, 4px gaps.
1/4 `#B3261E`, 2/4 `#B0761C`, 3–4/4 `#1E7F4F`. Unfilled `#E3E7E4`.

**Progress steps** — thin 3px bars, one per step, filled `#0E5C4A` / unfilled `#E3E7E4`,
with `STEP 1 OF 2 - LABEL` in 11px uppercase `#79838E` above. Never numbered circles
with connecting lines.

**Info box** — `#F6F7F6` fill, `10px` radius, 12px padding, 16px monoline `#79838E` info
icon left, 12px `#79838E` text.

---

## 7. Iconography

- Lucide-style **monoline**, `1.5px` stroke
- 16px inline, 20px in inputs/rows, 24px nav, 22px in icon tiles
- Colour: `#0E5C4A` when meaningful, `#79838E` when decorative/utility
- **No emoji. No filled icons. No duotone. No 3D.**

---

## 8. Imagery

- Real **daylight photography** of Pakistani housing: gated-society streets
  (Bahria / DHA style), grey stone-clad houses, boundary walls, apartment blocks,
  plot signboards, paved lanes
- Natural, **slightly desaturated** colour. No HDR, no heavy grading
- **No posed stock people.** No one smiling at a laptop
- Text is never placed directly on a photograph. Use a white card over it instead
- Scrim when needed: bottom-to-top `rgba(15,23,32,0.28)`
- Crops: `16:9` hero, `3:2` property card, `1:1` avatar/thumb

**Optional decorative motif (the only one):** a thin `1px` monoline **cadastral survey
grid** — irregular rectangular land-plot outlines — in `#0E5C4A` at **6% opacity**,
bleeding off two edges. Used on Splash only. That is the entire decorative vocabulary.

---

## 9. Locale rules (Pakistan)

- Phone: `+92 3XX XXX XXXX`. Fixed `+92` prefix, never a flag emoji
- Currency: `Rs 2.4 Crore`, `Rs 45 Lakh` — never `$`, never `24,000,000`
- Area: `10 Marla`, `1 Kanal`, `5 Marla`, plus `sq ft` secondary
- Location format: `DHA Phase 6, Lahore`
- Masked contact: `+92 300 ... 4567`
- Copy tone: plain, factual, no exclamation marks.
  Write "Verify your number", not "Let's get you verified!"
- Leave horizontal room for Urdu — never rely on tight one-line English labels

---

## 10. Motion (developer reference — NOT for Stitch)

- Duration `160–240ms`, easing `cubic-bezier(0.2, 0, 0, 1)`
- Standard entrance: fade in + `8px` rise
- Stagger sequential content at `50–60ms`
- Selection / state change: colour cross-fade `120–160ms`
- **Never:** spring overshoot, bounce, shake-on-error, parallax, confetti, pulsing,
  rotating logos, skeleton shimmer sweeps faster than 1.2s
- Errors expand their container height (`180ms`) — they do not shake the field
- Success check marks draw their stroke over `320ms`

---

## 11. Banned list

Purple or blue gradients - gradient mesh backgrounds - glassmorphism / frosted glass -
neon glow - blurred colour blobs - sparkle or "AI magic" motifs - 3D isometric
illustrations - Poppins / Montserrat / Nunito - oversized rounded corners -
everything-centred dark hero - decorative emoji - multicolour brand logos - smiling stock
people with laptops - drop shadows larger than the spec - more than one accent colour per
screen.

---

## 12. Stitch system message (paste this first)

Copy everything between the markers into Stitch as the **first message of the chat**.

```
---------- COPY FROM HERE ----------
You are designing screens for "Rihaish", a verified real-estate platform for Pakistan.
Apply the following design system to EVERY screen I ask for from now on, without me
repeating it. Light mode only.

AESTHETIC: calm, editorial, institutional trust - like a land-records authority
redesigned by a modern product team. Precise, quiet, credible. NOT playful, NOT
futuristic, NOT a startup template.

COLORS: #0E5C4A deep pine green is the ONLY brand and CTA color (hover #0A4739, tint
#E8F1ED). #0F1720 headings and prices, #4A5560 body and labels, #79838E meta and
placeholders. Page background #F6F7F6. Cards, inputs and sheets pure white #FFFFFF.
All borders 1px #E3E7E4. Terracotta #B4623A ONLY for data highlights, never a button.
Semantic: success #1E7F4F on #E8F1ED, warning #B0761C on #FDF4E6, error #B3261E on
#FDECEA. Only one accent color per screen.

TYPOGRAPHY: Inter for all UI text, with tabular numerals on every price, area, timer,
stat and OTP digit. Source Serif 4 SemiBold for large display headlines ONLY (never on
form headings, dashboards or tables). Web sizes 48/34/26/20/16/14/12, mobile sizes
32/24/20/17/15/13. Line-height 1.5 body, 1.15 display. Input labels always sit above
the field, never floating, never placeholder-as-label. 11-12px uppercase labels get
0.04em letter-spacing.

SHAPE: radius 10px on cards, inputs and sheets; 8px on buttons; full pill only on chips
and badges. Mobile bottom sheets get a 20px radius on top corners only. Shadows are
almost invisible: 0 1px 2px rgba(15,23,32,0.06) resting, 0 12px 32px rgba(15,23,32,0.10)
for modals and sheets only. No colored glows. Borders do the work, not shadows. 8px
spacing grid.

COMPONENTS: primary button = solid #0E5C4A, white Inter SemiBold label, 8px radius, 48px
tall on web and 52px on mobile, full width in forms; disabled is the same green at 40%
opacity. Secondary button = white fill with 1px #0E5C4A border and #0E5C4A label.
Neutral/social button = white fill, 1px #E3E7E4 border, #0F1720 label, monochrome
single-color logos only. Inputs are white with a 1px #E3E7E4 border, 10px radius, 48px
tall on web and 52px on mobile; phone inputs carry a fixed "+92" prefix separated by a
1px vertical divider; password inputs have a 20px monoline eye icon inset right.
Segmented controls have an #F6F7F6 track with a 1px #E3E7E4 border, 44px tall, active
tab as a white pill with a faint shadow and #0E5C4A SemiBold label. Icon tiles are
44x44px, #E8F1ED fill, 10px radius, containing a 22px monoline #0E5C4A icon. Progress
indicators are thin 3px bars, one per step, never numbered circles with connecting lines.

LAYOUT: Web uses a 12-column grid, 1280px max content width, 48px page padding, 72px top
bar, and only two patterns - a 44/56 split with a form on white at left and a full-bleed
photograph at right, or a centered white card on #F6F7F6 that is 440px wide for
single-purpose screens and 640px for multi-field forms. Mobile is 390x844 with 20px side
margins, a 56px header row, 48px minimum touch targets, and a sticky bottom action bar
that is white with a 1px #E3E7E4 top border sitting above the home indicator.

ICONS: Lucide-style monoline, 1.5px stroke, 16px inline / 20px in inputs / 24px in nav.
#0E5C4A when meaningful, #79838E when utility. No emoji, no filled icons, no duotone,
no 3D.

IMAGERY: real daylight photographs of Pakistani housing - gated-society streets, grey
stone-clad houses, boundary walls, apartment blocks, paved lanes. Natural, slightly
desaturated color. No posed stock people. Never place text directly on a photograph;
put a white card over it instead. Scrim when needed is a bottom-to-top
rgba(15,23,32,0.28).

LOCALE: phone numbers as "+92 3XX XXX XXXX" with a fixed "+92" prefix and no flag emoji.
Prices as "Rs 2.4 Crore" or "Rs 45 Lakh", never dollars. Areas as "10 Marla" or
"1 Kanal". Locations as "DHA Phase 6, Lahore". Copy is plain and factual with no
exclamation marks.

STRICTLY AVOID on every screen: purple or blue gradients, gradient mesh backgrounds,
glassmorphism or frosted glass, neon glows, blurred color blobs, sparkle or AI-magic
motifs, 3D isometric illustrations, Poppins or Montserrat or Nunito, oversized rounded
corners, an everything-centered dark hero, decorative emoji, multicolor brand logos,
smiling stock people with laptops, and shadows heavier than specified.

Confirm you have this design system loaded. Do not generate a screen yet - I will send
screens one at a time.
---------- COPY UNTIL HERE ----------
```

---

## 13. Drift recovery

Stitch will drift toward a generic centred card with a blue button, usually around turn
5–8. Do not re-prompt the screen from scratch. Send this as a follow-up edit:

```
Correct this to the Rihaish design system: replace every button and accent color with
#0E5C4A, set card and input radius to 10px and button radius to 8px, remove all shadows
and use 1px #E3E7E4 borders instead, switch all text to Inter (keep Source Serif 4 only
on the large display headline), and remove any gradient, glass, glow or 3D illustration.
```

Two rounds of that reliably gets you back on-system.

---

## 14. Logo

Monoline square **plot-boundary outline** with one corner notched off and a check mark
inside, `2px` stroke, `#0E5C4A` — beside the wordmark **`rihaish`** set in Source Serif 4
SemiBold, all lowercase, `#0F1720`.

Sizes: 20px mark / 18px wordmark (compact top bar), 24px / 20px (standard top bar),
40px / 34px (splash web), 56px / 28px stacked (splash mobile).
Reversed (all white) when placed over a photograph.

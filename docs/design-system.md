# Design system

## Visual thesis

A calm, warm-light studio funnel with near-black type, one deep-violet action color, real owner media, and enough whitespace that the offer—not the interface—feels premium.

## Page plans

- Sales page: current promise and VSL → three-point value → selected proof → short fit → final CTA.
- Thank-you page: confirmation and current pre-call video → Terence → three preparation items → quiet close.

## Interaction thesis

1. A brief entrance sequence establishes hierarchy without delaying the message.
2. Video posters have one obvious play action and create provider players only after click.
3. Button/media feedback is fast and functional; reduced-motion visitors receive content immediately.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| Background | `#F8F6F1` | Main canvas and translucent header |
| Surface | `#F0EDE6` | Proof/about separation |
| Raised | `#FFFDF9` | Value/fit/call sections |
| Text | `#18171D` | Primary copy and logo treatment |
| Muted | `#59565D` | Supporting copy |
| Accent | `#6841CC` | CTAs, labels, play and focus |
| Rule | `rgba(24,23,29,.12)` | Dividers |

Typography is self-hosted Archivo Variable. Hero headings use tight display spacing, body copy remains 16–18px, labels are short uppercase orientation cues, and copy measures stay narrow.

## Composition

- Minimal sticky header: logo plus one CTA on the sales page; logo only after conversion.
- Current VSL is the dominant sales-page object.
- Main canvas is capped at 76rem; primary video is capped at 58rem.
- Sections use plain columns, lists, and rules. Media alone receives a framed surface.
- The violet final close is the only large accent field on the sales page.
- Thank-you closes in near-black to distinguish preparation from sales conversion.

## Video

- Sales VSL: current Vimeo `1137317543`, current Vimeo thumbnail, click-to-load iframe.
- Pre-call video: current Vimeo `1105995692` / `b7a12ad4e6`, separate current thumbnail, click-to-load iframe.
- Proof: three current Testimonial.to/Mux videos, provider posters, click-to-load players.
- No video is downloaded or rehosted.

## CTA hierarchy

Every sales CTA says “Book your free strategy call” and links to the clean Calendly event. It appears only in the header, hero, and final close. The thank-you page has no CTA.

## Responsive behavior

- 320–430px: compact header, left-aligned hero, full-width media/CTA, single-column proof and lists.
- 768px: stacked explanation and proof where needed; no compressed three-column copy.
- 1024px+: capped media and stable two-/three-column layouts.
- 390px receives special first-viewport and full-page review.

The automated matrix covers 320, 375, 390, 430, 768, 1024, 1440, and 1728px on both funnel routes.

## Accessibility and motion

- One `h1` per page, logical heading order, landmarks, skip link, visible focus, and 44px+ primary targets.
- Players have explicit button names, poster alt text, iframe titles, and no-JavaScript fallbacks.
- No autoplay audio, hover-only information, scroll lock, carousel controls, or color-only meaning.
- Reveals are opacity/translate only; `prefers-reduced-motion` removes movement and player autoplay.

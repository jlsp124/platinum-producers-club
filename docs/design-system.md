# Design system

## Direction after owner review

Platinum Producers Club is a single-purpose mentorship sales page. The earlier Steven Bartlett/personal-brand direction is deferred to a possible future Terence Lam personal website.

### Visual thesis

A calm, warm-white studio sales page with near-black typography, one deep-violet action color, real video, and enough restraint that the offer—not the interface—feels premium.

### Content plan

1. Outcome, visible VSL, and Calendly action.
2. Problem recognition and concrete mentorship value in one section.
3. Terence credibility and a four-step process.
4. Real student video/text proof.
5. Qualification and call mechanics together, then FAQ and final CTA.

### Interaction thesis

1. A short hero/section reveal establishes hierarchy without delaying the message.
2. Video posters have one obvious play action and create provider players only after click.
3. Button and FAQ feedback is fast and functional; reduced motion receives the same content immediately.

## Principles

- One offer, one audience, one primary action.
- The VSL is the first dominant visual.
- Every section explains, proves, qualifies, or converts.
- One cohesive environment; no chapter-by-chapter art-direction changes.
- Real people and media carry trust.
- Rules, alignment, type, and spacing create structure before cards or effects.
- Important proof is visible without carousel controls.
- The page remains complete if JavaScript or animation is unavailable.

## Color

| Token | Value | Use |
| --- | --- | --- |
| Background | `#F8F6F1` | Main canvas and translucent header |
| Surface | `#F0EDE6` | Subtle section separation |
| Raised surface | `#FFFDF9` | Media fallback and restrained depth |
| Text | `#18171D` | Primary copy and black logo treatment |
| Muted | `#59565D` | Supporting copy |
| Quiet | `#625E66` | Short qualifiers and disclaimers; AA-safe on both light surfaces |
| Accent | `#6841CC` | Primary CTAs, focus, play, and labels |
| Rule | `rgba(24,23,29,.12)` | Dividers |

The Ableton badge retains its authentic gold artwork; it is evidence, not a second interface accent.

## Typography

- Family: Archivo Variable, self-hosted under the SIL Open Font License.
- Hero: `clamp(3rem, 6vw, 5.25rem)` on larger layouts and a separately tested phone scale.
- Section headings: approximately 36–76px through `clamp()`.
- Body: 16–18px with 1.5–1.6 line height.
- Labels: 11–12px uppercase with tracking, used only where they materially improve orientation.
- Body measures stay near 43rem; the main sales canvas is capped at 76rem.

Headings use tight spacing and balanced wrapping. Copy remains sentence case except for short labels and CTA text.

## Composition and spacing

- Header: logo plus one strategy-call CTA; no chapter navigation or mobile menu.
- Hero copy: centred on larger screens, left aligned on phones.
- Hero offer/VSL measure: maximum 58rem so the VSL dominates without stretching beyond a comfortable viewing size.
- Main sales canvas: maximum 76rem with `clamp(16px, 4vw, 48px)` gutters.
- Major sections: `clamp(72px, 7.5vw, 116px)` vertical spacing, reduced again on phone layouts.
- Sections use plain columns, lists, and 1px rules; card containers are reserved for video players.
- Radius is capped around 12px and does not become a visual motif.

## Video

- Primary VSL: local optimized 16:9 poster, clear play control, supported Vimeo iframe created on click, no audio autoplay on load.
- Student proof: three public provider-hosted Mux posters and supported Mux iframe players created on click.
- Provider iframes replace the poster in place and preserve the 16:9 footprint.
- Remote video files are not downloaded or rehosted.
- Poster alt text, button labels, iframe titles, focus treatment, and no-JavaScript links preserve access.

## CTA hierarchy

Primary CTA:

- solid violet, white text, minimum 44px tap height;
- wording is “Book your strategy session” everywhere;
- every instance is a semantic same-tab anchor to the clean Calendly event.

The header, hero, coach, proof, fit/next-step, and final-close CTAs use the same visual/action language. There is no competing secondary offer.

## Motion

- Hero entrance: opacity plus a short vertical move, 600ms maximum.
- Section reveal: one transition per semantic group.
- Media hover: maximum 1.018 scale.
- CTA hover: 2px lift and 3px arrow travel.
- FAQ plus/minus: 180ms rotation.

Removed: scroll progress, sticky DAW sequence, carousel transitions, modal VSL, chapter animation, and continuous decorative motion.

Under `prefers-reduced-motion: reduce`, reveals render immediately, scrolling is not smoothed, autoplay is disabled, and transitions collapse to an effectively instant duration.

## Responsive behavior

- 320–430px: compact header, left-aligned hero, full-width 16:9 VSL, full-width conversion buttons, vertical problem/process/proof lists, no horizontal controls.
- 768px: one-column explanatory sections where reading order matters; process and video proof can use two columns without compression.
- 1024px: full three-video proof row and compact two-column sales sections.
- 1440–1728px: content remains capped; whitespace grows without stretching copy or media.

The automated matrix covers 320, 375, 390, 430, 768, 1024, 1440, and 1728px.

## Accessibility

- One `h1`, logical heading sequence, landmarks, and skip link.
- Visible `:focus-visible` treatment for every control.
- Minimum 44px interactive targets.
- Native `<details>` FAQs and real links.
- Play buttons have explicit accessible names; created iframes have titles.
- No color-only meaning, hover-only content, scroll locking, or autoplay audio.
- No content is hidden behind an interaction except media playback itself.

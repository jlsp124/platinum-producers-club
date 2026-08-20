# Design system

## Frontend design thesis

### Visual thesis

A monochrome studio editorial with warm signal-orange accents—an album campaign measured on a precise production timeline, led by real human photography rather than course-funnel decoration.

### Content plan

1. Hero: PPC brand, release-ready mentorship promise, Terence, direct Calendly CTA, and the short owner VSL.
2. Support: the tutorial/gear/trial-and-error problem and Terence’s relevant credibility.
3. Detail: the feedback-to-finished-work mentorship arrangement, proof, fit, coach profile, and FAQ.
4. Final CTA: a focused strategy-call invitation and preserved legal footer.

### Interaction thesis

1. A restrained hero entrance reveals the wordmark, headline, copy, and actions in a deliberate recording-count-in sequence while the media plane settles subtly into place.
2. A top playback line and sticky “arrangement” chapter translate scroll progress into a useful sense of where the visitor is in the story.
3. Manual testimonial changes, image zooms, underline motion, and CTA arrow travel reinforce affordance without autoplay or scroll hijacking.

## Principles

- Brand first, promise second, CTA third.
- One dominant idea per section.
- Real Terence imagery does narrative work.
- Type scale, crop, rhythm, and contrast create hierarchy before decoration.
- Cards are used only where the content changes interactively; most structure is created with rules and columns.
- The visual language remains usable if every animation is removed.

## Color

| Token | Value | Use |
| --- | --- | --- |
| Ink | `#090A0B` | Primary background and text on the accent |
| Ink raised | `#151719` | Media overlays and subtle depth |
| Paper | `#F2EFE7` | Primary light surface and text on ink |
| Paper muted | `#C9C5BB` | Secondary copy on dark surfaces |
| Signal | `#FF5A3D` | Primary actions, progress, focus accents, and selected state |
| Rule dark | `rgba(242,239,231,.22)` | Dark-surface dividers |
| Rule light | `rgba(9,10,11,.22)` | Light-surface dividers |

Signal orange is the only dominant brand accent. It is not used as body text on paper. Primary buttons use ink text on signal; focus rings use paper plus signal for visible separation.

## Typography

- Family: Archivo Variable, locally served under the SIL Open Font License.
- Display: condensed width, 650–800 weight, tight leading, uppercase only when the phrase is short.
- Body: normal width, 400–520 weight, relaxed leading.
- Metadata: normal/condensed width, 500–650 weight, uppercase with deliberate tracking.

Fluid sizes use `clamp()` rather than breakpoint jumps:

- Hero display: approximately 55px at 320px to 172px on large desktops.
- Section display: approximately 38px to 92px.
- Quote: approximately 30px to 64px.
- Body large: approximately 18px to 24px.
- Body: 16px to 19px.
- Metadata: 11px to 13px.

Line lengths are capped near 55–68 characters for body copy. Display copy is manually balanced with narrow text measures rather than forced `<br>` tags where possible.

## Grid

- Full-bleed hero/media planes remain edge-to-edge.
- Editorial content uses a 12-column grid above 1024px.
- Main canvas max width: 1600px.
- Reading measures use 5–7 columns.
- Side gutter: `clamp(16px, 3.4vw, 64px)`.
- Major section padding: `clamp(88px, 12vw, 192px)`.
- Rules align across sections to make the long page feel like one system.

## Spacing

The scale is based on 4px and composed primarily from 8, 12, 16, 24, 32, 48, 64, 96, 128, and 192px. Repeated small equal gaps are avoided; close elements are grouped and groups receive larger separation.

## Image treatment

- Hero: full-bleed owner video poster with a dark tonal overlay and responsive crop centered on Terence.
- Coach portrait: black-and-white existing image, hard crop, no rounded container, subtle signal wash on interaction.
- Decorative treatment: grain-like CSS texture at very low opacity; no downloaded texture and no animated noise.
- Images receive explicit dimensions/aspect ratios to prevent CLS.
- Below-fold imagery is lazy-loaded; the hero derivative is preloaded.
- Alt text describes meaningful subject/context; purely decorative crops use empty alt text.

## Borders and surfaces

- Rules are predominantly 1px.
- Corners are square or minimally softened (0–2px).
- No glassmorphism.
- No generic feature-card mosaic.
- Shadows are reserved for the video dialog and focus separation, never for routine sections.

## CTA hierarchy

### Primary

- Solid signal background, ink text, 52–60px minimum height, arrow motion on hover/focus.
- Wording: “Book a strategy call.”
- Direct semantic `<a>` to the clean Calendly event.

### Secondary

- Paper/ink text link with an underline or 1px border.
- Wording: “Watch the 4-minute overview” or context-specific anchor navigation.

All tap targets are at least 44×44px and remain understandable without hover.

## Motion language

- Hero entrance: 500–850ms staggered transform/opacity with a short easing curve.
- Section reveal: 450–700ms, small distance, one reveal per semantic group.
- Scroll progress: transform-only scale on a fixed 2px line.
- Sticky method: content cross-emphasis only; no scroll lock or hijacking.
- Media hover: maximum 1.025 scale.
- CTA arrow: maximum 6px travel.
- Testimonial change: opacity/translate transition under 350ms.

No effect continuously chases the cursor. No text is animated while the user is trying to read it.

## Reduced motion

Under `prefers-reduced-motion: reduce`:

- reveal elements render immediately;
- smooth scrolling is disabled;
- parallax/scroll transforms stop;
- testimonial transitions become instant;
- the video never autoplays;
- CTA and image transforms are removed;
- the page remains visually complete.

## Responsive behavior

### 320–479px

- 16px side gutters.
- Compact logo and native disclosure-style menu.
- Hero uses a tall crop and fits its brand, promise, CTA, and video action inside the initial viewport where device height allows.
- Display words do not exceed the viewport; `overflow-wrap` and tested line balance are mandatory.
- Sticky method becomes a normal vertical sequence.
- Testimonial controls remain visible and do not rely on horizontal drag.

### 480–767px

- Slightly wider measures and two-up metadata where useful.
- CTA can become auto-width but never full-screen tall.

### 768–1023px

- Purpose-built two-column compositions.
- The old three-column squeeze is not repeated.
- Navigation remains compact until the full desktop layout has adequate space.

### 1024–1439px

- Full navigation, 12-column grid, sticky arrangement sequence, and offset media.

### 1440px+

- Scale and whitespace increase; line lengths and image crops remain constrained.
- Content does not simply stretch.

## Accessibility

- One `h1`, logical `h2`/`h3` sequence, landmarks, and skip link.
- Visible `:focus-visible` treatment on every control.
- Dialog focus trap, Escape close, labelled close button, and focus return.
- Mobile menu exposes expanded state and closes on Escape/link selection.
- Testimonial controls have names and status announcement.
- No color-only meaning.
- Minimum AA contrast targets.
- No hover-only information.

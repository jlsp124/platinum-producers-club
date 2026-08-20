# Redesign rationale

## Owner-review correction

Terence’s direct review established that the earlier redesign was attractive but too scattered and over-designed for the business goal. Platinum Producers Club is a single-offer mentorship sales page, not a personal-brand editorial site.

The Steven Bartlett direction was a category error for PPC and is deferred to a possible future Terence Lam personal website. Creator College informed the revised sales discipline—one offer, visible media, linear argument, concrete value, human credibility, proof, repeated action, and FAQ—without donating branding, copy, proprietary assets, code, layouts, urgency, guarantees, or pricing mechanics.

See `reference-sales-page-analysis.md` for the concise three-way sales-system comparison.

## Audit finding → revised response

| Finding | Revised response |
| --- | --- |
| Production CTAs are inert | Six normal semantic Calendly anchors use the verified clean event URL and are covered by automated tests |
| Primary VSL was secondary in the repository redesign | The 6:48 “VSL new3-FINAL” is the dominant hero media and loads through Vimeo only after click |
| Offer explanation was buried in editorial storytelling | The first sections plainly name the buyer’s problem and what direct mentorship provides |
| Sticky DAW/arrangement metaphor required interpretation | Four short static steps explain the process without custom interaction |
| Section numbering made the page a magazine feature | Functional labels replace editorial chapters; only the actual process uses step numbers |
| Dark/light/orange systems felt stitched together | One warm-light system with subtle surface changes and one violet action color runs through the page |
| Testimonial carousel hid proof | Three real provider-hosted video testimonials and three written excerpts are visible in sequence |
| Large external wall was heavy and visually inconsistent | Curated Mux players instantiate only on click; no video is downloaded or rehosted |
| Terence story was too broad | One short coach section answers why he is relevant to this mentorship |
| High-friction 14-step application | Fit and FAQ retain qualification intent; Calendly remains the only scheduling/data surface |
| Old mobile funnel clipped at 320–390px | Phone-first layout is tested at 320, 375, 390, and 430px plus tablet/desktop targets |
| Broken legal host and weak SEO | Existing local legal recovery, preview noindex, canonical, sitemap, robots, and migration controls remain intact |

## Sales and copy decisions

- The strongest promise is finishing music the producer is proud to release—not guaranteed charts, placements, or income.
- The page preserves the old funnel’s useful school/tutorial/gear logic without its unsupported scarcity line.
- Mentorship is made concrete through direct feedback, individual direction, next steps, workflow guidance, and accountability.
- Existing experience, artist, Ableton, and student claims remain at or below their current public strength and stay on the owner-verification checklist.
- Video-only testimonials are not assigned invented spoken outcomes. Cedrick and Kim context is explicitly tied to separately published written reviews.
- The call is described as a fit conversation, not acceptance or a guaranteed coaching outcome.

## Visual decisions

- The VSL replaces a full-bleed campaign image as the hero anchor.
- The existing PPC wordmark, studio video poster, Terence portrait, and Ableton badge provide brand continuity.
- One warm-white canvas, near-black type, restrained violet, 1px rules, and capped measures keep the page premium without becoming the experience.
- Sections use plain grids and lists; card-like framing is limited to media.
- The final violet close gives the long page one deliberate visual peak.

## Comparison-led cleanup

The current light page was retained as the baseline. Matching 390px, 768px, and 1440px browser captures showed that Creator College was simpler directly beneath its VSL and that old PPC moved from video to benefit points with less copy. The cleanup therefore consolidated problem/value and fit/next-step sections, shortened video-testimonial captions and process copy, removed boxed CTA callouts and the public audit-style claim note, and standardized every CTA label. The page moved closer to old PPC’s pacing without returning to its crude styling or losing the new video proof.

## Motion and performance

Motion is limited to short reveal, button, media-hover, and FAQ transitions. Removed systems include scroll progress, sticky storytelling, carousel motion, modal video, chapter transitions, and menu animation.

The primary Vimeo and three Mux players are click-to-load. Initial rendering remains static Astro HTML/CSS with local font and optimized owner imagery. No animation or UI runtime is added.

## Technical continuity

The revision preserves:

- Astro static project structure and TypeScript;
- GitHub Pages workflow and repository base-path handling;
- responsive image generation and local font serving;
- semantic headings, skip link, focus states, reduced motion, and axe tests;
- Calendly URL/UTM handling;
- legal pages, canonical/social metadata, robots, sitemap, and preview noindex guard;
- responsive screenshot tooling, Playwright validation, migration documents, and Git history.

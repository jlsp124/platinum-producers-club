# Testing and performance report

Date: 2026-08-20 (America/Vancouver)

This report covers the separate static Platinum Producers Club redesign preview. It is not evidence that the production domain, DNS, Calendly configuration, analytics, or a complete booking flow has been changed.

## Automated validation

The release gate is `npm run qa`. It performs:

1. generated favicon and social-asset validation;
2. `astro check` and a production static build;
3. HTML validation over every generated HTML document;
4. Playwright Chromium tests at 1440×1000, 1728×1000, 768×1024, 1024×768, 430×932, 390×844, 375×812, and 320×700;
5. axe WCAG 2 A/AA and 2.1 A/AA checks at every viewport.

Final local result: **88 passed, 0 failed, 0 skipped**. `astro check` reported 0 errors, 0 warnings, and 0 hints; generated HTML validation also passed.

The browser suite verifies:

- the page presents one focused offer without horizontal overflow or broken responsive images;
- every application CTA resolves to the verified Calendly event;
- only Calendly-supported UTM parameters are forwarded;
- CTA activation emits a local, privacy-conscious `ppc:calendly-click` event without sending data or inventing an analytics ID;
- the primary Vimeo VSL is visible in the hero and loads only after an explicit click;
- three real Mux-hosted testimonial videos are available and each player loads only when selected;
- the header has no distracting navigation or mobile-menu state;
- FAQ disclosure behavior remains predictable;
- local legal/document routes return successful direct responses;
- no console errors, failed same-origin requests, or same-origin 4xx/5xx responses;
- reduced-motion content remains visible and effectively transition-free;
- skip-link and keyboard focus behavior.

The GitHub workflow repeats the complete gate before deployment, then rebuilds with the repository base path and verifies that every local asset and page reference carries that prefix.

## Lighthouse

Measured against the final production static build on localhost with Lighthouse 13.4.1 and Chromium 151. Scores are lab measurements, not field Core Web Vitals.

| Profile | Performance | Accessibility | Best practices | SEO | FCP | LCP | TBT | CLS | Initial transfer |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 99 | 100 | 100 | 69 | 1.4 s | 2.0 s | 0 ms | 0 | 206 KiB |
| Desktop | 100 | 100 | 100 | 69 | 0.3 s | 0.5 s | 0 ms | 0 | 243 KiB |

The preview SEO score of 69 is intentional: both the meta robots directive and `robots.txt` prevent GitHub Pages from competing with the current production site. Titles, descriptions, canonical production URLs, Open Graph/Twitter metadata, favicon, sitemap, semantic headings, and production-mode indexing behavior remain implemented. Set `PUBLIC_SITE_MODE=production` only during an approved production cutover.

## Performance decisions

- Astro produces static HTML and CSS; the small interaction script is inlined and no UI or animation runtime is shipped.
- The 6:48 owner-controlled Vimeo VSL is impossible to miss visually, but its iframe and player runtime do not load until the visitor clicks the poster.
- The three owner-controlled Mux testimonial players use provider thumbnails and do not instantiate until selected.
- Archivo is self-hosted to avoid third-party font latency and privacy exposure.
- Local images are delivered through responsive AVIF/WebP derivatives with explicit dimensions or aspect ratios.
- Motion is limited to opacity/transform reveals and button feedback, and is removed under reduced-motion.
- The generated `dist/` contains 32 files and about 1.17 MiB across all responsive variants; roughly 206–243 KiB transfers on the initial view.

The deliberate tradeoff is allowing lightweight provider thumbnail requests for the proof videos below the fold. This lets visitors recognize that the stories are real video testimonials without paying the cost of three full players on initial load.

## Screenshot review loop

Before-redesign captures live in `docs/screenshots/before/`; final redesign captures live in `docs/screenshots/qa/`.

Seven meaningful visual refinement passes were completed, including three after the final light-theme direction. Each pass captured both the hero and complete page at all eight target widths (16 current final images):

- 1440px and 1728px desktop;
- 768px and 1024px tablet;
- 430px, 390px, and 375px phones;
- 320px narrow phone.

The refinement loop removed editorial chapter styling and the DAW metaphor, tightened the hero so the VSL and CTA dominate the first view, converted the final identity to one cohesive light system, simplified proof into direct video cards, corrected logo and portrait aspect ratios, balanced the testimonial grid at 1024px, removed the last decorative hero glow, required provider posters to finish before QA capture, and verified mobile type, CTA, video, and horizontal-scroll behavior.

## Manual/live checks still required at production migration

- Real-device Safari testing is recommended because this run used Chromium automation.
- A completed Calendly booking, reminder, meeting link, reschedule, and cancellation flow requires owner permission and must happen during migration QA.
- Production analytics and consent require owner account and ID decisions.
- Field Core Web Vitals require real production traffic.

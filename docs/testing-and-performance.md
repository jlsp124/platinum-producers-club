# Testing and performance report

Date: 2026-08-20 (America/Vancouver)

This report covers the separate static redesign preview. It is not evidence that the current production domain, production DNS, Calendly configuration, analytics, or a complete booking has been changed or tested end-to-end.

## Automated validation

The release gate is `npm run qa`. It performs:

1. generated favicon/social asset validation;
2. `astro check` and a production static build;
3. HTML validation over every generated HTML document;
4. Playwright Chromium tests at 1440×1000, 1728×1000, 768×1024, 390×844, and 320×700;
5. axe WCAG 2 A/AA and 2.1 A/AA checks at every viewport.

Final local result: **55 passed, 0 failed, 0 skipped**. `astro check` reported 0 errors, 0 warnings, and 0 hints; generated HTML validation also passed.

Final published result: **55 passed, 0 failed, 0 skipped** against `https://jlsp124.github.io/platinum-producers-club/`. A separate interactive browser pass confirmed desktop and 390px rendering, production canonical plus preview noindex metadata, successful repository-prefixed image loading, and an actual published hero-CTA click landing on `https://calendly.com/terence-p-lam/release-ready-strategy-call`.

The browser suite verifies:

- no horizontal overflow;
- all responsive images load with non-zero intrinsic size;
- every major CTA resolves to the clean verified Calendly event;
- only Calendly-supported UTM parameters are forwarded;
- the native video dialog opens, uses the preserved Vimeo source, closes, and restores focus;
- testimonial and FAQ controls;
- mobile menu state and Escape behavior;
- desktop navigation visibility;
- local legal/document routes return successful direct responses;
- no console errors, failed same-origin requests, or same-origin 4xx/5xx responses;
- reduced-motion content remains visible and effectively transition-free;
- skip-link and keyboard focus behavior.

The GitHub workflow repeats the complete gate before deployment, then rebuilds with the repository base path and verifies that all local asset/page references carry that prefix.

## Lighthouse

Measured against the production static build on localhost with Lighthouse 13.4.1 and Chromium 151. Scores are lab measurements, not field Core Web Vitals.

| Profile | Performance | Accessibility | Best practices | SEO | FCP | LCP | TBT | CLS | Initial transfer |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 99 | 100 | 100 | 69 | 1.4 s | 2.0 s | 0 ms | 0 | 180 KiB |
| Desktop | 100 | 100 | 100 | 69 | 0.3 s | 0.4 s | 0 ms | 0 | 205 KiB |

The preview SEO score of 69 is intentional: both the meta robots directive and `robots.txt` prevent GitHub Pages from competing with the current production site. Titles, descriptions, canonical production URLs, Open Graph/Twitter metadata, favicon, sitemap, semantic headings, and production-mode indexing behavior are implemented. Set `PUBLIC_SITE_MODE=production` only during an approved production cutover.

## Performance decisions

- Astro produces static HTML and CSS; the small interaction script is inlined and no UI or animation runtime is shipped.
- The above-fold image is an existing Terence/PPC asset delivered through responsive AVIF/WebP derivatives with explicit dimensions.
- The Vimeo player does not load until the visitor explicitly opens the overview dialog.
- Archivo is self-hosted to avoid third-party font latency and privacy exposure.
- Below-fold images are lazy-loaded and have explicit dimensions/aspect ratios, resulting in measured CLS 0.
- Motion is transform/opacity based, progressive, and removed under reduced-motion.
- The generated `dist/` contains 33 files and about 1.19 MiB across all responsive variants; only roughly 180–205 KiB transfers on the initial view.

The deliberate tradeoff is retaining a real photographic hero rather than reducing the first view to typography only. Its responsive derivative is the LCP element, but keeps the page personal and credible while remaining within the measured two-second mobile LCP lab result.

## Screenshot review loop

Before-redesign captures live in `docs/screenshots/before/`; redesign captures live in `docs/screenshots/qa/`.

The visual review included:

- 1440px desktop hero and complete page;
- 1728px large desktop hero and complete page;
- 768px tablet hero and complete page;
- 390px phone hero and complete page;
- 320px narrow phone hero and complete page.

Changes made during the loop included widening the desktop display measure so “release-ready” resolves as one intentional line while the CTA remains in the first 720px-tall desktop viewport, preserving a separate multi-line mobile title, increasing the preserved footer disclosure contrast to AA, and correcting the Ableton credential image aspect ratio.

## Manual/live checks still required at production migration

- Real-device Safari testing is recommended because this run had Chromium automation only.
- A completed Calendly booking, reminder, meeting link, reschedule, and cancellation flow requires owner permission and must happen during migration QA.
- Analytics, consent, and Calendly conversion events require the owner’s account/ID decisions.
- Field Core Web Vitals require real production traffic.

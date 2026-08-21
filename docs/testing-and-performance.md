# Testing and performance report

Date: 2026-08-21 (America/Vancouver)

This report covers the isolated GitHub Pages preview. It is not evidence that production DNS, the production website, Calendly settings, tracking, or redirects were changed.

## Automated gate

`npm run qa` completed successfully:

- Astro check: 0 errors, 0 warnings, 0 hints
- Static production build: passed; `/thankyou/` generated
- Generated HTML validation: passed
- Playwright/axe: **104 passed, 0 failed, 0 skipped**

Every browser test runs at:

- 320×700
- 375×812
- 390×844
- 430×932
- 768×1024
- 1024×768
- 1440×1000
- 1728×1000

Both `/` and `/thankyou/` are exercised across the matrix. The suite verifies:

- no horizontal overflow or broken images;
- homepage maximum of five sections and 320 main-content words;
- exact current headline and CTA wording;
- three clean Calendly links on the sales page and none on `/thankyou/`;
- supported UTM forwarding only;
- current sales Vimeo `1137317543` and absence of historical VSL `1050034975`;
- current pre-call Vimeo `1105995692` / `b7a12ad4e6` and separation from the sales VSL;
- three current Testimonial.to/Mux videos and click-to-load behavior;
- direct-load resolution for all same-origin links;
- no local console errors, failed requests, or 4xx/5xx responses;
- axe WCAG 2 A/AA and 2.1 A/AA checks;
- skip-link/focus behavior and reduced-motion behavior.

## Content-density evidence

The previously deployed light homepage measured:

- 706 rendered main-content words
- eight main sections
- six Calendly CTAs
- approximately 7,556px page height at 390×844

The revised homepage measures:

- 234 rendered main-content words
- five main sections
- three Calendly CTAs
- approximately 4,790px page height at 390×844

That is a **66.9% reduction in main-content words** and an approximately **36.6% reduction in 390px page height**. The revised `/thankyou/` measures 185 main-content words, four sections, no Calendly CTA, and approximately 3,104px total page height at 390×844.

## Screenshot evidence

`npm run screenshots` saved 32 fresh route-specific screenshots: hero and full page for both routes at all eight widths.

Key files:

- `docs/screenshots/qa/homepage-desktop-1440-full.png`
- `docs/screenshots/qa/homepage-iphone-390-hero.png`
- `docs/screenshots/qa/homepage-iphone-390-full.png`
- `docs/screenshots/qa/thankyou-desktop-1440-full.png`
- `docs/screenshots/qa/thankyou-iphone-390-hero.png`
- `docs/screenshots/qa/thankyou-iphone-390-full.png`
- matching 320, 375, 430, 768, 1024, and 1728 captures

Manual screenshot review confirmed that the 390px sales hero contains the complete promise, current VSL poster, and CTA within the first viewport; proof is the largest remaining section; and the thank-you hero prioritizes confirmation and pre-call playback.

## Performance decisions

- Static Astro HTML/CSS and a small progressive-enhancement script.
- Locally served variable font and optimized local owner portrait/logo.
- Current Vimeo and Mux players instantiate only after a visitor presses play.
- No UI framework, carousel, third-party testimonial wall runtime, client-side router, analytics ID, or scheduler embed ships.
- Remote provider thumbnails are the deliberate tradeoff for recognizable current video proof without initial player downloads.

No new Lighthouse score is claimed for this revision; the full build, rendered media, responsive, accessibility, link, request, console, and repository-path gates are the release evidence recorded here.

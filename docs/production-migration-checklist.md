# Production migration checklist

This is a plan only. Do not point `platinumproducersclub.com` at the preview, alter production DNS, change Calendly, or cancel the current funnel service during the redesign/approval phase.

## Approval and content freeze

1. Terence approves the responsive GitHub Pages preview.
2. Confirm every public claim, credit, credential, testimonial, result, and offer detail in `content-needing-owner-verification.md`.
3. Replace preview-grade imagery with approved high-resolution owner assets where available.
4. Confirm the final Privacy Policy, Terms, disclaimer, privacy contact, governing jurisdiction, effective date, and cookie/consent requirements with the appropriate owner/legal reviewer.
5. Confirm current pricing/investment language and remove any content that should remain call-only.

## Funnel and tracking validation

6. Confirm every strategy-call CTA resolves to `https://calendly.com/terence-p-lam/release-ready-strategy-call` with no stale month query.
7. With explicit permission, complete one end-to-end Calendly test booking and verify confirmation, calendar event, meeting link, reminders, time zone, reschedule/cancel links, and any required questions.
8. Confirm the intended analytics stack, consent behavior, Meta Pixel ownership, UTM conventions, outbound-click event, and Calendly completed-booking event.
9. Confirm no preview/test traffic or IDs contaminate production reporting.

## Current-state capture and rollback

10. Capture current DNS records, TTLs, SSL/TLS state, redirects, current route list, analytics IDs, and screenshots.
11. Export/back up useful content, images, videos, survey configuration, contacts/data (only where authorized), and settings from the old website platform.
12. Keep the old service available and unchanged during cutover for rollback; do not cancel it yet.

## Production hosting and domain

13. Choose the production static host and document ownership/access. GitHub Pages can host the site initially if its operational constraints are acceptable.
14. Configure the production custom domain without changing Calendly.
15. Configure and verify TLS/HTTPS and HTTP→HTTPS behavior.
16. Configure `www`/apex behavior and one canonical host.
17. Add required redirects from `/mentor`, `/mentor1`, `/mentor2`, `/schedulecall`, and `/sorry` to the appropriate replacement location. Preserve campaign query parameters where applicable.
18. Verify the 404 page and refresh/direct-load behavior on every public route.

## SEO launch state

19. Remove preview `noindex`/disallow directives only after the production domain serves the approved site.
20. Confirm the production canonical URL on every page.
21. Update and submit the production sitemap and robots file.
22. Verify title, description, Open Graph/Twitter image, favicon, semantic headings, alt text, and structured data against approved facts.
23. Check Search Console/Bing Webmaster ownership and inspect the live production URL.

## Launch QA

24. Re-run Chromium desktop, current phone, 320px, tablet, large-desktop, keyboard, reduced-motion, accessibility, link, console, network, performance, and CTA tests on the production domain.
25. Test the live site over a normal mobile connection and at least one real iPhone/Android device if available.
26. Verify all legal routes and contacts.
27. Verify analytics/consent and the Calendly conversion path in production.
28. Monitor HTTPS, 404s, availability, CTA errors, analytics, and booking volume during the rollback window.

## Retirement decision

29. Keep the old website platform available briefly until DNS, TLS, redirects, SEO, analytics, mobile behavior, legal pages, and the complete Calendly flow are stable.
30. Only after the successful migration and rollback window should Terence consider cancelling the old approximately $100/month website service. Do not promise the roughly $1,200/year saving until the replacement and all previously used platform features are verified.


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
7. Publish and verify `https://platinumproducersclub.com/thankyou` before changing any post-booking behavior.
8. With Terence signed into the Calendly account and only after explicit approval, configure the existing **Release Ready Strategy Call** event:
   1. From the Calendly Home/Scheduling page, select the event type.
   2. Select **More options**.
   3. Expand **Confirmation Page**.
   4. Under **After Booking**, choose **Redirect to an external site**.
   5. Enter exactly `https://platinumproducersclub.com/thankyou` as the Redirect URL.
   6. Leave **Pass event details to your redirected page** off unless an approved analytics/privacy requirement needs those query parameters. The static page does not consume them.
   7. Select **Save changes**.
9. The external redirect requires a paid Calendly plan. These steps follow Calendly’s current [confirmation-page documentation](https://help.calendly.com/hc/en-us/articles/226767207-Display-and-customize-the-event-confirmation-page). Re-check the labels in the owner’s account at migration time because Calendly can change its UI.
10. With explicit permission, complete one end-to-end test booking. Verify the successful booking redirects to `/thankyou`, the current pre-call Vimeo loads, the confirmation/calendar event includes web-conferencing details, and reminders, time zone, reschedule/cancel links, and any required questions work. Cancel or label the test booking according to the owner’s preference.
11. Confirm the intended analytics stack, consent behavior, Meta Pixel ownership, UTM conventions, outbound-click event, and Calendly completed-booking event.
12. Confirm no preview/test traffic or IDs contaminate production reporting.

## Current-state capture and rollback

13. Capture current DNS records, TTLs, SSL/TLS state, redirects, current route list, analytics IDs, and screenshots.
14. Export/back up useful content, images, videos, survey configuration, contacts/data (only where authorized), and settings from the old website platform.
15. Keep the old service available and unchanged during cutover for rollback; do not cancel it yet.

## Production hosting and domain

16. Choose the production static host and document ownership/access. GitHub Pages can host the site initially if its operational constraints are acceptable.
17. Configure the production custom domain without changing Calendly.
18. Configure and verify TLS/HTTPS and HTTP→HTTPS behavior.
19. Configure `www`/apex behavior and one canonical host.
20. Add required redirects from `/mentor`, `/mentor1`, `/mentor2`, `/schedulecall`, and `/sorry` to the appropriate replacement location. Preserve campaign query parameters where applicable.
21. Verify the 404 page and refresh/direct-load behavior on every public route, including `/thankyou` and `/thankyou/`.

## SEO launch state

22. Remove preview `noindex`/disallow directives only after the production domain serves the approved site.
23. Confirm the production canonical URL on every page.
24. Update and submit the production sitemap and robots file.
25. Verify title, description, Open Graph/Twitter image, favicon, semantic headings, alt text, and structured data against approved facts.
26. Check Search Console/Bing Webmaster ownership and inspect the live production URL.

## Launch QA

27. Re-run Chromium desktop, current phone, 320px, tablet, large-desktop, keyboard, reduced-motion, accessibility, link, console, network, performance, and CTA tests on both `/` and `/thankyou/` on the production domain.
28. Test the live site over a normal mobile connection and at least one real iPhone/Android device if available.
29. Verify all legal routes and contacts.
30. Verify analytics/consent and the complete sales page → Calendly → successful booking → `/thankyou` path in production.
31. Monitor HTTPS, 404s, availability, CTA errors, analytics, and booking volume during the rollback window.

## Retirement decision

32. Keep the old website platform available briefly until DNS, TLS, redirects, SEO, analytics, mobile behavior, legal pages, and the complete Calendly flow are stable.
33. Only after the successful migration and rollback window should Terence consider cancelling the old approximately $100/month website service. Do not promise the roughly $1,200/year saving until the replacement and all previously used platform features are verified.

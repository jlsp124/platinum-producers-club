# Tracking migration

## Current production detection

The mentor variants currently load:

- Meta Pixel ID `1574537226585306`.
- Meta `PageView` on load.
- Cloudflare Web Analytics beacon.
- GoHighLevel/LeadConnector funnel, survey, phone-input, and Turnstile runtime.
- Testimonial.to widget and iframe-resizer.

No GA4, Google Tag Manager, Google Ads, TikTok Pixel, Hotjar, or Microsoft Clarity identifier was detected in the rendered landing-page scripts.

No visitor-facing cookie-consent banner was present. The survey contains a separate communications/SMS checkbox; that is not general analytics consent.

## Preview decision

No production analytics, advertising pixel, cookie banner, or Testimonial.to runtime is copied into the GitHub Pages preview. This prevents preview traffic from contaminating production reporting and avoids publishing identifiers before owner/access/consent review.

The site contains no secrets, tokens, or private tracking credentials.

## UTM behavior

The current root redirect preserved tested `utm_source`, `utm_medium`, and `utm_campaign` query parameters when sending a visitor to a mentor variant.

The redesign progressively forwards Calendly’s five officially supported values to every strategy-call link:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

Values are length-limited and only appended in the browser; if JavaScript fails, the clean Calendly link still works. Unrelated query parameters and personal data are not forwarded.

## Recommended event model for production

| Event | Meaning | Conversion level |
| --- | --- | --- |
| `strategy_call_click` | Visitor activates a Calendly CTA | Micro-conversion / outbound intent |
| `overview_video_play` | Visitor opens the Vimeo overview | Engagement |
| `testimonial_change` | Visitor manually explores proof | Engagement |
| `faq_open` | Visitor opens an objection/answer | Diagnostic engagement |
| `calendly_event_scheduled` | Calendly confirms an appointment | Primary conversion |

A CTA click is not a completed booking. The production KPI should be the Calendly scheduled-event confirmation, with outbound clicks used only as a funnel step.

## What requires Terence’s access/decision

- Confirm ownership and intended continued use of Meta Pixel `1574537226585306`.
- Confirm the analytics platform for the replacement (GA4, privacy-focused analytics, Meta only, or none).
- Confirm consent/cookie requirements with legal advice for target regions.
- Confirm whether Calendly’s current plan/integrations can expose scheduled-event events to the selected analytics stack.
- Confirm whether Calendly should redirect to a first-party thank-you page after booking.
- Confirm Meta domain verification, Aggregated Event Measurement, and desired conversion event before ads are moved.
- Confirm UTM naming conventions and test them through one permitted end-to-end booking.

## Cutover verification

1. Use a non-production test/preview analytics property where possible.
2. Verify consent behavior before any non-essential tracker loads.
3. Confirm page views do not double-fire.
4. Confirm `strategy_call_click` once per deliberate activation.
5. Complete one authorized Calendly test booking.
6. Confirm `calendly_event_scheduled` rather than treating the click as the booking.
7. Confirm UTMs appear in the Calendly booking/export/integration.
8. Confirm ad-platform events in their diagnostic tools.
9. Remove test bookings/data according to owner-approved procedures.


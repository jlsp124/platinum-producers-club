# Information architecture

## Conversion goal

Move a serious music producer from recognition (“I am stuck in a tutorial/trial-and-error loop”) to understanding (“the offer is individualized production mentorship”) to trust (“Terence has relevant production, teaching, and student evidence”) to one unambiguous action: booking the verified Release Ready Strategy Call in Calendly.

Every primary CTA uses the clean event URL:

`https://calendly.com/terence-p-lam/release-ready-strategy-call`

The link opens in the same tab. This is the simplest reliable behavior, works without JavaScript, preserves the browser Back path, and avoids the performance/accessibility cost of an embedded scheduler. Supported incoming `utm_*` values are progressively appended when JavaScript is available.

## Route map

- `/` — focused Platinum Producers Club marketing and coaching funnel.
- `/privacy/` — verbatim recovered owner Privacy Policy, marked for owner/legal verification before production.
- `/terms/` — verbatim recovered owner Terms of Service, marked for owner/legal verification before production.
- `/404.html` — static-host fallback that returns visitors to the homepage.

There is no client-side router and no custom backend.

## Homepage story

| Order | Section | One job | Primary takeaway/action |
| ---: | --- | --- | --- |
| 1 | Full-bleed hero | Position the offer | Private production mentorship to help serious producers finish stronger, release-ready music; book a strategy call or watch the 4:14 overview |
| 2 | Recognition / “signal lost” | Name the real obstacle | More tutorials and gear do not create a clear next decision |
| 3 | Terence credibility ledger | Establish relevant authority | 15 years of stated experience, existing artist/credit claim, and Ableton Certified Trainer credential |
| 4 | Mentorship arrangement | Explain what changes | Listen closely, identify the highest-value move, apply direct feedback, and finish with intention |
| 5 | Curated proof | Let clients answer objections | Detailed, individualized guidance can improve workflow, confidence, and completed work |
| 6 | Fit / non-fit | Qualify without a coercive survey | For producers ready to make music and use feedback; not a promise of overnight results or passive consumption |
| 7 | Coach profile | Make the offer human | Terence is the central coach, producer, and teacher—not an anonymous course brand |
| 8 | FAQ | Resolve practical objections | Gear, experience, investment, call purpose, and outcome expectations |
| 9 | Final CTA | Convert with clarity | Book the verified one-to-one Release Ready Strategy Call on Calendly |
| 10 | Footer / legal | Preserve commercial/legal context | PROMU Music Group Ltd., current disclaimer, legal pages, preview status |

## Navigation

Desktop navigation is intentionally small: Method, Results, About Terence, FAQ, and a strategy-call CTA. Mobile uses a compact accessible disclosure menu. Every anchor works without animation JavaScript and accounts for the sticky header.

## Content compression

The old page repeats the same CTA and promise without explaining the service. The new structure keeps the important facts but compresses repeated sales language into:

- one clear hero promise;
- one diagnosis section;
- one process explanation;
- one curated testimonial sequence;
- one fit statement;
- one FAQ;
- one closing invitation.

The old 14-step form is not recreated. Its qualification intent is retained through fit, investment, and strategy-call copy while personal data collection remains inside Calendly.

## Progressive enhancement

- Base state: complete semantic page, direct Calendly links, readable testimonials, legal routes.
- JavaScript enhancement: menu state, lazy Vimeo dialog, scroll progress, section reveals, testimonial controls, and UTM forwarding.
- Failure state: if JavaScript fails, no content or conversion path is lost.


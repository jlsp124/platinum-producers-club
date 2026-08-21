# Information architecture

## Funnel rule

The funnel now separates persuasion from preparation:

```text
Sales page → Calendly → Booking complete → Thank-you / pre-call page → Strategy call
```

The sales page has one job: make a qualified music producer want to book the Release Ready Strategy Call. The thank-you page has a different job: give a booked visitor the context needed before the call.

## Route map

- `/` — short sales page.
- `/thankyou/` — converted-visitor confirmation and pre-call preparation.
- `/privacy/` and `/terms/` — recovered local legal surfaces, still requiring owner/legal review before production.
- `/404.html` — static-host fallback.

There is no application form, scheduler embed, client-side router, backend, payment flow, or account system.

## Homepage

| Order | Section | One job |
| ---: | --- | --- |
| 1 | Hero + current VSL | State the current outcome and offer one booking action |
| 2 | Three-point value | Explain the mentorship in three short ideas |
| 3 | Proof | Show three current student videos and three short current written excerpts |
| 4 | Fit | Name the qualified audience in three bullets |
| 5 | Final CTA | Repeat the outcome and the same Calendly action |

The header contains only the PPC logo and CTA. Homepage CTAs appear exactly three times: header, hero, and final close.

Removed from the pre-booking page:

- Terence biography/credits;
- four-step methodology;
- detailed mentorship-feature list;
- detailed call mechanics and next steps;
- repeated qualification explanation;
- five-question FAQ;
- investment and acceptance caveats;
- internal preview/owner-verification copy.

## Thank-you page

| Order | Section | One job |
| ---: | --- | --- |
| 1 | Confirmation + current pre-call video | Confirm the booking and require the pre-call watch |
| 2 | About Terence | Put the current owner biography after conversion |
| 3 | Before the call | State the three verified preparation facts |
| 4 | Final note | End calmly without reselling |

There are no Calendly CTAs on `/thankyou/` because the visitor has already booked.

## Calendly handoff

All homepage CTAs use:

`https://calendly.com/terence-p-lam/release-ready-strategy-call`

The links work without JavaScript. Progressive enhancement forwards only supported `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term` values.

During an approved production migration, Calendly should redirect a successful booking to `https://platinumproducersclub.com/thankyou`. This account-level setting was not changed in this run.

## Content authority

`/release-ready_bio` is the current sales-message and VSL authority. `/thankyou` is the current converted-visitor and pre-call-video authority. `/mentor1` and `/mentor2` are historical references only.

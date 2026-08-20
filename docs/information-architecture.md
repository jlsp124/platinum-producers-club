# Information architecture

## Product rule

PPC is one mentorship sales page. The broader personal-brand / Steven Bartlett direction is deferred to a possible future Terence Lam website.

The homepage exists to move an appropriate producer from recognition (“I am stuck”) to understanding (“this is direct mentorship on my music”) to trust (“Terence and his students provide relevant evidence”) to one action: booking the verified Release Ready Strategy Call.

Every primary CTA uses:

`https://calendly.com/terence-p-lam/release-ready-strategy-call`

The link opens in the same tab, works without JavaScript, and preserves the Back path. JavaScript forwards only supported incoming `utm_*` values and emits a local, non-networked CTA-context event for a future approved analytics integration.

## Route map

- `/` — focused Platinum Producers Club mentorship sales page.
- `/privacy/` — recovered owner Privacy Policy, marked for legal/owner review.
- `/terms/` — recovered owner Terms of Service, marked for legal/owner review.
- `/404.html` — static-host fallback with a direct homepage action.

There is no client-side router, backend, custom application form, or embedded scheduler.

## Homepage conversion story

| Order | Section | One job | Primary takeaway/action |
| ---: | --- | --- | --- |
| 1 | Hero + VSL | State the outcome and show the pitch | Private mentorship to help producers finish music they are proud to release; watch the 6:48 VSL and book a strategy session |
| 2 | Core problem | Mirror the buyer’s frustration | Tutorials, unfinished sessions, and more gear do not identify the next decision |
| 3 | Mentorship value | Explain the product | Direct feedback, individual direction, specific next steps, workflow guidance, and accountability |
| 4 | Terence credibility | Answer “why this coach?” | Producer/coach, Ableton credential, and existing public experience/credit claims at their documented confidence level |
| 5 | How it works | Remove process ambiguity | Bring music, identify the bottleneck, get focused direction, apply it, and finish stronger |
| 6 | Student results | Provide human proof | Three visible video testimonials, three written excerpts, and a non-guarantee note |
| 7 | Who it is for | Qualify positively | Producers ready to make music, hear direct feedback, and apply it |
| 8 | What happens next | Make conversion safe and obvious | Choose a Calendly time, speak with Terence, decide whether the mentorship fits |
| 9 | FAQ | Resolve practical objections | Gear, experience, call purpose, investment, and guarantees |
| 10 | Final CTA | Close one argument | Book the same verified Calendly event |
| 11 | Footer/legal | Preserve business context | PROMU Music Group Ltd., contact, local legal pages, disclaimer, preview status |

## Navigation and CTA frequency

The sticky header contains only the PPC logo and a strategy-call CTA. There are no chapter links, mobile menu, resource links, or secondary product paths.

Conversion opportunities appear:

1. in the header;
2. directly below the hero VSL;
3. after student proof;
4. after the three next-step instructions;
5. in the final close.

The repetition is intentional, but each CTA follows a new persuasion milestone rather than interrupting every section.

## Video and proof architecture

- Vimeo `1050034975` / `9fe7bb5ddc` is the primary VSL. The shorter Vimeo remains documented as an owner-selectable alternate, not a competing page element.
- The VSL poster is visible in the hero; the player iframe is created only after click.
- Cedrick, Kaley Kallman, and Kim P. appear as three public Testimonial.to/Mux-hosted video testimonials. Their players also load only on click.
- Video-only cards receive neutral context. Written claims are attributed to separately published text reviews rather than inferred from spoken video.
- Three written reviews follow the videos without a carousel.

## Content compression

Removed from the previous redesign:

- editorial chapter numbers and section identities;
- DAW/arrangement interaction;
- scroll progress;
- modal primary VSL;
- testimonial carousel and controls;
- full navigation/mobile overlay;
- repeated Terence biography;
- sharp dark/light environment changes.

The old 14-step application is not recreated. Its qualification intent is represented through fit, investment, and call-expectation copy while Calendly remains the only data-collection/scheduling surface.

## Progressive enhancement

- Base: complete semantic page, direct Calendly links, visible media posters, written testimonials, legal routes, and no-JavaScript provider links.
- Enhanced: short reveals, click-to-load Vimeo/Mux players, supported UTM forwarding, local CTA event, and one-open FAQ behavior.
- Failure: no offer copy, proof text, legal route, or conversion link is lost if JavaScript fails.

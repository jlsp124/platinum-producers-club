# Reference sales-page analysis

Research date: 2026-08-20 (America/Vancouver)

This revision treats Platinum Producers Club as one mentorship offer with one conversion goal: help an appropriate producer understand the offer, trust Terence, and book the verified Release Ready Strategy Call.

References inspected:

- current PPC production funnel and `docs/current-site-audit.md`;
- current repository redesign and its responsive screenshots;
- [Creator College](https://creatorcollege.com/) and its currently reachable challenge/coaching sales material;
- PPC's public [Testimonial.to wall](https://embed-v2.testimonial.to/w/terencepolunlam);
- official [Testimonial.to single-video guidance](https://help.testimonial.to/en/articles/6223124-embed-a-single-video) and [Mux iframe guidance](https://www.mux.com/docs/guides/player-integrate-in-your-webapp).

## The three sales systems

| Question | Current PPC production page | Current repository redesign | Creator College reference | PPC revision decision |
| --- | --- | --- | --- | --- |
| What is being sold? | Radio/release-ready production mentorship, but the service itself is thinly explained | Mentorship is clearer, but the presentation often becomes the product | One named program or challenge with a plain outcome and defined contents | State private music-production mentorship immediately and keep it as the only offer |
| First-screen priority | Promise, short credibility line, visible VSL, CTA | Full-canvas campaign image and oversized editorial headline; VSL is a secondary modal action | Offer, outcome, media/coach, and purchase/application action are unmistakable | Logo, outcome-focused headline, short support, prominent 6:48 VSL, one Calendly CTA |
| Story progression | Simple but incomplete: promise → VSL → problems → fit → proof → application | Editorial chapters: diagnosis → ledger → DAW arrangement → controlled proof → fit → biography | Linear objection handling: problem → mechanism → deliverables → proof → process → offer → FAQ | Use a short vertical argument: problem → mentorship change → coach → process → proof → fit → next step → FAQ → close |
| Proof | Large external wall, difficult to scan and expensive to load | Four text quotes, one visible at a time | Customer video is visible and repeated; proof appears before and after offer detail | Show three real click-to-load video testimonials at once, then three concise attributed text reviews |
| CTA behavior | Repeated but currently inert | Correct Calendly links, but the hero offers two equally styled actions | Repeated, visually consistent, and tied to the same purchase/application path | One primary button treatment and the same Calendly destination after the VSL, proof, next-step explanation, and final close |
| Visual identity | Generic white/purple funnel builder | High-quality but shifts between paper, black, orange, editorial ledgers, and a custom DAW system | Visual design stays subordinate to the offer even when sections are media-rich | Use a premium warm-light PPC identity, subtle surface changes, one restrained signal accent, and one content measure |
| Navigation | Almost none | Method, Results, Terence, FAQ, plus mobile overlay | Very little escape from the funnel | Keep only a small logo and header CTA; no chapter navigation or mobile menu |
| Mobile behavior | Severe clipping at 320–390px | Technically robust, but very long and visually dense | One-column media and repeated full-width actions | Design the phone first: readable title, 16:9 VSL, full-width CTA, stacked proof, shorter sections, no sticky story UI |

## What Creator College does well structurally

- It names one offer and one outcome before introducing secondary detail.
- Its page moves vertically; visitors do not need to learn a custom interface.
- Media and human coaching credibility appear early.
- Problem language closely matches what the buyer already says to themselves.
- “What you get” is concrete and connected to outcomes rather than abstract brand language.
- Customer videos are visible proof, not hidden behind a carousel.
- Calls to action recur after meaningful persuasion milestones.
- Fit, next steps, investment/application mechanics, and FAQs resolve practical objections near the decision.

## What must not be copied

- Creator College branding, typography, photography, proprietary copy, layouts, code, and program mechanics.
- Countdown timers, exaggerated value stacks, urgency, guarantees, prize language, or price anchoring that PPC has not verified.
- Its current page length, repeated bonus treatment, and dense seasonal offer detail; PPC has less verified operational content and should be shorter.
- Claims based on another coach's audience, revenue, or student outcomes.

## Where the current PPC redesign is over-designed

- The full-bleed hero makes Terence's image and art direction more dominant than the VSL and offer.
- “Listen / Focus / Develop / Finish” is buried inside a sticky DAW/arrangement metaphor that requires interpretation.
- Eight numbered editorial chapters make the page feel like a magazine feature.
- The near-black, warm paper, and bright orange environments create multiple visual identities.
- The testimonial carousel hides three quarters of the proof at any moment.
- The coach biography repeats credibility already introduced earlier.
- Scroll progress, mobile menu, arrangement indicators, testimonial controls, modal video, and layered reveals create too many interaction systems for one funnel.

## Existing PPC elements that should return

- A restrained logo-only header.
- The established release/radio-ready promise at no stronger than its current public meaning.
- A large, obvious sales video near the top.
- The three useful problem ideas: expensive school is not required, tutorials/trial-and-error waste time, and gear does not replace judgement.
- A concise “this is for you if” qualification section.
- Repeated strategy-call CTAs.
- Real student proof followed by a clear next step.
- PROMU Music Group Ltd., local legal pages, the platform-independence disclaimer, and the migration caveats.

## Video strategy

- Primary VSL: Vimeo `1050034975`, hash `9fe7bb5ddc`, approximately 6:48, title observed as “VSL new3-FINAL.” It is the main hero media because its public title identifies it as the final VSL. It uses Vimeo's supported player and does not autoplay.
- Alternate VSL: Vimeo `1047620937`, hash `1990c988b1`, approximately 4:14. Keep it documented for owner choice, but do not put two competing sales videos on the page.
- Performance: render the local 16:9 PPC poster immediately and create the Vimeo iframe only after a clear play action. The video remains impossible to miss even before the iframe exists.
- Student proof: show three public Testimonial.to/Mux-hosted videos—Cedrick, Kaley Kallman, and Kim P.—using their remote provider thumbnails and supported `player.mux.com/{playback-id}` iframes only after click. Do not download or rehost the videos.
- Copy boundary: video-only cards receive neutral labels only. Cedrick and Kim may be accompanied by context from their separately published written reviews; no spoken transcript is inferred.

## CTA, proof, density, and distraction rules

- CTA frequency: header, immediately after the hero VSL, after student proof, in “what happens next,” and at the final close. All use the exact clean Calendly event URL.
- Social proof: three visible video cards, three short written reviews, and a clear “individual results vary” note. No carousel and no large third-party wall runtime.
- Section count: nine homepage sections including hero and final close, plus the footer. Closely related ideas share a section.
- Content density: one headline, one short setup, and one dominant proof/explanation device per section. Desktop copy is capped to a readable measure; mobile copy is shortened rather than merely stacked.
- Conversion distractions removed: chapter numbering, scroll-progress UI, full navigation, mobile menu, DAW interaction, modal primary VSL, testimonial carousel, prolonged biography, secondary offer links, decorative cursor/scroll effects.

## Build direction

Visual thesis: a calm, warm-light studio sales page with near-black type, one deep-violet action color, real media, and enough restraint that the offer—not the interface—feels premium.

Content plan: visible VSL hero → recognize the producer's problem → explain the mentorship → establish Terence → show four simple steps → prove with student video and text → qualify fit → explain the call → answer FAQs → close.

Interaction thesis:

1. A short hero entrance sequence establishes hierarchy without delaying playback or the CTA.
2. Video posters receive a clear, tactile play treatment and instantiate third-party players only after click.
3. Mild section reveals and button feedback add polish; reduced-motion visitors receive the same content immediately.

The deciding test for every element is: does it help a qualified producer understand the mentorship or book the strategy call? If not, it does not ship.

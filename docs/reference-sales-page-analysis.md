# Reference sales-page analysis

Research date: 2026-08-20 (America/Vancouver)

This revision treats Platinum Producers Club as one mentorship offer with one conversion goal: help an appropriate producer understand the offer, trust Terence, and book the verified Release Ready Strategy Call.

References inspected:

- current PPC production funnel and `docs/current-site-audit.md`;
- current repository redesign and its responsive screenshots;
- [Creator College VIP](https://creatorcollege.com/c/vip), the currently reachable coaching funnel (the former `/cohort-gr` route now returns a 404);
- PPC's public [Testimonial.to wall](https://embed-v2.testimonial.to/w/terencepolunlam);
- official [Testimonial.to single-video guidance](https://help.testimonial.to/en/articles/6223124-embed-a-single-video) and [Mux iframe guidance](https://www.mux.com/docs/guides/player-integrate-in-your-webapp).

## The three sales systems

| Question | Current PPC production page | Current repository redesign | Creator College reference | PPC revision decision |
| --- | --- | --- | --- | --- |
| What is being sold? | Radio/release-ready production mentorship, but the service itself is thinly explained | Private music-production mentorship is explicit immediately | One named coaching program with a plain outcome and defined contents | Keep the current offer language and remove anything that delays it |
| First-screen priority | Promise, short credibility line, visible VSL, oversized CTA | Strong outcome, short support, prominent 6:48 VSL, then a split copy-and-button action row | Offer, outcome, coach video, and one large action are unmistakable | Preserve the current hero; simplify the area below the VSL to one action and one quiet qualifier |
| Story progression | Compact but incomplete: promise → VSL → three benefits → fit → proof → application | Complete, but the problem and benefit sections repeat the same contrast and extend the page | Long but linear: offer → coach → proof → problem → contents → more proof → price → FAQ | Combine problem and mentorship change; combine qualification and call mechanics; keep the real proof prominent |
| Proof | Large external wall, difficult to scan and expensive to load | Three real video stories plus three written reviews, all visible | Video proof appears early and repeatedly, with the person and result carrying the visual weight | Keep all six real proof points; shorten video captions and remove metadata-like labels |
| CTA behavior | Repeated visual CTA, but current links are inert | Correct Calendly links with one visual treatment; header and next-step wording vary | Repeated, large, consistent action tied to the same purchase path | Use “Book your strategy session” consistently and make each CTA follow a persuasion milestone |
| Visual identity | Crude but unmistakably PPC; high-contrast purple CTAs | Premium warm-light PPC system, but repeated rules, eyebrow labels, and conversion containers can feel editorial or SaaS-like | Mostly neutral typography and real people; decoration rarely competes with the sale | Keep the light system and violet action color; reduce labels, borders, surface shifts, and container styling |
| Navigation | Almost none | Logo plus sticky CTA only | Very little escape from the funnel | Keep the current restrained header |
| Mobile behavior | Clear funnel order but coarse styling and an unreliable testimonial embed | Responsive and readable, but longer than necessary and text-heavy between media moments | Clear one-column hierarchy with a full-width VSL and CTA | Preserve the current mobile foundation while reducing vertical copy and dead space |

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

## Where the current light baseline still needs cleanup

- The split row below the VSL adds two setup lines, a button, and a second qualifier where one button and one short note would be clearer.
- The problem and mentorship-benefit sections make the same argument in two consecutive chapters.
- Every major section uses a small eyebrow label and a very large heading, creating a repeated editorial template instead of natural sales pacing.
- Terence's credential grid and public claim caveat read like internal audit notes rather than confident customer-facing proof.
- Video testimonials carry a role label and explanatory paragraph beneath already self-explanatory media.
- Qualification and call mechanics are separate full sections even though both answer “is this right for me, and what do I do next?”
- Repeated boxed conversion strips add interface weight that the CTA itself does not need.

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

- CTA frequency: sticky header, immediately after the hero VSL, after Terence/value, after student proof, in the combined fit/next-step section, and at the final close. All use the exact clean Calendly event URL and the same label.
- Social proof: three visible video cards, three short written reviews, and a clear “individual results vary” note. No carousel and no large third-party wall runtime.
- Section count: eight homepage sections including hero and final close, plus the footer. Problem/value and fit/next-step ideas share sections.
- Content density: one headline, one short setup, and one dominant proof/explanation device per section. Desktop copy is capped to a readable measure; mobile copy is shortened rather than merely stacked.
- Conversion distractions removed: chapter numbering, scroll-progress UI, full navigation, mobile menu, DAW interaction, modal primary VSL, testimonial carousel, prolonged biography, secondary offer links, decorative cursor/scroll effects.

## Build direction

Visual thesis: a calm, warm-light studio sales page with near-black type, one deep-violet action color, real media, and enough restraint that the offer—not the interface—feels premium.

Content plan: visible VSL hero → recognize the problem and show what mentorship changes → establish Terence → show four simple steps → prove with student video and text → qualify fit and explain the call → answer FAQs → close.

Interaction thesis:

1. A short hero entrance sequence establishes hierarchy without delaying playback or the CTA.
2. Video posters receive a clear, tactile play treatment and instantiate third-party players only after click.
3. Mild section reveals and button feedback add polish; reduced-motion visitors receive the same content immediately.

The deciding test for every element is: does it help a qualified producer understand the mentorship or book the strategy call? If not, it does not ship.

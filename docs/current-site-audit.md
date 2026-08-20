# Platinum Producers Club — current-site audit

Audit date: 2026-08-19 (America/Vancouver)

Production audited: `https://platinumproducersclub.com/`

This was a read-only audit. No production page, DNS record, form, booking, analytics configuration, or third-party service was modified. The review combined real browser interaction, responsive viewport checks, rendered DOM inspection, HTTP/header checks, asset inspection, and targeted inspection of public page configuration. No form was submitted and no appointment was booked.

## Executive summary

The current property is a GoHighLevel/LeadConnector funnel with two near-identical landing-page variants, a 14-step application survey, a GoHighLevel booking page, a disqualification page, and an external Testimonial.to wall. The root URL redirects visitors to either `/mentor1` or `/mentor2`; the visible landing-page copy is the same, while the two variants load different Vimeo sales videos.

The funnel preserves several useful business assets: real images/video of Terence, an Ableton Certified Trainer mark, 13 text testimonials visible in the initial testimonial load, additional video testimonials, the core promise, the artist/credit claim, and the external booking intent.

The largest current risks are conversion and trust failures:

- All three prominent landing-page “Book Your Strategy Session” buttons are inert in live browser testing. Clicking them caused no navigation, anchor jump, modal, form focus, or booking action.
- The application completion configuration points to `/schedulecall`, whose current booking UI is a native GoHighLevel calendar titled “Strategy Call for Vocal Production,” not the owner-specified Calendly event.
- The supplied canonical Calendly event is live and resolves to “Release Ready Strategy Call — Terence ‘polun’ Lam.”
- Both public legal links point to `promuclub.com`, which currently has no DNS record.
- `robots.txt` and `sitemap.xml` return HTTP 200 with empty bodies.
- There is no canonical link on the audited pages.
- Mobile layouts visibly clip content at 390px and 320px, including the headline, logo, media, and CTA.
- The `/sorry` page contains unrelated copied SEO keywords about a fitness business.

## Current sitemap and route behavior

| Route | Observed behavior | Purpose |
| --- | --- | --- |
| `/` | HTTP 302 to either `/mentor1` or `/mentor2` | Funnel entry / A-B routing |
| `/mentor` | Redirects to a mentor variant | Legacy/re-entry route used by `/sorry` |
| `/mentor1` | HTTP 200 | Landing variant; 6:48 Vimeo VSL |
| `/mentor2` | HTTP 200 | Landing variant; 4:14 Vimeo VSL |
| `/schedulecall` | HTTP 200 | Post-application GoHighLevel booking page |
| `/sorry` | HTTP 200 | Disqualification/re-entry page |
| `/robots.txt` | HTTP 200, empty body | No effective crawler directives |
| `/sitemap.xml` | HTTP 200, empty body | No effective XML sitemap |
| `/favicon.ico` | HTTP 200 | Current favicon |

The browser session reached `/mentor2` from `/`; separate HTTP requests also routed `/` to `/mentor1`. Both variants should therefore be treated as live. Their visible text, section structure, survey, testimonials, footer, metadata, and tracking are equivalent. The active Vimeo video differs.

No other same-domain pages were linked or exposed by the empty sitemap/robots files or the rendered funnel configuration.

## Landing-page sections, in order

1. Black header containing the Platinum Producers Club logo.
2. Hero headline: “Discover The Secret To Producing Radio-Ready Music.”
3. Hero support line: “Learn From Someone who Landed Songs with Drake, Alessia Cara, and Meghan Trainor.”
4. Click-to-play Vimeo sales video.
5. Large animated purple “Book Your Strategy Session” button with a five-spots scarcity line.
6. Three-across problem/outcome block:
   - “No $25,000 Music School Needed”
   - “Stop Wasting Your Time”
   - “Create Radio-Ready Music Without Fancy Equipment”
7. “This Is For You If...” qualification list.
8. Repeated strategy-session CTA.
9. “Real Results!” Testimonial.to wall.
10. Repeated strategy-session CTA.
11. “Let’s See If We Are A Good Fit” 14-step GoHighLevel survey.
12. Advertising-platform disclaimer.
13. Privacy Policy and Terms & Conditions links.
14. Copyright notice.

## CTA and interaction audit

| Surface | Observed action | Destination/result | Assessment |
| --- | --- | --- | --- |
| Mentor video, `/mentor1` | Opens an inline Vimeo player | Vimeo `1050034975`, hash `9fe7bb5ddc` | Working |
| Mentor video, `/mentor2` | Opens an inline Vimeo player | Vimeo `1047620937`, hash `1990c988b1` | Working |
| Hero booking CTA | Clicked in a real browser | No action | Broken/inert |
| Mid-page booking CTA | Clicked in a real browser | No action | Broken/inert |
| Post-testimonial booking CTA | Clicked in a real browser | No action | Broken/inert |
| Survey “NEXT” | Advances only after required fields | 14-step embedded application | Present; no submission performed |
| Survey completion | Page configuration | `/schedulecall` | Configured destination |
| Survey disqualification | Page configuration | `/sorry` | Configured destination |
| `/schedulecall` booking CTA | Browser click/scroll loads native calendar lower on page | GoHighLevel calendar: “Strategy Call for Vocal Production,” 1 hour | Working, but does not match the owner-specified Calendly event |
| `/sorry` re-entry CTA | Link | `/mentor`, then a mentor variant | Working |
| Testimonial “Show more” / “Load more” | Testimonial.to iframe controls | Expands/loads external testimonial content | Working external widget |
| Privacy Policy | Link | `https://promuclub.com/privacy-policy` | Broken: host has no DNS record |
| Terms & Conditions | Link | `https://promuclub.com/terms-of-service` | Broken: host has no DNS record |

### Owner-specified Calendly destination

`https://calendly.com/terence-p-lam/release-ready-strategy-call` returned HTTP 200 and exposed the following authoritative event metadata:

- Event: “Release Ready Strategy Call”
- Host: Terence “polun” Lam
- URL: the clean canonical event URL above, with no month query required
- Description: a real 1:1 call with Terence; visitors should only book if they can attend; visitors without a suitable time are directed to `terence@platinumproducersclub.com`

The redesign should use this clean Calendly URL for every primary application/strategy-call CTA. The mismatch between the old GoHighLevel calendar and the owner-specified Calendly event must be verified during production migration, but it does not block the preview build.

## Current public copy and factual claims

### Primary positioning

- “Discover The Secret To Producing Radio-Ready Music.”
- “Learn From Someone who Landed Songs with Drake, Alessia Cara, and Meghan Trainor.”

### Problem/outcome claims

- “No $25,000 Music School Needed.”
- “You don’t need to spend $25,000 on a production school to create industry-level music. Our clients have crafted radio-ready tracks without formal education—just the right mentorship and a clear system.”
- “Stop Wasting Your Time.”
- “Stop wasting your time on trial-and-error. Gain access to 15 years of real-world experience from someone who’s worked with major artists—and fast-track your music to success.”
- “Create Radio-Ready Music Without Fancy Equipment.”
- “You don’t need expensive gear or a fully equipped studio to make your music stand out. We guide producers using minimal setups, focusing on skills and strategies that deliver radio-ready results.”

### Qualification list

- You have watched the video and know this is something you want.
- You are serious about making “chart-topping” music and ready to level up.
- You are done spending hours on YouTube without progress.
- You do not want to spend thousands on unnecessary gear.
- You do not want to spend $25,000+ on traditional music school.
- You want to learn from someone with direct experience.
- You want a roadmap rather than trial and error.

### Credential and visual evidence

- The current page includes an “Ableton Certified Trainer” graphic.
- The hero/VSL poster shows Terence in a studio/production environment.
- A current black-and-white studio portrait of Terence is available in the page asset library.
- The VSL poster visibly includes framed music-industry plaques in the background; the redesign should not convert what is visible in a photo into a more specific written award claim without owner verification.

Claims requiring owner confirmation before production are tracked in `content-needing-owner-verification.md`.

## Video inventory

| Variant | Vimeo title | Duration | Owner | Notes |
| --- | --- | ---: | --- | --- |
| `/mentor1` | `VSL new3-FINAL` | 6:48 | PROMU Music Group Ltd. | Loaded only after the poster is clicked |
| `/mentor2` | `Produce Top40 Radio Quality Music Today!` | 4:14 | PROMU Music Group Ltd. | Uses the poster captured in the before screenshots |

Both players use Vimeo’s supported player surface. The page remains readable before playback. The new site may preserve the shorter `/mentor2` video as the primary watch-on-demand asset while documenting the alternate VSL.

## Application survey inventory

The current form is a 14-slide GoHighLevel survey. It should not be rebuilt in the static preview because the owner explicitly selected the existing Calendly flow as the stable conversion destination. Its sequence is recorded here for migration context and to preserve the old customer-qualification intent.

1. First name; last name.
2. Best email.
3. Phone plus required consent checkbox.
4. Instagram handle; “How did you hear about us?” with Instagram, Facebook, TikTok, “Advertisment,” or Other.
5. Free-text “other” referral source.
6. “Are you currently in high school or college?” Yes/No.
7. Primary genre: Anything on the Top40 Charts; Pop; Hip Hop/Trap/Drill; R&B/Soul/Funk; Electronic/EDM/House; World/Latin/Afrobeat; Rock/Country/Alternative; Other.
8. Secondary genre: the same options.
9. Current production level:
   - Level 1: completely new / no music to show.
   - Level 2: understands fundamentals and has tracks, but dislikes how the music sounds.
   - Level 3: makes music they like but is not making money and wants a career.
   - Level 4: has made money and is comfortable producing, but wants to move from good to great.
10. Meaning of production:
   - hobby/exploration;
   - deeply interested and curious;
   - a dream/life and wants a sustainable career now.
11. Free-text: “BE SPECIFIC, what are you currently struggling with?”
12. Readiness to start: right now; within a week; a month; or a negatively framed opt-out answer.
13. Optional link to music demonstrating current production ability.
14. Ability to invest in mentorship, described as potentially requiring a four-figure investment. Options include ready to invest, willing to apply for a loan in Canada/USA with a stated credit-score threshold, willing to seek a loan outside Canada/USA, or a negatively framed non-investment answer.

The existing consent copy reads:

> I consent to receive content from PROMU Music Group Ltd. Message & data rates may apply. You may reply STOP to (437)-529-5255 to unsubscribe at any time.

This consent language must not be reused or rewritten unless a future implementation actually collects the corresponding data and the owner/legal reviewer confirms the wording and phone number.

## Testimonial and result inventory

The current page embeds `https://embed-v2.testimonial.to/w/terencepolunlam` and initially requests 20 items. The embedded wall is external, has no iframe title, and loads substantial third-party CSS/JavaScript.

### Text testimonials visible in the initial load

| Person | Displayed headline | Concrete outcome/subject |
| --- | --- | --- |
| Ashtyn Keith | “Signing up for this program was the best decision I could have made” | Curated individual pacing, clear answers, feedback and mindset shift |
| MaKayla Miller | “I’m beyond excited to see where I go from here thanks to you” | Production basics, plugins, ear training, feedback and community |
| Grace Leeswadtrakul | “One of the best decisions I’ve made” | Finishing music, workflow, skills and confidence |
| D R 3 A | “You are the best mentor I’ve ever worked with” | Faster workflow, confidence, and third place in an SKIO contest |
| Eli Woods | “I landed a 2k gig for a jingle this morning!!” | Reported $2k jingle project and three polished ideas in under two hours |
| Cedrick Bihis | “Would recommend to anyone trying to seriously level up” | Completion of the mentorship and confidence in continued progress |
| Marco Lafarga | “Exactly what I needed to start my journey on music production” | Structured program, guidance, patience and access to help |
| Eric Weiss | “Improvement from the moment we started working together” | Immediate improvement, discipline and focus for live projects |
| Paulina López Ramírez | “One of the decisions that has made me the happiest” | Motivation, organized teaching and reduced uncertainty |
| Grace Leeswadtrakul | “The type of guidance I don't think you'd get from most courses” | Detailed production feedback and “huge progress” |
| Andre | “Motivated to go back to ideas that I started” | Renewed motivation and a safe place to share work |
| Kim P. | “Working with Terence was a total game-changer” | From zero experience to four beats and one polished vocal song |
| Michell | “He genuinely cares about helping his students make great music” | Focused areas for improvement and care from Terence and Theo |

### Video-only cards/names visible in the initial load

Kevin Barchi, Cedrick, Kaley Kallman, Melissa Nathalia (Mòhuaika), Alex Kade, Carpe Dien, and Kim P. appear as media-only cards or names without transcribed testimonial text in the rendered wall.

The redesign should use a small, curated selection of the existing text testimonials, preserve the source meaning and attribution, and avoid implying that an individual result is typical. The testimonial claims above must be owner-confirmed before production.

## Asset inventory

All locally downloaded files came from the current PPC/Calendly/Vimeo public surfaces and are stored under `src/assets/source/` for design and optimization work.

| Local file | Original role | Dimensions |
| --- | --- | ---: |
| `mentor-video-poster.jpg` | Terence VSL/studio poster | 1280×720 |
| `current-05.png` | Black-and-white Terence studio portrait | 500×500 |
| `calendly-avatar.jpg` | Terence’s Calendly avatar | 200×200 |
| `current-06.png` | Ableton Certified Trainer mark | 1224×204 |
| `current-brand.svg` | Current PPC brand/logo asset | SVG |
| `current-favicon.png` | PROMU/PPC mark | 180×180 |
| `current-01.png` | Decorative line/gradient artwork | 3637×812 |
| `current-02.png` | Cost/money icon | 676×634 |
| `current-03.png` | Target icon | 500×500 |
| `current-04.png` | Studio monitor icon | 500×500 |

The current icon set is generic and visually inconsistent with the requested premium direction. The real Terence imagery, brand marks, Vimeo video, and certification graphic are the strongest reusable assets. Local optimized derivatives should be used instead of hotlinking the old funnel’s image CDN.

## Current SEO metadata

### Mentor variants

- `<title>`: “Discover The Secret To Producing Radio-Ready Music”
- Meta description: “Learn From Someone who Landed Songs with Drake, Alessia Cara, and Meghan Trainor”
- Author: “PROMU”
- Open Graph title/description/image/type are present.
- No canonical link detected.
- No complete Twitter card implementation detected; only a nonstandard `twitter:type` value appears.
- No factually useful JSON-LD detected.
- Six different elements are incorrectly marked as `h1`, including paragraph-length copy.
- Image alt attributes are empty.
- `robots.txt` is empty.
- `sitemap.xml` is empty.

### `/schedulecall`

- Title: “Book Your Strategy Call”
- Description: “Consultation call for music producers looking to make radio quality, chart-topping pop songs”
- No canonical link detected.

### `/sorry`

- Title/description: “We might not be a good fit.”
- Contains unrelated keywords mentioning Alexander Olave, Fit Pro Association, and fitness-business sale terms. This appears to be copied template residue and must not migrate.

## Analytics, pixels, scripts, and consent

Detected on the mentor variants:

- Meta Pixel loader (`connect.facebook.net/en_US/fbevents.js`).
- Meta Pixel ID `1574537226585306`.
- `fbq('track', 'PageView')` on page load.
- Cloudflare Web Analytics beacon (`static.cloudflareinsights.com`).
- Cloudflare Turnstile script associated with the GoHighLevel survey.
- Testimonial.to iframe and iframe-resizer script.
- LeadConnector/GoHighLevel page runtime, survey runtime, phone-input scripts, and CSS.

Not detected in rendered scripts/identifiers:

- Google Analytics / GA4.
- Google Tag Manager.
- Google Ads tags.
- TikTok Pixel. (The word TikTok appears only as a survey option.)
- Hotjar.
- Microsoft Clarity.

No visitor-facing cookie-consent banner was present. The only consent control is the survey’s communications checkbox. Do not copy the Meta Pixel or any other tracking script into the preview. Production tracking requirements are separated in `tracking-migration.md`.

## Legal and footer inventory

The current footer preserves:

- “This site is not a part of the YouTube, Bing Google or Facebook website; Google Inc, Microsoft INC or Meta Inc. Additionally, This site is NOT endorsed by YouTube, Google, Bing or Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. YOUTUBE is a trademark of GOOGLE Inc. BING is a trademark of MICROSOFT Inc.”
- Privacy Policy link.
- Terms & Conditions link.
- “Copyright © 2024 PROMU Music Group Ltd. All rights reserved.”

The existing legal host is unavailable, but public Wayback snapshots dated 2025-02-01 preserve the owner’s former Privacy Policy and Terms of Service. Those archived texts can be reproduced verbatim in preview-only local pages; they must be explicitly reviewed for the PPC domain, current services, contact address, governing law, and current effective date before launch. The archived contact address decodes to `contact@promuclub.com`, whose domain is currently unavailable.

The copyright year should be rendered dynamically in the redesign while preserving PROMU Music Group Ltd. as the rights holder.

## Visual and interaction weaknesses

- The page reads as a funnel-builder template: centered stacked copy, generic line icons, a large purple animated CTA, and repeated white containers.
- There is no editorial rhythm or distinct visual storytelling between sections.
- Terence is present in the video but not used as a sustained credibility/storytelling anchor.
- The strongest authentic asset—the black-and-white studio portrait—is visually underused.
- Typography is heavy and repetitive, with weak distinction between headline, evidence, explanation, and proof.
- Purple highlighting is applied word-by-word in a manner associated with generic course funnels.
- The rocking CTA animation is attention-seeking rather than meaningful and may create discomfort.
- The CTA scarcity claim is repeated without evidence or date context.
- The testimonial wall is visually inconsistent, very long, and expensive to load.
- No navigation or progress cue helps visitors understand the story.
- The hero does not fit as a designed poster within the first viewport on common mobile sizes.

## Responsive weaknesses

### 390px phone

- The logo and hero copy are visibly clipped on the right.
- The main video crop exceeds the usable content area.
- The large CTA is clipped and dominates the screen.
- The hero requires substantial vertical travel before the visitor reaches an explanation of the offer.

### 320px narrow phone

- Clipping becomes severe; the logo, headline, subheadline, video, and CTA all lose right-side content.
- The CTA grows to approximately 165px tall before clipping.
- The page is not safely usable at the minimum target width.

### 768px tablet

- The three-column problem block remains three columns, reducing each copy column to approximately 130px.
- Each repeated CTA is approximately 162px tall and is slightly rotated.
- The layout behaves like compressed desktop rather than a deliberately designed tablet composition.

### Large desktop

- Content remains centered in a narrow funnel column instead of using the available canvas for stronger editorial composition.
- Section treatments repeat rather than becoming richer or more spatially deliberate.

## Conversion and information-architecture weaknesses

- The primary booking CTA is broken and does not expose the application or booking flow.
- The active page presents scarcity before explaining the mentorship, process, fit, coach, or expected commitment.
- The claim about major artists appears before context about Terence’s role, credits, or coaching method.
- There is no clear “what you get” or coaching-process section.
- There is no explicit “not for you” section beyond negatively worded survey answers.
- There is no FAQ addressing format, experience level, software/gear, scheduling, or what happens on the call.
- The 14-step survey creates high friction and asks sensitive financial/loan questions before the visitor reaches a verified Calendly destination.
- The booking destination mismatch makes analytics and conversion attribution ambiguous.
- Testimonials arrive as a long external wall instead of being selected to answer objections in sequence.

## Must preserve in the redesign

- Platinum Producers Club as the focused coaching offer.
- PROMU Music Group Ltd. as the business/copyright holder.
- Terence Lam / “polun” as the central coach/credibility figure.
- The real Terence portrait and studio/VSL imagery.
- The current clean Calendly URL supplied by the owner.
- The radio-ready / release-ready positioning, expressed without guaranteed outcomes.
- Existing artist/experience/credential claims only at their current strength and only with owner-verification flags where needed.
- Mentorship over trial-and-error, tutorial overload, unnecessary gear, or a $25,000 school path.
- A curated selection of existing, attributable testimonials without exaggeration.
- Existing platform-independence disclaimer unless owner/legal review says otherwise.
- Privacy and Terms surfaces based on the archived owner text, clearly flagged for pre-launch legal review.
- Reduced-motion support, semantic headings, alt text, reliable links, and responsive behavior from 320px upward.

## Before screenshots

- [Desktop, 1440px](screenshots/before/current-desktop-1440.png)
- [Tablet, 768px](screenshots/before/current-tablet-768.png)
- [Phone, 390px](screenshots/before/current-mobile-390.png)
- [Narrow phone, 320px](screenshots/before/current-narrow-320.png)

These screenshots capture the first viewport of the live `/mentor2` variant and are for internal redesign comparison only.

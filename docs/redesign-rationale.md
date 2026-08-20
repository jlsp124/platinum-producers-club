# Redesign rationale

## The strategic change

The redesign changes PPC from a template-shaped sales funnel into a coach-led editorial story. The visual system behaves like a contemporary record campaign crossed with a precise studio session: human imagery carries the emotion; the typography carries conviction; a restrained timeline/grid language provides technical structure.

The Steven Bartlett site was studied as a quality and design-philosophy reference. The useful lessons are the strength of a full-canvas first impression, confident type, real photography, responsive art direction, section-by-section storytelling, and visible motion. PPC does not reuse its palette, fonts, layouts, copy, assets, or animation sequences.

## Audit finding → design response

| Current issue | Redesign response |
| --- | --- |
| Three primary CTAs are inert | Every major CTA is a normal semantic anchor to the verified clean Calendly event, covered by automated tests |
| GoHighLevel calendar does not match the owner-specified Calendly event | The preview bypasses the old calendar and links directly to Calendly; migration mismatch is documented |
| High-friction 14-step survey | Qualification moves into clear fit/FAQ copy; Calendly retains scheduling and any owner-configured questions |
| Generic purple funnel styling | Near-black, warm paper, and one signal-orange accent derived from studio record/meter language |
| Terence is visually secondary | Real Terence imagery owns the hero, overview video, and coach story |
| Repetitive centered blocks | Alternating full-canvas editorial compositions, rules, ledgers, and a sticky arrangement sequence |
| Huge external testimonial wall | A small set of existing attributable testimonials is curated into a manual editorial sequence |
| Weak mobile / clipped content | Mobile gets a different media crop, type scale, navigation, section spacing, and non-sticky process layout |
| Broken legal host | Archived owner-authored pages are preserved locally and explicitly flagged for owner/legal review |
| Empty robots/sitemap and missing canonical | Preview-safe noindex/robots behavior, production canonical strategy, social metadata, semantic headings, and a launch checklist |
| Heavy third-party runtime | Static Astro output, local optimized images/fonts, no framework hydration, and lazy Vimeo loading |

## Brand translation

The page uses production concepts abstractly:

- a thin playback/progress line rather than decorative waveforms;
- track labels and timecode-like indices rather than a literal DAW UI;
- hard editorial rules rather than glass cards;
- signal orange as a recording/action cue rather than neon gradients;
- monochrome studio photography with selective color rather than stock DJ imagery;
- compact production language (“listen,” “focus,” “finish”) rather than hype slogans.

## Copy strategy

The strongest claim is framed as the work: finishing music with clearer decisions and detailed feedback. Existing major-artist, experience, certification, and testimonial claims remain at or below their current strength and are listed for owner verification. The redesign removes the unverified “five spots” scarcity line and avoids promises of chart positions, placements, income, or guaranteed results.

## Technology decision

Astro with TypeScript and plain CSS/JavaScript is selected because it provides:

- fully static GitHub Pages output;
- semantic multi-page legal routes;
- zero client JavaScript by default;
- componentized, maintainable source;
- optimized local assets;
- predictable base-path handling;
- no backend or paid runtime.

No animation framework is required. IntersectionObserver, CSS transitions, and one requestAnimationFrame scroll-progress update deliver the intended motion at a much smaller cost.


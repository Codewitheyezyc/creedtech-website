# Creed Tech — Homepage Layout Concept

Built on the 12-column grid, Inter + Roboto Mono, and the navy-primary palette matching the stacked-blocks logo. One deliberate grid-break lives in the Pillars section — everywhere else stays disciplined and consistent, per the design principles already set.

---

## 1. Header / Nav
```
[ Stacked-blocks logo + "Creed Tech" ]      Home  What We Do  About  [ Start a Project → ]
```
- Simple, fixed/sticky nav, minimal — logo left, links center-right, one clear CTA button (navy fill) on the far right
- No dropdown clutter — four items max

## 2. Hero Section — centered, single-column (Notion/Linear-style)
```
              [ eyebrow label, Roboto Mono, uppercase, tracked-out ]
                    "SOFTWARE STUDIO — LAGOS, NIGERIA"

     [ Bold Inter headline, centered — sized so the full hero (through
       both buttons) fits within the viewport without scrolling, roughly
       48-56px desktop, scaling down responsively. Our headline is longer
       than a typical hero line, so it needs a smaller size than a short
       Notion-style headline would use, to avoid wrapping to too many
       lines and pushing the buttons below the fold. One word — "grow"
       — is styled as an inline pill (rounded background, Warm Amber or
       Steel Blue Tint fill, same text size as the rest of the headline),
       similar to how Notion highlights "Scale" inline in their headline ]
        "We build software that helps people and
         companies [grow] — from a first idea to
         something much bigger."

              [ One-line subtext, centered, Slate Gray ]
        Products for founders, small businesses, and
        companies ready for their next stage of growth.

     [ Primary CTA: Start a Project ]   [ Secondary: See What We Do ]
              (both centered, side by side)
```
- Everything centered horizontally as a single column — no side-by-side text/graphic split
- No logo mark in the hero — just eyebrow, headline, subtext, buttons
- The entire hero must be visible within the viewport on a standard desktop screen, without scrolling — this governs the headline size more than any fixed pixel target
- Generous whitespace above and below — no cramped hero

## 3. Pillars Section — classic, scalable pattern
Designed as a simple numbered list, alternating layout side per row (text-left/visual-right, then reversed) — a proven pattern used by real SaaS products (Stripe, Linear, Notion) rather than an experimental composition. This scales cleanly if a 5th, 6th, or later pillar gets added — each is just another row in the same pattern, no redesign needed:
```
01   [ SaaS for Companies ]                    [ visual/illustration ]
     Build software that helps your
     business sell more and run better.
     [ "Proven" tag ]

     [ visual/illustration ]                    02   [ Startup Growth ]
                                                      From a first idea to your
                                                      first million — we build the
                                                      software as you grow.

03   [ For Individuals & Small Business ]      [ visual/illustration ]
     Simple, affordable tools — websites,
     stores, booking systems — built for
     exactly where you are.

     [ visual/illustration ]                    04   [ Scaling Established Companies ]
                                                      Already growing? We help you
                                                      scale further, with the systems
                                                      to match.
```
- Numbers set in Roboto Mono, quiet and functional, not decorative — same principle as before, just in a layout that scales
- Distinctiveness comes from restraint, copy quality, and craft in the details — not from an unusual layout shape, consistent with how real SaaS products actually differentiate

## 4. AI-Native Section
```
[ Eyebrow: "HOW WE BUILD" ]

"AI isn't a feature we bolted on. It's in
 everything we build."

[ Four short lines, one per pillar, showing AI's
  role inside each — pulled directly from the AI
  positioning already decided ]
```
- Plain paragraph section, no icon grid, no gradient card decorations — text-led, confident, restrained

## 5. Proof Section
```
[ Eyebrow: "WHAT WE'VE BUILT" ]

  [ Cognara case study card ]
  An AI-powered adaptive learning platform —
  our first real product, live today.
  → View Cognara
```
- Deliberately singular right now (only one proven case study) rather than padded with placeholder logos or fake testimonials — matches the honest-framing principle from earlier: "what we've built" vs. "what we're built to do"

## 6. Final CTA Section
```
        "Have an idea, a business, or a
         company ready to grow?"

        [ Start a Project → ]
```
- Full-width navy background, one clear action, no secondary competing button here — this is the one moment on the page allowed to be visually strongest

## 7. Footer — Notion-style, fuller layout
```
[ Logo mark + "Creed Tech" ]        EXPLORE            COMPANY
[ Short one-line tagline ]          What We Do          About
                                    Work                 Contact

[ Social icons row: Instagram, X/Twitter, LinkedIn, GitHub —
  placeholder links (#) until real URLs are provided ]

─────────────────────────────────────────────────────────
© 2026 Creed Tech. All rights reserved.
Creed Tech is part of the Creed Empire family of businesses.
```
- Fuller and more present than a minimal footer — logo + tagline on the left, two simple link columns (Explore, Company), a social icon row, then a bottom bar with copyright and the Creed Empire line
- Social icons use placeholder links until real URLs are added
- Stays in our own palette — Notion's footer is the structural reference (spacing, column layout, icon row), not its literal colors

---

## Design Notes Carried Through
- **Color:** Navy carries the CTA buttons and the one full-navy section (Final CTA) — everywhere else stays Charcoal/Paper/Slate, with illustrations and accents (badges, the H1 pill) carrying color confidently. Text and backgrounds stay mostly neutral/dark — same pattern as Notion's black-dominant-but-colorful-accents balance
- **Typography:** Inter for all headlines/body, Roboto Mono only for the eyebrow labels and the pillar numbers — small, functional touches, not decoration
- **Layout:** classic, proven SaaS conventions throughout (alternating text/visual rows, standard grid) — no experimental or artistic compositions. The pillars section scales to any number of pillars as the company grows, without needing a redesign
- **Illustrations:** every text-heavy section with empty adjacent space gets a simple flat coded illustration (same technique as the existing pillar graphics), so no section feels empty — this applies site-wide, not just the homepage
- **Background consistency:** every page uses ONE consistent background color throughout — no alternating full-width color bands between sections. Visual rhythm comes from spacing, card borders, and typography, not background color changes
- **Motion:** one subtle entrance animation on the hero mark, nothing looping or ambient elsewhere — matches the "restraint over decoration" rule
- **Honesty:** the Proof section deliberately stays small/singular rather than padded — this is the site visibly practicing the "what we've built vs. what we're built to do" principle, not just stating it
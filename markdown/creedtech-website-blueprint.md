# Creed Tech Website — Complete Blueprint

This completes the planning sequence: sitemap, every remaining page layout, technical architecture, and the build-discipline rules to hand to Antigravity. The homepage layout (already drafted separately) is included here in summary for completeness.

---

## 1. Sitemap

```
/                    Home
/what-we-do          The four pillars, in depth (one page, four sections)
/work                Proof — Cognara case study (expands as more are added)
/about               Company story, vision, Creed Empire context
/start-a-project     The multi-step request flow
/contact             Simple direct contact — for anything outside a project request
/faq                 Frequently asked questions — process, pricing, honesty
```

Kept deliberately lean — seven destinations, not a sprawling site. Each pillar gets a full section rather than its own separate page for v1, since that's less to build and maintain while still giving each pillar real depth; this can split into separate pages later if one pillar needs more room to grow.

---

## 2. Home (summary — full layout already drafted)

Header/Nav → Hero → Pillars (grid-break section) → AI-Native section → Proof section → Final CTA → Footer. See the separate homepage layout document for full detail.

---

## 3. What We Do

```
[ Page header ]
"What We Do"
One line: "Four ways we help people and companies build something bigger."

[ Section 01 — SaaS for Companies ]        [ small "Proven" tag ]
Full description (expanded from the pillar plan), who it's for,
what a typical engagement looks like, → "Start a Project" CTA

[ Section 02 — Startup Growth ]
Full description, what "growth" means at each stage, honest note
that this is an emerging offering, → CTA

[ Section 03 — Individuals & Small Business ]
Full description, example package types (simple site, store,
booking tool), pricing framed simply, → CTA

[ Section 04 — Scaling Established Companies ]
Full description, positioned as the natural next step after
Pillar 1, honest note this is emerging, → CTA
```
*Note: built to scale — currently four pillars, but the layout is a
repeating row pattern so a 5th, 6th, or later pillar can be added as
the company grows, without restructuring the page.*
- Each section alternates layout slightly (text-left/image-right, then reversed) for visual rhythm, but stays within the 12-column grid — no new grid-break here, that's reserved for the homepage
- Same honest-status-cue principle as the homepage: only Pillar 1 gets a "Proven" tag

---

## 4. Work (Proof / Case Studies)

```
[ Page header ]
"What We've Built"

[ Cognara case study — full width feature ]
What it is, who it's for, the problem it solves, a few real
details (AI-powered adaptive learning), → link to cognaralearn.com

[ Empty-state note for future entries, written honestly ]
"More case studies as they happen — we're just getting started."
```
- Deliberately doesn't pad this out with placeholder cards for pillars 2/3/4 — an honest single entry beats a padded grid of empty promises

---

## 5. About

```
[ Page header ]
"About Creed Tech"

[ Short manifesto-style paragraph, plain language ]
Why Creed Tech exists, the four-pillar vision, the belief behind
the name ("creed" = a core belief you build from)

[ Brief context ]
Creed Tech is part of the Creed Empire family of businesses.
```
- No first-person "I..." founder note — the page stays in company voice throughout, not personal/individual narration
- No stock "team photo grid" or fake leadership bios — stays honest to the current size of the company

---

## 6. Start a Project (the request flow)

Full step-by-step flow already scoped in the earlier "Service Request Flow" document. Screens needed:

```
Screen 1 — Who are you? (individual/small business, startup, existing company)
Screen 2 — What do you need? (options change based on Screen 1)
Screen 3 — Short project brief (3-5 questions, phrased per audience)
Screen 4 — Contact details + review
Screen 5 — Confirmation (message tone varies: fast/confident for
           Pillar 3, more deliberate for Pillar 2/4)
```
- One shared multi-step form component, not five separate page builds — branching logic controls what's shown, consistent with the "one funnel" decision made earlier

---

## 7. Contact

```
[ Simple page ]
"Rather just reach out directly?"
Email address, WhatsApp click-to-chat link, social links.
```
- Exists for anything that doesn't fit the project-request flow (press, partnerships, general questions) — not a duplicate of Start a Project

---

---

## 7a. FAQ

```
[ Page header ]
"Frequently Asked Questions"
One line: "Things people usually ask before starting a project."
```

**General**
- **What does Creed Tech actually do?** We build software — from full SaaS products for companies, to simple websites for individuals and small businesses, to helping startups and growing companies scale. See "What We Do" for the full breakdown.
- **Where is Creed Tech based? Do you work with clients outside Nigeria?** We're based in Lagos, Nigeria. Yes, we work with clients anywhere — most of our process happens remotely regardless of location.

**Process**
- **How does the "Start a Project" process work?** You answer a few quick questions about what you need, we review it, and reach out to talk it through — no long forms, no sales pressure.
- **How long does a typical project take?** It depends on scope — a simple site can take a couple of weeks; a custom SaaS platform takes longer. We'll give you a real timeline once we understand what you need.
- **Do I need to be technical to work with you?** Not at all. We handle the technical side — you just need to know what problem you're trying to solve.

**Pricing & Payment**
- **How much does a project cost?** Starting prices: SaaS for Companies from ₦2,500,000, Startup Growth from ₦1,500,000, Individuals & Small Business from ₦180,000, Scaling from ₦2,000,000. Final pricing depends on scope — these are starting points, not fixed quotes.
- **How do I pay, and in what currency?** In Naira, via Paystack. Most projects work on a deposit-then-balance structure — you don't pay the full amount upfront.
- **Is there a free consultation?** Yes — submitting a project request and the initial conversation are both free.

**Honesty**
- **Is the "Startup Growth" or "Scaling" service actually proven yet?** Honestly — these are newer offerings for us. Our SaaS-for-companies work is backed by real experience (including building Cognara). We're upfront about where we're still building our track record, rather than overselling it.
- **What if I'm not satisfied with the work?** Every proposal includes a review round before final delivery, so feedback gets addressed before we call anything finished.
```
- Written in the same plain, human tone as the rest of the site — no legalistic FAQ phrasing
- The "Honesty" section isn't hidden or softened — it's a direct extension of the same proven-vs-emerging framing used throughout the site

---

## 8. Technical Architecture Plan

**Frontend:** Next.js, Tailwind CSS, consistent with the rest of your stack. Desktop-first responsive (this is a marketing/company site, not a phone-first tool like OrderDesk) but fully responsive down to mobile.

**Content:** Static/CMS-free for v1 — page copy lives directly in the codebase rather than a headless CMS, since content changes will be infrequent and this keeps the build simple. Revisit a CMS only if content updates become frequent.

**Database (Supabase):** One core table needed — `project_requests`, storing the Start a Project flow submissions: pillar tag, answers (stored as structured data), contact info, status (new/reviewed/replied), timestamp.

**Notifications:** Resend — sends a confirmation email to the submitter, and an internal notification email to the Creed Tech team when a new request comes in. No WhatsApp/SMS automation needed here (that complexity is specific to OrderDesk); a simple WhatsApp click-to-chat link on the Contact page covers that need without any integration.

**Images:** Cloudinary — Cognara screenshots, logo assets, any team/founder photo used sparingly.

**Logo & Favicon:** One single logo asset — the stacked-blocks mark in multiple palette colors together (navy, amber, steel blue), not a single-color silhouette — used consistently everywhere the logo appears (header, footer, favicon, apple-touch-icon). No simplified or recolored variant; the same file is the single source of truth site-wide.

**Hosting:** Vercel, consistent with your other builds.

**Motion:** Framer Motion — used only for the homepage hero entrance and subtle section-reveal-on-scroll, per the "restraint over decoration" rule already established.

---

## 9. Build Rules — for `.antigravity/rules.md`

```
DESIGN & CONTENT RULES — apply to every response in this project.

Visual design:
- Never default to common AI-generated design patterns: no gradient hero
  sections, no glassmorphism, no generic icon-in-a-circle feature grids,
  no excessive rounded-corner shadow cards, no ambient decorative animation.
- Colors: use the defined design tokens — Ink Charcoal #14171A, Warm Paper
  #F7F5F0, Deep Navy #0B1F3A (primary), Steel Blue Tint #A9B8CC, Slate
  Gray #4A4F55, Warm Amber #E3A046 — WITH VISIBLE CONFIDENCE, not just as
  body text color or a single button fill. Specifically: fill badges/tags
  with solid navy or amber backgrounds and white text (not gray outlines);
  illustrations use the full palette boldly (navy, amber, steel blue
  together), not mostly gray with one small accent; style one word in the
  homepage H1 as an inline colored pill. Keep the page BACKGROUND itself
  one consistent color throughout (see Background rule below) — color
  confidence comes from illustrations, badges, and accents, not from
  shifting the page background. "Restrained" means purposeful, not
  absent — the page should never read as black-text-on-white with one
  colored button. Set up as reusable variables, never hardcoded hex values.
- Typography: Inter for all UI text and headings. Roboto Mono ONLY for
  small functional labels — eyebrow text, pillar numbers (01-04) —
  never for body copy.
- Spacing: strict 8px scale only (8/16/24/32/48/64/96px).
- Grid: standard 12-column grid throughout, including the homepage Pillars
  section — a classic alternating text/visual row pattern (like Stripe,
  Linear, Notion), NOT an experimental asymmetric composition. This must
  scale cleanly if pillars are added beyond the current four.
- Layout container: build ONE shared component — e.g. <PageContainer>
  with className="max-w-[1280px] mx-auto px-6 md:px-12" — and wrap every
  single page's content in it (Home, What We Do, Work, About, Contact,
  and any page added later). No page may have its own custom left-aligned
  wrapper. Every page must show equal, breathing space on both left and
  right edges on a wide desktop screen — this is a hard visual check to
  run on every page before considering a build step complete.
- Buttons: all buttons at the same hierarchy level (e.g. the two hero
  buttons, "Start a Project" + "See What We Do") must share identical
  height, padding, and font size — only fill/border style differs
  between primary and secondary. Build these from one shared Button
  component with size variants, never sized individually per instance.
- Mobile navigation: below the tablet breakpoint, the header collapses
  to a hamburger menu — logo stays visible, nav links (What We Do, Work,
  About, Contact) and the "Start a Project" button move into a slide-out
  or dropdown menu triggered by the hamburger icon. The "Start a Project"
  button must NOT float awkwardly in the collapsed header — it belongs
  inside the mobile menu (or as a clean full-width button at the top of
  the opened menu), not squeezed beside the hamburger icon.
- Mobile layout, generally: every page must be fully audited at mobile
  widths (375-428px), not just designed desktop-first and left to
  "auto-respond." Text must not overflow, wrap awkwardly, or overlap;
  buttons must not shrink below a comfortable tap target (~44px height);
  side padding must stay consistent (16-24px) at every breakpoint.
  entire page — no alternating full-width section background bands, no
  visible seams between sections. Visual rhythm comes from spacing, card
  borders, and typography, not background color shifts. Reference:
  notion.com stays visually consistent top to bottom on a given page.
- Illustrations: every text-heavy section with empty adjacent space gets
  a simple flat coded illustration (SVG/CSS, same technique as the
  pillar graphics already built) — no section should read as empty.
  This applies to every page, not just the homepage.
- Design language overall: classic, proven SaaS UI/UX conventions — clear
  nav, bold hero, alternating feature rows, honest proof section, final
  CTA, standard footer. Distinctiveness comes from restraint, copy
  quality, and craft in the details, not from unusual layout shapes.
  Restrained does NOT mean colorless or empty — a real modern SaaS
  product (Stripe, Notion, Linear) uses its palette confidently
  throughout, not sparingly to the point of looking unfinished.
- Motion: Framer Motion used sparingly — hero entrance and subtle
  scroll-reveals only, never looping or ambient.
- One primary action per screen/section. Avoid competing CTAs.

Content and copy:
- Plain, warm, direct language. No corporate SaaS phrasing ("leverage,"
  "seamless," "empower," "unlock," "cutting-edge," "revolutionize").
- Short sentences, one idea each.
- Be honest about proof: only Pillar 1 (SaaS for Companies) gets
  confidence-backed language ("proven," case study references). Pillars
  2, 3, 4 use ambitious-but-honest language, not overstated claims.
- The Work/case-studies page must never be padded with placeholder or
  fake entries — an honest single case study is correct, not a gap to fill.

General:
- Follow the attached blueprint precisely. Do not fill gaps with your
  own default assumptions — ask if something is ambiguous rather than
  guessing.
- Sitemap: Home, What We Do, Work, About, Start a Project, Contact —
  six pages only. Do not add extra pages without being asked.
```

---

## 10. Kickoff Prompt for Antigravity

```
Create a file at .antigravity/rules.md with the content from the
"Build Rules" section of the attached blueprint.

Then, using @creedtech-website-blueprint.md and @creedtech-homepage-layout.md:

Build the initial Next.js project scaffold for the Creed Tech website.

For this first pass, set up:
1. The project structure and routing for all six pages (Home, What We
   Do, Work, About, Start a Project, Contact) — placeholder content is
   fine for now on pages other than Home
2. The full Home page, built exactly to the homepage layout document
3. The Supabase schema for the `project_requests` table
4. Global design tokens (colors, type, spacing) set up as reusable
   variables per the rules file — nothing hardcoded

Stop after this and show me before continuing to the remaining pages
and the Start a Project flow logic.
```
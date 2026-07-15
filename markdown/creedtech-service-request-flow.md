# CreedTech — "Request a Service" User Flow

This walks through exactly what a company or small business does, screen by screen, from landing on the CreedTech app to CreedTech receiving their request. Two example visitors are run through it so you can see how the same flow adapts to different pillars.

---

## The Flow (Structure)

```
[Homepage / Pillar Page]
        |
        v
[ Start a Project ] <-- single entry point, whether clicked from
                          homepage or from a specific pillar section
        |
        v
STEP 1 — Who are you?
  ( ) An individual / small business
  ( ) A startup, still early
  ( ) An existing company
        |
        v
STEP 2 — What do you need? (options change based on Step 1 answer)
        |
        v
STEP 3 — Short project brief (3-5 quick questions, not a long form)
        |
        v
STEP 4 — Contact details + Review
        |
        v
STEP 5 — Confirmation screen
  "Thanks — here's what happens next, and when to expect a reply"
        |
        v
[ Lands in CreedTech's inbox/dashboard, sorted by pillar ]
        |
        v
CreedTech reviews -> replies (email/call) within a stated window
```

The key design decision: **one funnel, not four separate application forms.** A visitor doesn't need to know which "pillar" they belong to — the questions figure that out for them. This keeps the app simple and avoids making the visitor do CreedTech's internal categorization work.

---

## Walkthrough 1: Small Business Owner

**Amara runs a small skincare brand** and wants a simple online store. She heard about CreedTech from a friend.

1. **Lands on the homepage**, reads the CreedTech intro and sees the four pillars summarized. The "Individuals & Small Business" section has its own "Get Started" button.
2. **Clicks "Get Started"** under that section → she skips Step 1 entirely, since clicking from that specific section already tells the app who she is. (This is the shortcut: entering from a pillar page pre-fills Step 1.)
3. **Step 2 — What do you need?** She sees simple, plain-language options, not technical ones:
   - "A website to showcase my business"
   - "A store where customers can buy from me online"
   - "A booking/appointment system"
   - "Something else"
   She picks *"A store where customers can buy from me online."*
4. **Step 3 — Short brief.** 4 quick questions, phrased simply:
   - "What's your business called?"
   - "Do you already sell online anywhere (Instagram, WhatsApp, etc.)?"
   - "Roughly how many products do you sell?"
   - "Do you have a budget range in mind?" (with ranges as options, not a blank box — easier and less intimidating than typing a number)
5. **Step 4 — Contact details.** Name, email, phone/WhatsApp. One-screen review of her answers before submitting.
6. **Step 5 — Confirmation.** *"Thanks, Amara! We've received your request. Someone from CreedTech will reach out within 2 business days with next steps."*
7. Behind the scenes: this request lands tagged as **Pillar 3 (Individuals/Small Business)**, with her answers already organized — CreedTech doesn't have to do discovery from scratch on the first call.

---

## Walkthrough 2: Existing Company

**Tunde is the operations lead at a logistics company** that already has some internal software but wants to scale it and add automation.

1. **Lands on the homepage** via a Google search, reads through the pillars, clicks the main **"Start a Project"** button in the nav (not a specific pillar section, since he's not sure which one fits).
2. **Step 1 — Who are you?** He selects *"An existing company."*
3. **Step 2 — What do you need?** Since he selected "existing company," the options shown are different from Amara's:
   - "Build a new SaaS product for our business"
   - "Improve or scale a system we already have"
   - "Add AI/automation to our existing operations"
   - "Not sure yet — I'd like to talk it through"
   He picks *"Improve or scale a system we already have."*
4. **Step 3 — Short brief**, phrased for a company context (still short — 4-5 questions, not a 20-field form):
   - "Company name and what you do"
   - "What system are you looking to improve or scale?" (short text)
   - "Roughly how many users/customers does it currently serve?"
   - "What's the main goal — more users, more speed, more revenue, or something else?"
5. **Step 4 — Contact details**, including a company email and role.
6. **Step 5 — Confirmation.** *"Thanks — we've received your request. Since this is a scaling engagement, our team will review your answers and schedule a short call within 3 business days."*
7. Behind the scenes: tagged as **Pillar 4 (Scaling Existing Companies)** — this is your highest-trust, most careful pillar, so the confirmation message sets a slightly more deliberate (not instant) expectation, and internally it should probably route to a more senior review before any reply goes out.

---

## Where AI Fits in This Flow

This request flow is actually a natural, low-risk place to use AI in a way that's genuinely useful rather than a gimmick:

- **AI Brief Assistant (internal-facing):** once someone submits Step 3-4, an AI step can turn their raw answers into a clean, structured summary for CreedTech's team — "Amara Skincare: small business, wants e-commerce store, ~30 products, budget range ₦X, no existing online store" — so whoever reviews it doesn't have to re-read raw form fields.
- **Smart routing:** AI can help flag which requests look like a strong fit for a pilot case study (e.g., Pillar 2 and 4, which are unproven) versus routine work (Pillar 3), so those get prioritized for the extra care they need.
- **Optional dynamic follow-up question:** if an answer is vague (e.g., "not sure yet"), AI can generate one smart follow-up question instead of a generic form field — this is a nice, subtle "AI-native" touch a visitor will actually notice and appreciate, without it feeling like a chatbot bolted onto the site.

This keeps AI doing real work behind the scenes (saving CreedTech's team time, improving lead quality) rather than being a visible gimmick on the front end — consistent with the "AI woven into everything, not a separate flashy feature" positioning already decided.

---

## Why This Structure Matters for the Build

- **One flow, branching logic** means one intake system to build, not four separate forms — simpler to build and maintain.
- **Multi-step, short screens** (not one long form) matches the "clean, easy to understand" goal — each screen asks one thing.
- **Pillar-aware confirmation messaging** (instant/fast for Pillar 3, more deliberate for Pillar 2/4) quietly reinforces the honest positioning from earlier: CreedTech doesn't oversell the unproven pillars by promising the same fast turnaround as the proven one.
- **The data structure needed:** every submission needs at minimum — pillar tag, answers object, contact info, and status (new/reviewed/replied) — which is straightforward to model whenever the build phase starts.
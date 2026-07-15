/**
 * SINGLE SOURCE OF TRUTH for all pillar budget ranges and starting prices.
 *
 * To update pricing site-wide (FAQ + Start a Project form), edit ONLY this file.
 * Both /faq and /start-a-project import from here — no other file should hardcode ₦ figures.
 *
 * HOW startingFrom IS DERIVED:
 * - Pillars WITH budgetRanges: startingFrom is auto-derived from the first range entry.
 *   e.g. "Under ₦200,000" → FAQ shows "from ₦200,000". They are always in sync.
 * - Pillars WITHOUT budgetRanges: set priceNote with plain-language text shown in the FAQ card instead.
 */

export interface PillarPricing {
  /** Human-readable pillar label used in the FAQ pricing answer */
  label: string;
  /**
   * Shown in the FAQ card when a pillar has no fixed starting price.
   * Keep this short, plain, and friendly — no jargon.
   * Only set for pillars with empty budgetRanges.
   */
  priceNote?: string;
  /**
   * Budget range options shown in the Step 3 brief dropdown.
   * The first entry implicitly defines the starting price shown in the FAQ.
   * Leave empty [] for pillars that quote after the first conversation.
   */
  budgetRanges: string[];
}

export const PILLAR_PRICING: Record<string, PillarPricing> = {
  individuals_small_business: {
    label: "Individuals & Small Business",
    // startingFrom derived from first budgetRange below → "Under ₦200,000" → ₦200,000
    budgetRanges: [
      "Under ₦200,000",
      "₦200,000 – ₦500,000",
      "₦500,000 – ₦800,000",
      "₦800,000+",
    ],
  },
  startup_growth: {
    label: "Startup Growth",
    // startingFrom derived from first budgetRange below → "Under ₦800,000" → ₦800,000
    budgetRanges: [
      "Under ₦800,000",
      "₦800,000 – ₦1,600,000",
      "₦1,600,000 – ₦4,000,000",
      "₦4,000,000+",
    ],
  },
  saas_companies: {
    label: "SaaS for Companies",
    // No fixed price — we quote after our first call
    priceNote: "We'll give you a quote after a quick chat about your project.",
    budgetRanges: [],
  },
  scaling_companies: {
    label: "Scaling Established Companies",
    // No fixed price — we quote after our first call
    priceNote: "We'll give you a quote after a quick chat about your project.",
    budgetRanges: [],
  },
};

/**
 * Derive the FAQ "starting from" price for a pillar.
 * - If the pillar has budgetRanges, parse the ceiling of the first range.
 *   e.g. "Under ₦200,000" → "₦200,000"
 * - Otherwise returns empty string (use pillar.priceNote instead).
 */
export function getPillarStartingFrom(key: string): string {
  const p = PILLAR_PRICING[key];
  if (!p) return "";
  if (p.budgetRanges.length > 0) {
    const firstRange = p.budgetRanges[0];
    const match = firstRange.match(/(₦[\d,]+)/);
    return match ? match[1] : firstRange;
  }
  return "";
}

/**
 * Ordered list of pillars for rendering in the FAQ pricing answer.
 * Adjust the order here to change display order in the FAQ.
 */
export const FAQ_PRICING_ORDER = [
  "saas_companies",
  "startup_growth",
  "individuals_small_business",
  "scaling_companies",
] as const;

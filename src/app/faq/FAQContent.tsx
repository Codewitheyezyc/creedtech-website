"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import Button from "@/components/Button";
import { PILLAR_PRICING, FAQ_PRICING_ORDER, getPillarStartingFrom } from "@/lib/pricing";

// ─── Illustrations ──────────────────────────────────────────────────────────

/** Chat-bubbles illustration for the General section */
function GeneralIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* background rect */}
      <rect width="200" height="160" rx="6" fill="#F7F5F0" />
      {/* Left bubble (Navy) */}
      <rect x="14" y="28" width="110" height="36" rx="8" fill="#0B1F3A" />
      <polygon points="22,64 14,80 36,64" fill="#0B1F3A" />
      <rect x="24" y="40" width="70" height="5" rx="2.5" fill="#A9B8CC" />
      <rect x="24" y="50" width="50" height="5" rx="2.5" fill="#A9B8CC" opacity="0.6" />
      {/* Right bubble (Amber) */}
      <rect x="76" y="90" width="110" height="36" rx="8" fill="#E3A046" />
      <polygon points="178,126 186,142 164,126" fill="#E3A046" />
      <rect x="86" y="102" width="60" height="5" rx="2.5" fill="#0B1F3A" />
      <rect x="86" y="112" width="80" height="5" rx="2.5" fill="#0B1F3A" opacity="0.5" />
      {/* dot decorations */}
      <circle cx="172" cy="50" r="4" fill="#A9B8CC" opacity="0.5" />
      <circle cx="184" cy="62" r="3" fill="#E3A046" opacity="0.4" />
      <circle cx="28" cy="148" r="4" fill="#0B1F3A" opacity="0.15" />
    </svg>
  );
}

/** Process timeline for Process section */
function ProcessIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="200" height="160" rx="6" fill="#F7F5F0" />
      {/* Vertical spine */}
      <line x1="40" y1="20" x2="40" y2="145" stroke="#A9B8CC" strokeWidth="2" strokeDasharray="4 4" />
      {/* Steps */}
      {[
        { y: 30, fill: "#0B1F3A", label1: 80, label2: 60 },
        { y: 70, fill: "#E3A046", label1: 90, label2: 70 },
        { y: 110, fill: "#A9B8CC", label1: 75, label2: 55 },
      ].map((s, i) => (
        <g key={i}>
          <circle cx="40" cy={s.y} r="8" fill={s.fill} />
          <rect x="60" y={s.y - 10} width={s.label1} height="8" rx="3" fill={s.fill} opacity="0.2" />
          <rect x="60" y={s.y + 4} width={s.label2} height="6" rx="3" fill={s.fill} opacity="0.12" />
        </g>
      ))}
      {/* Checkmark in first node */}
      <path d="M36 30 L39 33 L44 27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** ₦ Pricing / currency illustration for Pricing section */
function PricingIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="200" height="160" rx="6" fill="#F7F5F0" />
      {/* Card base */}
      <rect x="20" y="30" width="160" height="100" rx="8" fill="#0B1F3A" />
      {/* Naira symbol large */}
      <text x="100" y="98" textAnchor="middle" fontSize="52" fontWeight="bold" fill="#E3A046" fontFamily="sans-serif">₦</text>
      {/* Card chip */}
      <rect x="36" y="46" width="28" height="20" rx="4" fill="#E3A046" />
      <line x1="36" y1="56" x2="64" y2="56" stroke="#0B1F3A" strokeWidth="1.5" />
      <line x1="50" y1="46" x2="50" y2="66" stroke="#0B1F3A" strokeWidth="1.5" />
      {/* Bottom stripe */}
      <rect x="20" y="108" width="160" height="22" rx="0" fill="#E3A046" opacity="0.15" />
      <line x1="36" y1="120" x2="164" y2="120" stroke="#A9B8CC" strokeWidth="1.5" strokeDasharray="6 4" />
    </svg>
  );
}

/** Handshake / trust illustration for Honesty section */
function HonestyIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="200" height="160" rx="6" fill="#F7F5F0" />
      {/* Left hand shape */}
      <path d="M30 100 C30 80 50 60 70 55 L90 70 L80 100 Z" fill="#0B1F3A" opacity="0.15" stroke="#0B1F3A" strokeWidth="1.5" />
      {/* Right hand */}
      <path d="M170 100 C170 80 150 60 130 55 L110 70 L120 100 Z" fill="#E3A046" opacity="0.25" stroke="#E3A046" strokeWidth="1.5" />
      {/* Clasped centre */}
      <ellipse cx="100" cy="85" rx="22" ry="18" fill="#A9B8CC" opacity="0.5" stroke="#0B1F3A" strokeWidth="1.5" />
      {/* Fingerlines */}
      <line x1="88" y1="75" x2="78" y2="65" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="94" y1="72" x2="86" y2="60" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="112" y1="75" x2="122" y2="65" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="106" y1="72" x2="114" y2="60" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" />
      {/* Star / trust mark */}
      <circle cx="100" cy="130" r="10" fill="#E3A046" />
      <path d="M100 122 L102 127 L108 127 L103 131 L105 137 L100 133 L95 137 L97 131 L92 127 L98 127 Z" fill="white" />
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

interface FAQItem {
  q: string;
  a: string | React.ReactNode;
}

interface FAQSection {
  category: string;
  illustration: React.ReactNode;
  items: FAQItem[];
}

const FAQ_SECTIONS: FAQSection[] = [
  {
    category: "General",
    illustration: <GeneralIllustration />,
    items: [
      {
        q: "What does Creed Tech actually do?",
        a: (
          <>
            We build software — from full SaaS products for companies, to simple websites for individuals and small businesses, to helping startups and growing companies scale. See{" "}
            <Link href="/what-we-do" className="text-navy underline underline-offset-2 hover:text-amber transition-colors">
              What We Do
            </Link>{" "}
            for the full breakdown.
          </>
        ),
      },
      {
        q: "Where is Creed Tech based? Do you work with clients outside Nigeria?",
        a: "We're based in Lagos, Nigeria. Yes, we work with clients anywhere — most of our process happens remotely regardless of location.",
      },
    ],
  },
  {
    category: "Process",
    illustration: <ProcessIllustration />,
    items: [
      {
        q: 'How does the "Start a Project" process work?',
        a: (
          <>
            You answer a few quick questions about what you need, we review it, and reach out to talk it through — no long forms, no sales pressure.{" "}
            <Link href="/start-a-project" className="text-navy underline underline-offset-2 hover:text-amber transition-colors">
              Start here.
            </Link>
          </>
        ),
      },
      {
        q: "How long does a typical project take?",
        a: "It depends on scope — a simple site can take a couple of weeks; a custom SaaS platform takes longer. We'll give you a real timeline once we understand what you need.",
      },
      {
        q: "Do I need to be technical to work with you?",
        a: "Not at all. We handle the technical side — you just need to know what problem you're trying to solve.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    illustration: <PricingIllustration />,
    items: [
      {
        q: "How much does a project cost?",
        a: (
          <div className="space-y-3">
            <p className="font-sans text-sm text-slate-gray leading-relaxed">
              Every pillar has a different starting point. These are the minimum entry prices — final cost depends on your specific scope.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {FAQ_PRICING_ORDER.map((key) => {
                const p = PILLAR_PRICING[key];
                const startingFrom = getPillarStartingFrom(key);
                return (
                  <div key={key} className="border border-steel-blue/20 rounded p-3 bg-paper flex flex-col gap-1">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-navy font-bold">{p.label}</span>
                    {startingFrom ? (
                      <span className="font-sans text-sm font-bold text-charcoal">Starting from {startingFrom}</span>
                    ) : (
                      <span className="font-sans text-xs text-slate-gray leading-normal">{p.priceNote}</span>
                    )}
                  </div>
                );
              })}
            </div>
            <p className="font-sans text-xs text-slate-gray/80 leading-relaxed">
              Payment is in Naira. Most projects use a deposit-then-balance structure — you don't pay everything upfront.
            </p>
          </div>
        ),
      },
      {
        q: "How do I pay, and in what currency?",
        a: "In Naira, via Paystack. Most projects work on a deposit-then-balance structure — you don't pay the full amount upfront.",
      },
      {
        q: "Is there a free consultation?",
        a: "Yes — submitting a project request and the initial conversation are both free.",
      },
    ],
  },
  {
    category: "Honesty",
    illustration: <HonestyIllustration />,
    items: [
      {
        q: 'Is the "Startup Growth" or "Scaling" service actually proven yet?',
        a: "Honestly — these are newer offerings for us. Our SaaS-for-companies work is backed by real experience (including building Cognara). We're upfront about where we're still building our track record, rather than overselling it.",
      },
      {
        q: "What if I'm not satisfied with the work?",
        a: "Every proposal includes a review round before final delivery, so feedback gets addressed before we call anything finished.",
      },
    ],
  },
];

// ─── Accordion Item ───────────────────────────────────────────────────────────

function AccordionItem({ q, a, isOpen, onToggle }: { q: string; a: string | React.ReactNode; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-steel-blue/20 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full text-left py-4 flex items-start justify-between gap-4 group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-sans text-sm font-semibold text-navy group-hover:text-navy/80 transition-colors leading-snug pr-2">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-5 h-5 rounded-full border border-steel-blue/40 flex items-center justify-center transition-all duration-200 mt-0.5 ${
            isOpen ? "bg-navy border-navy rotate-45" : "bg-paper group-hover:border-navy"
          }`}
        >
          <svg className={`w-2.5 h-2.5 ${isOpen ? "text-paper" : "text-navy"}`} viewBox="0 0 10 10" fill="none">
            <line x1="5" y1="1" x2="5" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 pr-8">
              <div className="font-sans text-sm text-slate-gray leading-relaxed">{a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FAQPage() {
  // Track which item is open per-section: sectionIdx → itemIdx | null
  const [openMap, setOpenMap] = useState<Record<number, number | null>>({});

  const toggle = (sectionIdx: number, itemIdx: number) => {
    setOpenMap((prev) => ({
      ...prev,
      [sectionIdx]: prev[sectionIdx] === itemIdx ? null : itemIdx,
    }));
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-16 border-b border-steel-blue/20 bg-paper">
        <PageContainer>
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-navy font-bold block">
              GOOD QUESTIONS
            </span>
            <h1 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-charcoal">
              Frequently Asked Questions
            </h1>
            <p className="font-sans text-base text-slate-gray max-w-2xl mt-1">
              Things people usually ask before starting a project.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-paper">
        <PageContainer>
          <div className="space-y-20">
            {FAQ_SECTIONS.map((section, sIdx) => {
              const isEven = sIdx % 2 === 0;
              return (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-steel-blue/20 pb-16 last:border-b-0 last:pb-0"
                >
                  {/* Accordion Q&A block */}
                  <div
                    className={`lg:col-span-7 space-y-1 order-2 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* Section label */}
                    <div className="mb-5">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-navy font-bold bg-steel-blue-soft px-2 py-1 rounded">
                        {section.category}
                      </span>
                    </div>

                    {/* Accordion items */}
                    <div className="border border-steel-blue/20 rounded-lg overflow-hidden bg-paper divide-y-0 px-4">
                      {section.items.map((item, iIdx) => (
                        <AccordionItem
                          key={iIdx}
                          q={item.q}
                          a={item.a}
                          isOpen={openMap[sIdx] === iIdx}
                          onToggle={() => toggle(sIdx, iIdx)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Illustration */}
                  <div
                    className={`lg:col-span-5 order-1 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } bg-paper border border-steel-blue/30 rounded-lg p-4 shadow-sm`}
                  >
                    {section.illustration}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-paper border-t border-steel-blue/20">
        <PageContainer>
          <div className="max-w-xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-navy font-bold block">
              READY TO GO?
            </span>
            <h2 className="font-sans text-2xl font-bold text-charcoal tracking-tight">
              Still have a question?
            </h2>
            <p className="font-sans text-sm text-slate-gray leading-relaxed">
              The best way is to just reach out — no commitment, no pressure.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/start-a-project" variant="primary" size="md">
                Start a Project →
              </Button>
              <Button href="/contact" variant="secondary" size="md">
                Contact Us
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}

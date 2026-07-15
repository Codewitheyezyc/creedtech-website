"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageContainer from "@/components/PageContainer";
import Button from "@/components/Button";

// Bold, modern custom illustrations using the full token palette (Navy, Amber, Steel Blue)
function SaasIllustration() {
  return (
    <svg className="w-full h-full max-h-64" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" rx="6" fill="#F7F5F0" />
      <rect x="10" y="10" width="180" height="130" rx="4" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
      {/* Sidebar in Deep Navy */}
      <rect x="10" y="10" width="40" height="130" fill="#0B1F3A" rx="4" />
      <line x1="20" y1="30" x2="30" y2="30" stroke="#A9B8CC" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="20" y1="45" x2="35" y2="45" stroke="#A9B8CC" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="20" y1="60" x2="28" y2="60" stroke="#A9B8CC" strokeWidth="2.5" strokeLinecap="round" />
      {/* Main Content Dashboard - Steel Blue fill panel */}
      <rect x="60" y="20" width="120" height="40" rx="3" fill="#A9B8CC" fillOpacity="0.3" stroke="#A9B8CC" strokeWidth="1.5" />
      <circle cx="80" cy="40" r="10" fill="#E3A046" />
      <line x1="98" y1="35" x2="160" y2="35" stroke="#0B1F3A" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="98" y1="45" x2="140" y2="45" stroke="#4A4F55" strokeWidth="1.5" strokeLinecap="round" />
      {/* Chart with Amber line */}
      <rect x="60" y="70" width="120" height="60" rx="3" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
      <path d="M 70 115 L 90 95 L 110 102 L 130 80 L 150 85 L 170 75" stroke="#E3A046" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="70" cy="115" r="3.5" fill="#0B1F3A" />
      <circle cx="90" cy="95" r="3.5" fill="#0B1F3A" />
      <circle cx="110" cy="102" r="3.5" fill="#0B1F3A" />
      <circle cx="130" cy="80" r="3.5" fill="#0B1F3A" />
      <circle cx="150" cy="85" r="3.5" fill="#0B1F3A" />
      <circle cx="170" cy="75" r="4.5" fill="#E3A046" />
    </svg>
  );
}

function StartupIllustration() {
  return (
    <svg className="w-full h-full max-h-64" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" rx="6" fill="#0B1F3A" />
      {/* Grid background in Steel Blue */}
      <line x1="20" y1="10" x2="20" y2="140" stroke="#A9B8CC" strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="3 3" />
      <line x1="60" y1="10" x2="60" y2="140" stroke="#A9B8CC" strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="3 3" />
      <line x1="100" y1="10" x2="100" y2="140" stroke="#A9B8CC" strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="3 3" />
      <line x1="140" y1="10" x2="140" y2="140" stroke="#A9B8CC" strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="3 3" />
      <line x1="180" y1="10" x2="180" y2="140" stroke="#A9B8CC" strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="3 3" />
      <line x1="10" y1="30" x2="190" y2="30" stroke="#A9B8CC" strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="3 3" />
      <line x1="10" y1="75" x2="190" y2="75" stroke="#A9B8CC" strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="3 3" />
      <line x1="10" y1="120" x2="190" y2="120" stroke="#A9B8CC" strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="3 3" />
      {/* Dashboard element with Steel Blue fill */}
      <rect x="25" y="20" width="80" height="35" rx="3" fill="#A9B8CC" fillOpacity="0.3" stroke="#A9B8CC" strokeWidth="1" />
      <rect x="35" y="30" width="40" height="6" rx="2" fill="#E3A046" />
      <rect x="35" y="40" width="60" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.8" />
      {/* Rising growth line in Amber */}
      <path d="M 20 130 C 50 120, 85 95, 115 65 C 145 35, 160 20, 180 15" stroke="#E3A046" strokeWidth="4" strokeLinecap="round" />
      {/* Performance Nodes */}
      <circle cx="20" cy="130" r="4.5" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1" />
      <circle cx="67" cy="115" r="4.5" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1" />
      <circle cx="115" cy="65" r="4.5" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1" />
      <circle cx="148" cy="35" r="5" fill="#A9B8CC" />
      <circle cx="180" cy="15" r="7" fill="#E3A046" />
      <path d="M 174 21 L 186 9 L 188 18 Z" fill="#E3A046" />
    </svg>
  );
}

function SmallBizIllustration() {
  return (
    <svg className="w-full h-full max-h-64" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" rx="6" fill="#F7F5F0" />
      {/* Storefront background element */}
      <rect x="30" y="45" width="140" height="85" rx="4" fill="#A9B8CC" fillOpacity="0.25" stroke="#0B1F3A" strokeWidth="1.5" />
      {/* Awning in alternating Deep Navy and Amber stripes */}
      <path d="M 25 40 L 175 40 L 165 65 L 155 40 L 145 65 L 135 40 L 125 65 L 115 40 L 105 65 L 95 40 L 85 65 L 75 40 L 65 65 L 55 40 L 45 65 L 35 40 L 25 40 Z" fill="#0B1F3A" stroke="#0B1F3A" strokeWidth="1" />
      {/* Additional stripes */}
      <path d="M 35 40 L 45 40 L 55 40 M 75 40 L 85 40 L 95 40 M 115 40 L 125 40 L 135 40 M 155 40 L 165 40 L 175 40" stroke="#E3A046" strokeWidth="2" />
      {/* Door in Navy */}
      <rect x="50" y="80" width="30" height="50" rx="1" fill="#0B1F3A" stroke="#0B1F3A" strokeWidth="1" />
      <circle cx="72" cy="105" r="2.5" fill="#E3A046" />
      {/* Window with Amber items inside */}
      <rect x="95" y="80" width="55" height="35" rx="1" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
      <line x1="122" y1="80" x2="122" y2="115" stroke="#0B1F3A" strokeWidth="1.5" />
      <line x1="95" y1="97" x2="150" y2="97" stroke="#0B1F3A" strokeWidth="1.5" />
      <rect x="102" y="85" width="12" height="8" fill="#E3A046" rx="1" />
      <rect x="132" y="85" width="12" height="8" fill="#A9B8CC" rx="1" />
    </svg>
  );
}

function ScalingIllustration() {
  return (
    <svg className="w-full h-full max-h-64" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" rx="6" fill="#F7F5F0" />
      {/* Background grids */}
      <circle cx="100" cy="75" r="60" stroke="#A9B8CC" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />
      {/* 3 blocks with Navy, Steel Blue, and Amber fills */}
      <rect x="25" y="85" width="35" height="40" rx="4" fill="#A9B8CC" stroke="#0B1F3A" strokeWidth="1.5" />
      <rect x="75" y="60" width="45" height="65" rx="4" fill="#0B1F3A" stroke="#0B1F3A" strokeWidth="1.5" />
      <rect x="135" y="30" width="45" height="95" rx="4" fill="#E3A046" stroke="#0B1F3A" strokeWidth="1.5" />
      {/* Dynamic connection lines in Navy and Amber */}
      <path d="M 60 105 L 75 105" stroke="#0B1F3A" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M 120 92 L 135 92" stroke="#E3A046" strokeWidth="2" strokeDasharray="3 3" />
      {/* Nodes inside blocks */}
      <circle cx="42" cy="105" r="4.5" fill="#0B1F3A" />
      <circle cx="97" cy="92" r="4.5" fill="#FFFFFF" />
      <circle cx="157" cy="75" r="5" fill="#0B1F3A" />
      <circle cx="157" cy="50" r="5" fill="#FFFFFF" />
    </svg>
  );
}

interface PillarData {
  num: string;
  title: string;
  isProven: boolean;
  statusText: string;
  description: string;
  whoItIsFor: string;
  engagement: string;
  ctaText: string;
  illustration: React.ReactNode;
  pillarParam: string;
}

const PILLARS_DATA: PillarData[] = [
  {
    num: "01",
    title: "SaaS Product Development for Companies",
    isProven: true,
    statusText: "Proven capability based on building our own SaaS platforms, now offered to select client companies.",
    description: "We design and build custom SaaS platforms, operational dashboards, and internal business tools. Whether you need to digitize operations, manage logistics, or automate sales operations, we translate complex business requirements into high-performing, clean software.",
    whoItIsFor: "Established companies looking to automate manual processes, replace spreadsheets, or build new software to improve business functions.",
    engagement: "We start with our blueprint discovery methodology to map workflows, followed by defining a clean MVP scope. Projects are delivered in productized stages with an optional post-launch maintenance and hosting retainer.",
    ctaText: "Start a Company SaaS Project →",
    illustration: <SaasIllustration />,
    pillarParam: "saas_companies",
  },
  {
    num: "02",
    title: "Startup Growth — From Idea to Scale",
    isProven: false,
    statusText: "Emerging offering. Currently validating our vision with a pilot cohort of early-stage startup partners.",
    description: "We partner with early-stage founders to build their technology foundations. Beyond writing code, we help you validate your product concept, establish key metrics, and construct an MVP engineered to scale from your first user to your first million.",
    whoItIsFor: "Early-stage startup teams and founders with validated business concepts who need an active engineering partner.",
    engagement: "We establish a milestone-based roadmap (MVP launch, validation feedback loop, followed by scale infrastructure upgrades) under a hybrid service or cohort-based partnership model.",
    ctaText: "Apply for Startup Growth →",
    illustration: <StartupIllustration />,
    pillarParam: "startup_growth",
  },
  {
    num: "03",
    title: "Products for Individuals and Small Businesses",
    isProven: false,
    statusText: "Emerging offering. Productized packages designed for rapid turnaround.",
    description: "Accessible, affordable websites, e-commerce stores, and booking platforms. We build clean, high-speed digital assets tailored to personal brands, local consultants, and small retail businesses that need high-quality web representation without enterprise budgets.",
    whoItIsFor: "Solo entrepreneurs, creators, local shops, and professional service providers ready to launch an online presence.",
    engagement: "Choose from simplified, template-driven starter packages with transparent flat-rate pricing to keep turnaround times short and setup costs predictable.",
    ctaText: "Start a Small Business Project →",
    illustration: <SmallBizIllustration />,
    pillarParam: "individuals_small_business",
  },
  {
    num: "04",
    title: "Scaling Established Companies to Multi-Million Status",
    isProven: false,
    statusText: "Future capability. Currently developing case studies in Pillars 1 & 2 to establish a track record for high-scale enterprise engagements.",
    description: "Advanced technology for companies ready to optimize performance. We design database optimizations, automated workflows, and data pipelines to support large-scale user growth and high transaction volume.",
    whoItIsFor: "Revenue-generating companies needing database refactoring, performance audits, or advanced automation systems.",
    engagement: "A comprehensive infrastructure audit followed by a staged implementation of performance tuning, AI-native automation, and data pipeline integrations.",
    ctaText: "Inquire about Scaling Services →",
    illustration: <ScalingIllustration />,
    pillarParam: "scaling_companies",
  },
];

export default function WhatWeDoPage() {
  return (
    <div className="w-full">
      {/* Page Header - Warm Paper */}
      <section className="py-16 border-b border-steel-blue/20 bg-paper">
        <PageContainer>
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-navy font-bold block">
              HOW WE PARTNER
            </span>
            <h1 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-charcoal">
              What We Do
            </h1>
            <p className="font-sans text-base text-slate-gray max-w-2xl mt-1">
              Four ways we help people and companies build something bigger.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Repeating Rows Grid Section - Unified bg-paper */}
      <section className="py-16 bg-paper">
        <PageContainer>
          <div className="space-y-16">
            {PILLARS_DATA.map((pillar, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-steel-blue/20 pb-12 last:border-b-0 last:pb-0"
                >
                  {/* Content Block */}
                  <div
                    className={`lg:col-span-7 space-y-4 order-2 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-base font-bold text-navy">
                        {pillar.num}
                      </span>
                      <h2 className="font-sans text-xl font-bold text-navy">
                        {pillar.title}
                      </h2>
                      {pillar.isProven && (
                        <span className="font-mono text-[9px] uppercase tracking-wider bg-navy text-paper px-2 py-0.5 rounded font-bold">
                          Proven
                        </span>
                      )}
                    </div>

                    {/* Honest Status Note */}
                    <p className="font-mono text-[11px] text-slate-gray/80 leading-relaxed border-l-2 border-amber pl-3">
                      <span className="font-bold text-navy uppercase text-[9px] mr-1">Status:</span>
                      {pillar.statusText}
                    </p>

                    {/* Core Description */}
                    <p className="font-sans text-sm text-slate-gray leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Additional Contexts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      <div className="space-y-1">
                        <h4 className="font-mono text-[9px] uppercase tracking-wider text-navy font-bold">
                          Who It's For
                        </h4>
                        <p className="font-sans text-xs text-slate-gray/95 leading-relaxed">
                          {pillar.whoItIsFor}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-mono text-[9px] uppercase tracking-wider text-navy font-bold">
                          The Engagement
                        </h4>
                        <p className="font-sans text-xs text-slate-gray/95 leading-relaxed">
                          {pillar.engagement}
                        </p>
                      </div>
                    </div>

                    {/* CTA with pre-filtering query parameter */}
                    <div className="pt-2">
                      <Button href={`/start-a-project?pillar=${pillar.pillarParam}`} variant="primary" size="sm">
                        {pillar.ctaText}
                      </Button>
                    </div>
                  </div>

                  {/* Illustration Block */}
                  <div
                    className={`lg:col-span-5 order-1 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } bg-paper p-3 rounded-lg border border-steel-blue/30 shadow-sm`}
                  >
                    {pillar.illustration}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </PageContainer>
      </section>
    </div>
  );
}

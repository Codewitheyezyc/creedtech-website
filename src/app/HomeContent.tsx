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

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 2. Hero Section - Warm Paper */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-steel-blue/20 bg-paper">
        <PageContainer>
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            {/* Eyebrow Label */}
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-navy font-bold block">
              SOFTWARE STUDIO — LAGOS, NIGERIA
            </span>

            {/* Headline */}
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight text-charcoal leading-[1.15] max-w-3xl">
              We build software that helps people and companies{" "}
              <span className="inline-flex items-center gap-1.5 bg-amber text-charcoal px-3 py-0.5 rounded-full border border-charcoal/10 font-black whitespace-nowrap align-middle">
                <span className="w-2 h-2 rounded-full bg-navy"></span>
                grow
              </span>{" "}
              — from a first idea to something much bigger.
            </h1>

            {/* Subtext */}
            <p className="font-sans text-sm sm:text-base text-slate-gray max-w-2xl">
              Products for founders, small businesses, and companies ready for their next stage of growth.
            </p>

            {/* Centered CTA Buttons built from shared Button component */}
            <div className="flex flex-row items-center justify-center gap-3 pt-2">
              <Button href="/start-a-project" variant="primary" size="md">
                Start a Project
              </Button>
              <Button href="/what-we-do" variant="secondary" size="md">
                See What We Do
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 3. Pillars Section - Unified bg-paper */}
      <section className="py-16 bg-paper border-b border-steel-blue/20">
        <PageContainer>
          <div className="space-y-12">
            <div className="text-center">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-navy font-bold block mb-1">
                OUR PILLARS
              </span>
              <h2 className="font-sans text-2xl font-bold text-charcoal sm:text-3xl">
                A structured approach to building
              </h2>
            </div>

            {/* 12-Column Alternating Rows Grid */}
            <div className="space-y-12">
              {/* Pillar 01 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6 space-y-4 order-2 md:order-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xl font-bold text-navy">01</span>
                    <h3 className="font-sans text-lg font-bold text-navy">
                      SaaS for Companies
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-wider bg-navy text-paper px-2 py-0.5 rounded font-bold">
                      Proven
                    </span>
                  </div>
                  <p className="font-sans text-sm text-slate-gray leading-relaxed">
                    Build custom software that helps your business sell more and run better. We plan, design, and develop internal dashboards, operational tools, and customer portals tailored to your specific workflows.
                  </p>
                  <Button href="/start-a-project?pillar=saas_companies" variant="secondary" size="sm">
                    Start a project →
                  </Button>
                </div>
                <div className="md:col-span-6 order-1 md:order-2 bg-paper p-3 rounded-lg border border-steel-blue/30 shadow-sm">
                  <SaasIllustration />
                </div>
              </div>

              {/* Pillar 02 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6 bg-paper p-3 rounded-lg border border-steel-blue/30 shadow-sm">
                  <StartupIllustration />
                </div>
                <div className="md:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xl font-bold text-navy">02</span>
                    <h3 className="font-sans text-lg font-bold text-navy">
                      Startup Growth
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-slate-gray leading-relaxed">
                    From a first idea to your first million. We serve as your engineering partner, building validate-ready MVPs and setting up robust infrastructure that scales as your customer base expands.
                  </p>
                  <Button href="/start-a-project?pillar=startup_growth" variant="secondary" size="sm">
                    Start a project →
                  </Button>
                </div>
              </div>

              {/* Pillar 03 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6 space-y-4 order-2 md:order-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xl font-bold text-navy">03</span>
                    <h3 className="font-sans text-lg font-bold text-navy">
                      For Individuals & Small Business
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-slate-gray leading-relaxed">
                    Simple, affordable tools built for exactly where you are. We build fast, responsive websites, e-commerce stores, and booking engines to establish your online presence.
                  </p>
                  <Button href="/start-a-project?pillar=individuals_small_business" variant="secondary" size="sm">
                    Start a project →
                  </Button>
                </div>
                <div className="md:col-span-6 order-1 md:order-2 bg-paper p-3 rounded-lg border border-steel-blue/30 shadow-sm">
                  <SmallBizIllustration />
                </div>
              </div>

              {/* Pillar 04 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6 bg-paper p-3 rounded-lg border border-steel-blue/30 shadow-sm">
                  <ScalingIllustration />
                </div>
                <div className="md:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xl font-bold text-navy">04</span>
                    <h3 className="font-sans text-lg font-bold text-navy">
                      Scaling Established Companies
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-slate-gray leading-relaxed">
                    Already growing? We help you scale further. We audits your existing infrastructure, optimize database performance, and write advanced automations to keep pace with your company's growth.
                  </p>
                  <Button href="/start-a-project?pillar=scaling_companies" variant="secondary" size="sm">
                    Start a project →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 4. AI-Native Section - Warm Paper */}
      <section className="py-16 border-b border-steel-blue/20 bg-paper">
        <PageContainer>
          <div className="text-left space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-navy font-bold block mb-1">
                HOW WE BUILD
              </span>
              <h2 className="font-sans text-2xl font-bold text-navy leading-tight sm:text-3xl">
                AI isn't a feature we bolted on. It's in everything we build.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="border-l-2 border-navy pl-4 space-y-1">
                <span className="font-mono text-xs text-navy font-bold uppercase">Company SaaS</span>
                <p className="font-sans text-xs text-slate-gray leading-relaxed">
                  We embed AI-powered analytics, recommendation engines, and customer support automation into core business software.
                </p>
              </div>
              <div className="border-l-2 border-navy pl-4 space-y-1">
                <span className="font-mono text-xs text-navy font-bold uppercase">Startup Growth</span>
                <p className="font-sans text-xs text-slate-gray leading-relaxed">
                  We build AI-powered MVPs, leveraging our own direct experience building Cognara's adaptive learning engine.
                </p>
              </div>
              <div className="border-l-2 border-navy pl-4 space-y-1">
                <span className="font-mono text-xs text-navy font-bold uppercase">Small Business</span>
                <p className="font-sans text-xs text-slate-gray leading-relaxed">
                  We deploy content generators, simple support assistants, and smart scheduling tools into accessible web assets.
                </p>
              </div>
              <div className="border-l-2 border-navy pl-4 space-y-1">
                <span className="font-mono text-xs text-navy font-bold uppercase">Scaling Operations</span>
                <p className="font-sans text-xs text-slate-gray leading-relaxed">
                  We design custom forecasting tools and intelligent agents to optimize resources and streamline operations.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 5. Proof Section - Unified bg-paper */}
      <section className="py-16 border-b border-steel-blue/20 bg-paper">
        <PageContainer>
          <div className="text-left space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-navy font-bold block mb-1">
                WHAT WE'VE BUILT
              </span>
              <h2 className="font-sans text-xl font-bold text-charcoal">
                Our Case Studies
              </h2>
            </div>

            {/* Cognara Card */}
            <div className="bg-paper border border-steel-blue/30 p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm hover:border-navy transition-all duration-300">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-sans text-base font-bold text-navy">Cognara</h3>
                  <span className="font-mono text-[9px] uppercase tracking-wider bg-navy text-paper px-2 py-0.5 rounded font-bold">
                    SaaS for Companies
                  </span>
                </div>
                <p className="font-sans text-xs text-slate-gray max-w-xl leading-relaxed">
                  An AI-powered adaptive learning platform — our first real product, live today. It assesses knowledge gaps and dynamically generates custom curriculum.
                </p>
              </div>
              <div>
                <Button href="/work" variant="secondary" size="sm">
                  View Case Study →
                </Button>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 6. Final CTA Section - Deep Navy */}
      <section className="py-20 bg-navy text-paper text-center">
        <PageContainer>
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight">
              Have an idea, a business, or a company ready to grow?
            </h2>
            <p className="font-sans text-sm text-steel-blue max-w-md mx-auto leading-relaxed">
              Let's build the engine to drive your next stage of growth.
            </p>
            <div className="pt-2">
              <Button href="/start-a-project" variant="accent" size="md">
                Start a Project →
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}

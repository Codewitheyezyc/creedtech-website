"use client";

import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import Button from "@/components/Button";

export default function WorkPage() {
  return (
    <div className="w-full">
      {/* Page Header - Warm Paper */}
      <section className="py-16 border-b border-steel-blue/20 bg-paper">
        <PageContainer>
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-navy font-bold block">
              OUR PORTFOLIO
            </span>
            <h1 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-charcoal">
              What We've Built
            </h1>
            <p className="font-sans text-base text-slate-gray max-w-2xl mt-1">
              Case studies and production-grade products built by our studio.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Case Studies Content - Unified bg-paper */}
      <section className="py-16 bg-paper">
        <PageContainer>
          <div className="space-y-8">
            {/* Cognara Case Study - Full Width Feature */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs uppercase tracking-wider text-amber font-bold bg-navy text-paper px-2 py-0.5 rounded">
                      Featured Project
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider bg-steel-blue text-navy px-2 py-0.5 rounded font-bold">
                      SaaS for Companies
                    </span>
                  </div>
                  <h2 className="font-sans text-2xl font-bold text-navy">
                    Cognara
                  </h2>
                  <p className="font-sans text-sm text-slate-gray leading-relaxed">
                    An AI-powered adaptive learning platform designed to customize study plans, assess knowledge gaps, and dynamically deliver educational content. Built for schools and organizations looking to modernize training and curriculum delivery.
                  </p>
                </div>
                <div>
                  <Button href="https://cognaralearn.com" external variant="primary" size="sm" className="whitespace-nowrap">
                    <span className="hidden sm:inline">Visit cognaralearn.com</span>
                    <span className="sm:hidden">Visit Cognara</span>
                    &nbsp;→
                  </Button>
                </div>
              </div>

              {/* Mockup visual */}
              <div className="md:w-80 h-48 bg-navy rounded border border-steel-blue/30 flex flex-col items-center justify-center p-4 text-center space-y-2 shadow-inner">
                <span className="font-sans font-bold text-lg text-paper tracking-tight">Cognara</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-steel-blue font-bold">
                  Adaptive Learning Platform
                </span>
                <div className="w-16 h-1 bg-amber rounded-full mt-2"></div>
              </div>
            </div>

            {/* Empty-state note */}
            <div className="bg-paper/50 p-6 border border-dashed border-steel-blue/40 rounded-lg text-center">
              <p className="font-sans text-sm text-slate-gray italic leading-relaxed">
                "More case studies as they happen — we're just getting started."
              </p>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}

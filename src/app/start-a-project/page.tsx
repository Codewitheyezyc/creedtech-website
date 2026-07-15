"use client";

import React, { Suspense } from "react";
import PageContainer from "@/components/PageContainer";
import ProjectForm from "./ProjectForm";

export default function StartAProjectPage() {
  return (
    <div className="w-full">
      {/* Page Header - Warm Paper */}
      <section className="py-16 border-b border-steel-blue/20 bg-paper">
        <PageContainer>
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-navy font-bold block">
              INTAKE FUNNEL
            </span>
            <h1 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-charcoal">
              Start a Project
            </h1>
            <p className="font-sans text-base text-slate-gray max-w-2xl mt-1">
              Complete our short request form. We will route it to the correct pillar team.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Content Section - Unified bg-paper */}
      <section className="py-16 bg-paper">
        <PageContainer>
          <Suspense fallback={
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="w-6 h-6 border-2 border-navy border-t-transparent rounded-full animate-spin"></div>
              <span className="font-mono text-xs text-slate-gray">Loading Intake Form...</span>
            </div>
          }>
            <ProjectForm />
          </Suspense>
        </PageContainer>
      </section>
    </div>
  );
}

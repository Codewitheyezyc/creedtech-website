import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Creed Tech",
  description: "Who we are, why we build, and how we operate as a software studio based in Lagos, Nigeria.",
};


import Link from "next/link";
import PageContainer from "@/components/PageContainer";

// Flat coded illustration in studio palette representing manifesto / core belief foundations
function ManifestoIllustration() {
  return (
    <svg className="w-full h-full max-h-48" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" rx="6" fill="#0B1F3A" />
      <circle cx="100" cy="75" r="45" stroke="#A9B8CC" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />
      {/* Interlocking blocks symbolizing solid foundations */}
      <rect x="45" y="45" width="40" height="40" rx="4" fill="#A9B8CC" stroke="#F7F5F0" strokeWidth="1.5" />
      <rect x="80" y="65" width="40" height="40" rx="4" fill="#E3A046" stroke="#F7F5F0" strokeWidth="1.5" />
      <rect x="115" y="45" width="40" height="40" rx="4" fill="#F7F5F0" stroke="#0B1F3A" strokeWidth="1.5" />
      <circle cx="65" cy="65" r="3" fill="#0B1F3A" />
      <circle cx="100" cy="85" r="3" fill="#0B1F3A" />
      <circle cx="135" cy="65" r="3" fill="#E3A046" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Page Header - Warm Paper */}
      <section className="py-16 border-b border-steel-blue/20 bg-paper">
        <PageContainer>
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-navy font-bold block">
              OUR MANIFESTO
            </span>
            <h1 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-charcoal">
              About Creed Tech
            </h1>
            <p className="font-sans text-base text-slate-gray max-w-2xl mt-1">
              Who we are, why we build, and how we operate as a software studio.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* About Content - Unified bg-paper */}
      <section className="py-16 bg-paper">
        <PageContainer>
          <div className="space-y-8">
            {/* Manifesto Section - Structured as a Grid to include ManifestoIllustration */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <h2 className="font-sans text-xl font-bold text-navy">Our Core Belief</h2>
                <p className="font-sans text-sm text-slate-gray leading-relaxed">
                  Creed Tech exists to build digital products and growth engines that help people and businesses reach their full potential. The name <span className="font-bold text-navy">Creed</span> represents a core belief you build from — the starting foundation of every successful venture.
                </p>
                <p className="font-sans text-sm text-slate-gray leading-relaxed border-l-2 border-navy pl-4 italic">
                  Our vision is structured around four pillars: delivering custom SaaS for operating businesses, launching and nurturing early-stage startups, building simple websites and e-commerce tools for small businesses, and scaling mature operations with advanced data and automation tools.
                </p>
              </div>
              <div className="md:col-span-5">
                <ManifestoIllustration />
              </div>
            </div>

            {/* Corporate / Empire Context */}
            <div className="bg-navy text-paper p-6 rounded-lg shadow-md space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-amber font-bold">
                CORPORATE STRUCTURE
              </span>
              <h2 className="font-sans text-lg font-bold text-paper">
                Part of the Creed Empire
              </h2>
              <p className="font-sans text-xs text-steel-blue leading-relaxed">
                Creed Tech is a proud member of the <span className="font-medium text-paper">Creed Empire</span> family of businesses, a group dedicated to fostering enterprise, technology innovation, and growth across Nigeria and beyond.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}

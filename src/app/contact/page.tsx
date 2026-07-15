"use client";

import React from "react";
import PageContainer from "@/components/PageContainer";
import Button from "@/components/Button";

// Flat coded SVGs in studio palette for the contact sections
function EmailIllustration() {
  return (
    <svg className="w-full h-full max-h-32" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="100" rx="4" fill="#F7F5F0" />
      {/* Envelope widget in Deep Navy and Amber */}
      <rect x="25" y="20" width="100" height="60" rx="3" fill="#0B1F3A" stroke="#0B1F3A" strokeWidth="1.5" />
      <path d="M 25 25 L 75 60 L 125 25" stroke="#E3A046" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="50" y="52" width="50" height="18" rx="2" fill="#A9B8CC" fillOpacity="0.4" />
      <line x1="60" y1="61" x2="90" y2="61" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function WhatsAppIllustration() {
  return (
    <svg className="w-full h-full max-h-32" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="100" rx="4" fill="#F7F5F0" />
      {/* Conversation chat bubble widget in Navy, Amber and Steel Blue */}
      <rect x="20" y="15" width="85" height="50" rx="8" fill="#0B1F3A" />
      <path d="M 30 65 L 20 75 L 40 65" fill="#0B1F3A" />
      <line x1="40" y1="32" x2="85" y2="32" stroke="#A9B8CC" strokeWidth="3" strokeLinecap="round" />
      <line x1="40" y1="45" x2="75" y2="45" stroke="#A9B8CC" strokeWidth="3" strokeLinecap="round" />
      
      <circle cx="115" cy="65" r="18" fill="#E3A046" />
      {/* Simple checkmark */}
      <path d="M 108 65 L 113 70 L 123 60" stroke="#0B1F3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Page Header - Warm Paper */}
      <section className="py-16 border-b border-steel-blue/20 bg-paper">
        <PageContainer>
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-navy font-bold block">
              GET IN TOUCH
            </span>
            <h1 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-charcoal">
              Rather just reach out directly?
            </h1>
            <p className="font-sans text-base text-slate-gray max-w-2xl mt-1">
              For general questions, partnerships, press, or anything outside of a project request.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Contact Content - Unified bg-paper */}
      <section className="py-16 bg-paper">
        <PageContainer>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email contact */}
              <div className="bg-paper p-6 border border-steel-blue/30 rounded-lg grid grid-cols-1 sm:grid-cols-12 gap-4 shadow-sm hover:border-navy transition-all duration-300">
                <div className="sm:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider bg-navy text-paper px-2 py-0.5 rounded font-bold">
                      EMAIL
                    </span>
                    <h2 className="font-sans text-xl font-bold text-navy mt-2">
                      Email Us
                    </h2>
                    <p className="font-sans text-xs text-slate-gray leading-relaxed">
                      We usually respond within 24 business hours for all general inquiries.
                    </p>
                  </div>
                  <Button href="mailto:hello@creedtech.com" variant="secondary" size="sm" className="w-fit">
                    hello@creedtech.com
                  </Button>
                </div>
                <div className="sm:col-span-5 bg-paper p-1 rounded border border-steel-blue/20 flex items-center justify-center">
                  <EmailIllustration />
                </div>
              </div>

              {/* WhatsApp contact */}
              <div className="bg-paper p-6 border border-steel-blue/30 rounded-lg grid grid-cols-1 sm:grid-cols-12 gap-4 shadow-sm hover:border-navy transition-all duration-300">
                <div className="sm:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider bg-amber text-charcoal px-2 py-0.5 rounded font-bold">
                      WHATSAPP
                    </span>
                    <h2 className="font-sans text-xl font-bold text-navy mt-2">
                      WhatsApp Chat
                    </h2>
                    <p className="font-sans text-xs text-slate-gray leading-relaxed">
                      Send a quick message to our studio chat line for a rapid response.
                    </p>
                  </div>
                  <Button href="https://wa.me/234XXXXXXXXXX" external variant="secondary" size="sm" className="w-fit">
                    Chat on WhatsApp →
                  </Button>
                </div>
                <div className="sm:col-span-5 bg-paper p-1 rounded border border-steel-blue/20 flex items-center justify-center">
                  <WhatsAppIllustration />
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-paper p-6 border border-steel-blue/30 rounded-lg shadow-sm space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-navy font-bold block">
                Follow Creed Tech
              </span>
              <div className="flex gap-6 text-sm font-bold">
                <a
                  href="https://twitter.com/creedtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-gray hover:text-navy transition-colors border-b-2 border-transparent hover:border-navy pb-0.5"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com/company/creedtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-gray hover:text-navy transition-colors border-b-2 border-transparent hover:border-navy pb-0.5"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/creedtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-gray hover:text-navy transition-colors border-b-2 border-transparent hover:border-navy pb-0.5"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}

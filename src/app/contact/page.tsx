"use client";

import React from "react";
import PageContainer from "@/components/PageContainer";

// Flat coded SVGs in studio palette for the contact sections
function EmailIllustration() {
  return (
    <svg className="w-full h-full max-h-28" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="100" rx="4" fill="#F7F5F0" />
      <rect x="25" y="20" width="100" height="60" rx="3" fill="#0B1F3A" stroke="#0B1F3A" strokeWidth="1.5" />
      <path d="M 25 25 L 75 60 L 125 25" stroke="#E3A046" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="50" y="52" width="50" height="18" rx="2" fill="#A9B8CC" fillOpacity="0.4" />
      <line x1="60" y1="61" x2="90" y2="61" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function WhatsAppIllustration() {
  return (
    <svg className="w-full h-full max-h-28" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="100" rx="4" fill="#F7F5F0" />
      <rect x="20" y="15" width="85" height="50" rx="8" fill="#0B1F3A" />
      <path d="M 30 65 L 20 75 L 40 65" fill="#0B1F3A" />
      <line x1="40" y1="32" x2="85" y2="32" stroke="#A9B8CC" strokeWidth="3" strokeLinecap="round" />
      <line x1="40" y1="45" x2="75" y2="45" stroke="#A9B8CC" strokeWidth="3" strokeLinecap="round" />
      <circle cx="115" cy="65" r="18" fill="#E3A046" />
      <path d="M 108 65 L 113 70 L 123 60" stroke="#0B1F3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Inline icon components
function MailIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
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

      {/* Contact Cards */}
      <section className="py-16 bg-paper">
        <PageContainer>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Email card */}
              <div className="bg-paper border border-steel-blue/30 rounded-lg overflow-hidden shadow-sm hover:border-navy transition-all duration-300">
                {/* Illustration strip */}
                <div className="border-b border-steel-blue/20 bg-paper px-4 pt-4 pb-3">
                  <EmailIllustration />
                </div>
                {/* Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider bg-navy text-paper px-2 py-0.5 rounded font-bold">
                      EMAIL
                    </span>
                    <h2 className="font-sans text-lg font-bold text-navy mt-2">Email Us</h2>
                    <p className="font-sans text-xs text-slate-gray leading-relaxed mt-1">
                      We usually respond within 24 business hours for all general inquiries.
                    </p>
                  </div>
                  <a
                    href="mailto:hello@creedtech.com"
                    className="w-full h-11 flex items-center justify-center gap-2 border-2 border-navy text-navy font-sans font-semibold text-xs uppercase tracking-wider rounded hover:bg-navy hover:text-paper active:scale-[0.98] transition-all duration-200"
                  >
                    <MailIcon />
                    hello@creedtech.com
                  </a>
                </div>
              </div>

              {/* WhatsApp card */}
              <div className="bg-paper border border-steel-blue/30 rounded-lg overflow-hidden shadow-sm hover:border-navy transition-all duration-300">
                {/* Illustration strip */}
                <div className="border-b border-steel-blue/20 bg-paper px-4 pt-4 pb-3">
                  <WhatsAppIllustration />
                </div>
                {/* Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider bg-amber text-charcoal px-2 py-0.5 rounded font-bold">
                      WHATSAPP
                    </span>
                    <h2 className="font-sans text-lg font-bold text-navy mt-2">WhatsApp Chat</h2>
                    <p className="font-sans text-xs text-slate-gray leading-relaxed mt-1">
                      Send a quick message to our studio chat line for a rapid response.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/234XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-11 flex items-center justify-center gap-2 bg-[#25D366] text-white font-sans font-semibold text-xs uppercase tracking-wider rounded hover:bg-[#20bb5a] active:scale-[0.98] transition-all duration-200"
                  >
                    <WhatsAppIcon />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-steel-blue/20 space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-navy font-bold block">
                Follow Creed Tech
              </span>
              <div className="flex flex-wrap gap-6 text-sm font-bold">
                <a href="https://twitter.com/creedtech" target="_blank" rel="noopener noreferrer"
                  className="text-slate-gray hover:text-navy transition-colors border-b-2 border-transparent hover:border-navy pb-0.5">
                  Twitter
                </a>
                <a href="https://linkedin.com/company/creedtech" target="_blank" rel="noopener noreferrer"
                  className="text-slate-gray hover:text-navy transition-colors border-b-2 border-transparent hover:border-navy pb-0.5">
                  LinkedIn
                </a>
                <a href="https://github.com/creedtech" target="_blank" rel="noopener noreferrer"
                  className="text-slate-gray hover:text-navy transition-colors border-b-2 border-transparent hover:border-navy pb-0.5">
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

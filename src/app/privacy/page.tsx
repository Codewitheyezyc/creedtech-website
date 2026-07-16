import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Privacy Policy — Creed Tech",
  description: "How Creed Tech collects, uses, and protects your information.",
};

const sections = [
  {
    title: "What we collect",
    body: "When you submit a project request or contact form, we collect your name, email, phone number, company name (if applicable), and any project details you share.",
  },
  {
    title: "Why we collect it",
    body: "Solely to respond to your request and, if you choose to work with us, to deliver the project. Nothing you share is used for any other purpose.",
  },
  {
    title: "How it's stored",
    body: "Your information is stored securely in our database and is not sold, rented, or shared with third parties, except as needed to deliver our services (e.g. payment processing through Paystack).",
  },
  {
    title: "Your rights",
    body: (
      <>
        You can request to see, correct, or delete your information at any time
        by contacting us at{" "}
        <a
          href="mailto:hello@creedtech.com"
          className="text-navy underline underline-offset-4 hover:text-navy/70 transition-colors"
        >
          hello@creedtech.com
        </a>
        .
      </>
    ),
  },
  {
    title: "Updates",
    body: "This policy may be updated from time to time; the most recent version will always be available on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-16 border-b border-steel-blue/20 bg-paper">
        <PageContainer>
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-navy font-bold block">
              LEGAL
            </span>
            <h1 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-charcoal">
              Privacy Policy
            </h1>
            <p className="font-sans text-base text-slate-gray max-w-2xl mt-1">
              How we handle your information, in plain terms.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-paper">
        <PageContainer>
          <div className="max-w-2xl space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="space-y-2">
                <h2 className="font-sans text-lg font-bold text-navy">
                  {section.title}
                </h2>
                <p className="font-sans text-sm text-slate-gray leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}

            {/* Divider */}
            <div className="border-t border-steel-blue/20 pt-8 space-y-2">
              <p className="font-sans text-xs text-slate-gray/70 leading-relaxed">
                This is a good-faith privacy notice appropriate for a lean
                studio site. It is not a substitute for formal legal review if
                our data handling grows more complex.
              </p>
              <p className="font-sans text-xs text-slate-gray/70">
                Last updated: July 2026
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/"
                className="font-sans text-sm font-semibold text-navy underline underline-offset-4 hover:text-navy/70 transition-colors"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}

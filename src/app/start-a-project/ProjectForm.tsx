"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { PILLAR_PRICING } from "@/lib/pricing";

// ─── Types ────────────────────────────────────────────────────────────────────

type WhoAreYouType = "individual_small_business" | "startup_growth" | "existing_company" | null;

interface BriefFormValues {
  // Individual / Small biz
  businessName?: string;
  sellsOnline?: string;
  productCount?: string;
  budgetSmallBiz?: string;
  // Startup
  startupConcept?: string;
  specReady?: string;
  launchTimeline?: string;
  budgetStartup?: string;
  // Existing company
  companyDescription?: string;
  systemToImprove?: string;
  userCount?: string;
  mainGoal?: string;
}

interface ContactFormValues {
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  companyName: string;
  role: string;
}

// ─── Inline error message component ──────────────────────────────────────────
function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="font-sans text-[11px] text-red-600 mt-1 flex items-center gap-1">
      <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 12 12" fill="currentColor">
        <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm-.75 3.75a.75.75 0 011.5 0v3a.75.75 0 01-1.5 0v-3zm.75 6a.75.75 0 110-1.5.75.75 0 010 1.5z" />
      </svg>
      {message}
    </p>
  );
}

// ─── Shared input class helper ─────────────────────────────────────────────
function inputCls(hasError: boolean) {
  return `w-full h-11 px-3.5 bg-paper border rounded focus:outline-none focus:ring-1 text-xs font-sans text-charcoal transition-colors ${
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-400/40"
      : "border-steel-blue/40 focus:border-navy focus:ring-navy/50"
  }`;
}

function textareaCls(hasError: boolean) {
  return `w-full p-3 bg-paper border rounded focus:outline-none focus:ring-1 text-xs font-sans text-charcoal resize-none transition-colors ${
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-400/40"
      : "border-steel-blue/40 focus:border-navy focus:ring-navy/50"
  }`;
}

function selectCls(hasError: boolean) {
  return `w-full h-11 px-3 bg-paper border rounded focus:outline-none focus:ring-1 text-xs font-sans text-charcoal transition-colors ${
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-400/40"
      : "border-steel-blue/40 focus:border-navy focus:ring-navy/50"
  }`;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProjectForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [whoAreYou, setWhoAreYou] = useState<WhoAreYouType>(null);
  const [need, setNeed] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitWarning, setSubmitWarning] = useState<string | null>(null);

  // ── Two separate forms: Step 3 (brief) and Step 4 (contact) ──────────────
  const briefForm = useForm<BriefFormValues>({ mode: "onTouched" });
  const contactForm = useForm<ContactFormValues>({ mode: "onTouched" });

  // ── URL pre-filtering ─────────────────────────────────────────────────────
  useEffect(() => {
    const pillarParam = searchParams.get("pillar");
    if (!pillarParam) return;
    let resolved: WhoAreYouType = null;
    let prefilledNeed = "";
    if (pillarParam === "individuals_small_business") resolved = "individual_small_business";
    else if (pillarParam === "startup_growth") resolved = "startup_growth";
    else if (pillarParam === "saas_companies") { resolved = "existing_company"; prefilledNeed = "new_saas"; }
    else if (pillarParam === "scaling_companies") { resolved = "existing_company"; prefilledNeed = "improve_scale"; }
    if (resolved) { setWhoAreYou(resolved); setNeed(prefilledNeed); setStep(2); }
  }, [searchParams]);

  // ── Pillar resolver ───────────────────────────────────────────────────────
  const getResolvedPillar = () => {
    if (whoAreYou === "individual_small_business") return "individuals_small_business";
    if (whoAreYou === "startup_growth") return "startup_growth";
    if (whoAreYou === "existing_company") return need === "improve_scale" ? "scaling_companies" : "saas_companies";
    return "individuals_small_business";
  };

  // ── Step 1 ────────────────────────────────────────────────────────────────
  const selectWhoAreYou = (val: WhoAreYouType) => {
    setWhoAreYou(val);
    setNeed("");
    briefForm.reset();
    setStep(2);
  };

  // ── Step 2 ────────────────────────────────────────────────────────────────
  const selectNeed = (val: string) => {
    setNeed(val);
    briefForm.reset();
    setStep(3);
  };

  // ── Step 3 → 4: validate brief fields before advancing ───────────────────
  const handleBriefNext = async () => {
    const fieldsToValidate = getBriefFieldNames();
    const valid = await briefForm.trigger(fieldsToValidate as any);
    if (valid) setStep(4);
  };

  // ── Step 4 submit ─────────────────────────────────────────────────────────
  const handleContactSubmit = contactForm.handleSubmit(async (contactData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitWarning(null);

    const briefData = briefForm.getValues();
    const answers = buildAnswersMap(briefData);

    try {
      const res = await fetch("/api/project-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pillar: getResolvedPillar(),
          answers,
          contact_name: contactData.contactName,
          contact_email: contactData.contactEmail,
          contact_phone: contactData.contactPhone,
          company_name:
            contactData.companyName ||
            briefData.companyDescription ||
            briefData.businessName ||
            "",
          role: contactData.role,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      if (data.warning) setSubmitWarning(data.warning);
      setStep(5);
    } catch (err: any) {
      setSubmitError(err.message || "Failed to submit request.");
    } finally {
      setIsSubmitting(false);
    }
  });

  // ── Map brief form values → labelled answers for DB ──────────────────────
  const buildAnswersMap = (d: BriefFormValues): Record<string, string> => {
    if (whoAreYou === "individual_small_business") {
      return {
        "What's your business called?": d.businessName || "",
        "Do you already sell online anywhere?": d.sellsOnline || "",
        "Roughly how many products do you sell?": d.productCount || "",
        "Budget range": d.budgetSmallBiz || "",
      };
    }
    if (whoAreYou === "startup_growth") {
      return {
        "Startup name and concept": d.startupConcept || "",
        "Spec / mockups ready?": d.specReady || "",
        "Target launch timeline": d.launchTimeline || "",
        "Budget range": d.budgetStartup || "",
      };
    }
    return {
      "Company name and what you do": d.companyDescription || "",
      "System to improve or build": d.systemToImprove || "",
      "Current users / customers": d.userCount || "",
      "Main goal": d.mainGoal || "",
    };
  };

  // ── Field name lists for trigger() ────────────────────────────────────────
  const getBriefFieldNames = (): (keyof BriefFormValues)[] => {
    if (whoAreYou === "individual_small_business")
      return ["businessName", "sellsOnline", "productCount", "budgetSmallBiz"];
    if (whoAreYou === "startup_growth")
      return ["startupConcept", "specReady", "launchTimeline", "budgetStartup"];
    return ["companyDescription", "systemToImprove", "userCount", "mainGoal"];
  };

  // ── Need options ──────────────────────────────────────────────────────────
  const getNeedOptions = () => {
    switch (whoAreYou) {
      case "individual_small_business":
        return [
          { key: "website", label: "A website to showcase my business" },
          { key: "ecommerce", label: "A store where customers can buy from me online" },
          { key: "booking", label: "A booking/appointment system" },
          { key: "other", label: "Something else" },
        ];
      case "startup_growth":
        return [
          { key: "mvp", label: "Build an MVP to launch my product" },
          { key: "scale", label: "Prepare our system for scale and growth" },
          { key: "ai", label: "Add AI features to our product" },
          { key: "other", label: "Something else" },
        ];
      case "existing_company":
        return [
          { key: "new_saas", label: "Build a new SaaS product for our business" },
          { key: "improve_scale", label: "Improve or scale a system we already have" },
          { key: "ai_ops", label: "Add AI/automation to our existing operations" },
          { key: "talk_through", label: "Not sure yet — I'd like to talk it through" },
        ];
      default:
        return [];
    }
  };

  // ─── Render helpers ──────────────────────────────────────────────────────

  const renderStep1 = () => (
    <div className="space-y-5">
      <div className="space-y-1">
        <span className="font-mono text-[9px] uppercase tracking-wider text-navy font-bold">STEP 1 OF 4</span>
        <h2 className="font-sans text-xl font-bold text-navy">Who are you?</h2>
        <p className="font-sans text-xs text-slate-gray">Select the profile that best describes you.</p>
      </div>
      <div className="flex flex-col gap-2.5">
        {[
          { key: "individual_small_business", title: "An individual / small business", desc: "Solo creators, retail shops, professional service providers." },
          { key: "startup_growth", title: "A startup, still early", desc: "Early stage founders validating ideas and launching MVPs." },
          { key: "existing_company", title: "An existing company", desc: "Mature operations building SaaS platforms or scaling systems." },
        ].map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => selectWhoAreYou(item.key as WhoAreYouType)}
            className={`w-full px-4 py-3 text-left border rounded-lg transition-all duration-200 cursor-pointer flex items-start gap-3 ${
              whoAreYou === item.key
                ? "bg-steel-blue-soft border-navy border-2 shadow-sm"
                : "bg-paper border-steel-blue/30 hover:border-navy"
            }`}
          >
            {/* Radio dot */}
            <span className={`mt-0.5 w-4 h-4 flex-shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
              whoAreYou === item.key ? "border-navy" : "border-steel-blue/50"
            }`}>
              {whoAreYou === item.key && <span className="w-2 h-2 rounded-full bg-navy" />}
            </span>
            <span className="flex flex-col">
              <span className="font-sans text-sm font-bold text-navy leading-tight">{item.title}</span>
              <span className="font-sans text-xs text-slate-gray mt-0.5 leading-relaxed">{item.desc}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-5">
      <div className="space-y-1">
        <span className="font-mono text-[9px] uppercase tracking-wider text-navy font-bold">STEP 2 OF 4</span>
        <h2 className="font-sans text-xl font-bold text-navy">What do you need?</h2>
        <p className="font-sans text-xs text-slate-gray">Choose the option that best fits what you're looking for.</p>
      </div>
      <div className="flex flex-col gap-2.5">
        {getNeedOptions().map((opt) => (
          <button
            key={opt.key}
            type="button"
            onClick={() => selectNeed(opt.key)}
            className={`w-full px-4 py-3 text-left border rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-3 ${
              need === opt.key ? "bg-steel-blue-soft border-navy border-2" : "bg-paper border-steel-blue/30 hover:border-navy"
            }`}
          >
            <span className={`w-4 h-4 flex-shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
              need === opt.key ? "border-navy" : "border-steel-blue/50"
            }`}>
              {need === opt.key && <span className="w-2 h-2 rounded-full bg-navy" />}
            </span>
            <span className="font-sans text-xs font-semibold text-navy leading-snug">{opt.label}</span>
          </button>
        ))}
      </div>
      <div className="pt-1">
        <Button variant="secondary" size="sm" onClick={() => setStep(1)}>← Back</Button>
      </div>
    </div>
  );

  const renderStep3 = () => {
    const { register, formState: { errors } } = briefForm;
    const req = { required: "This field is required" };

    return (
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="font-mono text-[9px] uppercase tracking-wider text-navy font-bold">STEP 3 OF 4</span>
          <h2 className="font-sans text-xl font-bold text-navy">Tell us about your project</h2>
          <p className="font-sans text-xs text-slate-gray">Answer these quick questions to help us understand your goals.</p>
        </div>

        <div className="space-y-5">
          {whoAreYou === "individual_small_business" && (
            <>
              <div>
                <label className="block font-sans text-xs font-semibold text-navy mb-1">What's your business called? *</label>
                <input {...register("businessName", req)} placeholder="e.g. Amara Skincare" className={inputCls(!!errors.businessName)} />
                <FieldError message={errors.businessName?.message} />
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold text-navy mb-1">Do you already sell online anywhere (Instagram, WhatsApp, etc.)? *</label>
                <input {...register("sellsOnline", req)} placeholder="e.g. Yes, on WhatsApp and Instagram" className={inputCls(!!errors.sellsOnline)} />
                <FieldError message={errors.sellsOnline?.message} />
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold text-navy mb-1">Roughly how many products do you sell? *</label>
                <input {...register("productCount", req)} placeholder="e.g. Around 15 products" className={inputCls(!!errors.productCount)} />
                <FieldError message={errors.productCount?.message} />
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold text-navy mb-1">Do you have a budget range in mind? *</label>
                <select {...register("budgetSmallBiz", req)} className={selectCls(!!errors.budgetSmallBiz)} defaultValue="">
                  <option value="" disabled>Select an option...</option>
                  {PILLAR_PRICING.individuals_small_business.budgetRanges.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
                <FieldError message={errors.budgetSmallBiz?.message} />
              </div>
            </>
          )}

          {whoAreYou === "startup_growth" && (
            <>
              <div>
                <label className="block font-sans text-xs font-semibold text-navy mb-1">What is your startup called and what is the concept? *</label>
                <textarea {...register("startupConcept", req)} rows={3} placeholder="e.g. Cognara: AI adaptive learning platform for schools" className={textareaCls(!!errors.startupConcept)} />
                <FieldError message={errors.startupConcept?.message} />
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold text-navy mb-1">Do you have a product spec or design mockups ready? *</label>
                <select {...register("specReady", req)} className={selectCls(!!errors.specReady)} defaultValue="">
                  <option value="" disabled>Select an option...</option>
                  <option>Just an idea</option>
                  <option>Spec/mockups ready</option>
                  <option>Existing product needing rework</option>
                </select>
                <FieldError message={errors.specReady?.message} />
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold text-navy mb-1">What is your target launch timeline? *</label>
                <select {...register("launchTimeline", req)} className={selectCls(!!errors.launchTimeline)} defaultValue="">
                  <option value="" disabled>Select an option...</option>
                  <option>Within 1 month</option>
                  <option>1 – 3 months</option>
                  <option>3 – 6 months</option>
                  <option>Not urgent</option>
                </select>
                <FieldError message={errors.launchTimeline?.message} />
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold text-navy mb-1">Do you have a budget range in mind? *</label>
                <select {...register("budgetStartup", req)} className={selectCls(!!errors.budgetStartup)} defaultValue="">
                  <option value="" disabled>Select an option...</option>
                  {PILLAR_PRICING.startup_growth.budgetRanges.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
                <FieldError message={errors.budgetStartup?.message} />
              </div>
            </>
          )}

          {whoAreYou === "existing_company" && (
            <>
              <div>
                <label className="block font-sans text-xs font-semibold text-navy mb-1">Company name and what you do *</label>
                <input {...register("companyDescription", req)} placeholder="e.g. Apex Logistics, container tracking and shipping" className={inputCls(!!errors.companyDescription)} />
                <FieldError message={errors.companyDescription?.message} />
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold text-navy mb-1">What system or process are you looking to improve or build? *</label>
                <textarea {...register("systemToImprove", req)} rows={3} placeholder="e.g. We want to scale our internal dispatch dashboard and automate container updates." className={textareaCls(!!errors.systemToImprove)} />
                <FieldError message={errors.systemToImprove?.message} />
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold text-navy mb-1">Roughly how many users/customers does it currently serve? *</label>
                <input {...register("userCount", req)} placeholder="e.g. 50 staff, ~5,000 monthly trackings" className={inputCls(!!errors.userCount)} />
                <FieldError message={errors.userCount?.message} />
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold text-navy mb-1">What's the main goal — more users, more speed, more revenue, or something else? *</label>
                <input {...register("mainGoal", req)} placeholder="e.g. More dispatch speed and automatic alerts" className={inputCls(!!errors.mainGoal)} />
                <FieldError message={errors.mainGoal?.message} />
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
          <Button variant="secondary" size="sm" className="flex-1 justify-center" onClick={() => setStep(2)}>← Back</Button>
          <Button variant="primary" size="sm" className="flex-1 justify-center" onClick={handleBriefNext}>Continue →</Button>
        </div>
      </div>
    );
  };

  const renderStep4 = () => {
    const { register, formState: { errors } } = contactForm;
    const isSmallBiz = whoAreYou === "individual_small_business";
    const resolvedPillar = getResolvedPillar();
    const briefData = briefForm.getValues();
    const answers = buildAnswersMap(briefData);

    return (
      <form onSubmit={handleContactSubmit} className="space-y-6">
        <div className="space-y-1">
          <span className="font-mono text-[9px] uppercase tracking-wider text-navy font-bold">STEP 4 OF 4</span>
          <h2 className="font-sans text-xl font-bold text-navy">Review & Submit</h2>
          <p className="font-sans text-xs text-slate-gray">Enter your contact details and review your answers before sending.</p>
        </div>

        {/* Contact fields */}
        <div className="space-y-4">
          <div>
            <label className="block font-sans text-xs font-semibold text-navy mb-1">Your Name *</label>
            <input
              {...register("contactName", { required: "Name is required" })}
              placeholder="e.g. Amara Johnson"
              className={inputCls(!!errors.contactName)}
            />
            <FieldError message={errors.contactName?.message} />
          </div>

          <div>
            <label className="block font-sans text-xs font-semibold text-navy mb-1">Email Address *</label>
            <input
              type="email"
              {...register("contactEmail", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
              })}
              placeholder="e.g. john@company.com"
              className={inputCls(!!errors.contactEmail)}
            />
            <FieldError message={errors.contactEmail?.message} />
          </div>

          <div>
            <label className="block font-sans text-xs font-semibold text-navy mb-1">Phone / WhatsApp Number</label>
            <input
              type="tel"
              {...register("contactPhone")}
              placeholder="e.g. +234 80 1234 5678"
              className={inputCls(false)}
            />
          </div>

          {!isSmallBiz && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans text-xs font-semibold text-navy mb-1">Company Name</label>
                <input
                  {...register("companyName")}
                  placeholder="e.g. Peak SaaS Co."
                  className={inputCls(false)}
                />
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold text-navy mb-1">Your Role / Job Title</label>
                <input
                  {...register("role")}
                  placeholder="e.g. Product Lead"
                  className={inputCls(false)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Brief summary */}
        <div className="bg-steel-blue-soft border border-steel-blue/20 rounded p-4 space-y-3">
          <h4 className="font-mono text-[9px] uppercase tracking-wider text-navy font-bold border-b border-steel-blue/20 pb-1.5">Brief Review</h4>
          <div className="space-y-2 text-xs">
            <div>
              <span className="font-semibold text-navy mr-1">Classification:</span>
              <span className="text-slate-gray capitalize">{whoAreYou?.replace(/_/g, " ")}</span>
            </div>
            <div>
              <span className="font-semibold text-navy mr-1">Pillar Route:</span>
              <span className="font-mono text-[10px] bg-navy text-paper px-2 py-0.5 rounded font-bold uppercase">
                {resolvedPillar.replace(/_/g, " ")}
              </span>
            </div>
            {Object.entries(answers).map(([q, ans]) => (
              <div key={q} className="border-l border-steel-blue/30 pl-2">
                <div className="font-semibold text-navy text-[10px]">{q}</div>
                <div className="text-slate-gray leading-tight mt-0.5">{ans}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Errors */}
        {submitError && (
          <div className="p-3 bg-red-50 text-red-700 text-xs rounded border border-red-200">{submitError}</div>
        )}
        {submitWarning && (
          <div className="p-3 bg-yellow-50 text-yellow-700 text-xs rounded border border-yellow-200">{submitWarning}</div>
        )}

        <div className="flex justify-between items-center pt-2">
          <Button variant="secondary" size="sm" onClick={() => setStep(3)} disabled={isSubmitting}>← Back</Button>
          <Button variant="primary" size="sm" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-paper border-t-transparent rounded-full animate-spin" />
                Submitting...
              </span>
            ) : "Submit Project Request →"}
          </Button>
        </div>
      </form>
    );
  };

  const renderStep5 = () => {
    const isSmallBiz = whoAreYou === "individual_small_business";
    const contactName = contactForm.getValues("contactName") || "there";

    return (
      <div className="text-center space-y-6 py-6">
        <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto border border-navy/20">
          <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber font-bold block">INTAKE COMPLETE</span>
          <h2 className="font-sans text-2xl font-black text-charcoal tracking-tight">
            {isSmallBiz ? `Thanks, ${contactName}!` : "Request Received"}
          </h2>
          <p className="font-sans text-sm text-slate-gray leading-relaxed">
            {isSmallBiz
              ? "We've received your request. Someone from CreedTech will reach out within 2 business days with next steps."
              : "We've received your request. Since this is a specialized engineering engagement, our team will review your answers and schedule a short call within 3 business days."}
          </p>
        </div>
        {submitWarning && (
          <div className="p-3 bg-yellow-50 text-yellow-800 text-[10px] rounded border border-yellow-200 max-w-sm mx-auto">
            <span className="font-bold">Notice:</span> {submitWarning}
          </div>
        )}
        <div className="pt-4">
          <Button variant="primary" size="md" onClick={() => router.push("/")}>Return to Homepage</Button>
        </div>
      </div>
    );
  };

  // ─── Main render ──────────────────────────────────────────────────────────

  return (
    <div className="max-w-xl mx-auto bg-paper p-6 sm:p-8 border border-steel-blue/30 rounded-lg shadow-sm">
      {/* Progress bar */}
      {step < 5 && (
        <div className="w-full bg-steel-blue/10 h-1.5 rounded-full mb-6 overflow-hidden">
          <div className="bg-navy h-full transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }} />
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
        >
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
          {step === 5 && renderStep5()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

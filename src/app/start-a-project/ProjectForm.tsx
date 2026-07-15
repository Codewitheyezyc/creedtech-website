"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";

type WhoAreYouType = "individual_small_business" | "startup_growth" | "existing_company" | null;

interface FormState {
  whoAreYou: WhoAreYouType;
  need: string;
  briefAnswers: Record<string, string>;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  companyName: string;
  role: string;
}

export default function ProjectForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Initial form state
  const [state, setState] = useState<FormState>({
    whoAreYou: null,
    need: "",
    briefAnswers: {},
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    companyName: "",
    role: "",
  });

  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitWarning, setSubmitWarning] = useState<string | null>(null);

  // Read search parameters on load to support pre-filtering/shortcuts
  useEffect(() => {
    const pillarParam = searchParams.get("pillar");
    if (pillarParam) {
      let resolvedWhoAreYou: WhoAreYouType = null;
      let prefilledNeed = "";

      if (pillarParam === "individuals_small_business") {
        resolvedWhoAreYou = "individual_small_business";
      } else if (pillarParam === "startup_growth") {
        resolvedWhoAreYou = "startup_growth";
      } else if (pillarParam === "saas_companies") {
        resolvedWhoAreYou = "existing_company";
        prefilledNeed = "new_saas"; // Build new SaaS
      } else if (pillarParam === "scaling_companies") {
        resolvedWhoAreYou = "existing_company";
        prefilledNeed = "improve_scale"; // Improve or scale existing
      }

      if (resolvedWhoAreYou) {
        setState((prev) => ({
          ...prev,
          whoAreYou: resolvedWhoAreYou,
          need: prefilledNeed || prev.need,
        }));
        setStep(2);
      }
    }
  }, [searchParams]);

  // Determine actual Pillar from responses
  const getResolvedPillar = () => {
    if (state.whoAreYou === "individual_small_business") return "individuals_small_business";
    if (state.whoAreYou === "startup_growth") return "startup_growth";
    
    // For existing company, determine from need selection
    if (state.whoAreYou === "existing_company") {
      if (state.need === "improve_scale") {
        return "scaling_companies"; // Pillar 4
      }
      return "saas_companies"; // Pillar 1 (SaaS for Companies / default for companies)
    }
    
    return "individuals_small_business";
  };

  // Nav Handlers
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    // Basic validation before letting user move forward
    if (step === 1 && !state.whoAreYou) return;
    if (step === 2 && !state.need) return;

    if (step === 3) {
      // Validate brief questions are filled
      const requiredQuestions = getBriefQuestions();
      const allFilled = requiredQuestions.every(
        (q) => state.briefAnswers[q.label]?.trim()
      );
      if (!allFilled) {
        alert("Please answer all brief questions before proceeding.");
        return;
      }
    }

    setStep(step + 1);
  };

  // Step 1 Selection Handler
  const selectWhoAreYou = (val: WhoAreYouType) => {
    setState((prev) => ({
      ...prev,
      whoAreYou: val,
      // Reset dependent values
      need: "",
      briefAnswers: {},
    }));
    setStep(2);
  };

  // Step 2 Selection Handler
  const selectNeed = (val: string) => {
    setState((prev) => ({
      ...prev,
      need: val,
      // Reset brief answers on need changes
      briefAnswers: {},
    }));
    setStep(3);
  };

  // Step 3 Answer Handler
  const handleBriefAnswerChange = (questionLabel: string, answerVal: string) => {
    setState((prev) => ({
      ...prev,
      briefAnswers: {
        ...prev.briefAnswers,
        [questionLabel]: answerVal,
      },
    }));
  };

  // Step 4 Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.contactName || !state.contactEmail) {
      setSubmitError("Name and Email are required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitWarning(null);

    const resolvedPillar = getResolvedPillar();

    try {
      const res = await fetch("/api/project-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pillar: resolvedPillar,
          answers: state.briefAnswers,
          contact_name: state.contactName,
          contact_email: state.contactEmail,
          contact_phone: state.contactPhone,
          company_name: state.companyName || state.briefAnswers["Company name and what you do"] || state.briefAnswers["What's your business called?"] || "",
          role: state.role,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      if (data.warning) {
        setSubmitWarning(data.warning);
      }

      setStep(5); // Confirmation Screen
    } catch (err: any) {
      setSubmitError(err.message || "Failed to submit request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Dynamic Options for Step 2
  const getNeedOptions = () => {
    switch (state.whoAreYou) {
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

  // Dynamic Questions for Step 3
  interface Question {
    label: string;
    type: "text" | "textarea" | "select";
    options?: string[];
    placeholder?: string;
  }

  const getBriefQuestions = (): Question[] => {
    if (state.whoAreYou === "individual_small_business") {
      return [
        {
          label: "What's your business called?",
          type: "text",
          placeholder: "e.g. Amara Skincare",
        },
        {
          label: "Do you already sell online anywhere (Instagram, WhatsApp, etc.)?",
          type: "text",
          placeholder: "e.g. Yes, on WhatsApp and Instagram",
        },
        {
          label: "Roughly how many products do you sell?",
          type: "text",
          placeholder: "e.g. Around 15 products",
        },
        {
          label: "Do you have a budget range in mind?",
          type: "select",
          options: ["Under $1,000", "$1,000 - $3,000", "$3,000 - $5,000", "$5,000+"],
        },
      ];
    }

    if (state.whoAreYou === "startup_growth") {
      return [
        {
          label: "What is your startup called and what is the concept?",
          type: "textarea",
          placeholder: "e.g. Cognara: AI adaptive learning platform for schools",
        },
        {
          label: "Do you have a product spec or design mockups ready?",
          type: "select",
          options: ["Just an idea", "Spec/mockups ready", "Existing product needing rework"],
        },
        {
          label: "What is your target launch timeline?",
          type: "select",
          options: ["Within 1 month", "1 - 3 months", "3 - 6 months", "Not urgent"],
        },
        {
          label: "Do you have a budget range in mind?",
          type: "select",
          options: ["Under $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000+"],
        },
      ];
    }

    if (state.whoAreYou === "existing_company") {
      return [
        {
          label: "Company name and what you do",
          type: "text",
          placeholder: "e.g. Apex Logistics, container tracking and shipping",
        },
        {
          label: "What system or process are you looking to improve or build?",
          type: "textarea",
          placeholder: "e.g. We want to scale our internal dispatch dashboard and automate container updates.",
        },
        {
          label: "Roughly how many users/customers does it currently serve?",
          type: "text",
          placeholder: "e.g. 50 staff, ~5,000 monthly trackings",
        },
        {
          label: "What's the main goal — more users, more speed, more revenue, or something else?",
          type: "text",
          placeholder: "e.g. More dispatch speed and automatic alerts",
        },
      ];
    }

    return [];
  };

  // Render Functions for Steps
  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="space-y-1">
        <span className="font-mono text-[9px] uppercase tracking-wider text-navy font-bold">
          STEP 1 OF 4
        </span>
        <h2 className="font-sans text-xl font-bold text-navy">Who are you?</h2>
        <p className="font-sans text-xs text-slate-gray">
          Select the profile that best describes you or your organization.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {[
          {
            key: "individual_small_business",
            title: "An individual / small business",
            desc: "Ideal for solo creators, retail shops, and professional service providers.",
          },
          {
            key: "startup_growth",
            title: "A startup, still early",
            desc: "For early stage founders looking to validate ideas and launch MVPs.",
          },
          {
            key: "existing_company",
            title: "An existing company",
            desc: "For mature operations looking to build new SaaS platforms or scale current systems.",
          },
        ].map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => selectWhoAreYou(item.key as WhoAreYouType)}
            className={`w-full p-4 text-left border rounded-lg transition-all duration-200 cursor-pointer ${
              state.whoAreYou === item.key
                ? "bg-steel-blue-soft border-navy border-2 shadow-sm"
                : "bg-paper border-steel-blue/30 hover:border-navy"
            }`}
          >
            <h3 className="font-sans text-sm font-bold text-navy">{item.title}</h3>
            <p className="font-sans text-xs text-slate-gray mt-1 leading-relaxed">{item.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="space-y-1">
        <span className="font-mono text-[9px] uppercase tracking-wider text-navy font-bold">
          STEP 2 OF 4
        </span>
        <h2 className="font-sans text-xl font-bold text-navy">What do you need?</h2>
        <p className="font-sans text-xs text-slate-gray">
          Choose the core service option that best aligns with your request.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {getNeedOptions().map((opt) => (
          <button
            key={opt.key}
            type="button"
            onClick={() => selectNeed(opt.key)}
            className={`w-full h-12 px-4 text-left border rounded transition-all duration-200 cursor-pointer flex items-center justify-between ${
              state.need === opt.key
                ? "bg-steel-blue-soft border-navy border-2"
                : "bg-paper border-steel-blue/30 hover:border-navy"
            }`}
          >
            <span className="font-sans text-xs font-semibold text-navy">{opt.label}</span>
            <span className="w-2.5 h-2.5 rounded-full border border-steel-blue/60 flex items-center justify-center">
              {state.need === opt.key && <span className="w-1.5 h-1.5 rounded-full bg-navy" />}
            </span>
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center pt-2">
        <Button variant="secondary" size="sm" onClick={handleBack}>
          ← Back
        </Button>
      </div>
    </div>
  );

  const renderStep3 = () => {
    const questions = getBriefQuestions();
    return (
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="font-mono text-[9px] uppercase tracking-wider text-navy font-bold">
            STEP 3 OF 4
          </span>
          <h2 className="font-sans text-xl font-bold text-navy">Tell us about your project</h2>
          <p className="font-sans text-xs text-slate-gray">
            Answer these quick questions to help us understand your goals.
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((q) => (
            <div key={q.label} className="space-y-1">
              <label className="block font-sans text-xs font-semibold text-navy">
                {q.label}
              </label>

              {q.type === "text" && (
                <input
                  type="text"
                  required
                  placeholder={q.placeholder}
                  value={state.briefAnswers[q.label] || ""}
                  onChange={(e) => handleBriefAnswerChange(q.label, e.target.value)}
                  className="w-full h-11 px-3.5 bg-paper border border-steel-blue/40 rounded focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/50 text-xs font-sans text-charcoal"
                />
              )}

              {q.type === "textarea" && (
                <textarea
                  required
                  rows={3}
                  placeholder={q.placeholder}
                  value={state.briefAnswers[q.label] || ""}
                  onChange={(e) => handleBriefAnswerChange(q.label, e.target.value)}
                  className="w-full h-24 p-3 bg-paper border border-steel-blue/40 rounded focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/50 text-xs font-sans text-charcoal resize-none"
                />
              )}

              {q.type === "select" && (
                <select
                  required
                  value={state.briefAnswers[q.label] || ""}
                  onChange={(e) => handleBriefAnswerChange(q.label, e.target.value)}
                  className="w-full h-11 px-3 bg-paper border border-steel-blue/40 rounded focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/50 text-xs font-sans text-charcoal"
                >
                  <option value="" disabled>Select an option...</option>
                  {q.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-2">
          <Button variant="secondary" size="sm" onClick={handleBack}>
            ← Back
          </Button>
          <Button variant="primary" size="sm" onClick={handleNext}>
            Continue →
          </Button>
        </div>
      </div>
    );
  };

  const renderStep4 = () => {
    const isSmallBiz = state.whoAreYou === "individual_small_business";
    const selectedPillar = getResolvedPillar();

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <span className="font-mono text-[9px] uppercase tracking-wider text-navy font-bold">
            STEP 4 OF 4
          </span>
          <h2 className="font-sans text-xl font-bold text-navy">Review & Submit</h2>
          <p className="font-sans text-xs text-slate-gray">
            Enter your contact details below and review your details.
          </p>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-1">
            <label className="block font-sans text-xs font-semibold text-navy">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={state.contactName}
              onChange={(e) => setState((prev) => ({ ...prev, contactName: e.target.value }))}
              placeholder="e.g. John Doe"
              className="w-full h-11 px-3.5 bg-paper border border-steel-blue/40 rounded focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/50 text-xs font-sans text-charcoal"
            />
          </div>

          <div className="space-y-1">
            <label className="block font-sans text-xs font-semibold text-navy">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={state.contactEmail}
              onChange={(e) => setState((prev) => ({ ...prev, contactEmail: e.target.value }))}
              placeholder="e.g. john@company.com"
              className="w-full h-11 px-3.5 bg-paper border border-steel-blue/40 rounded focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/50 text-xs font-sans text-charcoal"
            />
          </div>

          <div className="space-y-1">
            <label className="block font-sans text-xs font-semibold text-navy">
              Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              value={state.contactPhone}
              onChange={(e) => setState((prev) => ({ ...prev, contactPhone: e.target.value }))}
              placeholder="e.g. +234 80 1234 5678"
              className="w-full h-11 px-3.5 bg-paper border border-steel-blue/40 rounded focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/50 text-xs font-sans text-charcoal"
            />
          </div>

          {!isSmallBiz && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block font-sans text-xs font-semibold text-navy">
                  Company Name
                </label>
                <input
                  type="text"
                  value={state.companyName}
                  onChange={(e) => setState((prev) => ({ ...prev, companyName: e.target.value }))}
                  placeholder="e.g. Peak SaaS Co."
                  className="w-full h-11 px-3.5 bg-paper border border-steel-blue/40 rounded focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/50 text-xs font-sans text-charcoal"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-sans text-xs font-semibold text-navy">
                  Your Role / Job Title
                </label>
                <input
                  type="text"
                  value={state.role}
                  onChange={(e) => setState((prev) => ({ ...prev, role: e.target.value }))}
                  placeholder="e.g. Product Lead"
                  className="w-full h-11 px-3.5 bg-paper border border-steel-blue/40 rounded focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/50 text-xs font-sans text-charcoal"
                />
              </div>
            </div>
          )}
        </div>

        {/* Visual Summary Block */}
        <div className="bg-steel-blue-soft border border-steel-blue/20 rounded p-4 space-y-3">
          <h4 className="font-mono text-[9px] uppercase tracking-wider text-navy font-bold border-b border-steel-blue/20 pb-1.5">
            Brief Review
          </h4>
          <div className="space-y-2 text-xs">
            <div>
              <span className="font-semibold text-navy mr-1">Classification:</span>
              <span className="text-slate-gray capitalize">{state.whoAreYou?.replace(/_/g, " ")}</span>
            </div>
            <div>
              <span className="font-semibold text-navy mr-1">Pillar Route:</span>
              <span className="font-mono text-[10px] bg-navy text-paper px-2 py-0.5 rounded font-bold uppercase">
                {selectedPillar.replace(/_/g, " ")}
              </span>
            </div>
            {Object.entries(state.briefAnswers).map(([q, ans]) => (
              <div key={q} className="border-l border-steel-blue/30 pl-2">
                <div className="font-semibold text-navy text-[10px]">{q}</div>
                <div className="text-slate-gray leading-tight mt-0.5">{ans}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Error/Warning Notifications */}
        {submitError && (
          <div className="p-3 bg-red-100 text-red-700 text-xs rounded border border-red-200">
            {submitError}
          </div>
        )}

        {submitWarning && (
          <div className="p-3 bg-yellow-100 text-yellow-700 text-xs rounded border border-yellow-200">
            {submitWarning}
          </div>
        )}

        <div className="flex justify-between items-center pt-2">
          <Button variant="secondary" size="sm" onClick={handleBack} disabled={isSubmitting}>
            ← Back
          </Button>
          <Button variant="primary" size="sm" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-paper border-t-transparent rounded-full animate-spin"></span>
                Submitting...
              </span>
            ) : (
              "Submit Project Request →"
            )}
          </Button>
        </div>
      </form>
    );
  };

  const renderStep5 = () => {
    const isSmallBiz = state.whoAreYou === "individual_small_business";
    const contactName = state.contactName || "Client";

    return (
      <div className="text-center space-y-6 py-6">
        {/* Success Icon Graphic in studio palette */}
        <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto border border-navy/20">
          <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber font-bold block">
            INTAKE COMPLETE
          </span>
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
          <Button variant="primary" size="md" onClick={() => router.push("/")}>
            Return to Homepage
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-xl mx-auto bg-paper p-6 sm:p-8 border border-steel-blue/30 rounded-lg shadow-sm">
      {/* Visual Step Progress Bar */}
      {step < 5 && (
        <div className="w-full bg-steel-blue/10 h-1.5 rounded-full mb-6 overflow-hidden">
          <div
            className="bg-navy h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      )}

      {/* Screen Render Switcher */}
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

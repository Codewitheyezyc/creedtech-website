import type { Metadata } from "next";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "FAQ — Creed Tech",
  description:
    "Answers to common questions about our process, pricing, and how we work.",
};

export default function Page() {
  return <FAQContent />;
}

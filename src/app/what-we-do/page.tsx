import type { Metadata } from "next";
import WhatWeDoContent from "./WhatWeDoContent";

export const metadata: Metadata = {
  title: "What We Do — Creed Tech",
  description:
    "Four ways we help people and companies build something bigger: SaaS for companies, startup growth, small business tools, and scaling support.",
};

export default function Page() {
  return <WhatWeDoContent />;
}

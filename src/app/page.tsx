import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Creed Tech — Software Studio, Lagos, Nigeria",
  description:
    "We build software that helps people and companies grow — from a first idea to something much bigger.",
};

export default function Page() {
  return <HomeContent />;
}

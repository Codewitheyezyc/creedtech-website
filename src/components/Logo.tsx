import React from "react";

export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 
        Stacked-blocks logo mark.
        Uses our token colors: Steel Blue, Deep Navy, and Warm Amber.
      */}
      {/* Bottom block (Steel Blue) */}
      <rect
        x="20"
        y="50"
        width="30"
        height="30"
        rx="4"
        fill="#A9B8CC"
      />
      {/* Middle block (Deep Navy / Primary) */}
      <rect
        x="35"
        y="35"
        width="30"
        height="30"
        rx="4"
        fill="#0B1F3A"
      />
      {/* Top block (Warm Amber / CTA Accent) */}
      <rect
        x="50"
        y="20"
        width="30"
        height="30"
        rx="4"
        fill="#E3A046"
      />
    </svg>
  );
}

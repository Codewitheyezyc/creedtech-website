import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  // Base classes with Inter font and center layout
  const baseStyles =
    "font-sans font-semibold uppercase tracking-wider inline-flex items-center justify-center rounded transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-navy/50 focus:ring-offset-2";

  // Variant styles
  const variants = {
    primary: "bg-navy text-paper hover:bg-navy/90 border border-transparent active:scale-[0.98]",
    secondary: "border-2 border-navy text-navy hover:bg-navy hover:text-paper active:scale-[0.98]",
    accent: "bg-amber text-charcoal font-bold hover:bg-amber/90 border border-transparent active:scale-[0.98]",
  };

  // Size styles ensuring proper touch targets (minimum 44px/h-11 on mobile)
  const sizes = {
    sm: "h-11 md:h-9 px-4 text-xs md:text-[11px]",
    md: "h-11 px-5 text-xs", // 44px height target
    lg: "h-13 px-6 text-sm",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (href.startsWith("/") && !external) {
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={combinedClassName}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

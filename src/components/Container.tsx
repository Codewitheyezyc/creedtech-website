import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={`w-full max-w-7xl mx-auto px-3 ${className}`}>
      {children}
    </Component>
  );
}

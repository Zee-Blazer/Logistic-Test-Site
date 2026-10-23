import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "charcoal" | "sample" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "gold",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    gold: "bg-[#C5A15B]/15 text-[#C5A15B] border border-[#C5A15B]/30",
    charcoal: "bg-[#1B1B1B] text-[#F5EFE5] border border-[#2C2C2C]",
    sample: "bg-[#C5A15B]/10 text-[#C5A15B] border border-[#C5A15B]/40 uppercase tracking-widest text-[10px]",
    outline: "bg-transparent text-[#77716A] border border-[#2C2C2C]",
  }[variant];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-none text-xs font-medium tracking-wider ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
}

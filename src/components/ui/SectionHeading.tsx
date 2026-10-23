import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  lightBackground?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
  lightBackground = false,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align];

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="block text-xs uppercase tracking-[0.25em] text-[#C5A15B] font-semibold mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15] ${
          lightBackground ? "text-[#111111]" : "text-[#F5EFE5]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-light ${
            lightBackground ? "text-[#77716A]" : "text-[#A39D94]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

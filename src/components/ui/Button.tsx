import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  withWhatsAppIcon?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  withWhatsAppIcon = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none text-center";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider",
    md: "px-6 py-3 text-sm tracking-wide",
    lg: "px-8 py-4 text-base tracking-wider",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#C5A15B] text-[#111111] hover:bg-[#B38E46] border border-[#C5A15B] shadow-sm hover:shadow-md font-semibold",
    secondary:
      "bg-[#1B1B1B] text-[#F5EFE5] hover:bg-[#262626] border border-[#2C2C2C] hover:border-[#C5A15B]/40",
    outline:
      "bg-transparent text-[#F5EFE5] border border-[#C5A15B]/60 hover:bg-[#C5A15B]/10 hover:border-[#C5A15B]",
    whatsapp:
      "bg-[#1B1B1B] text-[#F5EFE5] border border-[#25D366]/40 hover:border-[#25D366] hover:bg-[#25D366]/10",
    ghost:
      "bg-transparent text-[#F5EFE5] hover:text-[#C5A15B] hover:bg-white/5",
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  const iconElement = withWhatsAppIcon ? (
    <MessageCircle className="w-4 h-4 mr-2 text-[#25D366] shrink-0" />
  ) : null;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {iconElement}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {iconElement}
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {iconElement}
      {children}
    </button>
  );
}

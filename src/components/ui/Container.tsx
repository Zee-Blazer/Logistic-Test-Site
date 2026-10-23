import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide" | "full";
}

export function Container({
  children,
  className = "",
  size = "default",
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
    full: "max-w-full",
  }[size];

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

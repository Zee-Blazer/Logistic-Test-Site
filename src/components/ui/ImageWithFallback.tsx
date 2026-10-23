"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Sparkles } from "lucide-react";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackTitle?: string;
}

export function ImageWithFallback({
  alt,
  src,
  fallbackTitle,
  className = "",
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full h-full min-h-[160px] bg-[#1B1B1B] border border-[#2C2C2C] flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
        aria-label={alt || "Image preview"}
      >
        <div className="w-10 h-10 border border-[#C5A15B]/40 flex items-center justify-center mb-3 text-[#C5A15B]">
          <Sparkles className="w-5 h-5 text-[#C5A15B]" />
        </div>
        <span className="font-serif text-[#F5EFE5] text-sm tracking-widest uppercase">
          {fallbackTitle || alt || "Maison Hair"}
        </span>
        <span className="text-[10px] text-[#77716A] tracking-wider uppercase mt-1">
          Editorial Preview
        </span>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      src={src}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}

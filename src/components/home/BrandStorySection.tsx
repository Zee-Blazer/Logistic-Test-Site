import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Feather, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { businessConfig } from "@/data/business";

export function BrandStorySection() {
  return (
    <section className="py-24 bg-[#0E0E0E] border-b border-[#242424] overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Photo Composition with Gold Accent Border */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none bg-[#1A1A1A] border border-[#2A2A2A] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                alt="Maison Hair model displaying raw human hair wig"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-60" />
            </div>

            {/* Decorative Asymmetric Gold Frame Box */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-48 border border-[#C5A15B]/30 -z-0 pointer-events-none" />
            
            {/* Small Floating Pill */}
            <div className="absolute top-6 left-6 bg-[#111111]/90 backdrop-blur-md border border-[#333333] px-4 py-2 text-xs text-[#E9DFD0]">
              <span className="font-serif italic text-[#C5A15B]">100% Raw Hair</span>
              <span className="text-[#A39D94] ml-1.5">• Uncompromised</span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Standards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A15B] font-semibold mb-3">
              The Maison Philosophy
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5EFE5] font-normal leading-[1.15] tracking-tight">
              True Hair Luxury Is Undetectable.
            </h2>

            <blockquote className="mt-6 pl-4 border-l-2 border-[#C5A15B] font-serif italic text-lg sm:text-xl text-[#E9DFD0] leading-relaxed">
              &ldquo;We reject synthetic blends, chemically stripped strands, and fragile lace. Our hair exists to elevate confidence effortlessly, blending like natural heritage.&rdquo;
            </blockquote>

            <p className="mt-6 text-sm text-[#A39D94] leading-relaxed font-light">
              At {businessConfig.name}, every unit begins with single-donor raw hair sourced ethically from verified temples and collectors. Each strand retains its natural cuticle alignment, allowing the hair to flow, hold curls, and withstand thermal styling with the exact weight and bounce of healthy natural hair.
            </p>

            {/* 3 Pillars */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#222222]">
              <div className="space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#C5A15B]" />
                <h4 className="font-serif text-base text-[#F5EFE5]">
                  Single-Donor Raw Hair
                </h4>
                <p className="text-xs text-[#77716A] leading-relaxed">
                  Zero silicone coating, zero synthetic fibers, double-drawn fullness.
                </p>
              </div>

              <div className="space-y-2">
                <Sparkles className="w-5 h-5 text-[#C5A15B]" />
                <h4 className="font-serif text-base text-[#F5EFE5]">
                  Skin-Melt HD Lace
                </h4>
                <p className="text-xs text-[#77716A] leading-relaxed">
                  Featherweight Swiss lace micro-knotted for seamless blending on all skin tones.
                </p>
              </div>

              <div className="space-y-2">
                <Feather className="w-5 h-5 text-[#C5A15B]" />
                <h4 className="font-serif text-base text-[#F5EFE5]">
                  Longevity & Care
                </h4>
                <p className="text-xs text-[#77716A] leading-relaxed">
                  Engineered to endure 2+ years of wear with proper salon maintenance.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#C5A15B] hover:text-[#B38E46] transition-colors font-medium group"
              >
                <span>Read Our Sourcing Story</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

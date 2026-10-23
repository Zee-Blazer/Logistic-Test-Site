import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#111111] overflow-hidden border-b border-[#242424]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#C5A15B]/5 rounded-full blur-[140px] pointer-events-none" />

      <Container size="wide" className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Editorial Display Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1B1B1B] border border-[#C5A15B]/40 mb-6 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#E9DFD0] font-medium">
                100% Raw Hair Wigs &amp; Salon Artistry
              </span>
            </div>

            {/* Editorial Display Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F5EFE5] leading-[1.08] tracking-tight break-words">
              The Art of <br />
              <span className="italic font-light text-[#C5A15B]">Uncompromising</span>{" "}
              Hair Luxury.
            </h1>

            {/* Short Supporting Copy */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#A39D94] font-light leading-relaxed max-w-xl">
              Ethically curated single-donor raw wigs, skin-melt HD lace frontals, and private salon styling experiences delivered with discreet white-glove care.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href="/shop"
                variant="primary"
                size="lg"
                className="group"
              >
                <span>Explore Hair Shop</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="/salon"
                variant="outline"
                size="lg"
              >
                <span>Book an Appointment</span>
              </Button>
            </div>

            {/* Value Props Strip */}
            <div className="mt-14 pt-8 border-t border-[#222222] grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-[#A39D94]">
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-[#C5A15B] shrink-0" />
                <span className="tracking-wider">Single-Donor Pure Hair</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Sparkles className="w-4 h-4 text-[#C5A15B] shrink-0" />
                <span className="tracking-wider">Skin-Melt Swiss HD Lace</span>
              </div>
              <div className="flex items-center space-x-2.5 col-span-2 sm:col-span-1">
                <Truck className="w-4 h-4 text-[#C5A15B] shrink-0" />
                <span className="tracking-wider">Insured VIP Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none bg-[#1A1A1A] border border-[#2A2A2A] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=1400&q=85"
                alt="Editorial portrait of luxury styled raw human hair"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center scale-102 hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 inset-x-6 z-10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A15B] block font-medium">
                    Signature Melt
                  </span>
                  <p className="font-serif text-lg text-[#F5EFE5] font-normal">
                    Obsidian Bone Straight HD Unit
                  </p>
                </div>
                <div className="bg-[#111111]/80 backdrop-blur-md px-3 py-1 border border-[#333333] text-[10px] text-[#E9DFD0]">
                  30 Inches
                </div>
              </div>
            </div>

            {/* Asymmetrical Framed Accent Box */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-36 h-36 border border-[#C5A15B]/40 -z-0 pointer-events-none" />
          </div>
        </div>
      </Container>
    </section>
  );
}

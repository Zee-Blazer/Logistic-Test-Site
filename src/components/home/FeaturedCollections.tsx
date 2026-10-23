import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { featuredCollections } from "@/data/collections";

export function FeaturedCollections() {
  return (
    <section className="py-24 bg-[#F5EFE5] text-[#111111] border-b border-[#E4D9C8]">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="Signature Curations"
            title="Featured Hair Collections"
            subtitle="Engineered for discerning women who demand natural movement, intact cuticles, and undetectable lace fidelity."
            lightBackground={true}
          />
          <Link
            href="/shop"
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#111111] hover:text-[#B38E46] transition-colors shrink-0 group font-semibold border-b border-[#111111]/30 pb-0.5"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetrical 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCollections.map((col, idx) => (
            <Link
              key={col.id}
              href={col.href}
              className={`group relative flex flex-col justify-end overflow-hidden bg-white border border-[#E0D5C4] hover:border-[#C5A15B] shadow-sm hover:shadow-xl transition-all duration-300 ${
                idx === 0 ? "md:row-span-1" : ""
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E9DFD0]">
                <ImageWithFallback
                  src={col.image}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#111111] text-[10px] uppercase tracking-widest text-[#F5EFE5] px-3 py-1 font-medium shadow-sm">
                    {col.subtitle}
                  </span>
                </div>

                {/* Card Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
                  <span className="text-[11px] text-[#C5A15B] uppercase tracking-[0.2em] font-semibold mb-1">
                    {col.itemCount}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FFFFFF] group-hover:text-[#C5A15B] transition-colors">
                    {col.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#E9DFD0]/90 line-clamp-2 font-light leading-relaxed">
                    {col.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20 flex items-center text-xs uppercase tracking-wider text-[#FFFFFF] group-hover:text-[#C5A15B] font-medium">
                    <span>{col.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

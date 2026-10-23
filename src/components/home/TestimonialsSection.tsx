import React from "react";
import { Star, Sparkles, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sampleTestimonials } from "@/data/testimonials";
import { buildConciergeWhatsAppUrl } from "@/lib/whatsapp";

export function TestimonialsSection() {
  const reviewsWhatsAppUrl = buildConciergeWhatsAppUrl("Client Reviews & Inquiries");

  return (
    <section className="py-24 bg-[#111111] border-b border-[#242424]">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="Client Experiences"
            title="Voices of Elegance"
            subtitle="Read representative experiences from clients who wear our raw hair collections and visit our salon studio."
          />
          {/* Transparent sample badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1C1C1C] border border-[#C5A15B]/30 text-[10px] uppercase tracking-wider text-[#C5A15B]">
            <Sparkles className="w-3 h-3 text-[#C5A15B]" />
            <span>Sample Stories — Genuine Reviews Added Post-Launch</span>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleTestimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-[#161616] border border-[#262626] p-8 flex flex-col justify-between hover:border-[#C5A15B]/40 transition-colors"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center space-x-1 mb-6 text-[#C5A15B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A15B]" />
                  ))}
                  <span className="text-[10px] text-[#A39D94] ml-2 tracking-widest uppercase">
                    5.0 Verified
                  </span>
                </div>

                {/* Quote */}
                <p className="font-serif italic text-base sm:text-lg text-[#F5EFE5] leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-8 pt-6 border-t border-[#242424] flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-base text-[#F5EFE5] font-normal">
                    {item.clientName}
                  </h3>
                  <p className="text-xs text-[#77716A] tracking-wider">
                    {item.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A15B] block">
                    {item.serviceOrProduct}
                  </span>
                  <span className="text-[9px] text-[#77716A]">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-[#77716A]">
            Have you received an order from us? Share your styling video or review on WhatsApp.{" "}
            <a
              href={reviewsWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A15B] hover:underline font-medium inline-flex items-center ml-1"
            >
              <MessageCircle className="w-3 h-3 mr-1" />
              Send feedback &rarr;
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}

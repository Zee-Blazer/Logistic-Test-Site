import React from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { businessConfig } from "@/data/business";
import { buildConciergeWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCtaSection() {
  const whatsappUrl = buildConciergeWhatsAppUrl("VIP Hair Order & Studio Booking");

  return (
    <section className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      {/* Subtle gold radial ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C5A15B]/5 blur-[120px] rounded-full pointer-events-none" />

      <Container size="narrow" className="relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1A1A1A] border border-[#C5A15B]/30 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#E9DFD0]">
            Personalized Concierge Experience
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5EFE5] tracking-tight leading-[1.12]">
          Ready to Experience <br />
          <span className="italic text-[#C5A15B]">Uncompromising</span> Hair Luxury?
        </h2>

        <p className="mt-6 text-sm sm:text-base text-[#A39D94] max-w-xl mx-auto leading-relaxed font-light">
          Whether selecting your dream raw virgin wig, ordering custom donor bundles, or scheduling a private salon appointment, our consultants are ready to assist you on WhatsApp.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#111111] bg-[#C5A15B] hover:bg-[#B38E46] transition-all duration-200 border border-[#C5A15B] shadow-lg hover:shadow-xl"
            aria-label="Connect on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 mr-2.5 text-[#111111]" />
            <span>Connect on WhatsApp</span>
          </a>
          <span className="text-xs text-[#77716A]">or call {businessConfig.phoneDisplay}</span>
        </div>

        <div className="mt-12 pt-8 border-t border-[#222222] flex flex-wrap items-center justify-center gap-6 text-[11px] text-[#77716A] tracking-wider uppercase">
          <span>• Victoria Island Private Studio</span>
          <span>• Nationwide Insured Delivery</span>
          <span>• 100% Unprocessed Single-Donor Hair</span>
        </div>
      </Container>
    </section>
  );
}

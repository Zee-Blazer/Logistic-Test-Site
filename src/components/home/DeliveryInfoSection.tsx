import React from "react";
import { MessageSquare, Video, PackageCheck, Truck, ShieldCheck, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildConciergeWhatsAppUrl } from "@/lib/whatsapp";

const deliverySteps = [
  {
    step: "01",
    title: "Direct WhatsApp Order",
    description: "Connect directly with our hair concierge to confirm length, texture, cap size, and lace specifications.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Live Video Verification",
    description: "Receive high-definition video confirmation of your exact unit, knots, and wefts before packing.",
    icon: Video,
  },
  {
    step: "03",
    title: "VIP White-Glove Packaging",
    description: "Carefully placed in a signature rigid keepsake box with breathable silk storage bag and care guide.",
    icon: PackageCheck,
  },
  {
    step: "04",
    title: "Insured Rapid Dispatch",
    description: "Same-day Lagos VIP dispatch or insured 2–3 day express courier across all Nigerian states.",
    icon: Truck,
  },
];

export function DeliveryInfoSection() {
  const deliveryWhatsAppUrl = buildConciergeWhatsAppUrl("Delivery & Dispatch Schedule");

  return (
    <section className="py-24 bg-[#F5EFE5] text-[#111111] border-b border-[#E4D9C8]">
      <Container size="wide">
        <SectionHeading
          eyebrow="White-Glove Logistics"
          title="How Delivery & Fulfillment Works"
          subtitle="From initial WhatsApp consultation to doorstep unboxing, we treat every order with discrete, insured care."
          align="center"
          lightBackground={true}
          className="mb-16"
        />

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverySteps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white border border-[#E2D7C5] p-6 flex flex-col justify-between shadow-sm hover:border-[#C5A15B] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-light text-[#C5A15B]">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 bg-[#F5EFE5] border border-[#E2D7C5] flex items-center justify-center text-[#111111]">
                      <Icon className="w-4 h-4 text-[#C5A15B]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-normal text-[#111111] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#666058] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F0E6D8] flex items-center text-[10px] text-[#8C6D2D] uppercase tracking-wider font-semibold">
                  <span>Guaranteed Safe Transit</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regional Coverage Bar */}
        <div className="mt-12 p-6 sm:p-8 bg-white border border-[#E2D7C5] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#111111] shadow-sm">
          <div className="flex items-start space-x-3">
            <MapPin className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[#111111] uppercase tracking-wider mb-1">
                Lagos Metro
              </h4>
              <p className="text-[#666058] font-light leading-relaxed">
                Same-day priority rider delivery for in-stock orders confirmed before 1:00 PM.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Truck className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[#111111] uppercase tracking-wider mb-1">
                Nationwide Delivery
              </h4>
              <p className="text-[#666058] font-light leading-relaxed">
                Insured express delivery to Abuja, Port Harcourt, and state capitals (2–3 business days).
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <ShieldCheck className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[#111111] uppercase tracking-wider mb-1">
                Home Salon Service
              </h4>
              <p className="text-[#666058] font-light leading-relaxed">
                Mobile installation and wig fitting at your private residence or hotel suite.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={deliveryWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs uppercase tracking-widest text-[#111111] hover:text-[#B38E46] border-b border-[#111111]/40 pb-0.5 font-semibold"
          >
            Have a specific delivery destination? Ask concierge via WhatsApp &rarr;
          </a>
        </div>
      </Container>
    </section>
  );
}

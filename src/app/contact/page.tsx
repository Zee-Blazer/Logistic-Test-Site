import React from "react";
import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactInquiryClient } from "@/components/contact/ContactInquiryClient";
import { businessConfig } from "@/data/business";
import { buildConciergeWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone, Mail, MapPin, Clock, Truck, HelpCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact Concierge & Studio | WhatsApp, Phone & Studio Suite",
  description:
    "Connect with Maison Hair consultants via WhatsApp, telephone, or visit our Victoria Island private studio by confirmed appointment.",
};

const deliveryFaqs = [
  {
    q: "How fast is delivery within Lagos?",
    a: "Orders confirmed before 1:00 PM are dispatched same-day via VIP courier riders. Orders placed later arrive next-day.",
  },
  {
    q: "Do you ship nationwide across Nigeria?",
    a: "Yes. We deliver to Abuja, Port Harcourt, Ibadan, Enugu, and all Nigerian states via insured express logistics within 2–4 business days.",
  },
  {
    q: "Can I inspect the hair before final dispatch?",
    a: "Yes. Every client receives high-definition WhatsApp video proof of the unit, lace parting, and bundle fullness prior to packaging.",
  },
  {
    q: "How do I book a private studio appointment?",
    a: "You can book directly via our Salon Services page form or send a message on WhatsApp to check open slots for your preferred date.",
  },
];

export default function ContactPage() {
  const directWhatsAppUrl = buildConciergeWhatsAppUrl("General Inquiries & Orders");

  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-[#F5EFE5] selection:bg-[#C5A15B] selection:text-[#111111]">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Shared Header */}
      <Header />

      <main className="flex-1">
        {/* 1. Contact Hero */}
        <section className="relative py-20 lg:py-28 bg-[#141414] border-b border-[#242424] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#141414] to-[#111111] opacity-90" />
          <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-[#C5A15B]/5 rounded-full blur-[120px] pointer-events-none" />

          <Container size="wide" className="relative z-10">
            <div className="max-w-3xl">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A15B] font-semibold mb-3 block">
                VIP Concierge &amp; Salon Coordination
              </span>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5EFE5] leading-[1.1] tracking-tight break-words">
                Connect With Our <br />
                <span className="italic font-light text-[#C5A15B]">
                  Private Studio Team.
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#A39D94] leading-relaxed font-light">
                Whether selecting your first raw wig, organizing bespoke bridal hair, or inquiring about nationwide delivery timelines, our concierge is at your service.
              </p>
            </div>
          </Container>
        </section>

        {/* 2. Contact Cards Grid */}
        <section className="py-16 bg-[#161616] border-b border-[#242424]">
          <Container size="wide">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* WhatsApp Card */}
              <div className="bg-[#181818] border border-[#25D366]/40 p-6 flex flex-col justify-between hover:border-[#25D366] transition-colors group">
                <div>
                  <div className="w-10 h-10 bg-[#1F1F1F] flex items-center justify-center text-[#25D366] mb-4">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-[#F5EFE5] mb-1">
                    WhatsApp Concierge
                  </h3>
                  <p className="text-xs text-[#A39D94] mb-3 font-light leading-relaxed">
                    Fastest response for orders, video proof, and salon dates.
                  </p>
                  <p className="text-xs text-[#E9DFD0] font-mono tracking-wider">
                    {businessConfig.phoneDisplay}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#262626]">
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs uppercase tracking-wider text-[#25D366] hover:underline font-medium"
                  >
                    <span>Message Concierge &rarr;</span>
                  </a>
                </div>
              </div>

              {/* Telephone Card */}
              <div className="bg-[#181818] border border-[#282828] p-6 flex flex-col justify-between hover:border-[#C5A15B]/40 transition-colors">
                <div>
                  <div className="w-10 h-10 bg-[#1F1F1F] flex items-center justify-center text-[#C5A15B] mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-[#F5EFE5] mb-1">
                    Direct Telephone
                  </h3>
                  <p className="text-xs text-[#A39D94] mb-3 font-light leading-relaxed">
                    Customer assistance during studio operating hours.
                  </p>
                  <p className="text-xs text-[#E9DFD0] font-mono tracking-wider">
                    {businessConfig.phoneDisplay}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#262626]">
                  {businessConfig.isPhoneConfigured ? (
                    <a
                      href={`tel:${businessConfig.phoneRaw}`}
                      className="inline-flex items-center text-xs uppercase tracking-wider text-[#C5A15B] hover:underline font-medium"
                    >
                      <span>Call Now &rarr;</span>
                    </a>
                  ) : (
                    <span className="text-[10px] uppercase tracking-wider text-[#77716A]">
                      Demo Number (Use WhatsApp)
                    </span>
                  )}
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-[#181818] border border-[#282828] p-6 flex flex-col justify-between hover:border-[#C5A15B]/40 transition-colors">
                <div>
                  <div className="w-10 h-10 bg-[#1F1F1F] flex items-center justify-center text-[#C5A15B] mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-[#F5EFE5] mb-1">
                    Official Email
                  </h3>
                  <p className="text-xs text-[#A39D94] mb-3 font-light leading-relaxed">
                    Formal press inquiries and bespoke bridal proposals.
                  </p>
                  <p className="text-xs text-[#E9DFD0] font-mono tracking-wider truncate">
                    {businessConfig.email}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#262626]">
                  {businessConfig.isEmailConfigured ? (
                    <a
                      href={`mailto:${businessConfig.email}`}
                      className="inline-flex items-center text-xs uppercase tracking-wider text-[#C5A15B] hover:underline font-medium"
                    >
                      <span>Send Email &rarr;</span>
                    </a>
                  ) : (
                    <span className="text-[10px] uppercase tracking-wider text-[#77716A]">
                      Demo Email Placeholder
                    </span>
                  )}
                </div>
              </div>

              {/* Instagram Card */}
              <div className="bg-[#181818] border border-[#282828] p-6 flex flex-col justify-between hover:border-[#C5A15B]/40 transition-colors">
                <div>
                  <div className="w-10 h-10 bg-[#1F1F1F] flex items-center justify-center text-[#C5A15B] mb-4">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-[#F5EFE5] mb-1">
                    Instagram Showcase
                  </h3>
                  <p className="text-xs text-[#A39D94] mb-3 font-light leading-relaxed">
                    Daily studio styling videos, lace closeups, and looks.
                  </p>
                  <p className="text-xs text-[#E9DFD0] font-mono tracking-wider">
                    {businessConfig.socials.instagram.handle}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#262626]">
                  <a
                    href={businessConfig.socials.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs uppercase tracking-wider text-[#C5A15B] hover:underline font-medium"
                  >
                    <span>View Profile &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. Studio Address, Hours & Interactive WhatsApp Inquiry */}
        <section className="py-20 bg-[#111111] border-b border-[#242424]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Address, Hours & Delivery Coverage */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C5A15B] font-semibold mb-3 block">
                    Private Studio
                  </span>
                  <h2 className="font-serif text-3xl text-[#F5EFE5] mb-4">
                    Studio Location &amp; Visiting
                  </h2>
                  <p className="text-xs sm:text-sm text-[#A39D94] leading-relaxed font-light">
                    To maintain discretion and personalized attention, our studio operates on an appointment-only basis. Unscheduled walk-ins are politely redirected.
                  </p>
                </div>

                {/* Studio Address details */}
                <div className="bg-[#161616] border border-[#262626] p-6 space-y-4">
                  <div className="flex items-start space-x-3 text-xs">
                    <MapPin className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-[#F5EFE5] uppercase tracking-wider mb-1">
                        Physical Studio Address
                      </h4>
                      <p className="text-[#A39D94] font-light leading-relaxed">
                        {businessConfig.address.street}, {businessConfig.address.neighborhood}, {businessConfig.address.city}, {businessConfig.address.country}
                      </p>
                      {businessConfig.address.isPlaceholder && (
                        <span className="inline-block mt-2 text-[10px] text-[#C5A15B] uppercase tracking-wider bg-[#C5A15B]/10 px-2 py-0.5 border border-[#C5A15B]/30">
                          Placeholder Studio Location
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#242424] flex items-start space-x-3 text-xs">
                    <Clock className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="font-medium text-[#F5EFE5] uppercase tracking-wider mb-1">
                        Operating Hours
                      </h4>
                      <p className="text-[#A39D94] font-light">{businessConfig.hours.weekdays}</p>
                      <p className="text-[#A39D94] font-light">{businessConfig.hours.saturday}</p>
                      <p className="text-[#77716A] text-[11px]">{businessConfig.hours.sunday}</p>
                    </div>
                  </div>
                </div>

                {/* Delivery Coverage Strip */}
                <div className="bg-[#161616] border border-[#262626] p-6 space-y-3 text-xs text-[#A39D94]">
                  <div className="flex items-center space-x-2 text-[#F5EFE5] font-medium uppercase tracking-wider">
                    <Truck className="w-4 h-4 text-[#C5A15B]" />
                    <span>Delivery Coverage Summary</span>
                  </div>
                  <p className="font-light leading-relaxed">
                    • <strong>Lagos Metro:</strong> {businessConfig.delivery.lagosCoverage}
                  </p>
                  <p className="font-light leading-relaxed">
                    • <strong>Nationwide:</strong> {businessConfig.delivery.interstateCoverage}
                  </p>
                  <p className="font-light leading-relaxed">
                    • <strong>VIP Packaging:</strong> {businessConfig.delivery.packagingDetails}
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Topic Starter */}
              <div className="lg:col-span-7">
                <ContactInquiryClient />
              </div>
            </div>
          </Container>
        </section>

        {/* 4. Frequently Asked Questions */}
        <section className="py-20 bg-[#F5EFE5] text-[#111111] border-b border-[#E4D9C8]">
          <Container size="wide">
            <SectionHeading
              eyebrow="Delivery & Inquiries"
              title="Frequently Asked Questions"
              subtitle="Quick answers regarding order fulfillment, verification, and payment."
              align="center"
              lightBackground={true}
              className="mb-14"
            />

            <div className="max-w-3xl mx-auto divide-y divide-[#E4D9C8] border-t border-b border-[#E4D9C8]">
              {deliveryFaqs.map((faq, i) => (
                <div key={i} className="py-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#C5A15B] shrink-0" />
                    <h3 className="font-serif text-lg text-[#111111] font-normal">
                      {faq.q}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#666058] leading-relaxed font-light pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. Final WhatsApp CTA */}
        <section className="py-20 bg-[#0E0E0E] text-center relative overflow-hidden">
          <Container size="narrow">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A15B] font-semibold mb-3 block">
              Direct Access
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5EFE5] leading-tight">
              We Are Ready to Assist You.
            </h2>
            <p className="mt-4 text-sm text-[#A39D94] max-w-lg mx-auto leading-relaxed font-light">
              Chat directly with our hair consultants on WhatsApp to place an order or schedule a session.
            </p>
            <div className="mt-8">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#111111] bg-[#C5A15B] hover:bg-[#B38E46] transition-colors border border-[#C5A15B]"
                aria-label="Direct WhatsApp Concierge"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            <p className="mt-6 text-[11px] text-[#77716A]">
              Official WhatsApp: {businessConfig.phoneDisplay} (Sample representation for {businessConfig.name})
            </p>
          </Container>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}

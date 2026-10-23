import React from "react";
import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SalonServicesClient } from "@/components/salon/SalonServicesClient";
import { SalonFaqAccordion } from "@/components/salon/SalonFaqAccordion";
import { businessConfig } from "@/data/business";
import { buildConciergeWhatsAppUrl } from "@/lib/whatsapp";
import { Sparkles, MapPin, Clock, Home, ShieldCheck, MessageCircle, CalendarCheck, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Salon Services & Wig Installation | Private Studio & Home Service",
  description:
    "Bespoke HD lace wig installation, hairline melts, custom unit construction, and restorative treatments. Book an appointment in Victoria Island or request home service.",
};

const bookingSteps = [
  {
    step: "01",
    title: "Select Service & Schedule",
    description: "Browse our menu, choose your desired styling or revamp, and select your preferred date and time.",
    icon: CalendarCheck,
  },
  {
    step: "02",
    title: "Structured WhatsApp Dispatch",
    description: "Submitting your details formats a structured booking inquiry directly to our concierge channel.",
    icon: MessageCircle,
  },
  {
    step: "03",
    title: "Concierge Slot Verification",
    description: "We review the schedule, confirm stylist availability, and finalize location and pre-appointment details.",
    icon: FileCheck,
  },
  {
    step: "04",
    title: "Private Studio or Home Visit",
    description: "Relax in our serene Victoria Island studio or receive our mobile stylist at your residence.",
    icon: ShieldCheck,
  },
];

export default function SalonPage() {
  const bridalConciergeUrl = buildConciergeWhatsAppUrl("Bridal & Event Salon Booking");

  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-[#F5EFE5] selection:bg-[#C5A15B] selection:text-[#111111]">
      {/* Slim Announcement Bar */}
      <AnnouncementBar />

      {/* Shared Header */}
      <Header />

      <main className="flex-1">
        {/* 1. Editorial Salon Hero */}
        <section className="relative py-20 lg:py-28 bg-[#141414] border-b border-[#242424] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#141414] to-[#111111] opacity-90" />
          <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#C5A15B]/5 rounded-full blur-[120px] pointer-events-none" />

          <Container size="wide" className="relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1C1C1C] border border-[#C5A15B]/30 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#E9DFD0]">
                  Private Studio &amp; Home Artistry
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5EFE5] leading-[1.1] tracking-tight break-words">
                Haute Coiffure &amp; <br />
                <span className="italic font-light text-[#C5A15B]">
                  Bespoke Wig Artistry.
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#A39D94] leading-relaxed font-light">
                Experience seamless HD lace melting, bespoke unit tailoring, and scalp restoration in an intimate private studio setting or the comfort of your private residence.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#booking-form"
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#C5A15B] text-[#111111] hover:bg-[#B38E46] transition-colors border border-[#C5A15B]"
                >
                  Request an Appointment
                </a>
                <a
                  href="#services-menu"
                  className="px-6 py-3.5 text-xs uppercase tracking-wider bg-[#1B1B1B] text-[#F5EFE5] hover:bg-[#252525] border border-[#2F2F2F] transition-colors"
                >
                  View Service Menu
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. Introduction to the Salon Experience */}
        <section className="py-16 bg-[#161616] border-b border-[#242424]">
          <Container size="wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-[#A39D94]">
              <div className="border-l-2 border-[#C5A15B] pl-5 space-y-2">
                <h3 className="text-sm font-serif text-[#F5EFE5] tracking-wide">
                  Private 1-on-1 Studio Suites
                </h3>
                <p className="leading-relaxed font-light">
                  No crowded floors or long waiting times. Each client receives the undivided attention of a dedicated master stylist in complete privacy.
                </p>
              </div>

              <div className="border-l-2 border-[#C5A15B] pl-5 space-y-2">
                <h3 className="text-sm font-serif text-[#F5EFE5] tracking-wide">
                  Natural Hair Health Priority
                </h3>
                <p className="leading-relaxed font-light">
                  We believe flawless lace begins with healthy edges. We practice tension-free flat cornrows, scalp steam therapy, and gentle adhesives.
                </p>
              </div>

              <div className="border-l-2 border-[#C5A15B] pl-5 space-y-2">
                <h3 className="text-sm font-serif text-[#F5EFE5] tracking-wide">
                  Home &amp; Hotel Service
                </h3>
                <p className="leading-relaxed font-light">
                  Can&apos;t make it to our Victoria Island studio? Book a mobile master stylist for VIP installation at your home or bridal hotel suite.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 3 & 5. Interactive Service Cards and Appointment Form */}
        <div className="py-20 bg-[#111111]">
          <SalonServicesClient />
        </div>

        {/* 4. Appointment Request Instructions: How It Works */}
        <section className="py-20 bg-[#F5EFE5] text-[#111111] border-t border-b border-[#E4D9C8]">
          <Container size="wide">
            <SectionHeading
              eyebrow="Appointment Protocol"
              title="How Appointments Work"
              subtitle="Our booking process is structured to give every client dedicated time and flawless preparation."
              align="center"
              lightBackground={true}
              className="mb-14"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bookingSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="bg-white border border-[#E2D7C5] p-6 flex flex-col justify-between shadow-sm hover:border-[#C5A15B] transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-serif text-3xl text-[#C5A15B]">
                          {step.step}
                        </span>
                        <div className="w-8 h-8 bg-[#F5EFE5] border border-[#E2D7C5] flex items-center justify-center text-[#C5A15B]">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="font-serif text-lg text-[#111111] mb-2 font-normal">
                        {step.title}
                      </h4>

                      <p className="text-xs text-[#666058] leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-[#F0E6D8] text-[10px] uppercase tracking-wider text-[#8C6D2D] font-semibold">
                      No Automated Charges
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-4 bg-white border border-[#C5A15B]/40 max-w-2xl mx-auto text-center text-xs text-[#55504A] shadow-sm">
              <span className="text-[#8C6D2D] font-semibold mr-1.5">Note:</span>
              Submitting an inquiry does not automatically confirm your booking. Availability is verified manually via WhatsApp by our studio manager.
            </div>
          </Container>
        </section>

        {/* 6. Salon Location & Home-Service Coverage Details */}
        <section className="py-20 bg-[#111111] border-b border-[#242424]">
          <Container size="wide">
            <SectionHeading
              eyebrow="Studio & Coverage"
              title="Location & Home-Service Availability"
              subtitle="Visit our private Victoria Island studio suite or schedule a mobile VIP visit."
              align="center"
              className="mb-14"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Studio Info Card */}
              <div className="bg-[#161616] border border-[#262626] p-8 space-y-5">
                <div className="w-10 h-10 border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A15B] block mb-1">
                    Private Studio
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5EFE5]">
                    Victoria Island Studio Suite
                  </h3>
                </div>
                <p className="text-xs text-[#A39D94] leading-relaxed font-light">
                  {businessConfig.address.display}. Located in a discrete luxury corridor with dedicated private parking and strict appointment-only entry.
                </p>
                <div className="pt-2 border-t border-[#242424] space-y-2 text-xs text-[#E9DFD0]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C5A15B]" />
                    <span>{businessConfig.hours.weekdays}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C5A15B]" />
                    <span>{businessConfig.hours.saturday}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#77716A]">
                    <span>{businessConfig.hours.sunday}</span>
                  </div>
                </div>
              </div>

              {/* Home Service Card */}
              <div className="bg-[#161616] border border-[#262626] p-8 space-y-5">
                <div className="w-10 h-10 border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B]">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A15B] block mb-1">
                    Mobile VIP Experience
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5EFE5]">
                    In-Home &amp; Hotel Service
                  </h3>
                </div>
                <p className="text-xs text-[#A39D94] leading-relaxed font-light">
                  We bring the complete luxury salon experience to your door with professional tools, lighting, and sanitization kits.
                </p>
                <div className="pt-2 border-t border-[#242424] space-y-2 text-xs text-[#A39D94]">
                  <p className="font-medium text-[#E9DFD0]">Coverage Areas (Lagos Metro):</p>
                  <p className="leading-relaxed">
                    Ikoyi, Victoria Island, Lekki Phase 1, Banana Island, and Ikeja GRA. Other locations available upon custom request.
                  </p>
                  <p className="text-[11px] text-[#77716A] pt-1">
                    *Travel fees apply based on distance and service duration.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-[11px] text-[#77716A]">
              Location and hours are representative sample values for {businessConfig.name}.
            </div>
          </Container>
        </section>

        {/* 7. Frequently Asked Questions */}
        <section className="py-20 bg-[#141414] border-b border-[#242424]">
          <Container size="wide">
            <SectionHeading
              eyebrow="Questions & Advice"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about preparing for your installation, home services, and wig care."
              align="center"
              className="mb-14"
            />

            <SalonFaqAccordion />
          </Container>
        </section>

        {/* 8. Final WhatsApp CTA */}
        <section className="py-20 bg-[#0E0E0E] text-center relative overflow-hidden">
          <Container size="narrow" className="relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A15B] font-semibold mb-3 block">
              Direct Concierge Channel
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5EFE5] leading-tight">
              Have a Specific Styling Request <br />
              <span className="italic text-[#C5A15B]">or Bridal Consultation?</span>
            </h2>
            <p className="mt-4 text-sm text-[#A39D94] max-w-lg mx-auto leading-relaxed font-light">
              Our lead hair stylist and booking coordinator are available on WhatsApp to answer questions, recommend styles, and confirm dates.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={bridalConciergeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#111111] bg-[#C5A15B] hover:bg-[#B38E46] transition-colors border border-[#C5A15B]"
                aria-label="Chat on WhatsApp about bridal or event salon service"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Chat with Salon Concierge</span>
              </a>
            </div>
            <p className="mt-6 text-[11px] text-[#77716A]">
              Opening hours: {businessConfig.hours.weekdays}. Direct phone: {businessConfig.phoneDisplay}
            </p>
          </Container>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}

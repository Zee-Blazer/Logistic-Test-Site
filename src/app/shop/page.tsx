import React, { Suspense } from "react";
import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShopCatalogClient } from "@/components/shop/ShopCatalogClient";
import { businessConfig } from "@/data/business";
import { buildConciergeWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Sparkles, ShieldCheck, Truck, Package, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop Luxury Hair | Wigs, Bundles, Closures & Frontals",
  description:
    "Explore 100% unprocessed single-donor raw hair wigs, HD lace frontals, closures, and temple bundles. Hand-inspected with insured nationwide delivery from Lagos.",
};

function CatalogLoadingFallback() {
  return (
    <div className="py-20 text-center space-y-4">
      <div className="w-8 h-8 border-2 border-[#C5A15B] border-t-transparent rounded-full animate-spin mx-auto" />
      <p className="text-xs text-[#A39D94] uppercase tracking-widest font-light">
        Loading Luxury Catalogue...
      </p>
    </div>
  );
}

export default function ShopPage() {
  const customOrderWhatsAppUrl = buildConciergeWhatsAppUrl("Custom Wig or Hair Bundle Specification");

  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-[#F5EFE5] selection:bg-[#C5A15B] selection:text-[#111111]">
      {/* 1. Slim Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Responsive Header */}
      <Header />

      <main className="flex-1">
        {/* 1. Editorial Shop Hero */}
        <section className="relative py-20 lg:py-24 bg-[#141414] border-b border-[#242424] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#141414] to-[#111111] opacity-90" />
          <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#C5A15B]/5 rounded-full blur-[100px] pointer-events-none" />

          <Container size="wide" className="relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1C1C1C] border border-[#C5A15B]/30 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#E9DFD0]">
                  100% Raw Hair Catalogue
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5EFE5] leading-[1.1] tracking-tight break-words">
                Curated Hair Collections. <br />
                <span className="italic font-light text-[#C5A15B]">
                  Bespoke Wigs &amp; Donor Bundles.
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#A39D94] leading-relaxed font-light">
                Discover our curated range of single-donor raw human hair wigs, invisible HD skin-melt lace frontals, and unprocessed temple bundles. Each piece is hand-measured, aligned, and inspected in Lagos.
              </p>
            </div>
          </Container>
        </section>

        {/* 2. Concise Introduction & Ordering Transparency Notice */}
        <section className="py-8 bg-[#161616] border-b border-[#242424]">
          <Container size="wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#A39D94]">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold text-[#F5EFE5] uppercase tracking-wider mb-1">
                    Live Video Verification
                  </h2>
                  <p className="leading-relaxed font-light">
                    Every order includes high-definition video inspection of knots and wefts on WhatsApp before dispatch.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Truck className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold text-[#F5EFE5] uppercase tracking-wider mb-1">
                    Insured Nationwide Logistics
                  </h2>
                  <p className="leading-relaxed font-light">
                    Same-day priority dispatch across Lagos; 2–3 business days insured courier to Abuja and all states.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold text-[#F5EFE5] uppercase tracking-wider mb-1">
                    WhatsApp Click-to-Order
                  </h2>
                  <p className="leading-relaxed font-light">
                    Click any item to open a pre-filled WhatsApp message confirming availability, length, and payment.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3, 4, 5, 6. Category Filter Controls, Product Grid & WhatsApp Action */}
        <section className="py-16 lg:py-24 bg-[#111111]">
          <Container size="wide">
            <Suspense fallback={<CatalogLoadingFallback />}>
              <ShopCatalogClient />
            </Suspense>
          </Container>
        </section>

        {/* 7. Delivery Information Section */}
        <section className="py-20 bg-[#F5EFE5] text-[#111111] border-t border-b border-[#E4D9C8]">
          <Container size="wide">
            <SectionHeading
              eyebrow="White-Glove Fulfillment"
              title="Delivery & Fulfillment Standards"
              subtitle="We handle every hair unit with insured care from Lagos to your doorstep."
              align="center"
              lightBackground={true}
              className="mb-14"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-[#E2D7C5] p-8 space-y-4 shadow-sm">
                <div className="w-10 h-10 border border-[#E2D7C5] bg-[#F5EFE5] flex items-center justify-center text-[#C5A15B]">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#111111]">
                  Lagos Priority Dispatch
                </h3>
                <p className="text-xs text-[#666058] leading-relaxed font-light">
                  Orders placed before 1:00 PM are packaged and dispatched the same afternoon via dedicated VIP motorbike riders with real-time tracking.
                </p>
                <div className="pt-2 text-[11px] text-[#8C6D2D] uppercase tracking-wider font-semibold">
                  Same-Day / Next-Day Service
                </div>
              </div>

              <div className="bg-white border border-[#E2D7C5] p-8 space-y-4 shadow-sm">
                <div className="w-10 h-10 border border-[#E2D7C5] bg-[#F5EFE5] flex items-center justify-center text-[#C5A15B]">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#111111]">
                  Rigid Keepsake Packaging
                </h3>
                <p className="text-xs text-[#666058] leading-relaxed font-light">
                  Every luxury wig arrives in an embossed matte rigid keepsake box, accompanied by a breathable silk storage bag, edge brush, and care routine guide.
                </p>
                <div className="pt-2 text-[11px] text-[#8C6D2D] uppercase tracking-wider font-semibold">
                  Signature Unboxing
                </div>
              </div>

              <div className="bg-white border border-[#E2D7C5] p-8 space-y-4 shadow-sm">
                <div className="w-10 h-10 border border-[#E2D7C5] bg-[#F5EFE5] flex items-center justify-center text-[#C5A15B]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#111111]">
                  Nationwide Express
                </h3>
                <p className="text-xs text-[#666058] leading-relaxed font-light">
                  Direct express delivery to Abuja, Port Harcourt, Enugu, Ibadan, and all state capitals within 2–3 business days via insured air-cargo logistics.
                </p>
                <div className="pt-2 text-[11px] text-[#8C6D2D] uppercase tracking-wider font-semibold">
                  Fully Insured Transit
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 8. Final Contact / Custom Specification CTA */}
        <section className="py-20 bg-[#0E0E0E] text-center relative overflow-hidden">
          <Container size="narrow" className="relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A15B] font-semibold mb-3 block">
              Bespoke Hair Consultation
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5EFE5] leading-tight">
              Looking for a Custom Length <br />
              <span className="italic text-[#C5A15B]">or Specific Density?</span>
            </h2>
            <p className="mt-4 text-sm text-[#A39D94] max-w-lg mx-auto leading-relaxed font-light">
              We create custom machine-sewn units, customized cap circumferences, and specialized texture blend orders on request via WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={customOrderWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#111111] bg-[#C5A15B] hover:bg-[#B38E46] transition-colors border border-[#C5A15B]"
                aria-label="Order custom hair on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Request Custom Specification</span>
              </a>
            </div>
            <p className="mt-6 text-[11px] text-[#77716A]">
              Prices shown in Nigerian Naira (₦). Sample demonstration catalogue for {businessConfig.name}.
            </p>
          </Container>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}

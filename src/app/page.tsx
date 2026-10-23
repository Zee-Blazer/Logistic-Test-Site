import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { BestSellersSection } from "@/components/home/BestSellersSection";
import { SalonPreviewSection } from "@/components/home/SalonPreviewSection";
import { BrandStorySection } from "@/components/home/BrandStorySection";
import { DeliveryInfoSection } from "@/components/home/DeliveryInfoSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { SocialGallerySection } from "@/components/home/SocialGallerySection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-[#F5EFE5] selection:bg-[#C5A15B] selection:text-[#111111]">
      {/* 1. Optional slim announcement bar */}
      <AnnouncementBar />

      {/* 2. Responsive header with brand wordmark, navigation links, and WhatsApp contact action */}
      <Header />

      <main className="flex-1">
        {/* 3. Large editorial hero with premium hair photograph, headline, copy, and 2 CTAs */}
        <HeroSection />

        {/* 4. Featured hair collections with image-led cards */}
        <FeaturedCollections />

        {/* 5. Best-selling products with images, names, prices, and WhatsApp order actions */}
        <BestSellersSection />

        {/* 6. Salon services preview with service descriptions and appointment CTAs */}
        <SalonPreviewSection />

        {/* 7. Editorial brand section communicating quality, confidence, and personal beauty */}
        <BrandStorySection />

        {/* 8. Delivery information section explaining how customers receive their orders */}
        <DeliveryInfoSection />

        {/* 9. Customer testimonials using clearly identified sample content */}
        <TestimonialsSection />

        {/* 10. Instagram / social gallery */}
        <SocialGallerySection />

        {/* 11. Final conversion section with clear WhatsApp CTA */}
        <FinalCtaSection />
      </main>

      {/* 12. Complete footer containing navigation, contact details, hours, delivery info, and socials */}
      <Footer />
    </div>
  );
}

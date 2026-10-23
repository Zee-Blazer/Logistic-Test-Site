import React from "react";
import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { businessConfig } from "@/data/business";
import { Sparkles, ShieldCheck, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | The Art of Uncompromising Hair Luxury",
  description:
    "Discover the craftsmanship, ethical single-donor sourcing, and uncompromising standards behind Maison Hair's raw wigs, bundles, and bespoke salon services.",
};

const qualityStandards = [
  {
    title: "100% Single-Donor Raw Hair",
    description:
      "Every bundle and wig begins with hair collected from a single donor with intact, unidirectional cuticles. We strictly prohibit chemical acid-baths, synthetic fillers, and artificial silicone glazing.",
  },
  {
    title: "Micro-Knotted Swiss HD Film Lace",
    description:
      "We source authentic ultra-thin Swiss HD lace. Each knot is hand-tied with single-hair knots along the hairline to guarantee seamless, undetectable melting across every skin tone.",
  },
  {
    title: "Live Video Verification Prior to Dispatch",
    description:
      "Before any piece is packed into our signature keepsake box, our concierge shares high-resolution video proof of the lace, knot craftsmanship, and bundle density directly on WhatsApp.",
  },
  {
    title: "Hygienic Care & Sanitization Standards",
    description:
      "Every unit undergoes ultrasonic steam cleansing and organic botanical conditioning. Hair tools and studio suites are sterilized before each private client session.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-[#F5EFE5] selection:bg-[#C5A15B] selection:text-[#111111]">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Shared Header */}
      <Header />

      <main className="flex-1">
        {/* 1. Visually Strong Editorial Hero */}
        <section className="relative py-24 lg:py-32 bg-[#141414] border-b border-[#242424] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/85 via-[#141414] to-[#111111] opacity-90" />
          <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#C5A15B]/5 rounded-full blur-[130px] pointer-events-none" />

          <Container size="wide" className="relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1C1C1C] border border-[#C5A15B]/30 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#E9DFD0]">
                  The Maison Standard
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5EFE5] leading-[1.1] tracking-tight break-words">
                Crafted for Women Who <br />
                <span className="italic font-light text-[#C5A15B]">
                  Refuse Compromise.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-[#A39D94] leading-relaxed font-light">
                {businessConfig.name} was envisioned as an antidote to mass-produced, chemically coated hair extensions. We curate only single-donor raw hair, master-melt lace, and private salon experiences in Lagos.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/shop" variant="primary" size="lg">
                  <span>Explore Collections</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="/salon" variant="outline" size="lg">
                  <span>Our Salon Services</span>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. Brand Story: Authentic Narrative */}
        <section className="py-24 bg-[#111111] border-b border-[#242424]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Photo Composition */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[3/4] w-full bg-[#181818] border border-[#282828] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=1200&q=85"
                    alt="Maison Hair artisan examining raw hair luster"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-50" />
                </div>
                {/* Decorative border accent */}
                <div className="hidden sm:block absolute -bottom-5 -left-5 w-40 h-40 border border-[#C5A15B]/30 -z-0 pointer-events-none" />
              </div>

              {/* Story Copy */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5A15B] font-semibold mb-3">
                  Our Purpose
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5EFE5] font-normal leading-tight">
                  Hair That Moves, Breathes, and Endures.
                </h2>

                <p className="mt-6 text-sm text-[#A39D94] leading-relaxed font-light">
                  In an industry saturated with silicone-coated synthetic blends labeled as &ldquo;virgin hair,&rdquo; discerning women have too often faced units that lose their luster after a single wash. We set out to change that standard.
                </p>

                <p className="mt-4 text-sm text-[#A39D94] leading-relaxed font-light">
                  We specialize exclusively in authentic raw human hair sourced from single donors in Vietnam, Burma, and Cambodia. Because the cuticles are fully aligned and chemically untouched, our hair holds heat styling, curls, and color with the natural buoyancy of healthy, luxurious tresses.
                </p>

                <blockquote className="mt-8 pl-5 border-l-2 border-[#C5A15B] font-serif italic text-lg text-[#E9DFD0] leading-relaxed">
                  &ldquo;We don&apos;t build wigs for one-time events. We engineer hair that becomes an effortless daily signature—lasting through revamps, seasons, and travels.&rdquo;
                </blockquote>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. Brand Philosophy & Pillars */}
        <section className="py-24 bg-[#F5EFE5] text-[#111111] border-b border-[#E4D9C8]">
          <Container size="wide">
            <SectionHeading
              eyebrow="Our Sourcing Creed"
              title="What Defines True Hair Quality"
              subtitle="Every product in our catalogue and service in our salon adheres to four immutable benchmarks."
              align="center"
              lightBackground={true}
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {qualityStandards.map((std, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E2D7C5] p-8 flex flex-col justify-between shadow-sm hover:border-[#C5A15B] transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 border border-[#E2D7C5] bg-[#F5EFE5] flex items-center justify-center text-[#C5A15B] mb-5">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#111111] mb-3">
                      {std.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666058] leading-relaxed font-light">
                      {std.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#F0E6D8] flex items-center text-[10px] uppercase tracking-wider text-[#8C6D2D] font-semibold">
                    <Check className="w-3.5 h-3.5 mr-1" />
                    Strict Quality Control
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 4. Editorial Gallery / Behind the Craftsmanship */}
        <section className="py-24 bg-[#111111] border-b border-[#242424]">
          <Container size="wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative aspect-[3/4] bg-[#181818] border border-[#282828] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Precision styling and lace contouring"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A15B] block mb-1">
                    Custom Contouring
                  </span>
                  <p className="font-serif text-lg text-[#F5EFE5]">
                    Hairlines Plucked for Authentic Scalp Illusion
                  </p>
                </div>
              </div>

              <div className="relative aspect-[3/4] bg-[#181818] border border-[#282828] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                  alt="Private salon suite installation"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A15B] block mb-1">
                    Private Studio
                  </span>
                  <p className="font-serif text-lg text-[#F5EFE5]">
                    1-on-1 Discretion and Master Artistry
                  </p>
                </div>
              </div>

              <div className="relative aspect-[3/4] bg-[#181818] border border-[#282828] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                  alt="Raw single-donor bundle alignment"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A15B] block mb-1">
                    Donor Integrity
                  </span>
                  <p className="font-serif text-lg text-[#F5EFE5]">
                    Double-Drawn Weight from Root to Tip
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 5. Clear Next Steps / Conversion */}
        <section className="py-24 bg-[#0E0E0E] text-center relative overflow-hidden">
          <Container size="narrow">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A15B] font-semibold mb-3 block">
              Begin Your Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5EFE5] leading-tight">
              Discover Your Next <br />
              <span className="italic text-[#C5A15B]">Signature Look.</span>
            </h2>
            <p className="mt-4 text-sm text-[#A39D94] max-w-lg mx-auto leading-relaxed font-light">
              Explore our ready-to-wear raw wigs, purchase single-donor bundles, or reserve a private session with our master stylist.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/shop" variant="primary" size="lg">
                <span>Browse Hair Shop</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/salon" variant="outline" size="lg">
                <span>Book Salon Appointment</span>
              </Button>
            </div>
            <p className="mt-8 text-[11px] text-[#77716A]">
              Demonstration brand profile for {businessConfig.name}. Handcrafted in Lagos, Nigeria.
            </p>
          </Container>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}

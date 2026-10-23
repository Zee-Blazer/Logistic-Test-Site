import React from "react";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { businessConfig } from "@/data/business";

const galleryImages = [
  {
    id: "gal-01",
    src: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=700&q=80",
    alt: "Bone straight silk press finish on luxury wig",
    caption: "30\" Obsidian Bone Straight",
  },
  {
    id: "gal-02",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
    alt: "Sharp razor blunt cut wig styling",
    caption: "Sculpted Blunt Bob Melt",
  },
  {
    id: "gal-03",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80",
    alt: "Private salon wig installation & styling session",
    caption: "In-Studio Lace Customization",
  },
  {
    id: "gal-04",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
    alt: "Raw Burmese deep wave luscious curls",
    caption: "Burmese Deep Wave Volume",
  },
  {
    id: "gal-05",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    alt: "Temple hair raw bundle alignment",
    caption: "Raw Cambodian Wave Bundles",
  },
  {
    id: "gal-06",
    src: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=700&q=80",
    alt: "Signature Hollywood body wave hair",
    caption: "Hollywood Body Wave Glam",
  },
];

export function SocialGallerySection() {
  return (
    <section className="py-24 bg-[#141414] border-b border-[#242424]">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="Editorial Moments"
            title="The Maison Gallery"
            subtitle="Explore our daily hair artistry, client transformations, and behind-the-chair craftsmanship."
          />
          <a
            href={businessConfig.socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#C5A15B] hover:text-[#B38E46] transition-colors shrink-0 font-medium group"
          >
            <InstagramIcon className="w-4 h-4 mr-2" />
            <span>Follow {businessConfig.socials.instagram.handle}</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 6-Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {galleryImages.map((img) => (
            <a
              key={img.id}
              href={businessConfig.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square w-full overflow-hidden bg-[#1B1B1B] border border-[#282828] block"
              aria-label={`View ${img.caption} on Instagram`}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#111111]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                <InstagramIcon className="w-5 h-5 text-[#C5A15B] mb-2" />
                <span className="text-[10px] uppercase tracking-wider text-[#F5EFE5] font-serif">
                  {img.caption}
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

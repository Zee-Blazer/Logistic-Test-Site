import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { sampleProducts, formatPrice } from "@/data/products";
import { buildProductWhatsAppUrl } from "@/lib/whatsapp";

export function BestSellersSection() {
  const bestsellers = sampleProducts.filter((p) => p.isBestseller || p.isFeatured).slice(0, 4);

  return (
    <section className="py-24 bg-[#111111] border-b border-[#242424]">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="Client Favorites"
            title="Best-Selling Units & Bundles"
            subtitle="The most coveted hair selections, hand-inspected for weight density, strand purity, and lasting luster."
          />
          <Link
            href="/shop"
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#C5A15B] hover:text-[#B38E46] transition-colors shrink-0 font-medium group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Responsive Product Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {bestsellers.map((product) => {
            const formattedPrice = formatPrice(product.price);
            const whatsappOrderUrl = buildProductWhatsAppUrl({
              productName: product.name,
              priceFormatted: formattedPrice,
              sku: product.id,
              lengthOrTexture: `${product.length} • ${product.texture}`,
            });

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between bg-[#161616] border border-[#262626] hover:border-[#C5A15B]/50 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#1B1B1B]">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {product.isBestseller && (
                      <span className="bg-[#C5A15B] text-[#111111] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5">
                        Bestseller
                      </span>
                    )}
                    <span className="bg-[#111111]/85 backdrop-blur-sm text-[#E9DFD0] border border-[#333333] text-[9px] uppercase tracking-widest px-2 py-0.5">
                      {product.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-[11px] text-[#A39D94] space-x-2 tracking-wider mb-1.5">
                      <span>{product.texture}</span>
                      <span>•</span>
                      <span>{product.length}</span>
                    </div>

                    <h3 className="font-serif text-lg font-normal text-[#F5EFE5] group-hover:text-[#C5A15B] transition-colors leading-snug">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-xs text-[#77716A] line-clamp-2 font-light leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & WhatsApp Action */}
                  <div className="mt-5 pt-4 border-t border-[#242424]">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-base font-semibold text-[#F5EFE5] tracking-tight">
                          {formattedPrice}
                        </span>
                        {product.originalPrice && (
                          <span className="ml-2 text-xs text-[#77716A] line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-[#C5A15B] uppercase tracking-wider">
                        In Stock
                      </span>
                    </div>

                    <a
                      href={whatsappOrderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#1E1E1E] text-[#F5EFE5] border border-[#C5A15B]/40 hover:bg-[#C5A15B] hover:text-[#111111] hover:border-[#C5A15B] transition-all duration-200"
                      aria-label={`Order ${product.name} via WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 mr-2" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

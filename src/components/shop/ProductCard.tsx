import React from "react";
import { MessageCircle, Check, Sparkles } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { buildProductWhatsAppUrl } from "@/lib/whatsapp";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = formatPrice(product.price);
  const whatsappUrl = buildProductWhatsAppUrl({
    productName: product.name,
    priceFormatted: formattedPrice,
    sku: product.id,
    category: product.categoryLabel,
    lengthOrTexture: `${product.length || "Standard"} • ${product.texture || "Natural"}`,
  });

  return (
    <article
      className="group flex flex-col justify-between bg-[#161616] border border-[#262626] hover:border-[#C5A15B]/50 transition-all duration-300"
      aria-label={product.name}
    >
      <div>
        {/* Product Image with Consistent Aspect Ratio */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#1B1B1B]">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Floating Category & Status Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {product.featured && (
              <span className="bg-[#C5A15B] text-[#111111] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 shadow-sm">
                Featured
              </span>
            )}
            <span className="bg-[#111111]/85 backdrop-blur-sm text-[#E9DFD0] border border-[#333333] text-[9px] uppercase tracking-widest px-2 py-0.5">
              {product.categoryLabel}
            </span>
          </div>

          {/* Texture Badge overlay */}
          {product.texture && (
            <div className="absolute bottom-3 right-3 z-10">
              <span className="bg-[#111111]/80 backdrop-blur-sm text-[#C5A15B] text-[10px] tracking-wide px-2 py-0.5 border border-[#C5A15B]/30">
                {product.texture}
              </span>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="p-5 sm:p-6 flex flex-col">
          {/* Attributes strip */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#A39D94] tracking-wider mb-2 font-light">
            {product.length && (
              <span className="bg-[#202020] px-2 py-0.5 border border-[#2A2A2A]">
                {product.length}
              </span>
            )}
            {product.origin && (
              <span className="text-[#77716A] text-[10px] uppercase">
                {product.origin}
              </span>
            )}
          </div>

          {/* Title with Fixed Min-Height for Visual Grid Alignment */}
          <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F5EFE5] group-hover:text-[#C5A15B] transition-colors leading-snug line-clamp-2 min-h-[3rem]">
            {product.name}
          </h3>

          {/* Description Snippet */}
          <p className="mt-2 text-xs text-[#77716A] line-clamp-2 font-light leading-relaxed min-h-[2rem]">
            {product.description}
          </p>

          {/* Key Specifications (Lace, Density) */}
          {(product.laceType || product.density) && (
            <div className="mt-3 pt-3 border-t border-[#222222] space-y-1 text-[11px] text-[#A39D94]">
              {product.laceType && (
                <div className="flex items-center space-x-1.5 truncate">
                  <Sparkles className="w-3 h-3 text-[#C5A15B] shrink-0" />
                  <span className="truncate">{product.laceType}</span>
                </div>
              )}
              {product.density && (
                <div className="flex items-center space-x-1.5 truncate">
                  <Check className="w-3 h-3 text-[#C5A15B] shrink-0" />
                  <span className="truncate">{product.density}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Pricing & WhatsApp Order Action Footer */}
      <div className="p-5 sm:p-6 pt-0 mt-4">
        <div className="pt-4 border-t border-[#242424]">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-base sm:text-lg font-semibold text-[#F5EFE5] tracking-tight">
                {formattedPrice}
              </span>
              {product.originalPrice && (
                <span className="ml-2 text-xs text-[#77716A] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] uppercase tracking-wider text-[#C5A15B] font-medium">
              Verified Stock
            </span>
          </div>

          {/* Direct WhatsApp Order Action */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center px-4 py-3 text-xs font-semibold uppercase tracking-wider bg-[#1E1E1E] text-[#F5EFE5] border border-[#C5A15B]/40 hover:bg-[#C5A15B] hover:text-[#111111] hover:border-[#C5A15B] transition-all duration-200 select-none"
            aria-label={`Order ${product.name} on WhatsApp`}
          >
            <MessageCircle className="w-3.5 h-3.5 mr-2 shrink-0" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}

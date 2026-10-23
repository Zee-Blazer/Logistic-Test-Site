import React from "react";
import { Clock, Home, Check, Sparkles, Calendar } from "lucide-react";
import { SalonService, formatServicePrice } from "@/data/services";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

interface ServiceCardProps {
  service: SalonService;
  onSelectService: (serviceName: string) => void;
}

export function ServiceCard({ service, onSelectService }: ServiceCardProps) {
  const formattedPrice = formatServicePrice(service.price);

  return (
    <article
      className="group flex flex-col justify-between bg-[#181818] border border-[#282828] hover:border-[#C5A15B]/50 transition-all duration-300 overflow-hidden"
      aria-label={service.name}
    >
      <div>
        {/* Service Photography with Fallback */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1F1F1F]">
          <ImageWithFallback
            src={service.image}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {service.isPopular && (
              <span className="bg-[#C5A15B] text-[#111111] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 shadow-sm">
                Most Requested
              </span>
            )}
            {service.duration && (
              <span className="bg-[#111111]/85 backdrop-blur-sm text-[#E9DFD0] border border-[#333333] text-[9px] uppercase tracking-widest px-2 py-0.5 flex items-center gap-1">
                <Clock className="w-2.5 h-2.5 text-[#C5A15B]" />
                {service.duration}
              </span>
            )}
          </div>

          {/* Home Service Badge */}
          <div className="absolute bottom-3 right-3 z-10">
            {service.homeServiceAvailable ? (
              <span className="bg-[#111111]/90 backdrop-blur-sm text-[#C5A15B] text-[10px] tracking-wide px-2 py-0.5 border border-[#C5A15B]/40 flex items-center gap-1">
                <Home className="w-2.5 h-2.5" />
                Home Service Available
              </span>
            ) : (
              <span className="bg-[#111111]/90 backdrop-blur-sm text-[#A39D94] text-[10px] tracking-wide px-2 py-0.5 border border-[#333333]">
                Studio Only
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center space-x-1.5 text-[10px] text-[#A39D94] uppercase tracking-widest mb-1.5 font-light">
            <Sparkles className="w-3 h-3 text-[#C5A15B]" />
            <span>{service.tagline}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F5EFE5] group-hover:text-[#C5A15B] transition-colors leading-snug">
            {service.name}
          </h3>

          <p className="mt-3 text-xs text-[#A39D94] leading-relaxed font-light">
            {service.description}
          </p>

          {/* Feature Checklist */}
          <ul className="mt-5 space-y-2 border-t border-[#242424] pt-4 text-xs text-[#E9DFD0]/90">
            {service.features.map((feat, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#C5A15B] shrink-0 mt-0.5" />
                <span className="font-light">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pricing & Booking Trigger */}
      <div className="p-6 pt-0 mt-4">
        <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#77716A] block">
              {service.priceNote || "Estimated Fee"}
            </span>
            <span className="text-lg font-semibold text-[#F5EFE5]">
              {formattedPrice}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onSelectService(service.name)}
            className="inline-flex items-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#111111] bg-[#C5A15B] hover:bg-[#B38E46] transition-colors cursor-pointer"
            aria-label={`Select ${service.name} for booking request`}
          >
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            <span>Book Service</span>
          </button>
        </div>
      </div>
    </article>
  );
}

import React from "react";
import Link from "next/link";
import { businessConfig } from "@/data/business";
import { buildConciergeWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { MessageCircle, Clock, MapPin, Truck } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = buildConciergeWhatsAppUrl("Footer General Inquiry");

  return (
    <footer className="bg-[#0C0C0C] text-[#F5EFE5] border-t border-[#222222] pt-16 pb-12">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-[#222222]">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.2em] font-normal uppercase text-[#F5EFE5]">
                {businessConfig.name}
              </span>
              <span className="block text-[9px] uppercase tracking-[0.35em] text-[#C5A15B] font-light mt-0.5">
                Luxury Hair & Salon
              </span>
            </Link>
            <p className="text-xs text-[#A39D94] leading-relaxed max-w-sm font-light">
              {businessConfig.shortDescription}
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={businessConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#2A2A2A] hover:border-[#C5A15B] flex items-center justify-center text-[#A39D94] hover:text-[#C5A15B] transition-colors"
                aria-label={`Instagram profile ${businessConfig.socials.instagram.handle}`}
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#2A2A2A] hover:border-[#25D366] flex items-center justify-center text-[#A39D94] hover:text-[#25D366] transition-colors"
                aria-label="Direct WhatsApp Concierge"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C5A15B] font-semibold mb-5">
              Explore Collections
            </h3>
            <ul className="space-y-3 text-xs tracking-wider font-light">
              <li>
                <Link
                  href="/shop?category=wigs"
                  className="text-[#A39D94] hover:text-[#F5EFE5] transition-colors"
                >
                  Raw Virgin Wigs
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=frontals"
                  className="text-[#A39D94] hover:text-[#F5EFE5] transition-colors"
                >
                  HD Frontals & Closures
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=bundles"
                  className="text-[#A39D94] hover:text-[#F5EFE5] transition-colors"
                >
                  Raw Donor Bundles
                </Link>
              </li>
              <li>
                <Link
                  href="/salon"
                  className="text-[#A39D94] hover:text-[#F5EFE5] transition-colors"
                >
                  Salon Installation & Revamp
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#A39D94] hover:text-[#F5EFE5] transition-colors"
                >
                  The Maison Standard
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#A39D94] hover:text-[#F5EFE5] transition-colors"
                >
                  VIP Concierge & Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours & Studio */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C5A15B] font-semibold mb-5 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#C5A15B]" />
              Studio Schedule
            </h3>
            <ul className="space-y-3 text-xs text-[#A39D94] font-light leading-relaxed">
              <li>{businessConfig.hours.weekdays}</li>
              <li>{businessConfig.hours.saturday}</li>
              <li>{businessConfig.hours.sunday}</li>
              <li className="pt-2 text-xs text-[#E9DFD0] flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A15B] shrink-0 mt-0.5" />
                <span>{businessConfig.address.display}</span>
              </li>
            </ul>
          </div>

          {/* Delivery & Ordering via WhatsApp */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C5A15B] font-semibold mb-5 flex items-center gap-2">
              <Truck className="w-3.5 h-3.5 text-[#C5A15B]" />
              White-Glove Delivery
            </h3>
            <p className="text-xs text-[#A39D94] font-light leading-relaxed mb-4">
              {businessConfig.delivery.lagosCoverage}
            </p>
            <p className="text-xs text-[#77716A] leading-relaxed mb-4">
              Orders and appointment requests are confirmed directly through our private WhatsApp concierge channel.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-[#C5A15B] hover:text-[#B38E46] font-medium tracking-wide border-b border-[#C5A15B]/50 pb-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
              Direct WhatsApp Concierge &rarr;
            </a>
          </div>
        </div>

        {/* Bottom Bar & Prototype Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#77716A] space-y-4 md:space-y-0">
          <p>
            &copy; {currentYear} {businessConfig.name}. All rights reserved. Configurable brand prototype.
          </p>
          <div className="flex items-center space-x-6 text-[10px] tracking-wider uppercase">
            <span className="text-[#A39D94]">100% Unprocessed Raw Human Hair</span>
            <span className="hidden sm:inline text-[#2A2A2A]">•</span>
            <span className="text-[#A39D94]">Insured Nationwide Logistics</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

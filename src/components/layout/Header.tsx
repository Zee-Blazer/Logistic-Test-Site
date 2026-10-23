"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Sparkles } from "lucide-react";
import { businessConfig } from "@/data/business";
import { buildConciergeWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop Hair", href: "/shop" },
  { label: "Salon Services", href: "/salon" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerTop, setDrawerTop] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // The drawer is viewport-fixed, so anchor it to wherever the sticky header
  // currently ends (the announcement bar may still be on screen).
  const measureHeader = () => {
    const bottom = headerRef.current?.getBoundingClientRect().bottom ?? 0;
    setDrawerTop(Math.max(0, Math.round(bottom)));
  };

  // Re-measure once the scroll lock has settled, and on resize.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    measureHeader();
    window.addEventListener("resize", measureHeader);
    return () => window.removeEventListener("resize", measureHeader);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    // Measure before the drawer paints so it never flashes at a stale offset.
    if (!mobileMenuOpen) measureHeader();
    setMobileMenuOpen((open) => !open);
  };

  // Support closing mobile menu with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const whatsappUrl = buildConciergeWhatsAppUrl("General Enquiry");

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-40 bg-[#111111]/95 backdrop-blur-md border-b border-[#242424] transition-colors"
      >
        <Container size="wide">
          <div className="flex items-center justify-between gap-x-6 h-20 sm:h-24">
            {/* Brand Wordmark */}
            <Link
              href="/"
              className="group flex flex-col items-start shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A15B]"
              aria-label={`${businessConfig.name} Home`}
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-normal uppercase whitespace-nowrap text-[#F5EFE5] group-hover:text-[#C5A15B] transition-colors">
                {businessConfig.name}
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#C5A15B] font-light -mt-1 hidden xs:block">
                Luxury Hair & Salon
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-x-5 xl:gap-x-8"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs uppercase tracking-[0.2em] whitespace-nowrap transition-colors py-1 relative ${
                      isActive
                        ? "text-[#C5A15B] font-medium"
                        : "text-[#E9DFD0]/80 hover:text-[#C5A15B]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A15B]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop WhatsApp Action */}
            <div className="hidden lg:flex items-center shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap text-[#111111] bg-[#C5A15B] hover:bg-[#B38E46] transition-all duration-200 border border-[#C5A15B] shadow-sm"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-2 shrink-0" />
                <span>
                  <span className="hidden xl:inline">Order on </span>WhatsApp
                </span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden space-x-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#C5A15B] hover:text-[#B38E46] focus:outline-none"
                aria-label="Direct WhatsApp Concierge"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="p-2 text-[#F5EFE5] hover:text-[#C5A15B] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A15B]"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer. Kept outside <header> because the header's
          backdrop-blur makes it the containing block for fixed descendants,
          which would collapse this panel to the header's own height. */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          style={{ top: drawerTop }}
          className="lg:hidden fixed inset-x-0 bottom-0 bg-[#111111] border-t border-[#242424] z-50 flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="flex flex-col space-y-6 pt-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A15B] font-semibold">
              Navigation
            </span>
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-serif text-2xl tracking-wide transition-colors flex items-center justify-between py-2 border-b border-[#202020] ${
                    isActive
                      ? "text-[#C5A15B] italic font-normal"
                      : "text-[#F5EFE5] hover:text-[#C5A15B]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#C5A15B]" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 pb-6 border-t border-[#242424] space-y-4">
            <p className="text-xs text-[#77716A] leading-relaxed">
              Order wigs, request bespoke styling, or book home salon appointments directly via WhatsApp concierge.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#111111] bg-[#C5A15B] hover:bg-[#B38E46] transition-colors border border-[#C5A15B]"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with Concierge on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}

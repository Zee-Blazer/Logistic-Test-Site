import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles, Check, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { salonServices, formatServicePrice } from "@/data/services";
import { buildAppointmentWhatsAppUrl } from "@/lib/whatsapp";

export function SalonPreviewSection() {
  return (
    <section className="py-24 bg-[#EFE7DC] text-[#111111] border-b border-[#DECFC0]">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="Private Studio & In-Home Artistry"
            title="Salon Services & Wig Installation"
            subtitle="Expert hairline melting, restorative steam treatments, and bridal styling delivered in our Victoria Island studio or your residence."
            lightBackground={true}
          />
          <Link
            href="/salon"
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#111111] hover:text-[#B38E46] transition-colors shrink-0 font-semibold group border-b border-[#111111]/30 pb-0.5"
          >
            <span>View All Salon Services</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2-Column Service Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {salonServices.slice(0, 2).map((service) => {
            const appointmentUrl = buildAppointmentWhatsAppUrl({
              serviceName: service.name,
              priceFormatted: `${formatServicePrice(service.price)} (${service.priceNote || ""})`,
            });

            return (
              <div
                key={service.id}
                className="group flex flex-col md:flex-row bg-white border border-[#D9CDBE] hover:border-[#C5A15B] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative aspect-[4/3] md:aspect-auto md:w-2/5 shrink-0 bg-[#E2D6C6] overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#111111] text-[10px] uppercase tracking-wider text-[#F5EFE5] px-2.5 py-1 font-medium">
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Service Info */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-[10px] text-[#8C6D2D] uppercase tracking-widest mb-1.5 font-semibold">
                      <Sparkles className="w-3 h-3 text-[#C5A15B]" />
                      <span>{service.tagline}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-normal text-[#111111] group-hover:text-[#B38E46] transition-colors leading-tight">
                      {service.name}
                    </h3>

                    <p className="mt-3 text-xs text-[#666058] leading-relaxed font-light">
                      {service.description}
                    </p>

                    <ul className="mt-4 space-y-1.5 text-xs text-[#2A2A2A]">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-[#C5A15B] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#F0E6D8] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#77716A] uppercase tracking-wider block font-medium">
                        Estimated Fee
                      </span>
                      <span className="text-lg font-semibold text-[#111111]">
                        {formatServicePrice(service.price)}
                      </span>
                    </div>

                    <a
                      href={appointmentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#111111] bg-[#C5A15B] hover:bg-[#B38E46] transition-colors shadow-sm"
                      aria-label={`Book ${service.name} on WhatsApp`}
                    >
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      <span>Request Date</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Booking Note */}
        <div className="mt-10 p-5 bg-white border border-[#D9CDBE] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#55504A] shadow-sm">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <Clock className="w-4 h-4 text-[#C5A15B] shrink-0 hidden sm:block" />
            <span>
              Appointments are held at our private Victoria Island studio or booked as private residence visits across Lagos. Slots are verified manually via WhatsApp.
            </span>
          </div>
          <Link
            href="/salon"
            className="text-xs uppercase tracking-wider text-[#111111] hover:text-[#B38E46] font-semibold shrink-0 border-b border-[#111111]/30 pb-0.5"
          >
            How Salon Booking Works &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}

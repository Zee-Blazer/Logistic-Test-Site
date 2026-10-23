"use client";

import React, { useState } from "react";
import { ServiceCard } from "@/components/salon/ServiceCard";
import { AppointmentForm } from "@/components/salon/AppointmentForm";
import { salonServices } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

export function SalonServicesClient() {
  const [selectedService, setSelectedService] = useState<string>(salonServices[0].name);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const formElement = document.getElementById("booking-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="space-y-24">
      {/* 1. Services Cards Grid */}
      <section id="services-menu" className="scroll-mt-28">
        <Container size="wide">
          <SectionHeading
            eyebrow="Signature Styling Menu"
            title="Private Studio & Home Services"
            subtitle="Explore our comprehensive menu of customized wig installations, restorative treatments, and bridal glam experiences."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salonServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={handleSelectService}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Interactive Appointment Form */}
      <section>
        <Container size="wide">
          <AppointmentForm
            selectedService={selectedService}
            onServiceChange={setSelectedService}
          />
        </Container>
      </section>
    </div>
  );
}

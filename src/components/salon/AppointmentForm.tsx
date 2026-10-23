"use client";

import React, { useState, useRef } from "react";
import { MessageCircle, Calendar, Clock, MapPin, User, FileText, AlertCircle, CheckCircle2 } from "lucide-react";
import { salonServices, formatServicePrice } from "@/data/services";
import { buildAppointmentWhatsAppUrl } from "@/lib/whatsapp";
import { businessConfig } from "@/data/business";

interface AppointmentFormProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

interface FormErrors {
  customerName?: string;
  selectedService?: string;
  preferredDate?: string;
  preferredTime?: string;
}

function getTodayDateString(): string {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function AppointmentForm({ selectedService, onServiceChange }: AppointmentFormProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const minDate = getTodayDateString();

  const [customerName, setCustomerName] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("11:00 AM – Morning Session");
  const [locationType, setLocationType] = useState("Victoria Island Private Studio");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!customerName.trim() || customerName.trim().length < 2) {
      newErrors.customerName = "Please provide your full name (at least 2 characters).";
    }

    if (!selectedService.trim()) {
      newErrors.selectedService = "Please select a salon service.";
    }

    if (!preferredDate) {
      newErrors.preferredDate = "Please choose a preferred appointment date.";
    } else {
      const selected = new Date(preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = "Appointment date cannot be in the past.";
      }
    }

    if (!preferredTime.trim()) {
      newErrors.preferredTime = "Please select a preferred time slot.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Find service to get formatted price
    const matchedService = salonServices.find((s) => s.name === selectedService);
    const priceFormatted = matchedService ? formatServicePrice(matchedService.price) : undefined;

    const whatsappUrl = buildAppointmentWhatsAppUrl({
      customerName: customerName.trim(),
      serviceName: selectedService,
      priceFormatted,
      preferredDate,
      preferredTime,
      locationType,
      notes: notes.trim() || undefined,
    });

    // Provide user feedback
    setSubmittedMessage(
      `Your appointment inquiry has been compiled for ${selectedService} on ${preferredDate}. Opening WhatsApp to send your request directly to our concierge.`
    );

    // Open WhatsApp in safe new window/tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={formRef}
      id="booking-form"
      className="bg-[#181818] border border-[#282828] p-6 sm:p-10 scroll-mt-28"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A15B] font-semibold mb-2 block">
            Direct Concierge Scheduling
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F5EFE5]">
            Request an Appointment Slot
          </h3>
          <p className="mt-2 text-xs text-[#A39D94] font-light leading-relaxed">
            Fill in your preferred date and session details. When you submit, a pre-filled WhatsApp message is created for our concierge to review availability.
          </p>
        </div>

        {/* Submission notification banner */}
        {submittedMessage && (
          <div
            role="status"
            className="mb-8 p-4 bg-[#142318] border border-[#25D366]/40 text-xs text-[#E9DFD0] flex items-start space-x-3"
          >
            <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-[#25D366] mb-1">WhatsApp Window Opened</p>
              <p className="text-[#A39D94] leading-relaxed font-light">{submittedMessage}</p>
              <p className="mt-2 text-[11px] text-[#C5A15B]">
                Remember to press <strong>Send</strong> in WhatsApp to deliver your inquiry to our studio team.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* 1. Customer Name */}
          <div>
            <label
              htmlFor="customerName"
              className="block text-xs uppercase tracking-wider text-[#E9DFD0] mb-2 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#C5A15B]" />
                Full Name <span className="text-[#C5A15B]">*</span>
              </span>
            </label>
            <input
              id="customerName"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!errors.customerName}
              aria-describedby={errors.customerName ? "customerName-error" : undefined}
              value={customerName}
              onChange={(e) => {
                setCustomerName(e.target.value);
                if (errors.customerName) setErrors({ ...errors, customerName: undefined });
              }}
              placeholder="e.g. Folake Adeleke"
              className={`w-full bg-[#121212] border px-4 py-3 text-sm text-[#F5EFE5] placeholder-[#555555] focus:outline-none transition-colors ${
                errors.customerName
                  ? "border-red-500/80 focus:border-red-500"
                  : "border-[#2A2A2A] focus:border-[#C5A15B]"
              }`}
            />
            {errors.customerName && (
              <p id="customerName-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.customerName}
              </p>
            )}
          </div>

          {/* 2. Selected Service Dropdown */}
          <div>
            <label
              htmlFor="selectedService"
              className="block text-xs uppercase tracking-wider text-[#E9DFD0] mb-2 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#C5A15B]" />
                Desired Service <span className="text-[#C5A15B]">*</span>
              </span>
            </label>
            <select
              id="selectedService"
              required
              aria-required="true"
              aria-invalid={!!errors.selectedService}
              value={selectedService}
              onChange={(e) => {
                onServiceChange(e.target.value);
                if (errors.selectedService) setErrors({ ...errors, selectedService: undefined });
              }}
              className={`w-full bg-[#121212] border px-4 py-3 text-sm text-[#F5EFE5] focus:outline-none transition-colors ${
                errors.selectedService
                  ? "border-red-500/80 focus:border-red-500"
                  : "border-[#2A2A2A] focus:border-[#C5A15B]"
              }`}
            >
              {salonServices.map((srv) => (
                <option key={srv.id} value={srv.name} className="bg-[#181818] text-[#F5EFE5]">
                  {srv.name} ({formatServicePrice(srv.price)})
                </option>
              ))}
            </select>
            {errors.selectedService && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.selectedService}
              </p>
            )}
          </div>

          {/* 3 & 4. Preferred Date & Time Slot Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Preferred Date */}
            <div>
              <label
                htmlFor="preferredDate"
                className="block text-xs uppercase tracking-wider text-[#E9DFD0] mb-2 font-medium"
              >
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A15B]" />
                  Preferred Date <span className="text-[#C5A15B]">*</span>
                </span>
              </label>
              <input
                id="preferredDate"
                type="date"
                required
                min={minDate}
                aria-required="true"
                aria-invalid={!!errors.preferredDate}
                aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
                value={preferredDate}
                onChange={(e) => {
                  setPreferredDate(e.target.value);
                  if (errors.preferredDate) setErrors({ ...errors, preferredDate: undefined });
                }}
                className={`w-full bg-[#121212] border px-4 py-3 text-sm text-[#F5EFE5] focus:outline-none transition-colors ${
                  errors.preferredDate
                    ? "border-red-500/80 focus:border-red-500"
                    : "border-[#2A2A2A] focus:border-[#C5A15B]"
                }`}
              />
              {errors.preferredDate && (
                <p id="preferredDate-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.preferredDate}
                </p>
              )}
            </div>

            {/* Preferred Time Slot */}
            <div>
              <label
                htmlFor="preferredTime"
                className="block text-xs uppercase tracking-wider text-[#E9DFD0] mb-2 font-medium"
              >
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A15B]" />
                  Time Preference <span className="text-[#C5A15B]">*</span>
                </span>
              </label>
              <select
                id="preferredTime"
                required
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-[#121212] border border-[#2A2A2A] focus:border-[#C5A15B] px-4 py-3 text-sm text-[#F5EFE5] focus:outline-none transition-colors"
              >
                <option value="10:00 AM – Morning Session" className="bg-[#181818]">
                  10:00 AM – Morning Session
                </option>
                <option value="1:00 PM – Early Afternoon" className="bg-[#181818]">
                  1:00 PM – Early Afternoon
                </option>
                <option value="3:30 PM – Late Afternoon" className="bg-[#181818]">
                  3:30 PM – Late Afternoon
                </option>
                <option value="6:00 PM – Evening VIP Slot" className="bg-[#181818]">
                  6:00 PM – Evening VIP Slot
                </option>
              </select>
            </div>
          </div>

          {/* 5. Location Type */}
          <div>
            <label
              htmlFor="locationType"
              className="block text-xs uppercase tracking-wider text-[#E9DFD0] mb-2 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A15B]" />
                Appointment Setting
              </span>
            </label>
            <select
              id="locationType"
              value={locationType}
              onChange={(e) => setLocationType(e.target.value)}
              className="w-full bg-[#121212] border border-[#2A2A2A] focus:border-[#C5A15B] px-4 py-3 text-sm text-[#F5EFE5] focus:outline-none transition-colors"
            >
              <option value="Victoria Island Private Studio" className="bg-[#181818]">
                Victoria Island Private Studio Suite (Lagos)
              </option>
              <option value="Home / Hotel Service (Ikoyi / VI / Lekki Phase 1)" className="bg-[#181818]">
                Home / Hotel VIP Service (Ikoyi / VI / Lekki Phase 1)
              </option>
              <option value="Home / Hotel Service (Banana Island / Ikeja GRA)" className="bg-[#181818]">
                Home / Hotel VIP Service (Banana Island / Ikeja GRA)
              </option>
              <option value="Bridal Suite / Wedding Venue (Custom Location)" className="bg-[#181818]">
                Bridal Suite / Wedding Venue (Custom Location)
              </option>
            </select>
          </div>

          {/* 6. Additional Notes */}
          <div>
            <label
              htmlFor="notes"
              className="block text-xs uppercase tracking-wider text-[#E9DFD0] mb-2 font-medium"
            >
              Additional Notes or Requests (Optional)
            </label>
            <textarea
              id="notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Dropping off wig 2 days ahead for knot bleaching, bringing external unit, or specific styling reference..."
              className="w-full bg-[#121212] border border-[#2A2A2A] focus:border-[#C5A15B] px-4 py-3 text-sm text-[#F5EFE5] placeholder-[#555555] focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Explicit Manual Confirmation Disclaimer */}
          <div className="p-3.5 bg-[#121212] border border-[#262626] text-[11px] text-[#A39D94] leading-relaxed">
            <p>
              <strong className="text-[#C5A15B] font-semibold">Important note:</strong> Submitting this request does not automatically confirm an appointment. Our concierge will review studio schedule and verify your booking on WhatsApp.
            </p>
          </div>

          {/* Submit Action */}
          <div>
            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[#111111] bg-[#C5A15B] hover:bg-[#B38E46] transition-all duration-200 border border-[#C5A15B] shadow-md hover:shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>Send Appointment Request via WhatsApp</span>
            </button>
            <p className="mt-2.5 text-center text-[10px] text-[#77716A]">
              Connects directly with {businessConfig.name} concierge at {businessConfig.phoneDisplay}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

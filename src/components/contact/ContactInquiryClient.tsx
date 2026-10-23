"use client";

import React, { useState } from "react";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { businessConfig } from "@/data/business";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const topics = [
  { id: "product", label: "Product & Wig Availability", text: "I would like to inquire about current wig availability and lace specifications." },
  { id: "salon", label: "Salon & Home Service Booking", text: "I would like to speak with a salon coordinator regarding an appointment in Lagos." },
  { id: "custom", label: "Custom Unit & Bundle Order", text: "I would like to order a bespoke wig with custom head circumference and length." },
  { id: "delivery", label: "Nationwide Delivery & Transit", text: "I have a question about delivery timelines and insured dispatch to my location." },
];

export function ContactInquiryClient() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0].id);
  const [customMessage, setCustomMessage] = useState("");

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const topicObj = topics.find((t) => t.id === selectedTopic);
    const baseText = topicObj ? topicObj.text : "I have a general luxury hair enquiry.";
    const userDetail = customMessage.trim() ? `\n\nAdditional Details: ${customMessage.trim()}` : "";
    const fullMessage = `Hello ${businessConfig.name},\n${baseText}${userDetail}\n\nPlease advise on the next steps. Thank you!`;
    const url = getWhatsAppUrl(fullMessage);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#181818] border border-[#282828] p-6 sm:p-10">
      <div className="mb-8">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A15B] font-semibold mb-2 block">
          Direct Concierge Channel
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#F5EFE5]">
          Start a WhatsApp Conversation
        </h3>
        <p className="mt-2 text-xs text-[#A39D94] font-light leading-relaxed">
          Select what you would like to discuss. We will prepare your WhatsApp message to ensure immediate routing to the right specialist.
        </p>
      </div>

      <form onSubmit={handleLaunchWhatsApp} className="space-y-6">
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#E9DFD0] mb-3 font-medium">
            Select Your Consultation Topic:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {topics.map((t) => {
              const isSelected = selectedTopic === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTopic(t.id)}
                  className={`text-left p-3.5 border transition-all text-xs cursor-pointer ${
                    isSelected
                      ? "bg-[#C5A15B]/15 border-[#C5A15B] text-[#F5EFE5]"
                      : "bg-[#141414] border-[#2A2A2A] text-[#A39D94] hover:border-[#3A3A3A] hover:text-[#E9DFD0]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-[#F5EFE5]">{t.label}</span>
                    {isSelected && <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />}
                  </div>
                  <p className="text-[11px] text-[#77716A] line-clamp-1">{t.text}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="custom-notes" className="block text-xs uppercase tracking-wider text-[#E9DFD0] mb-2 font-medium">
            Add Specific Questions or Notes (Optional):
          </label>
          <textarea
            id="custom-notes"
            rows={3}
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            placeholder="e.g. Inquiring about 30 inch bone straight unit delivery to Abuja..."
            className="w-full bg-[#121212] border border-[#2A2A2A] focus:border-[#C5A15B] px-4 py-3 text-sm text-[#F5EFE5] placeholder-[#555555] focus:outline-none transition-colors resize-none"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#111111] bg-[#C5A15B] hover:bg-[#B38E46] transition-all duration-200 border border-[#C5A15B] shadow-md hover:shadow-lg cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>Open in WhatsApp</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
          <p className="mt-3 text-[11px] text-[#77716A]">
            Opens official WhatsApp channel ({businessConfig.phoneDisplay}) in a secure window.
          </p>
        </div>
      </form>
    </div>
  );
}

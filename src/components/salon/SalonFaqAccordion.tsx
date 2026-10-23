"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { salonFaqs } from "@/data/services";

export function SalonFaqAccordion() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="max-w-3xl mx-auto divide-y divide-[#242424] border-t border-b border-[#242424]">
      {salonFaqs.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div key={idx} className="py-5">
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              className="w-full flex items-center justify-between text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A15B] group py-1 cursor-pointer"
            >
              <span className="font-serif text-lg sm:text-xl text-[#F5EFE5] group-hover:text-[#C5A15B] transition-colors pr-4">
                {faq.question}
              </span>
              <span
                className={`w-7 h-7 rounded-none border border-[#2A2A2A] group-hover:border-[#C5A15B]/50 flex items-center justify-center shrink-0 text-[#A39D94] group-hover:text-[#C5A15B] transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#C5A15B] border-[#C5A15B]/50" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${idx}`}
                role="region"
                className="mt-3 pr-8 text-xs sm:text-sm text-[#A39D94] leading-relaxed font-light animate-in fade-in duration-200"
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

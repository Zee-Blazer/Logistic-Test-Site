import React from "react";
import { businessConfig } from "@/data/business";
import { Sparkles, Truck } from "lucide-react";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Delivery and promotions"
      className="bg-[#181818] border-b border-[#2A2A2A] text-xs text-[#E9DFD0] py-2 px-4 select-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center font-light tracking-wider">
        <Truck className="w-3.5 h-3.5 text-[#C5A15B] shrink-0 hidden sm:inline" />
        <span className="text-[#C5A15B] font-medium hidden xs:inline">Delivery Update:</span>
        <span className="truncate">{businessConfig.delivery.announcement}</span>
        <Sparkles className="w-3 h-3 text-[#C5A15B] shrink-0 hidden md:inline ml-1" />
      </div>
    </aside>
  );
}

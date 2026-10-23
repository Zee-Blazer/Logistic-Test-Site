export interface BusinessConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  phoneRaw: string; // international digits only for WhatsApp (e.g. 2348000000000)
  phoneDisplay: string;
  isPhoneConfigured: boolean; // false until genuine number is provided
  email: string;
  isEmailConfigured: boolean; // false until genuine email is provided
  canonicalUrl: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    display: string;
    isPlaceholder: boolean;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    isPlaceholder: boolean;
  };
  delivery: {
    announcement: string;
    lagosCoverage: string;
    interstateCoverage: string;
    homeSalonCoverage: string;
    policySummary: string;
    packagingDetails: string;
  };
  currency: {
    symbol: string;
    code: string;
  };
  socials: {
    instagram: {
      url: string;
      handle: string;
      isConfigured: boolean;
    };
    tiktok?: {
      url: string;
      handle: string;
      isConfigured: boolean;
    };
  };
}

export const businessConfig: BusinessConfig = {
  name: "Maison Hair",
  tagline: "Luxury Virgin Hair & Salon Artistry",
  shortDescription:
    "Curators of 100% raw single-donor human hair extensions, custom HD lace wigs, and private salon styling experiences delivered with discreet white-glove care.",
  phoneRaw: "2348012345678", // Demonstration placeholder number
  phoneDisplay: "+234 801 234 5678",
  isPhoneConfigured: false, // Mark as demo placeholder
  email: "concierge@maisonhair.luxury",
  isEmailConfigured: false, // Mark as demo placeholder
  canonicalUrl: "https://maisonhair.luxury",
  address: {
    street: "Plot 14B, Luxury Boulevard (Private Suite)",
    neighborhood: "Victoria Island",
    city: "Lagos",
    state: "Lagos State",
    country: "Nigeria",
    display: "Victoria Island, Lagos (Private Studio by Confirmed Appointment)",
    isPlaceholder: true, // Mark as demo placeholder
  },
  hours: {
    weekdays: "Monday – Friday: 9:00 AM – 7:00 PM",
    saturday: "Saturday: 10:00 AM – 6:00 PM",
    sunday: "Sunday: Private VIP Appointments Only",
    isPlaceholder: true,
  },
  delivery: {
    announcement: "Complimentary VIP Delivery on all Luxury Wig Orders over ₦250,000 across Lagos.",
    lagosCoverage: "Same-day priority & Next-day scheduled dispatch across Lagos Mainland & Island.",
    interstateCoverage: "Insured express courier delivery (2–4 business days) across all Nigerian states.",
    homeSalonCoverage: "Exclusive mobile hairstyling and wig installation at your private residence in Lagos.",
    policySummary:
      "All orders undergo live video verification of knots, lace integrity, and bundle fullness on WhatsApp prior to sealing. Uncut and unaltered lace units may be exchanged within 48 hours of receipt.",
    packagingDetails:
      "Delivered in our signature rigid matte keepsake storage box, with a silk preservation pouch, edge-control wrap, and comprehensive maintenance guide.",
  },
  currency: {
    symbol: "₦",
    code: "NGN",
  },
  socials: {
    instagram: {
      url: "https://instagram.com/maisonhair_sample",
      handle: "@maisonhair_sample",
      isConfigured: false, // Demo placeholder
    },
    tiktok: {
      url: "https://tiktok.com/@maisonhair_sample",
      handle: "@maisonhair_sample",
      isConfigured: false, // Demo placeholder
    },
  },
};

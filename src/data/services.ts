export interface SalonService {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: "installation" | "revamp" | "customization" | "bridal" | "treatment" | "styling";
  price: number | "Contact for pricing";
  priceNote?: string;
  duration?: string;
  description: string;
  features: string[];
  image: string;
  homeServiceAvailable: boolean;
  isPopular?: boolean;
}

export const salonServices: SalonService[] = [
  {
    id: "srv-001",
    slug: "signature-hd-lace-wig-installation",
    name: "Signature HD Lace Wig Installation & Melt",
    tagline: "Flawless hairline contouring and undetectable lace bonding",
    category: "installation",
    price: 35000,
    priceNote: "Starting fee",
    duration: "2 hours",
    description:
      "Includes protective scalp preparation, precision flat cornrow braid down, customized knot bleaching, hairline plucking, and seamless lace melting with thermal styling.",
    features: [
      "Protective braid down & cap method",
      "Hairline micro-customization",
      "Thermal silk press or curling",
      "Long-lasting sweat-resistant hold",
    ],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    homeServiceAvailable: true,
    isPopular: true,
  },
  {
    id: "srv-002",
    slug: "intensive-wig-revamp-and-treatment",
    name: "Intensive Wig Revamp, Wash & Treatment",
    tagline: "Restore aged units to salon-fresh luster and movement",
    category: "revamp",
    price: 28000,
    priceNote: "48-72 hr studio turnaround",
    duration: "Studio Drop-off",
    description:
      "Comprehensive overhaul for tired wigs. Ultrasonic lace cleansing, deep hydrating steam conditioning, knot re-tightening, elastic band replacement, and razor re-shaping.",
    features: [
      "Lace adhesive & residue detox",
      "Deep moisture steam treatment",
      "Band & comb replacement",
      "Precision restyle & silk press",
    ],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    homeServiceAvailable: false,
    isPopular: true,
  },
  {
    id: "srv-003",
    slug: "bespoke-custom-wig-construction",
    name: "Bespoke Custom Wig Construction",
    tagline: "Handcrafted machine-sewn unit matched to your exact circumference",
    category: "customization",
    price: 45000,
    priceNote: "Labor only; hair supplied or purchased",
    duration: "3–5 days turnaround",
    description:
      "Tailor-made on breathable ventilated dome caps using your exact head measurements. Features reinforced double-wefted tracks and adjustable tension bands.",
    features: [
      "Custom head circumference fitting",
      "Reinforced shed-resistant wefts",
      "Custom hairline plucking",
      "Pre-bleached knots included",
    ],
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    homeServiceAvailable: false,
    isPopular: false,
  },
  {
    id: "srv-004",
    slug: "natural-hair-washing-and-scalp-therapy",
    name: "Natural Hair Wash & Moisture Scalp Therapy",
    tagline: "Deep clarifying treatment preparing natural hair for protective styles",
    category: "treatment",
    price: 22000,
    duration: "1.5 hours",
    description:
      "Invigorating scalp exfoliation, sulfate-free organic wash, deep moisturizing steam treatment with nourishing botanical oils, followed by a gentle blow dry.",
    features: [
      "Scalp detox & exfoliation",
      "Botanical steam hydration",
      "Split-end dusting (optional)",
      "Gentle tension-free blow dry",
    ],
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
    homeServiceAvailable: true,
    isPopular: false,
  },
  {
    id: "srv-005",
    slug: "precision-thermal-styling-and-silk-press",
    name: "Precision Thermal Styling & Silk Press",
    tagline: "Weightless glass-like hair styling with supreme thermal protection",
    category: "styling",
    price: 25000,
    duration: "1.5 hours",
    description:
      "High-definition thermal styling on natural hair or installed wigs. Delivers incredible mirror shine, lightweight bounce, and zero humidity puffiness.",
    features: [
      "Ceramic heat-shield infusion",
      "Razor blunt edge trim",
      "Hollywood soft curls or bone straight",
      "Silk wrap cooling finish",
    ],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    homeServiceAvailable: true,
    isPopular: false,
  },
  {
    id: "srv-006",
    slug: "vip-bridal-and-red-carpet-experience",
    name: "VIP Bridal & Red Carpet Hair Experience",
    tagline: "Exclusive couture hairstyling for your landmark celebration",
    category: "bridal",
    price: "Contact for pricing",
    priceNote: "Custom quote based on party size & location",
    duration: "3.5+ hours",
    description:
      "Dedicated luxury hair service tailored for brides, bridesmaids, and gala appearances. Includes private consultation, trial styling session, veil setting, and on-site touch-ups.",
    features: [
      "Pre-wedding consultation & trial session",
      "On-location or private studio suite",
      "Veil, crown & accessory placement",
      "Luxury styling touch-up kit",
    ],
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    homeServiceAvailable: true,
    isPopular: true,
  },
];

export function formatServicePrice(price: number | "Contact for pricing"): string {
  if (typeof price === "number") {
    return `₦${price.toLocaleString("en-NG")}`;
  }
  return price;
}

export interface SalonFaq {
  question: string;
  answer: string;
}

export const salonFaqs: SalonFaq[] = [
  {
    question: "How do salon appointments and confirmations work?",
    answer:
      "Select your service, fill in your preferred date and time, and submit the booking request. This generates a structured WhatsApp message directly to our concierge. We will confirm slot availability, discuss any custom hair requirements, and confirm your booking. Appointments are not confirmed until verified by our concierge.",
  },
  {
    question: "Can I bring my own hair or wig for installation?",
    answer:
      "Yes. While we specialize in installing our Maison Hair raw units, our master stylists welcome quality external wigs and bundles. For best results with pre-plucked units, we recommend dropping the wig at our studio 24–48 hours prior to your slot for custom lace bleaching and plucking.",
  },
  {
    question: "How does the VIP Home Service appointment work?",
    answer:
      "We provide mobile hairstyling and installation at your private residence or hotel suite across selected areas in Lagos (Ikoyi, Victoria Island, Lekki Phase 1, Banana Island, and Ikeja GRA). A dedicated stylist arrives with a full professional kit. Additional travel fees apply based on location.",
  },
  {
    question: "How long does a signature HD lace wig melt last?",
    answer:
      "With appropriate home care, our glue-based installations typically last 2 to 4 weeks, while glueless band installations can be removed and reapplied daily or weekly. We provide complete maintenance instructions and edge wraps during your session.",
  },
  {
    question: "What is your rescheduling and cancellation policy?",
    answer:
      "We kindly request at least 24 hours notice for any rescheduling or cancellations via WhatsApp so that we may offer the reserved slot to clients on our waiting list.",
  },
];

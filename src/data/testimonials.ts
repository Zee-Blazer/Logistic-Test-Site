export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  serviceOrProduct: string;
  quote: string;
  date: string;
  isSample: boolean;
}

export const sampleTestimonials: Testimonial[] = [
  {
    id: "test-01",
    clientName: "Amina B.",
    location: "Ikoyi, Lagos",
    serviceOrProduct: "30\" Obsidian Bone Straight Wig",
    quote:
      "The hair luster and weight are remarkable. Even in Lagos humidity, it remained completely silky without tangling. The discreet home delivery was punctual and exquisitely packaged.",
    date: "Sample Customer Story",
    isSample: true,
  },
  {
    id: "test-02",
    clientName: "Chidinma O.",
    location: "Maitama, Abuja",
    serviceOrProduct: "Raw Cambodian Bundles & HD Frontal",
    quote:
      "Ordered via WhatsApp after asking several questions. The concierge answered promptly with video proofs of the bundle wefts. Arrived in Abuja within 48 hours in pristine condition.",
    date: "Sample Customer Story",
    isSample: true,
  },
  {
    id: "test-03",
    clientName: "Folake A.",
    location: "Victoria Island, Lagos",
    serviceOrProduct: "Signature Lace Wig Installation",
    quote:
      "The stylist treated my natural hair underneath with so much care during the braid down. The lace melt is truly invisible—people assume this grew from my own scalp.",
    date: "Sample Customer Story",
    isSample: true,
  },
];

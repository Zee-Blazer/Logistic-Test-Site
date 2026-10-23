export interface HairCollection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  itemCount: string;
  image: string;
  href: string;
  ctaText: string;
}

export const featuredCollections: HairCollection[] = [
  {
    id: "col-01",
    title: "Raw Virgin Wigs",
    subtitle: "Couture Construction",
    description: "Glueless, pre-plucked single-donor units engineered for undetectable realism and longevity.",
    itemCount: "12 Curated Styles",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    href: "/shop?category=wigs",
    ctaText: "Discover Wigs",
  },
  {
    id: "col-02",
    title: "HD Frontals & Closures",
    subtitle: "Skin Melt Lace",
    description: "Paper-thin Swiss HD lace with micro-single knots that dissolve invisibly against every complexion.",
    itemCount: "8 Lace Formats",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80",
    href: "/shop?category=frontals",
    ctaText: "Explore Lace",
  },
  {
    id: "col-03",
    title: "Raw Hair Bundles",
    subtitle: "Single-Donor Integrity",
    description: "Heavy grams, authentic natural textures, intact aligned cuticles capable of coloring to platinum.",
    itemCount: "Lengths 14\" – 32\"",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    href: "/shop?category=bundles",
    ctaText: "Shop Bundles",
  },
];

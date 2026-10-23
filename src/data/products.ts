export type ProductCategory = "wigs" | "bundles" | "closures" | "frontals";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  texture?: string;
  length?: string;
  featured?: boolean;
  isFeatured?: boolean; // backwards-compatible alias
  isBestseller?: boolean;
  density?: string;
  laceType?: string;
  origin?: string;
  inStock: boolean;
}

export interface CategoryOption {
  id: "all" | ProductCategory;
  label: string;
  description: string;
}

export const productCategories: CategoryOption[] = [
  { id: "all", label: "All Items", description: "Complete luxury inventory of raw hair units and pieces" },
  { id: "wigs", label: "Wigs", description: "Ready-to-wear glueless & custom HD lace units" },
  { id: "bundles", label: "Bundles", description: "100% raw human hair single-donor bundle sets" },
  { id: "closures", label: "Closures", description: "Ultra-fine 5x5 & 6x6 HD lace closures" },
  { id: "frontals", label: "Frontals", description: "Ear-to-ear 13x4 & 13x6 undetectable Swiss HD frontals" },
];

export const sampleProducts: Product[] = [
  {
    id: "mh-w01",
    slug: "the-obsidian-bone-straight-hd-wig",
    name: "The Obsidian Bone Straight HD Wig",
    category: "wigs",
    categoryLabel: "Wigs",
    price: 385000,
    originalPrice: 420000,
    description:
      "100% single-donor raw Vietnamese hair. Double-drawn density that remains impeccably flat and pin-straight with natural fluidity.",
    texture: "Bone Straight",
    length: "30 inches",
    density: "250% Heavy Density",
    laceType: "13x6 Ultra-Thin HD Swiss Lace",
    origin: "Raw Vietnamese",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80",
    featured: true,
    isFeatured: true,
    isBestseller: true,
    inStock: true,
  },
  {
    id: "mh-w02",
    slug: "luxe-deep-wave-raw-frontal-unit",
    name: "Luxe Deep Wave Raw Frontal Unit",
    category: "wigs",
    categoryLabel: "Wigs",
    price: 340000,
    originalPrice: 375000,
    description:
      "Lush, deeply defined wave pattern with intact cuticles. Easily transitions between hydrated wet-curls and voluminous brushed waves.",
    texture: "Deep Wave",
    length: "26 inches",
    density: "220% Full Glamour Density",
    laceType: "13x4 Pre-Plucked HD Lace",
    origin: "Raw Burmese",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    featured: true,
    isFeatured: true,
    isBestseller: true,
    inStock: true,
  },
  {
    id: "mh-w03",
    slug: "sculpted-blunt-cut-silk-bob",
    name: "Sculpted Blunt Cut Silk Bob",
    category: "wigs",
    categoryLabel: "Wigs",
    price: 195000,
    originalPrice: 220000,
    description:
      "Precision-sheared blunt silhouette crafted on breathable glueless cap. Perfectly balanced for effortless boardroom and evening sophistication.",
    texture: "Silk Press Straight",
    length: "12 inches",
    density: "180% Natural Density",
    laceType: "5x5 HD Film Lace Closure",
    origin: "Raw Cambodian",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    featured: true,
    isFeatured: true,
    isBestseller: false,
    inStock: true,
  },
  {
    id: "mh-w04",
    slug: "signature-hollywood-body-wave-wig",
    name: "Signature Hollywood Body Wave Wig",
    category: "wigs",
    categoryLabel: "Wigs",
    price: 360000,
    description:
      "Romantic cascading body waves with rich luster and bounce. Micro-bleached knots, plucked hairline, and elastic support band included.",
    texture: "Body Wave",
    length: "28 inches",
    density: "200% High Density",
    laceType: "13x4 HD Glueless Lace",
    origin: "Raw Indian Temple Hair",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=80",
    featured: true,
    isFeatured: true,
    isBestseller: true,
    inStock: true,
  },
  {
    id: "mh-b01",
    slug: "raw-cambodian-natural-wave-bundles",
    name: "Raw Cambodian Natural Wave 3-Bundle Set",
    category: "bundles",
    categoryLabel: "Bundles",
    price: 290000,
    originalPrice: 320000,
    description:
      "Authentic single-donor temple hair bundles. Full strands from weft to tip, completely unprocessed, lifting safely to platinum blonde.",
    texture: "Natural Soft Wave",
    length: "22, 24, 26 inches",
    origin: "Raw Cambodian",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    featured: true,
    isFeatured: true,
    isBestseller: true,
    inStock: true,
  },
  {
    id: "mh-b02",
    slug: "vietnamese-bone-straight-bundles",
    name: "Double Drawn Vietnamese Bone Straight Bundles",
    category: "bundles",
    categoryLabel: "Bundles",
    price: 310000,
    description:
      "Ultra-dense double drawn bundles. Heavy ends with zero thin straggles, featuring natural luster that remains silky through multiple revamps.",
    texture: "Bone Straight",
    length: "24, 26, 28 inches",
    origin: "Raw Vietnamese",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    featured: true,
    isFeatured: true,
    isBestseller: false,
    inStock: true,
  },
  {
    id: "mh-b03",
    slug: "raw-burmese-curly-bundle-trio",
    name: "Raw Burmese Exotic Curly Bundle Trio",
    category: "bundles",
    categoryLabel: "Bundles",
    price: 275000,
    description:
      "Naturally coarse, raw curly texture matching afro-textured silk presses when blown out or deep spiral curls when saturated with conditioner.",
    texture: "Exotic Curly",
    length: "18, 20, 22 inches",
    origin: "Raw Burmese",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    featured: false,
    isFeatured: false,
    isBestseller: false,
    inStock: true,
  },
  {
    id: "mh-c01",
    slug: "invisible-melt-5x5-hd-closure",
    name: "Invisible Melt 5x5 HD Lace Closure",
    category: "closures",
    categoryLabel: "Closures",
    price: 95000,
    originalPrice: 110000,
    description:
      "Ultra-fine Swiss HD lace closure with single micro-knots along the hairline. Blends seamlessly against all complexions without harsh borders.",
    texture: "Bone Straight",
    length: "18 inches",
    laceType: "Real Swiss HD Film Lace (5x5)",
    origin: "Raw Vietnamese",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=900&q=80",
    featured: true,
    isFeatured: true,
    isBestseller: false,
    inStock: true,
  },
  {
    id: "mh-c02",
    slug: "skin-like-6x6-deep-parting-closure",
    name: "Skin-Like 6x6 Deep Parting Closure",
    category: "closures",
    categoryLabel: "Closures",
    price: 115000,
    description:
      "Extended 6x6 square surface offering frontal-like parting depth with the ease and low maintenance of a protective closure.",
    texture: "Body Wave",
    length: "20 inches",
    laceType: "Real Swiss HD Film Lace (6x6)",
    origin: "Raw Indian",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80",
    featured: false,
    isFeatured: false,
    isBestseller: false,
    inStock: true,
  },
  {
    id: "mh-f01",
    slug: "seamless-13x6-hd-ear-to-ear-frontal",
    name: "Seamless 13x6 HD Ear-to-Ear Frontal",
    category: "frontals",
    categoryLabel: "Frontals",
    price: 145000,
    description:
      "Generous 6-inch deep parting frontal across the entire temple line. Clean micro-bleached hairline ready for immediate salon installation.",
    texture: "Bone Straight",
    length: "20 inches",
    laceType: "Ultra-Thin HD Swiss Lace (13x6)",
    origin: "Raw Vietnamese",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=900&q=80",
    featured: true,
    isFeatured: true,
    isBestseller: true,
    inStock: true,
  },
  {
    id: "mh-f02",
    slug: "pre-plucked-13x4-swiss-hd-frontal",
    name: "Pre-Plucked 13x4 Swiss HD Frontal",
    category: "frontals",
    categoryLabel: "Frontals",
    price: 130000,
    originalPrice: 145000,
    description:
      "Delicately gradient pre-plucked perimeter replicating baby hairs and natural temple recession for an authentic scalp illusion.",
    texture: "Natural Wave",
    length: "18 inches",
    laceType: "13x4 HD Film Lace",
    origin: "Raw Cambodian",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    featured: false,
    isFeatured: false,
    isBestseller: false,
    inStock: true,
  },
];

export function formatPrice(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}

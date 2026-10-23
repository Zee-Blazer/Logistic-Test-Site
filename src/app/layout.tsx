import type { Metadata, Viewport } from "next";
import { businessConfig } from "@/data/business";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#111111",
};

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.canonicalUrl),
  title: {
    default: `${businessConfig.name} | ${businessConfig.tagline}`,
    template: `%s | ${businessConfig.name}`,
  },
  description: businessConfig.shortDescription,
  keywords: [
    "luxury hair",
    "raw virgin hair",
    "lace wigs lagos",
    "human hair bundles",
    "salon wig installation",
    "HD lace closures",
    "bone straight wigs",
    "nigerian luxury hair delivery",
  ],
  authors: [{ name: businessConfig.name }],
  openGraph: {
    title: `${businessConfig.name} | ${businessConfig.tagline}`,
    description: businessConfig.shortDescription,
    type: "website",
    locale: "en_NG",
    siteName: businessConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased selection:bg-[#C5A15B] selection:text-[#111111]">
      <body className="min-h-full flex flex-col bg-[#111111] text-[#F5EFE5] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

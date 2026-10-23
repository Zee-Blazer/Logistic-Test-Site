"use client";

import React, { useTransition } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ProductCard } from "@/components/shop/ProductCard";
import { sampleProducts, productCategories, ProductCategory, Product } from "@/data/products";
import { Sparkles, RotateCcw, Filter } from "lucide-react";

export function ShopCatalogClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [, startTransition] = useTransition();

  const queryCat = searchParams.get("category");
  const activeCategory: "all" | ProductCategory =
    queryCat === "wigs" ||
    queryCat === "bundles" ||
    queryCat === "closures" ||
    queryCat === "frontals"
      ? queryCat
      : "all";

  const handleSelectCategory = (categoryId: "all" | ProductCategory) => {
    startTransition(() => {
      const params = new URLSearchParams(window.location.search);
      if (categoryId === "all") {
        params.delete("category");
      } else {
        params.set("category", categoryId);
      }
      const newQuery = params.toString();
      const newUrl = newQuery ? `/shop?${newQuery}` : "/shop";
      router.replace(newUrl, { scroll: false });
    });
  };

  const filteredProducts: Product[] =
    activeCategory === "all"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#242424]">
        <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#A39D94]">
          <Filter className="w-3.5 h-3.5 text-[#C5A15B]" />
          <span>Filter By Category:</span>
        </div>

        {/* Filter Pills */}
        <div
          role="tablist"
          aria-label="Product categories"
          className="flex flex-wrap items-center gap-2"
        >
          {productCategories.map((cat) => {
            const count =
              cat.id === "all"
                ? sampleProducts.length
                : sampleProducts.filter((p) => p.category === cat.id).length;

            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelectCategory(cat.id)}
                className={`inline-flex items-center space-x-2 px-4 py-2 text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#C5A15B] text-[#111111] font-semibold shadow-sm"
                    : "bg-[#181818] text-[#E9DFD0]/80 hover:text-[#F5EFE5] hover:bg-[#222222] border border-[#2A2A2A]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-none ${
                    isActive
                      ? "bg-[#111111]/20 text-[#111111]"
                      : "bg-[#242424] text-[#A39D94]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Catalog Status Bar */}
      <div className="flex items-center justify-between text-xs text-[#A39D94] font-light">
        <span>
          Showing <strong className="text-[#F5EFE5] font-medium">{filteredProducts.length}</strong> of {sampleProducts.length} pieces
        </span>

        {activeCategory !== "all" && (
          <button
            onClick={() => handleSelectCategory("all")}
            className="inline-flex items-center space-x-1.5 text-xs text-[#C5A15B] hover:text-[#B38E46] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset to All</span>
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 px-6 bg-[#181818] border border-[#282828] text-center max-w-xl mx-auto space-y-4">
          <div className="w-12 h-12 mx-auto border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B]">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-[#F5EFE5]">
            No Pieces Currently in this Category
          </h3>
          <p className="text-xs text-[#A39D94] leading-relaxed max-w-md mx-auto">
            Our raw single-donor stock is produced in limited micro-batches. Please check back shortly or reset your filter to view all available collections.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleSelectCategory("all")}
              className="px-6 py-2.5 text-xs uppercase tracking-wider bg-[#C5A15B] text-[#111111] font-semibold hover:bg-[#B38E46] transition-colors"
            >
              View All Collections
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

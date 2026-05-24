"use client";
import { WooCommerce } from "@src/components/lib/woocommerce";
import NewArrivalCard from "../Cards/NewArrivalCard";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export const NewArrivalsLoader = () => (
  <div className="w-full bg-[#f8f8f8] py-12 px-4 sm:px-8">
    <div className="max-w-[1200px] mx-auto">
      {/* Header skeleton */}
      <div className="flex items-end justify-between mb-8">
        <div className="space-y-2">
          <div className="h-4 bg-[#e0e0e0] animate-pulse rounded w-40" />
          <div className="h-9 bg-[#e0e0e0] animate-pulse rounded w-56" />
        </div>
        <div className="h-10 w-28 bg-[#e0e0e0] animate-pulse rounded" />
      </div>
      {/* Grid skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-[#ececec] rounded-xl overflow-hidden animate-pulse"
          >
            <div className="aspect-square bg-[#e0e0e0]" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-[#e0e0e0] rounded w-3/4" />
              <div className="h-4 bg-[#e0e0e0] rounded w-1/2" />
              <div className="h-10 bg-[#e0e0e0] rounded w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function NewArrivals() {
  const [newProducts, setNewProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        setIsLoading(true);
        const response = await WooCommerce.get(
          "products?orderby=date&order=desc&per_page=6",
        );
        setNewProducts(response?.data || []);
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24">
        <NewArrivalsLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-[#fff]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12">
        {/* ── Header ── */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm text-[#999] mb-1 tracking-wide">
              Check out latest products
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight">
              New Arrivals
            </h1>
          </div>
          <Link
            href="/category"
            className="
              hidden sm:inline-flex items-center
              border border-[#222] text-[#222] text-sm font-semibold
              px-6 py-2.5 tracking-widest uppercase
              hover:bg-[#222] hover:text-white
              transition-all duration-200 no-underline
            "
          >
            View All
          </Link>
        </div>

        {/* ── Products Grid ── */}
        {newProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  gap-4">
            {newProducts.slice(0,4).map((product: ProductType) => (
              <NewArrivalCard
                key={product.id}
                id={product.id}
                image={product.images[0]?.src}
                oldAmount={product.regular_price}
                newAmount={product.price}
                description={product.name}
                isNew={true}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-[#999]">
            <p className="text-lg">No new products available</p>
          </div>
        )}

        {/* ── Mobile View All ── */}
        <div className="sm:hidden mt-8 flex justify-center">
          <Link
            href="/category"
            className="
              border border-[#222] text-[#222] text-sm font-semibold
              px-8 py-2.5 tracking-widest uppercase
              hover:bg-[#222] hover:text-white
              transition-all duration-200 no-underline
            "
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
}

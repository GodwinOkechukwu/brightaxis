/**
 * NewArrivalCard.tsx  (refactored → Popular Product Card)
 * ─────────────────────────────────────────────────────────────────────────────
 * Matches the "popular product" card design from the reference UI:
 *
 *  ┌──────────────────────────────┐
 *  │  [light-gray image area]     │
 *  │       <product image>        │
 *  ├──────────────────────────────┤
 *  │  Category label              │
 *  │  Product name (2 lines)      │
 *  │  ★ 4.0  (rating count)       │
 *  │  $28.85  $32.8  [ 🛒 Add ]   │
 *  └──────────────────────────────┘
 *
 * New props vs. original:
 *  • `category`    — small muted label above the product name  (optional)
 *  • `rating`      — numeric star score, e.g. 4.0              (optional)
 *  • `ratingCount` — review count shown in parentheses         (optional)
 *
 * All cart logic (addItem / increase / decrease) is preserved unchanged.
 * ─────────────────────────────────────────────────────────────────────────────
 */

"use client";

import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useCart } from "react-use-cart";
import Link from "next/link";
import Picture from "../picture/Picture";
import { FormatMoney2 } from "../Reusables/FormatMoney";
import { convertToSlug } from "@constants";

/* ─────────────────────────────────────────────────────────────────────────────
   Props
───────────────────────────────────────────────────────────────────────────── */
interface PopularProductCardProps {
  id: string | number;
  image: string;
  oldAmount?: string;
  newAmount: string;
  description: string;
  isNew?: boolean;
  /** Small muted category label shown above the product name  e.g. "Snack" */
  category?: string;
  /** Star rating value displayed beside the star icon  e.g. 4.0 */
  rating?: number;
  /** Number of reviews shown in parentheses  e.g. 120 */
  ratingCount?: number;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────────────────────── */
const PopularProductCard = ({
  id,
  image,
  oldAmount,
  newAmount,
  description,
  category,
  rating,
  ratingCount,
}: PopularProductCardProps) => {
  const { addItem, removeItem, updateItem, getItem } = useCart();

  /* ── Derived values ──────────────────────────────────────────────────────── */
  const ID = id.toString();
  const cartItem = getItem(ID);
  const quantity = cartItem?.quantity || 0;
  const price = parseInt(newAmount);
  const slugDesc = convertToSlug(description);

  /* ── Cart handlers ───────────────────────────────────────────────────────── */
  const addToCart = () =>
    addItem({ id: ID, name: description, price, quantity: 1, image });

  const increase = () => updateItem(ID, { quantity: quantity + 1 });
  const decrease = () => {
    if (quantity <= 1) removeItem(ID);
    else updateItem(ID, { quantity: quantity - 1 });
  };

  /* ── Render ──────────────────────────────────────────────────────────────── */
  return (
    /*
     * Card shell
     * `group`             — enables child hover variants.
     * `rounded-2xl`       — matches the rounded corners in the reference.
     * `shadow-sm`         — subtle default shadow, lifts on hover.
     * `transition-shadow` — smooth shadow animation on hover.
     */
    <div className="group relative flex flex-col w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      {/* ═══════════════════════════════════════════════════════════════════
          IMAGE AREA
          Light-gray background keeps white-product images from bleeding
          into the card background. The image is centred and contained.
      ═══════════════════════════════════════════════════════════════════ */}
      <Link
        href={`/home-item/product/${slugDesc}-${id}`}
        className="relative w-full bg-gray-50 flex items-center justify-center overflow-hidden"
        style={{ minHeight: "180px" }}
      >
        {/* Product image — `object-contain` preserves product proportions */}
        <Picture
          src={image}
          alt={description}
          className="w-full h-[180px] object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* ═══════════════════════════════════════════════════════════════════
          CONTENT AREA
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="flex flex-col flex-1 px-4 pt-3 pb-4 gap-1">
        {/* ── Category label ─────────────────────────────────────────────
            Small, muted, uppercase — matches the "Snack" label in the UI.
            Rendered only when the `category` prop is provided.
        ───────────────────────────────────────────────────────────────── */}
        {category && (
          <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
            {category}
          </span>
        )}

        {/* ── Product name ───────────────────────────────────────────────
            Two-line clamp prevents cards in a grid from varying in height.
            `dangerouslySetInnerHTML` retained for HTML descriptions (e.g.
            bold fragments) — same as original.
        ───────────────────────────────────────────────────────────────── */}
        <Link
          href={`/home-item/product/${slugDesc}-${id}`}
          className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug hover:text-gray-600 transition-colors"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* ── Star rating ────────────────────────────────────────────────
            Rendered only when a `rating` value is provided.
            Single filled amber star + numeric score + optional count.
        ───────────────────────────────────────────────────────────────── */}
        {rating !== undefined && (
          <div className="flex items-center gap-1 mt-0.5">
            {/* Filled star icon using a simple SVG — no extra dependency */}
            <svg
              className="w-4 h-4 text-amber-400 fill-current shrink-0"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
            </svg>

            <span className="text-xs text-gray-500 font-medium leading-none">
              {rating.toFixed(1)}
              {ratingCount !== undefined && (
                <span className="ml-0.5 text-gray-400">({ratingCount})</span>
              )}
            </span>
          </div>
        )}

        {/* ── Price row + CTA ────────────────────────────────────────────
            Layout:  [ current price  old price ]  [ Add button / qty ]
            `mt-auto` pushes this row to the bottom of the card content.
        ───────────────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between mt-auto pt-3 gap-2">
          {/* Left: prices */}
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-base font-bold text-gray-900">
              {price ? <FormatMoney2 value={price} /> : "N/A"}
            </span>
            {oldAmount && (
              <span className="text-xs text-gray-400 line-through">
                <FormatMoney2 value={parseInt(oldAmount)} />
              </span>
            )}
          </div>

          {/* Right: Add to cart button OR inline quantity stepper */}
          {quantity === 0 ? (
            /*
             * ADD BUTTON
             * Compact, red-accented pill button matching the reference card.
             * Icon + "Add" label keeps the touch target generous while
             * staying visually lightweight.
             */
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart();
              }}
              className="
                flex items-center gap-1.5
                bg-red-500 hover:bg-red-600 active:bg-red-700
                text-white text-xs font-semibold
                pl-3 pr-3.5 py-2
                rounded-lg
                transition-colors duration-200
                shrink-0
              "
              aria-label="Add to cart"
            >
              <RiShoppingCart2Fill size={14} />
              Add
            </button>
          ) : (
            /*
             * INLINE QUANTITY STEPPER
             * Replaces the Add button once the item is in the cart.
             * Sits in the same bottom-right position — matching width kept
             * consistent via `min-w` so the card doesn't reflow on change.
             */
            <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-1 py-1 bg-gray-50 shrink-0">
              {/* Decrease / remove */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  decrease();
                }}
                className="w-6 h-6 flex items-center justify-center rounded bg-white shadow-sm hover:bg-gray-100 transition-colors"
                aria-label="Decrease quantity"
              >
                <AiOutlineMinus size={11} className="text-gray-600" />
              </button>

              {/* Current count */}
              <span className="w-5 text-center text-xs font-bold text-gray-900 select-none">
                {quantity}
              </span>

              {/* Increase */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  increase();
                }}
                className="w-6 h-6 flex items-center justify-center rounded bg-red-500 hover:bg-red-600 transition-colors"
                aria-label="Increase quantity"
              >
                <AiOutlinePlus size={11} className="text-white" />
              </button>
            </div>
          )}
        </div>
        {/* /price row */}
      </div>
      {/* /content area */}
    </div>
  );
};

export default PopularProductCard;

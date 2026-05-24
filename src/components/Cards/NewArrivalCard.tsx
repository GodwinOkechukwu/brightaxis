// "use client";

// import React, { useState } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import { RiShoppingBagFill } from "react-icons/ri";
// import { FiHeart } from "react-icons/fi";
// import { useCart } from "react-use-cart";
// import Link from "next/link";
// import Picture from "../picture/Picture";
// import { FormatMoney2 } from "../Reusables/FormatMoney";
// import { convertToSlug } from "@constants";

// interface NewArrivalCardProps {
//   id: string | number;
//   image: string;
//   oldAmount?: string;
//   newAmount: string;
//   description: string;
//   isNew?: boolean;
// }

// const NewArrivalCard = ({
//   id,
//   image,
//   oldAmount,
//   newAmount,
//   description,
//   isNew,
// }: NewArrivalCardProps) => {
//   const { addItem, removeItem, updateItem, getItem } = useCart();
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   const ID = id.toString();
//   const cartItem = getItem(ID);
//   const quantity = cartItem?.quantity || 0;
//   const price = parseInt(newAmount);
//   const slugDesc = convertToSlug(description);

//   const discount = oldAmount
//     ? Math.round(((parseInt(oldAmount) - price) / parseInt(oldAmount)) * 100)
//     : 0;

//   const addToCart = () => {
//     addItem({ id: ID, name: description, price, quantity: 1, image });
//   };

//   const increase = () => updateItem(ID, { quantity: quantity + 1 });
//   const decrease = () => {
//     if (quantity <= 1) removeItem(ID);
//     else updateItem(ID, { quantity: quantity - 1 });
//   };

//   return (
//     <div className="group relative flex flex-col w-full h-[250px] sm:h-[400px] bg-black rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
//       {/* ================= IMAGE SECTION ================= */}
//       <Link
//         href={`/home-item/product/${slugDesc}-${id}`}
//         className="relative w-full aspect-square bg-gray-50 overflow-hidden"
//       >
//         {/* Product Image */}
//         <Picture
//           src={image}
//           alt={description}
//           className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
//         />
//         {/* Quick View Overlay - Shows on hover */}
//         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//       </Link>

//       {/* ================= CONTENT SECTION ================= */}
//       <div className="flex flex-col flex-1 p-4">
//         {/* Product Name */}
//         <Link
//           href={`/home-item/product/${slugDesc}-${id}`}
//           className="text-sm md:text-base font-light text-gray-100 line-clamp-2 min-h-[44px] mb-2 hover:text-gray-700 transition-colors uppercase tracking-wide"
//           dangerouslySetInnerHTML={{ __html: description }}
//         />

//         {/* Price Section */}
//         <div className="flex items-center gap-2 mb-3">
//           <span className="text-lg md:text-xl font-bold text-[#FF3131]">
//             {price ? <FormatMoney2 value={price} /> : "N/A"}
//           </span>
//           {/* {oldAmount && (
//             <span className="text-sm text-gray-400 line-through">
//               <FormatMoney2 value={parseInt(oldAmount)} />
//             </span>
//           )} */}
//         </div>

//         {/* Add to Cart / Quantity Controls */}
//         <div className="mt-auto">
//           {quantity === 0 ? (
//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 addToCart();
//               }}
//               className="w-full bg-white text-black text-sm font-semibold py-3
//                          flex items-center justify-center gap-2
//                          hover:bg-gray-800 transition-all duration-300
//                          transform hover:-translate-y-0.5
//                          shadow-sm hover:shadow-md"
//             >
//               Add to Cart
//             </button>
//           ) : (
//             <div className="w-full flex items-center justify-between border-2 border-gray-900 rounded-lg px-4 py-2.5 bg-white">
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   decrease();
//                 }}
//                 className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
//                 aria-label="Decrease quantity"
//               >
//                 <AiOutlineMinus size={14} className="text-gray-700" />
//               </button>

//               <span className="text-base font-bold text-gray-900">
//                 {quantity}
//               </span>

//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   increase();
//                 }}
//                 className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors"
//                 aria-label="Increase quantity"
//               >
//                 <AiOutlinePlus size={14} />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Subtle Border */}
//       <div className="absolute inset-0 rounded-lg border border-gray-200 pointer-events-none group-hover:border-gray-300 transition-colors" />
//     </div>
//   );
// };

// export default NewArrivalCard;
"use client";

import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "react-use-cart";
import Link from "next/link";
import Picture from "../picture/Picture";
import { FormatMoney2 } from "../Reusables/FormatMoney";
import { convertToSlug } from "@constants";

interface NewArrivalCardProps {
  id: string | number;
  image: string;
  oldAmount?: string;
  newAmount: string;
  description: string;
  isNew?: boolean;
}

const NewArrivalCard = ({
  id,
  image,
  oldAmount,
  newAmount,
  description,
  isNew,
}: NewArrivalCardProps) => {
  const { addItem, removeItem, updateItem, getItem } = useCart();

  const ID = id.toString();
  const cartItem = getItem(ID);
  const quantity = cartItem?.quantity || 0;
  const price = parseInt(newAmount);
  const slugDesc = convertToSlug(description);

  const addToCart = () => {
    addItem({ id: ID, name: description, price, quantity: 1, image });
  };

  const increase = () => updateItem(ID, { quantity: quantity + 1 });
  const decrease = () => {
    if (quantity <= 1) removeItem(ID);
    else updateItem(ID, { quantity: quantity - 1 });
  };

  return (
    <div className="group flex flex-col w-full bg-[#f2f2f2] rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">

      {/* ── Image ── */}
      <Link
        href={`/home-item/product/${slugDesc}-${id}`}
        className="relative block bg-[#f2f2f2] p-4"
      >
        {/* Available badge */}
        <span className="absolute top-3 left-3 z-10 bg-[#08B77233]/20 text-[#08B772] text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider rounded-sm">
          Available
        </span>
        <div className="aspect-square w-full overflow-hidden">
          <Picture
            src={image}
            alt={description}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* ── Footer ── */}
      <div className="flex flex-col gap-2 px-4 pb-4">

        {/* Product name */}
        <Link
          href={`/home-item/product/${slugDesc}-${id}`}
          className="text-sm text-[#333] leading-snug line-clamp-2 hover:text-[#111] transition-colors no-underline"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* Price row */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-[#111]">
            {price ? <FormatMoney2 value={price} /> : "N/A"}
          </span>
          {oldAmount && parseInt(oldAmount) > price && (
            <span className="text-sm text-[#aaa] line-through">
              <FormatMoney2 value={parseInt(oldAmount)} />
            </span>
          )}
        </div>

        {/* Add to cart / Quantity */}
        {quantity === 0 ? (
          <button
            onClick={(e) => { e.preventDefault(); addToCart(); }}
            className="w-full py-3 text-sm font-semibold text-white bg-[#1a6fd4] hover:bg-[#1558b0] rounded-full transition-colors duration-200"
          >
            Add to cart
          </button>
        ) : (
          <div className="w-full flex items-center justify-between border border-[#1a6fd4] rounded-full px-4 py-2">
            <button
              onClick={(e) => { e.preventDefault(); decrease(); }}
              className="text-[#1a6fd4] hover:text-[#1558b0] transition-colors"
              aria-label="Decrease quantity"
            >
              <AiOutlineMinus size={16} />
            </button>
            <span className="text-sm font-bold text-[#111]">{quantity}</span>
            <button
              onClick={(e) => { e.preventDefault(); increase(); }}
              className="text-[#1a6fd4] hover:text-[#1558b0] transition-colors"
              aria-label="Increase quantity"
            >
              <AiOutlinePlus size={16} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default NewArrivalCard;

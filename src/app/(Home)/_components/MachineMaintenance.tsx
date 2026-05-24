"use client";

import React from "react";
import Picture from "@src/components/picture/Picture";
import { heroImage3,heroImage4 } from "@public/images";

const MachineMaintenance = () => {
  return (
    <section className="bg-white w-full py-16 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-[1100px] mx-auto relative flex items-center justify-center max-h-[500px]">
        {/* Left image — sits lower */}
        <div
          className="relative max-h-[550px]  z-10 w-[48%] max-w-[726px] rounded-3xl overflow-hidden shadow-xl"
          style={{ marginTop: "80px" }}
        >
          <Picture
            src={heroImage4}
            alt="Tech workspace setup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right image — sits higher, overlaps left */}
        <div
          className="relative z-20 w-[52%] max-h-[550px] max-w-[726px] rounded-3xl overflow-hidden shadow-2xl"
          style={{ marginLeft: "-60px", marginBottom: "80px" }}
        >
          <Picture
            src={heroImage3}
            alt="Monitor arm setup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MachineMaintenance;

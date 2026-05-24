"use client";
import React from "react";
import Picture from "../picture/Picture";
import Link from "next/link";
import { homeImage1, heroBg } from "@public/images";
import { FaArrowRight } from "@node_modules/react-icons/fa";

const AllCategorySection = () => {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative w-full h-full overflow-hidden bg-black pb-20 pt-[120px] md:pt-0 md:pb-0 ">
        {/* Hero image with purple overlay */}
        <div className="relative w-full aspect-video">
          <Picture
            src={homeImage1}
            alt="Complete hardware solutions"
            className="w-full h-full object-cover"
          />
          {/* Purple-tinted dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(60,10,90,0.55) 0%, rgba(30,10,60,0.45) 50%, rgba(10,10,20,0.6) 100%)",
            }}
            aria-hidden="true"
          />
          {/* Headline centered over image */}
          <div className="absolute inset-0 flex flex-col items-center max-w-[950px] m-auto justify-center z-10 px-6 ">
            <h1
              className="text-white  text-center pt-20 font-bold text-[30px] md:text-[64px] leading-tight tracking-tight"
              // style={{ fontSize: "clamp(1.6rem, 5vw, 3.5rem)" }}
            >
              Sophisticated Accessories For Your Computer
            </h1>
            <p className="text-center">
              Elegant Designs, Exceptional Results, Elevating Your Computer
              Experience.
            </p>
            <Link href={"/user/register"}>
            <button className="flex bg-[#0360B9] py-[24px] px-[36px] max-w-[332px] max-h-[54px] mt-5 gap-2 rounded-[40px] items-center">
              Get Started <FaArrowRight />
            </button>
            </Link>
          </div>
          {/* Bottom fade into dark bg */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/3"
            style={{
              background:
                "linear-gradient(to top, rgba(15,15,15,0.8), transparent)",
            }}
            aria-hidden="true"
          />
        </div>
      </section>
    </>
  );
};

export default AllCategorySection;

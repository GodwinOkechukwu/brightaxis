"use client";
import { useState, useEffect } from "react";
import { headerNavLinks } from "@constants";
import Link from "next/link";
import * as Iconbs from "react-icons/bs";
import React from "react";
import { usePathname } from "next/navigation";

const HomePageBottomHeader = () => {
  const pathname = usePathname();

  const phoneNumber = "09160001343";
  return (
    <nav
      className={`hidden slg:flex justify-center gap-24 items-center w-full py-1  transition`}
    >
      <div className="flex w-fit gap-8 overflow-hidden">
        {headerNavLinks.map((link) => (
         
            <Link
              key={link.id}
              href={link.href}
              className={`text-base font-medium mt-2 leading-[1.8] transition hover:text-effect relative group ${pathname === link.href ? "text-blue-500" : "text-[#241E1E]"}`}
            >
              {link.text}
              <span
                className={`h-[1px] inline-block bg-effect absolute left-0 -bottom-0 group-hover:w-full transition-width ease duration-300 ${pathname === link.href ? "w-full" : "w-0"}`}
              >
                &nbsp;
              </span>
            </Link>
          
        ))}
        <Link href="/user/login">
          <button className="text-[#241E1E] border border-[rgba(212, 210, 227, 1)] text-center w-[88px]  rounded-[30px] py-[8px]  px-[24px]">
            Login
          </button>
        </Link>
        <Link href="/user/register">
          <button className="text-[#fff] bg-[#0360B9] font-bold border border-[rgba(212, 210, 227, 1)] text-center w-[139px] py-[8px] rounded-[30px]  px-[24px]">
            Get started
          </button>
        </Link>
      </div>
      {/* <div className='flex justify-center text-white items-center gap-2'>
				<Iconbs.BsTelephone />
				<div className='flex justify-center items-center'>
					<span className='font-[300] leading-[1.8]'>Phone:&nbsp;</span>
					<a
						className='font-medium hover:text-effect transition'
						href={`tel:${phoneNumber}`}
					>
						{phoneNumber}
					</a>
				</div>
			</div> */}
    </nav>
  );
};

export default HomePageBottomHeader;

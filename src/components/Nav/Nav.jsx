"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";

function Nav() {
  const [prevScroll, setPrevScroll] = useState(0);
  const [isVisible, seIsVisible] = useState(true);

  useEffect(() => {
    const scrollHandle = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > prevScroll && currentScroll > 50) {
        seIsVisible(false);
      } else {
        seIsVisible(true);
      }
      setPrevScroll(currentScroll);
    };
    window.addEventListener("scroll", scrollHandle);
    return () => window.removeEventListener("scroll", scrollHandle);
  }, [prevScroll]);
  return (
    <div
      className={`fixed top-0 left-0 h-16 w-full bg-black z-50 laptop:px-10 tablet:px-10 flex justify-between items-center transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>logo</div>
      <div className="absolute transform left-1/2 -translate-x-1/2 hidden tablet:block">
        <ul className="flex gap-6 text-nowrap">
          <li className="text-red-400">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li>
            <Link href="/enquiry">Enquiry</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="tablet:flex gap-2 items-center hidden ">
        <FaWhatsapp className="text-xl text-green-400" />
        <FaLocationDot className="text-lg  text-red-500" />
        <LuPhoneCall className="text-lg " />
      </div>
    </div>
  );
}

export default Nav;

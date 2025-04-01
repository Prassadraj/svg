"use client";
import { Montserrat, Newsreader } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function Nav() {
  const [prevScroll, setPrevScroll] = useState(0);
  const [isVisible, seIsVisible] = useState(true);
  const path = usePathname();
  const [open, setOpen] = useState(false);
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
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);
  return (
    <div
      className={`fixed top-0 left-0 h-20 w-full !px-2 bg-black z-50 laptop:!px-10 tablet:px-10 flex justify-between items-center transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${montLight.className}`}
    >
      <div className="z-[9999]">logo</div>
      {/* right btn  */}
      <div
        className="tablet:hidden transform transition-all ease-in-out duration-500  z-[9999]"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <div className="w-12 h-6 relative transition-transform duration-500 ease-in-out">
            <span className="absolute top-1/2 left-0 h-1 w-full rotate-45 transition-transform duration-500 bg-white"></span>
            <span className="absolute top-1/2 left-0 h-1 w-full -rotate-45 transition-transform duration-500 bg-white"></span>
          </div>
        ) : (
          <div className="flex flex-col gap-2 -scale-x-100 transition-transform duration-500 ease-in-out">
            <span className="w-12 h-1 bg-white transition-transform duration-500"></span>
            <span className="w-10 h-1 bg-white transition-transform duration-500"></span>
            <span className="w-8 h-1 bg-white transition-transform duration-500"></span>
          </div>
        )}
      </div>
      {/* menu  */}
      {open && (
        <div
          className={`fixed ${
            open ? "translate-x-0" : "translate-x-[400px]"
          } transform duration-500 ease-in-out transition-all top-20  h-screen w-screen gap-10  bg-black flex flex-col px-4 p-10`}
          style={{ zIndex: "999" }}
        >
          <ul
            className={` flex flex-col gap-6 text-nowrap text-white ${news.className} text-2xl`}
          >
            <li
              onClick={() => setOpen(false)}
              className={`${path === "/" && "text-orange"}`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => setOpen(false)}
              className={`${path === "/about" && "text-orange"}`}
            >
              <Link href="/about">About Us</Link>
            </li>
            <li
              onClick={() => setOpen(false)}
              className={`${path === "/service" && "text-orange"}`}
            >
              <Link href="/service">Service</Link>
            </li>
            <li>Project</li>
            <li
              onClick={() => setOpen(false)}
              className={`ml-2 text-xl ${montLight.className} ${
                path === "/project/ongoing" ? "text-orange" : ""
              }`}
            >
              <Link href="/project/ongoing">Ongoing Project</Link>
            </li>
            <li
              onClick={() => setOpen(false)}
              className={`ml-2 text-xl ${montLight.className} ${
                path === "/project/completed" && "text-orange"
              }`}
            >
              <Link href="/project/completed">Completed Project</Link>
            </li>

            <li
              onClick={() => setOpen(false)}
              className={`${path === "/contact" && "text-orange"}`}
            >
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="flex gap-2 items-center  justify-evenly w-full ">
            <FaWhatsapp className="tablet:text-xl  text-2xl text-green-400" />
            <Link href="/contact">
              {" "}
              <FaLocationDot className="tablet:text-lg text-2xl  text-red-500" />
            </Link>
            <Link href="/contact">
              {" "}
              <LuPhoneCall className="tablet:text-lg   text-2xl" />
            </Link>
            <Link href="/admin">
              {" "}
              <CiUser className="text-2xl " />
            </Link>
          </div>
        </div>
      )}
      {/* center  */}
      <div className="absolute transform  left-1/2 -translate-x-1/2 hidden tablet:block">
        <ul className="flex gap-6 text-nowrap text-white">
          <li className={`${path === "/" && "text-orange"}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${path === "/about" && "text-orange"}`}>
            <Link href="/about">About Us</Link>
          </li>
          <li className={`${path === "/service" && "text-orange"}`}>
            <Link href="/service">Service</Link>
          </li>
          <li className="relative group h-8 ">
            <span
              className={`cursor-pointer ${
                path === "/project/ongoing" || path === "/project/completed"
                  ? "text-orange"
                  : "text-white"
              }`}
            >
              Project
            </span>
            <ul className="absolute left-0 mt-2 w-40 bg-gray-800 text-white shadow-md rounded-md opacity-0 scale-y-95 transform transition-all duration-700 ease-in-out pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:scale-y-100 group-hover:pointer-events-auto group-hover:translate-y-0">
              <li
                className={`p-2 hover:bg-gray-700 ${
                  path === "/project/ongoing" ? "text-orange" : ""
                }`}
              >
                <Link href="/project/ongoing">Ongoing Project</Link>
              </li>
              <li
                className={`p-2 hover:bg-gray-700 ${
                  path === "/project/completed" ? "text-orange" : ""
                }`}
              >
                <Link href="/project/completed">Completed Project</Link>
              </li>
            </ul>
          </li>

          <li className={`${path === "/contact" && "text-orange"}`}>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      {/* right  */}
      <div className="tablet:flex gap-2 items-center hidden ">
        <Link
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-green-400"
        >
          <FaWhatsapp className="text-xl text-green-400" />
        </Link>
        <Link href="/contact">
          {" "}
          <FaLocationDot className="text-xl  text-red-500" />
        </Link>
        {/* <Link href="/contact">
          {" "}
          <LuPhoneCall className="text-lg " />
        </Link> */}
        <Link href="/admin">
          {" "}
          <CiUser className="text-xl " />
        </Link>
      </div>
    </div>
  );
}

export default Nav;

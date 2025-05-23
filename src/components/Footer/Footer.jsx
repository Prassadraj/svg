import Image from "next/image";
import React from "react";
import { Montserrat, Newsreader } from "next/font/google";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function Footer() {
  return (
    <div
      style={{
        backgroundSize: "100% 110%", // Doubles the height so only top 20% is visible

        overflow: "hidden",
      }}
      className={`relative px-2 py-5 tablet:bg-[url('/Footer/footer4.png')] 
        bg-[url('/Footer/footerBgMobile.png')] bg-top bg-scroll tablet:bg-fixed
      bg-cover  tablet:!p-10 justify-between gap-5 tablet:gap-8 grid-cols-2 grid
   tablet:grid-cols-4 laptop:grid-cols-5 ${mont.className}`}
    >
      <div className="absolute w-full h-full left-0 top-0  bg-black/50 "></div>

      <div
        className={`flex flex-col gap-3 laptop:col-span-2 z-10 ${montLight.className}`}
      >
        <p className=" font-bold text-2xl laptop:text-5xl">logo</p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sit?
          Sequi beatae facilis dicta quaerat non? Magni nulla, quos ducimus
        </p>
      </div>
      <div className="z-10">
        <ul className={`flex flex-col gap-3 ${montLight.className}`}>
          <li className="font-bold">Links</li>

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
      <div className="z-10">
        <ul className={`flex flex-col gap-3 ${montLight.className}`}>
          <li className="font-bold">Contact us</li>
          <li>No 10, Masilamani St,</li>
          <li>Andal Nagar, Vanagaram, </li>
          <li>Chennai - 600 095.</li>
          <li>EMAIL US : thangamariac@designqube.net </li>
          <li> info@designqube.net / +91 - 9962571117</li>
        </ul>
      </div>
      <div className="z-10">
        <ul
          className={`flex  items-end h-full laptop:text-3xl tablet:text-lg gap-4 ${montLight.className}`}
        >
          <a href="/admin">
            <li className="">
              <FaXTwitter />
            </li>
          </a>
          <li className="">
            <FaFacebook />
          </li>
          <li className="">
            <FaSquareInstagram />
          </li>
          <li className="">
            <FaLinkedin />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

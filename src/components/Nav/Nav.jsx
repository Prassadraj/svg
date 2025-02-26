import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";

function Nav() {
  return (
    <div className="fixed top-0 left-0 h-16 w-full bg-black z-50 laptop:px-20 tablet:px-10 flex  justify-between items-center ">
      <div>logo</div>
      <div className="absolute transform left-1/2 -translate-x-1/2 hidden tablet:block">
        <ul className="flex gap-6 text-nowrap">
          <li className="text-red-400">Home</li>
          <li>About Us</li>
          <li>Service</li>
          <li>Project</li>
          <li>Enquiry</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="tablet:flex gap-2 items-center hidden ">
        <FaWhatsapp className="text-xl text-green-400" />
        <FaLocationDot className="text-lg animate-bounce text-red-500" />
        <LuPhoneCall className="text-lg " />
      </div>
    </div>
  );
}

export default Nav;

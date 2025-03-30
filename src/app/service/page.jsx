import React from "react";
import { FaNetworkWired } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function Service() {
  return (
    <div className="h-screen flex justify-center text-white w-full items-center">
      Service page
    </div>
  );
}

export default Service;

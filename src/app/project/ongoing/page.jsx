import { Montserrat, Newsreader } from "next/font/google";
import React from "react";
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montmedium = Montserrat({ subsets: ["latin"], weight: ["600"] });
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function Ongoing() {
  return (
    <div className={`${mont.className}`}>
      <div
        className={`relative h-[50vh] bg-slate-500 w-full bg-[url('/Service/background6.jpeg')] bg-center tablet:bg-fixed bg-cover bg-scroll flex flex-col items-center  justify-center
        bg-no-repeat tablet:mt-20`}
      >
        <div className="absolute w-full h-full left-0 top-0 bg-black/60 tablet:bg-black/60 "></div>
        <div className="flex flex-col gap-4 items-center  justify-center z-10">
          <h1 className="tablet:text-5xl text-2xl font-bold">
            Ongoing
            <span className="ml-2 text-transparent bg-title-gradient bg-clip-text">
              Projects
            </span>
          </h1>
          <div
            className={`${montLight.className} flex gap-2 p-2 bg-black/40 rounded-lg tablet:text-lg text-xs`}
          >
            <p className="font-medium">Home</p>
            <p>&gt;</p>
            <p className="font-bold text-transparent bg-title-gradient bg-clip-text">
              Ongoing Projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ongoing;

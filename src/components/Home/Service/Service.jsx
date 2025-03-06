import Image from "next/image";
import React, { useState } from "react";
import { Montserrat, Newsreader } from "next/font/google";
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function Service() {
  const [view, setView] = useState("");
  return (
    <div
      className={`container mx-auto relative w-full tablet:p-10 py-5 mb-32  flex flex-col tablet:gap-10
        gap-7 laptop:gap-2 overflow-hidden ${mont.className}`}
      style={{
        backgroundImage: "url('/Service/bgForService.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute w-full h-full left-0 top-0  bg-black/50 "></div>

      <div className="flex z-10   flex-col laptop:items-start w-full laptop:mr-auto laptop:gap-3 gap-4 items-center">
        <h1
          className={`text-transparent bg-clip-text h-fit laptop:text-left text-center  bg-title-gradient text-5xl font-semibold ${news.className}`}
        >
          Our Services
        </h1>
        <p
          className={`laptop:text-left text-center break-words laptop:w-2/4  ${montLight.className}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          optio necessitatibus voluptates amet consectetur, tempora omnis rerum
        </p>
      </div>
      <div className="grid !grid-cols-1 tablet:!grid-cols-2 place-items-center gap-10  laptop:gap-0  laptop:!grid-cols-3  justify-evenly relative ">
        {/* one  */}
        <div
          onMouseEnter={() => setView("one")}
          onMouseLeave={() => setView("")}
          className="tablet:w-[300px] w-[200px] tablet:h-[350px] h-[250px] relative rounded-t-full overflow-hidden border-2 border-dotted "
        >
          <Image
            alt="img"
            fill
            src="/Service/service5.jpeg"
            className="h-full relative w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
          <div
            className={`${
              view == "one" ? "top-0" : "laptop:!top-[400px] top-0"
            } absolute  inset-0 w-full h-full duration-700 transition-all ease-in-out
          left-0 rounded-t-full `}
          >
            <div className="bg-[#AD5202] rounded-t-full opacity-50 inset-0 w-full h-full"></div>
            <div className="absolute bottom-2 z-10  left-2 text-white">
              <h1 className="font-bold">Design and Build</h1>
              <p className={`${montLight.className} tablet:text-sm text-xs`}>
                Where vision meets craftsmanship to create stunning, functional
                spaces.
              </p>
            </div>
          </div>
        </div>
        {/* two  */}
        <div
          onMouseEnter={() => setView("two")}
          onMouseLeave={() => setView("")}
          className="tablet:w-[300px] w-[200px] tablet:h-[350px] h-[250px] laptop:mt-20 relative rounded-t-full overflow-hidden border-2 border-dotted"
        >
          <Image
            alt="img"
            fill
            src="/Service/service2.jpeg"
            className="h-full relative w-full object-cover hover:scale-95 transition-all duration-500 ease-in-out"
          />
          <div
            className={`${
              view == "two" ? "top-0" : "laptop:!top-[400px] top-0"
            }  relative  opacity-100 inset-0 w-full h-full duration-700 transition-all ease-in-out
          left-0 rounded-t-full`}
          >
            <div className="bg-[#AD5202] rounded-t-full opacity-50 inset-0 w-full h-full"></div>
            <div className="absolute bottom-2 z-10  left-2 text-white">
              <h1 className="font-bold">Interior Fit-Outs</h1>
              <p className={`${montLight.className} tablet:text-sm text-xs`}>
                Transforming spaces with precision, style, and seamless
                functionality.
              </p>
            </div>
          </div>
        </div>
        {/* three  */}
        <div
          onMouseEnter={() => setView("three")}
          onMouseLeave={() => setView("")}
          className="tablet:w-[300px] w-[200px] tablet:h-[350px] h-[250px] tablet:!col-span-2  laptop:!col-span-1 relative rounded-t-full overflow-hidden border-2 border-dotted "
        >
          <Image
            alt="img"
            fill
            src="/Service/service3.jpeg"
            className="h-full relative w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
          <div
            className={`${
              view == "three" ? "top-0" : "laptop:!top-[400px] top-0"
            }  absolute  inset-0 w-full h-full duration-700 transition-all ease-in-out
          left-0 rounded-t-full`}
          >
            <div className="bg-[#AD5202] rounded-t-full opacity-50 inset-0 w-full h-full"></div>
            <div className="absolute bottom-2 z-10  left-2 text-white">
              <h1 className="font-bold">Turnkey Solutions</h1>
              <p className={`${montLight.className} tablet:text-sm text-xs`}>
                Effortless transformations, from concept to completion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

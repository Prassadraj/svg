import Image from "next/image";
import React, { useState } from "react";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function Service() {
  const [view, setView] = useState("");
  return (
    <div
      className={`relative w-full tablet:px-10 px-5 mb-32  flex flex-col tablet:gap-10
        gap-7 laptop:gap-5 overflow-hidden ${mont.className}`}
      style={{
        backgroundImage: "url('/Service/serviceBg.png')",
        backgroundPosition: "center",
        backgroundSize: "60% 96%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex tablet:px-10  flex-col laptop:items-start w-full laptop:mr-auto laptop:gap-3 gap-4 items-center">
        <h1 className=" text-transparent bg-clip-text h-fit laptop:text-left text-center  bg-title-gradient text-5xl font-semibold">
          Our Services
        </h1>
        <p
          className={`laptop:text-left text-center break-words laptop:w-2/4  ${montLight.className}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          optio necessitatibus voluptates amet consectetur, tempora omnis rerum
        </p>
      </div>
      <div className="grid-cols-2 place-items-center gap-10  laptop:gap-0 grid laptop:grid-cols-3  justify-evenly relative ">
        {/* one  */}
        <div
          onMouseEnter={() => setView("one")}
          onMouseLeave={() => setView("")}
          className="tablet:w-[300px] w-[170px] tablet:h-[350px] h-[200px] relative rounded-t-full overflow-hidden border-2 border-dotted "
        >
          <Image
            alt="img"
            fill
            src="/Service/service1.png"
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
              <p className={`${montLight.className} text-sm`}>
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
          className="tablet:w-[300px] w-[170px] tablet:h-[350px] h-[200px] laptop:mt-20 relative rounded-t-full overflow-hidden border-2 border-dotted"
        >
          <Image
            alt="img"
            fill
            src="/Service/service2.png"
            className="h-full relative w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
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
              <p className={`${montLight.className} text-sm`}>
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
          className="tablet:w-[300px] w-[200px] tablet:h-[350px] h-[250px] col-span-2 laptop:col-span-1 relative rounded-t-full overflow-hidden border-2 border-dotted "
        >
          <Image
            alt="img"
            fill
            src="/Service/service3.png"
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
              <p className={`${montLight.className} text-sm`}>
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

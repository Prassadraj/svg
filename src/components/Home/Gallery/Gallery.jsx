import React from "react";
import { Montserrat, Newsreader } from "next/font/google";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function Gallery() {
  return (
    <div
      className={`tablet:container p-2 mx-auto relative w-full tablet:!px-10 mb-20 tablet:h-screen  flex flex-col tablet:gap-10
    gap-7 laptop:gap-5 overflow-hidden ${mont.className}`}
      style={{
        backgroundImage: "url('/Service/serviceBg.png')",
        backgroundPosition: "center",
        backgroundSize: "60% 96%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex  flex-col  w-full  laptop:gap-3 gap-4 items-center">
        <h1
          className={`p-1 text-transparent bg-clip-text h-fit text-center  bg-title-gradient text-5xl font-semibold  ${news.className}`}
        >
          Gallery
        </h1>
        <p
          className={` text-center break-words laptop:w-2/4  ${montLight.className}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          optio necessitatibus voluptates amet consectetur, tempora omnis rerum
        </p>
      </div>
      <div className="grid grid-cols-2 tablet:grid-cols-7 tablet:grid-rows-13 h-full gap-2 tablet:gap-4">
        <div className="bg-slate-400 relative h-44 cursor-pointer  tablet:h-auto tablet:col-start-1 tablet:col-end-3 tablet:row-start-1 tablet:row-end-5 overflow-hidden">
          <Image
            alt="img"
            fill
            src="/Gallery/bed.jpg"
            className="h-full w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />

          <p
            className={`absolute right-1 bottom-1 ${montLight.className} capitalize bg-white text-black text-xs p-1 rounded-sm`}
          >
            Bedroom
          </p>
        </div>
        {/* img2  */}
        <div className="bg-gray-400 h-44 cursor-pointer  tablet:h-auto tablet:col-start-1 tablet:col-end-3 tablet:row-start-5 tablet:row-end-9 relative overflow-hidden">
          <Image
            alt="img"
            fill
            src="/Gallery/gardern.jpeg"
            className="h-full w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
          <p
            className={`absolute right-1 bottom-1 ${montLight.className} capitalize bg-white text-black text-xs p-1 rounded-sm`}
          >
            Gardern
          </p>
        </div>
        {/* img 3 */}
        <div className="bg-gray-400 h-44 cursor-pointer  tablet:h-auto tablet:col-start-1 tablet:col-end-3 tablet:row-start-9 tablet:row-end-13 relative overflow-hidden">
          {" "}
          <Image
            alt="img"
            fill
            src="/Gallery/gym1.jpeg"
            className="h-full w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
          <p
            className={`absolute right-1 bottom-1 ${montLight.className} capitalize bg-white text-black text-xs p-1 rounded-sm`}
          >
            Fitness Studios
          </p>
        </div>
        {/* img4  */}
        {/* middle */}
        <div className="bg-gray-500 h-44 cursor-pointer  tablet:h-auto tablet:col-start-3 tablet:col-end-6 tablet:row-start-1 tablet:row-end-8 relative overflow-hidden">
          {" "}
          <Image
            alt="img"
            fill
            src="/Gallery/livingRoom.png"
            className="h-full w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
          <p
            className={`absolute right-1 bottom-1 ${montLight.className} capitalize bg-white text-black text-xs p-1 rounded-sm`}
          >
            living Room
          </p>
        </div>
        {/* img5/  */}
        <div className="bg-gray-500 h-44 cursor-pointer  tablet:h-auto tablet:col-start-3 tablet:col-end-6 tablet:row-start-8 tablet:row-end-13 relative overflow-hidden">
          {" "}
          <Image
            alt="img"
            fill
            src="/Gallery/office.jpeg"
            className="h-full w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
          <p
            className={`absolute right-1 bottom-1 ${montLight.className} capitalize bg-white text-black text-xs p-1 rounded-sm`}
          >
            Office Workspaces
          </p>
        </div>
        {/* img6  */}
        {/* right */}
        <div className="bg-gray-500 h-44 cursor-pointer  tablet:h-auto tablet:col-start-6 tablet:col-end-8 tablet:row-start-1 tablet:row-end-6 relative overflow-hidden">
          {" "}
          <Image
            alt="img"
            fill
            src="/Gallery/reception2.jpeg"
            className="h-full w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
          <p
            className={`absolute right-1 bottom-1 ${montLight.className} capitalize bg-white text-black text-xs p-1 rounded-sm`}
          >
            Reception & Lobby Areas
          </p>
        </div>
        {/* img7  */}
        <div className="bg-gray-500 h-44 cursor-pointer  col-span-2 tablet:h-auto tablet:col-start-6 tablet:col-end-8 tablet:row-start-6 tablet:row-end-13 relative overflow-hidden">
          {" "}
          <Image
            alt="img"
            fill
            src="/Gallery/room.jpeg"
            className="h-full w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
          <p
            className={`absolute right-1 bottom-1 ${montLight.className} capitalize bg-white text-black text-xs p-1 rounded-sm`}
          >
            Kitchen
          </p>
        </div>
      </div>
      <div
        className="flex gap-1 justify-center items-center mt-1
          font-semibold  w-full "
      >
        <div className="bg-gradient-to-l from-[#D48345] items-center to-[#472B15] flex gap-1 py-1 px-3 rounded-md">
          <p className=" text-xs font-light">View All</p>
          <BsArrowRight className="text-base" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;

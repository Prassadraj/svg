import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Montserrat, Newsreader } from "next/font/google";
import Image from "next/image";
import React from "react";
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });

gsap.registerPlugin(ScrollTrigger);
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function Manufacture() {
  return (
    <div
      className={`tablet:container p-2 mx-auto w-full flex flex-col items-center justify-center tablet:!flex-row gap-4 
        laptop:px-10 mb-32 ${mont.className}`}
    >
      <div className="flex flex-col gap-4  tablet:hidden">
        <h1
          className={`p-1 text-transparent bg-clip-text h-fit text-center laptop:text-left  bg-title-gradient text-4xl tablet:text-5xl font-semibold  ${news.className}`}
        >
          Manufacturing Facility
        </h1>
        <div className="flex flex-col gap-4">
          {/* img for mobile  */}
          <Image
            src={`/Events/one.jpeg`}
            width={900}
            alt="img"
            height={900}
            className="w-full bg-slate-400 h-full object-cover rounded-md laption:hidden tablet:px-10"
          />
          <p className={`${montLight.className} text-center tablet:px-10 `}>
            At our ultra modern manufacturing facility in Chennai, we use the
            latest cutting edge technologies to manufacture our high quality,
            contemporary, stylish and ergonomic range of furniture for office
            spaces. Our unit is equipped with the latest European machines for
            Pasting, Presssing, Cutting, Edge Banding, Post Forming, Moulding,
            Drilling, Boring, Sanding, Painting and Finishing along with areas
            for Assemby, Packaging and Dispatch
          </p>
        </div>
      </div>
      <div className="hidden grid-cols-[1fr_200px_200px_0.5fr]   w-full tablet:grid">
        <div className="col-start-1 col-end-2 row-start-2 z-20">
          <h1
            className={`p-1 text-transparent bg-clip-text h-fit text-center tablet:text-left  bg-title-gradient text-4xl tablet:text-5xl font-semibold  ${news.className} `}
          >
            Manufacturing Facility
          </h1>
          <p
            className={`${montLight.className} text-center tablet:text-left p-3`}
          >
            At our ultra modern manufacturing facility in Chennai, we use the
            latest cutting edge technologies to manufacture our high quality,
            contemporary, stylish and ergonomic range of furniture for office
            spaces. Our unit is equipped with the latest European machines for
            Pasting, Presssing, Cutting, Edge Banding, Post Forming, Moulding,
            Drilling, Boring, Sanding, Painting and Finishing along with areas
            for Assemby, Packaging and Dispatch
          </p>
        </div>
        {/* Manufacturing img  */}
        <div className="row-start-1 row-end-4 col-start-2 col-end-4 z-0 overflow-hidden">
          <Image
            src="/Manufacture/img1.jpeg"
            width={900}
            alt="img"
            height={900}
            className="w-fullbg-slate-400 hover:rotate-1 hover:scale-105 transition-all duration-500 ease-in-out !h-[500px] object-cover rounded-md"
          />
        </div>
        <div className="row-start-2 col-start-3 col-end-5 row-end-3 z-10 overflow-hidden">
          {/* right img  */}
          <Image
            src="/Manufacture/img2.jpeg"
            width={900}
            height={900}
            alt="img"
            className="w-full bg-slate-400 hover:-rotate-1 hover:scale-105 transition-all duration-500 ease-in-out !h-[350px] object-cover rounded-md"
          />
        </div>

        {/* vector */}
        <div className="row-start-1 row-end-4 col-start-3 col-end-5  -z-10">
          <Image
            src="/Manufacture/vector.svg"
            width={900}
            height={900}
            alt="img"
            className="w-fullbg-slate-400  object-cover rounded-md"
          />
        </div>
        <div className="row-start-2 row-end-4 col-start-3 col-end-5  -z-10">
          <Image
            src="/Manufacture/vector2.svg"
            width={900}
            alt="img"
            height={900}
            className="w-fullbg-slate-400  object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Manufacture;

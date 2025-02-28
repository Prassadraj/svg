import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clients from "../../../../public/CounterImgs/clients.gif";
import design from "../../../../public/CounterImgs/design.gif";
import complete from "../../../../public/CounterImgs/complete.gif";
import corporate from "../../../../public/CounterImgs/corporate.gif";
import Image from "next/image";
import { Montserrat } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function Counter() {
  const stats = [
    { end: 200, label: "Projects completed", img: clients },
    { end: 250, label: "Satisfied Clients", img: design },
    { end: 500, label: "Unique Style", img: complete },
    { end: 400, label: "Corporate Interiors", img: corporate },
  ];

  const statRefs = useRef([]);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      statRefs.current.forEach((stat, index) => {
        gsap.fromTo(
          stat,
          { textContent: 0 },
          {
            textContent: stats[index].end,
            duration: 1,
            ease: "power3.inOut",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
            },
          }
        );
      });
    }
  }, []);

  return (
    <div
      className={` flex w-full laptop:flex-row px-5 gap-6 tablet:gap-10 laptop:gap-5 flex-col items-center justify-around tablet:px-10 container h-fit py-5 ${mont.className}`}
    >
      {/* left div  */}
      <div className=" flex gap-8 items-center  ">
        {/* first two imgs */}
        <div className=" flex flex-col items-start gap-4">
          <div
            className="h-auto tablet:w-60 w-fit overflow-hidden transition-all duration-700 ease-in-out"
            style={{
              borderRadius: "0% 37% 57% 37% / 25% 39% 0% 44%",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderRadius =
                "37% 0% 37% 57% / 39% 25% 44% 0%";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderRadius =
                "0% 37% 57% 37% / 25% 39% 0% 44%";
            }}
          >
            <Image
              src="/CounterImgs/right.jpg"
              width={100}
              height={100}
              alt="img"
              className="w-full h-full object-cover hover:scale-105 hover:-rotate-2 duration-200 ease-in-out"
            />
          </div>

          <div className="tablet:h-44 h-1/2 w-fit ">
            <Image
              src="/CounterImgs/light.png"
              width={100}
              height={100}
              alt="img"
              className="w-full h-full object-cover duration-200 ease-in-out"
            />
          </div>
        </div>
        {/* second img  */}
        <div
          className="h-auto tablet:w-60 w-fit  overflow-hidden transition-all duration-700 ease-in-out"
          style={{
            borderRadius: "0% 1% 57% 0% / 25% 25% 47% 25%",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderRadius =
              "0% 1% 57% 0% / 25% 25% 47% 25%";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderRadius =
              "1% 0% 0% 57% / 25% 25% 25% 47% ";
          }}
        >
          <Image
            src="/CounterImgs/rightImg.png"
            width={100}
            height={100}
            alt="img"
            className="w-full h-full object-cover hover:scale-105 hover:rotate-2 transition-all duration-700 ease-in-out"
          />
        </div>
      </div>

      {/* right div  */}
      <div className="grid grid-cols-2 tablet:gap-4 justify-center laptop:gap-8 place-items-center tablet:flex tablet:flex-wrap w-full">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col gap-2 items-center ">
            {/* Animated Number */}
            <div className="flex items-center gap-1 text-transparent bg-counter bg-clip-text tablet:text-5xl text-2xl font-semibold">
              <Image
                src={stat.img}
                width={100}
                height={100}
                alt="img"
                className="h-10 w-fit object-cover"
              />
              <p ref={(el) => (statRefs.current[i] = el)} className="">
                0
              </p>
              <span>+</span>
            </div>
            {/* Label */}
            <p
              className={`${montLight.className} text-center tablet:text-sm text-nowrap font-semibold`}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;

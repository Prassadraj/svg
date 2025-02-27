import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clients from "../../../../public/CounterImgs/clients.gif";
import design from "../../../../public/CounterImgs/design.gif";
import complete from "../../../../public/CounterImgs/complete.gif";
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
      className={` flex w-full items-center justify-around tablet:px-10 h-fit py-5 ${mont.className}`}
    >
      <div className=" flex gap-8 items-center  ">
        <div className=" flex flex-col items-start gap-4">
          <div
            className="h-[300px] w-60   overflow-hidden"
            style={{
              borderRadius: "0% 37% 57% 37% / 25% 39% 0% 44%",
            }}
          >
            <Image
              src="/CounterImgs/right.png"
              width={100}
              height={100}
              alt="img"
              className="w-full h-full object-cover hover:scale-105 hover:-rotate-2 duration-200 ease-in-out"
            />
          </div>
          <div className="h-36 w-fit ">
            <Image
              src="/CounterImgs/light.png"
              width={100}
              height={100}
              alt="img"
              className="w-full h-full object-cover hover:scale-105 hover:-rotate-2 duration-200 ease-in-out"
            />
          </div>
        </div>
        <div
          className="h-[350px] w-60  overflow-hidden"
          style={{
            borderRadius: "0% 1% 57% 0% / 25% 25% 47% 25%",
          }}
        >
          <Image
            src="/CounterImgs/rightimg.png"
            width={100}
            height={100}
            alt="img"
            className="w-full h-full object-cover hover:scale-105 hover:rotate-2 duration-200 ease-in-out"
          />
        </div>
      </div>
      {/* {stats.map((stat, index) => ( */}
      <div className="grid grid-cols-2 gap-4 place-items-center w-1/2 tablet:flex">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`flex flex-col gap-2 items-center tablet:w-1/2  ${
              i == stats.length - 1 ? "col-span-2 text-center " : ""
            }`}
          >
            <p className="text-transparent bg-counter bg-clip-text text-6xl font-semibold">
              {stat.end}+
            </p>
            <p className={`${montLight.className} text-center`}>{stat.label}</p>
          </div>
        ))}
      </div>
      {/* ))} */}
    </div>
  );
}

export default Counter;

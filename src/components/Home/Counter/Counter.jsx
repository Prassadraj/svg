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
      className={` flex w-full items-center justify-around tablet:px-10 h-1/2 ${mont.className}`}
    >
      <div className=" flex gap-4 items-center  ">
        <div className=" flex flex-col items-start gap-4">
          <div className="h-[250px] w-fit ">
            <Image
              src="/CounterImgs/counterLeft.png"
              width={100}
              height={100}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-36 w-fit">
            <Image
              src="/CounterImgs/light.png"
              width={100}
              height={100}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="h-64 w-fit">
          <Image
            src="/CounterImgs/counterRight.png"
            width={100}
            height={100}
            alt="img"
            className="w-full h-full object-cover"
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

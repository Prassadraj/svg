import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clients from "../../../../public/CounterImgs/clients.gif";
import design from "../../../../public/CounterImgs/design.gif";
import complete from "../../../../public/CounterImgs/complete.gif";
import corporate from "../../../../public/CounterImgs/corporate.gif";
import Image from "next/image";
import { Allerta_Stencil, Montserrat, Newsreader } from "next/font/google";
const news = Allerta_Stencil({ subsets: ["latin"], weight: ["400"] });

gsap.registerPlugin(ScrollTrigger);
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function Counter() {
  const stats = [
    { end: 600, label: "Projects completed", img: clients },
    { end: 500, label: "Satisfied Clients", img: design },
    { end: 550, label: "Unique Style", img: complete },
    { end: 350, label: "Corporate Interiors", img: corporate },
  ];
  const [videoSrc, setVideoSrc] = useState("/Events/bgVideo.mp4");

  const statRefs = useRef([]);

  useEffect(() => {
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
            trigger: ".trig",
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative">
      {" "}
      <div className="absolute w-full h-full left-0 top-0 bg-black/50 z-10 "></div>
      <div className="absolute w-full h-full left-0 top-0  ">
        <video
          key={videoSrc}
          autoPlay
          muted
          onEnded={() =>
            setVideoSrc((prev) =>
              prev == "/Events/bgVideo.mp4"
                ? "/Service/bgVideo2.mp4"
                : "/Events/bgVideo.mp4"
            )
          }
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className={` flex w-full laptop:flex-row p-2 gap-6 tablet:gap-10 laptop:gap-5 flex-col items-center justify-around tablet:p-10 mx-auto tablet:container h-full mb-32 ${news.className} trig relative`}
      >
        {" "}
        {/* left div  */}
        <div className=" flex gap-8 items-center z-10 ">
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
                className="w-full bg-slate-400 h-full object-cover hover:scale-105 hover:-rotate-2 duration-200 ease-in-out"
              />
            </div>

            <div className="tablet:h-44 h-1/2 w-fit ">
              <Image
                src="/CounterImgs/light.png"
                width={100}
                height={100}
                alt="img"
                className="w-full  h-full object-cover duration-200 ease-in-out"
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
              className="w-full bg-slate-400 h-full object-cover hover:scale-105 hover:rotate-2 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
        {/* right div  */}
        <div className="grid tablet:grid-cols-6 grid-rows-2 grid-cols-4 z-10   laptop:w-1/2 w-full laptop:gap-10 gap-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`grid place-items-center ${
                i == 0 && "col-start-1 row-start-1 col-end-3"
              } ${i == 1 && "col-start-3 row-start-1  col-end-5"} ${
                i == 2 &&
                "tablet:col-start-5 tablet:row-start-1  tablet:col-end-7 col-start-1 col-end-3 row-start-2"
              } ${i == 3 && "col-start-3 row-start-2  col-end-5"}`}
            >
              <div
                className="flex gap-1 text-center items-center w-full justify-center
            text-transparent bg-counter bg-clip-text tablet:text-5xl text-2xl font-semibold"
              >
                {" "}
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

              <p
                className={`${montLight.className} text-center tablet:text-sm laptop:text-nowrap font-semibold`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Counter;
{
  /* <div className="grid grid-cols-2 tablet:gap-4 justify-center laptop:gap-8 place-items-center tablet:flex tablet:flex-wrap w-full">
{stats.map((stat, i) => (
  <div key={i} className="flex flex-col gap-2 items-center ">
  
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

    <p
      className={`${montLight.className} text-center tablet:text-sm text-nowrap font-semibold`}
    >
      {stat.label}
    </p>
  </div>
))}
</div> */
}

"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Montserrat, Newsreader } from "next/font/google";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
export default function Section1() {
  useEffect(() => {
    const targets = [
      "#leftChair",
      "#leftWall",
      "#rightChair",
      "#rightWall",
      "#flower",
    ];

    gsap.to(targets, {
      y: "-200px",
      duration: 2,
      opacity: 0.8,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".trigger",
        // markers:true,
        start: "top 10%", // Adjusted to reduce aggressive triggering
        end: "bottom 10%",
        scrub: 2,
      },
    });

    //openings

    gsap.fromTo(
      "#ground",

      { y: "200px", opacity: 0.4 },
      {
        y: "0px", // To state
        duration: 1,
        ease: "power3.inOut",
        opacity: 1,
        scrollTrigger: ".trigger",
      }
    );
    gsap.fromTo(
      ["#ground", "#leftWall", "#rightWall", "#leftChair", "#rightChair"],
      { y: "-200px", opacity: 0.4 },
      {
        y: "0px",
        duration: 1.5,
        ease: "power3.inOut",
        opacity: 1,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 30%", // Adjusted to reduce initial load
        },
      }
    );
  }, []);

  return (
    <div className="mx-auto tablet:container px-2   tablet:!px-10 tablet:mb-32 mt-10 tablet:mt-32 mb-10 w-full">
      {/* gradient */}
      <div className="absolute w-full h-full left-0 top-0 -z-10">
        <Image
          src="/two.png"
          width={900}
          height={900}
          alt="m"
          className="w-full h-full "
        />
      </div>{" "}
      <div className="absolute w-full h-full left-0 top-0 -z-10">
        <Image
          src="/circle.png"
          width={900}
          alt="m"
          height={900}
          className="w-full h-full "
        />
      </div>{" "}
      {/* gradient close*/}
      <div
        className={` justify-evenly  laptop:justify-center  flex gap-2 tablet:gap-4 flex-col-reverse laptop:flex-row items-center   trigger ${news.className} overflow-x-hidden`}
      >
        {/* section one  */}
        <div className=" w-full tablet:h-full h-fit z-10 text-lg   flex flex-col gap-7 items-center justify-center  laptop:!items-start ">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            className="text-center text-3xl font-semibold 
           bg-title-gradient w-full h-fit text-transparent bg-clip-text laptop:block hidden tablet:text-left tablet:text-6xl "
          >
            Modern Interior Design Service
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1.1 }}
            className={`${montLight.className} text-center   laptop:text-left tablet:text-3xl laptop:!text-lg`}
          >
            Design Qube, founded in 2020 in Chennai, specializes in interior
            fit-outs, project management, and execution. With a 9000 sq. ft.
            facility, we deliver innovative, cost-effective solutions for
            commercial, residential, and retail spaces across India.
          </motion.p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1.1 }}
            className="flex flex-col items-center justify-center cursor-pointer group"
          >
            <div
              className="relative py-1 px-4 border 
           border-transparent bg-gradient-to-tr w-fit  from-[#FAFAFA] to-[#C1792C] rounded-lg tablet:rounded-none tablet:p-4 tablet:px-6 tablet:rounded-tr-full"
            >
              <div className="absolute inset-0 bg-black rounded-lg m-[1px] tablet:rounded-tr-full tablet:rounded-none"></div>
              <div className="relative z-10 text-white text-center  font-light group-hover:transform group-hover:-translate-x-2 duration-500 ease-linear">
                <div className="flex items-center  gap-1 ">
                  <p className={`text-base ${montLight.className}`}>
                    Explore Now
                  </p>
                  <MdOutlineDoubleArrow className="group-hover:rotate-180 transform transition-transform duration-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* section two  */}
        <div className="  w-full tablet:h-full h-fit flex flex-col gap-5 tablet:gap-10 laptop:gap-0  items-center justify-center mt-20 tablet:mt-32 laptop:mt-0 tablet:justify-center">
          <motion.p
            className="text-center text-3xl tablet:text-6xl font-semibold 
           bg-title-gradient w-full text-transparent bg-clip-text laptop:hidden z-10"
          >
            {/* Modern Interior Design Service  */}
            Modern Interior Design Service
          </motion.p>

          {/* <Image
            src="/wall.svg"
            width={900}
            className="w-full h-fit object-contain  z-10 hidden"
            alt="img"
            height={900}
          /> */}
          <div className="grid grid-cols-[100px_100px_100px_100px_100px_100px] tablet:!grid-rows-[100px_100px_100px_100px_100px] !grid-rows-[100px_100px_100px_100px] ">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
              className="col-start-2 tablet:col-start-1 col-end-4 row-start-1 row-end-4"
            >
              <Image
                src="/right.jpeg"
                width={900}
                className="w-full  object-cover  rounded-tl-[20%] rounded-xl bg-slate-400"
                alt="img"
                priority
                height={900}
              />
            </motion.div>
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 1 }}
              className="col-start-3 tablet:!col-end-7 col-end-6 row-start-2 row-end-4 z-10"
            >
              <Image
                src="/Gallery/livingRoom.png"
                width={900}
                className="w-full  object-cover h-[300px] rounded-2xl bg-slate-400"
                alt="img"
                priority
                height={900}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

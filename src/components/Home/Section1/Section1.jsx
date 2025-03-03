"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { MdOutlineDoubleArrow } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
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
        start: "top 10%", // Adjusted to reduce aggressive triggering
        end: "bottom 50%",
        scrub: 1,
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
    <div className="mx-auto container  tablet:px-10 tablet:mb-32 mt-24">
      {/* gradient */}
      <div className="absolute w-full h-full left-0 top-0 -z-10">
        <Image
          src="/two.png"
          width={100}
          height={100}
          alt="m"
          className="w-full h-full "
        />
      </div>{" "}
      <div className="absolute w-full h-full left-0 top-0 -z-10">
        <Image
          src="/circle.png"
          width={100}
          alt="m"
          height={100}
          className="w-full h-full "
        />
      </div>{" "}
      {/* gradient close*/}
      <div
        className={` w-full  justify-evenly  laptop:justify-center  flex  flex-col-reverse laptop:flex-row items-center   trigger ${mont.className} `}
      >
        {/* section one  */}
        <div className=" w-full tablet:h-full h-fit z-10 text-lg  flex flex-col gap-10 items-center justify-center  laptop:!items-start">
          <h1
            className="text-center text-3xl font-semibold px-2
           bg-title-gradient w-full h-fit text-transparent bg-clip-text laptop:block hidden tablet:text-left tablet:text-6xl "
          >
            dfdfh nfdnf dnkdnf nkdnf
          </h1>
          <p
            className={`${montLight.className} text-center laptop:text-left tablet:text-3xl laptop:text-xl`}
          >
            {/* Design Qube, founded in 2020 in Chennai, specializes in interior
            fit-outs, project management, and execution. With a 9000 sq. ft.
            facility, we deliver innovative, cost-effective solutions for
            commercial, residential, and retail spaces across India. */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            sequi ad fuga maxime odio assumenda, maiores libero quibusdam amet
            fugit impedit enim ipsam aperiam ipsa rerum. Ratione et nam
            laudantium!
          </p>
          <div className="flex flex-col items-center justify-center cursor-pointer group">
            <div
              className="relative py-1 px-4 border 
           border-transparent bg-gradient-to-tr w-fit  from-[#FAFAFA] to-[#C1792C] rounded-lg tablet:rounded-none tablet:p-4 tablet:px-6 tablet:rounded-tr-full"
            >
              <div className="absolute inset-0 bg-black rounded-lg m-[1px] tablet:rounded-tr-full tablet:rounded-none"></div>
              <div className="relative z-10 text-white text-center  font-light group-hover:transform group-hover:-translate-x-2 duration-500 ease-linear">
                <div className="flex items-center  gap-1 ">
                  <p className="text-base">Explore Now</p>
                  <MdOutlineDoubleArrow className="group-hover:rotate-180 transform transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section two  */}
        <div className="  w-full tablet:h-full h-fit flex flex-col gap-5 tablet:gap-10  items-center justify-center mt-20 tablet:mt-32 laptop:mt-0 tablet:justify-center">
          <p
            className="text-center text-3xl tablet:text-6xl font-semibold px-2
           bg-title-gradient w-full text-transparent bg-clip-text laptop:hidden z-10"
          >
            {/* Modern Interior Design Service  */}
            mlmlml mlmlmlml mlmlm mlmmlml
          </p>

          <Image
            src="/wall.svg"
            width={100}
            className="w-full h-fit object-contain px-5 z-10"
            alt="img"
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Montserrat, Newsreader } from "next/font/google";
import Image from "next/image";
import { IoIosMail } from "react-icons/io";

import { FaLinkedin, FaTwitter } from "react-icons/fa";
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function Team() {
  const data = [
    { img: "/Team/team1.png", name: "name", position: "Ceo" },
    {
      img: "/Team/team2.jpg",
      name: "name",
      position: "Managing partner",
    },
    {
      img: "/Team/team3.png",
      name: "name",
      position: "Managing partner",
    },
  ];
  return (
    <div
      className="relative"
      style={{
        backgroundImage: "url('/Team/bg4.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute w-full h-full left-0 top-0  bg-black/30 "></div>
      <div className="relative">
        <div
          className={`tablet:container mx-auto relative w-full tablet:p-10 mb-32 p-2   flex flex-col tablet:gap-10
  gap-7  overflow-hidden ${mont.className} `}
        >
          <div className="flex  flex-col  w-full laptop:ml-auto laptop:gap-3 gap-2 items-center z-10 ">
            <h1
              className={` text-transparent bg-clip-text h-fit  text-center  bg-title-gradient text-5xl font-semibold ${news.className}`}
            >
              Meet Our Team
            </h1>
            <p
              className={` text-center break-words laptop:w-7/12  ${montLight.className}`}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              sint consequuntur adipisci itaque deserunt libero non omnis
              sapiente et suscipit?
            </p>
          </div>
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-10 place-items-center">
            {/* img1 */}
            {data.map((val, i) => (
              <div
                key={i}
                className={`relative rounded-xl shadow-sm shadow-gray-400 w-[300px] h-[380px] 
                      bg-gradient-to-b from-[#4a4847]/20 to-[#6f452b]/50 
                      backdrop-blur-md justify-end pb-6 items-center flex flex-col gap-4 
                      group cursor-pointer ${
                        i == 2 && "tablet:col-span-2 laptop:col-span-1 "
                      }`}
              >
                <div>
                  <div
                    className="absolute  z-0 top-20 left-6
                    
                   
                  "
                  >
                    <FaTwitter className="text-4xl" />
                  </div>
                  <div
                    className="absolute left-1/2 -translate-x-1/2 z-0 
                 top-8 "
                  >
                    <IoIosMail className="text-4xl" />
                  </div>
                  <div
                    className="absolute z-0 top-20 right-6
              "
                  >
                    <FaLinkedin className="text-4xl" />
                  </div>
                </div>
                {/* hover  */}
                <div>
                  <div
                    className="absolute top-1/2 left-1/2 z-0 group-hover:top-20 group-hover:left-6 
                    group-hover:rotate-0 rotate-90
                    transition-all duration-1000 ease-in-out
                  "
                  >
                    <FaTwitter className="text-4xl" />
                  </div>
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 z-0 rotate-90 group-hover:rotate-0
                  group-hover:!top-8 transition-all duration-1000 ease-in-out"
                  >
                    <IoIosMail className="text-4xl" />
                  </div>
                  <div
                    className="absolute top-1/2 right-1/2  z-0 group-hover:top-20 group-hover:right-6
                   group-hover:rotate-0 rotate-90 transition-all duration-1000 ease-in-out"
                  >
                    <FaLinkedin className="text-4xl" />
                  </div>
                </div>
                <Image
                  src={val.img}
                  width={900}
                  height={900}
                  className="h-[200px] w-[200px] z-10 object-cover rounded-[50%]"
                  alt="img"
                />
                <div className="flex flex-col items-center">
                  <p>{val.name}</p>
                  <p className={`${montLight.className} text-sm`}>
                    {val.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

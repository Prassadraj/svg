"use client";
import axios from "axios";
import { Montserrat, Newsreader } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montmedium = Montserrat({ subsets: ["latin"], weight: ["600"] });
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function Comlpeted() {
  const [projectdata, setProjectData] = useState([]);
  const [open, setOpen] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/data");
        const completedProjects = response.data.data.filter(
          (project) => project.complete
        );
        setProjectData(completedProjects);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={`${mont.className}`}>
      {/* banner   */}
      <div
        className={`relative h-[50vh] bg-slate-500 w-full bg-[url('/Service/background6.jpeg')] bg-center tablet:bg-fixed bg-cover bg-scroll flex flex-col items-center  justify-center
        bg-no-repeat tablet:mt-20`}
      >
        <div className="absolute w-full h-full left-0 top-0 bg-black/60 tablet:bg-black/60 "></div>
        <div className="flex flex-col gap-4 items-center  justify-center z-10">
          <h1 className="tablet:text-5xl text-2xl font-bold">
            Completed
            <span className="ml-2 text-transparent bg-title-gradient bg-clip-text">
              Projects
            </span>
          </h1>
          <div
            className={`${montLight.className} flex gap-2 p-2 bg-black/40 rounded-lg tablet:text-lg text-xs`}
          >
            <p className="font-medium">Home</p>
            <p>&gt;</p>
            <p className="font-bold text-transparent bg-title-gradient bg-clip-text">
              Completed Projects
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto tablet:container px-2 tablet:mb-32 mb-10  tablet:!px-10  mt-10 tablet:mt-28  w-full">
        <h1 className={`tablet:text-5xl text-3xl mb-4 ${news.className}`}>
          Our Works
        </h1>
        {/* img */}
        <div className="grid tablet:grid-cols-3 laptop:grid-cols-4 gap-4 ">
          {/* ✅ Check if projectdata has images */}
          {projectdata?.length > 0 ? (
            projectdata.map((project, i) => (
              <div
                key={project._id || i}
                onClick={() => setOpen(true)}
                className="w-full laptop:h-[400px] tablet:h-[300px] h-[250px] overflow-hidden cursor-pointer"
              >
                <Image
                  className="rounded-lg object-cover w-full h-full"
                  width={900}
                  height={900}
                  src={project.img[0]}
                  alt={`Project Image `}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No projects available.</p>
          )}
        </div>
        {open && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 w-[90vw] h-[70vh] -translate-y-1/2 bg-slate-400 z-10 ">
            <>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                navigation={true}
                initialSlide={3}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 5,
                  slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
              >
                {projectdata[2]?.img.map((val, i) => (
                  <SwiperSlide
                    key={i}
                    className="tablet:!w-[350px] tablet:!h-[350px] !h-[200px] !w-[200px] relative rounded-md overflow-hidden !z-10"
                  >
                    <img loading="lazy" alt={`Nature ${i + 1}`} src={val} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
            <div
              className="absolute -right-5 top-0 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              X
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Comlpeted;

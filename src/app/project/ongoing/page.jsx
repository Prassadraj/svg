"use client";
import axios from "axios";
import { Montserrat, Newsreader } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montmedium = Montserrat({ subsets: ["latin"], weight: ["600"] });
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });

function Ongoing() {
  const [projectdata, setProjectData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("tminteriors.netlify.app/api/data");
        const completedProjects = response.data.data.filter(
          (project) => project.complete == false
        );
        setProjectData(completedProjects);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filterDetails = (selectedId) => {
    const response = projectdata.filter((data, i) => i == selectedId);

    setSingleData(response);
  };

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
            Ongoing
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
              Ongoing Projects
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
                onClick={() => {
                  setOpen(true);

                  filterDetails(i);
                }}
                className="w-full laptop:h-[400px] tablet:h-[300px] h-[250px] overflow-hidden cursor-pointer z-0"
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
          <div className="fixed top-1/2  left-1/2 -translate-x-1/2 overflow-y-auto w-[90vw] max-h-[90vh] tablet:h-[80vh] laptop:h-[90vh] h-[600px] -translate-y-1/2 bg-black/90  z-10 p-4  flex flex-col  ">
            <div
              className={`absolute  top-2 !right-2  z-50 text-2xl cursor-pointer ${montLight.className}`}
              onClick={() => setOpen(false)}
            >
              X
            </div>
            <div className="flex flex-col items-center gap-4 mt-4">
              <h1 className={`${news.className} tablet:text-2xl`}>
                Work Information
              </h1>
              {singleData[0]?.img && singleData[0].img.length > 0 ? (
                <>
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                      "--swiper-navigation-size": "15px",
                    }}
                    zoom={true}
                    loop={true}
                    navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Zoom, Navigation, Pagination]}
                    className="mySwiper tablet:w-[500px] w-[300px] tablet:h-[300px] h-[250px]  "
                  >
                    {singleData[0]?.img.map((val, i) => (
                      <SwiperSlide key={i}>
                        <div className="swiper-zoom-container w-[350px] h-[300px]">
                          <Image
                            width={600} // Adjust based on container size
                            height={700}
                            alt="imgs"
                            priority
                            src={val}
                            className=" w-full h-full object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              ) : (
                <>
                  {" "}
                  <p>No images available</p>
                </>
              )}
              <p
                className={`${montLight.className} text-center tablet:text-sm text-xs overflow-y-auto h-40`}
              >
                {singleData[0]?.desc || "No description available"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ongoing;

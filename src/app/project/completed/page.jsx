"use client";
import axios from "axios";
import { Montserrat, Newsreader } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montmedium = Montserrat({ subsets: ["latin"], weight: ["600"] });
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function Comlpeted() {
  const [projectdata, setProjectData] = useState([]);
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
  console.log(projectdata);
  const data = [
    "/Service/background6.jpeg",
    "/Service/background4.jpeg",
    "/Service/background7.jpeg",
    "/Service/background2.jpeg",
    "/Service/background3.jpeg",
    "/Service/background7.jpeg",
    "/Service/background6.jpeg",
    "/Service/background6.jpeg",
    "/Service/background6.jpeg",
  ];

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
      <div className="mx-auto tablet:container px-2   tablet:!px-10  mt-10 tablet:mt-28  w-full">
        <div className="columns-[300px] space-y-4">
          {/* ✅ Check if projectdata has images */}
          {projectdata?.length > 0 ? (
            projectdata.map((project, i) => (
              <div key={project._id || i}>
                <Image
                  className="rounded-lg break-inside-avoid"
                  width={900}
                  height={900}
                  src={project.img[0]} // ✅ Now correctly mapping image URLs
                  alt={`Project Image `}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No projects available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comlpeted;

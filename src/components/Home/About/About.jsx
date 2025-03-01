import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

function About() {
  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   const fetchCatFact = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://dog.ceo/api/breeds/image/random"
  //       );
  //       console.log("Cat Fact:", response.data);
  //     } catch (error) {
  //       console.error("Error fetching cat fact:", error);
  //     }
  //   };
  //   fetchCatFact();
  // }, []);

  return (
    <div className=" w-full tablet:px-10 mb-20  mx-auto container flex flex-col gap-5 h-screen ">
      {/* first div  */}
      <div className="flex  flex-col laptop:items-end w-full laptop:ml-auto laptop:gap-3 gap-4 items-center">
        <h1 className=" text-transparent bg-clip-text h-fit laptop:text-right text-center  bg-title-gradient text-5xl font-semibold">
          {/* Modern Interior Design Service  */}
          ksdkskdks ksdkskd <br /> ksdksdsd sdsdsd.
        </h1>
        <p className="laptop:text-right text-center break-words laptop:w-1/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          optio necessitatibus voluptates amet consectetur, tempora omnis rerum
        </p>
      </div>
      {/* tablet  */}
      <div
        className=" grid-cols-[0.2fr_1fr_1fr_1fr_1fr_1fr_1fr_0.5fr] grid-rows-10 gap-5  h-full
      tablet:grid hidden"
      >
        <div
          className="relative grid col-start-1 col-end-6 row-start-1 laptop:row-end-10
        tablet:row-end-6 bg-red-500 overflow-hidden"
        >
          <Image
            alt="img"
            fill
            src="/AboutImgs/about1.jpeg"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
        <div
          className="relative overflow-hidden col-start-4 laptop:col-end-7 tablet:col-end-9
         rounded-br-full row-start-2 laptop:row-end-7 tablet:row-end-5 bg-blue-500 z-20"
        >
          <Image
            alt="img"
            fill
            src="/AboutImgs/about2.jpg"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
        <div
          className="laptop:row-start-5 tablet:row-start-3 z-10 border-gray-600 border laptop:row-end-12
          tablet:row-end-7
           laptop:col-start-5
          col-start-4 col-end-10   rounded-tr-full"
          style={{
            background:
              "linear-gradient(135deg, #757575 0%, #695F55 28%,#413A34 60%,#332B24 100%)",
          }}
        ></div>
        <div
          className="relative p-2 gap-4 flex z-10 flex-col  laptop:row-start-7 row-start-5
         row-end-12  laptop:col-start-5 col-start-4 col-end-8 "
        >
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur autem quibusdam laborum omnis quis architecto ipsum rem
            magni voluptate.
          </p>
          <div className="flex gap-1 rounded-md w-fit items-center bg-gradient-to-l from-[#D48345] to-[#472B15] p-2 ">
            <p className=" text-xs">About Us</p>
            <BsArrowRight className="text-xl" />
          </div>
        </div>
      </div>
      {/* mobile  */}
      <div className="tablet:hidden">
        <Image
          alt="img"
          src="/AboutImgs/about1.jpeg"
          width={100}
          height={100}
          className="aspect-square w-full object-cover"
        />
        <div
          className=" p-2 gap-4 flex z-10 flex-col  laptop:row-start-7 row-start-5
         row-end-12  laptop:col-start-5 col-start-4 col-end-8 "
          style={{
            background:
              "linear-gradient(135deg, #757575 0%, #695F55 28%,#413A34 60%,#332B24 100%)",
          }}
        >
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur autem quibusdam laborum omnis quis architecto ipsum rem
            magni voluptate.
          </p>
          <div className="flex gap-1 rounded-md w-fit items-center bg-gradient-to-l from-[#D48345] to-[#472B15] p-2 ">
            <p className=" text-xs">About Us</p>
            <BsArrowRight className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

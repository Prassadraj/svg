import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Montserrat, Newsreader } from "next/font/google";
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
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
    <div
      className={` w-full tablet:px-10 mb-20  mx-auto tablet:container p-2 flex flex-col gap-5 h-fit ${mont.className}`}
    >
      {/* first div  */}
      <div className="flex tablet:px-10 flex-col laptop:items-end w-full laptop:ml-auto laptop:gap-3 gap-4 items-center">
        <h1
          className={` text-transparent bg-clip-text h-fit laptop:text-right text-center  bg-title-gradient text-5xl font-semibold ${news.className}`}
        >
          {/* Modern Interior Design Service  */}
          Providing Innovative <br /> Interior Design.
        </h1>
        <p
          className={`laptop:text-right text-center break-words laptop:w-1/3 laptop:hidden ${montLight.className}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          optio necessitatibus voluptates amet consectetur, tempora omnis rerum
        </p>
      </div>
      {/* tablet  */}
      <div className=" grid-rows-[100px_50px_50px_50px_50px]  gap-5 grid-cols-6 hidden tablet:grid">
        {/* title  */}

        <p
          className={`col-start-4 tablet:px-10 col-end-7 row-start-1 text-right laptop:block hidden ${montLight.className}`}
        >
          {/* Modern Interior Design Service  */}
          Lorem ipsum dolor sit amet consectetur adipisicing elitcc. Laboriosam
          optio necessitatibus
        </p>

        {/* img1  */}
        <div
          className="col-start-1 col-end-4  row-start-1 laptop:row-end-7 row-end-6 
          bg-slate-400 relative overflow-hidden z-10"
        >
          <Image
            alt="img"
            fill
            src="/AboutImgs/about3.jpg"
            className="h-full w-full hover:rotate-1 object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
        {/* img2  */}
        <div className="laptop:col-start-3 col-start-3 laptop:col-end-6 col-end-7 row-start-2 row-end-6 relative overflow-hidden rounded-br-full z-10">
          <Image
            alt="img"
            fill
            src="/AboutImgs/about2.jpg"
            className="w-full h-full hover:-rotate-1 bg-slate-400 object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
        {/* img3  */}
        <div
          className="col-start-3  relative col-end-7 row-start-3 row-end-13 rounded-tr-full border border-gray-500 shadow-sm shadow-orange-300"
          style={{
            background:
              "linear-gradient(135deg, #757575 0%, #695F55 28%,#413A34 60%,#332B24 100%)",
          }}
        >
          {" "}
          <div
            className={`px-2 py-1 bottom-3 absolute flex flex-col 
                gap-2 ${montLight.className}`}
          >
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              reiciendis iusto tempora. Provident cum iste nisi inventore
              voluptatum eligendi laudantium ex,
            </p>
            <div
              className="flex gap-1
        font-semibold rounded-md w-fit items-center bg-gradient-to-l from-[#D48345] to-[#472B15] py-1 px-3 "
            >
              <p className=" text-xs font-light   cursor-pointer">About Us</p>
              <BsArrowRight className="text-xl" />
            </div>
          </div>
        </div>
      </div>
      {/* mobile  */}
      <div className={`${montLight.className} tablet:hidden`}>
        <Image
          alt="img"
          src="/AboutImgs/about1.jpeg"
          width={100}
          height={100}
          className="aspect-square w-full object-cover bg-slate-400"
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
            <p className=" text-xs   cursor-pointer">About Us</p>
            <BsArrowRight className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

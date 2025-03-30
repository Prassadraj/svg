import { Montserrat, Newsreader } from "next/font/google";
import Image from "next/image";
import React from "react";
import { TiTick } from "react-icons/ti";

import { IoIosArrowRoundForward } from "react-icons/io";
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function About() {
  return (
    <>
      <div className={`text-white w-full  ${mont.className}`}>
     {/* Banner  */}
        <div
          className={`relative h-[50vh] bg-slate-500 w-full bg-[url('/Service/background7.jpeg')] bg-center tablet:bg-fixed bg-cover bg-scroll flex flex-col items-center  justify-center
        bg-no-repeat `}
        >
          <div className="absolute w-full h-full left-0 top-0 bg-black/60 tablet:bg-black/60 "></div>
          <div className="flex flex-col gap-4 items-center  justify-center z-10">
            <h1 className="text-5xl  font-bold">
              About{" "}
              <span className="text-transparent bg-title-gradient bg-clip-text">
                Us
              </span>
            </h1>
            <div className="flex gap-2 p-2 bg-black/40 rounded-lg text-lg">
              <p className="font-medium">Home</p>
              <p>&gt;</p>
              <p className="font-bold text-transparent bg-title-gradient bg-clip-text">
                About Us
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto tablet:container px-2   tablet:!px-10 w-full">
          {/* section1  */}
          <div className="tablet:flex relative gap-10 tablet:mb-32 mb-10 tablet:mt-32 mt-5">
            <div className="absolute -top-10 right-10 ">
              <Image
                src="/AboutImgs/aboutImg.png"
                width={800}
                height={800}
                alt="knlsn"
                className="object-cover w-full h-44 -z-10 opacity-50"
              />
            </div>
            <div className="absolute -bottom-20 left-10 ">
              <Image
                src="/AboutImgs/aboutImg2.png"
                width={800}
                height={800}
                alt="knlsn"
                className="object-cover w-full h-44 -z-10 opacity-50"
              />
            </div>
            <div className="grid grid-cols-[100px_100px_100px_50px] tablet:!grid-rows-[100px_100px_100px_100px_100px] !grid-rows-[100px_100px_100px_100px]">
              {/* Move grid positioning here */}
              <div className="row-start-1 tablet:row-end-5 row-end-4 col-start-1 tablet:col-end-5 col-end-4 w-full overflow-hidden rounded-lg">
                <Image
                  src="/Footer/footer5.png"
                  width={900}
                  alt="img"
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="row-start-3 row-end-6 tablet:col-start-3 col-start-2 tablet:col-end-8 col-end-5 w-full overflow-hidden rounded-lg">
                <Image
                  src="/Footer/footerCut.png"
                  width={900}
                  alt="img"
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="tablet:w-1/2 w-full flex flex-col gap-4 mt-4">
              <div className="flex gap-2 items-center">
                <IoIosArrowRoundForward className="text-5xl" />
                <p className={`text-2xl ${montLight.className}`}>About Us</p>
              </div>
              <div className="flex flex-col gap-5">
                <h1
                  className={`${news.className} tablet:text-4xl  text-3xl z-10  text-transparent bg-clip-text bg-grey-gradient`}
                >
                  Our passion for design, your vision realized
                </h1>
                <p
                  className={`${montLight.className} text-transparent bg-clip-text bg-grey-gradient`}
                >
                  Our dedicated team of designers works closely with you to
                  understand your vision and bring it to life with thoughtful
                  attention to detail. Whether it’s transforming a single room
                  or an entire home.
                </p>
                <div
                  className={`grid grid-rows-2 gap-8 tablet:mt-5 grid-cols-2 ${montLight.className}`}
                >
                  <div className="flex gap-2 items-center">
                    <div className="tablet:p-2 bg-custom-gradient border border-gray-400 rounded-[50%] tablet:text-lg text-xs">
                      {" "}
                      <TiTick />
                    </div>
                    <p className="tablet:text-xl text-xs">creative expertise</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="tablet:p-2 bg-custom-gradient border border-gray-400 rounded-[50%] tablet:text-lg text-xs">
                      {" "}
                      <TiTick />
                    </div>
                    <p className="tablet:text-xl text-xs">
                      client-centered approach
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="tablet:p-2 bg-custom-gradient border border-gray-400 rounded-[50%] tablet:text-lg text-xs">
                      {" "}
                      <TiTick />
                    </div>
                    <p className="tablet:text-xl text-xs">
                      client-centered approach
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="tablet:p-2 bg-custom-gradient border border-gray-400 rounded-[50%] tablet:text-lg text-xs">
                      {" "}
                      <TiTick />
                    </div>
                    <p className="tablet:text-xl text-xs">
                      client-centered approach
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* sectio2  */}
          <div className="tablet:flex-row flex flex-col-reverse relative gap-5 tablet:mb-32 mb-10 tablet:mt-32 mt-5">
            <div className="absolute -top-10 right-10 ">
              {/* <Image
                src="/AboutImgs/aboutImg.png"
                width={800}
                height={800}
                alt="knlsn"
                className="object-cover w-full h-44 -z-10 opacity-50"
              /> */}
            </div>
            <div className="absolute -bottom-20 left-10 ">
              {/* <Image
                src="/AboutImgs/aboutImg2.png"
                width={800}
                height={800}
                alt="knlsn"
                className="object-cover w-full h-44 -z-10 opacity-50"
              /> */}
            </div>

            <div className="tablet:w-1/2 w-full flex flex-col gap-4 mt-4">
              <div className="flex gap-2 items-center">
                <IoIosArrowRoundForward className="text-5xl" />
                <p className={`text-2xl ${montLight.className}`}>
                  Why Choose Us
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h1
                  className={`${news.className} tablet:text-4xl  text-3xl z-10  text-transparent bg-clip-text bg-grey-gradient`}
                >
                  A behind the scenes look at our agency{" "}
                </h1>
                <p
                  className={`${montLight.className} text-transparent bg-clip-text bg-grey-gradient`}
                >
                  From concept to completion, discover how we bring your vision
                  to life with innovation, collaboration, and expert
                  craftsmanship.
                </p>
                <div className="flex flex-col mt-4 gap-10">
                  <div className="flex items-start gap-2">
                    <div className="tablet:p-2 bg-custom-gradient border border-gray-400 rounded-[50%] tablet:text-lg text-xs">
                      {" "}
                      <TiTick />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h1 className={`${news.className}`}>
                        Tailored Design Solutions
                      </h1>
                      <p className={`${montLight.className}`}>
                        Tailored Design Solutions We provide personalized
                        interior design services that reflect your unique vision
                        and lifestyle.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="tablet:p-2 bg-custom-gradient border border-gray-400 rounded-[50%] tablet:text-lg text-xs">
                      {" "}
                      <TiTick />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h1 className={`${news.className}`}>
                        Tailored Design Solutions
                      </h1>
                      <p className={`${montLight.className}`}>
                        Tailored Design Solutions We provide personalized
                        interior design services that reflect your unique vision
                        and lifestyle.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="tablet:p-2 bg-custom-gradient border border-gray-400 rounded-[50%] tablet:text-lg text-xs">
                      {" "}
                      <TiTick />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h1 className={`${news.className}`}>
                        Tailored Design Solutions
                      </h1>
                      <p className={`${montLight.className}`}>
                        Tailored Design Solutions We provide personalized
                        interior design services that reflect your unique vision
                        and lifestyle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-1/2">
              {/* grid1  */}
              <div className="grid grid-cols-4 tablet:!grid-rows-[100px_100px_100px] !grid-rows-[100px_100px_100px] gap-4">
                {/* Move grid positioning here */}
                <div className="row-start-1 tablet:row-end-4 row-end-4 col-start-1 tablet:col-end-3 col-end-4 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/Footer/footer5.png"
                    width={900}
                    alt="img"
                    height={700}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="row-start-1 row-end-4 tablet:col-start-3 col-start-2 tablet:col-end-5 col-end-5 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/Footer/footer3.png"
                    width={900}
                    alt="img"
                    height={700}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>{" "}
              {/* grid2 */}
              <div className="grid grid-cols-5 tablet:!grid-rows-[100px_100px_100px] !grid-rows-[100px_100px_100px] gap-4">
                {/* Move grid positioning here */}
                <div className="row-start-1 tablet:row-end-4 row-end-4 col-start-1 tablet:col-end-3 col-end-4 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/Footer/footer2.png"
                    width={900}
                    alt="img"
                    height={700}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="row-start-1 row-end-4 tablet:col-start-3 col-start-2 tablet:col-end-8 col-end-5 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/Footer/footer4.png"
                    width={900}
                    alt="img"
                    height={700}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* section4  */}
          <div className=""></div>
        </div>
      </div>
    </>
  );
}

export default About;

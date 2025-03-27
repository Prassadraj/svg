import { Montserrat, Newsreader } from "next/font/google";
import Image from "next/image";
import React from "react";
import { TiTick } from "react-icons/ti";

import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from "@/components/Footer/Footer";
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function About() {
  return (
    <>
      <div className={`text-white w-full  ${mont.className}`}>
        {/* section 1 */}
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
          {/* section2  */}
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
          {/* sectio3  */}
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
            <div className="flex flex-col gap-5 tablet:w-1/2 w-full">
              {/* grid1  */}
              <div className="grid grid-cols-4 tablet:!grid-rows-[100px_100px_100px] !grid-rows-[100px_100px_100px] gap-4">
                {/* Move grid positioning here */}
                <div className="row-start-1 tablet:row-end-4 row-end-4 col-start-1 tablet:col-end-3 col-end-3 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/Footer/footer5.png"
                    width={900}
                    alt="img"
                    height={700}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="row-start-1 row-end-4 tablet:col-start-3 col-start-3 tablet:col-end-5 col-end-5 w-full overflow-hidden rounded-lg">
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
              <div className="grid tablet:grid-cols-5 grid-cols-4 tablet:!grid-rows-[100px_100px_100px] !grid-rows-[100px_100px_100px] gap-4">
                {/* Move grid positioning here */}
                <div className="row-start-1 tablet:row-end-4 row-end-4 col-start-1 tablet:col-end-3 col-end-3 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/Footer/footer2.png"
                    width={900}
                    alt="img"
                    height={700}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="row-start-1 row-end-4 tablet:col-start-3 col-start-3 tablet:col-end-8 col-end-5 w-full overflow-hidden rounded-lg">
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
          <div className=" grid grid-rows-[250px_100px_100px_100px] grid-cols-4 w-full tablet:mb-32 mb-10">
            <div className="row-start-1 col-start-1 col-end-3 flex flex-col gap-4 pt-10 ">
              <h1
                className={`${news.className} text-2xl tablet:!text-4xl text-transparent bg-clip-text bg-grey-gradient`}
              >
                Trusted Architectural Best Work
              </h1>
              <p
                className={`${montLight.className} text-xs tablet:text-base text-transparent bg-clip-text bg-grey-gradient`}
              >
                From concept to completion, discover how we bring your vision to
                life with innovation, collaboration, and expert craftsmanship.
              </p>
            </div>
            {/* second  */}
            <div
              className="w-full grid grid-rows-2 grid-cols-2 tablet:grid-rows-2 tablet:grid-cols-2 laptop:gap-20
            row-start-2 col-start-1 tablet:col-end-4 col-end-5 row-end-5 laptop:p-16 tablet:p-4 bg-[#624545] z-10 rounded-md p-2 gap-2 place-items-center"
            >
              <div className="flex gap-2">
                <div className="tablet:p-2 bg-custom-gradient h-fit border border-gray-400 rounded-[50%] tablet:text-lg text-xs">
                  {" "}
                  <TiTick />
                </div>
                <div className="flex flex-col gap-2">
                  {" "}
                  <p className={`${news.className} text-xl`}>
                    Innovative Design
                  </p>
                  <p
                    className={`${montLight.className} tablet:text-sm text-xs`}
                  >
                    Tailored Design Solutions We provide personalized interior{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="tablet:p-2 bg-custom-gradient h-fit border border-gray-400 rounded-[50%] tablet:text-lg text-xs">
                  {" "}
                  <TiTick />
                </div>
                <div className="flex flex-col gap-2">
                  {" "}
                  <p className={`${news.className} text-xl`}>
                    Architectural Drawing
                  </p>
                  <p
                    className={`${montLight.className} tablet:text-sm text-xs`}
                  >
                    Tailored Design Solutions We provide personalized interior{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="tablet:p-2 bg-custom-gradient h-fit border border-gray-400 rounded-[50%] tablet:text-lg text-xs">
                  {" "}
                  <TiTick />
                </div>
                <div className="flex flex-col gap-2">
                  <p className={`${news.className} text-xl`}>
                    3D Model Building
                  </p>
                  <p
                    className={`${montLight.className} tablet:text-sm text-xs`}
                  >
                    Tailored Design Solutions We provide personalized interior{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 ">
                <div className="tablet:p-2 bg-custom-gradient h-fit border border-gray-400 rounded-[50%] tablet:text-lg text-xs">
                  {" "}
                  <TiTick />
                </div>
                <div className="flex flex-col gap-2">
                  <p className={`${news.className} text-xl`}>
                    Building The Space
                  </p>
                  <p
                    className={`${montLight.className} tablet:text-sm text-xs`}
                  >
                    Tailored Design Solutions We provide personalized interior{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* thiird right  */}
            <div className="row-start-1 col-start-3 col-end-5 tablet:row-end-5 row-end-3 w-full h-full">
              <Image
                src="/AboutImgs/section4.webp"
                className="w-full object-cover h-full"
                width={900}
                alt="img"
                height={900}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;

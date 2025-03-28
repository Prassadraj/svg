import Footer from "@/components/Footer/Footer";
import { Montserrat, Newsreader } from "next/font/google";
import Image from "next/image";
import React from "react";
import { FaNetworkWired } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function Service() {
  return (
    <div className="mx-auto tablet:container px-2   tablet:!px-10  mt-10 tablet:mt-28  w-full">
      <div className=" flex flex-col  text-white w-full tablet:mb-32 mb-10">
        <div className="flex justify-between tablet:gap-10 gap-2 w-full">
          {/* img1 */}
          <div
            className="w-72 h-96 mt-10 overflow-hidden"
            style={{
              clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)",
            }}
          >
            <Image
              alt="img"
              width={900}
              height={900}
              loading="lazy"
              src="/Service/service5.jpeg"
              className="h-full relative w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
          {/* center img  */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-10 ">
              <div className="tablet:w-52 tablet:h-72 w-32 h-52 overflow-hidden">
                <Image
                  alt="img"
                  width={900}
                  height={900}
                  loading="lazy"
                  src="/Service/service5.jpeg"
                  className="h-full relative w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="tablet:w-52 tablet:h-72 w-32 h-52 overflow-hidden">
                <Image
                  alt="img"
                  width={900}
                  height={900}
                  loading="lazy"
                  src="/Service/service5.jpeg"
                  className="h-full relative w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col items-center">
                <h1
                  className={`${news.className} text-3xl tablet:text-5xl text-transparent bg-clip-text bg-grey-gradient`}
                >
                  Architecture to
                </h1>
                <div className="flex items-center gap-2">
                  <Image
                    width={900}
                    height={900}
                    alt="img"
                    loading="lazy"
                    className="w-24 h-14 object-cover rounded-full"
                    src="/Service/service5.jpeg"
                  />{" "}
                  <h1
                    className={`${news.className} text-3xl tablet:text-5xl text-transparent bg-clip-text bg-grey-gradient`}
                  >
                    build dream
                  </h1>
                </div>
              </div>

              <p className="max-w-md text-center text-sm tablet:text-lg text-transparent bg-clip-text bg-grey-gradient">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                perspiciatis dolore, illo iure incidunt vitae amet saepe omnis
              </p>
            </div>
          </div>
          {/* last img */}

          <div
            className="w-72 h-96 mt-10 overflow-hidden"
            style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 95%)" }}
          >
            <Image
              alt="img"
              width={900}
              height={900}
              loading="lazy"
              src="/Service/service5.jpeg"
              className="h-full relative w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
      {/* 2 div  */}
      <div className=" flex flex-col gap-4 tablet:text-4xl text-lg tablet:mb-32 mb-10">
        <div className="flex tablet:flex-row flex-col tablet:h-56 items-center gap-2 ">
          <div className="tablet:w-3/5  flex flex-col gap-3">
            <h1
              className={`${news.className}  text-center tablet:text-left  text-3xl tablet:text-5xl text-transparent bg-clip-text bg-grey-gradient`}
            >
              Trends and Innovations
            </h1>{" "}
            <p
              className={`text-sm tablet:text-base text-center tablet:text-left text-transparent bg-clip-text bg-grey-gradient
                ${montLight.className}`}
            >
              Explore the latest interior design trends, from smart technology
              to sustainable materials, creating stylish and future-ready
              spaces.
            </p>
          </div>
          <div
            className="tablet:w-2/5 border h-full p-4 flex flex-col justify-between
          gap-4 rounded-md"
          >
            <div className="h-fit w-fit tablet:p-2 bg-custom-gradient border border-gray-400 rounded-[50%] tablet:text-4xl text-2xl flex flex-col gap-4">
              {" "}
              <FaNetworkWired />
            </div>
            <div className="flex flex-col gap-2">
              <h1
                className={`${news.className} text-2xl  text-transparent bg-clip-text bg-grey-gradient`}
              >
                Eco-Chic Spaces
              </h1>
              <p className={`${montLight.className} text-base text-gray-300`}>
                Sustainable materials and biophilic designs that harmonize
                nature with interiors.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full  flex tablet:flex-row flex-col justify-between gap-4">
          {/* box1 */}
          <div
            className=" border   p-4 flex flex-col justify-between
          gap-4 tablet:gap-10 rounded-md"
          >
            <div className="h-fit w-fit tablet:p-2 bg-custom-gradient border border-gray-400 rounded-[50%] tablet:text-4xl text-2xl flex flex-col gap-4">
              {" "}
              <FaNetworkWired />
            </div>
            <div className="flex flex-col gap-2">
              <h1
                className={`${news.className} text-2xl  text-transparent bg-clip-text bg-grey-gradient`}
              >
                Intelligent Living
              </h1>
              <p className={`${montLight.className} text-base text-gray-300`}>
                Seamless smart home integrations for effortless comfort and
                efficiency.
              </p>
            </div>
          </div>
          {/* box2 */}
          <div
            className=" border  p-4 flex flex-col justify-between
         gap-4 tablet:gap-10 rounded-md"
          >
            <div className="h-fit w-fit tablet:p-2 bg-custom-gradient border border-gray-400 rounded-[50%] tablet:text-4xl text-2xl flex flex-col gap-4">
              {" "}
              <FaNetworkWired />
            </div>
            <div className="flex flex-col gap-2">
              <h1
                className={`${news.className} text-2xl  text-transparent bg-clip-text bg-grey-gradient`}
              >
                Bold Minimalism
              </h1>
              <p className={`${montLight.className} text-base text-gray-300`}>
                Striking simplicity with statement pieces and purposeful design.
              </p>
            </div>
          </div>
          {/* box3 */}
          <div
            className=" border  p-4 flex flex-col justify-between
          gap-4 tablet:gap-10 rounded-md"
          >
            <div className="h-fit w-fit tablet:p-2 bg-custom-gradient border border-gray-400 rounded-[50%] tablet:text-4xl text-2xl flex flex-col gap-4">
              {" "}
              <FaNetworkWired />
            </div>
            <div className="flex flex-col gap-2">
              <h1
                className={`${news.className} text-2xl  text-transparent bg-clip-text bg-grey-gradient`}
              >
                Heritage Reimagined{" "}
              </h1>
              <p className={`${montLight.className} text-base text-gray-300`}>
                Classic aesthetics infused with contemporary innovation for
                timeless appeal.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 3 div  */}
      <div className=" tablet:mb-32 mb-10 ">
        <div className="  w-full flex justify-center tablet:mb-24 mb-10">
          <h1
            className={`${news.className} tablet:text-4xl text-3xl max-w-3xl text-transparent bg-clip-text bg-grey-gradient text-center `}
          >
            Shaping Interiors of the Future: Trends in Contemporary Design
          </h1>
        </div>
        <div className="tablet:flex-row flex flex-col w-full gap-4">
          {/* div1  */}
          <div className="flex flex-col gap-5 tablet:w-[50%] overflow-hidden">
            <div className="grid grid-rows-[100px_100px_100px_100px_100px] grid-cols-[100px_100px_100px_100px_100px] ">
              {/* img1  */}
              <div
                className="row-start-1 col-start-1 z-10 col-end-4  tablet:row-end-5 row-end-5 w-full overflow-hidden"
                style={{ borderRadius: "8% 45% 10% 14% / 16% 46% 10% 17% " }}
              >
                <Image
                  src="/Service/Trend/one.webp"
                  className="w-full object-cover h-full "
                  width={900}
                  loading="lazy"
                  alt="img"
                  height={900}
                />
              </div>
              {/* img2  */}
              <div
                className="row-start-2 col-start-3  col-end-6 tablet:row-end-6 row-end-5 w-full  overflow-hidden"
                style={{ borderRadius: "39% 7% 10% 48% / 48% 9% 12% 52% " }}
              >
                <Image
                  src="/Service/Trend/two.webp"
                  className="w-full object-cover h-full "
                  width={900}
                  loading="lazy"
                  alt="img"
                  height={900}
                />
              </div>
              {/* img3 */}
              <div className="row-start-5 col-start-1 -z-10 col-end-5  tablet:row-end-6 row-end-5 w-full overflow-hidden">
                <Image
                  src="/Service/Trend/three.webp"
                  className="w-full object-cover h-full opacity-90 rounded-md rounded-l-2xl border"
                  width={900}
                  loading="lazy"
                  alt="img"
                  height={900}
                />
              </div>
            </div>
          </div>
          {/* div2  */}
          <div className="flex flex-col gap-5 tablet:w-1/2">
            <div className="flex flex-col mt-4 tablet:gap-14 gap-2">
              {/* 1 */}
              <div className="flex items-start gap-2">
                <div className="tablet:p-2 bg-custom-gradient border border-gray-400 rounded-[50%] tablet:text-lg text-xs">
                  {" "}
                  <TiTick />
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className={`${news.className} tablet:text-2xl`}>
                    Tailored Design Solutions
                  </h1>
                  <p className={`${montLight.className}`}>
                    Tailored Design Solutions We provide personalized interior
                    design services that reflect your unique vision and
                    lifestyle.
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="flex items-start gap-2">
                <div className="tablet:p-2 bg-custom-gradient border border-gray-400 rounded-[50%] tablet:text-lg text-xs">
                  {" "}
                  <TiTick />
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className={`${news.className} tablet:text-2xl`}>
                    Tailored Design Solutions
                  </h1>
                  <p className={`${montLight.className}`}>
                    Tailored Design Solutions We provide personalized interior
                    design services that reflect your unique vision and
                    lifestyle.
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="flex items-start gap-2">
                <div className="tablet:p-2 bg-custom-gradient border border-gray-400 rounded-[50%] tablet:text-lg text-xs">
                  {" "}
                  <TiTick />
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className={`${news.className} tablet:text-2xl`}>
                    Tailored Design Solutions
                  </h1>
                  <p className={`${montLight.className}`}>
                    Tailored Design Solutions We provide personalized interior
                    design services that reflect your unique vision and
                    lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Service;

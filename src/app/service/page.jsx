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
    <div className="mx-auto tablet:container px-2   tablet:!px-10 tablet:mb-32 mt-10 tablet:mt-28 mb-10 w-full">
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
              <div className="tablet:w-52 tablet:h-72 w-32 h-52">
                <Image
                  alt="img"
                  width={900}
                  height={900}
                  loading="lazy"
                  src="/Service/service5.jpeg"
                  className="h-full relative w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="tablet:w-52 tablet:h-72 w-32 h-52">
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
                nature with interiors. lorem
              </p>
            </div>
          </div>
          {/* box2 */}
          <div
            className=" border  p-4 flex flex-col justify-between
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
          {/* box3 */}
          <div
            className=" border  p-4 flex flex-col justify-between
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
      </div>
      {/* 3 div  */}
      <div className="h-screen tablet:mb-32 mb-10">
        <div className="  w-full flex justify-center">
          <h1
            className={`${news.className} text-4xl max-w-3xl text-transparent bg-clip-text bg-grey-gradient text-center`}
          >
            Shaping Interiors of the Future: Trends in Contemporary Design
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Service;

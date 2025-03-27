import { Montserrat, Newsreader } from "next/font/google";
import Image from "next/image";
import React from "react";
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function Service() {
  return (
    <div className="mx-auto tablet:container px-2   tablet:!px-10 tablet:mb-32 mt-10 tablet:mt-28 mb-10 w-full">
      <div className="h-screen flex flex-col  text-white w-full ">
        <div className="flex justify-between gap-10 w-full">
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
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-10 ">
              <div className="w-52 h-72">
                <Image
                  alt="img"
                  width={900}
                  height={900}
                  loading="lazy"
                  src="/Service/service5.jpeg"
                  className="h-full relative w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="w-52 h-72">
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
                <h1 className={`${news.className} text-5xl`}>
                  Architecture to
                </h1>
                <div className="flex items-center gap-2">
                  <Image
                    width={900}
                    height={900}
                    loading="lazy"
                    className="w-24 h-14 object-cover rounded-full"
                    src="/Service/service5.jpeg"
                  />{" "}
                  <h1 className={`${news.className} text-5xl`}>build dream</h1>
                </div>
              </div>

              <p className="max-w-md text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                perspiciatis dolore, illo iure incidunt vitae amet saepe omnis
              </p>
            </div>
          </div>

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
    </div>
  );
}

export default Service;

import React from "react";
import { Montserrat, Newsreader } from "next/font/google";
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
function Events() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: "url('/Service/background7.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute w-full h-full left-0 top-0  bg-black/30 "></div>
      <div
        className={`container mx-auto relative w-full tablet:p-10 mb-32 py-5  flex flex-col tablet:gap-10
      gap-7 laptop:gap-1 overflow-hidden ${mont.className} `}
      >
        <div className="flex  flex-col  w-full laptop:ml-auto laptop:gap-3 gap-4 items-center z-10">
          <h1
            className={` text-transparent bg-clip-text h-fit  text-center  bg-title-gradient text-5xl font-semibold ${news.className}`}
          >
            News And Events
          </h1>
          <p
            className={` text-center break-words laptop:w-7/12  ${montLight.className}`}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            sint consequuntur adipisci itaque deserunt libero non omnis sapiente
            et suscipit?
          </p>
        </div>
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
            {["one", "two", "three", "four", "five", "six", "seven"].map(
              (val, i) => (
                <SwiperSlide
                  key={i}
                  className="tablet:!w-[350px] tablet:!h-[350px] !h-[200px] !w-[200px] relative rounded-md overflow-hidden !z-10"
                >
                  <img alt={`Nature ${i + 1}`} src={`/Events/${val}.jpeg`} />
                  <div className="absolute bottom-0 w-full bg-black/50 p-2">
                    <p
                      className={`line-clamp-2 overflow-hidden text-ellipsis text-xs tablet:text-sm
                      tablet:line-clamp-3 ${montLight.className}`}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas sapiente amet corporis repellendus asperiores,
                      suscipit neque qui
                    </p>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </>
      </div>
    </div>
  );
}

export default Events;

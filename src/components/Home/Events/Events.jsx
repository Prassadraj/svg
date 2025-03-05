import React from "react";
import { Montserrat } from "next/font/google";

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
      className={`relative w-full tablet:px-10 px-5 mb-32  flex flex-col tablet:gap-10
      gap-7 laptop:gap-1 overflow-hidden ${mont.className}`}
      style={{
        backgroundImage: "url('/Service/serviceBg.png')",
        backgroundPosition: "center",
        backgroundSize: "60% 96%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute w-full h-full left-0 top-0 -z-10"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 30%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 30%)",
          backdropFilter: "blur(10px)", // Optional: Adds extra blur effect behind
        }}
      >
        <Image
          src="/circle.png"
          width={100}
          height={100}
          alt="m"
          className="w-full h-full"
        />
      </div>

      <div className="flex  flex-col  w-full laptop:ml-auto laptop:gap-3 gap-4 items-center">
        <h1 className=" text-transparent bg-clip-text h-fit  text-center  bg-title-gradient text-5xl font-semibold">
          News And Events
        </h1>
        <p
          className={` text-center break-words laptop:w-7/12  ${montLight.className}`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sint
          consequuntur adipisci itaque deserunt libero non omnis sapiente et
          suscipit?
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
                className="tablet:!w-[350px] tablet:!h-[350px] !h-[200px] !w-[200px]"
              >
                <img alt={`Nature ${i + 1}`} src={`/Events/${val}.jpeg`} />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </>
    </div>
  );
}

export default Events;

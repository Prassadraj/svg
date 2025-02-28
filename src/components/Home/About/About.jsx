import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function About() {
  return (
    <div className="h-screen w-full tablet:px-10 container flex flex-col gap-5 ">
      {/* first div  */}
      <div className="flex  flex-col items-end w-full ml-auto gap-3">
        <h1 className=" text-transparent bg-clip-text h-fit text-right bg-title-gradient text-5xl font-semibold">
          {/* Modern Interior Design Service  */}
          ksdkskdks ksdkskd <br /> ksdksdsd sdsdsd.
        </h1>
        <p className="text-right break-words w-1/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          optio necessitatibus voluptates amet consectetur, tempora omnis rerum
        </p>
      </div>
      <div className="relative w-full h-full bg-[url('/bgHome.png')] bg-no-repeat bg-cover">
        <div
          className="absolute -top-32 left-10 w-[500px] h-[450px]  overflow-hidden
         "
        >
          <Image
            alt="img"
            fill
            src="/AboutImgs/about1.jpeg"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="absolute top-16 right-32 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px]  rounded-br-full z-10 overflow-hidden">
          <Image
            fill
            alt="img"
            src="/AboutImgs/about2.jpg"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-500 ease-in-out hover:rotate-1"
          />
        </div>
        <div
          className="absolute bottom-0 w-[800px]  h-full right-0 rounded-tr-full flex items-end p-5"
          style={{
            background:
              "linear-gradient(135deg, #757575 0%, #695F55 28%,#413A34 60%,#332B24 100%)",
          }}
        >
          <div className=" max-w-[90%]  break-words whitespace-normal flex flex-col gap-4">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus aliquid laudantium magnam temporibus, ipsa tempora
              aspernatur! Natus numquam iusto velit sunt quo, delectus mollitia
              temporibus quaerat quia repellendus earum voluptatibus.
            </p>
            <div className="flex justify-between w-full">
              <p className=" p-2 text-sm rounded-md bg-gradient-to-l from-[#D48345] to-[#472B15] text-white ">
                About us
              </p>
              <BsArrowRight className="text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
{
  /* <div className="relative -top-32 left-44 bg-white h-[400px] w-1/3">
<div className="absolute bottom-6 left-44 bg-orange-600 z-10 h-[250px] w-[550px] rounded-br-full"></div>
</div>
<div
className="w-[650px] h-[400px] absolute bottom-10 right-0 z-0  rounded-tr-full"
style={{
  background:
    "linear-gradient(135deg, #757575 0%, #695F55 28%,#413A34 60%,#332B24 100%)",
}}
>
<div className="absolute bottom-10 right-0">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
    quibusdam necessitatibus beatae, inventore ad alias perspiciatis
    eius vitae provident excepturi? Nisi, porro! Sapiente aspernatur
    numquam delectus? Culpa amet provident atque.
  </p>
</div>
</div> */
}

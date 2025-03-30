import Image from "next/image";
import React from "react";

function Service() {
  return (
    <div className=" flex mx-auto tablet:container px-2   tablet:!px-10 tablet:mb-32 mt-10 tablet:mt-32 mb-10 w-full">
      <div className="flex justify-between gap-10 w-full">
        <div className="tablet:w-64 tablet:h-96 mt-20" 
        >
          <Image
            src="/Service/service5.jpeg"
            width={900}
            alt="img"
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="tablet:w-72  tablet:h-96 tablet:block hidden">
          <Image
            src="/Service/service3.png"
            width={900}
            alt="img"
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="tablet:w-72 tablet:h-96">
          <Image
            src="/Service/service2.png"
            width={900}
            alt="img"
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="tablet:w-64 tablet:h-96 mt-20">
          <Image
            src="/Service/service4.jpeg"
            width={900}
            alt="img"
            height={900}
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default Service;

import React from "react";

function About() {
  return (
    <div className="h-screen  text-white w-full ">
      <div
        className={`relative h-[50vh] bg-slate-500 w-full bg-[url('/Service/background7.jpeg')] bg-center tablet:bg-fixed bg-cover bg-scroll flex flex-col items-center  justify-center
        bg-no-repeat `}
      >
        <div className="absolute w-full h-full left-0 top-0 bg-black/60 tablet:bg-black/30 "></div>
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
    </div>
  );
}

export default About;

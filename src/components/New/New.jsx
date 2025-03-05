import React from "react";

function New() {
  return (
    <div className="grid grid-cols-8 grid-rows-8 bg-slate-500 h-screen px-10">
      <div className="bg-red-300 col-start-1 col-end-5 row-start-2 row-span-6"></div>
      <div className="row-start-3 col-start-3 col-end-8 row-span-4 bg-blue-500 z-10 rounded-br-full"></div>
      <div className="row-span-8 col-start-4 col-end-9 row-start-3 row-end-9 bg-orange-500 rounded-tr-full"></div>
      <div className="row-span-2 col-start-5 col-end-8 row-start-7 row-end-8 bg-gray-500">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
          tempore accusantium, ullam laudantium aperiam est veniam accusamus
          eaque itaque velit asperiores obcaecati incidunt temporibus, atque
          repudiandae iste, iusto corporis nemo?
        </p>
      </div>
    </div>
  );
}

export default New;

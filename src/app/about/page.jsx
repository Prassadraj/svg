import React from "react";

const About = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center p-6"
      style={{ backgroundImage: "url('/AboutImgs/about2.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-10 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Design Qube</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Established in 2020, <span className="font-semibold text-gray-800">Design Qube</span> is a premier interior fit-out company based in Chennai, India. We operate an ultra-modern manufacturing facility spanning 9,000 sq. ft., enabling us to execute high-quality contracting and interior fit-out projects across major Indian cities.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          At Design Qube, we offer comprehensive solutions for Interior Design, Project Management, and Execution, catering to commercial, residential, and retail projects. Our mission is to develop, design, and implement innovative yet cost-effective solutions for projects of all sizes, whether it's a fresh design or a complete redesign to maximize usable space.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          Our dedicated team of supervisors and skilled workmen ensures that every project is executed efficiently and courteously. We have successfully delivered various interior design projects for corporate offices and individuals, providing end-to-end design and turnkey project solutions for multiple industries.
        </p>
      </div>
    </div>
  );
};

export default About;
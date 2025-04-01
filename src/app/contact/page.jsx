"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "sonner";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montmedium = Montserrat({ subsets: ["latin"], weight: ["600"] });
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
import Image from "next/image";
import { Montserrat, Newsreader } from "next/font/google";
import { IoMdCall, IoMdMail } from "react-icons/io";
import Footer from "@/components/Footer/Footer";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [messageLoading, setMessageLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageLoading(true);
    try {
      const response = await axios.post("/api/send-mail", formData);

      setMessageLoading(false);
      toast.success("SuccessFully Message Sent");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setMessageLoading(false);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className={`${mont.className}`}>
      {/* bannner  */}
      <div
        className={`relative h-[50vh] bg-slate-500 w-full bg-[url('/Service/background6.jpeg')] bg-center tablet:bg-fixed bg-cover bg-scroll flex flex-col items-center  justify-center
        bg-no-repeat tablet:mt-20`}
      >
        <div className="absolute w-full h-full left-0 top-0 bg-black/60 tablet:bg-black/60 "></div>
        <div className="flex flex-col gap-4 items-center  justify-center z-10">
          <h1 className="tablet:text-5xl text-2xl font-bold">
            Contact
            <span className="ml-2 text-transparent bg-title-gradient bg-clip-text">
              Us
            </span>
          </h1>
          <div
            className={`${montLight.className} flex gap-2 p-2 bg-black/40 rounded-lg tablet:text-lg text-xs`}
          >
            <p className="font-medium">Home</p>
            <p>&gt;</p>
            <p className="font-bold text-transparent bg-title-gradient bg-clip-text">
              Contact US
            </p>
          </div>
        </div>
      </div>
      {/* div2  */}
      <div className="mx-auto tablet:container px-2   tablet:!px-10 tablet:mt-20 mt-5 tablet:mb-32 mb-10">
        {/* Main img  */}
        <div className="flex flex-col gap-4  items-center tablet:mb-32 mb-10">
          <div className="w-full h-96 flex justify-center ">
            <Image
              src="/Contact/contact.png"
              width={900}
              height={900}
              alt="img"
              className="object-contain w-full"
              loading="lazy"
            />
          </div>
          <p
            className={`${montLight.className} text-2xl max-w-2xl text-center text-transparent bg-grey-gradient bg-clip-text`}
          >
            Have design questions? Reach out, and we’ll help bring your interior
            vision to life!
          </p>
        </div>
        {/* our location  */}
        <div className="flex flex-col-reverse items-center tablet:mb-32 mb-10 tablet:flex-row-reverse justify-center   w-full p-6 tablet:gap-10">
          {/* Left Side: Contact Form */}
          <div className="w-full tablet:w-[400px] flex flex-col gap-10 items-center  p-6  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31093.564760892772!2d80.151209!3d13.055038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261f3cfe7483d%3A0x9d81d83c1dc19bca!2sDesign%20Qube%20-%20believe%20in%20the%20best!5e0!3m2!1sen!2sin!4v1743220967608!5m2!1sen!2sin"
              width="400"
              height="400"
              className="p-6"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Side: Placeholder for Additional Content */}
          <div
            className={`w-full tablet:w-[400px] flex flex-col gap-4  rounded-lg p-6   ${news.className}`}
          >
            <div className="flex flex-col gap-1 tablet:text-5xl text-4xl text-center tablet:text-left">
              <h1 className={`  `}>
                Our{" "}
                <span className="bg-light-gradient bg-clip-text text-transparent inline-block">
                  Location
                </span>
              </h1>{" "}
            </div>
            <div
              className={`${montLight.className} flex flex-col gap-2 text-center tablet:text-left  text-transparent bg-grey-gradient bg-clip-text`}
            >
              <h1 className={`${montmedium.className} text-3xl`}>
                TM Interiors
              </h1>
              <p>
                1 ,first street <br />
                mandaveli ,chennai - 600028
              </p>
              <div className="flex items-center gap-1 justify-center tablet:justify-start">
                <IoMdCall className="text-white" />
                <span>:</span>{" "}
                <a href="tel:+91 909090909">
                  <span>9090909090</span>
                </a>{" "}
                <span>,</span>
                <a href="tel:+91 909090909">
                  <span>9090909090</span>
                </a>
              </div>{" "}
              <div className="flex items-center gap-1 justify-center tablet:justify-start">
                <IoMdMail className="text-white" />
                <span>:</span>
                <a href="mailto:tninteriors@gmail.com">
                  <span>tminteriors@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* contact form  */}
        <div className="flex flex-col-reverse tablet:flex-row justify-center   w-full p-6 tablet:gap-10">
          {/* Left Side: Contact Form */}
          <div className="w-full tablet:w-[400px] flex flex-col gap-10 items-center border shadow-gray-600 rounded-lg p-6  shadow-2xl">
            {messageLoading && (
              <div className="fixed top-0 left-0 h-screen w-full bg-black/50 z-50 flex justify-center items-center text-xl text-white">
                <FontAwesomeIcon icon={faRocketchat} /> Sending...
              </div>
            )}
            <div className="flex flex-col items-center">
              <h1>Logo</h1>
              <h1
                className={`${news.className} text-transparent bg-grey-gradient bg-clip-text text-4xl tablet:text-5xl text-center `}
              >
                Contact Us
              </h1>
            </div>

            <form
              onSubmit={handleSubmit}
              className={`w-full flex flex-col gap-4 text-white ${montLight.className}`}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-[7vh] outline-none text-base p-3 rounded-lg border border-gray-300 placeholder:white focus:ring-2  bg-transparent focus:ring-gray-400"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[7vh] outline-none text-base p-3 rounded-lg border border-gray-300 placeholder:white focus:ring-2 bg-transparent  focus:ring-gray-400"
                placeholder="Email Address"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-[7vh] outline-none bg-transparent text-base p-3 rounded-lg border border-gray-300  focus:ring-2 focus:ring-gray-400"
                placeholder="Phone Number"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Have anything to say..."
                className="h-[20vh] w-full pt-2 text-white text-base outline-none p-3 rounded-lg border border-gray-300 placeholder:white focus:ring-2  bg-transparent focus:ring-gray-400"
                required
              ></textarea>
              <div className="flex items-center justify-center">
                <button type="submit" className="btn-53">
                  <div className="original text-lg">Send</div>
                  <div
                    className={`letters text-base ${news.className} font-semibold`}
                  >
                    <span>S</span>
                    <span>e</span>
                    <span>n</span>
                    <span>d</span>
                  </div>
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Placeholder for Additional Content */}
          <div
            className={`w-full tablet:w-[400px] flex flex-col gap-6  rounded-lg p-6   ${news.className}`}
          >
            <div className="flex flex-col gap-1 tablet:text-4xl text-4xl text-center tablet:text-left">
              <h1
                className={`${news.className} text-transparent bg-light-gradient bg-clip-text  `}
              >
                10+
              </h1>
              <h1 className=" max-w-lg w-64">Years in the Industry</h1>
            </div>
            <div
              className={`${montLight.className} flex flex-col gap-4  text-transparent bg-grey-gradient bg-clip-text text-center tablet:text-left`}
            >
              <h1 className={`${montmedium.className} text-3xl`}>
                Let's Shape Your Dream Space
              </h1>
              <p>
                Connect with us today to explore how we can transform your
                interiors into a perfect blend of style, comfort, and
                functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Contact;

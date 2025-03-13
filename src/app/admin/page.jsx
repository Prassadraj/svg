"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";

function Admin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const [user, setUser] = useState([]);
  const [getUser, setGetUser] = useState({
    email: "",
    password: "",
  });
  const [project, setProject] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/login"); // <- THIS IS A GET REQUEST
        setUser(res.data.message[0]);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchProjectData = async () => {
      try {
        const res = await axios.get("/api/project"); // <- THIS IS A GET REQUEST
        setProject(res.data.message);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjectData();

    fetchData();
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn == "true") {
      localStorage.removeItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    }
  }, []);

  function handleLogin() {
    if (getUser.email === user.email && getUser.password === user.password) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      alert("invalid password or email");
    }
  }
  function handleLogout() {
    localStorage.removeItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  }

  return (
    // <div className="h-screen w-full flex ">
    //   {!isLoggedIn ? (
    //     <div className="flex flex-col justify-center items-center w-full gap-6 p-4">
    //       <h1 className="text-4xl mb-4 font-bold">Login</h1>

    //       {/* E-Mail Field */}
    //       <div className="flex items-center gap-4 w-full max-w-sm">
    //         <label htmlFor="email" className="w-24 text-right">
    //           E-Mail
    //         </label>
    //         <input
    //           type="text"
    //           id="email"
    //           onChange={(e) =>
    //             setGetUser((prev) => ({
    //               ...prev,
    //               email: e.target.value,
    //             }))
    //           }
    //           className="flex-1 px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
    //         />
    //       </div>

    //       {/* Password Field */}
    //       <div className="flex items-center gap-4 w-full max-w-sm relative">
    //         <label htmlFor="password" className="w-24 text-right">
    //           Password
    //         </label>

    //         <input
    //           type={showPassword ? "text" : "password"}
    //           id="password"
    //           onChange={(e) =>
    //             setGetUser((prev) => ({
    //               ...prev,
    //               password: e.target.value,
    //             }))
    //           }
    //           className="flex-1 p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 pr-10"
    //         />

    //         {/* Eye Icon */}
    //         <button
    //           type="button"
    //           onClick={togglePasswordVisibility}
    //           className="absolute right-3 text-gray-500 focus:outline-none"
    //         >
    //           {showPassword ? <FaEyeSlash /> : <FaEye />}
    //         </button>
    //       </div>

    //       {/* Optional: Add a button */}
    //       <button
    //         onClick={handleLogin}
    //         className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    //       >
    //         Login
    //       </button>
    //     </div>
    //   ) : (

    //   )}
    // </div>
    <>
      <div className="flex mt-24 justify-between items-center w-full tablet:px-10 px-2 mb-4">
        <div></div>
        <h1 className="tablet:text-2xl font-bold ">Welcome, Admin!</h1>
        <button
          onClick={handleLogout}
          className=" text-sm  p-1
          bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
      <div className="  px-10">
        <div className="flex gap-4">
          <div className="flex"></div>
        </div>
      </div>
    </>
  );
}

export default Admin;

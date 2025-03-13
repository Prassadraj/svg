"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Admin() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/login"); // <- THIS IS A GET REQUEST
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  console.log(user);
  return (
    <div className="h-screen w-full flex ">
      <div className="flex flex-col justify-center items-center w-full gap-6 p-4">
        <h1 className="text-4xl mb-4 font-bold">Login</h1>

        {/* E-Mail Field */}
        <div className="flex items-center gap-4 w-full max-w-sm">
          <label htmlFor="email" className="w-24 text-right">
            E-Mail
          </label>
          <input
            type="text"
            id="email"
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            className="flex-1 px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center gap-4 w-full max-w-sm relative">
          <label htmlFor="password" className="w-24 text-right">
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            id="password"
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            className="flex-1 p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 pr-10"
          />

          {/* Eye Icon */}
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 text-gray-500 focus:outline-none"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Optional: Add a button */}
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </div>
  );
}

export default Admin;

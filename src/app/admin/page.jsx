"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";

function Admin() {
  const [spinner, setSpinner] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [info, setInfo] = useState(false);
  const [deleteBtn, setDeleteBtn] = useState(false);
  const [edit, setEdit] = useState(false);

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
    // fetchProjectData

    fetchData();
    fetchProjectData();
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn == "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // 👇 Call the function inside useEffect
  const fetchProjectData = async () => {
    try {
      setSpinner(true);
      const res = await axios.get("api/data");
      setProject(res.data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setSpinner(false);
    }
  };
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
  async function handleInformation() {}

  const handleDeletion = async (id) => {
    try {
      const res = await axios.delete(`api/data?postId=${id}`);

      if (res.status === 200) {
        console.log("Deleted successfully:", res.data);
        setDeleteBtn(false);
        alert("deleted");
        setProject(project.filter((post) => post._id !== id));
        fetchProjectData();
        // Optionally update your UI or refetch data
      } else {
        console.log("Failed to delete:", res.data.message);
      }
    } catch (error) {
      console.error("Error deleting:", error.response?.data || error.message);
    }
  };
  async function handleUpdate() {}

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
        <h1 className="tablet:text-2xl font-bold ">Welcome, !</h1>
        <button
          onClick={handleLogout}
          className=" text-sm  p-1
          bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
      <div className="  px-2 tablet:px-10">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">No.</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Modify</th>
            </tr>
          </thead>
          <tbody>
            {spinner ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-white">
                  Loading...
                </td>
              </tr>
            ) : (
              <>
                {project && project.length > 0 ? (
                  <>
                    {project.map((val, i) => (
                      <tr key={i} className="text-xs tablet:text-sm">
                        <td className="border border-gray-300 px-4 ">
                          {i + 1}
                        </td>
                        <td className="border border-gray-300 px-4 ">
                          {val.name}
                        </td>
                        <td className="border border-gray-300 px-4 line-clamp-2">
                          {val.desc}
                        </td>
                        <td className="border border-gray-300 px-4 w-32">
                          <div className="flex items-center gap-4 text-lg">
                            <CiEdit
                              title="Edit"
                              onClick={() => setEdit((prev) => !prev)}
                              className="cursor-pointer"
                            />
                            <MdDelete
                              title="Delete"
                              onClick={() => {
                                setDeleteBtn(true);
                                setDeleteId(val._id);
                              }}
                              className="cursor-pointer text-red-500"
                            />
                            <IoMdInformationCircleOutline
                              onClick={() => setInfo((prev) => !prev)}
                              title="Info"
                              className="cursor-pointer text-blue-500"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <>
                    <tr>
                      <td colSpan="4" className="text-center py-4 text-white">
                        No data
                      </td>
                    </tr>
                  </>
                )}
                {/* {project?.project.map((val, i) => (
                  <tr key={i} className="text-xs tablet:text-sm">
                    <td className="border border-gray-300 px-4 ">{i + 1}</td>
                    <td className="border border-gray-300 px-4 ">{val.name}</td>
                    <td className="border border-gray-300 px-4 line-clamp-2">
                      {val.desc}
                    </td>
                    <td className="border border-gray-300 px-4 w-32">
                      <div className="flex items-center gap-4 text-lg">
                        <CiEdit
                          title="Edit"
                          onClick={() => setEdit((prev) => !prev)}
                          className="cursor-pointer"
                        />
                        <MdDelete
                          title="Delete"
                          onClick={() => {
                            setDeleteBtn(true);
                            setDeleteId(val._id);
                          }}
                          className="cursor-pointer text-red-500"
                        />
                        <IoMdInformationCircleOutline
                          onClick={() => setInfo((prev) => !prev)}
                          title="Info"
                          className="cursor-pointer text-blue-500"
                        />
                      </div>
                    </td>
                  </tr>
                ))} */}
              </>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit info  */}
      {edit && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="relative bg-gray-200 w-80 text-black h-80 p-4 rounded-md justify-center flex flex-col items-center gap-4">
            {/* cancel btn  */}
            <button
              onClick={() => setEdit((prev) => !prev)}
              className="text-white absolute -top-5 -right-5 text-xl"
            >
              X
            </button>
            <div className=" flex items-center gap-2">
              <label htmlFor="name" className="w-20">
                Title
              </label>
              <input type="text" className="rounded-sm" />
            </div>
            <div className=" flex items-center gap-2">
              <label htmlFor="name" className="w-20">
                Description
              </label>
              <textarea
                placeholder="Write your Description here..."
                className="border border-gray-300 rounded-md p-2 w-full h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex w-full justify-center items-center ">
              <input type="file" className="text-xs" />
              <button className="bg-green-700 text-sm text-white rounded-md p-2">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {/*  info  */}
      {info && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="relative bg-gray-200 tablet:w-1/2 w-full text-black h-fit p-4 rounded-md  flex flex-col  gap-4">
            {/* cancel btn  */}
            <button
              onClick={() => setInfo((prev) => !prev)}
              className="tablet:text-white right-2 top-2 absolute tablet:-top-5 tablet:-right-5 text-xl "
            >
              X
            </button>
            <div className=" flex  gap-2">
              <label htmlFor="name" className="w-20">
                Title:
              </label>
              <p>title1</p>
            </div>
            <div className=" flex  gap-2 ">
              <label htmlFor="name" className="w-20">
                Description:
              </label>
              <p className="h-fit ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                sunt quas rem magnam quos voluptas doloremque debitis architecto
                sit? Perspiciatis sequi magni omnis harum odit explicabo magnam
                repellat neque voluptates! lore
              </p>
            </div>
            <div className="flex w-full justify-center items-center ">
              <input type="file" className="text-xs" />
            </div>
          </div>
        </div>
      )}
      {/* deleteBtn */}
      {deleteBtn && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 z-50 flex justify-center items-center">
          <div
            className="relative bg-gray-400  text-black h-fit p-4 rounded-md 
           flex gap-4"
          >
            {" "}
            <button
              onClick={() => setDeleteBtn(false)}
              className="text-white absolute -top-5 -right-5 text-xl "
            >
              X
            </button>
            <p
              className="p-2 bg-[green] text-white"
              onClick={() => setDeleteBtn(false)}
            >
              {" "}
              Cancel
            </p>
            <p
              className="p-2 bg-[red] text-white cursor-pointer"
              onClick={() => handleDeletion(deleteId)}
            >
              {" "}
              Delete
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Admin;

"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Image from "next/image";

function Admin() {
  const [spinner, setSpinner] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [info, setInfo] = useState(false);
  const [deleteBtn, setDeleteBtn] = useState(false);
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState(false);

  const [project, setProject] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    img: [],
    imgUrl: [],
    complete: false,
  });
  const [newData, setNewData] = useState({
    name: "",
    desc: "",
    img: [],
    imgUrl: [],
    complete: false,
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const [user, setUser] = useState([]);
  const [getUser, setGetUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/login", { cache: "no-store" });
        setUser(res.data.message[0]);
      } catch (err) {
        console.log(err);
      }
    };
    //  fetchProjectData

    fetchData();
    fetchProjectData();
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn == "true") {
      setIsLoggedIn(true);
    }
  }, []);
  console.log(user);
  //  👇 Call the function inside useEffect
  const fetchProjectData = async () => {
    setSpinner(true);
    try {
      const res = await fetch("/api/data", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("went wrong");
      }
      const data = await res.json();

      setProject(data.data);
    } catch (err) {
      console.log(err);
    }
    setSpinner(false);
  };
  useEffect(() => {
    const filterData = project?.find((val) => val._id == currentId);
    const imgs = filterData?.img || [];
    setFormData({
      name: filterData?.name || "",
      desc: filterData?.desc || "",
      img: [...imgs],
      imgUrl: [...imgs],
      complete: filterData?.complete || false,
    });
  }, [currentId, project]);

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
  async function handleSave(e) {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", newData.name);
    fd.append("desc", newData.desc);
    fd.append("complete", newData.complete ? "true" : "false");
    newData.img.forEach((imgUrl) => fd.append("img", imgUrl));
    try {
      await axios.post("/api/data", fd);
      fetchProjectData();
      alert("Posted");
      setSave(false);

      newData.name = "";
      newData.desc = "";
      newData.img = [];
      newData.imgUrl = [];
    } catch (error) {
      alert("not post");
    }
  }

  const handleDeletion = async (id) => {
    const confirmed = confirm("Are you Sure");
    if (confirmed) {
      try {
        await axios.delete(`/api/data?postId=${id}`);
        setProject((prev) => prev?.filter((data) => data._id !== id));
      } catch (error) {
        alert("went wrong");
      }
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("desc", formData.desc);

    fd.append("complete", formData.complete ? "true" : "false");
    formData.img.forEach((imgUrl) => fd.append("img", imgUrl));
    try {
      await axios.put(`/api/data?postId=${currentId}`, fd);
      fetchProjectData();
      setEdit(false);
      alert("updated");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      {!isLoggedIn ? (
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
                setGetUser((prev) => ({
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
                setGetUser((prev) => ({
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
          <button
            onClick={handleLogin}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>
      ) : (
        <>
          <div className="flex mt-24 justify-between items-center w-full tablet:px-10 px-2 mb-4">
            <div
              onClick={() => setSave((prev) => !prev)}
              className="cursor-pointer bg-green-700 p-2 rounded-md "
            >
              Create +
            </div>
            <h1 className="tablet:text-2xl font-bold ">Welcome, Admin !</h1>
            <button
              onClick={handleLogout}
              className=" text-sm  p-1
            bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
          <div className="  px-2 tablet:px-10 ">
            <table className="table-auto border-collapse border border-gray-300 w-full">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">No.</th>
                  <th className="border border-gray-300 px-4 py-2">Title</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Description
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Project</th>

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
                            <td className="border border-gray-300 px-4 text-center">
                              {i + 1}
                            </td>
                            <td className="border border-gray-300 px-4 text-center">
                              {val.name}
                            </td>
                            <td className="border border-gray-300 px-4 line-clamp-2">
                              {val.desc}
                            </td>
                            <td className="border border-gray-300 px-4 text-center">
                              {val.complete ? "Completed" : "OnGoing"}
                            </td>
                            <td className="border border-gray-300 px-4 w-32">
                              <div className="flex items-center gap-4 text-lg">
                                <CiEdit
                                  title="Edit"
                                  onClick={() => {
                                    setEdit((prev) => !prev);
                                    setCurrentId(val._id);
                                  }}
                                  className="cursor-pointer"
                                />
                                <MdDelete
                                  title="Delete"
                                  onClick={() => {
                                    setDeleteBtn(true);
                                    handleDeletion(val._id);
                                  }}
                                  className="cursor-pointer text-red-500"
                                />
                                <IoMdInformationCircleOutline
                                  onClick={() => {
                                    setInfo((prev) => !prev);
                                    setCurrentId(val._id);
                                  }}
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
                          <td
                            colSpan="4"
                            className="text-center py-4 text-white"
                          >
                            No data
                          </td>
                        </tr>
                      </>
                    )}
                  </>
                )}
              </tbody>
            </table>
          </div>
          {/* save */}
          {save && (
            <div className="fixed inset-0 bg-black/40 bg-opacity-50 z-50 flex justify-center items-center p-2">
              <div className="relative bg-gray-200 w-full tablet:w-10/12 text-black p-4 rounded-md justify-center flex flex-col items-center gap-4">
                {/* Cancel button */}
                <button
                  onClick={() => setSave(false)}
                  className="text-white absolute -top-5 -right-5 text-xl"
                >
                  X
                </button>

                <div className="flex flex-col gap-4 w-full">
                  <div className="flex items-center gap-2">
                    <label htmlFor="name" className="w-20">
                      Title
                    </label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setNewData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      value={newData.name}
                      className="rounded-sm p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="description" className="w-20">
                      Description
                    </label>
                    <textarea
                      value={newData.desc}
                      onChange={(e) =>
                        setNewData((prev) => ({
                          ...prev,
                          desc: e.target.value,
                        }))
                      }
                      placeholder="Write your description here..."
                      className="border border-gray-300 rounded-md p-2 w-full h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <label htmlFor="project" className="w-20">
                      Project:
                    </label>
                    <input
                      type="checkbox"
                      checked={newData.complete}
                      onChange={(e) =>
                        setNewData((prev) => ({
                          ...prev,
                          complete: e.target.checked,
                        }))
                      }
                    />
                  </div>

                  <div className="flex w-full gap-2 items-center">
                    <input
                      type="file"
                      multiple
                      onChange={(e) => {
                        const files = Array.from(e.target.files);
                        if (files.length > 0) {
                          const imgUrls = files.map((file) =>
                            URL.createObjectURL(file)
                          );
                          setNewData((prev) => ({
                            ...prev,
                            img: [...prev.img, ...files],
                            imgUrl: [...prev.imgUrl, ...imgUrls],
                          }));
                        }
                      }}
                      className="text-xs"
                    />

                    <div>
                      <p className="text-sm mb-2">Selected Image Preview:</p>
                      {newData.img.length > 0 ? (
                        <div className="grid tablet:grid-cols-6 grid-cols-3 gap-2">
                          {newData.imgUrl.map((url, index) => (
                            <div key={index} className="w-20 h-20 relative">
                              <Image
                                src={url}
                                width={900}
                                height={900}
                                alt="Preview"
                                className="object-cover w-full h-full border border-gray-300"
                              />
                              <p
                                onClick={() =>
                                  setNewData((prev) => {
                                    const img = prev.img.filter(
                                      (_, i) => i !== index
                                    );
                                    const imgUrl = prev.imgUrl.filter(
                                      (_, i) => i !== index
                                    );
                                    return {
                                      ...prev,
                                      img,
                                      imgUrl,
                                    };
                                  })
                                }
                                className="absolute -top-1 -right-3 text-black bg-white rounded-full px-1 cursor-pointer z-10"
                              >
                                X
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>No image selected</p>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSave}
                  className="bg-green-700 text-sm text-white rounded-md p-2"
                >
                  Save
                </button>
              </div>
            </div>
          )}

          {/* Edit info  */}
          {edit && (
            <div className="fixed inset-0 bg-black/40 bg-opacity-50 z-50 flex justify-center items-center p-2">
              <div className="relative bg-gray-200 w-full tablet:w-10/12 text-black p-4 rounded-md justify-center flex flex-col items-center gap-4">
                {/* cancel btn  */}
                <button
                  onClick={() => setEdit(false)}
                  className="text-white absolute -top-5 -right-5 text-xl"
                >
                  X
                </button>

                <div className="flex flex-col gap-4 w-full">
                  <div className=" flex items-center gap-2">
                    <label htmlFor="name" className="w-20">
                      Title
                    </label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      value={formData.name}
                      className="rounded-sm"
                    />
                  </div>
                  <div className=" flex items-center gap-2">
                    <label htmlFor="name" className="w-20">
                      Description
                    </label>
                    <textarea
                      value={formData.desc}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          desc: e.target.value,
                        }))
                      }
                      placeholder="Write your Description here..."
                      className="border border-gray-300 rounded-md p-2 w-full h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <label htmlFor="name" className="w-20">
                      Project:
                    </label>
                    <input
                      type="checkbox"
                      checked={formData.complete}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          complete: e.target.checked,
                        }))
                      }
                    />
                  </div>
                  <div className="flex w-full justify-between items-center ">
                    <input
                      multiple
                      type="file"
                      onChange={(e) => {
                        const file = Array.from(e.target.files);

                        if (file.length) {
                          const imgUrl = file.map((file) =>
                            URL.createObjectURL(file)
                          );

                          setFormData((prev) => ({
                            ...prev,
                            img: [...prev.img, ...file],
                            imgUrl: [...prev.imgUrl, ...imgUrl],
                          }));
                        }
                      }}
                      className="text-xs"
                    />
                    <div className="">
                      <p className="text-sm mb-2">Selected Image Preview:</p>
                      <div className="flex gap-2 items-center">
                        {formData.img ? (
                          formData?.imgUrl.map((val, i) => (
                            <div className="relative" key={i}>
                              <div
                                className="text-black top-2 right-2 cursor-pointer"
                                onClick={() =>
                                  setFormData((prev) => {
                                    const newImgs = prev.img.filter(
                                      (_, index) => index !== i
                                    );
                                    const newImgUrls = prev.imgUrl.filter(
                                      (_, index) => index !== i
                                    );
                                    return {
                                      ...prev,
                                      img: newImgs,
                                      imgUrl: newImgUrls,
                                    };
                                  })
                                }
                              >
                                X
                              </div>
                              <img
                                src={val}
                                alt="Preview"
                                className="w-32 h-32 object-cover border border-gray-300"
                              />
                            </div>
                          ))
                        ) : (
                          <p>No image selected</p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={handleUpdate}
                      className="bg-green-700 text-sm text-white rounded-md p-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/*  info  */}
          {info && (
            <div className="fixed inset-0 bg-black/40 bg-opacity-50 z-50 flex justify-center items-center">
              <div className="relative bg-gray-200 tablet:w-1/2 w-full text-black h-fit p-4 rounded-md  flex flex-col  gap-4">
                <button
                  onClick={() => setInfo((prev) => !prev)}
                  className="tablet:text-white right-2 top-2 absolute tablet:-top-5 tablet:-right-5 text-xl "
                >
                  X
                </button>

                <div className="flex flex-col gap-4 w-full">
                  <div className="flex gap-2">
                    <label htmlFor="name" className="w-20">
                      Title:
                    </label>
                    <p>{formData.name}</p>
                  </div>
                  <div className="flex gap-2">
                    <label htmlFor="desc" className="w-20">
                      Description:
                    </label>
                    <p className="h-fit">{formData.desc}</p>
                  </div>
                  <div className="flex gap-2">
                    <label htmlFor="desc" className="w-20">
                      Project:
                    </label>
                    <p className="h-fit ">
                      {formData.complete == true ? "Completed" : "OnGoing"}
                    </p>
                  </div>
                  <div className="flex justify-center w-full">
                    {formData.img &&
                      formData.img.map((val, i) => (
                        <img
                          key={i}
                          src={val}
                          alt="Project Preview"
                          className="w-32 h-32 object-cover  rounded-md border"
                        />
                      ))}
                  </div>
                </div>

                {/* cancel btn  */}
              </div>
            </div>
          )}
          {/* deleteBtn */}
          {/* {deleteBtn && (
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
        )} */}
        </>
      )}
    </div>
  );
}

export default Admin;

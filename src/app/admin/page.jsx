"use client";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash, FaEdit, FaPlus, FaArrowLeft } from "react-icons/fa";
import Modal from "./modal";

export default function AdminPosts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [posts, setPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch posts on load
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      content,
      tags: tags.split(",").map((tag) => tag.trim()),
      imageUrl,
    };

    try {
      let response;
      if (editingPostId) {
        response = await fetch(`/api/posts/?postId=${editingPostId}`, {
          method: "PATCH",
          body: JSON.stringify(data),
        });
      } else {
        response = await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify(data),
        });
      }

      if (response.ok) {
        toast.success(
          editingPostId ? "Post updated successfully!" : "Post added successfully!"
        );
        setTitle("");
        setContent("");
        setTags("");
        setImageUrl("");
        setEditingPostId(null);
        setIsModalOpen(false);

        // Fetch updated posts
        const updatedPosts = await fetch("/api/posts").then((res) => res.json());
        setPosts(updatedPosts);
      } else {
        const errorText = await response.text();
        toast.error("Error adding/updating post: " + errorText);
      }
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(`/api/posts/?postId=${postId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Post deleted successfully!");
        setPosts(posts.filter((post) => post._id !== postId));
      } else {
        toast.error("Error deleting post");
      }
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  const handleEditPost = (post) => {
    setEditingPostId(post._id);
    setTitle(post.title);
    setContent(post.content);
    setTags(post.tags.join(", "));
    setImageUrl(post.imageUrl);
    setIsModalOpen(true);
  };

  const handleAddPost = () => {
    setEditingPostId(null);
    setTitle("");
    setContent("");
    setTags("");
    setImageUrl("");
    setIsModalOpen(true);
  };

  const handleBack = () => {
    window.history.back();
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen p-8">
      <ToastContainer />
      <br></br>
      <br></br>
      <header className="mb-8 flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-4xl font-semibold">Manage Posts</h1>
        </div>
        <div className="flex">
          <button
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-2 rounded-md shadow-lg transform hover:scale-105 transition-all duration-300 ml-4 flex items-center"
            onClick={handleAddPost}
          >
            <FaPlus className="mr-2" /> Add New Post
          </button>
          <button
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-2 rounded-md shadow-lg transform hover:scale-105 transition-all duration-300 ml-4 flex items-center"
            onClick={handleBack}
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
        </div>
      </header>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded text-black transform transition-transform duration-300 hover:scale-75 hover:z-10 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mt-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <li
              key={post._id}
              className="border p-4 rounded relative transform transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10 overflow-hidden"
            >
              <div className="flex items-center justify-center space-x-4 absolute top-0 right-2 bottom-0">
                <FaEdit
                  onClick={() => handleEditPost(post)}
                  className="cursor-pointer text-blue-500 text-2xl"
                />
                <FaTrash
                  onClick={() => handleDeletePost(post._id)}
                  className="cursor-pointer text-blue-500 text-2xl"
                />
              </div>
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p>{post.content.slice(0, 100)}...</p>
              <p className="text-sm text-gray-600">
                Tags: {post.tags.join(", ")}
              </p>
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-40 object-cover mt-2 rounded"
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded text-black"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded text-black"
            rows="6"
            required
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-2 border rounded text-black"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-2 border rounded text-black"
          />
          {imageUrl && (
            <img src={imageUrl} alt="Preview" className="w-full h-40 object-cover mt-2 rounded" />
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            {editingPostId ? "Update Post" : "Add Post"}
          </button>
        </form>
      </Modal>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "@material-tailwind/react";
import Nav from "../AdminNav";
import {
  addBlog,
  deleteBlog,
  fetchAllBlogs,
} from "../../redux/action/adminAction";

const Blog = () => {
  const blogs = useSelector((state) => state.adminDetails.blogs || []);
  console.log("B", blogs);
  const dispatch = useDispatch();
  const cloudinaryRef = useRef();
  const [imageLinks, setImageLinks] = useState([]);

  const [user, setUser] = useState({
    title: "",
    content: "",
    author: "",
    image: [],
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const blogData = { ...user, image: imageLinks };
    dispatch(addBlog(blogData));
    setUser({
      title: "",
      content: "",
      author: "",
      image: [],
      imageLinks: [],
    });
    setImageLinks([]);
  };

  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
  }, []);

  const uploadImage = (e) => {
    e.preventDefault();

    if (!cloudinaryRef.current) {
      console.error("Cloudinary not initialized");
      return;
    }

    const widgetRef = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dgiw5xfpq",
        uploadPreset: "gwjd8x4l",
      },
      function (error, result) {
        if (result.event === "success") {
          setImageLinks((prevLinks) => [...prevLinks, result.info.secure_url]);
        }
      }
    );

    widgetRef.open();
  };

  return (
    <>
      <Nav />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-center text-gray-900">
            All Blogs
          </h1>
        </div>
      </header>
      <div className="relative ml-10 mr-10 overflow-x-auto shadow-md sm:rounded-lg m-20">
        {blogs.length > 0 ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Author name
                </th>
                <th scope="col" className="px-6 py-3">
                  Title of Blog
                </th>
                <th scope="col" className="px-6 py-3">
                  Content of Blog
                </th>
                <th scope="col" className="px-6 py-3">
                  Blog Images
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((user) => (
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.author}
                  </td>
                  <td className="px-6 py-4">{user.title}</td>
                  <td className="px-6 py-4 ">{user.content}</td>
                  <td className="px-6 py-4">
                    {user && user.image ? (
                      <Carousel
                        className="rounded-xl h-36 w-44"
                        navigation={({
                          setActiveIndex,
                          activeIndex,
                          length,
                        }) => (
                          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                              <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                  activeIndex === i
                                    ? "w-8 bg-white"
                                    : "w-4 bg-white/50"
                                }`}
                                onClick={() => setActiveIndex(i)}
                              />
                            ))}
                          </div>
                        )}
                      >
                        <>
                          {user.image.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`Blog Image ${index + 1}`}
                              className="h-36 w-44 object-cover"
                            />
                          ))}
                        </>
                      </Carousel>
                    ) : (
                      <>
                        <h1>No image</h1>
                      </>
                    )}
                  </td>
                  <td className="flex items-center px-6 py-4 space-x-3">
                    <button
                      onClick={() => dispatch(deleteBlog(user._id))}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Delete Blog
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1 className="text-center font-bold">No Blog Found</h1>
        )}
      </div>
      <div className="relative p-6 flex-auto">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-blueGray-600 text-sm font-bold mb-2"
            >
              Author
            </label>

            <input
              type="text"
              id="author"
              name="author"
              value={user.author}
              onChange={(e) => setUser({ ...user, author: e.target.value })}
              className="bg-white focus:outline-none focus:shadow-outline border border-blueGray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-blueGray-600 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={user.title}
              onChange={(e) => setUser({ ...user, title: e.target.value })}
              className="bg-white focus:outline-none focus:shadow-outline border border-blueGray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-blueGray-600 text-sm font-bold mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              type="text"
              value={user.content}
              onChange={(e) => setUser({ ...user, content: e.target.value })}
              rows="5"
              className="bg-white focus:outline-none focus:shadow-outline border border-blueGray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              required
            ></textarea>
            <div className="flex items-center justify-center gap-10 m-5">
              {imageLinks.map((link, index) => (
                <img
                  key={index}
                  src={link}
                  alt={`Product Image ${index + 1}`}
                  className="w-60 h-60"
                />
              ))}
            </div>
            <button
              type="button"
              className="bg-slate-700 hover:bg-slate-800 p-2 text-white rounded"
              onClick={uploadImage}
            >
              Upload Image
            </button>
          </div>
          <button
            type="submit"
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg"
          >
            Add Blog
          </button>
        </form>
      </div>
    </>
  );
};

export default Blog;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlogs } from "../../redux/action/adminAction";
import NavbarComp from "../../Navbar/Navbar";
import { Link } from "react-router-dom";

const Blogpage = () => {
  const blogs = useSelector((state) => state.adminDetails.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);

  return (
    <>
      <NavbarComp />
      <header className="bg-white shadow mb-10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-center text-gray-900">
            All Blogs
          </h1>
        </div>
      </header>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <Link to={`/blogs/${blog._id}`} key={blog._id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <img src={blog.image[0]} alt={blog.title} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h1 className="text-xl font-semibold mb-2">{blog.title}</h1>
                  <p className="text-gray-700 line-clamp-4">{blog.content}</p>
                  <p className="text-gray-500 mt-2">By: {blog.author}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Blogpage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarComp from "../../Navbar/Navbar";

const SingleBlogPage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogById = async () => {
      try {
        const response = await axios.get(`/api/blogs/${blogId}`);
        const data = response.data;
        setBlog(data.blog);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogById();
  }, [blogId]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const { title, content, author, image } = blog;

  // Split content into paragraphs with a minimum length
  const MIN_PARAGRAPH_LENGTH = 400;
  const paragraphs = [];
  let currentParagraph = '';
  
  content.split(' ').forEach(word => {
    if (currentParagraph.length < MIN_PARAGRAPH_LENGTH) {
      currentParagraph += word + ' ';
    } else {
      paragraphs.push(currentParagraph.trim());
      currentParagraph = word + ' ';
    }
  });

  if (currentParagraph) {
    paragraphs.push(currentParagraph.trim());
  }

  // Insert images randomly between paragraphs
  const contentWithImages = paragraphs.map((paragraph, index) => {
    if (index !== paragraphs.length - 1) {
      return (
        <React.Fragment key={index}>
          <p className="text-lg text-gray-700 mb-4">{paragraph}</p>
          <img
            src={image[index % image.length]}
            alt={`Image ${index + 1} for ${title}`}
            className="mx-auto rounded-lg shadow-md my-6 h-[20rem] w-[40rem]"
          />
        </React.Fragment>
      );
    } else {
      return <p className="text-lg text-gray-700 mb-4" key={index}>{paragraph}</p>;
    }
  });

  return (
    <>
      <NavbarComp />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-500 mb-2">
          By: <span className="font-bold text-purple-600">{author}</span>
        </p>
        <div>{contentWithImages}</div>
      </div>
    </>
  );
};

export default SingleBlogPage;

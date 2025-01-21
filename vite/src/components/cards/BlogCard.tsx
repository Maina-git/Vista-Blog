import React from "react";


interface BlogCardProps {
    title: string;
    content: string;
    author: string;
    category: string;
    createdAt: string;
  }


const BlogCard: React.FC<BlogCardProps>= ({
    title,
    content,
    author,
    category,
    createdAt
}) => {
  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Blog Image */}
      <img
        src="/images/student-865073_1280.jpg"
        alt="Blog"
        className="w-full h-100 object-cover"/>

      {/* Category Tag */}
      <span className="inline-block mt-4 ml-4 px-3 py-1 text-sm font-medium text-white bg-red-400 rounded-full">
        {category}
      </span>

      {/* Blog Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-pink-700 mb-2 hover:text-blue-500 transition-colors duration-200">
         {title}
        </h1>
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {content}
        </p>
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-600 transition-colors duration-300">
          Read More
        </button>
      </div>

      {/* Author and Timestamp */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-100">
        <div>
          <h1 className="text-sm font-bold text-gray-800">Author:{author}</h1>
        </div>
        <p className="text-sm text-gray-500">{createdAt}</p>
      </div>
    </div>
  );
};
export default BlogCard;


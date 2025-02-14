
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDatabase } from "../../context/addDatabaseContext";
import { auth } from "../../config/Firabse";

interface BlogCardProps {
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: string;
  image: string;
  //id:string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  content,
  author,
  category,
  createdAt,
  image,
  
}) => {
  const { deleteBlog } = useDatabase();

  return (
    <div  className="w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img src={image} alt="Blog" className="w-full h-100 object-cover" />
      <div className="flex justify-between">
        <span className="inline-block mt-4 ml-4 px-3 py-1 text-sm font-medium text-white bg-red-400 rounded-full">
          {category}
        </span>
        {
auth.currentUser?.email?.charAt(0) === "blogId"    && (  <button onClick={() => deleteBlog("blogId")} className="mx-10">
          <AiFillDelete className="text-red-500" size={24} />
        </button>
)}
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-pink-700 mb-2 hover:text-blue-500 transition-colors duration-200">
          {title}
        </h1>
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {content}
        </p>
      </div>
      <div className="flex items-center justify-between px-6 py-4 bg-gray-100">
        <div>
          <h1 className="text-sm font-bold text-gray-800">Author: {author}</h1>
        </div>
        <p className="text-sm text-gray-500">{createdAt}</p>
      </div>
    </div>
  );
};

export default BlogCard;














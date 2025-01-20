import React, { useEffect, useState } from "react";
import { db } from "../../config/Firabse";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { auth } from "../../config/Firabse";

// Define the Blog interface
interface Blog {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: Timestamp; // Correct type for Firestore dates
  likedByMe: boolean;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch blogs from the Firestore database
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, "blogs");
        const querySnapshot = await getDocs(blogsCollection);

        const fetchedBlogs: Blog[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || "Untitled",
            content: data.content || "No content available.",
            category: data.category || "Uncategorized",
            createdAt: data.createdAt || Timestamp.now(), // Handle missing timestamps gracefully
            likedByMe: false,
          };
        }) as Blog[];

        setBlogs(fetchedBlogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Handle like toggle
  const toggleLike = (id: string) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id ? { ...blog, likedByMe: !blog.likedByMe } : blog
      )
    );
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="w-full h-8 bg-gray-300 rounded-lg mb-6 animate-pulse"></h1>
        <div className="w-full h-[300px] bg-gray-300 rounded-lg my-4 animate-pulse"></div>
        <div className="w-full h-[300px] bg-gray-300 rounded-lg my-4 animate-pulse"></div>
        <div className="w-full h-[300px] bg-gray-300 rounded-lg my-4 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">All Blogs</h1>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col md:flex-row items-center w-full h-auto bg-white rounded-lg shadow-lg my-4 overflow-hidden"
          >
            {/* Display the first letter of the author's email */}
            <div className="p-4 bg-gray-200 rounded-full text-center font-bold text-lg text-gray-800">
              {auth.currentUser?.email
                ? auth.currentUser.email.charAt(0).toUpperCase()
                : "?"}
            </div>

            {/* Blog Image */}
            <img
              src="/images/blog-2355684_1280.jpg"
              alt="Blog Thumbnail"
              className="w-full md:w-1/3 h-48 object-cover"
            />

            {/* Blog Content */}
            <div className="p-6 flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4">{blog.content}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600 font-medium">
                  Category: {blog.category}
                </span>
                <span className="text-sm text-gray-500">
                  {blog.createdAt.toDate().toLocaleDateString()} {/* Format date */}
                </span>
              </div>
              <button
                onClick={() => toggleLike(blog.id)}
                className={`mt-4 px-4 py-2 rounded ${
                  blog.likedByMe
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } hover:shadow-lg transition`}
              >
                {blog.likedByMe ? "Unlike" : "Like"}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No blogs available.</p>
      )}
    </div>
  );
};

export default Blogs;

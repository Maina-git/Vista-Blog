import React from 'react'
import BlogCard from '../cards/BlogCard';
import { db } from '../../config/Firabse';
import { getDocs, query, where } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { useState } from 'react';
import { Timestamp } from 'firebase/firestore';
import { useEffect } from 'react';

interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: Timestamp;
}



const Culture:React.FC = () => {
const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);




  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, "blogs");
const q=query(blogsCollection, where("category", "==", "Culture"))
        const querySnapshot = await getDocs(q);

        const fetchedBlogs: Blog[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || "Untitled",
            content: data.content || "No content available.",
            author: data.author || "Unknown",
            category: data.category || "Uncategorized",
            createdAt: data.createdAt || Timestamp.now(),
          };
        });

        setBlogs(fetchedBlogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <>
      <div className="w-full h-[400px] rounded-lg bg-white m-2 animate-pulse"></div>
      <div className="w-full h-[400px] rounded-lg bg-white m-2 animate-pulse"></div>
      <div className="w-full h-[400px] rounded-lg bg-white m-2 animate-pulse"></div>
    </>
    )
  }

  if (blogs.length === 0) {
    return <p>No blogs found.</p>;
  }

  return (
    <div>
       <h1 className="text-3xl font-bold text-pink-700 m-2">Culture Blogs</h1>
       {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          content={blog.content}
          author={blog.author}
          category={blog.category}
          createdAt={blog.createdAt.toDate().toLocaleDateString()}
        />
      ))}
    </div>
  )
}

export default Culture;

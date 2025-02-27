import React, { useState, useEffect } from 'react';
import BlogCard from '../cards/BlogCard';
import { db } from '../../config/Firabse';
import { getDocs } from 'firebase/firestore';
import { collection, Timestamp } from 'firebase/firestore';
import { BLOGSINTERFACE } from '../../interface/BlogsInterface';

interface Blog {
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: Timestamp;
  image: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, 'blogs');
        const querySnapshot = await getDocs(blogsCollection);

        const shuffledImages = [...BLOGSINTERFACE].sort(() => Math.random() - 0.5);

        const fetchedBlogs: Blog[] = querySnapshot.docs.map((doc, index) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || 'Untitled',
            image: shuffledImages[index % shuffledImages.length]?.img || '', 
            content: data.content || 'No content available.',
            author: data.author || 'Unknown',
            category: data.category || 'Uncategorized',
            createdAt: data.createdAt || Timestamp.now(),
          };
        });

        setBlogs(fetchedBlogs);
      } catch (err) {
        console.error('Error fetching blogs:', err);
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
    );
  }

  if (blogs.length === 0) {
    return <p>No blogs found.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold text-pink-700 m-2">ALL Blogs</h1>
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          image={blog.image}
          content={blog.content}
          author={blog.author}
          category={blog.category}
          createdAt={blog.createdAt.toDate().toLocaleDateString()}
        />
      ))}
    </div>
  );
};

export default Blogs;











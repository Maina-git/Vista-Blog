import React, { useState, useEffect } from 'react';
import BlogCard from '../cards/BlogCard';
import { db } from '../../config/Firabse';
import { getDocs, query, where } from 'firebase/firestore';
import { collection, Timestamp } from 'firebase/firestore';
import { CULTUREINTERFACE } from '../../interface/CultureInterface';

interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: Timestamp;
  image: string;
}

const Culture: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, 'blogs');
        const q = query(blogsCollection, where('category', '==', 'Culture'));
        const querySnapshot = await getDocs(q);

        // Shuffle the CULTUREINTERFACE array to assign unique images
        const shuffledImages = [...CULTUREINTERFACE].sort(() => Math.random() - 0.5);

        const fetchedBlogs: Blog[] = querySnapshot.docs.map((doc, index) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || 'Untitled',
            image: shuffledImages[index % shuffledImages.length]?.img || '', // Assign unique image
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
    <div>
      <h1 className="text-3xl font-bold text-pink-700 m-2">Culture Blogs</h1>
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
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

export default Culture;

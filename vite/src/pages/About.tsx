import React from "react";

const About: React.FC = () => {
  return (
    <>
 <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg text-center mt-10">
      <img
        src="/images/myimage.jpg"
        alt="Profile"
        className="w-24 h-24 mx-auto rounded-full border-4 border-pink-500"
      />
      <h1 className="text-xl font-bold text-gray-800 mt-4">Francis Mainaa</h1>
      <p className="mt-2 px-4 py-1 bg-pink-600 rounded-lg text-white font-bold">Front-End Developer</p>
      <p className="text-gray-700 mt-4">
        Passionate about building interactive and user-friendly web applications with modern
        technologies like React, TypeScript, and Tailwind CSS.
      </p>
    </div>

    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">About Blog Vista</h1>
      <p className="text-gray-700 leading-7">
        <strong>Blog Vista</strong> is a modern blogging platform built using{" "}
        <span className="text-blue-500">React, TypeScript, Tailwind CSS,</span> and{" "}
        <span className="text-blue-500">Firebase Firestore</span>. It enables users to share their
        favorite blogs and explore content from other bloggers.
      </p>
      <h2 className="text-2xl font-semibold mt-6 text-pink-600">Key Features:</h2>
      <ol className="list-disc list-inside text-gray-600 mt-2">
        <li>Create and publish your own blogs</li>
        <li>Read blogs posted by other users</li>
        <li>Personalized profile with avatar and bio</li>
        <li>Firebase Firestore for secure data storage</li>
      </ol>
      <p className="mt-4 text-gray-700">
        Whether you're a passionate writer or an eager reader, Blog Vista provides a seamless and
        engaging experience to explore and share stories with the world.
      </p>
    </div>
    </>
  );
};

export default About;

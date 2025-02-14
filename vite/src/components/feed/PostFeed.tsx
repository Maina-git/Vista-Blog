import React from 'react';
import { useDatabase } from '../../context/addDatabaseContext';

const PostFeed: React.FC = () => {
  const { title, content, category, setTitle, setContent, setCategory, handleSave, isSaving } = useDatabase();

  const categories = ["Sports", "Culture", "IT & Tech", "World", "Health", "Growth"];

  return (
    <div className="w-full p-2 h-auto bg-gray-200 rounded-lg flex flex-col m-2 items-center justify-center shadow-lg">
      <div className="flex flex-wrap gap-3 mb-6 justify-center">
        {categories.map((cat) => (
          <label
            htmlFor={cat}
            className={`flex items-center gap-2 px-3 py-2 ${
              category === cat ? "bg-gray-100 text-white" : "bg-gray-200 text-gray-700"
            } rounded-full shadow-sm cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-all text-sm md:text-base`}
            key={cat}>
            <input
              type="radio"
              name="category"
              id={cat}
              value={cat}
              checked={category === cat}
              onChange={() => setCategory(cat)}
              className="hidden"/>
            <span className="font-medium">{cat}</span>
          </label>
        ))}
      </div>
      <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden w-full max-w-4xl p-4 md:p-6">
        <form className="flex flex-col space-y-4" onSubmit={handleSave}>
          <input
            type="text"
            placeholder="Blog Title Goes Here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 text-lg md:text-2xl font-semibold text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            aria-label="Blog Title"/>
          <textarea
            placeholder="Write your blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-32 md:h-40 p-3 text-sm md:text-lg text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none shadow-sm"
            aria-label="Blog Content"></textarea>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
            <button
              type="submit"
              disabled={isSaving}
              className={`w-full md:w-auto px-6 py-3 ${
                isSaving ? "bg-blue-300" : "bg-blue-500"
              } text-white font-semibold rounded-lg shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all`}>
              {isSaving ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={() => {
                setTitle('');
                setContent('');
                setCategory('');
              }}
              className="w-full md:w-auto px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostFeed;






















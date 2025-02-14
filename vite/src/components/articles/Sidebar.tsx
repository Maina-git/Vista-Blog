import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi"; 

interface SidebarProps {
  Categories: { id: number; name: string; path: JSX.Element; icon: JSX.Element }[];
  onBlogsClick: (blogPath: JSX.Element) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ Categories, onBlogsClick, setIsOpen, isOpen }) => {
  return (
    <>
      <button
        className="fixed top-[80px] left-5 p-3 bg-pink-600 text-white rounded-full shadow-lg z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}>
        <FiMenu size={24} />
      </button>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}/>
      )}

      <div className={`fixed top-0 left-0 w-4/5 sm:w-2/3 md:w-1/4 h-screen bg-gray-200 p-4 shadow-lg z-50
                      transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                      transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
        
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-pink-700">Blog Categories</h1>
          <button 
            className="md:hidden p-2 text-white bg-pink-600 rounded-full"
            onClick={() => setIsOpen(false)}>✖</button>
        </div>

        <ul className="flex flex-col gap-3">
          {Categories.map((category) => (
            <li 
              key={category.id}
              className="flex items-center gap-3 py-3 px-4 text-pink-700 text-lg bg-white rounded-lg 
                         hover:bg-gray-100 transition cursor-pointer"
              onClick={() => { 
                onBlogsClick(category.path); 
                setIsOpen(false);
              }}>
              {category.icon}
              {category.name}
            </li>
          ))}
        </ul>
        <div className="md:hidden absolute bottom-5 left-5">
          <Link to="/p" className="text-pink-600 flex items-center gap-2">
            <CgProfile size={28} />
            <span>Profile</span>
          </Link>
        </div>
        <div className="hidden md:block absolute bottom-5 left-5">
          <Link to="/p" className="text-pink-600 flex items-center gap-2">
            <CgProfile size={28} />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;















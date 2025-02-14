import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Create Post', path: '/c' },
    { id: 3, name: 'About', path: '/a' },
  ];

  return (
    <div className="bg-gray-200 p-5 rounded flex justify-between items-center md:flex-row flex-col md:px-10">
    
      <div className="flex justify-between w-full md:w-auto items-center">
        <h1 className="text-xl font-bold text-pink-700">Vista Blog</h1>
        <button 
          className="md:hidden text-pink-700" 
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div 
        className={`md:flex md:items-center md:gap-10 ${menuOpen ? 'flex flex-col gap-5 mt-4 absolute h-[90vh] w-full bg-black text-center items-center justify-center top-10' : 'hidden'}`}>
        {navItems.map((item) => (
          <Link 
            className="text-pink-700 text-xs md:text-base" 
            key={item.id} 
            to={item.path}
            onClick={() => setMenuOpen(false)}>
            {item.name}
          </Link>
        ))}
      </div>

      <div className="md:flex items-center hidden">
        <input 
          className="border rounded px-3 py-1" 
          placeholder="Search Blog News" 
          type="text"/>
        <button className="bg-blue-500 text-white outline-none border-0 px-3 py-1 ml-2">Search</button>
      </div>
    </div>
  );
};
export default Navbar;
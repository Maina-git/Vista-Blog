import React from 'react';

interface SidebarProps {
  Categories: { id: number; name: string; path: JSX.Element; icon: JSX.Element }[];
  onBlogsClick: (blogPath: JSX.Element) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ Categories, onBlogsClick }) => {
  return (
    <div className="w-1/4 h-screen rounded m-2 bg-gray-200 p-4">
      <h1 className="my-2 text-xl font-bold text-pink-700">Blog Categories</h1>
      
      <ul className="flex flex-col gap-5">
        {Categories.map((category) => (
          <li 
            key={category.id}
            className="flex item-center gap-5 cursor-pointer py-2 px-5 text-pink-700 text-xs font-bold bg-white rounded-lg hover:bg-gray-100"
            onClick={() => onBlogsClick(category.path)}>
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

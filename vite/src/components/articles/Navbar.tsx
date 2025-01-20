import React from 'react'
import { Link } from 'react-router-dom'


const Navbar:React.FC = () => {


const navItems=[
  {
    id:1,
    name:"Home",
    path:"/"
  },
  {
    id:2,
    name:"Create Post",
    path:"/c"
  },
  {
    id:3,
    name:"About",
    path:""
  }
];

  return (
    <div className="mx-2 bg-gray-200 p-5 rounded flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-700">Vista Blog</h1>
        <div className="flex items-center justify-center  gap-10">
          {
            navItems.map((item)=>(
              <Link className="text-pink-700 text-xs" key={item.id} to={item.path}>{item.name}</Link>
            ))
           }
        </div>
        <div className="flex items-center">
            <input className="border rounded px-3 py-1" placeholder='Search Blog News' type="text" />
            <button className="bg-blue-500 text-pink-700 outline-none border-0 px-3 py-1">Search</button>
        </div>      
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'


const Navbar:React.FC = () => {
  return (
    <div className="mx-2 bg-white p-5 rounded flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-500">Vista Blog</h1>
        <div className="flex items-center justify-center  gap-10">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/c" className="text-blue-500">Create Post</Link>
        </div>
        <div className="flex items-center">
            <input className="border rounded px-3 py-1" placeholder='Search Blog News' type="text" />
            <button className="bg-blue-500 text-white outline-none border-0 px-3 py-1">Search</button>
        </div>      
    </div>
  )
}

export default Navbar

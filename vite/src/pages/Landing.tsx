import React from 'react'
import { useAuth } from '../context/authContext';

interface Props{
  setAuth:(setAuth:boolean)=>void
}

const Landing:React.FC <Props>= ({setAuth}) => {
const {logOut}=useAuth();


  return (
    <div className="w-full h-screen bg-violet flex items-center justify-center">
      <button onClick={logOut} className="absolute top-5 right-10 m-10 bg-white px-5 py-2 rounded-md cursor-pointer text-violet">Sign Out</button>
    <h1 className="text-5xl text-white text-center p-10 font-bold">Welcome To  Frank designs where you can explore your favourite design for your desktop and your mobile</h1>
    </div>
  )
}

export default Landing;


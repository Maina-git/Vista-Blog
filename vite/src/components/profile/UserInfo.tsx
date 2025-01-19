import React from 'react';
import { auth } from '../../config/Firabse';
import { useAuth } from '../../context/authContext';


const UserInfo: React.FC = () => {
  const {logOut}=useAuth();
  return (
    <div className="p-10 flex flex-col items-center bg-white shadow-lg rounded-lg max-w-md mx-auto">

      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center font-bold text-3xl rounded-full">
          {auth.currentUser?.email?.charAt(0).toUpperCase() || 'U'}
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">
          {auth.currentUser?.displayName || 'User Name'}
        </h2>
        <p className="text-gray-500">
          {auth.currentUser?.email || 'user@example.com'}
        </p>
      </div>
    
      <div className="mt-6 w-full bg-gray-100 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700">About You</h3>
        <p className="mt-2 text-gray-600  text-xs">
          Welcome to your profile feed! Here, you can see and manage your account information.
        </p>
      </div>


      <div className="flex gap-4 mt-6">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Edit Profile
        </button>
        <button onClick={logOut} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserInfo;


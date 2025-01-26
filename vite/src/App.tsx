//import React from 'react'
import Login from './pages/Login';
import { useState } from 'react';
import Home from './pages/Home';
import { AuthProvider } from './context/authContext';
import Navbar from './components/articles/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { DatabaseProvider } from './context/addDatabaseContext';
//import Blogs from './components/blogpages/Blogs';
//import Sidebar from './components/articles/Sidebar';
import CreatePost from './pages/CreatePost';




const App = () => {

  const [auth, setAuth]=useState<boolean>(false);


if(auth) return <AuthProvider setAuth={setAuth}><Login/></AuthProvider>


  return (
    <div>
      <AuthProvider setAuth={setAuth}>
        <DatabaseProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/c" element={<CreatePost/>}/>
        </Routes>
      </Router>
      </DatabaseProvider>
      </AuthProvider>
    </div>
  )
}
export default App;

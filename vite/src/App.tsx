import React from 'react'
import Login from './pages/Login';
import { useState } from 'react';
import Home from './pages/Home';
import { AuthProvider } from './context/authContext';
import Navbar from './components/articles/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { DatabaseProvider } from './context/addDatabaseContext';
import CreatePost from './pages/CreatePost';
import ProfileFeedB from './components/feed/ProfilefeedB';
import { useEffect } from 'react';
import About from './pages/About';



const App:React.FC = () => {

const [auth, setAuth] = useState<boolean>(() => {
  return localStorage.getItem('auth') === 'true';
});

useEffect(() => {
  localStorage.setItem('auth', String(auth));
}, [auth]);


if(!auth) return <AuthProvider setAuth={setAuth}><Login/></AuthProvider>

  return (
    <div>
      <AuthProvider setAuth={setAuth}>
        <DatabaseProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/c" element={<CreatePost/>}/>
          <Route path="/p" element={<ProfileFeedB/>}/>
          <Route  path="/a" element={<About/>}/>
        </Routes>
      </Router>
      </DatabaseProvider>
      </AuthProvider>
    </div>
  )
}
export default App;

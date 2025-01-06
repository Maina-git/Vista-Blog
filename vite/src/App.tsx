import React from 'react'
import Login from './pages/Login';
import { useState } from 'react';
import Home from './pages/Home';
import { AuthProvider } from './context/authContext';

const App = () => {


const [auth, setAuth]=useState<boolean>(false);

if(!auth) return <AuthProvider setAuth={setAuth}> <Login/> </AuthProvider>

  return (
    <div>
      <AuthProvider setAuth={setAuth}>
        <Home/>
      </AuthProvider>
    </div>
  )
}


export default App;

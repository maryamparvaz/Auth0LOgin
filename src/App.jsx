import React from 'react';
import './App.css'
import { useAuth0 } from "@auth0/auth0-react";
import Logout from './components/logout';
import Login from './components/login';
import Profile from './components/profile';
function App() {
  return (
    <main className='w-full h-[100vh] flex justify-center items-center'>
      <Loginpage />
    </main>
  )
}
function Loginpage() {
  const { isAuthenticated, isLoading, error } = useAuth0();
  return (
    <div className='w-[450px]  bg-box flex flex-wrap justify-center p-5'>
      {isAuthenticated ? <h1 className='text-white text-[34px] font-bold w-full flex justify-center mb-4'>Logout</h1> : <h1 className='text-white text-[34px] font-bold w-full flex justify-center mb-4'>Login</h1>}
      {error && <div>Error</div>}
      {!error && isLoading && <div>Loading...</div>}
      {!error && !isLoading && (
        <>
          <Profile />
          <Login />
          <Logout />
        </>
      )}
    </div>
  )
}

export default App

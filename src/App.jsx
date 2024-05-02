import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './routes/Signup'
import Login from './routes/Login'
import Notes from './routes/Notes'
import Home from './routes/Home'

function App() {
  
  const handleLogout = ()=>{
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <>
    <button onClick={handleLogout}>Logout</button>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/notes' element={<Notes />}/>
        <Route />
    </Routes>
    </>
  )
}

export default App

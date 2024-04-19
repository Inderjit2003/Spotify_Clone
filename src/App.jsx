import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from './Component/Home'
import Login from './AuthComp/Login'
import Signup from './AuthComp/Signup'
import LHome from './HomeComponent/LHome'
import Search from './HomeComponent/Search.jsx'
import Hello from './yy/Hello.jsx'
export default function App() {
  
  return (
    <>
    <div>
    <BrowserRouter>
    <div className='w-screen h-screen'>
   
     <Routes>
        <Route path='/' element = {<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path ="/Home" element = { <LHome />} />

        <Route path='/Search' element={<Search /> } />
        <Route path='/Hello' element={<Hello /> } />

    </Routes>
     </div>
    </BrowserRouter>
    </div>
    </>
  )
}

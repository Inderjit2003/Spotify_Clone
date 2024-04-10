import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from './Component/Home'
import Login from './AuthComp/Login'
import Signup from './AuthComp/Signup'
import LHome from './Component/LHome'
// import L from './Component/L'
import S from './Component/S'


export default function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    <div className='w-screen h-screen'>
   
     <Routes>
     <Route path='/s' element={<S />} />
        {/* <Route path='/' element={<L />} /> */}
        <Route path='/' element = {<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Home' element={<LHome />} />
    </Routes>
     </div>
    </BrowserRouter>
    </div>
    </>
  )
}

import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Signupphone from './Component/Signupphone'

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
        <Route path='/phone' element={<Signupphone />} />     {/* signup using phone number */}
     </Routes>
     </div>
    </BrowserRouter>
    </div>
    </>
  )
}

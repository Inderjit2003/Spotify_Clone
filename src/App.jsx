import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from './Component/Home'

export default function App() {
  return (
    <>
    <div>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}></Route>
     </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route}from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from "./pages/Contact.jsx";
import Aboutme from "./pages/Aboutme.jsx";
import Projects from "./pages/Projects.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Myroutes/>
)

function Myroutes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Aboutme' element={<Aboutme/>}/>
        <Route path='/Projects' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>


  )
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route}from 'react-router-dom'
import Home from './pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Myroutes/>
)

function Myroutes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>

  )
}
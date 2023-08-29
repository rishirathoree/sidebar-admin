import React from 'react'
import Navbar from './components/Navbar'
import 'boxicons/css/boxicons.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './App/Home/Home'
import Sidebar from './components/Sidebar'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Sidebar />
    <Home/>
    </BrowserRouter>
    </>
  )
}

export default App

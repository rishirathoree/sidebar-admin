import React from 'react'
import Navbar from '../../components/Navbar'
import {  Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Breadcrumbs from '../../components/Breadcrumbs'
const Home = () => {  
  return (
    <>
    <div className='overflow-hidden lg:ml-[288px] md:ml-[288px] sm:ml-0 mt-[59px] max-h-full min-h-screen'>
      <Navbar />
      <Breadcrumbs />
      <Routes>
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </div>
    </>
  )
}

export default Home

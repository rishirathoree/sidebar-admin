import React, { useEffect, useRef } from 'react'
import pfp from '../../src/assets/images/pfp.png'
const Navbar = () => {
  return (
    <div className='fixed border-b border-dashed z-50 bg-white top-0 right-0 flex items-center justify-between lg:px-8 md:px-8 sm:px-4 py-4 lg:w-[calc(100%-288px)] md:w-[calc(100%-288px)] sm:w-full'>
      <span>
        <span>
          <p className='font-bold text-sm'>Good Morning, James</p>
          <p className='font-medium text-gray-400 text-[10px]'>Welcome to Aerobotics Dashboard</p>
        </span>
      </span>
      
      <span className='flex items-center space-x-4'>
        
          <span>
          <span className='block relative group rounded-md'>
          <i className='bx bx-bell'></i>
          <div className='w-80 rounded-lg shadow-black/5 bounce-effect ring-1 ring-black/5 shadow-lg opacity-0 z-50 group-hover:opacity-100 invisible group-hover:visible absolute h-60 group-hover:h-80  top-10 after:w-full after:h-4 after:opacity-0 after:bg-black after:-top-4 after:right-0 after:absolute right-0 bg-white'></div>
          </span>
          </span>

          <span>
          <span className='block relative group rounded-md'>
          <i className='bx bx-chat'></i>
          <div className='w-80 rounded-lg shadow-black/5 bounce-effect ring-1 ring-black/5 shadow-lg opacity-0 z-50 group-hover:opacity-100 invisible group-hover:visible absolute h-60 group-hover:h-80  top-10 after:w-full after:h-4 after:opacity-0 after:bg-black after:-top-4 after:right-0 after:absolute right-0 bg-white'></div>
          </span>
          </span>

          <span>
          <span className='block relative group rounded-md'>
          <span className='block w-6 h-6 rounded-full overflow-hidden peer'><img src={pfp} className='w-full h-full object-fill' alt="" /></span>
          <div className='w-60 rounded-lg shadow-black/5 bounce-effect ring-1 ring-black/5 shadow-lg opacity-0 z-50 group-hover:opacity-100 invisible group-hover:visible absolute max-h-0 duration-100 group-hover:max-h-[400px] overflow-hidden top-10 after:w-full after:h-4 after:opacity-0 after:bg-black after:-top-4 after:right-0 after:absolute right-0 bg-white'>
          {/* my profiles content */}
          <span className='p-4 border-b-[1px] border-black/5 border-dashed inline-flex items-center justify-between gap-4'>
            <span className='block w-12 h-12 rounded shadow ring-1 ring-black/5 shadow-black/5 overflow-hidden'><img src={pfp} className='w-full h-full object-cover' alt="" /></span>
            <span className='block'>
              <p className='font-semibold text-right text-[12px] text-gray-400'>Rishi Rathore</p>
              <p className='font-light lowercase text-right text-[10px] text-gray-400'>Rishirathoree3@gmail.com</p>
            </span>
          </span>

          <span className='w-full border-b-[1px] border-black/5 border-dashed inline-flex items-start justify-between flex-col'>
          <p className='font-medium text-gray-500 duration-100 cursor-pointer hover:bg-gray-50 text-[12px] w-full h-full py-2 px-4'>My Projects</p>
          <p className='font-medium text-gray-500 duration-100 cursor-pointer hover:bg-gray-50 text-[12px] w-full h-full py-2 px-4'>Subscriptions</p>
          <p className='font-medium text-gray-500 duration-100 cursor-pointer hover:bg-gray-50 text-[12px] w-full h-full py-2 px-4'>My statements</p>
          </span>

          <span className='w-full border-b-[1px] border-black/5 border-dashed inline-flex items-start justify-between flex-col'>
          <p className='font-medium text-gray-500 duration-100 cursor-pointer hover:bg-gray-50 text-[12px] w-full h-full py-2 px-4'>Setting</p>
          <p className='font-medium text-gray-500 duration-100 cursor-pointer hover:bg-gray-50 text-[12px] w-full h-full py-2 px-4'>Change Langauge</p>
          </span>

          <span className='w-full border-b-[1px] border-black/5 border-dashed inline-flex items-start justify-between flex-col'>
          <p className='font-medium text-gray-500 duration-100 cursor-pointer hover:bg-gray-50 text-[12px] w-full h-full py-2 px-4'>Logout</p>
          </span>

          </div>
          </span>
          </span>

      </span>
    </div>
  )
}

export default Navbar

// const navss = useRef()
// useEffect(()=>{console.log(navss.current.offsetHeight)},[])
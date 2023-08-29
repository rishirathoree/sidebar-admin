import React, { useEffect, useRef } from 'react'

const Navbar = () => {
  return (
    <div className='fixed border-b border-dashed bg-white top-0 right-0 flex items-center justify-end lg:px-20 md:px-12 sm:px-4 lg:w-[calc(100%-288px)] md:w-[calc(100%-288px)] sm:w-full'>

        <div className='flex items-center p-[13px] space-x-8'>

          <span className='block group relative '>
          <i className='bx bx-chat'></i>
          <div className='w-80 rounded-lg shadow-black/5 bounce-effect ring-1 ring-black/5 shadow-lg opacity-0 z-50 group-hover:opacity-100 invisible group-hover:visible absolute h-60 group-hover:h-80 duration-200 top-10 after:w-full after:h-4 after:opacity-0 after:bg-black after:-top-4 after:right-0 after:absolute right-0 bg-white'></div>
          </span>

          <span className='block relative  w-8 h-8 group rounded-md bg-blue-500'>
          <div className='w-80 rounded-lg shadow-black/5 bounce-effect ring-1 ring-black/5 shadow-lg opacity-0 z-50 group-hover:opacity-100 invisible group-hover:visible absolute h-60 group-hover:h-80 duration-200 top-10 after:w-full after:h-4 after:opacity-0 after:bg-black after:-top-4 after:right-0 after:absolute right-0 bg-white'></div>
          </span>

        </div>
    </div>
  )
}

export default Navbar

// const navss = useRef()
// useEffect(()=>{console.log(navss.current.offsetHeight)},[])
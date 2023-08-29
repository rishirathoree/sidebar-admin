import React, { useEffect, useRef } from 'react'

const Navbar = () => {
  const navmenus = ['Product', 'Resources','Solution','Blog']
  const navss = useRef()
  useEffect(()=>{console.log(navss.current.offsetHeight)},[])
  return (
    <>
    <div ref={navss} className='flex items-center justify-between w-full top-0 right-0 fixed lg:px-20 md:px-12 sm:px-4 py-4'>
        <span><p className='font-semibold text-lg tracking-tight'>Boxsol</p></span>
        <ul className=' lg:flex md:hidden sm:hidden items-center space-x-8'>
        {navmenus.map((item,idx)=>{
          return(
        <li className='underline-anime'><p className='font-medium text-black/50 text-[12px]'>{item}</p></li> 
          )
        })}
        </ul>
      <div className='space-y-[3px] lg:hidden md:block sm:block'>
        <span className='block bg-black w-4 h-[2px]'></span>
        <span className='block bg-black w-2 h-[2px]'></span>
        <span className='block bg-black w-4 h-[2px]'></span>
      </div>
      <span className=' lg:flex md:hidden sm:hidden items-center space-x-6'>
        <button className='font-semibold text-white text-[10px] bg-black px-4 py-2 rounded'>Start for free</button>
      </span>
    </div>
    </>
  )
}

export default Navbar





// 100 height
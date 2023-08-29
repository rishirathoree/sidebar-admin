import React from 'react'
import { useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
    const location = useLocation()
    const route = location.pathname
    const multipleRoutes = location.pathname.split('/').filter(route=>route !== '')
  return (
    <>
    <div className='p-4 bg-white'>
        <p className='font-extrabold text-[12px]'>Dashboard</p>
        <span className='block space-x-4'>
        <span className={`inline-block font-semibold capitalize relative min-w-max text-gray-700 text-[12px] after:absolute after:w-1 after:h-1 after:rounded-full after:bg-gray-600 after:top-[6px] after:-right-2 ${multipleRoutes.length ? 'after:opacity-100' : 'after:opacity-0'}`}>Dashboard</span>
        {multipleRoutes?.map((item,idx)=>{
            return(
                <span className='inline-block capitalize font-semibold relative min-w-max text-gray-700 text-[12px] after:absolute after:w-1 after:h-1 after:rounded-full after:bg-gray-600 after:top-[6px] after:-right-2'>{item}</span>
            )
        })}
        </span>
    </div>
    </>
  )
}

export default Breadcrumbs

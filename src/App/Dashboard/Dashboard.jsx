import React from 'react'

const Dashboard = () => {
  return (
    <>
    <div className='p-8 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {Array(10).fill(1).map((item,idx)=>{
            return(
                <div className='bg-white shadow-lg shadow-black/5 h-80 rounded-lg'></div>
            )
        })}
    </div>
    </>
  )
}

export default Dashboard

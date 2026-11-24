import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img  className='w-150' src="https://i.pinimg.com/originals/cc/4d/aa/cc4daa9d54c97a1badec1f0fd9a327dc.gif" alt="pagenotfound" />
      <p className='text-2xl font-medium'>Oh no!</p>
      <p>The page you are looking for is not available</p>
      <Link to={'/'} className='bg-black text-white mt-3 px-5 py-2'>Home</Link>
    </div>
  )
}

export default PageNotFound

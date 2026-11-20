import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {
  const [toggle,seToggle] = useState(false)

  return (
    <>
      <Header/>
      <div className='flex flex-col justify-center items-center my-5'>
        <h1 className='text-3xl  my-5 font-bold'>All Books</h1>
        <div className='my-5'>
          <input type="text" className='border border-gray-300 w-100 p-2 rounded' placeholder='Search by book title ' />
          <button className='bg-blue-800 text-white p-2 ms-2 rounded'>Search</button>

        </div>

      </div>
      {/* grid */}
      <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10'>
        {/* filter */}
        <div className='col-span-1'>
          <div className='flex justify-between'>
            <h1 className='font-bold text-2xl '>Filter</h1>
            <button onClick={()=>seToggle(!toggle)} className='text-2xl md:hidden'><FaBars/></button>

          </div>
          {/* filter category */}
         <div className={toggle ? 'block' : 'hidden md:block'}>
           <div className='mt-3'>
             <input name='filter' type="radio" id='no-filter'/>
            <label htmlFor="no-filter" className='ms-2'>All</label>
           </div>
           {/* duplicate */}
            <div className='mt-3'>
             <input name='filter' type="radio" id='no-filter'/>
            <label htmlFor="no-filter" className='ms-2'>Category</label>
           </div>

          </div>

        </div>
        {/* book card */}
        <div className='col-span-3'>
          <div className='md:grid grid-cols-4'>
            {/* duplicate according to books */}
            <div className='shadow rounded p-3 m-4'>
              <img width={'100%'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLsr1tZXC6NAq16vzgprF9nukG7PpQjsuNMTVj6fcew&s=10" alt="bookcard" />
              <div className='flex flex-col justify-center items-center mt-4'>
                <h2 className='text-blue-700 font-bold txt-xl'>Author</h2>
                <h3 className='text-lg mt-2'>Title</h3>
                <Link to={'/books/:id'} className='bg-blue-800 text-white p-2 rounded mt-2 font-bold '>View Book</Link>
                
              </div>

            </div>

          </div>

        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Books

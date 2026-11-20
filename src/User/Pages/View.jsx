import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaBackward, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function View() {
  return (
    <>
      <Header/>
      <div className='md:m-10 m-5'>
        <div className='border shadow border-gray-200 p-5'>
          {/* grid */}
          <div className='md:grid grid-cols-4 gap-x-10'>
            {/* image */}
            <div className='col-span-1'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLsr1tZXC6NAq16vzgprF9nukG7PpQjsuNMTVj6fcew&s=10" alt="" />

            </div>
            <div className='col-span-3'>
              <div className='flex justify-between'>
               <h3 className='font-bold text-2xl'>Title</h3>
               <button > <FaEye/> </button>
              </div>
              <h2 className='text-blue-700 font-bold mt-2'>Author</h2>
              <div className='md:grid grid-cols-3 gap-10 my-10'>
                <p className='font-bold'>Publisher :</p>
                <p className='font-bold'>Language :</p>
                <p className='font-bold'>No. of Pages :</p>
                <p className='font-bold'>Category :</p>
                <p className='font-bold'>ISBN :</p>
                <p className='font-bold'>Original Price :</p>
                                <p className='font-bold'>Seller :</p>

              </div>
              <div className='my-4 md:my-10'>
                <h4 className='font-bold text-2xl'>Abstract :</h4>
              </div>
              <div className='flex justify-end'>
                <Link to={'/books'} className='bg-blue-900 text-white p-2 font-bold flex items-center rounded'><FaBackward className='me-2'/></Link>
                <button className='bg-green-900 p-2 text-white font-bold ms-3 rounded'>Buy 89$</button>

              </div>

            </div>

          </div>

        </div>
        {/* modal */}
        <div className=' relative z-10 overflow-y-auto'>
          <div className='bg-gray-500/75 fixed inset-0'>
          <div className='flex justify-center items-center min-h-screen'>
            <div className='bg-white rounded w-100 md:w-250'>
              {/* modal title */}
              <div className='bg-black text-white p-3'>
                <h2>Book Images</h2>

              </div>

            </div>

          </div>

          </div>

        </div>

      </div>
      <Footer/>
    </>
  )
}

export default View

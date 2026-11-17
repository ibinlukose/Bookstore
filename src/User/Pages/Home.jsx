import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaSearch } from 'react-icons/fa'

function Home() {
  return (
    <div>
      <Header/>
      {/* hero section */}
      <div style={{height:"600px"}} className='flex flex-col bg-[url(/landing.png)] bg-cover text-white' >
      <div style={{height:"600px",backgroundColor:"rgba(0, 0, 0, 0.48)"}} className='w-full flex flex-col justify-center items-center' >
        <h1 className='text-6xl font-bold my-3 '>Wonderful Gifts</h1>
        <p>Gift your family and friends a book</p>
        <div className='mt-9 flex items-center' >
          <input type="text"  placeholder='search a book' className='bg-white text-black rounded-3xl w-100 p-2' />
          <FaSearch className='text-gray-500 cursor-ponter' style={{marginLeft:"-40px"}} />

        </div>

      </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Home

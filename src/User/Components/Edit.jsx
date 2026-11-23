import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
  const [offCanvas,SetOffCanvas] = useState(false)
  return (
    <div>
      {/* button */}
      <button onClick={()=>SetOffCanvas(true)} className='bg-black text-white font-bold p-2 flex items-center justify-center rounded hover:bg-white hover:text-black border'>
       <FaPen className='me-2'/> EDIT
      </button>
      {/* offcanvas */}
      {
        offCanvas&&
     
     <div>
       <div className='bg-gray-500/75 inset-0 fixed w-full h-full '></div>
      <div className='bg-white h-full z-50 fixed w-90 top-0 left-0'>
        {/* head */}

      
      <div className='flex justify-between items-center mb-5 bg-black text-white p-3 text-2xl'>
        <h1>Update User Profile</h1>
        <FaX onClick={()=>SetOffCanvas(false)} />
      </div>
      {/* body */}
      <div className='flex flex-col justify-center items-center my-5'>
        <label htmlFor="userProfile">
          <input type="file" id='userProfile' hidden/>
          <img style={{height:"100px",width:'100px',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1YM3dx3reFLZOUbvkGRZJ5PQDbMo76y6E52Y_aALrXA&s" alt="user" />
       <button style={{marginLeft:'60PX',marginTop:'-25px'}} className='bg-black text-white px-2 py-2 z-52 rounded fixed'><FaPen/></button>
        </label>
        {/* username */}
        <div className=' mb-3 -full px-5'>
        <input type="text" placeholder='username' className='w-full rounded p-2 bg-gray-100' />
        </div>
        {/* password */}
        <div className='mb-3 -full px-5'>
        <input type="text" placeholder='username' className='w-full rounded p2 bg-gray-100' />
        </div>
        {/* new password */}
        <div className=' mb-3 -full px-5'>
        <input type="text" placeholder='username' className='w-full rounded p-2 bg-gray-100' />
        </div>
        {/* bio */}
        <div className=' mb-3 -full px-5'>
        <input type="text" placeholder='username' className='w-full rounded p-2 bg-gray-100' />
        </div>
        {/* reset update */}
        <div className='flex justify-end mt-5 px-5 w-full'>
        <button className='bg-yellow-600 text-white px-5 py-2 font-bold rounded'>RESET</button>
                <button className='bg-green-600 ms-3 text-white px-5 py-2 font-bold rounded'>UPDATE</button>

        </div>
      </div>
      </div>
     </div>
      }
    </div>
  )
}

export default Edit

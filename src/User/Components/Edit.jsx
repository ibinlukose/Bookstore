import React from 'react'
import { FaPen } from 'react-icons/fa'

function Edit() {
  return (
    <div>
      {/* button */}
      <button className='bg-black text-white font-bold p-2 flex items-center justify-center rounded hover:bg-white hover:text-black border'>
       <FaPen className='me-2'/> EDIT
      </button>
      {/* offcanvas */}
    </div>
  )
}

export default Edit

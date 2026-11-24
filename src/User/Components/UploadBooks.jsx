import React from 'react'
import { FaPlus } from 'react-icons/fa'

function UploadBooks() {
  return (
    <div className='bg-gray-300 p-10 my-20 mx-10'>
        <h1 className='font-medium text-center text-3xl  '>Upload Books Details</h1>
        {/* grid */}
        <div className='md:grid grid-cols-2 mt-10 w -full'>
            {/* 1st section */}
            <div className='px-5'>
                <div className='mb-3'>
                    <input type="text" placeholder='Book Title ' className='w-full p-2 bg-white rounded ' />
                </div>

                 <div className='mb-3'>
                    <input type="text" placeholder='Author' className='w-full p-2 bg-white rounded ' />
                </div>
                 <div className='mb-3'>
                    <input type="text" placeholder='Book Cover Image URL' className='w-full p-2 bg-white rounded ' />
                </div>
                 <div className='mb-3'>
                    <input type="text" placeholder='Total Pages  ' className='w-full p-2 bg-white rounded ' />
                </div>
                 <div className='mb-3'>
                    <input type="text" placeholder='Original Price ' className='w-full p-2 bg-white rounded ' />
                </div>
                 <div className='mb-3'>
                    <input type="text" placeholder='Discount Price ' className='w-full p-2 bg-white rounded ' />
                </div>
                 <div className='mb-3'>
                    <textarea type="text" placeholder='Abstract ' className='w-full p-2 bg-white rounded ' />
                </div>
           

            </div>
            {/* 2nd section */}
            <div className='px-5'>
                <div className='mb-3'>
                    <input type="text" placeholder='Publisher ' className='w-full p-2 bg-white rounded ' />
                </div>
                <div className='mb-3'>
                    <input type="text" placeholder='ISBN ' className='w-full p-2 bg-white rounded ' />
                </div>
                <div className='mb-3'>
                    <input type="text" placeholder='Language ' className='w-full p-2 bg-white rounded ' />
                </div>
                <div className='mb-3'>
                    <input type="text" placeholder='Category ' className='w-full p-2 bg-white rounded ' />
                </div>
                {/* upload book images */}
                <div>
                    <label htmlFor="bookimages">
                        <input type="file" id='bookimages' hidden />
                        <img style={{height:'200px',width:'200px'}} src="https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-icon-upload-clipart-blue-button-vector-file-png-image_15952470.png" alt="" />
                    </label>
                </div>
                {/* preview upload images */}
                <div className='flex justify-center items-center mb-3'>
                    <img width={'70px'} height={'70px'} src="https://png.pngtree.com/png-clipart/20231021/original/pngtree-watercolor-library-book-clip-art-png-image_13391689.png" alt="" />
                    <label htmlFor="bookUpload">
                        <input type="file" id='bookUpload' hidden/>
                        <FaPlus className='text-2xl ms-3'/>
                    </label>
                </div>

            </div>

        </div>
        {/* reset and add books */}
        <div className='flex justify-end mt-10 justify-center'>
            <button className='bg-gray-600 text-white px-3 py-2 rounded hover:bg-white hover:text-gray-600' >RESET</button>
            <button className='bg-blue-600 text-white px-3 py-2 rounded hover:bg-white hover:text-blue-600 ms-5'>ADD BOOK DETAILS</button>
        </div>
      
    </div>
  )
}

export default UploadBooks

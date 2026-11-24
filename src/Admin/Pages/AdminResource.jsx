import React from 'react'

function AdminResource() {
  return (
    <>
         <AdminHeader/>
    <div className='md:grid grid-cols-5'>
      {/* 1st section 1 grid */}
      <div className='col-span-1'>
        <AdminSidebar/>

      </div>
    {/* 2nd section */}
    <div className='col-span-4'>
      AdminResource
    </div>

    </div>
          <Footer/>
      
    </>
  )
}

export default AdminResource

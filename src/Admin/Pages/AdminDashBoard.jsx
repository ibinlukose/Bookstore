import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'

function AdminDashBoard() {
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

AdminDashBoard
    </div>

    </div>
          <Footer/>
          </>
  )
}

export default AdminDashBoard

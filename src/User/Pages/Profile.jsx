import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../Components/Edit'
import UploadBooks from '../Components/UploadBooks'
import UploadStatus from '../Components/UploadStatus'
import PurchaseHistory from '../Components/PurchaseHistory'

function Profile() {
  const[currentTab,SetCurrentTab] = useState(1)
  return (
    <>
      <Header/>
      <div className='bg-black'style={{height:"200px"}}>  </div>
        <div style={{height:'230px',width:'230px',borderRadius:'50%',marginLeft:'75px',marginTop:'-130px'}} className='bg-white p-3'>
          <img style={{height:'200px',width:'200px',borderRadius:'50%',marginLeft:''}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1YM3dx3reFLZOUbvkGRZJ5PQDbMo76y6E52Y_aALrXA&s" alt="" />

        </div>
        <div className='flex justify-between px-20 mt-5'>
          <div className='flex items-center'>
            <h1 className='font-bold md:text-3xl text-2xl'>USERNAME</h1>
            <FaCircleCheck className='text-blue-700 ms-3'/>

          </div>
          <Edit/>
        </div>
        <p className='text-xl font-bold px-20 mt-5'>Bio</p>
        <p className='text-justify px-5 my-5 md:px-20'>
          

This is your personal space where you can manage your account, explore your reading activity, track your orders, and save books you love. Whether you're building a wishlist, discovering new arrivals, or reviewing your recent purchases, this page keeps everything organized and easy to access. Your reading journey continues here - enjoy exploring, discovering, and collecting stories that inspire you.
        </p>
        <div className='items-center flex justify-center my-8 font-bold  text-lg '>
          <p onClick={()=>(SetCurrentTab(1))} className={currentTab==1 ?'p-4 border-gray-200 border-1 border-t border-r rounded cursor-poniter':'p-4 border-gray-200 border-b  rounded cursor-poniter'}> Upload book</p>
          <p onClick={()=>(SetCurrentTab(2))} className={currentTab==1 ?'p-4 border-gray-200 border-1 border-t border-r rounded cursor-poniter':'p-4 border-gray-200 border-b  rounded cursor-poniter'}>Upload book status</p>
          <p onClick={()=>(SetCurrentTab(3))} className={currentTab==1 ?'p-4 border-gray-200 border-1 border-t border-r rounded cursor-poniter':'p-4 border-gray-200 border-b  rounded cursor-poniter'}>Purchase History</p>
        </div>
      { currentTab==1 && <div><UploadBooks/> </div>}
      { currentTab==2 && <div> <UploadStatus/></div>}
     {  currentTab==3 && <div><PurchaseHistory/></div>}

    
      <Footer/>

    </>
  )
}

export default Profile

import React from 'react'

function PurchaseHistory() {
  return (
       <div className='p-30 my-15 shadow rounded'>
        {/* duplicate book ststus */}
        <div className='bg-gray-200 p-5 mt-4'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
                {/* 1st section */}
                <div className='px-4'>
                    <h1 className='text-2xl'>Title</h1>
                    <h1 className='text-xl'>Author</h1>
                    <h1 className='text-blue '>$ Price</h1>
                    <p className='font-bold'>Abstrct :</p>
                    <div className='flex'>
                        <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/thumbnails/023/629/698/small/web-button-icon-purchase-button-free-png.png" alt="pending" />

                    </div>

                </div>
                {/* 2nd section */}
                <div className='px-5 mt-5  md:mt-0'>
                    <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLsr1tZXC6NAq16vzgprF9nukG7PpQjsuNMTVj6fcew&s=10" alt="" />
                  

                </div>

            </div>

        </div>
        
      
    </div>
  )
}

export default PurchaseHistory

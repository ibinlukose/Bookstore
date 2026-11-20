import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'


function Contact() {
  return (
    <>
      <Header />
      <div className='md:px-20 my-5 p-5'>
        <h1 className='text-center font-bold text-3xl my-5'>Contact</h1>
        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quasi dignissimos maxime fugit sed enim nam exercitationem illum, similique quas expedita error molestiae laudantium, quidem repellat, veniam officia necessitatibus eligendi.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, adipisci quasi? Facere consequuntur, tenetur deserunt ut autem placeat impedit reprehenderit. Sint, fuga. Quisquam, minus non soluta esse fugiat maxime voluptatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur recusandae qui soluta quo ab eius error optio tenetur ducimus dolore! Explicabo officia autem ad a rerum est facilis fugit blanditiis!

        </p>
        {/* grid address number email */}
        <div className='md:grid grid-cols-3 items-center mt-5 p-5 md:px-40 md:mt-0'>
          {/* location */}
          <div className='flex items-center'>
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'>
              <FaLocationPin/>

            </div>
            <p className='ms-5'>123 main street,Apt 48, Anytown, CA 9123454</p>

          </div>
          {/* number */}
          <div className='flex items-center'>
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'>
              <FaPhone/>

            </div>
            <p className='ms-5'>123457888</p>

          </div>
          {/* Contact */}
         < div className='flex items-center'>
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'>
              <FaEnvelope/>

            </div>
            <p className='ms-5'>contact@bookstore.com</p>


          </div>
          </div>
          {/* message and map */}
        <div className='md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40'>
            {/* message */}
            <div className='bg-gray-300 text-center p-5'>
              <h1 className='text-2xl font-semibold '>Send Us Message!</h1>
              <form >
                <div className='mb-5 mt-10'>
                  <input type="text" placeholder='Name' className='bg-white w-full p-2'/>

                </div>
                <div className='mb-5 mt-5'>
                  <input type="email" placeholder='Email' className='bg-white w-full p-2'/>

                </div>
                 <div className='mb-5 mt-5'>
                  <textarea type="text" placeholder='Message' className='bg-white w-full p-2'/>

                </div>
                 <div className='mb-5 mt-5'>
                 <button className='bg-black text-white w-full p-2 rounded flex justify-center items-center'>Submit <FaPaperPlane/>

                 </button>
                </div>
              </form>

            </div>
            {/* map */}
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.975217565075!2d76.3400676747941!3d10.01890359008765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Software%20Training%20institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1795065747611!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowFullscreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
            </div>

          </div>

        </div>

      
      <Footer />
    </>
  )
}

export default Contact

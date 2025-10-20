import React, { useState } from 'react'
import BannerTitle from '../../components/BannerTitle'
import { assets } from '../../assets/assets'
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")


const handleNameChange =(e)=>{
  e.preventDefault();
  setName(e.target.value)
}
const handleEmailChange =(e)=>{
  e.preventDefault();
  setEmail(e.target.value)
}

const handleCommentChange =(e)=>{
  e.preventDefault();
  setComment(e.target.value)
}

const handleSubmit =(e)=>{
  e.preventDefault();
  if(!name || !email || !comment){
    toast.error("Please fill all the field")
  }
  let info ={
    name,
    email,
    comment
  }

  setName("")
  setEmail("")
  setComment("")

  console.log(info)
  toast.success(`Thank you ${name} for your message!`)

}




  return (
    <>
      <section>
        <BannerTitle title="Contact" image={assets.contactbanner}/>


        <div className='flex flex-col w-4/5 md:w-8/12 lg:w-6/12 mx-auto pt-10 md:pt-14 lg:pt-20 pb-10 md:pb-14 lg:pb-20'>
          <div>
            <p className='text-[35px] md:text-[43px] lg:text-[48px] text-[#075212] lato-bold pb-7'>Contact Us</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 lg:gap-15'>
              <ul className='flex flex-col text-[#075212]'>
                <p className='text-[22px] md:text-[24px] lato-regular font-medium pb-2'>Office</p>
                <li className='text-[14px] md:text-[15px] lg:text-[16px] lato-regular pb-1'>8520 Preston RD, <br/> New york, USA</li>
                <li className='text-[14px] md:text-[15px] lg:text-[16px] lato-regular'>+1 (313) 4285227</li>
                <li className='text-[14px] md:text-[15px] lg:text-[16px] lato-regular'>info@gemstone.com</li>
                <li className='text-[14px] md:text-[15px] lg:text-[16px] lato-regular'>contact@gemstone.com</li>
              </ul>


                <ul className='flex flex-col text-[#075212]'>
                <p className='text-[22px] md:text-[24px] lato-regular font-medium pb-2'>Store</p>
                <li className='text-[14px] md:text-[15px] lg:text-[16px] lato-regular pb-1'>8520 Preston RD, <br/> New york, USA</li>
                <li className='text-[14px] md:text-[15px] lg:text-[16px] lato-regular'>+1 (313) 4285227</li>
                <li className='text-[14px] md:text-[15px] lg:text-[16px] lato-regular'>info@gemstone.com</li>
                <li className='text-[14px] md:text-[15px] lg:text-[16px] lato-regular'>contact@gemstone.com</li>
              </ul>


              <div>
                <p className='text-[#075212] text-[17px] md:text-[18px] lg:text-[20px] lato-regular uppercase mb-4'>Follow Us</p>
                <ul className='flex items-center gap-3 text-[#075212]'>

                  <li className='hover:text-red-500 transition-all duration-300'><Link><FaInstagram size={26}/></Link></li>
                  <li className='hover:text-blue-500 transition-all duration-300'><Link><CiLinkedin size={30}/></Link></li>

                  <li className='p-[2px] border-2  rounded-sm border-[#075212] hover:text-blue-500 hover:border-blue-500 transition-all duration-300'><Link><TiSocialFacebook/></Link></li>

                   <li className='p-[2px] border-2 rounded-sm border-[#075212] hover:text-blue-500 hover:border-blue-500 transition-all duration-300'><Link><FaTwitter/></Link></li>
                  
                </ul>
              </div>
            </div>
          </div>


          <div className='pt-20'>
            <p className='text-[28px] md:text-[35px] lg:text-[40px] text-[#075212] lato-regular font-medium pb-1'>Got any Questions?</p>
            <p className='text-[13px] md:text-[14px] lg:text-[16px] text-[#075212] lato-regular '>Lorem ipsum dolor sit amet consectetur. In fermentum proin tortor proin habitasse.</p>

            <form onSubmit={handleSubmit} className='flex flex-col gap-6 mt-5'>
            <div className='flex justify-between gap-7'>
                  <div className='w-full md:w-1/2'>
                    <label className='lato-regular font-medium text-[14px] md:text-[16px] text-[#075212]'>Name * </label>
                    <input type='text' value={name} onChange={handleNameChange} placeholder='Rechard' required  className='w-full p-2 md:p-3 placeholder:text-[#8E8989] placeholder:lato-regular placeholder:text-[12px] md:text-[14px] border outline-none border-[#BDBBBB]shadow-sm rounded-md mt-2'/>
                  </div>
                  <div className='w-full md:w-1/2'>
                    <label className='lato-regular font-medium text-[14px] md:text-[16px] text-[#075212]'>Email * </label>
                    <input type='text' value={email} onChange={handleEmailChange} placeholder='hello@gmail.com' required  className='w-full p-2 md:p-3 placeholder:text-[#8E8989] placeholder:lato-regular placeholder:text-[12px] md:text-[14px] border outline-none border-[#BDBBBB]shadow-sm rounded-md mt-2'/>
                  </div>
                </div>

               <div className='full'>
                  <label className='lato-regular font-medium text-[14px] md:text-[16px] text-[#075212]'>Comment *</label>
                  <textarea type='text' value={comment} onChange={handleCommentChange} required placeholder='Your comment' className='w-full p-3 placeholder:text-[#8E8989] placeholder:lato-regular placeholder:text-[12px] md:placeholder:text-[14px] border outline-none border-[#BDBBBB] h-24 md:h-32 shadow-sm rounded-md resize-none mt-3'/>
                </div>

                <div className=''>
                  <button type='submit' className='bg-[#075212] text-[12px] md:text-[14px] lg:text-[16px] font-medium text-white lato-regulae pl-3 pr-3 pt-1 pb-1 lg:pl-5 lg:pr-5 lg:pt-2 lg:pb-2 rounded-md'>Submit</button>
                </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
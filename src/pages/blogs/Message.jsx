import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Message = () => {


const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [websiteLink, setWebsiteLink] = useState("")
const [comment, setComment ] = useState("")
const [checkBox, setCheckBox ] = useState(false)

const handleFirstNameChange =(e)=>{
  e.preventDefault();
  setFirstName(e.target.value)
}
const handleLastNameChange =(e)=>{
  e.preventDefault();
  setLastName(e.target.value)
}

const handleEmailChange =(e)=>{
  e.preventDefault();
  setEmail(e.target.value)
}

const handleWebsiteLinkChange =(e)=>{
  e.preventDefault();
  setWebsiteLink(e.target.value)
}
const handleCommentChange =(e)=>{
  e.preventDefault();
  setComment(e.target.value)
}

const handleSubmit = (e)=>{
  e.preventDefault();
  if(!firstName || !lastName || !email || !websiteLink){
    toast.error("Please fill in all required fields.")
  }
  let info={
    comment,
    firstName,
    lastName,
    email,
    websiteLink
  }
  console.log(info)
  toast.success(`Thank you ${firstName} ${lastName} for your message!`)


  setComment("")
  setFirstName("")
  setLastName("")
  setEmail("")
  setWebsiteLink("")
  setCheckBox(false)
  


}

  return (
    <>
    <div className='flex flex-col gap-3'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-7'>
                  <div className='full'>
                  <label  className='lato-bold text-[20px] md:text-[22px] lg:text-[24px] text-[#075212]'>Leave a Comment</label>
                  <textarea type='text' value={comment} onChange={handleCommentChange} placeholder='Your comment' className='w-full p-3 placeholder:text-[#8E8989] placeholder:lato-regular placeholder:text-[12px] md:placeholder:text-[14px] border outline-none border-[#BDBBBB] h-24 md:h-32 shadow-sm rounded-md resize-none mt-3'/>
                </div>

                <div className='flex justify-between gap-7'>
                  <div className='w-full md:w-1/2'>
                    <label className='lato-regular font-medium text-[14px] md:text-[16px] text-[#075212]'>Frist name * </label>
                    <input type='text' value={firstName} onChange={handleFirstNameChange} placeholder='Rechard' required  className='w-full p-2 md:p-3 placeholder:text-[#8E8989] placeholder:lato-regular placeholder:text-[12px] md:text-[14px] border outline-none border-[#BDBBBB]shadow-sm rounded-md mt-2'/>
                  </div>
                  <div className='w-full md:w-1/2'>
                    <label className='lato-regular font-medium text-[14px] md:text-[16px] text-[#075212]'>Last name * </label>
                    <input type='text' value={lastName} onChange={handleLastNameChange} placeholder='Marx' required  className='w-full p-2 md:p-3 placeholder:text-[#8E8989] placeholder:lato-regular placeholder:text-[12px] md:text-[14px] border outline-none border-[#BDBBBB]shadow-sm rounded-md mt-2'/>
                  </div>
                </div>


                <div className='flex justify-between gap-7'>
                  <div className='w-full md:w-1/2'>
                    <label className='lato-regular font-medium text-[14px] md:text-[16px] text-[#075212]'>Email * </label>
                    <input type='email' value={email} onChange={handleEmailChange} placeholder='hello@gmail.com' required  className='w-full p-2 md:p-3 placeholder:text-[#8E8989] placeholder:lato-regular placeholder:text-[12px] md:text-[14px] border outline-none border-[#BDBBBB]shadow-sm rounded-md mt-2'/>
                  </div>
                  <div className='w-full md:w-1/2'>
                    <label className='lato-regular font-medium text-[14px] md:text-[16px] text-[#075212]'>Website * </label>
                    <input type='text' value={websiteLink} onChange={handleWebsiteLinkChange} placeholder='www.hello.com' required className='w-full p-2 md:p-3 placeholder:text-[#8E8989] placeholder:lato-regular placeholder:text-[12px] md:text-[14px] border outline-none border-[#BDBBBB]shadow-sm rounded-md mt-2'/>
                  </div>
                </div>


                <div className='flex gap-2 items-center'>
                  <input type='checkbox' checked={checkBox} onChange={(e)=>{setCheckBox(e.target.checked)}} required className='cursor-pointer w-5 h-5'/>
                  <label className='text-[#6A6666] text-[14px] md:text-[18px] lg:text-[20px] lato-regular'>Save my name, email, and website in the browser for the next time I comment.</label>
                </div>


                <div className='text-center'>
                  <button type='submit' className='bg-[#075212] text-[16px] font-medium text-white lato-regulae pl-5 pr-5 pt-2 pb-2 rounded-md'>Submit</button>
                </div>

                </form>
              </div>
    </>
  )
}

export default Message
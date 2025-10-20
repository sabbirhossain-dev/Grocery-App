import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5";
import { LiaComments } from "react-icons/lia";
import { MdOutlineDateRange } from "react-icons/md";


const BlogCard = ({image,title}) => {
  return (
    <>
        <div className='bg-[#E9F5E9] flex flex-col gap-6 p-6 rounded-md'>
            <div className='w-full'><img src={image}/></div>

            <div className='flex flex-col gap-2'>
                <ul className='flex gap-3'>
                    <li className='inline-flex items-center gap-1 lato-regular text-[#01A919] text-[14px]'><IoEyeOutline size={18} /><span>112 view</span></li>

                    <li className='inline-flex items-center gap-1 lato-regular text-[#01A919] text-[14px]'><LiaComments size={18}/><span>3 Comments</span></li>

                    <li className='inline-flex items-center gap-1 lato-regular text-[#01A919] text-[14px]'><MdOutlineDateRange size={16}/><span>2nd March, 2023</span></li>
                </ul>
                <p className='lato-bold text-[#075212] text-[24px]'>{title}</p>

                <p className='lato-regular text-[#075212] text-[16px]'>Lorem ipsum dolor sit amet consectetur. Neque pretium nisi ipsum ac quis a dis odio eget. Enim sit magna volutpat quis suspendisse tellus vulputate morbi viverra. Pharetra nibh arcu risus quam. Penatibus placerat potenti varius pellentesque nunc </p>

                <div className="flex items-center pb-8 pt-2 gap-1 text-[#FE9C00]">
                        <button className="text-[16px] lato-bold hover:underline transition-all duration-500"><Link to='/blogs/details'>Read More</Link></button>
                        <span className="mt-[2px]" ><FaArrowRight /></span>
                    </div>
            </div>
        </div>
    </>
  )
}

export default BlogCard
import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { LiaComments } from "react-icons/lia";
import { MdOutlineDateRange } from "react-icons/md";


const BlogCard = ({image,title}) => {
  return (
    <>
        <div className='bg-white flex flex-col gap-6 p-6 rounded-md'>
            <div className='w-full'><img src={image} className='w-full'/></div>

            <div className='flex flex-col gap-2'>
                <ul className='flex gap-3'>
                    <li className='inline-flex items-center gap-1 lato-regular text-[#01A919] text-[14px]'><IoEyeOutline size={18} /><span>112 view</span></li>

                    <li className='inline-flex items-center gap-1 lato-regular text-[#01A919] text-[14px]'><LiaComments size={18}/><span>3 Comments</span></li>

                    <li className='inline-flex items-center gap-1 lato-regular text-[#01A919] text-[14px]'><MdOutlineDateRange size={16}/><span>2nd March, 2023</span></li>
                </ul>
                <p className='lato-bold text-[#075212] text-[24px]'>{title}</p>

                <p className='lato-regular text-[#075212] text-[16px] pb-5'>Lorem ipsum dolor sit amet consectetur. Augue consequat consequat diam gravida vel augue blandit velit sed. Ullamcorper neque et mauris pharetra aliquet. Tincidunt nunc molestie risus tellus netus commodo porta ullamcorper vulputate. Egestas neque volutpat odio faucibus non ut fringilla. Non eget elit luctus in dignissim euismod morbi fusce. Est magna mauris ac vitae integer enim risus suspendisse. Sed integer fringilla sit arcu id. Fermentum eu in ultricies bibendum amet feugiat leo pretium sem. Pellentesque nunc</p>

                <p className='lato-regular text-[#075212] text-[16px]'> vel fringilla elit tellus. Faucibus sit placerat amet gravida molestie. Dis egestas cras potenti elementum pulvinar aliquam in faucibus. Molestie magnis gravida diam est purus sed blandit. Lectus ultricies pharetra dolor maecenas quam. Nunc adipiscing a vulputate nisi vel. Felis sit eget arcu lorem amet non et accumsan. Consequat tempor scelerisque ut eleifend eu nunc dolor. Est interdum ac elementum suscipit scelerisque ultrices. Etiam in ut diam praesent mauris blandit feugiat tincidunt. In fermentum pellentesque nec quam dictumst varius feugiat at.</p>

            </div>
        </div>
    </>
  )
}

export default BlogCard
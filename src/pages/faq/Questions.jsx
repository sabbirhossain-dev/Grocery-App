import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

const Questions = ({no,title}) => {

    const [toggle, setToggle] = useState(false)
  return (
    <div className='pt-5 pb-5 border-b border-[#B7B2B2]'>
        <div className='flex justify-between text-[#075212] lato-regular font-medium '>
            <p className='text-[16px] md:text-[18px] lg:text-[20px]'><span>{no}</span> {title}</p>

            <button onClick={()=>{setToggle(!toggle)}}>
                {toggle?<FaAngleUp /> :<FaAngleDown />}
            </button>

        </div>
            {toggle && 
            <p className='text-[#075212] lato-regular text-[14px] md:text-[15px] lg:text-[16px] pt-3'>Lorem ipsum dolor sit amet consectetur. Adipiscing eget volutpat adipiscing phasellus dui eget rhoncus fermentum vitae. Elit ullamcorper consequat vulputate justo egestas quis at consequat. Sed tristique justo eget auctor ut sed.</p>
            }
    </div>
  )
}

export default Questions
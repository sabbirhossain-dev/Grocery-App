import React from 'react'

const Comments = ({image,name,date,desc}) => {
  return (
    <div className='flex gap-2 bg-[#E9F5E9] p-7 rounded-md'>
        <div><img className='w-60 md:w-44' src={image} alt="comments image"/></div>
        <div className='flex flex-col gap-1'>
            <p className='lato-regular text-[14px] md:text-[16px] text-[#075212]' >{name}</p>
             <p className='lato-regular text-[12px] md:text-[14px] text-[#01A919]' >{date}</p>
             <p className='lato-regular text-[14px] md:text-[16px] text-[#075212]' >{desc}</p>
        </div>
    </div>
  )
}

export default Comments
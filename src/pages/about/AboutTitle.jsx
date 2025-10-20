import React from 'react'

const AboutTitle = ({title,desc1,desc2}) => {
  return (
    <div>
        <h4 className='text-[36px] md:text-[40px] lg:text-[48px] font-bold lato-bold text-[#075212]'>{title}</h4>
        <p className='text-[14px] md:text-[14px] lg:text-[16px] font-regular lato-regular text-[#075212] pt-6 pb-5'>{desc1}</p>
        <p className='text-[14px] md:text-[14px] lg:text-[16px] font-regular lato-regular text-[#075212]'>{desc2}</p>
    </div>
  )
}

export default AboutTitle
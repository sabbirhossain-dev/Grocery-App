import React from 'react'

const Title = ({title,desc,align='center'}) => {
  return (
    <div className={`flex flex-col gap-2 text-${align} mb-16`}>
        <h3 className='text-[36px] md:text-[40px] lg:text-[48px] font-bold lato-bold text-[#075212]'>{title}</h3>
        <p className='text-[12px] md:text-[14px] lg:text-[16px] font-regular lato-regular text-[#075212]'>{desc}</p>
    </div>
  )
}

export default Title

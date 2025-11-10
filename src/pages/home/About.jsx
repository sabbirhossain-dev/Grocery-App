import React from 'react'
import Title from './Title'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
         <div className='bg-white pt-20 pb-10 font-semibold'>
        
                  <div className='mr-10 ml-10 md:mr-16 md:ml-16 lg:mr-28 lg:ml-28'>        
                
                    <div className='flex flex-col md:flex-row items-center justify-between gap-20 text-start'>
                        <div className='w-full md:w-5/12'>
                            <Title title="Know About Us" desc="Lorem ipsum dolor sit amet consectetur. Dictum tellus massa et condimentum facilisi id commodo diam viverra. Hac sapien lectus risus varius libero risus magnis diam mattis. Elit amet pretium ac mattis ut tempor. Egestas eget commodo at tempus. Id turpis venenatis congue viverra risus tellus ac." align='left'/>
                            <button className='text-[13px] text-white lato-bold bg-[#FE9C00] p-2 pl-3 pr-3 rounded-md'><Link to='/pages/about'>Read More</Link></button>
                        </div>

                        <div className='w-full md:w-7/12'>
                            <img src={assets.about_img} alt='orange' className='w- auto md:w-full h-[250px] md:h-[420px]'/>
                        </div>

                    </div>
        
                </div>
            </div>



{/* more about us */}
        <div className='bg-[#075212] pt-20 pb-20 font-semibold'>
    
            <div className='mr-10 ml-10 md:mr-16 md:ml-16 lg:mr-28 lg:ml-28'>

            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-20'>
              <div className='flex gap-2 w-1/4'>
              <img src={assets.aboutlogo1} alt='logo' className='h-6 md:h-8 mt-1'/>
                <div className='flex flex-col gap-2'>
                  <p className='lato-bold text-[18px] md:text-[24px] text-white tracking-wide'>Premium Quality</p>
                  <p className='lato-regular text-[12px] md:text-[14px] text-white w-40 md:w-56 leading-5'>Lorem ipsum dolor sit amet consectetur. Et blandit eget metus  </p>
                </div>
              </div>

              <div className='flex gap-2 w-1/4'>
              <img src={assets.aboutlogo2} alt='logo' className='h-6 md:h-8 mt-1'/>
                <div className='flex flex-col gap-2'>
                  <p  className='lato-bold text-[18px] md:text-[24px] text-white tracking-wide'>Free Delivery</p>
                  <p className='lato-regular text-[12px] md:text-[14px] text-white w-40 md:w-56 leading-5'>Lorem ipsum dolor sit amet consectetur. Et blandit eget metus  </p>
                </div>
              </div>

              <div className='flex gap-2 w-1/4'>
              <img src={assets.aboutlogo3} alt='logo' className='h-6 md:h-8 mt-1'/>
                <div className='flex flex-col gap-2'>
                  <p  className='lato-bold text-[18px] md:text-[24px] text-white tracking-wide'>Best Price & Offer</p>
                  <p className='lato-regular text-[12px] md:text-[14px] text-white w-40 md:w-56 leading-5'>Lorem ipsum dolor sit amet consectetur. Et blandit eget metus  </p>
                </div>
              </div>

              <div className='flex gap-2 w-1/4'>
              <img src={assets.aboutlogo4} alt='logo' className='h-6 md:h-8 mt-1'/>
                <div className='flex flex-col gap-2'>
                  <p  className='lato-bold text-[18px] md:text-[24px] text-white tracking-wide'>Easy Return</p>
                  <p className='lato-regular text-[12px] md:text-[14px] text-white w-40 md:w-56 leading-5'>Lorem ipsum dolor sit amet consectetur. Et blandit eget metus  </p>
                </div>
              </div>


            </div>

            </div>
        </div>
    </>
  )
}

export default About
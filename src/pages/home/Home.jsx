import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { assets } from '../../assets/assets';
import Categories from './Categories';
import BestSeller from './BestSeller';
import About from './About';
import Feedback from './Feedback';
import Blogs from './Blogs';


const Home = () => {
  return (
    <>
      <div className='bg-[#E9F5E9] pt-10 pb-10 font-semibold'>

          <div className='mr-10 ml-10 md:mr-16 md:ml-16 lg:mr-28 lg:ml-28'>

            <div className='flex flex-col gap-7 md:flex-row justify-between items-center'>
              <div className='w-full lg:w-1/2'>
              <h2 className='lato-bold text-[40px] lg:text-[64px] text-[#075212]'>Eat <span className='text-[#FE9C00]'>Fresh</span> & <span className='text-[#FE9C00]'>Safe</span> Food to Enjoy  Healthy Life</h2>
              <p className='text-[#075212] lato-regular text-sm md:text-md pt-6 pb-6'>Lorem ipsum dolor sit amet consectetur. Elementum proin odio tincidunt viverra. Mollis vitae lorem tempor pellentesque mi mauris quisque ac. Nibh placerat augue eget iaculis bibendum augue lacus. Eu quisque auctor laoreet q</p>
              <div className='flex gap-5'>
                <button className='p-2 md:p-3 md:pl-5 md:pr-5 bg-[#FE9C00] text-white rounded-md text-xs md:text-sm hover:rounded-none transition-all duration-300'>Start Shopping</button>

                <button className='flex gap-2 items-center p-2 md:p-3 md:pl-5 md:pr-5 bg-transparent border border-[#FE9C00] text-[#075212] rounded-md text-xs md:text-sm hover:rounded-none transition-all duration-300'><span><FaCirclePlay size={21} className='text-[#FE9C00]' /></span>Order Process</button>
              </div>
            </div>



            {/* image */}

              <div className="relative w-full md:w-[450px] h-auto">
              <img src={assets.banner} alt="Banner" className="w-11/12 md:w-full" />
              <img
                src={assets.bannerImg}
                alt="Overlay"
                className="absolute top-[69px] md:top-[84px] left-0 w-11/12 md:w-60 lg:w-[450px]"
              />
            </div>
          </div>




        </div>
    </div>
        <Categories />
        <BestSeller />
        <About />
        <Blogs />
        <Feedback />
    </>
  )
}

export default Home
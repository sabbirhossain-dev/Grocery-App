import React from 'react';
import Title from './Title';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from './Sliders';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';


const Categories = () => {
  

  return (
    <section className="pt-10 pb-10 font-semibold">
      <div className="mr-10 ml-10 md:mr-16 md:ml-16 lg:mr-28 lg:ml-28 relative overflow-visible">
        <Title
          title="Browse All Categories"
          desc="Lorem ipsum dolor sit amet consectetur. Proin curabitur at ipsum ullamcorper velit."
        />
        <div className=''>
            
        <Sliders />
        </div>

        <div className='flex flex-col md:flex-row gap-7 justify-between mt-20 mb-20'>
          <div className='w-full md:w-5/12 bg-[#E9F5E9] rounded-md p-6 '>
            <div>
              <p className='lato-bold text-[16px] md:text-[18px] lg:text-[20px] text-[#FE9C00]'>GET  15% OFF</p>
              <p  className='lato-bold w-3/4 text-[22px] md:text-[26px] lg:text-[32px] text-[#075212] md:w-full mt-2 mb-4 leading-10'>We Ensure You to Pesticide Free products</p>
              <button className='bg-[#01A919] text-white pt-2 pr-4 pb-2 pl-4 rounded-lg text-xs md:text-sm hover:bg-green-700 transition-all duration-300'><Link to='/'>Start Shopping</Link></button>
            </div>
            <div className='flex justify-center pb-6'>
              <img src={assets.onion} alt='onion' />
            </div>
          </div>



          <div className='w-full md:w-7/12 flex flex-col gap-7'>
            <div className='flex gap-7 md:gap-10 lg:gap-16 bg-[#EEEEFA] p-10 rounded-md'>
              <div>
                <img src={assets.milk} alt='milk'/>
              </div>
              <div>
              <p className='lato-bold text-[16px] md:text-[18px] lg:text-[20px] text-[#FE9C00]'>GET  20% OFF</p>
              <p className='lato-bold text-[22px] md:text-[26px] lg:text-[32px] text-[#075212] w-full mt-2 mb-4 leading-10'>Start Your day with Our Pure Dairy Products</p>
              <button className='bg-[#01A919] text-white pt-2 pr-4 pb-2 pl-4 rounded-lg text-xs md:text-sm hover:bg-green-700 transition-all duration-300'><Link to='/'>Start Shopping</Link></button>
            </div>

            </div>
              

              <div className='flex gap-7 md:gap-10 lg:gap-16 bg-[#FAEAEB] p-10 rounded-md'>
              <div>
                <img src={assets.egg} alt='egg'/>
              </div>
              <div>
              <p className='lato-bold text-[16px] md:text-[18px] lg:text-[20px] text-[#FE9C00]'>GET  12% OFF</p>
              <p className='lato-bold text-[22px] md:text-[26px] lg:text-[32px] text-[#075212] w-full mt-2 mb-4 leading-10'>Make Everyday Fresh & Healthy</p>
              <button className='bg-[#01A919] text-white pt-2 pr-4 pb-2 pl-4 rounded-lg text-xs md:text-sm hover:bg-green-700 transition-all duration-300'><Link to='/'>Start Shopping</Link></button>
            </div>

            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Categories;

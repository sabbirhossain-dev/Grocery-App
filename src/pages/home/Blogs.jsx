import React from "react";
import Slider from "react-slick";
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";
import { assets } from '../../assets/assets';
import Title from "./Title";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";


//  Custom arrows
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-30px] md:left-[-40px] top-1/2 transform -translate-y-1/2 z-50 cursor-pointer text-[#FE9C00] border-[#FE9C00] border rounded-full p-1 hover:text-white hover:bg-[#FE9C00] transition-all duration-300"
    onClick={onClick}
  >
    <BsChevronLeft size={20} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-30px] md:right-[-40px] top-1/2 transform -translate-y-1/2 z-50 cursor-pointer text-[#FE9C00] border-[#FE9C00] border rounded-full p-1 hover:text-white hover:bg-[#FE9C00] transition-all duration-300 text-ye"
    onClick={onClick}
  >
    <BsChevronRight size={20} />
  </div>
);


function Blogs() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='bg-[#E9F5E9] pt-20 pb-20 font-semibold'>

    <div className='mr-10 ml-10 md:mr-16 md:ml-16 lg:mr-28 lg:ml-28'>
    <Title title="Read Our Blogs" desc="Lorem ipsum dolor sit amet consectetur. Eget sollicitudin proin purus interdum ultrices sed faucibus."/>
    <div className="slider-container">
      <Slider {...settings}>
        <div className="px-4 w-1/2">
            <div className="bg-white p-5 flex flex-col gap-5 rounded-md">
                <div>
                    <img src={assets.blogImg1} alt="blog image" className="w-full"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[#01A919] text-[14px] lato-regular">2nd March,2023</p>
                    <p className="text-[#075212] text-[20px] lato-bold">How to Buy Groceries on a limited Budget?</p>
                    <p className="text-[#075212] text-[14px] lato-regular leading-6">Lorem ipsum dolor sit amet consectetur. Egestas ipsum ipsum lectus ultrices netus est. Aliquam scelerisque tortor risus quis feugiat posuere sit congue. Erat mauris condimentum ege</p>
                    <div className="flex items-center gap-1 text-[#FE9C00]">
                        <button className="text-[16px] lato-bold hover:underline transition-all duration-500"><Link to='/blogs/details'>Read More</Link></button>
                        <span className="mt-[2px]" ><FaArrowRight /></span>
                    </div>
                </div>
            </div>
        </div>
       
            <div className="px-4 w-1/2">
            <div className="bg-white p-5 flex flex-col gap-5 rounded-md">
                <div>
                    <img src={assets.blogImg2} alt="blog image" className="w-full"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[#01A919] text-[14px] lato-regular">2nd March,2023</p>
                    <p className="text-[#075212] text-[20px] lato-bold">Why should we eat organic vegetables</p>
                    <p className="text-[#075212] text-[14px] lato-regular leading-6">Lorem ipsum dolor sit amet consectetur. Egestas ipsum ipsum lectus ultrices netus est. Aliquam scelerisque tortor risus quis feugiat posuere sit congue. Erat mauris condimentum ege</p>
                    <div className="flex items-center gap-1 text-[#FE9C00]">
                        <button className="text-[16px] lato-bold hover:underline transition-all duration-500"><Link to='/blogs/details'>Read More</Link></button>
                        <span className="mt-[2px]" ><FaArrowRight /></span>
                    </div>
                </div>
            </div>
        </div>


        <div className="px-4 w-1/2">
            <div className="bg-white p-5 flex flex-col gap-5 rounded-md">
                <div>
                    <img src={assets.blogImg1} alt="blog image" className="w-full"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[#01A919] text-[14px] lato-regular">2nd March,2023</p>
                    <p className="text-[#075212] text-[20px] lato-bold">How to Buy Groceries on a limited Budget?</p>
                    <p className="text-[#075212] text-[14px] lato-regular leading-6">Lorem ipsum dolor sit amet consectetur. Egestas ipsum ipsum lectus ultrices netus est. Aliquam scelerisque tortor risus quis feugiat posuere sit congue. Erat mauris condimentum ege</p>
                    <div className="flex items-center gap-1 text-[#FE9C00]">
                        <button className="text-[16px] lato-bold hover:underline transition-all duration-500"><Link to='/blogs/details'>Read More</Link></button>
                        <span className="mt-[2px]" ><FaArrowRight /></span>
                    </div>
                </div>
            </div>
        </div>


         <div className="px-4 w-1/2">
            <div className="bg-white p-5 flex flex-col gap-5 rounded-md">
                <div>
                    <img src={assets.blogImg2} alt="blog image" className="w-full"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[#01A919] text-[14px] lato-regular">2nd March,2023</p>
                    <p className="text-[#075212] text-[20px] lato-bold">Why should we eat organic vegetables</p>
                    <p className="text-[#075212] text-[14px] lato-regular leading-6">Lorem ipsum dolor sit amet consectetur. Egestas ipsum ipsum lectus ultrices netus est. Aliquam scelerisque tortor risus quis feugiat posuere sit congue. Erat mauris condimentum ege</p>
                    <div className="flex items-center gap-1 text-[#FE9C00]">
                        <button className="text-[16px] lato-bold hover:underline transition-all duration-500"><Link to='/blogs/details'>Read More</Link></button>
                        <span className="mt-[2px]" ><FaArrowRight /></span>
                    </div>
                </div>
            </div>
        </div>

        
      </Slider>
    </div>
        </div>

    </div>
  );
}

export default Blogs;

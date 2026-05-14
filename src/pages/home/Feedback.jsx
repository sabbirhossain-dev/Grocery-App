import React from "react";
import Slider from "react-slick";
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";
import { assets } from '../../assets/assets';
import Title from "./Title";
import { FaStar } from "react-icons/fa";


//  Custom arrows
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-5px] md:left-[-35px] top-1/2 transform -translate-y-1/2 cursor-pointer text-[#FE9C00] border-[#FE9C00] border rounded-full p-1 hover:text-white hover:bg-[#FE9C00] transition-all duration-300"
    onClick={onClick}
  >
    <BsChevronLeft size={20} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-5px] md:right-[-35px] top-1/2 transform -translate-y-1/2 cursor-pointer text-[#FE9C00] border-[#FE9C00] border rounded-full p-1 hover:text-white hover:bg-[#FE9C00] transition-all duration-300 text-ye"
    onClick={onClick}
  >
    <BsChevronRight size={20} />
  </div>
);


function Feedback() {
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true


        }
      }
    ]
  };
  return (
    <div className='bg-white pt-20 pb-20 font-semibold'>

    <div className="px-4 md:px-16 lg:px-28">
    <Title title="Our Customer Feedback" desc="Lorem ipsum dolor sit amet consectetur. Eget sollicitudin proin purus interdum ultrices sed faucibus."/>
    <div className="slider-container">
      <Slider {...settings}>
          <div className="px-7 md:px-1">
            <div className="bg-[#E9F5E9] p-5 rounded-md m-3 text-center md:text-start">
         <div className="flex flex-col md:flex-row gap-5 items-center md:items-start">
              <div><img src={assets.feedback1} alt='feedback image' className="w-16 h-auto md:h-12 md:w-36" /></div>
            <div className="flex flex-col gap-1">
                <p>Ali Habib</p>
                <ul className="flex justify-center md:justify-start gap-1 text-[#FE9C00]">
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                </ul>
                <p className="text-[#075212] text-[14px] lato-regular">Lorem ipsum dolor sit amet consectetur. Condimentum donec eu turpis habitasse faucibus. Pretium convallis viverra amet condimentum. Integer</p>
            </div>
          </div>
        </div>
        </div>
       

       <div className="px-7 md:px-1">
            <div className="bg-[#E9F5E9] p-5 rounded-md m-3 text-center md:text-start">
         <div className="flex flex-col md:flex-row gap-5 items-center md:items-start">
              <div><img src={assets.feedback2} alt='feedback image' className="w-16 h-auto md:h-12 md:w-36" /></div>
            <div className="flex flex-col gap-1">
                <p>Paul Walker</p>
                <ul className="flex justify-center md:justify-start gap-1 text-[#FE9C00]">
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                </ul>
                <p className="text-[#075212] text-[14px] lato-regular">Lorem ipsum dolor sit amet consectetur. Condimentum donec eu turpis habitasse faucibus. Pretium convallis viverra amet condimentum. Integer</p>
            </div>
          </div>
        </div>
        </div>


          <div className="px-7 md:px-1">
            <div className="bg-[#E9F5E9] p-5 rounded-md m-3 text-center md:text-start">
         <div className="flex flex-col md:flex-row gap-5 items-center md:items-start">
              <div><img src={assets.feedback3} alt='feedback image' className="w-16 h-auto md:h-12 md:w-36" /></div>
            <div className="flex flex-col gap-1">
                <p>Salma Hayek</p>
                <ul className="flex justify-center md:justify-start gap-1 text-[#FE9C00]">
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                </ul>
                <p className="text-[#075212] text-[14px] lato-regular">Lorem ipsum dolor sit amet consectetur. Condimentum donec eu turpis habitasse faucibus. Pretium convallis viverra amet condimentum. Integer</p>
            </div>
          </div>
        </div>
        </div>

         <div className="px-7 md:px-1">
            <div className="bg-[#E9F5E9] p-5 rounded-md m-3 text-center md:text-start">
         <div className="flex flex-col md:flex-row gap-5 items-center md:items-start">
              <div><img src={assets.feedback1} alt='feedback image' className="w-16 h-auto md:h-12 md:w-36" /></div>
            <div className="flex flex-col gap-1">
                <p>Ali Habib</p>
                <ul className="flex justify-center md:justify-start gap-1 text-[#FE9C00]">
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                    <li><FaStar size={10}/></li>
                </ul>
                <p className="text-[#075212] text-[14px] lato-regular">Lorem ipsum dolor sit amet consectetur. Condimentum donec eu turpis habitasse faucibus. Pretium convallis viverra amet condimentum. Integer</p>
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

export default Feedback;

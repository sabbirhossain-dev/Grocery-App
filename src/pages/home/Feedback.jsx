import React from "react";
import Slider from "react-slick";
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";
import { assets } from '../../assets/assets';
import Title from "./Title";
import { FaStar } from "react-icons/fa";


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
    <div className='bg-white pt-20 pb-20 font-semibold'>

    <div className='mr-10 ml-10 md:mr-16 md:ml-16 lg:mr-28 lg:ml-28'>
    <Title title="Our Customer Feedback" desc="Lorem ipsum dolor sit amet consectetur. Eget sollicitudin proin purus interdum ultrices sed faucibus."/>
    <div className="slider-container">
      <Slider {...settings}>
        <div className="px-1">
            <div className="bg-[#E9F5E9] p-5 rounded-md m-3">
          <div className="flex gap-5">
              <div><img src={assets.feedback1} alt='feedback image' className="h-12 w-36" /></div>
            <div className="flex flex-col gap-1">
                <p>Ali Habib</p>
                <ul className="flex gap-1 text-[#FE9C00]">
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
       

       <div className="px-1">
            <div className="bg-[#E9F5E9] p-5 rounded-md m-3">
          <div className="flex gap-5">
              <div><img src={assets.feedback2} alt='feedback image' className="h-12 w-36" /></div>
            <div className="flex flex-col gap-1">
                <p>Paul Walker</p>
                <ul className="flex gap-1 text-[#FE9C00]">
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


        <div className="px-1">
            <div className="bg-[#E9F5E9] p-5 rounded-md m-3">
          <div className="flex gap-5">
              <div><img src={assets.feedback3} alt='feedback image' className="h-12 w-36" /></div>
            <div className="flex flex-col gap-1">
                <p>Salma Hayek</p>
                <ul className="flex gap-1 text-[#FE9C00]">
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

        <div className="px-1">
            <div className="bg-[#E9F5E9] p-5 rounded-md m-3">
          <div className="flex gap-5">
              <div><img src={assets.feedback2} alt='feedback image' className="h-12 w-36" /></div>
            <div className="flex flex-col gap-1">
                <p>Salam Qadar</p>
                <ul className="flex gap-1 text-[#FE9C00]">
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

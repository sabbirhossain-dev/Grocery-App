import React from "react";
import Slider from "react-slick";
import SliderCard from "./sliderCard";
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";
import { assets } from '../../assets/assets';


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


function Responsive() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <div className="slider-container">
      <Slider {...settings}>
        <div className="px-4">
          <SliderCard data="Vegetables" image={assets.slideImg1} bgColor="bg-[#FEF4EA]" hoverColor="group-hover:bg-[#FEF4EA]"/>
        </div>
       <div className="px-4">
          <SliderCard data="Fruit" image={assets.slideImg2} bgColor="bg-[#E9F5E9]" hoverColor="group-hover:bg-[#E9F5E9]"/>
        </div>
        <div className="px-4">
          <SliderCard data="Meat" image={assets.slideImg3} bgColor="bg-[#FAEAEB]" hoverColor="group-hover:bg-[#FAEAEB]"/>
        </div>
        <div className="px-4">
          <SliderCard data="Fish" image={assets.slideImg4} bgColor="bg-[#EEEEFA]" hoverColor="group-hover:bg-[#EEEEFA]"/>
        </div>
        <div className="px-4">
          <SliderCard data="Fruit" image={assets.slideImg2} bgColor="bg-[#E9F5E9]" hoverColor="group-hover:bg-[#E9F5E9]"/>
        </div>
        
      </Slider>
    </div>
  );
}

export default Responsive;

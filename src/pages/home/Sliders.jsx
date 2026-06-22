// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import SliderCard from "./SliderCard";
// import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
// import { assets } from "../../assets/assets";
// import { NavLink, useLocation } from "react-router-dom";

// // Custom arrows
// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-0 hidden md:block md:left-[-40px] top-1/2 transform -translate-y-1/2 cursor-pointer text-[#FE9C00] border border-[#FE9C00] rounded-full p-1 hover:text-white hover:bg-[#FE9C00] transition-all duration-300 z-10"
//     onClick={onClick}
//   >
//     <BsChevronLeft size={20} />
//   </div>
// );

// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute right-0 hidden md:block md:right-[-40px] top-1/2 transform -translate-y-1/2 cursor-pointer text-[#FE9C00] border border-[#FE9C00] rounded-full p-1 hover:text-white hover:bg-[#FE9C00] transition-all duration-300 z-10"
//     onClick={onClick}
//   >
//     <BsChevronRight size={20} />
//   </div>
// );

// // ফাইলের নামের সাথে মিল রেখে ফাংশনের নাম Sliders করা হলো
// function Sliders() {
//   const location = useLocation();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false,
//           dots: true,
//         },
//       },
//     ],
//   };

//   if (!mounted)
//     return (
//       <div className="w-full h-64 bg-gray-50 animate-pulse rounded-md"></div>
//     );

//   return (
//     <div className="w-full px-4 md:px-0 block">
//       <Slider key={`${location.pathname}-${window.innerWidth}`} {...settings}>
//         <div className="px-2">
//           <NavLink to="/shop/vegetables" className="block w-full">
//             <SliderCard
//               data="Vegetables"
//               image={assets.slideImg1}
//               bgColor="bg-[#FEF4EA]"
//               hoverColor="group-hover:bg-[#FEF4EA]"
//             />
//           </NavLink>
//         </div>

//         <div className="px-2">
//           <NavLink to="/shop/fruits" className="block w-full">
//             <SliderCard
//               data="Fruit"
//               image={assets.slideImg2}
//               bgColor="bg-[#E9F5E9]"
//               hoverColor="group-hover:bg-[#E9F5E9]"
//             />
//           </NavLink>
//         </div>

//         <div className="px-2">
//           <NavLink to="/shop/meats" className="block w-full">
//             <SliderCard
//               data="Meat"
//               image={assets.slideImg3}
//               bgColor="bg-[#FAEAEB]"
//               hoverColor="group-hover:bg-[#FAEAEB]"
//             />
//           </NavLink>
//         </div>

//         <div className="px-2">
//           <NavLink to="/shop/fish" className="block w-full">
//             <SliderCard
//               data="Fish"
//               image={assets.slideImg4}
//               bgColor="bg-[#EEEEFA]"
//               hoverColor="group-hover:bg-[#EEEEFA]"
//             />
//           </NavLink>
//         </div>

//         <div className="px-2">
//           <NavLink to="/shop/fruits" className="block w-full">
//             <SliderCard
//               data="Fruit"
//               image={assets.slideImg2}
//               bgColor="bg-[#E9F5E9]"
//               hoverColor="group-hover:bg-[#E9F5E9]"
//             />
//           </NavLink>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default Slidersimport React from "react";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SliderCard from "./SliderCard";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Sliders() {
  return (
    <div className="w-full px-4 md:px-0 relative group/slider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper !pb-12"
      >
        <SwiperSlide>
          <NavLink to="/shop/vegetables" className="block w-full">
            <SliderCard
              data="Vegetables"
              image={assets.slideImg1}
              bgColor="bg-[#FEF4EA]"
              hoverColor="group-hover:bg-[#FEF4EA]"
            />
          </NavLink>
        </SwiperSlide>

        <SwiperSlide>
          <NavLink to="/shop/fruits" className="block w-full">
            <SliderCard
              data="Fruit"
              image={assets.slideImg2}
              bgColor="bg-[#E9F5E9]"
              hoverColor="group-hover:bg-[#E9F5E9]"
            />
          </NavLink>
        </SwiperSlide>

        <SwiperSlide>
          <NavLink to="/shop/meats" className="block w-full">
            <SliderCard
              data="Meat"
              image={assets.slideImg3}
              bgColor="bg-[#FAEAEB]"
              hoverColor="group-hover:bg-[#FAEAEB]"
            />
          </NavLink>
        </SwiperSlide>

        <SwiperSlide>
          <NavLink to="/shop/fish" className="block w-full">
            <SliderCard
              data="Fish"
              image={assets.slideImg4}
              bgColor="bg-[#EEEEFA]"
              hoverColor="group-hover:bg-[#EEEEFA]"
            />
          </NavLink>
        </SwiperSlide>

        <SwiperSlide>
          <NavLink to="/shop/fruits" className="block w-full">
            <SliderCard
              data="Fruit"
              image={assets.slideImg2}
              bgColor="bg-[#E9F5E9]"
              hoverColor="group-hover:bg-[#E9F5E9]"
            />
          </NavLink>
        </SwiperSlide>

        <SwiperSlide>
          <NavLink to="/shop/meats" className="block w-full">
            <SliderCard
              data="Meat"
              image={assets.slideImg3}
              bgColor="bg-[#FAEAEB]"
              hoverColor="group-hover:bg-[#FAEAEB]"
            />
          </NavLink>
        </SwiperSlide>
      </Swiper>

      <div className="hidden md:block ">
        <button className="custom-next absolute right-[-20px] md:right-[-40px] top-32 cursor-pointer text-[#FE9C00] border-[#FE9C00] border rounded-full p-1 hover:text-white hover:bg-[#FE9C00] transition-all duration-300">
          <BsChevronRight />
        </button>
        <button className="custom-prev absolute left-[-20px] md:left-[-40px] top-32 cursor-pointer text-[#FE9C00] border-[#FE9C00] border rounded-full p-1 hover:text-white hover:bg-[#FE9C00] transition-all duration-300 text-ye">
          <BsChevronLeft />
        </button>
      </div>
    </div>
  );
}

export default Sliders;

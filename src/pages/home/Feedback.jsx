import React from "react";
import Slider from "react-slick";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { assets } from "../../assets/assets";
import Title from "./Title";
import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//  Custom arrows

function Feedback() {
  return (
    <div className="bg-white pt-10 pb-10 md:pt-20 md:pb-20 font-semibold">
      <div className="px-5 md:px-16 lg:px-28">
        <Title
          title="Our Customer Feedback"
          desc="Lorem ipsum dolor sit amet consectetur. Eget sollicitudin proin purus interdum ultrices sed faucibus."
        />
        <div className="slider-container relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".feedback-prev",
              nextEl: ".feedback-next",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            className="mySwiper !pb-12"
          >
            <SwiperSlide>
              <div className="px-7 md:px-1">
                <div className="bg-[#E9F5E9] p-5 rounded-md m-3 text-center md:text-start">
                  <div className="flex flex-col gap-2 md:flex-row md:gap-5 items-center md:items-start">
                    <div>
                      <img
                        src={assets.feedback1}
                        alt="feedback image"
                        className="w-12 h-auto md:h-12 md:w-20"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p>Ali Habib</p>
                      <ul className="flex justify-center md:justify-start gap-1 text-[#FE9C00]">
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                      </ul>
                      <p className="text-[#075212] text-[14px] lato-regular">
                        Lorem ipsum dolor sit amet consectetur. Condimentum
                        donec eu turpis habitasse faucibus. Pretium convallis
                        viverra amet condimentum. Integer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="px-7 md:px-1">
                <div className="bg-[#E9F5E9] p-5 rounded-md m-3 text-center md:text-start">
                  <div className="flex flex-col gap-2 md:flex-row md:gap-5 items-center md:items-start">
                    <div>
                      <img
                        src={assets.feedback2}
                        alt="feedback image"
                        className="w-12 h-auto md:h-12 md:w-20"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p>Paul Walker</p>
                      <ul className="flex justify-center md:justify-start gap-1 text-[#FE9C00]">
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                      </ul>
                      <p className="text-[#075212] text-[14px] lato-regular">
                        Lorem ipsum dolor sit amet consectetur. Condimentum
                        donec eu turpis habitasse faucibus. Pretium convallis
                        viverra amet condimentum. Integer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="px-7 md:px-1">
                <div className="bg-[#E9F5E9] p-5 rounded-md m-3 text-center md:text-start">
                  <div className="flex flex-col gap-2 md:flex-row md:gap-5 items-center md:items-start">
                    <div>
                      <img
                        src={assets.feedback3}
                        alt="feedback image"
                        className="w-12 h-auto md:h-12 md:w-20"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p>Salma Hayek</p>
                      <ul className="flex justify-center md:justify-start gap-1 text-[#FE9C00]">
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                      </ul>
                      <p className="text-[#075212] text-[14px] lato-regular">
                        Lorem ipsum dolor sit amet consectetur. Condimentum
                        donec eu turpis habitasse faucibus. Pretium convallis
                        viverra amet condimentum. Integer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="px-7 md:px-1">
                <div className="bg-[#E9F5E9] p-5 rounded-md m-3 text-center md:text-start">
                  <div className="flex flex-col gap-2 md:flex-row md:gap-5 items-center md:items-start">
                    <div>
                      <img
                        src={assets.feedback1}
                        alt="feedback image"
                        className="w-12 h-auto md:h-12 md:w-20"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p>Ali Habib</p>
                      <ul className="flex justify-center md:justify-start gap-1 text-[#FE9C00]">
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                        <li>
                          <FaStar size={10} />
                        </li>
                      </ul>
                      <p className="text-[#075212] text-[14px] lato-regular">
                        Lorem ipsum dolor sit amet consectetur. Condimentum
                        donec eu turpis habitasse faucibus. Pretium convallis
                        viverra amet condimentum. Integer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>{" "}
          {/* buttons */}
          <div className="hidden md:block">
            <button className="feedback-next absolute right-[-20px] md:right-[-30px] top-20 transform -translate-y-1/2  cursor-pointer text-[#FE9C00] border-[#FE9C00] border rounded-full p-1 hover:text-white hover:bg-[#FE9C00] transition-all duration-300">
              <BsChevronRight />
            </button>
            <button className="feedback-prev absolute left-[-20px] md:left-[-30px] top-20 transform -translate-y-1/2  cursor-pointer text-[#FE9C00] border-[#FE9C00] border rounded-full p-1 hover:text-white hover:bg-[#FE9C00] transition-all duration-300 text-ye">
              <BsChevronLeft />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;

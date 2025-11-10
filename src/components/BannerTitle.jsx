import React from 'react'

const BannerTitle = ({title,image}) => {
  return (
    <>
        {/* banner start*/}

      <div className="pt-10 font-semibold bg-[#E9F5E9]">
        <div className="mx-6 md:mx-16 lg:mx-28">  
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">

            {/* Title (centered) */}
            <div className="w-full md:w-9/12 mb-6 md:mb-0 text-center ">
              <h3 className="w-full mx-auto text-[30px] md:text-[40px] lg:text-[48px] font-bold lato-bold text-[#075212] text-center mt-[-10px] md:mt-[-60px] lg:mt-[-80px] pl-0 md:pl-56">
                {title}
              </h3>
            </div>

            {/* Image (right side) */}
            <div className="w-full md:w-3/12 flex justify-center md:justify-end">
              <img
                src={image}
                alt="banner img"
                className="max-w-[250px] md:max-w-[400px] lg:max-w-full h-auto mx-auto"
              />
            </div>

          </div>     
        </div>
      </div>

    {/* banner end */}
    </>
  )
}

export default BannerTitle
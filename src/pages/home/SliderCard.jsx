import React from 'react'


const SliderCard = (props) => {
  return (
     <>
      <div className="group">
        <div className={`relative h-64 bg-white shadow-md rounded-md overflow-hidden transition-all duration-700 ${props.hoverColor} duration-300 cursor-pointer`}>

            {/* Angled Background (hidden on hover) */}
            <div
            className={`absolute top-0 left-0 w-full h-24 ${props.bgColor} transition-all duration-300 group-hover:opacity-0`}
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0% 100%)' }}
            ></div>

            {/* Title */}
            <div className="relative z-10 pt-6 text-center">
            <h2 className="text-green-800 font-semibold text-lg">{props.data}</h2>
            </div>

            {/* Image */}
            <div className="relative z-10 flex justify-center mt-4 px-4">
            <img src={props.image} alt="fruit" className="w-32 h-auto object-contain" />
            </div>

        </div>
        </div>
     </>

  )
}

export default SliderCard
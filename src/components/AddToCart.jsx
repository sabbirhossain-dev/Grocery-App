import React from 'react'
import {toast } from 'react-toastify';


const AddToCart = () => {

  return (
    <>
      <button className='bg-[#01A919] text-white p-1 pl-2 pr-2 md:p-2 md:pl-3 md:pr-3 rounded-lg text-[9px] md:text-[13px] lato-bold mt-1 hover:bg-green-800 transition-all duration-300' onClick={()=>{toast.success("product added to cart!")}}>Add To Cart</button>
    </>
  )
}

export default AddToCart
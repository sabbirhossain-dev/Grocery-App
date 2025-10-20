import React from 'react'
import { ToastContainer, toast } from 'react-toastify';


const AddToCart = () => {

  return (
    <>
      <button className='bg-[#01A919] text-white p-2 pl-3 pr-3 rounded-lg text-[13px] lato-bold mt-1 hover:bg-green-800 transition-all duration-300' onClick={()=>{toast.success("product added to cart!")}}>Add To Cart</button>
    </>
  )
}

export default AddToCart
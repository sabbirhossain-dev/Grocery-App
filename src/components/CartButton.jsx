import React, { useState } from 'react'
import { useContext } from 'react'
import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShopContext } from '../context/ShopContext'
import Cart from '../pages/Cart'
import { ImTab } from 'react-icons/im'
import { FaCross } from 'react-icons/fa6'
import { RxCross1 } from 'react-icons/rx'

const CartButton = () => {


    // const {addToCart} = useContext(ShopContext)
    const [itemToggle, setItemToggle] = useState(false);

    const {cartItems} = useContext(ShopContext)
// TOTAL COUNT
  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )
  return (
      <>
      <div className='bg-[#E9F5E9] shadow-md text-xl px-3 py-3 md:text-3xl md:px-4 md:py-4 rounded-md fixed z-50 top-1/2 -translate-y-1/2 right-0 text-[#2e5207]'><button onClick={()=>(setItemToggle(!itemToggle))} className='flex justify-center items-center flex-col gap-1'> <BsCart /><span><p className='text-xs md:text-sm relative'>{totalCount} items</p></span></button></div>

      {itemToggle && ( 
        <div className='w-1/3 flex justify-self-end fixed top-28 right-0 z-50'>

         <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className='fixed top-20 md:top-[110px] xl:top-[110px] right-0 max-h-[84vh] w-[350px] md:w-[400px] bg-[#E9F5E9] shadow-2xl overflow-y-auto z-50 border border-gray-300'>
            <div
           
            className='text-right '>
                <button className='p-2 px-6 bg-red-600 hover:bg-red-800 transition-all duration-300 text-white' onClick={()=>{setItemToggle(false)}}><RxCross1 /></button>
            </div>
         <Cart />
        </motion.div> 
        </div>)}
      </>
)
}

export default CartButton
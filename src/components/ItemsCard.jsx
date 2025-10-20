import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import AddToCart from './addToCart';
import { Link } from 'react-router-dom';


const ItemsCard = ({id,name,desc,price,subprice,image}) => {
  return (
    <Link to={`/shop/fruits/${id}`}>
      <div className='bg-white border border-[#e2e2e2] p-6 rounded-md group hover:shadow-lg transition-all duration-300'>
        <div className='flex justify-between'>
          <span className='text-[#FE9C00] lato-bold text-[12px] p-3 h-9 w-18 bg-[#FFF2DD] flex justify-center items-center rounded-md'>50% Off</span>
        <div className=' opacity-0 flex flex-col gap-3 text-[#01A919] group-hover:opacity-100 transition-all duration-300'>
            <button className='bg-[#E9F5E9] p-1 pl-2 pr-2 rounded-md'><IoEyeOutline /></button>
            <button className='bg-[#E9F5E9] p-1 pl-2 pr-2 rounded-md'><GoHeart /></button>
        </div>
        </div>

       <div className='flex flex-col gap-3 justify-center items-center'>
         <div>
          <img src={image} alt='cucumber' />
        </div>
        <div className='flex flex-col gap-1 justify-center items-center'>
          <p className='lato-bold text-[14px] text-[#075212]'>{name}</p>
          <p className='lato-bold text-[14px] text-[#075212]'>{desc}</p>
          <div className='flex gap-2'>
          <p className='text-[#FE9C00] lato-regular text-[14px]'>${price}</p>
          <p className='lato-regular text-[14px] text-[#075212] line-through'>${subprice}</p>
          </div>
          <AddToCart />
        </div>
       </div>
    </div>
    </Link>
  )
}

export default ItemsCard
import React, {  } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const ItemsCard = ({/*id*/addToCart,item}) => {
  const handlelog =()=>{
    addToCart(item);
    console.log(item)
    toast.success(`${item.name} is added !`)
  }

  return (
    // <Link to={`/shop/fruits/${id}`}>
      <div className='bg-white border border-[#e2e2e2] p-4 md:p-6 rounded-md group hover:shadow-lg transition-all duration-300'>
        <div className='flex justify-between'>
          <span className='text-[#FE9C00] lato-bold text-[9px] md:text-[12px] p-2 d:p-3 h-7 w-15 md:h-9 md:w-18 bg-[#FFF2DD] flex justify-center items-center rounded-md'>50% Off</span>
        <div className=' opacity-0 flex flex-col gap-3 text-[#01A919] group-hover:opacity-100 transition-all duration-300'>
            <button className='bg-[#E9F5E9] p-1 pl-2 pr-2 rounded-md'><IoEyeOutline /></button>
            <button className='bg-[#E9F5E9] p-1 pl-2 pr-2 rounded-md'><GoHeart /></button>
        </div>
        </div>

       <div className='flex flex-col gap-3 justify-center items-center'>
         <div>
          <img src={item.image} alt='cucumber' className='h-24 md:h-36 w-auto'/>
        </div>
        <div className='flex flex-col gap-1 justify-center items-center'>
          <p className='lato-bold text-[12px] md:text-[14px] text-[#075212]'>{item.name}</p>
          <p className='lato-bold text-[12px] md:text-[14px] text-[#075212]'>{item.desc}</p>
          <div className='flex gap-2'>
          <p className='text-[#FE9C00] lato-regular text-[12px] md:text-[14px]'>${item.price}</p>
          <p className='lato-regular text-[12px] md:text-[14px] text-[#075212] line-through'>${item.subprice}</p>
          </div>
          <button className='bg-[#01A919] text-white p-1 pl-2 pr-2 md:p-2 md:pl-3 md:pr-3 rounded-lg text-[9px] md:text-[13px] lato-bold mt-1 hover:bg-green-800 transition-all duration-300'  onClick={handlelog} >Add to Cart</button>
          {/* <AddToCart onClick={handlelog}/> */}
        </div>
       </div>
    </div>
    /* </Link> */
  )
}

export default ItemsCard
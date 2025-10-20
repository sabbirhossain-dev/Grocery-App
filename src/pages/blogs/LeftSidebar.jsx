import React from 'react'
import { assets } from '../../assets/assets'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

const LeftSidebar = () => {
  return (
    <>
         <div className='w-full md:w-2/6 flex flex-col gap-8'>
              <div className='relative'>
                <input placeholder='Search' type='text' className='placeholder:text-[16px] placeholder:text-[#075212] border-b border-[#BDBBBB] pl-6 outline-none'/>
                <button className='absolute left-0 top-1 text-[#075212]'><BsSearch/></button>
              </div>

              <div>
                <p className='text-[#075212] text-[20px] lato-regular uppercase mb-4'>collections</p>
                <ul className='flex flex-col gap-2'>
                  <li className='text-[#075212] text-[16px] lato-regular'><Link>All</Link></li>

                  <li className='text-[#075212] text-[16px] lato-regular'><Link to='/shop/vegetables'>Vegetables</Link></li>

                  <li className='text-[#075212] text-[16px] lato-regular'><Link to='/shop/fruits'>Fruit</Link></li>

                  <li className='text-[#075212] text-[16px] lato-regular'><Link>Fish</Link></li>

                  <li className='text-[#075212] text-[16px] lato-regular'><Link>Milk & Dairy</Link></li>

                  <li className='text-[#075212] text-[16px] lato-regular'><Link>Coffee & Drinks</Link></li>

                  <li className='text-[#075212] text-[16px] lato-regular'><Link>Grocery</Link></li>

                  <li className='text-[#075212] text-[16px] lato-regular'><Link>Pet Food</Link></li>

                  <li className='text-[#075212] text-[16px] lato-regular'><Link>Cleaning Essentials</Link></li>
                </ul>
              </div>


              <div>
                  <p className='text-[#075212] text-[20px] lato-regular uppercase mb-4'>Recent Post</p>
                  <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                      <div><img src={assets.brecent1} /></div>
                      <div>
                        <p className='lato-bold text-[#075212] text-[16px] w-44 pb-2'>Importance of healthy breakfast in  busy life</p>
                        <p className='lato-regular text-[#075212] text-[14px]'>March 9, 2023</p>
                      </div>
                    </div>

                    <div className='flex gap-2 items-center'>
                      <div><img src={assets.brecent2} /></div>
                      <div>
                        <p className='lato-bold text-[#075212] text-[16px] w-44 pb-2'>Techniques to keep fruits fresh for longer </p>
                        <p className='lato-regular text-[#075212] text-[14px]'>April 2, 2023</p>
                      </div>
                    </div>

                    <div className='flex gap-2 items-center'>
                      <div><img src={assets.brecent3} /></div>
                      <div>
                        <p className='lato-bold text-[#075212] text-[16px] w-44 pb-2'>5 Delicious Mushroom Recipes</p>
                        <p className='lato-regular text-[#075212] text-[14px]'>May 9, 2023</p>
                      </div>
                    </div>
                  </div>
              </div>



              <div>
                <p className='text-[#075212] text-[20px] lato-regular uppercase mb-4'>Tags</p>
                <p  className='text-[#075212] text-[16px] lato-regular w-[280px]'>All Products-Vegetables-Fruits-
                Fish-Milk & Dairy-Coffee & Drinks-
                Grocery-Pet Food-Cleaning Essentials</p>
              </div>


              <div>
                <p className='text-[#075212] text-[20px] lato-regular uppercase mb-4'>Instagram</p>
                <div className='flex gap-3'>
                  <div><img src={assets.binsta1} /></div>
                  <div className='flex flex-col gap-3'>
                  <img src={assets.binsta2} />
                  <img src={assets.binsta3} />
                  </div>
                </div>
              </div>


              <div>
                <p className='text-[#075212] text-[20px] lato-regular uppercase mb-4'>Follow Us</p>
                <ul className='flex items-center gap-3 text-[#075212]'>

                  <li className='hover:text-red-500 transition-all duration-300'><Link><FaInstagram size={26}/></Link></li>
                  <li className='hover:text-blue-500 transition-all duration-300'><Link><CiLinkedin size={30}/></Link></li>

                  <li className='p-[2px] border-2  rounded-sm border-[#075212] hover:text-blue-500 hover:border-blue-500 transition-all duration-300'><Link><TiSocialFacebook/></Link></li>

                   <li className='p-[2px] border-2 rounded-sm border-[#075212] hover:text-blue-500 hover:border-blue-500 transition-all duration-300'><Link><FaTwitter/></Link></li>
                  
                </ul>
              </div>
            </div>


    </>
  )
}

export default LeftSidebar
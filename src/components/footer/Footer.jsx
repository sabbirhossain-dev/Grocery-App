import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { GoArrowUpRight } from "react-icons/go";
import { Link, NavLink } from 'react-router-dom'
import { FaFacebookF,FaTwitter ,FaLinkedinIn ,FaInstagram  } from "react-icons/fa";
import { LuCopyright } from "react-icons/lu";



const Footer = () => {
  return (
    <>
       <div className='bg-[#075212] text-white pt-16 pb-16'>

        <div className='flex flex-col gap-20 mr-10 ml-10 md:mr-16 md:ml-16 lg:mr-28 lg:ml-28 lato-regular'>


            <div className='flex flex-col gap-16 lg:flex-row justify-between'>
                <div className='flex gap-20 md:gap-32 w-full md:w-5/12'>
                <div className=''>
                        <NavLink to='/'>
                        <div className='flex items-center '>
                        <MdShoppingCart size={28} className='text-[#FE9C00]'/>
                        <p className='oleo-script-regular text-3xl -mt-2'>gr<span className='text-[#FE9C00]'>o</span>cery<span className='text-[#FE9C00]'>.</span></p>
                        </div>
                        </NavLink>
                        <p className='text-md w-36 pt-5 pb-2 leading-tight'>Subscribe to our newsletter</p>
                        <div className='relative'>
                            <input placeholder='Your email' type='email' className='bg-transparent border-b placeholder:text-white pb-1' />
                            <button className='absolute right-0 bottom-1'><GoArrowUpRight size={20}/></button>
                        </div>
                </div>



                        <div className='flex flex-col gap-5 text-[16px]'>
                            <p className='text-[18px]'>Useful Links</p>
                            <ul className='flex flex-col gap-2'>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/pages/about'>About</NavLink></li>
                                <li><NavLink to='/shop'>Shop</NavLink></li>
                                <li><NavLink to='/blogs'>Blog</NavLink></li>
                                <li><NavLink to='/contact'>Contact</NavLink></li>
                                <li><NavLink to='/pages/faq'>FAQ</NavLink></li>
                            </ul>
                        </div>
            </div>

            <div className='flex w-full gap-20 md:w-5/12 md:gap-32'>
                <div className='flex flex-col gap-5 text-[16px]'>
                <p className='text-[18px]'>Categories</p>
                <ul className='flex flex-col gap-2'>
                    <li><NavLink to='/vegetables'>Vegetables</NavLink></li>
                    <li><NavLink to='/fruits'>Fruit</NavLink></li>
                    <li><NavLink to='/meat'>Meat</NavLink></li>
                    <li><NavLink to='/fish'>Fish</NavLink></li>
                    <li><NavLink to='/milk&dairy'>Milk & Dairy</NavLink></li>
                    <li><NavLink to='/coffee&drinks'>Coffee & Drinks</NavLink></li>
                    <li><NavLink to='/grocery'>Grocery</NavLink></li>
                    <li><NavLink to='/petfood'>Pet Food</NavLink></li>
                    <li><NavLink to='/cleaningessentials'>Cleaning Essentials</NavLink></li>
                </ul>
            </div>

            <div className='flex flex-col gap-5 text-[16px]'>
                <p className='text-[18px]'>Contact</p>
                <ul className='flex flex-col gap-2'>
                    <li>+1(313)4285227</li>
                    <li>info@jemstione.com</li>
                    <li>contact@jemstione.com</li>
                </ul>
            </div>
            </div>

            <div className='flex flex-col gap-5 text-[16px]'> 
            <p className='text-[18px]'>Follow Us:</p>
                <ul className='flex gap-3'>
                    <li className='border p-1 rounded-sm cursor-pointer'><Link to='/'>
                        <FaInstagram />
                    </Link></li>

                    <li className='border p-1 rounded-sm cursor-pointer'><Link to='/'>
                        <FaLinkedinIn />
                    </Link></li>
                    
                    <li className='border p-1 rounded-sm cursor-pointer'><Link to='/'>
                        <FaFacebookF />
                    </Link></li>

                    <li className='border p-1 rounded-sm cursor-pointer'><Link to='/'>
                        <FaTwitter />
                    </Link></li>
                </ul>
            </div>
            </div>




        <div className='flex justify-between pt-2 border-t text-[#748398] border-t-[#748398] text-sm'>
          <div className='flex justify-between items-center gap-1'>
            <LuCopyright />
            <p>2020 Casir. All right reserved</p>
          </div>

          <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        </div>



       </div>
    </>
  )
}

export default Footer
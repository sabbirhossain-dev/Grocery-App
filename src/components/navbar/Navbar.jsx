import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom'
import { BiDownArrow, BiSearch } from 'react-icons/bi'
import { MdShoppingCart } from "react-icons/md";
import { FaBarcode, FaBars, FaCross, FaRegUser } from "react-icons/fa6";
import { MdKeyboardArrowUp, MdOutlineShoppingBag } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross1 } from 'react-icons/rx';
import { HiMiniBars3, HiMiniBars3BottomLeft } from 'react-icons/hi2';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isPageopen, setIsPageOpen] = useState(false)
    const [menuToggle, setMenuToggle] = useState(false)

  return (
    <>
        <div className='bg-[#E9F5E9] pt-10 pb-10 font-semibold'>
<div className='mr-8 ml-8 md:mr-16 md:ml-16 lg:mr-28 lg:ml-28 '>

{/* toggle menubar start */}

    <div className='md:hidden flex justify-between items-center'>
        <div className=' flex gap-3 items-center '>
        

            <NavLink to='/'>
                <div className='flex justify-center items-center '>
                <MdShoppingCart size={28} className='text-[#FE9C00]'/>
                <p className='oleo-script-regular text-3xl text-[#075212] -mt-2'>gr<span className='text-[#FE9C00]'>o</span>cery<span className='text-[#FE9C00]'>.</span></p>
                </div>
            </NavLink>
    </div>

    <div className='flex gap-6'>
        <ul className='flex justify-center items-center gap-4 text-[#075212]'>
            <Link><BiSearch size={20} /></Link>
            <Link to="/cart"><MdOutlineShoppingBag  size={20}  /></Link>
            <Link><FaRegUser size={18} /></Link>
        </ul>
        <button className='text-[#075212] bg-[#E9F5E9] p-[5px] border border-[#FE9C00] shadow-sm  rounded-md' onClick={()=>{setMenuToggle(!menuToggle)}}>
            {menuToggle ? <RxCross1 size={28} /> : <HiMiniBars3BottomLeft size={28} />}
        </button>
        </div>

    </div>


{/* toggle menu item start */}
{menuToggle && (
     <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ duration: 0.3 }}
        className='md:hidden w-3/5 absolute right-0'>
        <ul className='flex flex-col justify-center pl-32 p-5 pb-10 rounded-md mt-2 w-full bg-[#E9F5E9] shadow-xl gap-7 text-md'>
        <li><NavLink
            to="/"
            className={({ isActive }) =>
                `transition-colors duration-300 ${
                isActive ? 'text-[#FE9C00]' : 'text-[#075212] hover:text-[#FE9C00]'
                }`} onClick={()=>{setMenuToggle(!menuToggle)}}>Home</NavLink>
                </li>

            {/* dropdown menu start*/}

            <li
            className='relative'
            onMouseEnter={()=>(setIsOpen(!isOpen))}
            onMouseLeave={()=>setIsOpen(false)}
            >
            
            <NavLink
            to="/shop"
            className={({ isActive }) =>
                `transition-colors duration-300 ${
                isActive ? 'text-[#FE9C00]' : 'text-[#075212] hover:text-[#FE9C00]'
                }`}>Shop <span className='inline-flex transition-transform duration-300'>{isOpen ? <MdKeyboardArrowUp size={16} /> :<MdKeyboardArrowDown size={16}/>}</span></NavLink>

                {isOpen && (
                    <ul className='absolute -left-32 p-8 text-center rounded-sm flex flex-col gap-2 pt-5 w-80 bg-white shadow-xl z-50'>
                        <li className='text-[#075212] hover:text-[#FE9C00]'>
                            <NavLink to='shop/fruits' onClick={()=>{setMenuToggle(!menuToggle)}}>Fruits</NavLink>
                        </li>
                        <li className='text-[#075212] hover:text-[#FE9C00]'>
                            <NavLink to='shop/vegetables' onClick={()=>{setMenuToggle(!menuToggle)}}>Vegatables</NavLink>
                        </li>
                    </ul>
                )}
                </li>


            {/* dropdown menu end*/}



            {/* dropdown menu start*/}

            <li
            className='relative'
            onMouseEnter={()=>(setIsPageOpen(!isPageopen))}
            onMouseLeave={()=>setIsPageOpen(false)}
            >
            
            <NavLink
            to="/pages"
            className={({ isActive }) =>
                `transition-colors duration-300 ${
                isActive ? 'text-[#FE9C00]' : 'text-[#075212] hover:text-[#FE9C00]'
                }`}>Pages <span className='inline-flex transition-transform duration-300'>{isPageopen ? <MdKeyboardArrowUp size={16} /> :<MdKeyboardArrowDown size={16}/>}</span></NavLink>

                {isPageopen && (
                    <ul className='absolute -left-32 p-8 text-center rounded-sm flex flex-col gap-2 pt-5 w-80 bg-white shadow-xl'>
                        <li className='text-[#075212] hover:text-[#FE9C00]' onClick={()=>{setMenuToggle(!menuToggle)}}>
                            <NavLink to='pages/about'>About Us</NavLink>
                        </li>
                        <li className='text-[#075212] hover:text-[#FE9C00]' onClick={()=>{setMenuToggle(!menuToggle)}}>
                            <NavLink to='pages/faq'>FAQ</NavLink>
                        </li>
                        <li className='text-[#075212] hover:text-[#FE9C00]' onClick={()=>{setMenuToggle(!menuToggle)}}>
                            <NavLink to='pages/terms&conditions'>Term & Conditions</NavLink>
                        </li>
                    </ul>
                )}
                </li>


            {/* dropdown menu end*/}

            

                <li><NavLink
            to="/blogs"
            className={({ isActive }) =>
                `transition-colors duration-300 ${
                isActive ? 'text-[#FE9C00]' : 'text-[#075212] hover:text-[#FE9C00]'
                }`} onClick={()=>{setMenuToggle(!menuToggle)}}>Blogs</NavLink>
                </li>

            <li><NavLink
            to="/contact"
            className={({ isActive }) =>
                `transition-colors duration-300 ${
                isActive ? 'text-[#FE9C00]' : 'text-[#075212] hover:text-[#FE9C00]'
                }`} onClick={()=>{setMenuToggle(!menuToggle)}}>Contact</NavLink>
                </li>
        </ul>
    </motion.div>


)}
{/* toggle menu item end */}




{/* toggle menubar end */}









        {/* menubar start */}

            <div className='hidden md:flex justify-between items-center'>

            <div>
                <NavLink to='/'> <div className='flex justify-center items-center '>
                <MdShoppingCart size={28} className='text-[#FE9C00]'/>
                 <p className='oleo-script-regular text-3xl text-[#075212] -mt-2'>gr<span className='text-[#FE9C00]'>o</span>cery<span className='text-[#FE9C00]'>.</span></p>
                </div></NavLink>
            </div>
            <div>
                <ul className='flex justify-center items-center gap-7 text-md'>
                <li><NavLink
                    to="/"
                    className={({ isActive }) =>
                        `transition-colors duration-300 ${
                        isActive ? 'text-[#FE9C00]' : 'text-[#075212] hover:text-[#FE9C00]'
                        }`}>Home</NavLink>
                        </li>

                    {/* dropdown menu start*/}

                    <li
                    className='relative'
                    onMouseEnter={()=>(setIsOpen(!isOpen))}
                    onMouseLeave={()=>setIsOpen(false)}
                    >
                    
                    <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                        `transition-colors duration-300 ${
                        isActive ? 'text-[#FE9C00]' : 'text-[#075212] hover:text-[#FE9C00]'
                        }`}>Shop <span className='inline-flex transition-transform duration-300'>{isOpen ? <MdKeyboardArrowUp size={16} /> :<MdKeyboardArrowDown size={16}/>}</span></NavLink>

                        {isOpen && (
                            <ul className='absolute -left-40 p-8 text-center rounded-sm flex flex-col gap-2 pt-5 w-96 bg-white shadow-xl'>
                                <li className='text-[#075212] hover:text-[#FE9C00]'>
                                    <NavLink to='shop/fruits'>Fruits</NavLink>
                                </li>
                                <li className='text-[#075212] hover:text-[#FE9C00]'>
                                    <NavLink to='shop/vegetables'>Vegatables</NavLink>
                                </li>
                            </ul>
                        )}
                     </li>


                    {/* dropdown menu end*/}



                    {/* dropdown menu start*/}

                    <li
                    className='relative'
                    onMouseEnter={()=>(setIsPageOpen(!isPageopen))}
                    onMouseLeave={()=>setIsPageOpen(false)}
                    >
                    
                    <NavLink
                    to="/pages"
                    className={({ isActive }) =>
                        `transition-colors duration-300 ${
                        isActive ? 'text-[#FE9C00]' : 'text-[#075212] hover:text-[#FE9C00]'
                        }`}>Pages <span className='inline-flex transition-transform duration-300'>{isPageopen ? <MdKeyboardArrowUp size={16} /> :<MdKeyboardArrowDown size={16}/>}</span></NavLink>

                        {isPageopen && (
                            <ul className='absolute -left-40 p-8 text-center rounded-sm flex flex-col gap-2 pt-5 w-96 bg-white shadow-xl'>
                                <li className='text-[#075212] hover:text-[#FE9C00]'>
                                    <NavLink to='pages/about'>About Us</NavLink>
                                </li>
                                <li className='text-[#075212] hover:text-[#FE9C00]'>
                                    <NavLink to='pages/faq'>FAQ</NavLink>
                                </li>
                                <li className='text-[#075212] hover:text-[#FE9C00]'>
                                    <NavLink to='pages/terms&conditions'>Term & Conditions</NavLink>
                                </li>
                            </ul>
                        )}
                     </li>


                    {/* dropdown menu end*/}

                    

                        <li><NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                        `transition-colors duration-300 ${
                        isActive ? 'text-[#FE9C00]' : 'text-[#075212] hover:text-[#FE9C00]'
                        }`}>Blogs</NavLink>
                        </li>

                    <li><NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `transition-colors duration-300 ${
                        isActive ? 'text-[#FE9C00]' : 'text-[#075212] hover:text-[#FE9C00]'
                        }`}>Contact</NavLink>
                        </li>
                </ul>
            </div>

            <div>
                <ul className='flex justify-center items-center gap-4 text-[#075212]'>
                    <Link><BiSearch size={20} /></Link>
                    <Link to="/cart"><MdOutlineShoppingBag  size={20}  /></Link>
                    <Link><FaRegUser size={18}  /></Link>
                </ul>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Navbar
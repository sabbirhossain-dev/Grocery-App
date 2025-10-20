import React from 'react'
import BannerTitle from '../../components/BannerTitle'
import { assets } from '../../assets/assets'
import Questions from './Questions'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const FAQ = () => {
  return (
    <>
      <section>
        <BannerTitle title="FAQ" image={assets.faqbanner}/>

      {/* main content start */}

      <div className="pt-20 pb-20 font-semibold bg-white">
      <div className="mx-6 md:mx-16 lg:mx-28">
        
        <div className='flex flex-col md:flex-row justify-between gap-20'>
          <div className='w-full md:w-4/12 flex flex-col gap-6 pt-24'>
              

              <div>
                <p className='text-[#075212] text-[20px] lato-regular uppercase mb-4'>CUSTOMER SERVICES</p>
                <ul className='flex flex-col gap-2'>
                  <li className='text-[#075212] text-[16px] lato-regular'><Link>My Account</Link></li>

                  <li className='text-[#075212] text-[16px] lato-regular'><Link to='/shop/vegetables'>Company Policies</Link></li>

                  <li className='text-[#075212] text-[16px] lato-regular'><Link to='/shop/fruits'>Payment Option</Link></li>

                  <li className='text-[#075212] text-[16px] lato-regular'><Link>Gift Cart</Link></li>

                  <li className='text-[#075212] text-[16px] lato-regular'><Link to='/pages/terms&conditions'>Terms & Conditions</Link></li>

                  <li className='text-[#075212] text-[16px] lato-regular'><Link>How do I Login</Link></li>

                  <li className='text-[#075212] text-[16px] lato-regular'><Link>How Delivery works in USA</Link></li>
                </ul>
              </div>


              <div className='relative'>
                <input placeholder='Search' type='text' className='placeholder:text-[16px] placeholder:text-[#075212] border-b border-[#BDBBBB] pl-6 outline-none uppercase pb-1'/>
                <button className='absolute left-0 top-1 text-[#075212]'><BsSearch/></button>
              </div>
          </div>





                    {/* right side start */}

          <div className='w-full md:w-8/12'>

          <h3 className='text-[#075212] text-[24px] md:text-[40px] lg:text-[48px] lato-regular font-medium uppercase border-b border-[#B7B2B2] pb-7 tracking-wider'>FREQUENTLY ASKED QUESTIONS</h3>
          <Questions no ="1." title="Can I modify my order?"/>
          <Questions no ="2." title="Can I Ship my order internationally?"/>
          <Questions no ="3." title="What payment methods does gemstone.com accept?"/>
          <Questions no ="4." title="Can I use more than (1) form of payment?"/>
          <Questions no ="5." title="What is the shipping fee and delivery timeline?"/>
          <Questions no ="6." title="How can I check the status of my order?"/>
          <Questions no ="7." title="What do I do if I ordered the wrong size?"/>
          <Questions no ="8." title="Where does my order ship from?"/>
          <Questions no ="9." title="How do I find my order number?"/>
          <Questions no ="10." title="Can I change my address after ordering?"/>

          <div className='mt-10 mb-5'>
            <p className='text-[#075212] text-[20px] md:text-[28px] lg:text-[36px] lato-regular font-medium mb-5'>Still No Luck? We Can Help!</p>
            <button >
              <Link to='/contact' className='bg-[#01A919] text-white text-[10px] md:text-[12px] lg:text-[13px] lato-regular font-medium pt-2 pb-2 pl-7 pr-7 rounded-md hover:bg-[#075212] transition-all duration-300'>Contact Us</Link>
            </button>
          </div>
          </div>
                    {/* right side end */}

        </div>

      </div>
      </div>
      {/* main content end */}
         
      </section>
    </>
  )
}

export default FAQ
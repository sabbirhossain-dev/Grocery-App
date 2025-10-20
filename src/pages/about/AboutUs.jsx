import React from 'react'
import { assets } from '../../assets/assets'
import AboutTitle from './AboutTitle'
import Blogs from '../home/Blogs'
import Feedback from '../home/Feedback'
import BannerTitle from '../../components/BannerTitle'

const AboutUs = () => {
  return (
    <>

    <div>
      <BannerTitle title="About Us" image={assets.aboutbanner}/>
    </div>




    {/* about content start */}

        <div className="pt-20 pb-20 font-semibold bg-white">
        <div className="mx-6 md:mx-16 lg:mx-28">

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='p-2'>
              <AboutTitle title="Our Story" desc1="Lorem ipsum dolor sit amet consectetur. Ultricies amet et netus cursus quam commodo. Gravida facilisis pellentesque mi aliquet maecenas ut elit euismod scelerisque. Varius venenatis placerat nisl lectus tortor. Adipiscing aliquam turpis sed duis. Gravida fringilla amet ornare ut arcu cursus non vestibulum" desc2=" molestie. At faucibus pulvinar in blandit vitae augue. Proin ac pellentesque consectetur potenti pretium. Sit risus sit sollicitudin in volutpat. Ut quam massa magna sed. Lacus ut morbi ultrices tristique nisi aenean montes at egestas. Nisi nisl tortor nibh nunc malesuada id leo mi odio." />
            </div>

            <div className='bg-[#E9F5E9] flex justify-center items-center rounded-md'>
              <img src={assets.about1} alt='image'/>
            </div>
          </div>

           <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-20 pb-20'>
           
            <div className='bg-[#E9F5E9] flex justify-center items-center rounded-md'>
              <img src={assets.about2} alt='image'/>
            </div>
            <div className='p-2'>
              <AboutTitle title="Our Achievement" desc1="Lorem ipsum dolor sit amet consectetur. Ultricies amet et netus cursus quam commodo. Gravida facilisis pellentesque mi aliquet maecenas ut elit euismod scelerisque. Varius venenatis placerat nisl lectus tortor. Adipiscing aliquam turpis sed duis. Gravida fringilla amet ornare ut arcu cursus non vestibulum" desc2=" molestie. At faucibus pulvinar in blandit vitae augue. Proin ac pellentesque consectetur potenti pretium. Sit risus sit sollicitudin in volutpat. Ut quam massa magna sed. Lacus ut morbi ultrices tristique nisi aenean montes at egestas. Nisi nisl tortor nibh nunc malesuada id leo mi odio." />
            </div>

          </div>


           <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='p-2'>
              <AboutTitle title="Our Goal" desc1="Lorem ipsum dolor sit amet consectetur. Ultricies amet et netus cursus quam commodo. Gravida facilisis pellentesque mi aliquet maecenas ut elit euismod scelerisque. Varius venenatis placerat nisl lectus tortor. Adipiscing aliquam turpis sed duis. Gravida fringilla amet ornare ut arcu cursus non vestibulum" desc2=" molestie. At faucibus pulvinar in blandit vitae augue. Proin ac pellentesque consectetur potenti pretium. Sit risus sit sollicitudin in volutpat. Ut quam massa magna sed. Lacus ut morbi ultrices tristique nisi aenean montes at egestas. Nisi nisl tortor nibh nunc malesuada id leo mi odio." />
            </div>

            <div className='bg-[#E9F5E9] flex justify-center items-center rounded-md'>
              <img src={assets.about3} alt='image'/>
            </div>
          </div>
        </div>
        </div>  


    {/* about content end*/}



    {/* blogs content end*/}

      <div>
        <Blogs />
      </div>

    {/* blogs content end*/}


    {/* feedback content end*/}

      <div>
        <Feedback />
      </div>

    {/* feedback content end*/}













    </>
  )
}

export default AboutUs

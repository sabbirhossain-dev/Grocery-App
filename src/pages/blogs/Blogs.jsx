import React from 'react'
import BannerTitle from '../../components/BannerTitle'
import { assets } from '../../assets/assets'
import BlogCard from './BlogCard'
import Pagination from '../../components/Pagination'
import LeftSidebar from './LeftSidebar'


const Blogs = () => {
  return (
    <>
        <div>
        <BannerTitle title="Blogs" image={assets.blogbanner}/>
       </div>



{/* blog content start */}

        <div className="pt-20 pb-20 font-semibold bg-white">
        <div className="mx-6 md:mx-16 lg:mx-28">

          <div className='flex flex-col md:flex-row gap-32'>
           
            {/* sidebar section start */}

              <LeftSidebar />

            {/* sidebar section end */}

            {/* card section start */}
            <div className='w-full md:w-4/6 flex flex-col gap-5'>
              <BlogCard title="How to Buy Groceries on a limited Budget?" image={assets.blog1}/>
              <BlogCard title="How to Keep fruits fresh for loger?" image={assets.blog2}/>
              <BlogCard title="Why should we buy pesticide free vegetables?" image={assets.blog3}/>
              <BlogCard title="Five delicious mushroom recipes" image={assets.blog4}/>
            </div>

             {/* card section end */}

          </div>
              <Pagination />



      </div>
      </div>

{/* blog content end */}

    </>
  )
}

export default Blogs
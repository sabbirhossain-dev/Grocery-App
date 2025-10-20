import BannerTitle from '../../components/BannerTitle'
import { assets } from '../../assets/assets'
import LeftSidebar from './LeftSidebar'
import DetailsCard from './DetailsCard'
import Comments from './Comments'
import Message from './Message'





const BlogDetails = () => {


return(
  <>
  <div>
    <BannerTitle title="Blog" image={assets.blogbanner2} />


    {/* blog content start */}

    <div className="pt-20 pb-20 font-semibold bg-white">
      <div className="mx-6 md:mx-16 lg:mx-28">

        <div className='flex flex-col md:flex-row gap-32'>

          {/* sidebar section start */}

          <LeftSidebar />

          {/* sidebar section end */}



          {/* card section start */}

          <div className='flex flex-col gap-5'>

            <div className='w-full flex flex-col gap-5'>
              <DetailsCard title="How to Keep fruits fresh for longer?" image={assets.blog2} />
              <DetailsCard title="How to Keep fruits fresh for longer?" image={assets.blog4} />
            </div>

                          {/* comments section start */}

            <div className='flex flex-col gap-3'>
              <p className='lato-bold text-[20px] md:text-[22px] lg:text-[24px] text-[#075212]'>Comments (3)</p>
              <div className='flex justify-end flex-col items-end gap-3'>
                <div className='w-full'><Comments image={assets.commentsImg1} name="Rechard Marx" date="21 March, 2023" desc="Lorem ipsum dolor sit amet consectetur. Suspendisse consectetur tempor tellus at est. Mi fringilla viverra cursus consectetur sociis. Id sed quis lacus aliquam. Quam cras sollicitudin vel blandit. In posuere nulla nam egestas ante at egestas ut." /></div>

                <div className='w-10/12'><Comments image={assets.commentsImg2} name="Rechard Marx" date="20 March, 2022" desc="Lorem ipsum dolor sit amet consectetur. Suspendisse consectetur tempor tellus at est. Mi fringilla viverra cursus consectetur sociis. Id sed quis lacus aliquam. Quam cras sollicitudin vel blandit. In posuere nulla" /></div>

                <div className='w-full'><Comments image={assets.commentsImg3} name="Rechard Marx" date="21 March, 2023" desc="Lorem ipsum dolor sit amet consectetur. Suspendisse consectetur tempor tellus at est. Mi fringilla viverra cursus consectetur sociis. Id sed quis lacus aliquam. Quam cras sollicitudin vel blandit. In posuere nulla nam egestas ante at egestas ut." /></div>

            </div>
              </div>

                          {/* comments section end */}



                          {/* message section start */}

                           <Message />
                          {/* message section end */}
                          



          </div>


          {/* card section end */}

        </div>



      </div>
    </div>

    {/* blog content end */}
  </div>
  </>
)}

export default BlogDetails
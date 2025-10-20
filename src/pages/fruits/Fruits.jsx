import React, { useContext, useEffect, useState } from 'react'
import BannerTitle from '../../components/BannerTitle'
import { assets } from '../../assets/assets'
import ItemsCard from '../../components/ItemsCard'
import { ShopContext } from '../../context/ShopContext'
import Pagination from '../../components/Pagination'
import {BsSearch } from 'react-icons/bs'
import { GoPlus } from 'react-icons/go'
import { HiMinus } from 'react-icons/hi2'

const Fruits = () => {
  const { fruits } = useContext(ShopContext);
  const [fruitsItems, setFruitItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([]);
  const [categoryToggle, setCategoryToggle] = useState(true);
  const [priceToggle, setPriceToggle] = useState(true);
  const [sortTypes, setSortTypes] = useState("relevant");
  const [searchTerm, setSearchTerm] = useState("");


  // category filter
  const handlecategoryToggle = (e) => {
    const value = e.target.value;

    if (value === "All") {
      setCategory([]); // Reset categories
    } else {
      setCategory((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
  };

  // Price filter handler
const handlePriceToggle = (e) => {
  const value = e.target.value;

  if (price.includes(value)) {
    setPrice(prev => prev.filter(p => p !== value));
  } else {
    setPrice(prev => [...prev, value]);
  }
};


 

  useEffect(() => {
    let filtered = [...fruits];

    // Filter by category
    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    // Search by product name
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    if (sortTypes === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortTypes === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    // Filter by price range
    if (price.length > 0) {
    filtered = filtered.filter((item) => {
    return price.some((range) => {
      const p = item.price;

      if (range === "under $49.00") return p < 49;
      if (range === "$49.00 to $99.00") return p >= 49 && p <= 99;
      if (range === "$99.00 to $199.00") return p >= 99 && p <= 199;
      if (range === "$199.00 to $299.00") return p >= 199 && p <= 299;
      if (range === "$299.00 and Above") return p > 299;

      return false;
    });
  });
}


    setFruitItems(filtered);
  }, [fruits, category, sortTypes, searchTerm,price]);


  const categoriesList = [
  "All",
  "Vegetables",
  "Fruit",
  "Meat",
  "Fish",
  "Milk & Dairy",
  "Coffee & Drinks",
  "Grocery",
  "Pet Food",
  "Cleaning Essentials"
];


  const categoriesPriceList = [
  "under $49.00",
  "$49.00 to $99.00",
  "$99.00 to $199.00",
  "$199.00 to $299.00",
  "$299.00 and Above"
];




  return (
    <section>
      <div className='text-center'>
        <BannerTitle title="Find the Product you need from our Vast Collection" image={assets.shopbanner} />
      </div>

      <div className="pt-20 pb-20 font-semibold bg-white">
        <div className="mx-6 md:mx-16 lg:mx-28">
          <p className='lato-bold text-[30px] md:text-[35px] lg:text-[48px] text-[#075212] text-center pb-10'>Fruit</p>

          <div className='flex-1'>
            <div className='flex gap-4 justify-between items-center mb-6 border-t border-b border-[#e4e4e4] py-5 px-1'>
              <div className='w-1/2 md:w-1/5 bg-[#E9F5E9] p-3 rounded-sm flex items-center gap-2'>
              <span className='text-[#075212]'><BsSearch size={16}/></span>
                <input type='text' placeholder='Search Product' className="text-[16px] lato-regular text-[#075212] w-full placeholder:text-[#075212] outline-none border-none bg-transparent" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
              </div>

              <select className="bg-[#E9F5E9] p-3 text-[16px] lato-regular text-[#075212] w-1/2 md:w-1/5 outline-none border-none  rounded-sm" onChange={(e)=>{setSortTypes(e.target.value)}}>
                <option value="relevant">Sort by: relevant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>              
            </div>



            <div className='flex flex-col md:flex-row gap-5'>

            {/* filter sidebar here */}
              <div className='w-full md:w-3/12 flex flex-col gap-5'>

              {/* category */}
                <div className=''>
                  <div className='flex justify-between bg-[#E9F5E9] p-3'>
                  <p className='text-[16px] text-[#075212] lato-regular'>Category</p>
                  <button className='text-[#075212] border-none outline-none focus:outline-none' onClick={()=>{setCategoryToggle(!categoryToggle)}}>
                    {categoryToggle ?<HiMinus size={20}/> : <GoPlus size={20} />}
                  </button>
                </div>
                <div className='py-3'>
                  {categoryToggle && categoriesList.map(cat => (
                <div className='flex items-center gap-2 py-1' key={cat}>
                  <input
                    type='checkbox'
                    value={cat}
                    onChange={handlecategoryToggle}
                    className="accent-green-600 h-4 w-4"
                  />
                  <p className='text-[16px] text-[#075212] lato-regular font-medium'>{cat}</p>
                </div>
              ))}
                </div>
                </div>

                {/* price  */}

                <div className=''>
                  <div className='flex justify-between bg-[#E9F5E9] p-3'>
                  <p className='text-[16px] text-[#075212] lato-regular'>Price</p>
                  <button className='text-[#075212] border-none' onClick={()=>{setPriceToggle(!priceToggle)}}>
                    {priceToggle ?<HiMinus size={20}/> : <GoPlus size={20} />}
                  </button>
                </div>
                <div className='py-3'>
                  {priceToggle && categoriesPriceList.map(cat => (
                <div className='flex items-center gap-2 py-1' key={cat}>
                  <input
                    type='checkbox'
                    value={cat}
                    onChange={handlePriceToggle}
                    className="accent-green-600 h-4 w-4"
                  />
                  <p className='text-[16px] text-[#075212] lato-regular font-medium'>{cat}</p>
                </div>
              ))}
                </div>
                </div>

              </div>




            {/* items are here */}
                <div className='w-full md:w-9/12 grid grid-cols-2lg:grid-cols-3 gap-5'>
                {fruitsItems.length === 0 ? (
                  <div className="col-span-2 lg:col-span-3 text-center text-[#075212] lato-regular text-lg">
                    Product Not Found!
                  </div>
                ) : (
                  fruitsItems.map((item, index) => (
                    <ItemsCard
                      key={index}
                      name={item.name}
                      id={item._id}
                      desc={item.description}
                      price={item.price}
                      subprice={item.subprice}
                      image={item.image}
                    />
                  ))
                )}

                {fruitsItems.length > 0 && (
                  <div className="col-span-2 lg:col-span-3 w-full flex justify-center mt-8">
                    <Pagination />
                  </div>
                )}
              </div>

                </div>
              </div>





            </div>
          </div>

      
    </section>
  )
}

export default Fruits

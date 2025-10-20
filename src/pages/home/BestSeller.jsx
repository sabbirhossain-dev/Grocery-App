import React, { useContext, useState, useEffect } from 'react'
import Title from './Title'
import {ShopContext} from '../../context/ShopContext'
import ItemsCard from '../../components/ItemsCard'

const BestSeller = () => {

  const {fruits} = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const bestProducts = fruits.filter((item)=>(item.bestseller))
    setBestSeller(bestProducts.slice(0,8))
  },[])
  
  return (
    <>
        <div className='bg-[#E9F5E9] pt-20 pb-20 font-semibold'>
        
                  <div className='mr-10 ml-10 md:mr-16 md:ml-16 lg:mr-28 lg:ml-28'>
        
                    <Title title="Best Seller This Month" desc="Lorem ipsum dolor sit amet consectetur. Proin curabitur at ipsum ullamcorper velit." />
        
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {bestSeller.map((item, index)=>(
                      <ItemsCard 
                       key={index}
                       name={item.name}
                       id={item._id}
                       desc={item.description} 
                       price={item.price}
                       subprice={item.subprice}
                       image ={item.image} />
                    ))}
                </div>
        
        
                </div>
            </div>
    </>
  )
}

export default BestSeller
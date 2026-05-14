import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Cart = () => {

  const { cartItems, setCartItems } = useContext(ShopContext);

 const total = Array.isArray(cartItems)
  ? cartItems.reduce(
      (sum, item) =>
        sum + (item.price || 0) * (item.quantity || 1),
      0
    )
  : 0;
  

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item._id !== id));
  };

  return (
    <div className="w-full flex flex-col justify-end px-10 py-2">

      <p className="text-xl text-[#075212] font-sans text-center font-semibold mb-4">Your Cart</p>

      {(cartItems || []).length === 0 ? (
        <p className='text-sm text-red-600 text-center py-5'>Cart is empty </p>
      ) : (
        cartItems.map((item) => (
          <div key={item._id} className="flex gap-3 border p-4 mb-3 items-cente justify-between">

            <div className='flex gap-3 items-center'>
              <img src={item.image} className="h-20 w-20" />

            <div className="flex flex-col gap-1">
              <p className='text-md'>{item.name}</p>
              <p className='text-sm'>Price: ${item.price}</p>
              <p className='text-sm'>Quantity: {item.quantity || 1}</p>
              <p className='text-sm'>Total: ${item.price * (item.quantity || 1)}</p>
            </div>
            </div>

            <button
              onClick={() => removeItem(item._id)}
              className="text-red-500 text-xl hover:text-red-700 transition-all duration-300 hover:scale-105"
            >
              <FaTrashAlt />
            </button>

          </div>
        ))
      )}

     <div className='mb-5 mt-5 flex gap-2 justify-between'>
       <p className="text-xl text-[#075212] font-sans font-light ">
        Grand Total: ${total}
      </p>

      <button className='px-4 py-1 text-md  bg-green-600 hover:bg-green-700 transition-all duration-300 text-white rounded-md '><Link to='/checkout'>Checkout</Link></button>
     </div>

    </div>
  )
}

export default Cart
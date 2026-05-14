import React, { Children, createContext, useState } from 'react'
import { fruits } from '../assets/assets'

export const ShopContext = createContext()
const ContextProvider = (props) => {


    const currency = "$"
    
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)

      // CART STATE
  const [cartItems, setCartItems] = useState([]);

  // ADD TO CART FUNCTION
const addToCart = (product) => {

  setCartItems((prev) => {

    const exists = prev.find(item => item._id === product._id);

    if (exists) {
      return prev.map(item =>
        item._id === product._id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
};


    const value = {
        fruits, currency, search, setSearch, showSearch, setShowSearch,addToCart,cartItems,setCartItems
    }


  return (
    <ShopContext.Provider value={value}>
    {props.children}
    </ShopContext.Provider>
  )
}

export default ContextProvider
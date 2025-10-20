import React, { Children, createContext, useState } from 'react'
import { fruits } from '../assets/assets'

export const ShopContext = createContext()
const ContextProvider = (props) => {

    const currency = "$"
    
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)

    const value = {
        fruits, currency, search, setSearch, showSearch, setShowSearch
    }


  return (
    <ShopContext.Provider value={value}>
    {props.children}
    </ShopContext.Provider>
  )
}

export default ContextProvider
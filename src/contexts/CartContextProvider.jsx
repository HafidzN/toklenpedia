import React, {createContext, useReducer } from 'react'
import {cartReducer} from './CartReducers'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cartProducts, dispatch] = useReducer(cartReducer, [])

    return (
        <CartContext.Provider value={{cartProducts, dispatch}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
import React, { createContext, useState, useContext } from "react";


const CartContext = createContext()

export const useCart = () => useContext(CartContext)


export const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const openCart = () => {
        setIsCartOpen(true);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };
    return (
        <CartContext.Provider value={{ isCartOpen, openCart, closeCart }}> {children}</CartContext.Provider >
    )
}



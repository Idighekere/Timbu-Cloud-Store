import React, { createContext, useState, useContext } from "react";
import productData from "../data/products.json";


const CartContext = createContext()

export const useCart = () => useContext(CartContext)


export const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const openCart = () => {
        setIsCartOpen(true);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const addToCart = (item) => {

        const isItemInCart = cartItems.find((cartItem => (cartItem.id === item.id)))

        if (isItemInCart) {
            setCartItems(cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)) //if the item is already in the cart increase the quantity of the item otherwise return the cart item
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]) //if the item is not in the cart, add the item to the cart
        }
        openCart()
    }
    const removeItem = (item) => {
        const isItemInCart = cartItems.find((cartItem => (cartItem.id === item.id)))

        if (isItemInCart.quantity >= 1) {
            setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id))
        }
    }

    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem => (cartItem.id === item.id)))
        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
        } else {
            setCartItems(cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)) //if the item is already in the cart decrease the quantity of the item otherwise return the cart item
        }
    }
    const clearCart = () => {
        setCartItems([])
    }

    const getTotal = () => {

        return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    }

    const [product, setProduct] = useState(productData);

    return (
        <CartContext.Provider value={{ isCartOpen, openCart, closeCart, addToCart, clearCart, removeItem, cartItems, getTotal, product, removeFromCart }}> {children}</CartContext.Provider >
    )
}



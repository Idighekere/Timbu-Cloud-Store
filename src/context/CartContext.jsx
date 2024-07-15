import React, { createContext, useState, useContext, useEffect } from "react";
import productData from "../data/products.json";


const CartContext = createContext()

export const useCart = () => useContext(CartContext)


export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(

        localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) :
            [])

    // Update local storage whenever cartItems change

    useEffect(() => {

        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])
    // Load cart items from local storage on component mount

    useEffect(() => {
        const storedData = localStorage.getItem("cartItems")
        if (storedData) {
            setCartItems(JSON.parse(storedData))
        }
    }, [])

    const [isCartOpen, setIsCartOpen] = useState(false)

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

        return cartItems.reduce((total, item) => total + item.quantity * item?.current_price[0]?.NGN[0], 0);
    }

    const [product, setProduct] = useState(productData);

    return (
        <CartContext.Provider value={{ isCartOpen, openCart, closeCart, addToCart, clearCart, removeItem, cartItems, getTotal, product, removeFromCart }}> {children}</CartContext.Provider >
    )
}



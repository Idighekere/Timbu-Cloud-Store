import React, { useState } from "react";
import productData from "../data/products.json";
import { Link } from "react-router-dom";
import deleteIcon from "/assets/icons/delete.svg";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";
const Cart = ({ closeCart }) => {
  const { addToCart, removeItem, clearCart, cartItems, getTotal, removeFromCart } = useCart()
  console.log(cartItems)
  // const [product, setProduct] = useState(productData);
  // const [quantity, setQuantity] = useState(4);
  return (
    <div className="absolute right-0 top-0 bg-white h-screen z-50 w-[90%] sm:w-[500px] px-10 py-12 overflow-y-auto">
      <div className="flex justify-between w-full mb-10 items-center">
        {" "}
        <h2 className="font-[400] text-[20px]">{cartItems.length} ITEMS IN CART</h2>
        <span
          className="cursor-pointer font-[400] font-base text-[#00000099]"
          onClick={closeCart}
        >
          Close
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {cartItems.length === 0 ? (<p className="text-center">Your cart is empty</p>) : (<div className="flex flex-col gap-3">
          {cartItems.map((product) => (<div className="flex relative gap-6">
            <div>
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                alt={product.name}
                className="max-w-[90px] w-[89psx] h-sauto object-contain"
              />
            </div>
            <div>
              <h3 className="font-[300] text-[20px] p-0">{product.name}</h3>
              <p className="font-[400] text-[#00000099] text-bases">
                <span className="text-[#000000]">{product.quantity} x </span>
                ₦{product?.current_price[0].NGN[0]}
              </p>
              <div className="bg-[#e5e5e5] flex gap-2 p-1 w-[6rem] justify-between">
                <button
                  onClick={() => removeFromCart(product)}
                  className="px-2 text-[#00000099] text-xl"
                >
                  -
                </button>
                <span>{product.quantity}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="px-2 text-[#00000099] text-xl"
                >
                  +
                </button>
              </div>
              <span className="absolute top-0 right-0 cursor-pointer group-hover:text-red-600" onClick={() => removeItem(product)}
              >
                <img src={deleteIcon} alt="" />
              </span>
            </div>
          </div>))}
        </div>)}
        {/* <div className="flex relative gap-3">
          <div>
            <img
              src={product[0].imageUrl}
              alt={product[0].name}
              className="max-w-[90px] w-[89psx] h-sauto object-contain"
            />
          </div>
          <div>
            <h3 className="font-[300] text-[20px]">{product[0].name}</h3>
            <p className="font-[400] text-[#00000099] text-bases">
              <span className="text-[#000000]">4 x </span>
              {product[0].price}
            </p>
            <div className="bg-[#e5e5e5] flex gap-2 p-1">
              <button
                onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                className="px-2 text-[#00000099] text-xl"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-2 text-[#00000099] text-xl"
              >
                +
              </button>
            </div>
            <span className="absolute top-1/2 right-0 cursor-pointer group-hover:text-red-600">
              <img src={deleteIcon} alt="" />
            </span>
          </div>
        </div> */}
        <hr className={`
          mt-6 ${cartItems.length === 0 ? "hidden" : "block"}`} />
        <h3 className={`text-center my-10 font-[500] ${cartItems.length === 0 ? "hidden" : "block"}`}>
          < span className="font-[300] mr-1">Subtotal: </span>₦{getTotal()}
        </h3>{" "}
        <div className={`flex flex-col items-centers gap-3 ${cartItems.length === 0 ? "hidden" : ""}`}>
          <Link className="w-full" onClick={clearCart}>
            <button className="bg-[#d9d9d9] py-5 sm:py-[25px] sm:px-32 w-full">
              EMPTY CART
            </button>
          </Link>
          <Link to="/checkout/" className="pys-5 w-full sm:py-[s5px] sm:pxs-32">
            {" "}
            <button className="bg-black w-full text-white py-5 sm:py-[25px] sm:px-32">
              {" "}
              CHECKOUT
            </button>
          </Link>{" "}
        </div>
      </div>
    </div >
  );
};

export default Cart;

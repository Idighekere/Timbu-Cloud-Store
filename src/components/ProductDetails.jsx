import React, { useState } from "react";
import add2cart from "/assets/icons/add2cart.svg";
import product1 from "/assets/products/image 1.png";
import stroke from "/assets/icons/stroke.svg";
import love from "/assets/icons/love.svg";
import { useLocation, useParams } from "react-router-dom";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { openCart, closeCart, addToCart } = useCart();

  const { unique_id } = useParams();
  const product = products.find((p) => p.unique_id == unique_id);
  console.log(product)
  // const location = useLocation();
  // const { product } = location.state;
  if (!product) {
    return <div className="text-center ">Product not found</div>;
  }
  return (
    <main className="bg-white rounded-lg w-full flex gap-10 sm:gap-20 p-10 flex-col md:flex-row">
      <div className="flex justify-center  w-full md:w-1/2 items-center p-0">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-w-[435px] h-auto"
        />
      </div>
      <div className="gap-5 sm:gap-8 flex-col flex">
        <h2 className="font-[275] text-[64px] text-[rgba(0,_0,_0,_0.3)]">
          ${product?.current_price[0]?.NGN[0]}
        </h2>
        <span className="flex gap-3 items-center">
          <img src={love} alt="love icon" className="cursor-pointer" />{" "}
          <img src={stroke} alt="divider" />
          <p className="uppercase text-[14px] font-[400]">{product.name}</p>
        </span>
        <span>
          <p>
            They quickly darken in sunlight and fade back to clear indoors:
            protecting you from UV rays and filtering blue-violet light.{" "}
          </p>
        </span>
        <div className="flex items-center w-full sma:flex-row flexa-col">
          <span className="bg-[#e5e5e5] flex w-ful gap-2  sm:px-5  py-2 h-auto">
            <button
              onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
              className="px-2 text-[#00000099] text-[17.5px]"
            >
              -
            </button>
            <p>{product.quantity}</p>
            <button
              onClick={() => addToCart(product)}
              className="px-2 text-[#00000099] text-[17.5px]"
            >
              +
            </button>
          </span>
          <div>
            <button
              className="bg-white text-black px-5 py-2 w-xfull h-auto  flex items-center gap-2 justify-center  hover:bg-gray-100 border border-[rgba(0,_0,_0,0.2)]"
              onClick={() => addToCart(product)}
            >
              <img src={add2cart} alt="" />
              <p className="whitespace-nowrap"> Add to Cart</p>{" "}
            </button>{" "}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;

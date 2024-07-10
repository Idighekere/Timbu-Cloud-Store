import React, { useState } from "react";
import add2cart from "/assets/icons/add2cart.svg";
import product1 from "/assets/products/image 1.png";
import stroke from "/assets/icons/stroke.svg";
import love from "/assets/icons/love.svg";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="bg-white rounded-lg w-full flex gap-10 sm:gap-20 p-10 flex-col md:flex-row">
      <div className="flex justify-center  w-full md:w-1/2 items-center p-0">
        <img src={product1} alt="product" className="max-w-[435px] h-auto" />
      </div>
      <div className="gap-5 sm:gap-8 flex-col flex">
        <h2 className="font-[275] text-[64px] text-[rgba(0,_0,_0,_0.3)]">
          $39.00
        </h2>
        <span className="flex gap-3 items-center">
          <img src={love} alt="love icon" className="cursor-pointer" />{" "}
          <img src={stroke} alt="divider" />
          <p className="uppercase text-[14px] font-[400]">Glasses</p>
        </span>
        <span>
          <p>
            They quickly darken in sunlight and fade back to clear indoors:
            protecting you from UV rays and filtering blue-violet light.{" "}
          </p>
        </span>
        <div className="flex items-center">
          <span className="bg-[#e5e5e5] flex w-ful gap-2 px-5 py-2 h-auto">
            <button
              onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
              className="px-2 text-[#00000099] text-[17.5px]"
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-2 text-[#00000099] text-[17.5px]"
            >
              +
            </button>
          </span>
          <div>
            <button className="bg-white text-black px-5 py-2 w-xfull h-auto  flex items-center gap-2 justify-center  hover:bg-gray-100 border border-[rgba(0,_0,_0,0.2)]">
              <img src={add2cart} alt="" />
              <p> Add to Cart</p>{" "}
            </button>{" "}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
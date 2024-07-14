import React from "react";
import add2Cart from "/assets/icons/addToCart.svg";
import { formatPrice } from "../utils/formatPrice";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import useFetch from "../stores/useFetch";
const ProductCard = ({ product }) => {
  const { openCart, closeCart, addToCart } = useCart();

  // const addToCart = () => openCart();

  // const { data: imageUrl } = useFetch(`api/images/${product.photos[0].url}`)
  // const imageUrl = api/images/${product.photos[0].url}
  // const imageUrl = product.photos.length > 0 ? product.photos[0].url : '/default_image.png';

  return (
    <div className="bg-white rounded-[10px] w-full  items-center p-6 shadow-[0px_18.13px_45.32px_0px_#A7A7A733]">
      <div>
        <Link
          // to={{
          //   pathname: `/shop/product/${product.id}`,
          //   state: { product },
          // }}
          to={`/shop/product/${product.id}`}
        >
          <img
            src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
            alt={product.name}
            className="w-full h-4v8 objectv-cover mb-4 items-center  rounded-md"
          />
        </Link>
      </div>
      <h3 className="text-left font-[500]">{product.name}</h3>
      <p>₦{
        // product?.current_price[0]?.USD[0]
        // product?.current_price[0]?.USD[0]
       product.current_price[0]["NGN"][0]
      }</p>
      <button
        className="bg-neutral-black text-white rounded-lg px-5 py-5 w-full h-[33.78px] flex items-center gap-2 justify-center self-center place-self-center mt-5 hover:bg-gray-950"
        onClick={() => addToCart(product)}
      >
        <img src={add2Cart} alt="" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

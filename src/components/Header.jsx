import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import search from "/assets/icons/search.svg";
import divider from "/assets/icons/divider.svg";
import menuCart from "/assets/icons/menu-cart.svg";
import hamburger from "/assets/icons/hamburger.svg";
import logo from "/assets/logo.svg";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const { isCartOpen, openCart, closeCart, cartItems } = useCart();
  const openMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className="bg-white h-7 w-screens flex justify-between items-center px-10 py-9 sm:px-16 sm:py-12 sticky top-0 z-50">
      <div className="z-50">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>{" "}
      </div>
      <div className="uppercase gap-10 hidden sm:flex">
        {/* <NavLink to="/">Home</NavLink> */}
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
      </div>
      <div className="flex gap-4 items-center">
        <span className="hidden sm:flex flex-row-reverse gap-4">
          <img
            src={search}
            alt=""
            className="cursor-pointer"
            onClick={() => setIsSearch((prev) => !prev)}
          />
          <div
            className={`${isSearch ? "flex" : "hidden"
              } duration-500 w-auto absolutse right-1/2 hs-auto top-full mx-auto`}
          >
            {" "}
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              className="absolsute z-50 right-0 top-full w-20 h-8 bg-[#f4f4f4] p-1 px-2 border-neutral-black focus:outline-0"
            />
            <button
              type="submit"
              className="bg-neutral-black px-2 z-50 text-white py-1"
            >
              GO
            </button>
            <div
              className="bg-neutral-black w-screen h-[120vh] absolute top-0 right-0 bottom-0 left-0s opacity-30 z-10"
              onClick={() => setIsSearch(false)}
            ></div>
          </div>
        </span>
        <span>
          <img src={divider} alt="" className="hidden sm:block" />
        </span>
        <span onClick={openCart} className="cursor-pointer relative">
          <img src={menuCart} alt="" />
          <span className="bg-red-600 text-white w-3 h-[12px] absolute bottom-0 right-[-6px] rounded-full text-[10px] text-center flex justify-center items-center p-[6px]">
            {cartItems.length}
          </span>
        </span>
        <span>
          <img src={divider} alt="divider" className="sm:hidden block" />
        </span>{" "}
        <span className="" onClick={openMenu}>
          <img
            src={hamburger}
            alt="hamburger menu"
            className="sm:hidden block"
          />
        </span>{" "}
      </div>
      {/* Cart */}
      <div className="absolute top-0 right-0">
        {isCartOpen && (
          <>
            <Cart className="" closeCart={closeCart} />
            <div
              className="bg-neutral-black w-screen h-[120vh] absolucte top-0 right-0 bottom-0 left-0s opacity-30 z-10"
              onClick={closeCart}
            ></div>
          </>
        )}
      </div>
      {isMenuOpen && (
        <div
          className={`sm:hidden block  absolute top-0 bg-white w-4/5 h-screen right-0 left-0 transition-transform  duration-500 z-40 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="uppercase gap-10 flex-col p-10 mt-20  flex text-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </div>
        </div>
      )}
      {/* <div></div> */}
    </nav>
  );
};

export default Header;

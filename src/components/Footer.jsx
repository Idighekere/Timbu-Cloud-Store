import React from "react";
import logo from "/assets/logo.svg";
import twitter from "/assets/icons/twitter.svg";
import instagram from "/assets/icons/instagram.svg";
import playstore from "/assets/icons/playstore.svg";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex bg-white h-14   px-10 py-20 sm:p-20 gap-16 items-center justify-between w-full">
      <div className="flex gap-6 sm:gap-16 flex-col sm:flex-row">
        <div>
          <a href="/">
            {" "}
            <img src={logo} alt="logo" />
          </a>{" "}
        </div>
        <div className="flex gap-3">
          <a href="">
            <img src={twitter} alt="twitter logo" />
          </a>
          <a href="">
            <img src={instagram} alt="instagram logo" />
          </a>
          <a href="">
            <img src={playstore} alt="playstore logo" />
          </a>
        </div>
      </div>
      <div className="uppercase gap-3 sm:gap-10 flex flex-col sm:flex-row   ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
      </div>
    </footer>
  );
};

export default Footer;

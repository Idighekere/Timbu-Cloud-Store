import React from "react";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="bg-primary">
      <Header />/{" "}
      <main className="px-10 py-14 sm:p-20 h-scrseen mb-12">
        <div className="text-center font-[200] mb-12">
          {/* <h1 className="text-[50px] mt-2 tracking-[.5rem]">Product</h1> */}
          <p className="text-[15px]">
            <Link to="/">Home</Link>
            <Link to="/shop"> / Shop</Link> / Product
          </p>
        </div>
        <ProductDetails />
      </main>
      <Footer />
    </div>
  );
};

export default Product;

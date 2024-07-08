import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import productData from "../data/products.json";
import downArrow from "../assets/icons/downArrow.svg";
import leftArrow from "../assets/icons/leftArrow.svg";
import rightArrow from "../assets/icons/rightArrow.svg";

const Shop = () => {
  const [product, setProduct] = useState(productData);
  const [categoryAll, setCategoryAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? product
      : product.filter((p) => p.category === selectedCategory);
  const toggleCategory = () => {
    setCategoryAll((prev) => !prev);
  };
  return (
    <div className="bg-primary">
      {" "}
      <Header />
      <main className="p-10">
        <div className="text-center font-[200]">
          <h1 className="text-[50px] mt-2 tracking-[.5rem]">SHOP</h1>
          <p className="text-[15px]">
            <Link to="/">Home</Link> / Shop
          </p>

          <div className="text-base flex gap-4 text-center justify-center font-[500] text-[#00000066] mt-10 mb-20  items-center  cursor-pointer relative">
            <button
              className={` cursor-pointer ${
                selectedCategory === "all" ? "text-black" : ""
              }`}
              onClick={() => handleCategoryClick("all")}
            >
              ALL
            </button>
            <button
              onClick={() => handleCategoryClick("accessories")}
              className={` cursor-pointer ${
                selectedCategory === "accessories" ? "text-black" : ""
              }`}
            >
              ACCESSORIES
            </button>
            <button
              onClick={() => handleCategoryClick("male")}
              className={` cursor-pointer ${
                selectedCategory === "male" ? "text-black" : ""
              }`}
            >
              MALE
            </button>
            <div className="hidden sm:flex gap-4">
              <>
                {" "}
                <button
                  onClick={() => handleCategoryClick("female")}
                  className={` cursor-pointer ${
                    selectedCategory === "female" ? "text-black" : ""
                  }`}
                >
                  FEMALE
                </button>
                <button
                  onClick={() => handleCategoryClick("unisex")}
                  className={` cursor-pointer ${
                    selectedCategory === "unisex" ? "text-black" : ""
                  }`}
                >
                  UNISEX
                </button>
              </>
            </div>
            <span
              className={`block sm:hidden cursor-pointer`}
              onClick={toggleCategory}
            >
              <img src={downArrow} alt="" />
            </span>
            <div
              className={`flex-col absolute left-1/2 top-full right-0 ${
                categoryAll ? "block sm:hidden" : " hidden"
              }`}
            >
              <div className="flex gap-2 flex-col">
                <button
                  onClick={() => handleCategoryClick("female")}
                  className={` cursor-pointer ${
                    selectedCategory === "female" ? "text-black" : ""
                  }`}
                >
                  FEMALE
                </button>
                <button
                  onClick={() => handleCategoryClick("unisex")}
                  className={` cursor-pointer ${
                    selectedCategory === "unisex" ? "text-black" : ""
                  }`}
                >
                  UNISEX
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <ProductCard /> */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
 items-center justify-center w-full  gap-x-10s mt-7 "
        >
          {filteredProducts.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
        <div className="flex gap-3 items-center justify-center mt-10">
          <span>
            <img src={leftArrow} alt="left arrow" />
          </span>
          <span>
            <img src={rightArrow} alt="left arrow" />
          </span>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;

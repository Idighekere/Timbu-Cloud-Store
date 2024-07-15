import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import productData from "../data/products.json";
import downArrow from "/assets/icons/downArrow.svg";
import leftArrow from "/assets/icons/leftArrow.svg";
import rightArrow from "/assets/icons/rightArrow.svg";
import useFetch from "../stores/useFetch";
import axios from "axios";
import { useCart } from "../context/CartContext";


const fetchProducts = async (page) => {
  const API_KEY = import.meta.env.VITE_API_KEY
  const APP_ID = import.meta.env.VITE_APP_ID
  const ORG_ID = import.meta.env.VITE_ORG_ID
  const response = await axios.get('https://timbu-get-all-products.reavdev.workers.dev/', {
    params: {
      organization_id: ORG_ID,
      reverse_sort: false,
      page: page,
      size: 8,
      Appid: APP_ID,
      Apikey: API_KEY,
      //currency_code: CAD
    },
  });
  return response.data;
};

// //console.log(response.data)
const Shop = () => {

  const [categoryAll, setCategoryAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await fetchProducts(page);
        setProducts(data.items);
        setIsEmpty(data.total === 0);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, [page]);

  // if (isLoading) return <div>loading...</div>;
  if (isError) return <div><div className="bg-primary">
    {" "}
    <Header />
    <main className="p-10">
      <div className="text-center font-[200]">
        <h1 className="text-[50px] mt-2 tracking-[.5rem]">SHOP</h1>
        <p className="text-[15px]">
          <Link to="/">Home</Link> / Shop
        </p></div>

      Error fetching products



    </main>
    <Footer />
  </div></div>;
  if (isEmpty) return <div>No products found</div>;

  // const { product } = useCart()
  // const { data, loading, error } = useFetch(`api/products`,
  //   {
  //     params: {

  //       organization_id: ORG_ID,
  //       reverse_sort: false,
  //       page: page,
  //       size: 8,
  //       Appid: APP_ID,
  //       Apikey: API_KEY
  //     },
  //   })
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  // if (loading) return <div>loading...</div>
  //   if (error) return <div>{error}</div>

  // const product = data.items
  //console.log(products)

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.categories[0].name === selectedCategory);
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
              className={` cursor - pointer ${selectedCategory === "all" ? "text-black" : ""
                } `}
              onClick={() => handleCategoryClick("all")}
            >
              ALL
            </button>
            <button
              onClick={() => handleCategoryClick("accessories")}
              className={` cursor - pointer ${selectedCategory === "accessories" ? "text-black" : ""
                } `}
            >
              ACCESSORIES
            </button>
            <button
              onClick={() => handleCategoryClick("males")}
              className={` cursor - pointer ${selectedCategory === "males" ? "text-black" : ""
                } `}
            >
              MALE
            </button>
            <div className="hidden sm:flex gap-4">
              <>
                {" "}
                <button
                  onClick={() => handleCategoryClick("females")}
                  className={` cursor - pointer ${selectedCategory === "females" ? "text-black" : ""
                    } `}
                >
                  FEMALE
                </button>
                <button
                  onClick={() => handleCategoryClick("unisex")}
                  className={` cursor - pointer ${selectedCategory === "unisex" ? "text-black" : ""
                    } `}
                >
                  UNISEX
                </button>
              </>
            </div>
            <span
              className={`block sm:hidden cursor - pointer`}
              onClick={toggleCategory}
            >
              <img src={downArrow} alt="" />
            </span>
            <div
              className={`flex - col absolute left - 1 / 2 top - full right - 0 ${categoryAll ? "block sm:hidden" : " hidden"
                } `}
            >
              <div className="flex gap-2 flex-col">
                <button
                  onClick={() => handleCategoryClick("female")}
                  className={` cursor - pointer ${selectedCategory === "female" ? "text-black" : ""
                    } `}
                >
                  FEMALE
                </button>
                <button
                  onClick={() => handleCategoryClick("unisex")}
                  className={` cursor - pointer ${selectedCategory === "unisex" ? "text-black" : ""
                    } `}
                >
                  UNISEX
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <ProductCard /> */}
        {isLoading ? <>Loading...</> : (<div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
 items-center justify-center w-full  gap-x-10s mt-7 "
        >
          {filteredProducts.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>)}
        <div className="flex gap-3 items-center justify-center mt-10">
          <span onClick={() => setPage(page > 1 ? page - 1 : 1)}>
            <img src={leftArrow} alt="left arrow" />
          </span>
          <span onClick={() => setPage(page + 1)}>
            <img src={rightArrow} alt="left arrow" />
          </span>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;

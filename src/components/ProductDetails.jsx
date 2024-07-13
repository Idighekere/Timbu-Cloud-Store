import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import add2cart from "/assets/icons/add2cart.svg";
import stroke from "/assets/icons/stroke.svg";
import love from "/assets/icons/love.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart, removeFromCart } = useCart();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const API_KEY = import.meta.env.VITE_API_KEY;
                const APP_ID = import.meta.env.VITE_APP_ID;
                const ORG_ID = import.meta.env.VITE_ORG_ID;
                const response = await axios.get(`https://timbu-get-single-product.reavdev.workers.dev/${id}`, {
                    params: {
                        organization_id: ORG_ID,
                        Appid: APP_ID,
                        Apikey: API_KEY,
                    },
                });
                setProduct(response.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [unique_id]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching product</div>;
    if (!product) return <div className="text-center">Product not found</div>;

    return (
        <div className="bg-primary">
            <Header />
            <main className="bg-white rounded-lg w-full flex gap-10 sm:gap-20 p-10 flex-col md:flex-row">
                <div className="flex justify-center w-full md:w-1/2 items-center p-0">
                    <img
                        src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                        alt={product.name}
                        className="max-w-[435px] h-auto"
                    />
                </div>
                <div className="gap-5 sm:gap-8 flex-col flex">
                    <h2 className="font-[275] text-[64px] text-[rgba(0,_0,_0,_0.3)]">
                        ${product.current_price[0]?.CAD[0]}
                    </h2>
                    <span className="flex gap-3 items-center">
                        <img src={love} alt="love icon" className="cursor-pointer" />{" "}
                        <img src={stroke} alt="divider" />
                        <p className="uppercase text-[14px] font-[400]">{product.name}</p>
                    </span>
                    <span>
                        <p>{product.description}</p>
                    </span>
                    <div className="flex items-center w-full sma:flex-row flexa-col">
                        <span className="bg-[#e5e5e5] flex w-ful gap-2 sm:px-5 py-2 h-auto">
                            <button
                                onClick={() => removeFromCart(product)}
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
                                className="bg-white text-black px-5 py-2 w-xfull h-auto flex items-center gap-2 justify-center hover:bg-gray-100 border border-[rgba(0,_0,_0,0.2)]"
                                onClick={() => addToCart(product)}
                            >
                                <img src={add2cart} alt="" />
                                <p className="whitespace-nowrap"> Add to Cart</p>{" "}
                            </button>{" "}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetails;

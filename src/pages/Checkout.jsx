import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BillingDetails from "../components/BillingDetails";
import YourOrder from "../components/YourOrder";
import { useCart } from "../context/CartContext";
const Checkout = () => {

  const { getTotal, cartItems } = useCart()
  return (
    <div className="bg-primary">
      <Header />
      <main className="p-10 md:p-20">
        <div className="flex  gap-16 justify-between w-full items-start flex-col sm:flex-row">
          <BillingDetails />
          <YourOrder getTotal={getTotal} cartItems={cartItems} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;

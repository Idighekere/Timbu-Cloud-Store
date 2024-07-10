import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div className="bg-primary">
      <Header />
      <main className="p-10 h-screen">
        <div className="text-center font-[200]">
          <h1 className="text-[50px] mt-2 tracking-[.5rem]">FAQ</h1>
          <p className="text-[15px]">
            <Link to="/">Home</Link> / Faq
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Faq;

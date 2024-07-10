import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-primary">
      <Header />
      <main className="p-10 h-screen">
        <div className="text-center font-[200]">
          <h1 className="text-[50px] mt-2 tracking-[.5rem]">HOME</h1>
          {/* <p className="text-[15px]">
            <Link to="/">Home</Link> / Shop
          </p> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

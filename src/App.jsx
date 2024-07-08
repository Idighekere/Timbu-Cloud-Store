import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Faq from "./pages/Faq";
import Checkout from "./pages/Checkout";
// import { Home, Shop, Faq } from '.pages/'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/faq",
      element: <Faq />,
    },
    {
      path: "/checkout/",
      element: <Checkout />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
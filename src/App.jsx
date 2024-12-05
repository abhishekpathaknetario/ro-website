import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import Footer from "./components/Footer";
import SpareParts from "./components/spareParts/Spare";

import Services from "./components/services/Services";
import ContactUsPage from "./components/contactus/ContactUsPage";
import CartPage from "./components/cart/CartPage";

import Paynow from "./components/payment/Paynow";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <HeroSection />
        </>
      ),
    },
    {
      path: "/spareparts",
      element: (
        <>
          <Navbar />
          <SpareParts />
        </>
      ),
    },
    {
      path: "/services",
      element: (
        <>
          <Navbar />
          <Services />
        </>
      ),
    },
    {
      path: "/contactus",
      element: (
        <>
          <Navbar />
          <ContactUsPage />
        </>
      ),
    },
    {
      path: "/cartpage",
      element: (
        <>
          <Navbar />
          <CartPage />
        </>
      ),
    },
    {
      path: "/payment",
      element: (
        <>
          <Navbar />
          <Paynow />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;

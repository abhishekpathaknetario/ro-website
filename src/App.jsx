import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import Footer from "./components/Footer";
import SpareParts from "./components/spareParts/Spare";

import Services from "./components/services/Services";
import ContactUsPage from "./components/contactus/ContactUsPage";
import CartPage from "./components/cart/CartPage";

import Paynow from "./components/payment/Paynow";
import favicon from "../src/assets/Images/logo.png";

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
      <Helmet>
        <meta charset="UTF-8" />
        <title>Ro Website</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Ro Purifier Service" />
        <meta name="keywords" content="Ro,uv,tds" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href={favicon}></link>
      </Helmet>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;

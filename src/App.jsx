import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhatWeOffer from "./components/WhatWeOffer";
import OurPopServ from "./components/OurPopServ";
import SmilingMechanic from "./components/SmilingMechanic";
import Ratings from "./components/Ratings";
import BrandsArea from "./components/BrandsArea";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import SpareParts from "./components/spareParts/Spare";
import ProductSection from "./components/spareParts/Spare";
import Spare from "./components/spareParts/Spare";
import Services from "./components/services/Services";
import ContactUsPage from "./components/contactus/ContactUsPage";
import CartPage from "./components/cart/CartPage";
import ErrorPage from "./components/ErrorPage";
import Paynow from "./components/payment/Paynow";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HeroSection /> },
    { path: "/whatweoffer", element: <WhatWeOffer /> },
    { path: "/ourpopserv", element: <OurPopServ /> },
    { path: "/smilingmechanic", element: <SmilingMechanic /> },
    { path: "/ratings", element: <Ratings /> },
    { path: "/brands", element: <BrandsArea /> },
    { path: "/contactus", element: <ContactUs /> },
    { path: "/spareparts", element: <SpareParts /> },
    { path: "/products", element: <ProductSection /> },
    { path: "/spare", element: <Spare /> },
    { path: "/services", element: <Services /> },
    { path: "/contactus", element: <ContactUsPage /> },
    { path: "/cartpage", element: <CartPage /> },
    { path: "/errorpage", element: <ErrorPage /> },
    { path: "/paynow", element: <Paynow /> },
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;

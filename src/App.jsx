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

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
     
      <WhatWeOffer />
      <OurPopServ />
      <SmilingMechanic />
      <Ratings />
      <div
        style={{
          height: "100px",
        }}
      ></div>
      <BrandsArea />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;

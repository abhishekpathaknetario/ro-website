import React from "react";
import { Helmet } from "react-helmet";
import HeroImg from "../assets/Images/hero-image.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import WhatWeOffer from "./WhatWeOffer";
import OurPopServ from "./OurPopServ";
import SmilingMechanic from "./SmilingMechanic";
import Ratings from "./Ratings";
import BrandsArea from "./BrandsArea";
import ContactUs from "./ContactUs";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="container-fluid py-5 px-lg-5 hero-container">
        <div className="row hero align-items-center py-5">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h3
              className="fs-1 fw-bold  fs-md-6 fs-lg-5"
              style={{ letterSpacing: ".5px" }}
            >
              Expert Water Purifier Services: Keep Your
              <span className="text-primary " style={{fontWeight:"900"}}> Water </span>
              Fresh
            </h3>
            <p className="fs-5 fs-md-3 fs-lg-5">
              Get pure, safe drinking water with our expert water purifier
              services. Installation, maintenance and repairs available.
            </p>

            <div className="d-flex gap-5 gap-md-3 justify-content-center justify-content-md-start">
              <button className="btn px-4 btn-primary rounded-pill">
                <FontAwesomeIcon icon={faPhone} />
                <a className="btncall" href="tel:5551234567" target="_blank">
                  <span> Call Us</span>
                </a>
              </button>
              <button className="btn px-3 btn-success rounded-pill ">
                <FontAwesomeIcon icon={faWhatsapp} />
                <a
                  href="  https://wa.me/
                  
               "
                  className="btnwhats"
                  target="_blank"
                >
                  {" "}
                  <span> Whatsapp</span>
                </a>
              </button>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="col-12 col-md-6 text-center position-relative">
            <img
              src={HeroImg}
              className="img-fluid d-none d-md-block"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
      <WhatWeOffer />
      <OurPopServ />
      <SmilingMechanic />
      <Ratings />
      <BrandsArea />
      <ContactUs />
    </>
  );
};

export default HeroSection;

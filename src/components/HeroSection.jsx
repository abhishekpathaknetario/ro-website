import React from "react";
import HeroImg from "../assets/Images/hero-image.png";
import VecTwo from "../assets/Images/vct.png";
import RoImg from "../assets/Images/ro-image.png";

import "./HeroSection.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // React Font Awesome component
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // Specific icons
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  return (
    <>
      <div
        className="container-fluid  px-lg-5 hero-container 
      
      "
      >
        <div className="container-fluid  px-lg-5 my-5 hero">
          {/* HERO TEXT AREA HERE */}

          <div className="hero-text-area col-lg-6 ">
            <h3 className="fs-1 fs-md-3 fs-lg-5 w-75 w-md-75 ">
              Crystal Clear Purity: The Ultimate Water
              <span className="text-primary"> Purification </span>
              Solution
            </h3>

            <p className="w-75 fs-5 fs-md-3 fs-lg-5 ">
              Advanced purifier delivering clean, safe, and refreshing water
              daily.
            </p>

            <span className=" ">
              <button className="btn px-4 btn-primary rounded-pill">
                <FontAwesomeIcon icon={faPhone} />
                <span> Call Us</span>
              </button>

              <button className="btn px-3 btn-success rounded-pill mx-4">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span> Whatsapp</span>
              </button>
            </span>
          </div>
          {/* HERO IMAGE HERE */}
          <div className="position-absolute top-0 end-0 zn ">
            <img
              src={HeroImg}
              className="img-fluid d-none d-md-block "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;

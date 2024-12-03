import React from "react";

import Brand1 from "../assets/Images/brand1.png";
import Brand2 from "../assets/Images/brand2.png";
import Brand3 from "../assets/Images/brand3.png";
import Brand4 from "../assets/Images/brand4.png";
import Brand5 from "../assets/Images/brand5.png";
import Brand6 from "../assets/Images/brand6.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // React Font Awesome component
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // Specific icons
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const BrandsArea = () => {
  return (
    <div className="d-flex">
      <div className="container  d-flex flex-column align-items-center  ">
        <p className="my-5 py-5 fs-4 text-center text-primary ">
          Brand Deals For Services
        </p>

        <div className="brands row  gap-3  my-5">
          <div className="col d-flex align-items-center justify-content-center d-none d-md-block ">
            <img src={Brand1} alt="" srcset="" />
          </div>
          <div className="col d-flex align-items-center justify-content-center d-none d-md-block ">
            <img src={Brand2} alt="" srcset="" />
          </div>
          <div className="col d-flex align-items-center justify-content-center  d-none d-md-block">
            <img src={Brand3} alt="" srcset="" />
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <img src={Brand4} alt="" srcset="" />
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <img src={Brand5} alt="" srcset="" />
          </div>
          <div className="col d-flex align-items-center justify-content-center ">
            <img src={Brand6} alt="" srcset="" />
          </div>
        </div>

        <span className="px-5 gap-3 d-flex ">
          <button className="btn py-2 my-3 px-4 container btn-primary rounded-pill">
            <FontAwesomeIcon icon={faPhone} />
            <span> Call Us</span>
          </button>

          <button className="btn py-2 my-3 px-4 container  btn-success rounded-pill ">
            <FontAwesomeIcon icon={faWhatsapp} />
            <span> Whatsapp</span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default BrandsArea;

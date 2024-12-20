// import React from "react";
// import HeroImg from "../assets/Images/hero-image.png";
// import VecTwo from "../assets/Images/vct.png";
// import RoImg from "../assets/Images/ro-image.png";

// import "./HeroSection.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // React Font Awesome component
// import { faPhone } from "@fortawesome/free-solid-svg-icons"; // Specific icons
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// const HeroSection = () => {
//   return (
//     <>
//       <div
//         className="container-fluid  px-lg-5 hero-container

//       "
//       >
//         <div className="container-fluid  px-lg-5 my-5 hero">
//           {/* HERO TEXT AREA HERE */}

//           <div className="hero-text-area col-lg-6  ">

//             <h3 className="fs-1 fs-md-6 fs-lg-5 w-100  w-md-75 ">
//               Crystal Clear Purity: The Ultimate Water
//               <span className="text-primary"> Purification </span>
//               Solution
//             </h3>

//             <p className="w-75 fs-5 fs-md-3 fs-lg-5 ">
//               Advanced purifier delivering clean, safe, and refreshing water
//               daily.
//             </p>

//             <span className=" hero-btns  ">
//               <button className="btn px-4 btn-primary rounded-pill">
//                 <FontAwesomeIcon icon={faPhone} />
//                 <span> Call Us</span>
//               </button>

//               <button className="btn px-3 btn-success rounded-pill mx-4">
//                 <FontAwesomeIcon icon={faWhatsapp} />
//                 <span> Whatsapp</span>
//               </button>
//             </span>
//           </div>
//           {/* HERO IMAGE HERE */}
//           <div className="position-absolute top-0 end-0 zn ">
//             <img
//               src={HeroImg}
//               className="img-fluid d-none d-md-block "
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default HeroSection;

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
      <div className="container-fluid px-lg-5 hero-container">
       

        <div className="row hero align-items-center py-5">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h3 className="fs-1 fw-bold fs-md-6 fs-lg-5">
              Expert Water Purifier Services: Keep Your
              <span className="text-primary"> Water </span>
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

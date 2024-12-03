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
import HeroImg from "../assets/Images/hero-image.png";
import VecTwo from "../assets/Images/vct.png";
import RoImg from "../assets/Images/ro-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faPhone } from "@fortawesome/free-solid-svg-icons"; 
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="container-fluid px-lg-5 hero-container">
      <div className="row hero align-items-center py-5">
        <div className="col-12 col-md-6 text-center text-md-start">
          <h3 className="fs-1 fs-md-6 fs-lg-5">
            Crystal Clear Purity: The Ultimate Water
            <span className="text-primary"> Purification </span>
            Solution
          </h3>
          <p className="fs-5 fs-md-3 fs-lg-5">
            Advanced purifier delivering clean, safe, and refreshing water daily.
          </p>

          <div className="d-flex justify-content-center justify-content-md-start">
            <button className="btn px-4 btn-primary rounded-pill">
              <FontAwesomeIcon icon={faPhone} />
              <span> Call Us</span>
            </button>
            <button className="btn px-3 btn-success rounded-pill mx-4">
              <FontAwesomeIcon icon={faWhatsapp} />
              <span> Whatsapp</span>
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
          <img
            src={VecTwo}
            className="img-fluid position-absolute start-50 translate-middle d-md-none"
            alt="Vector Image"
            style={{ maxWidth: "80%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

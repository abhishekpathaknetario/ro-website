import React from "react";

import Icon1 from "../../assets/Images/services/icons/f1.png";
import Icon2 from "../../assets/Images/services/icons/f2.png";
import Icon3 from "../../assets/Images/services/icons/f3.png";
import Icon4 from "../../assets/Images/services/icons/f4.png";
import Icon5 from "../../assets/Images/services/icons/f5.png";
import Icon6 from "../../assets/Images/services/icons/f6.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./TypesOfService.css";
import Ratings from "../Ratings";

const TypesOfService = () => {
  return (
    <>
      <div className="container-area my-5 px-5 d-flex flex-column align-items-center ">
        <div className="typesservs">
          <h1>We Provide Six Types of Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquet rutrum at sit
            ultrices. In metus lacus euismod elit egestas. Mauris urna tristique
            viverra in rhoncus nunc neque. Lectus congue vestibulum in risus
            hendrerit auctor tellus. Viverra quam quisque lectus tortor eleifend
            molestie viverra. A ut adipiscing proin risus ligula. Vitae
            adipiscing viverra feugiat diam elementum nec arcu odio.{" "}
          </p>
        </div>

        <div className="services  mb-5">
          <div className="row flex-nowrap my-2">
            <div className="col d-flex align-items-center ">
              <span className="right mx-2">
                <h1 className="service_no">01.</h1>
              </span>
              <span className="left ">
                <span className="top">
                  <img src={Icon1} alt="" srcset="" />
                </span>
                <span className="bottom">
                  <h5>Ultrafiltration (UF)</h5>
                </span>
              </span>
            </div>{" "}
            <div className="col d-flex align-items-center ">
              <span className="right mx-2">
                <h1 className="service_no">02.</h1>
              </span>
              <span className="left ">
                <span className="top">
                  <img src={Icon2} alt="" srcset="" />
                </span>
                <span className="bottom">
                  <h5>Reverse Osmosis (RO) </h5>
                </span>
              </span>
            </div>{" "}
            <div className="col d-flex align-items-center">
              <span className="right mx-2">
                <h1 className="service_no">03.</h1>
              </span>
              <span className="left ">
                <span className="top">
                  <img src={Icon3} alt="" srcset="" />
                </span>
                <span className="bottom">
                  <h5>AMC (Service))</h5>
                </span>
              </span>
            </div>
          </div>
          <div className="row flex-nowrap my-2 ">
            <div className="col d-flex align-items-center ">
              <span className="right mx-2">
                <h1 className="service_no">04.</h1>
              </span>
              <span className="left ">
                <span className="top">
                  <img src={Icon4} alt="" srcset="" />
                </span>
                <span className="bottom">
                  <h5>Installation</h5>
                </span>
              </span>
            </div>{" "}
            <div className="col d-flex align-items-center ">
              <span className="right mx-2">
                <h1 className="service_no">05.</h1>
              </span>
              <span className="left ">
                <span className="top">
                  <img src={Icon5} alt="" srcset="" />
                </span>
                <span className="bottom">
                  <h5>Uninstallation</h5>
                </span>
              </span>
            </div>{" "}
            <div className="col d-flex align-items-center ">
              <span className="right mx-2">
                <h1 className="service_no">06.</h1>
              </span>
              <span className="left ">
                <span className="top">
                  <img src={Icon6} alt="" srcset="" />
                </span>
                <span className="bottom">
                  <h5>Ultrafiltration (UF)</h5>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center justify-content-md-start">
          <button className="btn px-4 px-xs-4 btn-primary rounded-pill">
            <FontAwesomeIcon icon={faPhone} />
            <span> Call Us</span>
          </button>
          <button className="btn px-3 btn-success rounded-pill mx-4">
            <FontAwesomeIcon icon={faWhatsapp} />
            <span> Whatsapp</span>
          </button>
        </div>
        <div>
          <Ratings />
        </div>
      </div>
    </>
  );
};
export default TypesOfService;

import React from "react";

import "./Footer.css";

import Logo from "../assets/Images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faF } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer vh-100" style={{ background: "#EAEAEA" }}>
        <div className="container-fluid px-lg-5 py-lg-5">
          <div className="row">
            <div className="col-8">
              <img src={Logo} alt="" className="my-4 img-fluid" />
              <span>
                <p className=" conainer col-lg-5 ">
                  Lorem ipsum dolor sit amet consectetur. Lectus eleifend orci
                  vitae gravida sit molestie. Tristique porttitor dictum sed at
                  magna venenatis quis ultricies.
                </p>
              </span>
            </div>

            <div className="col-4 bg-danger">
              <div className="text-center bg-success  py-2 mb-5">
                <div className="bg-secondary d-flex flex-wrap justify-content-around align-items-center ">
                  <div className=" ">
                    <a href="#">Home</a>
                  </div>
                  <div className="">
                    <a href="">About</a>
                  </div>
                  <div className="">
                    <a href="">Service</a>
                  </div>
                  <div className="">
                    <a href="">Contact us</a>
                  </div>
                </div>
              </div>

              <div className="h-50  text-end ">
                <div className=" flex-column align-items-end h-100 d-flex">
                  <p className="w-50 text-start px-2">Follow us</p>
                  <div className="d-flex w-50 ">
                    <div className="footer-icon d-flex">
                      <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div className="d-flex footer-icon">
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    {/* <div className="d-flex footer-icon">
                      <FontAwesomeIcon icon={faInstagram} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

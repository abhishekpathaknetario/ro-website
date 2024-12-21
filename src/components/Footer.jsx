import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import "./Footer.css";

import Logo from "../assets/Images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer p-3 p-md-5" style={{ background: "#EAEAEA" }}>
        <div className="top d-flex justify-content-around ">
          <div className="left">
            <span className="logo">
              <img src={Logo} />
            </span>
            <span className="description">
<<<<<<< HEAD
              <p className="w--md-50 w-75  pt-2">
=======
              <p
                className="w-md-50 w-75  pt-2"
                style={{ textAlign: "justify" }}
              >
>>>>>>> origin/master
                Lorem ipsum dolor sit amet consectetur. Lectus eleifend orci
                vitae gravida sit molestie. Tristique porttitor dictum sed at
                magna venenatis quis ultricies.
              </p>
            </span>
          </div>
          <div className="right">
            <div className=" d-flex flex-column flex-md-row  justify-content-between align-items-start gap-3 footer-links py-4  px-lg-4 gap-lg-5 fw-semibold">
              <div className=" ">
                <a href="#">Home</a>
              </div>
              <div className="">
                <a href="">About</a>
              </div>
              <div className="">
                <a to="">Service</a>
              </div>
              <div className="">
                <a to="">Contact_us</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className=" flex-column  d-flex align-items-sm-start align-items-md-end">
            <div>
              <span className="">
                <p className="px-2">Follow us</p>
              </span>
              <span className="d-flex align-items-end  ">
                <button className="footer-icon d-flex">
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
                <button className="d-flex footer-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button className="d-flex footer-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="border-top text-center pt-4  border-secondary mt-5">
          <p>All rights reserved by netario innovations private limited</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;

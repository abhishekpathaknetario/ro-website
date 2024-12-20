import React, { Helmet } from "react";
// import "./SmilingMechanic.css";
import SmileMechanic from "../../assets/Images/services/plumber.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import "./Services.css";
import TypesOfService from "./TypesOfService";
const Services = () => {
  return (
    <div>
      <section className=" px-3 my-5 my-lg-0 px-lg-5 pe-3 pe-lg-0">
        <div className="d-flex justify-content-between flex-wrap-reverse flex-lg-nowrap gap-4 gap-lg-5">
          <div className="service_info container  col-lg-6 d-flex  align-items-start justify-content-center flex-column">
            <h1 className="service-heading ">
              Top-notch <span className="text-primary fw-bold">water</span>{" "}
              purifier service across India, reliable quality.
            </h1>{" "}
            <p className="service-desc">
              Providing expert water purifier services across India, we
              specialize in maintenance, repairs, and spare parts for all
              brands, ensuring safe drinking water and reliable performance with
              quick, professional support nationwide
            </p>
            <button className="btn px-4 btn-primary rounded-pill fw-bold">
              <FontAwesomeIcon icon={faPhone} />
              <a className="btncall" href="tel:5551234567" target="_blank">
                <span> Call Us</span>
              </a>
            </button>
          </div>

          <div className="">
            <img src={SmileMechanic} className="img-fluid rounded-3" alt="" />
          </div>
        </div>
      </section>

      <TypesOfService />
    </div>
  );
};

export default Services;

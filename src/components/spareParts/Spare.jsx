import React from "react";

import "../btn.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // React Font Awesome component
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // Specific icons
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Spare.css"; // Create a CSS file for custom styling
import ProductSection from "./ProductSection";
import ContactUs from "../ContactUs";
import TermsAndConditions from "./TermsConditions";

const Spare = () => {
  return (
    <>
      <div className="container-fluid my-2">
        <div className="row p-0 px-3 px-md-5">
          <div className="container_ d-flex">
            <section className="left  d-none d-lg-block">
              <span className="fs-5 p-0 d-flex gap-3 mb-3">
                Products{" "}
                <span className="w-75">
                  {" "}
                  <hr className="w-100 border-2" />
                </span>
              </span>

              <div
                className="p-3"
                style={{ height: "28rem", background: "#F8F8F8" }}
              >
                <input
                  className="form-control "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ backgroundColor: "#EFEFEF" }}
                ></input>

                <div
                  className="col overflow-y-scroll  d-flex text-center flex-column overflow-x-hidden "
                  style={{ height: "20rem", padding: "0px 10px" }}
                >
                  <span className="row pb-2 border-2 border-bottom  my-1 d-inline ">
                    <span>Tap, Elbow and Connecter</span>
                    <span className="text-primary fw-semibold">12</span>
                  </span>
                  <span className="row pb-2 border-2 border-bottom  my-1 d-inline ">
                    <span>Tap, Elbow and Connecter</span>
                    <span className="text-primary fw-semibold">12</span>
                  </span>
                  <span className="row pb-2 border-2 border-bottom  my-1 d-inline ">
                    <span>Tap, Elbow and Connecter</span>
                    <span className="text-primary fw-semibold">12</span>
                  </span>
                  <span className="row pb-2 border-2 border-bottom  my-1 d-inline ">
                    <span>Tap, Elbow and Connecter</span>
                    <span className="text-primary fw-semibold">12</span>
                  </span>
                  <span className="row pb-2 border-2 border-bottom  my-1 d-inline ">
                    <span>Tap, Elbow and Connecter</span>
                    <span className="text-primary fw-semibold">12</span>
                  </span>
                  <span className="row pb-2 border-2 border-bottom  my-1 d-inline ">
                    <span>Tap, Elbow and Connecter</span>
                    <span className="text-primary fw-semibold">12</span>
                  </span>
                  <span className="row pb-2 border-2 border-bottom  my-1 d-inline ">
                    <span>Tap, Elbow and Connecter</span>
                    <span className="text-primary fw-semibold">12</span>
                  </span>
                  <span className="row pb-2 border-2 border-bottom  my-1 d-inline ">
                    <span>Tap, Elbow and Connecter</span>
                    <span className="text-primary fw-semibold">12</span>
                  </span>
                  <span className="row pb-2 border-2 border-bottom  my-1 d-inline ">
                    <span>Tap, Elbow and Connecter</span>
                    <span className="text-primary fw-semibold">12</span>
                  </span>
                  <span className="row pb-2 border-2 border-bottom  my-1 d-inline ">
                    <span>Tap, Elbow and Connecter</span>
                    <span className="text-primary fw-semibold">12</span>
                  </span>
                </div>

                <span className="d-flex justify-content-center align-items-center gap-1 mt-4">
                  <button className="btn gap-2 d-flex align-items-center my-3 px-3 container  btn-primary rounded-pill ">
                    <FontAwesomeIcon icon={faPhone} />
                    <a
                      className="btncall"
                      href="tel:5551234567"
                      target="_blank"
                    >
                      <span> Call Us</span>
                    </a>
                  </button>

                  <button className="btn gap-2 d-flex align-items-center my-3 px-3 container  btn-success rounded-pill ">
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
                </span>
              </div>
            </section>

            <div className="col-12 col-md-8 margin-wepro">
              {/* SEARCH AND DESCRPTION */}

              <div className="w-100 w-md-50">
                <h5 className="fw-bold mt-2 fs-4">
                  High-Quality RO Purifier Spare Parts and Services{" "}
                </h5>

                <p className="fw-semibold w-100 w-md-75">
                  Are you trying to find trustworthy RO purifier services? We
                  offers premium-quality RO purifier replacement parts for all
                  popular manufacturers, guaranteeing your water purifier's
                  stability and optimum performance. Our genuine replacement
                  parts is assembled to maintain the safety and cleanliness of
                  your water, whether they be filters, membranes, or other
                  parts. We effectively handles all of your water purifier
                  demands by specializing in RO repair, cleaning, and
                  installation services in Noida and Gurgaon along with to spare
                  parts.
                </p>

                {/* Search And Pagination */}
                <div className="d-none d-md-flex  align-items-center w-100 w-md-75  ">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  ></input>
                  <nav aria-label="Page navigation example">
                    <ul class="pagination m-0">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/*Product galarry  here  */}

              <div className="w-100 w-md-75 ">
                <ProductSection />
              </div>
            </div>
          </div>

          <div>
            <ContactUs />
          </div>
          <TermsAndConditions />
        </div>
      </div>
    </>
  );
};

export default Spare;

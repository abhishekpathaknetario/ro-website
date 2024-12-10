import React from "react";

import Spare1 from "../../assets/Images/spare-parts/p1.png";
import Spare2 from "../../assets/Images/spare-parts/p3.png";
import Spare3 from "../../assets/Images/spare-parts/p2.png";
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
                    <span> Callus</span>
                  </button>

                  <button className="btn gap-2 d-flex align-items-center my-3 px-3 container  btn-success rounded-pill ">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <span> Whatsapp</span>
                  </button>
                </span>
              </div>
            </section>
            <div className="col-12 col-md-8 margin-wepro">
              {/* SEARCH AND DESCRPTION */}

              <div className="w-100 w-md-50">
                <h5>We Provide Best Quality of Spare Parts</h5>

                <p className="">
                  Get premium-quality purifier spare parts for all major brands,
                  designed to ensure optimal performance and longevity of your
                  water purifiers. From filters to membranes, find genuine,
                  reliable replacements with us and maintain pure, safe drinking
                  water
                </p>
                {/* Search And Pagination */}
                <div className=" d-flex align-items-center w-75  ">
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
                        <a class="page-link" href="#">
                          3
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

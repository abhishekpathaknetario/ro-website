import React from "react";
import "./WhatWeOffercss.css";
import Frame1 from "../assets/Images/frame1.png";
import Frame2 from "../assets/Images/frame2.png";
import Frame3 from "../assets/Images/frame3.png";
function WhatWeOffer() {
  return (
    <section className="container my-5 ">
      <div>
        {/* TOP HEADING AND DESCRIPTION */}
        <div className="text-center d-flex flex-column align-items-center my-5 ">
          <p className="text-primary fs-4  py-2 ">WHAT WE OFFER</p>

          <h1 className="fs-2 fs-md-6 py-2 before-element">
            Lorem Ipsum Dolor Sit Amet Consectetur.
          </h1>
          <p className="fs-6 fw-medium  my-3">
            Our water purifier service specializes in professional maintenance,
            repairs, and installations for all major brands, ensuring optimal
            performance and longevity. We also offer a wide range of genuine
            spare parts, including filters, membranes, and cartridges.{" "}
          </p>
        </div>

        {/* CARDS */}

        <div className="cards-container d-flex flex-wrap flex-md-nowrap gap-5 justify-content-center justify-content-around mt-5 px-4 ">
          {/*  */}
          <div className="card border-2" style={{ width: "20rem" }}>
            <div className="card-body">
              <span>
                <img src={Frame1} alt="" />
              </span>
              <h6 className="card-subtitle my-3 text-dark fs-5">
                Home Services{" "}
              </h6>
              <p className="text-dark fw-normal ">
                Lorem ipsum dolor sit amet consectetur. Est et congue habitasse
                mattis consectetur viverra nec. Sit arcu etiam fringilla vel
                tincidunt. Purus viverra sed blandit a.
              </p>
              <a href="#" className="text-decoration-none text-dark fw-semibold">
                Read more
              </a>
            </div>
          </div>
          <div className="card border-2" style={{ width: "20rem" }}>
            <div className="card-body">
              <span>
                <img src={Frame2} alt="" />
              </span>
              <h6 className="card-subtitle my-3 text-dark fs-5">
                Installation/Uninstallation
              </h6>
              <p className="fs-6 fw-normal">
                Lorem ipsum dolor sit amet consectetur. Est et congue habitasse
                mattis consectetur viverra nec. Sit arcu etiam fringilla vel
                tincidunt. Purus viverra sed blandit a.
              </p>
              <a href="#" className="text-decoration-none text-dark fw-semibold">
                Read more
              </a>
            </div>
          </div>
          <div className="card border-2" style={{ width: "20rem" }}>
            <div className="card-body">
              <span>
                <img src={Frame3} alt="" />
              </span>
              <h6 className="card-subtitle my-3 text-dark fs-5">Spare Parts</h6>
              <p className="fs-6 fw-normal">
                Lorem ipsum dolor sit amet consectetur. Est et congue habitasse
                mattis consectetur viverra nec. Sit arcu etiam fringilla vel
                tincidunt. Purus viverra sed blandit a.
              </p>
              <a href="#" className="text-decoration-none text-dark fw-semibold">
                Read more
              </a>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </section>
  );
}

export default WhatWeOffer;

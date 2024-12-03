import React from "react";
import "./SmilingMechanic.css";
import SmileMechanic from "../assets/Images/SmilingMechanic.png";

const SmilingMechanic = () => {
  return (
    <div>
      <section className="py-5 my-5 px-5">
        <div className="d-flex justify-content-between flex-wrap flex-lg-nowrap gap-5">

          <div className="service_desc py-5 my-5  col-lg-6">
            <p className="text-primary fs-6 fs-md-5 mt-5">SERVICE</p>
            <p className="fs-5">
              <b className="fs-4">100+</b> Service Mens
            </p>
            <p className="fs-5">
              Our water purifier service specializes in professional
              maintenance, repairs, and installations for all major brands,
              ensuring optimal performance and longevity. We also offer a wide
              range of genuine spare parts, including filters{" "}
            </p>
            <p className="btn px-4 py-2 btn-primary fs- rounded-pill">Read More</p>
          </div>

          <div className="">
            <img src={SmileMechanic} className="img-fluid" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmilingMechanic;

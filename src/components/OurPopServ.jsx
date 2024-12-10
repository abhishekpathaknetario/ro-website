import React from "react";
import "./PopServ.css";
import Mechanic from "../assets/Images/mechanic.png";
import Courier from "../assets/Images/courier.png";
import Wrench from "../assets/Images/wrench.png";

function OurPopServ() {
  return (
    <div className=" pb-5 pt-md-3  bg-service">
      <section className="container">
        <div>
          {/* TOP HEADING AND DESCRIPTION */}
          <div className="text-center d-flex flex-column align-items-center my-5 mt-0">
            <p className="text-primary fs-3 my-5 fw-medium ">
              OUR POPULAR SERVICES
            </p>

            <h1 className="fs-3 w-100 w-md-75">
              Lorem Ipsum Dolor Sit Amet Consectetur.
            </h1>
            <p className="fs-6 w-75 my-3">
              Our water purifier service specializes in professional
              maintenance, repairs, and installations for all major brands,
              ensuring optimal performance and longevity. We also offer a wide
              range of genuine spare parts, including filters
            </p>
          </div>

          <div className="cards justify-content-around gap-5 row">
            {/* CARD */}
            <div className="col-11 col-md-3  ">
              <div className="card serv-card">
                <img src={Mechanic} alt="" className="img-fluid" />
              </div>

              <p className="my-2">Repair Service ₹400</p>
              <b className="btn btn-primary rounded-pill w-100">Book Now</b>
            </div>
            {/* CARD */}

            {/* CARD */}
            <div className=" col-11 col-md-3  ">
              <div className="card serv-card">
                <img src={Courier} alt="" className="img-fluid" />
              </div>

              <p className="my-2">Installation ₹600 </p>
              <b className="btn btn-primary rounded-pill w-100">Book Now</b>
            </div>
            {/* CARD */}

            {/* CARD */}
            <div className=" col-11 col-md-3   ">
              <div className="card serv-card">
                <img src={Wrench} alt="" className="img-fluid" />
              </div>

              <p className="my-2">Uninstallation</p>
              <b className="btn btn-primary rounded-pill w-100">Book Now</b>
            </div>
            {/* CARD */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurPopServ;

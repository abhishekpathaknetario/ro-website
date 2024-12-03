import React from "react";
import "./PopServ.css"
import Mechanic from "../assets/Images/mechanic.png";
import Courier from "../assets/Images/courier.png";
import Wrench from "../assets/Images/wrench.png";

function OurPopServ() {
  return (
    <div className=" py-5  bg-service">
      <section className="container">
        <div>
          {/* TOP HEADING AND DESCRIPTION */}
          <div className="text-center d-flex flex-column align-items-center my-5 mt-0">
            <p className="text-primary fs-3 my-5 fw-medium ">OUR POPULAR SERVICES</p>

            <h1 className="fs-3 w-100 w-md-75">Lorem Ipsum Dolor Sit Amet Consectetur.</h1>
            <p className="fs-6 w-75 my-3">
              Our water purifier service specializes in professional
              maintenance, repairs, and installations for all major brands,
              ensuring optimal performance and longevity. We also offer a wide
              range of genuine spare parts, including filters
            </p>
          </div>

          <div className="cards d-flex flex-wrap justify-content-around gap-5">
            {/* CARD */}
            <div className=" " style={{ width: "15rem" }}>
              <div
                className="card"
                style={{
                  width: "15rem",
                  height: "17rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={Mechanic} alt="" style={{ width: "8rem" }} />
              </div>

              <p className="my-2">Repair Service ₹400</p>
              <b className="btn btn-primary rounded-pill w-100">Book Now</b>
            </div>
            {/* CARD */}

            {/* CARD */}
            <div className=" " style={{ width: "15rem" }}>
              <div
                className="card"
                style={{
                  width: "15rem",
                  height: "17rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={Courier} alt="" style={{ width: "8rem" }} />
              </div>

              <p className="my-2">Installation ₹600 </p>
              <b className="btn btn-primary rounded-pill w-100">Book Now</b>
            </div>
            {/* CARD */}

            {/* CARD */}
            <div className=" " style={{ width: "15rem" }}>
              <div
                className="card"
                style={{
                  width: "15rem",
                  height: "17rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={Wrench} alt="" style={{ width: "8rem" }} />
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

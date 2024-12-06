import React from "react";
import Contact from "../assets/Images/ContactUS.png";

import "./ContactUscss.css";

const ContactUs = () => {
  return (
    <>
      <div className="container  ">
        <div className="py-5">
          <p className="fs-4 text-center my-3  text-primary ">Contact us</p>
          <h1 className="text-center mb-5 fs-3">
            Our Team Contact us As Soon As Possible
          </h1>

          <div>
            <div className="row py-3">
              <div className="col-12 col-md-6  d-flex align-items-center justify-content-center">
                <div
                  style={{
                    width: "35rem",
                    height: "35.5rem",
                  }}
                >
                  <div
                    className="customBg rounded-5 "
                    style={{
                      width: "100%",
                      height: "100%",
                      boxShadow:
                        " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                    }}
                  >
                    <p className="text-center w-100 text-bg-primary py-4 fs-5 rounded-bottom-5 m-0">
                      Contact us- (91-8802876865){" "}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-md-6  mt-5 mt-sm-0   d-flex align-items-center justify-content-center  rounded-5 border border-2
              "
                style={{ background: "#FBFBFB" }}
              >
                <form
                  className="px-2 mx-0 px-lg-5  my-5 "
                  style={{
                    width: "34rem",
                  }}
                >
                  <div className="mb-3 mt-3">
                    <p className="my-4">Please fill your contact details. </p>

                    <input
                      type="email"
                      className="form-control  my-5"
                      id="exampleInputEmail1"
                      placeholder="Your Name"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control  my-5"
                      id="exampleInputPassword1"
                      placeholder="Contact Number"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Your Email"
                    ></input>
                  </div>
                  <div className="mb-3 form-check"></div>
                  <button type="submit" className="btn w-100 btn-primary">
                    Submit
                  </button>
                </form>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

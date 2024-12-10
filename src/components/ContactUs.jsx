import React from "react";
import Contact from "../assets/Images/ContactUS.png";

import "./ContactUscss.css";

const ContactUs = () => {
  return (
    <>
      <div className="container ">
        <div className="py-5">
          <p className="fs-4 fw-semibold text-center my-3  text-primary ">
            Contact us
          </p>
          <h1 className="text-center mb-5 fs-3">
            Our Team Contact us As Soon As Possible
          </h1>

          <div>
            <div className="">
              <div className="row">
                <div className="col-12 col-md-6  d-flex align-items-center justify-content-center ">
                  <div className="contact-card-container">
                    <div
                      className="customBg  rounded-5 "
                      style={{
                        width: "100%",
                        height: "100%",
                        boxShadow:
                          " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                      }}
                    >
                      <p className="text-center w-100 text-bg-primary py-2 rounded-bottom-5 m-0">
                        Contact us- (91-8802876865){" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-12 col-md-6  d-flex align-items-center justify-content-center
              "
                >
                  <form
                    className=" contact-card-container rounded-5 px-lg-5 px-3 py-3 my-5 "
                    style={{
                      boxShadow:
                        " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                    }}
                  >
                    <div className="p-4">
                      <div>
                        <p>Please fill your contact details. </p>

                        <input
                          type="email"
                          className="form-control p-2 px-5"
                          id="exampleInputEmail1"
                          placeholder="Your Name"
                        ></input>
                      </div>
                      <div>
                        <input
                          type="password"
                          className="form-control p-2 px-5  "
                          id="exampleInputPassword1"
                          placeholder="Contact Number"
                        ></input>
                      </div>
                      <div>
                        <input
                          type="password"
                          className="form-control p-2 px-5"
                          id="exampleInputPassword1"
                          placeholder="Your Email"
                        ></input>
                      </div>
                      <button type="submit" className="btn w-100 btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

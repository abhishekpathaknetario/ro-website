import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light 
      px-lg-5 bg-white z-1 "
    >
      <div className="container-fluid px-lg-5 ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="#">
          <img src="\src\assets\Images\logo.png" alt="" />
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fw-semibold gap-3">
            <li className="nav-item">
              <a
                className="nav-link text-primary border-2 border-bottom border-primary active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Spare Parts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Payment
              </a>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary rounded-pill">
          Call Us <FontAwesomeIcon icon={faPhone} />
        </button>
        <FontAwesomeIcon
          icon={faCartShopping}
          className="mx-4 
        md-mx-5 d-none d-lg-block text-primary fs-4"
        />
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-lg-5 bg-white z-1 ">
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
          <img src="/src/assets/Images/logo.png" alt="" />
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fw-semibold gap-3">
            <li className="nav-item">
              <NavLink
                className={(e) => {
                  return e.isActive
                    ? "text-primary nav-link  border-2 border-bottom border-primary"
                    : "nav-link ";
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item  ">
              <NavLink
                className={(e) => {
                  return e.isActive
                    ? "text-primary nav-link  border-2 border-primary border-bottom"
                    : "nav-link ";
                }}
                to="/spareparts"
              >
                Spare Parts
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={(e) => {
                  return e.isActive
                    ? "nav-link text-primary border-2 border-bottom border-primary"
                    : "nav-link ";
                }}
                to="/services"
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={(e) => {
                  return e.isActive
                    ? "nav-link text-primary border-2 border-bottom border-primary"
                    : "nav-link ";
                }}
                to="/contactus"
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={(e) => {
                  return e.isActive
                    ? "nav-link text-primary border-2 border-bottom border-primary"
                    : "nav-link ";
                }}
                to="/payment"
              >
                Payment
              </NavLink>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary rounded-pill">
          Call Us <FontAwesomeIcon icon={faPhone} />
        </button>
        <NavLink
          className="mx-4 md-mx-5 d-none d-lg-block text-primary fs-4"
          to="/cartpage"
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

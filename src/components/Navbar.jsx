import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom"; // Import Link from react-router-dom

import "./Btn.css";

const Navbar = () => {
  return (
    <nav className="navbar position-fixed top-0  w-100 py-3 navbar-expand-lg navbar-light px-lg-5 bg-white z-1 ">
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

        <Link className="navbar-brand" to="/">
          <img src="/src/assets/Images/logo.png" alt="" />
        </Link>

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

            <li className="nav-item mb-3">
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
        <a className="btncall" href="tel:+918006225800" target="_blank">
          <button className="btn  btn-primary rounded-pill">
            <FontAwesomeIcon icon={faPhone} />
            <span> Call Us</span>
          </button>
        </a>
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

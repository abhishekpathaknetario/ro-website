import React from "react";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const TermsAndConditions = () => {
  return (
    <div className="lg-container px-0 px-lg-5 mt-5">
      <div className="lg-container">
        <div className="card-header  text-black">
          <h4 className="my-4">Terms & Conditions</h4>
        </div>
        <div className="card-body">
          <h3 className="fs-4">Lorem ipsum dolor sit amet consectetur. </h3>
          <p className="text-dark" style={{ fontSize: ".8rem" }}>
            Lorem ipsum dolor sit amet consectetur. Blandit non pulvinar egestas
            sed mi. Elementum integer lacus gravida ut nec. Amet dui nec sodales
            viverra sit lectus. Augue porta ultricies ac volutpat mauris nullam
            id pharetra. Velit scelerisque dignissim odio nunc est morbi feugiat
            sed habitasse. Est suscipit arcu ridiculus feugiat congue eget
            dignissim. Tincidunt tellus eu faucibus nam erat. Mattis ornare
            morbi justo mi tellus egestas. Pulvinar lorem pellentesque purus
            vehicula. Lectus sapien amet cras egestas interdum suspendisse elit.
          </p>
          <p className="text-dark" style={{ fontSize: ".8rem" }}>
            Arcu tempor ornare a ultrices felis lacinia interdum placerat. Urna
            lacinia vivamus pellentesque eleifend enim ultricies at est at.
            Lorem et ultrices quisque sed molestie. Est ullamcorper tellus est
            vestibulum est nisl purus.{" "}
          </p>

          <h3 style={{ fontSize: "1.2rem" }}>
            Lorem ipsum dolor sit amet consectetur.{" "}
          </h3>

          <p className="text-dark" style={{ fontSize: ".8rem" }}>
            If you do not agree with these terms, you may not use our services.
            For more detailed information, please contact us or review our full
            Terms of Service document.
          </p>

          <h3 style={{ fontSize: "1.2rem" }}>
            Lorem ipsum dolor sit amet consectetur.{" "}
          </h3>

          <p className="text-dark" style={{ fontSize: ".8rem" }}>
            If you do not agree with these terms, you may not use our services.
            For more detailed information,
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

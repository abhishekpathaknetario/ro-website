import React from "react";

const SpareParts = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row px-5">
          <div
            className="col-2"
            style={{ backgroundColor: "rgba(220, 220, 220, 1)" }}
          >
            <div className="col py-3">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ backgroundColor: "#959595" }}
                ></input>
              </form>
            </div>
            <div
              className="col overflow-y-scroll  text-center overflow-x-hidden "
              style={{ height: "40vh", background: "rgba(220, 220, 220, 1)" }}
            >
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>{" "}
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>{" "}
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>{" "}
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>{" "}
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>{" "}
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>{" "}
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>
              <span className="row  my-1">
                <p>Tap, Elbow and Connecter</p>
              </span>
            </div>
          </div>
          <div className="col-10 bg-success">
            {/* SEARCH AND DESCRPTION */}

            <div className="w-50 ">
              <h5>We Provide Best Quality of Spare Parts</h5>

              <p className="">
                Get premium-quality purifier spare parts for all major brands,
                designed to ensure optimal performance and longevity of your
                water purifiers. From filters to membranes, find genuine,
                reliable replacements with us and maintain pure, safe drinking
                water
              </p>
              {/* Search And Pagination */}
              <div className=" d-flex align-items-center w-75 ">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <nav aria-label="Page navigation example">
                  <ul class="pagination m-0">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/*Product galarry  here  */}

              <div className="gallery">
                <div className="gallery-item">
                  <img
                    src="https://via.placeholder.com/200"
                    alt="Product 1"
                  ></img>
                  <h5>Product 1</h5>
                  <p>$10.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpareParts;

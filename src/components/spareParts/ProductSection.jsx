import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css";

const ProductCard = ({ product }) => (
  <div
    className="card"
    style={{
<<<<<<< HEAD
      width: "100%",
      height: "280px",
=======
      width: "90%",
      height: "350px",
>>>>>>> origin/master
      padding: "10px 0px",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      fontSize: "10px",
    }}
  >
    <div
      className="d-flex align-items-center justify-content-center"
<<<<<<< HEAD
      style={{ width: "100%", height: "100px" }}
=======
      style={{ width: "100%", height: "200px" }}
>>>>>>> origin/master
    >
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
<<<<<<< HEAD
        style={{ height: "60%", width: "60%", objectFit: "contain" }}
=======
        style={{ height: "80%", width: "80%", objectFit: "contain" }}
>>>>>>> origin/master
      />
    </div>

    <div className="card-body">
      <span>
<<<<<<< HEAD
        <i className="card-title">{product.title}</i>
=======
        <p className="fw-semibold item-paragraph card-title">{product.title}</p>
>>>>>>> origin/master
      </span>
      <span>
        <p className="card-text my-3">Price: ${product.price}</p>
      </span>
      <span>
<<<<<<< HEAD
        <button className="btn btn-primary w-100">Add to Cart</button>
=======
        <button className="btn btn-primary addcart w-100 fw-semibold">
          Add to Cart
        </button>
>>>>>>> origin/master
      </span>
    </div>
  </div>
);

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products"); // Replace with your API URL
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div
      className="w-100 w-md-50 w-lg-25  overflow-y-scroll my-5"
      style={{ height: "80vh" }}
    >
<<<<<<< HEAD
      <div className="row me-0 row-cols-2 row-cols-md-2 row-cols-lg-3 g-1">
=======
      <div className="row me-0 row-cols-2 row-cols-md-2 row-cols-lg-3 g-4">
>>>>>>> origin/master
        {products.map((product) => (
          <div className="col" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;

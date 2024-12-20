import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css";

const ProductCard = ({ product }) => (
  <div
    className="card"
    style={{
      width: "90%",
      height: "350px",
      padding: "10px 0px",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      fontSize: "10px",
    }}
  >
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ width: "100%", height: "200px" }}
    >
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: "80%", width: "80%", objectFit: "contain" }}
      />
    </div>

    <div className="card-body">
      <span>
        <p className="fw-semibold item-paragraph card-title">{product.title}</p>
      </span>
      <span>
        <p className="card-text my-3">Price: ${product.price}</p>
      </span>
      <span>
        <button className="btn btn-primary addcart w-100 fw-semibold">
          Add to Cart
        </button>
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
      <div className="row me-0 row-cols-2 row-cols-md-2 row-cols-lg-3 g-4">
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

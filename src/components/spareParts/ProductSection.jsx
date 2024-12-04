import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ product }) => (
  <div
    className="card"
    style={{
      width: "100%",
      padding: "10px",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    }}
  >
    <img
      src={product.image}
      className="card-img-top"
      alt={product.name}
      style={{ width: "100%", height: "150px", objectFit: "contain" }}
    />
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">Price: ${product.price}</p>
      <button className="btn btn-primary">Add to Cart</button>
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
      className="w-75 w-md-50 w-lg-25 mx-auto overflow-y-scroll my-5"
      style={{ height: "80vh", padding: "20px" }}
    >
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
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

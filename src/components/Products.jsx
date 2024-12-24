import React from "react";
import { Link } from "react-router-dom";

export default function Products({ productList }) {
  return (
    <div className="p-4 container mx-auto  p-4 bg-gradient-to-b from-black via-purple-500 to-pink-500  shadow-lg text-white">
      <h1 className="text-4xl font-bold text-center">Our Products</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`} className="text-black">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

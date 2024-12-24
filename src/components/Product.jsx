import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Product({ productList }) {
  const { id } = useParams();
  const productId = parseInt(id);

  const value = productList.find((product) => product.id === productId);

  return (
    <div className="container mx-auto  p-4 bg-gradient-to-b from-black via-purple-500 to-pink-500  shadow-lg text-white">
      <div>
        <h2>title: {value.name}</h2>
        <p>body: {value.title}</p>
      </div>
      <Link to={`/products`} className="text-black">
        {"<"}-back
      </Link>
    </div>
  );
}

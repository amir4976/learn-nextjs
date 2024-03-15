import React from "react";

async function Products() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products = await res.json();
  return (
    <>
      <h2>Products:</h2>
      <ul>
        {products.map((Product) => (
          <li key={Product.id}>{Product.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Products;

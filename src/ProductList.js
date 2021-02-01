import React from "react";
import "./ProductList.css";
import { Button } from "@material-ui/core";
import Product from "./Product";

function ProductList({ title, desc, products }) {
  return (
    <div className="productList">
      <div className="productList__head">
        <div className="productList__title">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <Button className="view__button">VIEW ALL</Button>
      </div>
      <div className="row">
        {products.map((product) => (
          <Product
            id={product.id}
            image={product.image}
            title={product.title}
            offer={product.offer}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

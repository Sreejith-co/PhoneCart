import React from "react";
import "./ProductList.css";
import products from "../api/products.json";
import { BeforeCart } from "./cartButtons/BeforeCart";
import { AfterCart } from "./cartButtons/AfterCart";
import { useSelector } from "react-redux";

export const ProductList = () => {
  const { cartCount, cartList } = useSelector((state) => state.cart);

  console.log(cartList);
  return (
    <section className="container">
      {products.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>

          {cartCount > 0 ? <AfterCart /> : <BeforeCart product={product} />}
        </div>
      ))}
    </section>
  );
};

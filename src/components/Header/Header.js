import React from "react";
import Image from "./cart-30-32.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Redux App</h1>
        <img src={Image} alt="cartimg" />
      </div>
    </header>
  );
};

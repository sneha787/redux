import React from "react";
import cart4 from "../Images/cart4.jpeg";

export default function Header(props) {
  console.warn("header", props.cartData);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.cartData.length}</span>
        <img src={cart4} alt="Cart Iamge" />
      </div>
    </div>
  );
}

import React from "react";
import img15 from "../Images/img15.jpeg";

export default function Home(props) {
  console.warn(props);
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={img15} alt="Spagetti-balls" />
        </div>
        <div className="text-wrapper item">
          <span>Spagetti Balls</span>
          <span>Price: $10.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ Price: 10.0, name: "Spagetti Balls" })
            }
          >
            Add to Cart
          </button>
          <button
            className="remove-cart-btn"
            onClick={() => props.removeToCartHandler()}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}

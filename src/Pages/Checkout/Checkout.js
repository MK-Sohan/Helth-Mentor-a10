import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="all-container">
        <h1 className="checkout-title">
          Make An <br /> Appointment{" "}
        </h1>
        <div className="checkout-inputs">
          <div className="input-1">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <div className="input-2">
            <input
              type="email"
              name="checkout-email"
              id=""
              placeholder="Your Email"
            />{" "}
          </div>
          <br />
          <button className="submit-button">Submit Now</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

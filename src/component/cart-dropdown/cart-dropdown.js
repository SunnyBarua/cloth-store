import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./cart-dropdown.scss";
const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

export default Cart;

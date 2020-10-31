import React from "react";
import "./CheckOut.scss";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CheckoutItem from "../../component/checkout-item/checkout-item";
import StripeCheckoutButton from "../../component/stripe-button/stripe-button";
const CheckOut = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL : £{total}</div>
      <div className="test-warning">
        *Please use the following test credit card for *
        <br />
        4242 4242 4242 4242 -Exp:01/22 - CVV:821
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);

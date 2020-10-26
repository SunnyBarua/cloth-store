import React from "react";
import "./cart-icon.scss";
import { ReactComponent as ShoppigIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { connect } from "react-redux";
const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppigIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);

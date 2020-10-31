import React from "react";
import bg from "../../assets/top-bg.jpg";
import "./TopBackground.scss";
import { Link } from "react-router-dom";

const TopBackground = () => {
  return (
    <div
      className="top-background"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="top-description">
        <h1>Exclusive Collection</h1>
        <Link to="/shop">
          <h3 className="buy"> Shop Now</h3>
        </Link>
      </div>
    </div>
  );
};

export default TopBackground;

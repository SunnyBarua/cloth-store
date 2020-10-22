import React from "react";
import SHOP_DATA from "./shop.data.js";
import PreviewCollection from "../../component/preview-collection/preview-collection.js";

const Shop = () => {
  return (
    <div className="shop-page">
      {SHOP_DATA.map(({ id, ...otherShopProps }) => (
        <PreviewCollection key={id} {...otherShopProps} />
      ))}
    </div>
  );
};

export default Shop;

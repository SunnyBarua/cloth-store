import React from "react";
import CollectionsOverview from "../../component/collections-overview/collections-overview";
import Collection from "../collection/Collection";
import { Route } from "react-router-dom";

const Shop = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />

      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;

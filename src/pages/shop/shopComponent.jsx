import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import { Route } from "react-router-dom";
import CollectionPage from '../collection/collection';

const ShopPage = ({ match }) => {
  //Match is a Route prop (alongside location and history)
  console.log('match:', match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} /> {/*If on same path stay on collection overview page*/}
      <Route path={`${match.path}/:collectionid`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;

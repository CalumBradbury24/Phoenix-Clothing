import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionPage from "../collection/collection";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  //Snapshot is representation of collections array taken from firebase store
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections"); //collections is the collection in firebase store

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
      }
    );
  }

  render() {
    const { match } = this.props; //Match is a Route prop (alongside location and history)
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />{" "}
        {/*If on same path stay on collection overview page*/}
        <Route
          path={`${match.path}/:collectionid`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

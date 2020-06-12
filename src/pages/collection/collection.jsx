import React from "react";
import CollectionItem from "../../components/collection-item/collection-Item";
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import "./collection.styles.scss";

//Access to match due to Route component that sends user here
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className='title'>{ title }</h2>
      <div className='items'>
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
};

//ownProps is second optional argument in mapStateToProps
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionid)(state)
});


export default connect(mapStateToProps)(CollectionPage);

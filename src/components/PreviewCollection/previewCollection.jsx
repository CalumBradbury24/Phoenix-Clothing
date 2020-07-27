import React from "react";
import "./previewCollectionStyles.scss";
import CollectionItem from '../collection-item/collection-Item';
import { withRouter } from 'react-router-dom';

const PreviewCollection = ({ title, items, history, match }) => (
  <div className="collection-preview">
    <h1 className="title"
     onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)  //Filter to make sure there is only 4 items displays in preview
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(PreviewCollection);

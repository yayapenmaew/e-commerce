import React from "react";
import "./preview-collection.styles.scss";
import Collection from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <Collection {...item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;

import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x £{price}
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);//Cart item should only re-render when the item that is passed in ever changes (i.e number of black shirts changes in cart) 

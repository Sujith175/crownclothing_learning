import React from "react";
import "./checkoutItem.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
const CheckOutItem = ({ cartItem }) => {
  const { removeItemFromCart, clearItemFromCart, addItemToCart } =
    useContext(CartContext);

  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  };
  const addItemHandler = () => {
    addItemToCart(cartItem);
  };
  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="" />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;

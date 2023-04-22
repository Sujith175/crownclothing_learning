import React from "react";
import "./checkoutItem.styles.scss";

import { useDispatch } from "react-redux";

import {
  removeItemFromCart,
  addItemToCart,
  clearItemFromCart,
} from "../../Store/Cart/cart.reducer";
const CheckOutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItem));
  };
  const addItemHandler = () => {
    dispatch(addItemToCart(cartItem));
  };
  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItem));
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

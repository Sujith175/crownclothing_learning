import React from "react";
import "./checkoutItem.styles.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCartItems } from "../../Store/Cart/cart.selector";
import {
  removeItemFromCart,
  addItemToCart,
  clearItemFromCart,
} from "../../Store/Cart/cart.action";
const CheckOutItem = ({ cartItem }) => {
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };
  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };
  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
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

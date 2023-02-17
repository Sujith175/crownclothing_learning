import React from "react";
import { CartItemContainer, CartItemName, ItemDetails } from "./CartItemStyles";

const CartItem = ({ cartItem }) => {
  return (
    <CartItemContainer>
      <img src={cartItem.imageUrl} alt="" />
      <ItemDetails>
        <CartItemName>{cartItem.name}</CartItemName>
        <span>
          {cartItem.price} x {cartItem.quantity}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

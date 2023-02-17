import {
  CheckOutContainer,
  CheckoutHeader,
  CheckOutTotal,
  HeaderBlock,
} from "./CheckoutStyles";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import CheckOutItem from "../CheckOutItem/CheckOutItem";
const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckOutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <CheckOutTotal>Total : ${cartTotal}</CheckOutTotal>
    </CheckOutContainer>
  );
};

export default CheckOut;

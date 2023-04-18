import {
  CheckOutContainer,
  CheckoutHeader,
  CheckOutTotal,
  HeaderBlock,
} from "./CheckoutStyles";

import { useSelector } from "react-redux";
import {
  selectCartTotal,
  selectCartItems,
} from "../../Store/Cart/cart.selector";

import CheckOutItem from "../CheckOutItem/CheckOutItem";
const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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

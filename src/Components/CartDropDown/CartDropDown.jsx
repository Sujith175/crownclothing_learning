import ButtonComponent from "../Button/ButtonComponent";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./cartDropDownStyles";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../Store/Cart/cart.selector";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const checkOutNavigationHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>

      <ButtonComponent onClick={checkOutNavigationHandler}>
        CheckOut
      </ButtonComponent>
    </CartDropDownContainer>
  );
};

export default CartDropDown;

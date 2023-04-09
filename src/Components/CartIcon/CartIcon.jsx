import { useSelector } from "react-redux";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./CartIconStyles";
import { useDispatch } from "react-redux";
import { setIsCartOpen } from "../../Store/Cart/cart.action";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../Store/Cart/cart.selector";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

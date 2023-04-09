import React from "react";
import ButtonComponent, {
  BUTTON_TYPES_CLASSES,
} from "../Button/ButtonComponent";
import { Footer, Price, ProductCartContainer, Name } from "./ProductCardStyles";
import { selectCartItems } from "../../Store/Cart/cart.selector";
import { addItemToCart } from "../../Store/Cart/cart.action";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addItemToCartHandler = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  const { name, price, imageUrl } = product;
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt="" />

      <Footer>
        <Name>{name}</Name>
        <Price>{price}$</Price>
      </Footer>
      <ButtonComponent
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addItemToCartHandler}
      >
        Add to Cart
      </ButtonComponent>
    </ProductCartContainer>
  );
};

export default ProductCard;

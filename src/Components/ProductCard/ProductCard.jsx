import React from "react";
import ButtonComponent, {
  BUTTON_TYPES_CLASSES,
} from "../Button/ButtonComponent";
import { Footer, Price, ProductCartContainer, Name } from "./ProductCardStyles";

import { addItemToCart } from "../../Store/Cart/cart.reducer";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addItemToCartHandler = () => dispatch(addItemToCart(product));

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

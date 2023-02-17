import React, { useContext } from "react";
import ButtonComponent, {
  BUTTON_TYPES_CLASSES,
} from "../Button/ButtonComponent";
import { Footer, Price, ProductCartContainer, Name } from "./ProductCardStyles";
import { UserContext } from "../../Contexts/UserContext";
import { CartContext } from "../../Contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const addItemToCartHandler = () => {
    addItemToCart(product);
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

import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import {
  CartPreview,
  CartPreviewTitle,
  CategoryPreviewContainer,
} from "./CategoryPreviewStyles";

const CategoryPreviewComponent = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CartPreviewTitle to={title}>{title.toUpperCase()}</CartPreviewTitle>
      </h2>
      <CartPreview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </CartPreview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreviewComponent;

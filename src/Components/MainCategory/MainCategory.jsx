import React from "react";
import { CategoryContainer } from "./MainCategoryStyles";
import DirectoryItem from "../DirectoryItem/DirectoryItem";

const MainCategory = ({ categories }) => {
  return (
    <CategoryContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </CategoryContainer>
  );
};

export default MainCategory;

import { Fragment, useContext } from "react";
import CategoryPreviewComponent from "../../Components/CategoryPreviewComponent/CategoryPreviewComponent";

import { CategoryContext } from "../../Contexts/CategoriesContext";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoryContext);

  console.log(categoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreviewComponent
            key={title}
            title={title}
            products={products}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;

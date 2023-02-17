import { Fragment, useContext } from "react";
import CategoryPreviewComponent from "../../Components/CategoryPreviewComponent/CategoryPreviewComponent";

import { CategoriesContext } from "../../Contexts/CategoriesContext";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

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

import { Fragment, useContext } from "react";
import CategoryPreviewComponent from "../../Components/CategoryPreviewComponent/CategoryPreviewComponent";

import { useSelector } from "react-redux";
import { selectCategories } from "../../Store/Category/category.selector";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories);

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

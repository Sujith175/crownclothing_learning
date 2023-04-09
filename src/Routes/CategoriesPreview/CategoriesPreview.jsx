import { Fragment, useContext } from "react";
import CategoryPreviewComponent from "../../Components/CategoryPreviewComponent/CategoryPreviewComponent";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../Store/Category/category.selector";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

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

import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { CategoryContainer, Categorytitle } from "./CategoryStyles";
import { selectCategoriesMap } from "../../Store/Category/category.selector";
import { useSelector } from "react-redux";
import Spinner from "../../Components/Spinner/Spinner";
import { selectCategoryIsLoading } from "../../Store/Category/category.selector";
const Category = () => {
  const { category } = useParams();
  const isLoading = useSelector(selectCategoryIsLoading);
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Categorytitle>{category.toUpperCase()}</Categorytitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;

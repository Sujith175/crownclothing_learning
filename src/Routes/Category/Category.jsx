import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { CategoryContainer, Categorytitle } from "./CategoryStyles";
import { selectCategories } from "../../Store/Category/category.selector";
import { useSelector } from "react-redux";
const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategories);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      {console.log(categoriesMap[category])}
      <Categorytitle>{category.toUpperCase()}</Categorytitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;

import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";
import { getCategoriesAndDocuments } from "../../Utils/firebaseUtils/firebaseutils";
import { useDispatch } from "react-redux";
import { setCategories } from "../../Store/Category/category.reducer";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryArray = await getCategoriesAndDocuments();
      // console.log(categoryMap);
      dispatch(setCategories(categoryArray));
    };
    getCategoryMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

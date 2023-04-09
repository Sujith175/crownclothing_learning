import { CATEGORIES_ACTION_TYPE } from "./category.types";

import { createAction } from "../../Utils/Reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../Utils/firebaseUtils/firebaseutils";
export const fetchCategoryStart = () => {
  return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);
};
export const fetchCategorySucces = (categoriesMap) => {
  return createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_SUCCESS,
    categoriesMap
  );
};
export const fetchCategoryFailed = (error) => {
  return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_FAILED, error);
};
export const fetchCategoryAsync = () => async (dispatch) => {
  dispatch(fetchCategoryStart());
  try {
    const categoriesMap = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategorySucces(categoriesMap));
  } catch (error) {
    dispatch(fetchCategoryFailed(error));
  }
};

import { CATEGORIES_ACTION_TYPE } from "./category.types";

import { createAction } from "../../Utils/Reducer/reducer.utils";

export const fetchCategoryStart = () => {
  return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);
};
export const fetchCategorySucces = (categoriesMap) => {
  return createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_SUCCESS,
    categoriesMap
  );
};
export const fetchCategoryFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_FAILED, error);

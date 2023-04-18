import { CATEGORIES_ACTION_TYPE } from "./category.types";

import { createAction } from "../../Utils/Reducer/reducer.utils";
export const setCategories = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesMap);

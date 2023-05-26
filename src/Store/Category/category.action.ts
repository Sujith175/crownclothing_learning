import { CATEGORIES_ACTION_TYPE, Category } from "./category.types";

import {
  createAction,
  Action,
  ActionWithPayload,
} from "../../Utils/Reducer/reducer.utils";

export type fetchCategoryStart =
  Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>;

export type fetchCategorySucces = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_SUCCESS,
  Category[]
>;

export type fetchCategoryFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_FAILED,
  Error
>;

export type CategoryAction =
  | fetchCategoryStart
  | fetchCategorySucces
  | fetchCategoryFailed;

export const fetchCategoryStart = (): fetchCategoryStart => {
  return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);
};

export const fetchCategorySucces = (
  categoriesMap: Category[]
): fetchCategorySucces => {
  return createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_SUCCESS,
    categoriesMap
  );
};
export const fetchCategoryFailed = (error: Error): fetchCategoryFailed =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_FAILED, error);

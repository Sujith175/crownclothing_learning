import { CATEGORIES_ACTION_TYPE, Category } from "./category.types";

import { CategoryAction } from "./category.action";

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  categories: [],
};

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const categoryReducer = (
  state = INITIAL_STATE,
  action = {} as CategoryAction
) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

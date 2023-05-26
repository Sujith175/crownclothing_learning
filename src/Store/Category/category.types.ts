export enum CATEGORIES_ACTION_TYPE {
  FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START",
  FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORY_FAILED = "FETECH_CATEGORIES_FAILED",
}

export type categoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: categoryItem[];
};

export type CategoryMap = {
  [key: string]: categoryItem[];
};

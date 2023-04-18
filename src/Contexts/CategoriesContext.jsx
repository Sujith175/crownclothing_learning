import { createContext, useEffect, useReducer } from "react";
import { getCategoriesAndDocuments } from "../Utils/firebaseUtils/firebaseutils";

const INITIAL_STATE = {
  setCategoriesMap: {},
};

const CATEGORY_ACTION_TYPES = {
  SET_CATEGORIES: "SET_CATEGORIES",
};

export const CategoryContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

const categoryReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in Categoryreducer`);
  }
};

export const CategoriesProvider = ({ children }) => {
  const [{ categoriesMap }, dispatch] = useReducer(
    categoryReducer,
    INITIAL_STATE
  );

  const setCategoriesMap = (category) => {
    dispatch({ type: CATEGORY_ACTION_TYPES.SET_CATEGORIES, payload: category });
  };

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoryMap();
  }, []);
  const value = { categoriesMap, setCategoriesMap };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

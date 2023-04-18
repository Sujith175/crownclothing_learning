import { combineReducers } from "redux";
import { userReducer } from "./User/user.reducer";
import { categoryReducer } from "./Category/category.reducer";
import { cartReducer } from "./Cart/cart.reducer";
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoryReducer,
  cart: cartReducer,
});

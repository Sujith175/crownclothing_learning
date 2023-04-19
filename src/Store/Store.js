// import { compose, createStore, applyMiddleware } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";

// //root-reducer

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
//   console.log("type", action.type);
//   console.log("payload", action.payload);
//   console.log("currentState", store.getState());

//   next(action);

//   console.log("next state", store.getState());
// };

const middlewares = [logger];
// const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

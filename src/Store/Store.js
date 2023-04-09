import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
//root-reducer
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
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
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const presistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [logger, sagaMiddleware];
const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(
  presistedReducer,
  undefined,
  composedEnhancers
);
sagaMiddleware.run(rootSaga);
export const persister = persistStore(store);

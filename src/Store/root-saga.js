import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./Category/category.saga";
import { userSagas } from "./User/user.saga";
export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}

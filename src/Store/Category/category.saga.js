import { getCategoriesAndDocuments } from "../../Utils/firebaseUtils/firebaseutils";
import { fetchCategorySucces, fetchCategoryFailed } from "./category.action";
import { takeLatest, all, put, call } from "redux-saga/effects";
import { CATEGORIES_ACTION_TYPE } from "./category.types";

export function* fetchCategoriesAsync() {
  try {
    const categoriesMap = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategorySucces(categoriesMap));
  } catch (error) {
    yield put(fetchCategoryFailed(error));
  }
}
export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}

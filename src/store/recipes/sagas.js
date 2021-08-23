import { takeEvery, call, put } from "redux-saga/effects";

import { fetchAllRecipes } from "services/recipe";

import {
  FETCH_RECIPES,
  FETCH_RECIPES_OK,
  FETCH_RECIPES_ERROR,
} from "./actions";

function* fetchAllRecipesWorkerSaga() {
  try {
    const response = yield call(fetchAllRecipes);
    const data = Array.isArray(response?.results) ? response.results : [];

    yield put({ type: FETCH_RECIPES_OK, payload: { data } });
  } catch (error) {
    yield put({ type: FETCH_RECIPES_ERROR, payload: { error } });
  }
}

function* recipesSagaWatcher() {
  yield takeEvery(FETCH_RECIPES, fetchAllRecipesWorkerSaga);
}

export { recipesSagaWatcher, fetchAllRecipesWorkerSaga };

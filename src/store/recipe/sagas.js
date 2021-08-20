import { call, put, takeEvery } from "redux-saga/effects";

import { fetchRecipeDetail } from "services/recipe";

import { FETCH_RECIPE, FETCH_RECIPE_ERROR, FETCH_RECIPE_OK } from "./actions";

function* fetchRecipeWorkerSaga(action) {
  try {
    const recipe = yield call(fetchRecipeDetail, action.payload.id);

    yield put({ type: FETCH_RECIPE_OK, payload: { data: recipe } });
  } catch (error) {
    yield put({ type: FETCH_RECIPE_ERROR, payload: { error } });
  }
}

function* recipeSagaWatcher() {
  yield takeEvery(FETCH_RECIPE, fetchRecipeWorkerSaga);
}

export { recipeSagaWatcher, fetchRecipeWorkerSaga };

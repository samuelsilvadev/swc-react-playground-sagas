import { all } from "redux-saga/effects";

import { recipeSagaWatcher } from "./recipe/sagas";
import { recipesSagaWatcher } from "./recipes/sagas";

function* rootWatcherSaga() {
  yield all([recipeSagaWatcher(), recipesSagaWatcher()]);
}

export { rootWatcherSaga };

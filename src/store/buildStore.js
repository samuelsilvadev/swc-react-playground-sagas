import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./rootReducer";
import { recipeSagaWatcher } from "./recipe/sagas";

function buildStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(recipeSagaWatcher);

  return store;
}

export { buildStore };

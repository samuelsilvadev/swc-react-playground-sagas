import { call, put } from "redux-saga/effects";

import { fetchAllRecipes } from "services/recipe";

import { FETCH_RECIPES_ERROR, FETCH_RECIPES_OK } from "../actions";
import { fetchAllRecipesWorkerSaga } from "../sagas";

describe("sagas", () => {
  describe("recipes", () => {
    it("should dispatch correct action when a `fetch` is made", () => {
      const iterator = fetchAllRecipesWorkerSaga();

      expect(iterator.next().value).toEqual(call(fetchAllRecipes));
      expect(iterator.next().value).toEqual(
        put({ type: FETCH_RECIPES_OK, payload: { data: [] } })
      );
    });

    it("should dispatch correct action when a `fetch` goes wrong", () => {
      const iterator = fetchAllRecipesWorkerSaga();
      const stubError = new Error("Something went wrong...");

      expect(iterator.next().value).toEqual(call(fetchAllRecipes));
      expect(iterator.throw(stubError).value).toEqual(
        put({ type: FETCH_RECIPES_ERROR, payload: { error: stubError } })
      );
    });
  });
});

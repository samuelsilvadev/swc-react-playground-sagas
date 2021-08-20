import { call, put } from "redux-saga/effects";

import { fetchRecipeDetail } from "services/recipe";
import { FETCH_RECIPE_ERROR, FETCH_RECIPE_OK } from "../actions";

import { fetchRecipeWorkerSaga } from "../sagas";

describe("sagas", () => {
  describe("recipe", () => {
    it("dispatch correct actions when `fetch` happens successfully", () => {
      const action = {
        payload: {
          id: 1,
        },
      };
      const iterator = fetchRecipeWorkerSaga(action);

      expect(iterator.next().value).toEqual(
        call(fetchRecipeDetail, action.payload.id)
      );
      expect(iterator.next().value).toEqual(
        put({ type: FETCH_RECIPE_OK, payload: { data: undefined } })
      );
    });

    it("dispatch correct actions when `fetch` throws an error", () => {
      const action = {
        payload: {
          id: 1,
        },
      };
      const iterator = fetchRecipeWorkerSaga(action);
      const stubError = new Error("API is down...");

      expect(iterator.next().value).toEqual(
        call(fetchRecipeDetail, action.payload.id)
      );

      expect(iterator.throw(stubError).value).toEqual(
        put({
          type: FETCH_RECIPE_ERROR,
          payload: { error: stubError },
        })
      );
    });
  });
});

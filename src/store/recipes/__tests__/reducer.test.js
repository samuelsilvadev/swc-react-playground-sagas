import {
  FETCH_RECIPES,
  FETCH_RECIPES_ERROR,
  FETCH_RECIPES_OK,
} from "../actions";
import { recipesReducer } from "../reducer";

describe("reducer", () => {
  describe("recipes", () => {
    it(`handles the correct state if ${FETCH_RECIPES} is passed`, () => {
      const state = {};
      const action = {
        type: FETCH_RECIPES,
      };

      const updatedState = recipesReducer(state, action);

      expect(updatedState).toEqual({
        loading: true,
        data: null,
        error: null,
      });
    });

    it(`handles the correct state if ${FETCH_RECIPES_OK} is passed`, () => {
      const state = {
        loading: true,
      };
      const action = {
        type: FETCH_RECIPES_OK,
        payload: {
          data: "stub-data",
        },
      };

      const updatedState = recipesReducer(state, action);

      expect(updatedState).toEqual({
        loading: false,
        data: "stub-data",
        error: null,
      });
    });

    it(`handles the correct state if ${FETCH_RECIPES_ERROR} is passed`, () => {
      const state = {
        loading: true,
      };
      const action = {
        type: FETCH_RECIPES_ERROR,
        payload: {
          error: "stub-error",
        },
      };

      const updatedState = recipesReducer(state, action);

      expect(updatedState).toEqual({
        loading: false,
        data: null,
        error: "stub-error",
      });
    });

    it("ignores unknown actions", () => {
      const state = {
        loading: false,
        data: null,
        error: "stub-error",
      };
      const action = {
        type: "UNKNOWN",
      };

      const updatedState = recipesReducer(state, action);

      expect(updatedState).toEqual(state);
    });
  });
});

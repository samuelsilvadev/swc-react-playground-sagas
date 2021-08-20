import { FETCH_RECIPE, FETCH_RECIPE_ERROR, FETCH_RECIPE_OK } from "../actions";
import { recipeReducer } from "../reducer";

describe("reducer", () => {
  describe("recipe", () => {
    it(`handles the correct state if ${FETCH_RECIPE} is passed`, () => {
      const state = {};
      const action = {
        type: FETCH_RECIPE,
      };

      const updatedState = recipeReducer(state, action);

      expect(updatedState).toEqual({
        loading: true,
        data: null,
        error: null,
      });
    });

    it(`handles the correct state if ${FETCH_RECIPE_OK} is passed`, () => {
      const state = {
        loading: true,
      };
      const action = {
        type: FETCH_RECIPE_OK,
        payload: {
          data: "stub-data",
        },
      };

      const updatedState = recipeReducer(state, action);

      expect(updatedState).toEqual({
        loading: false,
        data: "stub-data",
        error: null,
      });
    });

    it(`handles the correct state if ${FETCH_RECIPE_ERROR} is passed`, () => {
      const state = {
        loading: true,
      };
      const action = {
        type: FETCH_RECIPE_ERROR,
        payload: {
          error: "stub-error",
        },
      };

      const updatedState = recipeReducer(state, action);

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

      const updatedState = recipeReducer(state, action);

      expect(updatedState).toEqual(state);
    });
  });
});

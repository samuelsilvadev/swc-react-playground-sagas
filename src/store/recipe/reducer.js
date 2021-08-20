import { FETCH_RECIPE, FETCH_RECIPE_ERROR, FETCH_RECIPE_OK } from "./actions";

const initialState = { data: null, error: null, loading: null };

function recipeReducer(recipe = initialState, action) {
  if (action.type === FETCH_RECIPE) {
    return {
      ...initialState,
      loading: true,
    };
  }

  if (action.type === FETCH_RECIPE_OK) {
    return {
      ...initialState,
      loading: false,
      data: action.payload.data,
    };
  }

  if (action.type === FETCH_RECIPE_ERROR) {
    return {
      ...initialState,
      loading: false,
      error: action.payload.error,
    };
  }

  return recipe;
}

export { recipeReducer };

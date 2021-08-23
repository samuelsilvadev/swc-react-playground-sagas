import {
  FETCH_RECIPES,
  FETCH_RECIPES_ERROR,
  FETCH_RECIPES_OK,
} from "./actions";

const initialState = {
  data: null,
  error: null,
  loading: null,
};

function recipesReducer(recipes = initialState, action) {
  if (action.type === FETCH_RECIPES) {
    return {
      ...initialState,
      loading: true,
    };
  }

  if (action.type === FETCH_RECIPES_OK) {
    return {
      ...initialState,
      loading: false,
      data: action.payload.data,
    };
  }

  if (action.type === FETCH_RECIPES_ERROR) {
    return {
      ...initialState,
      loading: false,
      error: action.payload.error,
    };
  }

  return recipes;
}

export { recipesReducer };

import { combineReducers } from "redux";

import { recipeReducer } from "./recipe/reducer";
import { recipesReducer } from "./recipes/reducer";

const rootReducer = combineReducers({
  recipe: recipeReducer,
  recipes: recipesReducer,
});

export { rootReducer };

function getRecipe(state) {
  return state.recipe.data;
}

function getRecipeLoading(state) {
  return state.recipe.loading;
}

function getRecipeError(state) {
  return state.recipe.error;
}

export { getRecipe, getRecipeLoading, getRecipeError };

function getRecipes(state) {
  return state?.recipes?.data ?? [];
}

function getRecipesLoading(state) {
  return state.recipes.loading;
}

function getRecipesError(state) {
  return state.recipes.error;
}

export { getRecipes, getRecipesLoading, getRecipesError };

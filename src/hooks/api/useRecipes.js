import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FETCH_RECIPES } from "store/recipes/actions";
import {
  getRecipes,
  getRecipesError,
  getRecipesLoading,
} from "store/recipes/selectors";

function useRecipes() {
  const dispatch = useDispatch();

  const recipes = useSelector(getRecipes);
  const loading = useSelector(getRecipesLoading);
  const error = useSelector(getRecipesError);

  useEffect(() => {
    dispatch({ type: FETCH_RECIPES });
  }, [dispatch]);

  return {
    loading,
    recipes,
    error,
  };
}

export default useRecipes;

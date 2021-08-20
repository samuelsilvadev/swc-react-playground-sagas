import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FETCH_RECIPE } from "store/recipe/actions";
import {
  getRecipe,
  getRecipeError,
  getRecipeLoading,
} from "store/recipe/selectors";

function useRecipe(id) {
  const dispatch = useDispatch();

  const recipe = useSelector(getRecipe);
  const loading = useSelector(getRecipeLoading);
  const error = useSelector(getRecipeError);

  useEffect(() => {
    if (id) {
      dispatch({ type: FETCH_RECIPE, payload: { id } });
    }
  }, [id, dispatch]);

  return {
    loading,
    recipe,
    error,
  };
}

export default useRecipe;

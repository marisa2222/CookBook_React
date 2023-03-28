import * as constants from './RecipesConstants';
 

export const addRecipe = recipe => ({
    type: constants.ADD_RECIPE,
    id:recipe.id,
    payload:recipe, 
});
export const updateRecipe = (recipe) => ({
    type: constants.UPDATE_RECIPE,
    id:recipe.id,
    payload: recipe,
});
export const deleteRecipe = id => ({
    type: constants.DELETE_RECIPE,
    id:id,
});
 
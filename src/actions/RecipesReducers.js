import * as constants from './RecipesConstants';
import defaultRecipes from '../store/defaultRecipes';
  

export const initialState = {
    recipesByHash: defaultRecipes    
};
const cookbookApp = (state = initialState, action) =>{
    switch(action.type){
             
    case constants.ADD_RECIPE: {
        return {
            recipesByHash: {...state.recipesByHash, [action.id] : action.payload}  
        }; 
    }
    case constants.UPDATE_RECIPE: {
        return  {
            recipesByHash: Object.assign({}, state.recipesByHash, {[action.id] : action.payload })
        };
    }    
    case constants.DELETE_RECIPE: {
        const {[action.id]: deletedValue, ...newStateRecipesByHash } = state.recipesByHash;
        return {
            recipesByHash: newStateRecipesByHash   
        };
    }
    default :
        return state;
    }
};

 

 

export default cookbookApp;
 
import React from 'react';
import {IntroToCookbook} from './IntroToCookbook';
import RecipesList from '../containers/RecipesList';
 
 
export const MainPage = () => {    
    return(
        <div>
            <IntroToCookbook />
            <RecipesList />
        </div>
    );         
};
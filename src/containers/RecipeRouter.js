import React from 'react';
import ViewRecipe from './ViewRecipe';
import EditRecipe from './EditRecipe';
import {Route, Switch} from 'react-router-dom';
 

export const RecipeRouter = () => {
    return(
        <Switch>
            <Route exact path = "/recipes/:id"  render = {(routeProps) => 
                (<ViewRecipe {...routeProps} id = {routeProps.match.params.id} />)}/>
            <Route path = "/recipes/:id/edit" render = {(routeProps) => (<EditRecipe {...routeProps} id = {routeProps.match.params.id} />)} />
        </Switch>
    );
};
import React from 'react';
import { Link } from 'react-router-dom';
import {recipesContainerStyles, recipeTitleStyles} from '../styles';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
 

class ConnectedList extends React.Component{
    render(){
        return(
            <div className = "recipesContainer" style = {recipesContainerStyles}>
                {this.props.recipes.map(recipe =>
                    <Link to = {`/recipes/${recipe.id}`} key = {recipe.id} ><h2 style = {recipeTitleStyles}>{recipe.title}</h2></Link>)}
            </div>
        );
    }
}

ConnectedList.propTypes = {
    recipes: PropTypes.array.isRequired,
};
  
const mapStateToProps = state => {
    return { recipes: Object.values(state.recipesByHash)};
};

const RecipesList = connect(mapStateToProps)(ConnectedList);

export default RecipesList;
import React from 'react';
import { Link } from 'react-router-dom';
import {headerStyles, buttonStyles} from '../styles';
import PropTypes from 'prop-types';


export const RecipeNotFound = (props) => {
    return (
        <div>
            <h2 style = {headerStyles}>{props.header}</h2>
            <Link to = "/recipes/new"> <button className = "btn btn-default" style = {buttonStyles}>Create new recipe!</button></Link>
            <Link to = "/recipes"><button type = "button" className = "btn btn-warning" style = {buttonStyles}>See existing recipes</button></Link> 
        </div>
    );
};

RecipeNotFound.propTypes = {
    header: PropTypes.string.isRequired,
};

 
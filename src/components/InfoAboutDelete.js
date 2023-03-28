import React from 'react';
import { Link } from 'react-router-dom';
import {headerStyles, buttonStyles} from '../styles';


export const InfoAboutDelete = () => {
    return (
        <div>
            <h2 style = {headerStyles}>Recipe was deleted</h2>
            <Link to = "/recipes"><button type = "button" className = "btn btn-warning" style = {buttonStyles}>Back to recipes' list</button></Link> 
        </div>
    );
};
import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {imageStyles, largeInputStyles, imageDivStyles, imageInputStyles, headerStyles, inputStyles, formGroupStyles, buttonStyles} from '../styles';

 
class RecipeForm  extends React.Component{
    constructor(props){ 
        super(props); 
        this.state = {
            redirect: false
        }
        this.formRef = React.createRef();
        this.titleRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.ingredientsRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    validate(){
        const inputs = [this.titleRef.current, this.ingredientsRef.current, this.descriptionRef.current];
        
        if(this.formRef.current.checkValidity() === false){
             
            inputs.forEach(input => {
                const errorLabel = input.parentNode.querySelector('.invalid-feedback');
                if (!input.validity.valid) {
                    switch(input.id){
                      case 'title':
                        errorLabel.textContent = 'Good recipe starts with a good title';
                        break;
                      case 'ingredients':
                        errorLabel.textContent = 'Add the ingredients here';
                        break;
                      case 'description':
                        errorLabel.textContent = 'Describe your recipe, please';
                        break;
                      default:
                        errorLabel.textContent = input.validationMessage;
                    }
                    input.classList.add('invalid');

                    input.addEventListener('input', () => {
                        if(input.validity.valid){
                            input.classList.remove('invalid');
                        };
                    });
                } 
                else {
                    errorLabel.textContent = '';
                } 
            });

            return false;
        }
        else{
            this.setState({
                redirect: true
            });

            inputs.forEach(input => {
                const errorLabel = input.parentNode.querySelector('.invalid-feedback');
                errorLabel.textContent = '';
            });

            return true;
        }
    }

    handleSubmit(event){

        event.preventDefault();
    
        if(this.validate()){ 
          this.props.handleFormSubmit();
        }
    }

    render(){
    return(
        <form onSubmit = {this.handleSubmit} ref = {this.formRef} noValidate>
            <h2 style = {headerStyles}>{this.props.header}</h2>
            <div style = {imageDivStyles}>
                <input  id = "input"type="file"  onChange={this.props.handleChangeImage}   style = {imageInputStyles} />
                <img id = "image"  src={this.props.image} style = {imageStyles} alt = "Recipe logo"/>
            </div>  
            <div className = "form-group" style = {formGroupStyles}>
                <label htmlFor = "title" >Title:</label>
                <input type = "text" id = "title" ref = {this.titleRef} style = {inputStyles} className = "form-control" value = {this.props.title} onChange = {this.props.handleChangeTitle} onInput = {this.props.handleChangeInput} required/>
                <span className = "invalid-feedback"></span>
            </div>
            <div className = "form-group" style = {formGroupStyles}>
                <label htmlFor = "ingredients">Ingredients:</label>
                <textarea type = "text"  id = "ingredients" ref = {this.ingredientsRef} style = {largeInputStyles}  className = "form-control" onChange = {this.props.handleChangeIngredients} value = {this.props.ingredients} onInput = {this.props.handleChangeInput} required></textarea>
                <span className = "invalid-feedback"></span> 
            </div>
            <div className = "form-group" style = {formGroupStyles}>
                <label htmlFor = "description">Description:</label>
                <textarea type = "text" id = "description" ref = {this.descriptionRef} style = {largeInputStyles}  className = "form-control"  cols = "400" wrap = "hard" onChange = {this.props.handleChangeDescription} value = {this.props.description} onInput = {this.props.handleChangeInput} required></textarea>
                <span className = "invalid-feedback"></span>
            </div>
            <button type = "submit"  className = "btn btn-default"   style = {buttonStyles}>{this.props.button}</button>
            <Link to = "/recipes"><button type = "button" className = "btn btn-default" style = {buttonStyles}>Back to recipes</button></Link>
            {this.state.redirect ? <Redirect to = {`/recipes/${this.props.id}`} ></Redirect> : null}
        </form>
    );
    }
};

RecipeForm.propTypes = {
    header: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChangeImage: PropTypes.func.isRequired,
    handleChangeDescription: PropTypes.func.isRequired,
    handleChangeIngredients: PropTypes.func.isRequired,
    handleChangeTitle: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
};
 
export default RecipeForm;
 
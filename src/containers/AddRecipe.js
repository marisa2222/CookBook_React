import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux'; 
import {addRecipe} from '../actions/RecipesActions';
import RecipeForm from '../components/RecipeForm';
import uuidv4 from 'uuid/v4';
 

const recipeId = uuidv4();

class AddConnectedRecipe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            ingredients: '',
            description: '',
            image: '', 
            id: recipeId 
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);   
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
    }
     
    handleChangeTitle(event){
        this.setState({
            title: event.target.value 
        });
    }
    handleChangeDescription(event){
        this.setState({
            description: event.target.value
        });
    }
    handleChangeIngredients(event){
        this.setState({
            ingredients: event.target.value
        });
    }
    handleChangeImage(event) {
        let file = event.target.files[0];
        let reader = new FileReader(); 
        reader.readAsDataURL(file);   
        reader.onload = () => { 
            let result = reader.result;
            this.setState({
                image: result,
            }) ;    
        };
    }
    handleChangeInput(event){
        event.target.style.height = 'inherit';
        const computed = window.getComputedStyle(event.target);
        const height = parseInt(computed.getPropertyValue('border-top-width'), 10)
                         + event.target.scrollHeight
                         + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
        event.target.style.height = height + 'px';
    }
    
    handleSubmit(){
        this.props.addRecipe(this.state);
        this.setState({
           title: '',
           ingredients: '',
           description: '',
           image: ''
        });
    }
    render(){ 
        const { title, ingredients, description, image, id} = this.state;
        return(
            <RecipeForm 
                handleChangeImage = {this.handleChangeImage}
                handleChangeInput = {this.handleChangeInput}
                handleChangeDescription = {this.handleChangeDescription}
                handleChangeIngredients = {this.handleChangeIngredients}
                handleChangeTitle = {this.handleChangeTitle}
                handleFormSubmit = {this.handleSubmit}
                image = {image}
                title  = {title}
                id = {id}
                description = {description}
                ingredients =  {ingredients}
                header = "New Recipe"
                button = "Add"
            />
        );
    }
}


const mapDispatchToProps = dispatch => {
     
    return {
        addRecipe: recipe => dispatch(addRecipe(recipe))
    };
};

const AddRecipe =  connect(null, mapDispatchToProps)(AddConnectedRecipe);

export default withRouter(AddRecipe);

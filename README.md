# Cookbook Application
 
### Installation
 
 1 - Clone the project(https://github.com/LizaHavrylenko/react-redux-cookbook.git)
 ```sh
$ mkdir cookbook-app
$ cd cookbook-app
$ git clone https://github.com/LizaHavrylenko/react-redux-cookbook.git  
```
2 - Install dependencies via [npm](https://www.npmjs.com)
```sh
$ cd react-redux-cookbook
$ npm install
```
3 - Run the app
```sh
$ npm start
```
Go to [http://localhost:3000/](http://localhost:3000/#/) and see the app running  
You can also see it live on [Heroku](https://react-redux-cookbook.herokuapp.com)

---
### Usage

When you first open the application there will already be three default recipes put in the store. Data preservation in the app is managed with the help of Redux store that benefits from the persisted state communicated to it by the localStorage of the browser. When you open the app in your browser for the first time, three default recipes will be immediately saved in its Storage.  Feel free to add, edit, and delete further recipes as you like. 

---
### Architecture
##### General description
Application is written using [React.js](http://reactjs.net) framework, [Redux](https://github.com/reduxjs/redux) for global state management, and [Bootstrap](https://github.com/twbs/bootstrap) for layout. 

Technologies used:
  - [create-react-app](https://github.com/facebook/create-react-app) for building
  - [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) library for routing
  - [HTML5 File Reader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) for converting jpg images to DataURL
  - [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage) for persistent storage of data
  
  
  
##### Structure  

- actions  
   - RecipesActions  
   - RecipesConstants  
   - RecipesReducers  
- components  
   - InfoAboutDelete  
   - IntroToCookbook  
   - MainPage  
   - Recipe  
   - RecipeForm  
   - RecipeNotFound  
- containers  
   - AddRecipe  
   - EditRecipe  
   - ViewRecipe  
   - RecipesList  
   - Reciperouter  
- store  
   - configureStore  
   - localStorage  
   - defaultRecipes  
- App  
- Root  
- index.js  
- styles.js  



 
 

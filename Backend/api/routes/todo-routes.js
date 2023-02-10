import express from 'express';
import * as contactsController from './../controllers/todo-controller.js'

// Initialise the Router
const Router = express.Router();

// For Post
Router.route('/')
    .post(contactsController.post);
    
// For Get    
Router.route('/')
    .get(contactsController.get);

// For Get Todo with ID    
Router.route('/:id')
    .get(contactsController.index);    

// Update the Todo 
Router.route('/:id')
    .put(contactsController.update);    

// Delete by ID    
Router.route('/:id')
    .delete(contactsController.remove);     
export default Router;    
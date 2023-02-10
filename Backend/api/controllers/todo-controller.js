import * as todoService from './../services/todo-services.js';

const setResponse = (obj, response) =>{
    response.status(200);
    response.json(obj);
}

const errorResponse = (err, response) =>{
    response.status(500);
    response.json(err);
}


export const index = async (req,res) =>{
    try{
        // Store ID
        const id = req.params.id;
        // Pass ID to index function
        const availableTodo = await todoService.index(id);
        setResponse(availableTodo,res);
    }
    catch(error){
        errorResponse(error,res);
    }
}

export const get = async (req,res) =>{
    try{
        // Find method in service helps to get all todos
        const availableTodo = await todoService.find();
        setResponse(availableTodo,res);
    }
    catch(error){
        errorResponse(error,res);
    }
}

export const post = async (req,res) =>{
    try{
        // Store Body and pass to save method
        const todo = req.body;
        // Save method has the logic to post the todo to DB
        const savedTodo = await todoService.save(todo);
        setResponse(savedTodo,res);
    }
    catch(error){
        errorResponse(error,res);
    }
    
}

export const update = async (req,res) =>{
    try{
        const todo = req.body;
        const id = req.params.id;
        // Update based on id and todo body
        const updateTodo = await todoService.update(todo,id);
        setResponse(updateTodo,res);
    }
    catch(error){
        errorResponse(error,res);
    }
}

export const remove = async (req,res) =>{
    try{
        const id = req.params.id;
        // Delete a Todo
        const deleteTodo = await todoService.remove(id);
        setResponse(deleteTodo,res);
    }
    catch(error){
        errorResponse(error,res);
    }
}
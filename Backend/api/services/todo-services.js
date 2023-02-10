import Todo from './../models/Todo.js';

// Add a todo
export const save = async (todo) =>{
    const newTodo = new Todo(todo); 
    return newTodo.save();
}

// Find by ID
export const index = async (id) =>{
    const getTodo = Todo.findById(id);
    return getTodo;
}

// Search all
export const search = async (query) =>{
    const params = {...query};
    const todo = Todo.find(params).exec();
    return todo;
}

// Find Todo
export const find = async () =>{
    const todos = Todo.find().exec();
    return todos;
}

// Update Todo
export const update = async (todo,id) =>{
    const updateTodo = await Todo.findByIdAndUpdate(id, todo, { useFindAndModify: false });
    // const updateTodo = Todo.updateOne(); 
    console.log(updateTodo);
    return updateTodo;
}

// Remove Todo
export const remove = async (id) =>{
    const removeTodo = Todo.findByIdAndRemove(id);
    return removeTodo;
}
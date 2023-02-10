// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './Header/Header';
import TodoList from './Todo-List/TodoList';
import TodoForm from './TodoForm/TodoForm';

// using functional based components
function App() {
  // use hooks for state of todo list and error
  const [todos, setTodos] = useState([]);
  const [error,setError] = useState(null);

  // using useEffect for change in todos
  useEffect(() =>{
    const url = "http://localhost:8080/todo/";
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    // use fetch the url from the REST API using Http GET method
    fetch(url, requestOptions)
      .then(response =>{
        if(response.ok){
          return response.json()
        }
        throw response;
      })
      // Store the data by setting our state
      .then(data => setTodos(data))
      .catch(error => {
        console.error("Error fetching data",error);
        setError(error);
      })
  },[])

  // 
  
  if (error) return error; 
  // Function to update our todo list in child
  function addTodo(todos){
    setTodos(todos);
  }

  return (
    <>
      <Header></Header>
      <TodoList TodoList = {todos} AddTodo={addTodo}/>
      <TodoForm />
    </>
  );
}

export default App;

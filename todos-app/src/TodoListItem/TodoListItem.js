import React, { useState, useRef } from 'react';
import './TodoListItem.scss';

function TodoListItem(props) {
    // const todos = props;
    const ref = useRef(null);
    const [disp, setDisp]= useState(false);
    const [check, setCheck] = useState(props.todoItem.isComplete?"strike-through":"normal"); 
    const [newTodo,setNewTodo] = useState([]);
    const [error,setError] = useState(null);
    const [checkbox,setCheckBox] = useState(props.todoItem.isComplete);
    function handleClick(e){
        setDisp(!disp);
    }

    function handleCheck(e){
        // Set state of strike-through of each li
        ref.current.checked?setCheck("strike-through"):setCheck("normal");
        const id = props.id
        // Set the status of checkbox
        ref.current.checked?setCheckBox(true):setCheckBox(false);
        // Define our URL to fetch
        // Get the todo by id
        const url = `http://localhost:8080/todo/${id}`;
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        };
         fetch(url, requestOptions)
          .then(response =>{
            if(response.ok){
                return response.json();
            }
            throw response;
            }).then(data =>setNewTodo(data))
        .catch(error => {
            console.error("Error fetching data",error);
            setError(error);
          })

        //   Toggle the state of newState
           const newState = (!checkbox);
             
        //    Update the checkbox status on the database
          const requestOptions1 = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: newTodo.title,
            description: newTodo.description,
            dueDate:newTodo.dueDate,
            dueTime: newTodo.dueTime,
            createdDate: newTodo.createdDate,
            lastModifiedDate: newTodo.lastModifiedDate,
            isComplete:newState})
          };
          fetch(url, requestOptions1)
          .then(response =>{
            if(response.ok){
              console.log("SUCCESS");
              return null;
            }
            throw response;
          })
          .catch(error => {
            console.error("Error fetching data",error);
          }) 

        //   Render all the updated todos by getting all from database
          const url2 = "http://localhost:8080/todo/";
        const requestOptions3 = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        };
        // We use our function passed to update the parent todos
         fetch(url2, requestOptions3)
          .then(response =>{
            if(response.ok){
                return response.json();
            }
            throw response;
            }).then(data =>(props.AddTodo(data)))  
        .catch(error => {
            console.error("Error fetching data",error);
            setError(error);
          })


    }
    if (error) return error; 
    return(
        <div className="todoTasks">
            <input ref = {ref} checked = {checkbox} type="checkbox"  onChange={handleCheck}/>
            <li className={check} onClick={handleClick}> {props.todoItem.title}
            {disp?<>
                <div>Description: {props.todoItem.description}</div>
                <div>Due Date: {props.todoItem.dueDate} </div>
                <div>Due Time: {props.todoItem.dueTime}</div>
                <div>Created Date:{props.todoItem.createdDate}</div>
                <div>Last Modified Date: {props.todoItem.lastModifiedDate}</div>
                </>
                :null
            }
            </li>
        </div>
    )

    }
//   Export default
export default TodoListItem;
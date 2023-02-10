import './Todo-List.scss';
import TodoListItem  from '../TodoListItem/TodoListItem';

function TodoList(props) {
  const todos = props.TodoList;
  const addTodo = props.AddTodo;
  // Map every todo from array
  const todoItems = todos.map(c =><TodoListItem todoItem={c} key = {c._id} id = {c._id} AddTodo={addTodo}></TodoListItem>)
  // Check for the condition if length is initial
  return(
    (todoItems.length >=1)?
    (<ol className="Todo-Box">
      {todoItems}
    </ol>):
    <p>No Items to display</p>
  )

  }

  export default TodoList;
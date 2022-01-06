import  { useContext, useState } from 'react';
import TodoForm from './TodoInput';
import { ThemeContext } from "../contexts/ThemeContext"
import Todo from './Todo';

function TodoList() {
    const {theme} = useContext(ThemeContext)
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  
  return (
    <>
    {theme ? 
      <h1 style={{'color': 'white', 'margin' : '32px 0', 'fontSize': '24px'}}>What's the Plan for Today?</h1> :
      <h1 style={{'color': 'black', 'margin' : '32px 0', 'fontSize': '24px'}}>What's the Plan for Today?</h1> }
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
import React, {useReducer} from 'react';
import TodoForm from './TodoForm';
import todoReducer from './reducer/Todo';
import './App.css';

function App() {
  let [todos, dispatch] = useReducer(todoReducer, ['initial todo by redux hook', 'initial todo2']);
      const addTodo = (e) => {
        e.preventDefault();
        let newTodo = e.target.newtodo.value;
        dispatch({type: 'ADD_TODO', newTodo})
      }
  return (
    <div className="App">
      <ul>
          {todos.map((val, index)=>{
            return <li key = {index}>{val}</li>
          })}
      </ul>
      <TodoForm />
    </div>
  );
}

export default App;

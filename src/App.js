import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from './TodoCounter';
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

//import './App.css';

const defaultToDos = [
  {text: 'Ir al baño', completed: false},
  {text: 'Leer Narnia', completed: false},
  {text: 'Tarea busco', completed: true},
  {text: 'Limpiar el bañito', completed: true}
]

function App() {
  const [todos, setTodos] = React.useState(defaultToDos)
  const [searchValue, setSearchValue] =React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }
  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searSchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map((todo, index) =>  
          <TodoItem 
            key={index} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} 
      </TodoList>
      <CreateTodoButton />
     
    </React.Fragment>
  );
}

export default App;

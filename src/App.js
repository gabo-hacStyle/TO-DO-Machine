import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from './TodoCounter';
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

//import './App.css';

const toDos = [
  {text: 'Ir al baño', completed: false},
  {text: 'Leer Narnia', completed: false},
  {text: 'Tarea usco', completed: false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {toDos.map((toDo, index) =>  
          <TodoItem key={index} text={toDo.text}/>
        )} 
      </TodoList>
      <CreateTodoButton />
     
    </React.Fragment>
  );
}

export default App;

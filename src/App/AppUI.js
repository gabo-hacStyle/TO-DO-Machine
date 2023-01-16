import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from '../TodoCounter/index';
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { EmptyTodos } from "../EmptyTodos";
import {TodosError} from "../TodosError/index.js"
import {TodosLoading} from "../TodosLoading/index.js"

function AppUi () {
  const {error, 
      loading, 
      searchedTodos, 
      completeTodo, 
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext) 

    return (
        <React.Fragment>
          <TodoCounter />
          <TodoSearch />
           
            <TodoList>
            {error && <TodosError error={error} />}
            {loading && <TodosLoading />}
            {(!loading && !searchedTodos.length) && <EmptyTodos />}
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

          {openModal && (
            <Modal>
             <TodoForm />
            </Modal>
          )}

          <CreateTodoButton 
            setOpenModal={setOpenModal}
          />
         
        </React.Fragment>
      );
}

export {AppUi}
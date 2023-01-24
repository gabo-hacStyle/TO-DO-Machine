import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { EmptyTodos } from "../EmptyTodos";
import {TodosError} from "../TodosError/index.js"
import {TodosLoading} from "../TodosLoading/index.js"
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { useTodos } from "./useTodos";
import { EmptyResults } from "../EmptyResults";
import { ChangeAlert } from "../ChangeAlert";

function App() {
  const {error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    sincronizeTodos
  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

        <TodoSearch 
          loading={loading}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        
      </TodoHeader>

      <ChangeAlert
        sincronize={sincronizeTodos}
      />

      <TodoList
        totalTodos={totalTodos}
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        searchedText={searchValue}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        //For no Searched results
        onEmptyResults={
          (searchedText) => (
          <EmptyResults
            searchedText={searchedText}
          />)}
        
         render={(todo, index) => (
          <TodoItem 
            key={index} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
          )}
        >  
          {/*(todo, index) => (
          <TodoItem 
            key={index} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />)*/}
      </TodoList>

      {openModal && (
        <Modal>
         <TodoForm 
         addTodo={addTodo}
         setOpenModal={setOpenModal}
         />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      
    </React.Fragment>
  );
}

export default App;

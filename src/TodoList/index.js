import React from "react";
import './TodoList.css';

function TodoList (props) {
    //If is a render prop or a render function 
    const renderFunc = props.render || props.children ;
    return(
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptyResults(props.searchedText)}


            {(!props.error && !props.loading) && props.searchedTodos.map(renderFunc)}
            <ul>
            {props.children}
            </ul>
        </section>
        
    )
}
export{TodoList}
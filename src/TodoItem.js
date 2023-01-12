import React, { useLayoutEffect } from "react";
import './TodoItem.css';

function TodoItem (props) {
    const onComplete = () => {
        alert(`Todo completed: ${props.text}`)
    }
    const onDelete = () => {
        alert(`Todo deleted: ${props.text}`)
    }
    return(    
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >
                C
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                X
            </span>
        </li>
    )
}

export {TodoItem}
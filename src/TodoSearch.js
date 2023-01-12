import React from "react";
import  './TodoSearch.css';

function TodoSearch () {
    const onSearchValueChange = (pedo) =>{
        console.log(pedo.target.value)
    }
    return (
        <input 
            className="TodoSearch"
            placeholder="Libros" 
            onChange={onSearchValueChange}
        />
    )
}

export {TodoSearch};
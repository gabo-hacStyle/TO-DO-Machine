import React from "react";

function TodoHeader ({children, loading}){

    return (
    //So that all header elements will receive the loading prop 
    //Using cloneElemnt, and because there is more than one element
    //we used  React.Children.toArray
        <header>
            {React.Children.toArray(children)
            .map(child =>
            React.cloneElement(child, {loading})
            )}
        </header>
    )
}
export {TodoHeader};
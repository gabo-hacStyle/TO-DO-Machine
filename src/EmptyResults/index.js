import React from "react"; 

function EmptyResults ({searchedText}) {
    return(
        <p>
            No hay resultados para tu busqueda de: "{searchedText}"
        </p>
    )
}
export {EmptyResults}
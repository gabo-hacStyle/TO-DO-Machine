import React from "react";

function useStorageListener(sincronize){
    const [storageChange, setStorageChange] = React.useState(false);
        
    window.addEventListener('storage', 
        (change) => {
            //If the change was in the item 'TODOS_V2'
            if(change.key === 'TODOS_V2') {
                console.log('Cambios')
                setStorageChange(true)   
            }
        }

        );
        const toggleShow = () => {
            sincronize()
            setStorageChange(false);
        }
        return {
            show: storageChange,
            toggleShow
        }
    }

export {useStorageListener}
import React from "react";

function useLocalStorage (itemName, initialValue) {
  const [state, dispatch] =React.useReducer(reducer, initialState(initialValue))
  const {
    sincronizedItem,
    loading,
    item,
    error,
  } = state;
    React.useEffect(() =>{
      setTimeout(() =>{
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
        
          if(!localStorageItem){ //If the clients' localStorage is initially empty
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
    
          dispatch({type: actionTypes.success, payload: parsedItem})
  
        } catch(error){
          dispatch({type: actionTypes.error, payload: error})
        }
        
      }, 1500)
    //eslint-disable-next-line
    }, [sincronizedItem])
   
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        dispatch({type: actionTypes.save, payload: newItem});
      } catch (error) {
        dispatch({type: actionTypes.error, payload: error})
      }
      
    } 

    const sync = () => {
     dispatch({type: actionTypes.sincronize})
    }

    return {
      item,
      saveItem,
      loading,
      error,
      sync
    }
}
  const initialState = (initialValue) => ({
    sincronizedItem: true,
    error: false,
    item: initialValue,
    loading: true
  })
  const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    sincronize: 'SINCRONIZE'
  }
  const reducer = (state, action) => {
    switch(action.type){
      case actionTypes.error: 
        return {
          ...state,
          error: true
        }
      case actionTypes.success:
        return {
          ...state,
          error: false,
          loading: false,
          sincronizedItem: true,
          item: action.payload
        }
      case actionTypes.save:
        return{
          ...state,
          item: action.payload
        }
      case actionTypes.sincronize:
        return {
          ...state,
          sincronizedItem: false,
          loading: true
        }
      default:
        return{
          ...state
        }
  }
}
export {useLocalStorage}
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  list: [
    {
      "id":1,
    "type":'credit',
    "amount":100
    },
    {
      "id":2,
      "type":'credit',
      "amount":50
      },
      {
        "id":3,
        "type":'debit',
        "amount":10
        }
  ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteList(id) {
    dispatch({
      type: 'DELETE_LIST',
      payload: id
    });
  }

  function addList(list) {
    dispatch({
      type: 'ADD_LIST',
      payload: list
    });
  }

  return (<GlobalContext.Provider value={{
    list: state.list,
    deleteList,
    addList
  }}>
    {children}
  </GlobalContext.Provider>);
}
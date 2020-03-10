import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State

const initialState = {
  transactions: [
    { id: 1, text: "Fruits", amount: -60 },
    { id: 2, text: "Milk", amount: -40 },
    { id: 3, text: "Vegetables", amount: -50 },
    { id: 4, text: "Salary", amount: 250 },
    { id: 5, text: "Travel", amount: -50 }
  ]
};

// Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  function deleteAllTransaction() {
    dispatch({
      type: "DELETE_ALL_TRANSACTION"
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        deleteAllTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

import React, { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ reducer, initialState, children }) => (
  <CartContext.Provider value={useReducer(reducer, initialState)}>
    {/* console.log(reducer); console.log(initialState); */}
    {children}
  </CartContext.Provider>
);
export const useStateValue = () => useContext(CartContext);

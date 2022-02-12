import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_TOTAL } from './actions';
import { reducer } from './reducer';

const GlobalContext = createContext();

const initialState = {
  cart: [],
  cartTotalItems: 0,
  cartTotalPrice: 0,
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (product, amount) => {
    dispatch({ type: ADD_TO_CART, payload: { product, amount } });
  };
  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };

  useEffect(() => {
    dispatch({ type: UPDATE_CART_TOTAL });
  }, [state.cart]);
  return (
    <GlobalContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

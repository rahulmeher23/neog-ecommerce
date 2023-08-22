import React, { createContext, useEffect, useReducer, useState } from "react";
import cartReducer from "../reducer/cartReducer";

export const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: 0,
  min_cart_amount: 10000,
  shipping_charges: 150,
};

export function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

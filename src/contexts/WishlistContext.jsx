import React, { createContext, useReducer, useState } from "react";
import wishlistReducer from "../reducer/wishlistReducer";

export const WishlistContext = createContext();

const initialState = {
  wishlist: [],
};

export function WishlistProvider({ children }) {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}

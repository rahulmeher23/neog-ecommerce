import React, { createContext, useReducer, useState } from "react";
import wishlistReducer from "../reducer/wishlistReducer";

export const WishlistContext = createContext();

const initialState = {
  wishlist: [],
};

export function WishlistProvider({ children }) {
  // const [wishlist, setWishlist] = useState([]);
  // console.log({ wishlist });

  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );
  // console.log("WISHLIST STATE", wishlistState);

  // const handleWishlistUpdate = (item) => {
  //   setWishlist((wishlist) => [...wishlist, item]);
  // };

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}

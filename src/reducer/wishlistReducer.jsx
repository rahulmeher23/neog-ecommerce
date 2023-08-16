import React from "react";

const wishlistReducer = (state, action) => {
  let product = action.payload;

  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, product],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((prod) => prod._id !== product._id),
      };

    default:
      return state;
  }
};

export default wishlistReducer;

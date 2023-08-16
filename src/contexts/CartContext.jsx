import React, { createContext, useEffect, useReducer, useState } from "react";
import cartReducer from "../reducer/cartReducer";

export const CartContext = createContext();

// function getLocalCartData() {
//   let cartData = localStorage.getItem("lamaCart");
//   if (cartData.length === 0) {
//     return [];
//   } else {
//     return JSON.parse(cartData);
//   }
// }

// function getCartTotal() {
//   let cartTotal = 0;
//   let cartData = localStorage.getItem("lamaCart");
//   cartData.map((item) => {
//     let dis = parseFloat(item.discount.replaceAll(",", ""));
//     cartTotal = cartTotal + dis * item.qty;
//     console.log(cartTotal);
//   });
// }

const initialState = {
  cart: [],
  // cart: getLocalCartData(),
  total_item: "",
  total_amount: 0,
  min_cart_amount: 10000,
  shipping_charges: 150,
};

export function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  // console.log("STATE", state);
  // console.log("AMOUNT", state.total_amount);

  // useEffect(() => {
  //   localStorage.setItem("lamaCart", JSON.stringify(cartState.cart));
  // }, cartState.cart);

  // useEffect(() => {
  //   localStorage.setItem(
  //     "lamaCartTotal",
  //     JSON.stringify(cartState.total_amount)
  //   );
  // }, [cartState.total_amount]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

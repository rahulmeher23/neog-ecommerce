import React from "react";

const cartReducer = (state, action) => {
  let product = action.payload;
  // let amt = action.payload.dis;
  let dis = parseFloat(product.discount.replaceAll(",", ""));
  // console.log(dis, "dis");
  // console.log("total_amount", state.total_amount);
  // console.log("state", state);
  // console.log(product, "payload: dis");
  // console.log(product.qty, "qty");
  // console.log(product.discount, "discount");

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        total_amount: state.total_amount + dis,
        cart: [...state.cart, product],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        total_amount: state.total_amount - dis,
        cart: state.cart.filter((prod) => prod._id !== product._id),
      };

    case "CART_TOTAL_ADD":
      let updatedCart = state.cart.map((item) => {
        let { qty } = item;
        if (item._id === product._id) {
          return { ...item, qty: qty + 1 };
        }
        return item;
      });
      // console.log("updatedCart", updatedCart);

      let amt2 = state.total_amount + dis;
      return {
        ...state,
        total_amount: amt2,
        cart: updatedCart,
      };

    case "CART_TOTAL_DECREASE":
      let quantity;
      let updatedCart2 = state.cart.map((item) => {
        let { qty } = item;
        quantity = qty;
        // console.log("quantity", quantity);
        if (item._id === product._id) {
          if (qty === 1) {
            return { ...item };
          } else {
            return { ...item, qty: qty - 1 };
          }
        }

        return item;
      });

      let amt;

      if (product.qty > 1) {
        amt = state.total_amount - dis;
      } else {
        amt = state.total_amount;
      }

      return {
        ...state,
        total_amount: amt,
        cart: updatedCart2,
      };

    case "DELETE_FROM_CART":
      let totalQty;
      let findQty = state.cart.map((item) => {
        if (item._id === product._id) {
          let { qty } = item;
          totalQty = qty;
        }
      });

      return {
        ...state,
        total_amount: state.total_amount - dis * totalQty,
        cart: state.cart.filter((prod) => prod._id !== product._id),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        total_item: "",
        total_amount: 0,
        shipping_charges: 75,
      };

    default:
      return state;
  }
};

export default cartReducer;

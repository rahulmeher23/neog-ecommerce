import React from "react";
import { productsDB } from "../backend/productsDB";

const filterReducer = (state, action) => {
  let filterValue = action.payload;
  console.log("filterValue", filterValue);

  // console.log("filteredState", state);

  switch (action.type) {
    case "CATEGORY":
      let filteredCategory = [];
      if (filterValue === "All") {
        filteredCategory = productsDB;
      } else {
        filteredCategory = productsDB.filter(
          (item) => item.category === filterValue
        );
      }

      // console.log(filteredCategory);

      return {
        filteredProducts: filteredCategory,
      };

    case "SEARCH":
      let arr = productsDB.filter((item) =>
        item.name.toLowerCase().includes(filterValue.toLowerCase())
      );
      return {
        filteredProducts: arr,
      };

    case "RATINGS":
      let filteredRating = [];
      if (filterValue === "All") {
        filteredRating = productsDB;
      } else {
        filterValue = parseFloat(filterValue);
        console.log("Filter Value if parse", filterValue);

        filteredRating = productsDB.filter(
          (item) => item.rating >= filterValue
        );
      }

      // console.log(filteredRating);

      return {
        filteredProducts: filteredRating,
      };

    case "PRICE":
      let filteredPrice = [];
      function getFloat(price) {
        return parseFloat(price.replaceAll(",", ""));
      }

      let filteredValue = parseFloat(filterValue);

      if (filterValue === "" || filterValue.length === 0) {
        filteredPrice = productsDB;
      } else {
        filteredPrice = productsDB.filter((item) => {
          const disp = getFloat(item.discount);
          if (disp <= filteredValue) {
            return item;
          }
          // console.log(disp, filteredValue);
        });
      }

      console.log(filteredPrice);

      return {
        filteredProducts: filteredPrice,
      };

    default:
      return state;
  }
};

export default filterReducer;

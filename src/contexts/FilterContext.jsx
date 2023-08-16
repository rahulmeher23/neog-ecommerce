import React, { createContext, useReducer, useState } from "react";
import { productsDB } from "../backend/productsDB";
import filterReducer from "../reducer/filterReducer";

export const FilterContext = createContext();

const initialState = {
  filteredProducts: productsDB,
};

export function FilterProvider({ children }) {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
}

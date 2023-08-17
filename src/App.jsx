import { useState, useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDescription from "./pages/Single Product Page/ProductDescription";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { AuthContext } from "./contexts/AuthContext";
import { useLocation } from "react-router-dom";
import RequiresAuth from "./components/RequiresAuth/RequiresAuth";
import Checkout from "./pages/Checkout/Checkout";
import MobileFilters from "./pages/Products/MobileFilters";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productID" element={<ProductDescription />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>

      {/* <Home /> */}
      {/* <ProductDescription /> */}
    </div>
  );
}

export default App;

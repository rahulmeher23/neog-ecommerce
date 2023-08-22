import React, { useContext, useState } from "react";
import "./NavbarModule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { text } from "@fortawesome/fontawesome-svg-core";
import { FilterContext } from "../../contexts/FilterContext";
import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { filterState, filterDispatch } = useContext(FilterContext);
  const { cartState, cartDispatch } = useContext(CartContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [menuToggle, setMenuToggle] = useState(true);
  // console.log(cartState, "CartState");

  const location = useLocation();
  const navigate = useNavigate();

  function handleLogin() {
    setIsLoggedIn(!isLoggedIn);
    console.log("location", location);
    // navigate(location?.state.from?.pathname);
  }

  function handleToggle() {
    console.log("menu", menuToggle, "!menu", !menuToggle);
    const menu = document.querySelector(".menu-container");
    if (menuToggle) {
      menu.className = menu.className.replace("menu-hide", "menu-display");
    } else {
      menu.className = menu.className.replace("menu-display", "menu-hide");
    }

    setMenuToggle(!menuToggle);
  }

  function handleChange(e) {
    let value = e.target.value;
    console.log("e.target.value: ", e.target.value, "value: ", value);
    filterDispatch({ type: "SEARCH", payload: value });
  }

  // function handleClick() {
  //   const menu = document.querySelector(".menu-hide");
  //   menu.innerHTML = `style={{display: "contents"}}`;
  // }

  return (
    <>
      <nav>
        <div id="left">
          <Link className="navLink iconLAMA" to="/">
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <h1 className="icon-name">LAMA</h1>
          </Link>
        </div>

        <div id="center" className="nav-hide">
          <div className="searchContainer nav-hide">
            <input
              className="search-input"
              type="text"
              label="text"
              placeholder="Search Here..."
              onChange={handleChange}
            />
            <Link to="/products" className="search-text-container">
              <p className="searchText">SEARCH</p>
            </Link>
          </div>
        </div>

        <div id="right" className="icons nav-hide">
          <ul className="navIcons">
            <li>
              <NavLink to="/products" className="navLink iconGlobe">
                <FontAwesomeIcon
                  onClick={() => {
                    filterDispatch({ type: "CATEGORY", payload: "All" });
                  }}
                  icon={faGlobe}
                />
              </NavLink>
            </li>

            <li className="nav-hide">
              <NavLink className="navLink iconWishlist" to="/wishlist">
                <FontAwesomeIcon icon={faHeart} />
              </NavLink>
            </li>

            <li className="nav-hide">
              <NavLink className="navLink iconCart" to="/cart">
                {cartState.cart.length === 0 ? (
                  <FontAwesomeIcon
                    className="cart-icon"
                    icon={faCartShopping}
                  />
                ) : (
                  <div>
                    <FontAwesomeIcon
                      className="cart-icon"
                      icon={faCartShopping}
                    />
                    <span class="cart-total">{cartState.cart.length}</span>
                  </div>
                )}
              </NavLink>
            </li>

            <li className="login-btn nav-hide">
              <NavLink className="navLink iconCart" to="/login">
                {isLoggedIn ? <FontAwesomeIcon icon={faUser} /> : "LOGIN"}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="icons hamburger-menu main-hide">
          {menuToggle ? (
            <FontAwesomeIcon
              onClick={() => handleToggle()}
              className="barIcon"
              icon={faBars}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => handleToggle()}
              className="barIcon"
              icon={faXmark}
            />
          )}
        </div>
      </nav>

      <div className="menu-container menu-hide">
        <div className="mobile-nav-page ">
          <NavLink
            className="mobile-menu"
            to="/products"
            onClick={() => {
              filterDispatch({ type: "CATEGORY", payload: "All" });
            }}
          >
            Products
          </NavLink>
          <NavLink className="mobile-menu" to="/wishlist">
            Wishlist
          </NavLink>
          <NavLink className="mobile-menu iconCart" to="/cart">
            Cart
            {cartState.cart.length == 0 ? (
              ""
            ) : (
              <span class="cart-total-mobile">{cartState.cart.length}</span>
            )}
          </NavLink>
          <NavLink className="mobile-menu" to="/login">
            Login
          </NavLink>
          <div className="searchContainer">
            <input
              className="search-input"
              type="text"
              label="text"
              placeholder="Search Here..."
              onChange={handleChange}
            />
            <Link className="link" to="/products">
              <p className="searchText">SEARCH</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./CartModule.css";
import CartProductCard from "../../components/CartProductCard/CartProductCard";
import { Link } from "react-router-dom";
import { productsDB } from "../../backend/productsDB";
import { FilterContext } from "../../contexts/FilterContext";

const Cart = () => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const { filterState, filterDispatch } = useContext(FilterContext);

  console.log(cartState, "cart");

  let product = {};
  productsDB.map((item) => {
    if (item.name === "Vivo V27 Pro (Magic Blue)") {
      product = item;
    }
  });

  useEffect(() => {
    document.title = `LAMA | Cart`;
  }, []);

  return (
    <>
      <div className="announcement-bar">
        <span>
          Free Shipping on all orders above Rs. {cartState.min_cart_amount}.
          Order Now!
        </span>
      </div>
      <Navbar />

      {cartState.cart.length == 0 ? (
        <div className="cartEmpty">
          <h1 className="empty-cart-title">Cart is Empty!</h1>
          <Link to="/products">
            <button
              onClick={() => {
                filterDispatch({ type: "CATEGORY", payload: "All" });
              }}
              className="shopNowBtn"
            >
              SHOP NOW!
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="heading-name-container">
            <h3 className="heading-name">Shopping Cart</h3>
            <p className="item-count">
              You have {cartState.cart.length} items in your cart
            </p>
          </div>
          <div className="container">
            {/* 1fr */}
            <div>
              <div className="heading-container ">
                <div className="cart-heading cart-hide">
                  <p>Item</p>
                  <p className="cart-hide">Price</p>
                  <p>Quantity</p>
                  <p className="cart-hide">Subtotal</p>
                  <p>Remove</p>
                </div>
                <hr className="cart-hide" />

                <div className="cartContainer mobile-hide">
                  <div className="cartProducts">
                    {cartState.cart.map((prod) => {
                      return (
                        <>
                          <CartProductCard {...prod} key={prod._id} />
                          {/* <hr />; */}
                        </>
                      );
                    })}
                  </div>
                </div>

                <div className="mobile-display">
                  <div className="cartProducts">
                    {cartState.cart.map((prod) => {
                      return (
                        <>
                          <CartProductCard {...prod} key={prod._id} />
                          {/* <hr />; */}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="button">
                <div
                  className="clear-cart-btn"
                  onClick={() => {
                    cartDispatch({ type: "CLEAR_CART", payload: product });
                  }}
                >
                  CLEAR CART
                </div>
              </div>
            </div>

            {/* 0.4Fr */}

            <div className="price-card-wrapper">
              <div className="price-container">
                <div className="priceCard">
                  <h2>Price Card</h2>
                </div>

                <div className="subtotal-card">
                  <p>Subtotal: </p>
                  <p>
                    <span className="rupee">&#x20B9;</span>
                    {cartState.total_amount}
                  </p>
                </div>

                <div className="shipping-fee">
                  <p>Shipping Fee: </p>
                  <p>
                    {cartState.total_amount >= cartState.min_cart_amount ? (
                      <span className="free">FREE</span>
                    ) : (
                      <div>
                        <span className="rupee">&#x20B9;</span>
                        {cartState.shipping_charges}
                      </div>
                    )}
                  </p>
                </div>

                <hr />
                <div className="subtotal-card">
                  <p>Total: </p>
                  <p>
                    <span className="rupee">&#x20B9;</span>
                    {cartState.total_amount > 5000
                      ? cartState.total_amount
                      : cartState.total_amount + cartState.shipping_charges}
                  </p>
                </div>

                <div className="checkout">
                  <Link to="/checkout">
                    <button className="checkout-btn">CHECKOUT</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* </Scrollbar>   */}
    </>
  );
};

export default Cart;

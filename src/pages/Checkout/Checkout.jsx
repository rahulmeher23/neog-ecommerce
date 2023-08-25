import React, { useEffect, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Billing from "../../components/Billing/Billing";
import { CartContext } from "../../contexts/CartContext";
import { address } from "../../backend/addressDB.js";
import OrderDetails from "../../components/OrderDetailsCard/OrderDetails";
import "./CheckoutModule.css";
import Navbar from "../../components/Navbar/Navbar";
import ShippingInfo from "../Shipping/ShippingInfo";

const Checkout = () => {
  const { cartState, cartDispatch } = useContext(CartContext);

  console.log(cartState, "checkout");

  useEffect(() => {
    document.title = `LAMA | Checkout`;
  }, []);

  return (
    <>
      <Navbar />

      {/* <div className=""> */}
      <div className="checkout-wrapper mobile-checkout-page main-hide">
        <div className="checkout-container">
          <div className="order-container">
            <div className="order-details-title">
              <h2>Order Details</h2>
            </div>
            <div className="order-card">
              <div className="order-details-container">
                <div className="card-columns">
                  <div className="product-name">Name</div>
                  <div className="product-qty">Qty</div>
                  <div className="product-amount">Amount</div>
                </div>
                {cartState.cart.map((item) => {
                  return <OrderDetails {...item} />;
                })}

                <div className="order-details">
                  <div className="product-name">Shipping Fee: </div>
                  <div className="product-qty">-</div>
                  <div className="product-amount">
                    {cartState.total_amount > cartState.min_cart_amount ? (
                      <span className="free-shipping free">FREE</span>
                    ) : (
                      <div>
                        <span className="">&#x20B9;</span>
                        {cartState.shipping_charges}
                      </div>
                    )}
                  </div>
                </div>

                <hr />

                <div className="card-columns">
                  <div className="product-name order-total-title">Total</div>
                  <div className="product-qty"></div>
                  <div className="product-amount order-total-amount">
                    <span className="rupee-icon">&#x20B9;</span>
                    {cartState.total_amount > cartState.min_cart_amount
                      ? cartState.total_amount
                      : cartState.total_amount + cartState.shipping_charges}
                  </div>
                </div>
              </div>

              <div className="order-now">
                <button className="order-now-btn">Order</button>
              </div>
            </div>
          </div>

          <div className="billing-container">
            <div className="billing-details">
              <h2 className="billing-title">Billing Details</h2>
              {address.map((add) => {
                return <Billing {...add} />;
              })}
            </div>

            <div className="add-address">
              <FontAwesomeIcon className="plus-icon" icon={faPlus} />
              Add
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="checkout-wrapper mobile-hide">
        <div className="checkout-container">
          <div className="billing-container">
            <div className="billing-details">
              <h2 className="billing-title">Billing Details</h2>
              {address.map((add) => {
                return <Billing {...add} />;
              })}
            </div>

            <div className="add-address">
              <FontAwesomeIcon className="plus-icon" icon={faPlus} />
              Add
            </div>
          </div>

          <div className="order-container">
            <div className="order-details-title">
              <h2>Order Details</h2>
            </div>
            <div className="order-card">
              <div className="order-details-container">
                <div className="card-columns">
                  <div className="product-name">Name</div>
                  <div className="product-qty">Qty</div>
                  <div className="product-amount">Amount</div>
                </div>
                {cartState.cart.map((item) => {
                  return <OrderDetails {...item} />;
                })}

                <div className="order-details">
                  <div className="product-name">Shipping Fee: </div>
                  <div className="product-qty">-</div>
                  <div className="product-amount">
                    {cartState.total_amount > cartState.min_cart_amount ? (
                      <span className="free-shipping free">FREE</span>
                    ) : (
                      <div>
                        <span className="">&#x20B9;</span>
                        {cartState.shipping_charges}
                      </div>
                    )}
                  </div>
                </div>

                <hr />

                <div className="card-columns">
                  <div className="product-name order-total-title">Total</div>
                  <div className="product-qty"></div>
                  <div className="product-amount order-total-amount">
                    <span className="rupee-icon">&#x20B9;</span>
                    {cartState.total_amount > cartState.min_cart_amount
                      ? cartState.total_amount
                      : cartState.total_amount + cartState.shipping_charges}
                  </div>
                </div>
              </div>

              <div className="order-now">
                <button className="order-now-btn">Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

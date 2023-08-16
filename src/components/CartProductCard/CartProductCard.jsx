import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import "./CartProductCardModule.css";
import { CartContext } from "../../contexts/CartContext";

const CartProductCard = (item) => {
  const { _id, name, discount, img, qty } = item;
  // console.log("discount", discount);
  let dis = parseFloat(discount.replaceAll(",", ""));

  const amt = dis * qty;
  const { cartState, cartDispatch } = useContext(CartContext);

  return (
    <>
      <div className="cardContainer mobile-hide" key={_id}>
        <div className="imageContainer">
          <img src={img} alt="{name}" className="cartImg" />
        </div>

        <div className="cartProductPrice cart-hide">
          <p>
            <span className="rupee-symbol">&#x20B9;</span>
            {discount}
          </p>
        </div>

        <div className="quantity">
          <FontAwesomeIcon
            onClick={() => {
              cartDispatch({ type: "CART_TOTAL_DECREASE", payload: item });
            }}
            icon={faMinus}
            className="minusIcon"
          />
          <input type="text" placeholder={qty} className="qty-input" />
          <FontAwesomeIcon
            onClick={() => {
              cartDispatch({ type: "CART_TOTAL_ADD", payload: item });
            }}
            icon={faPlus}
            className="addIcon"
          />
        </div>

        <div className="subtotal">
          <span className="rupee-symbol">&#x20B9;</span>
          {amt}
        </div>

        <div className="deleteIcon">
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => {
              cartDispatch({ type: "DELETE_FROM_CART", payload: item });
            }}
          />
        </div>
      </div>

      <div className="mobile-card-container mobile-display">
        <div className="cart-mobile-card ">
          <div className="imageContainer">
            <img src={img} alt="{name}" className="cartImg" />
          </div>

          <div className="product-info">
            <div>
              <h4 className="product-name">{name}</h4>
            </div>

            <div className="qty-total-container">
              <div className="quantity-container">
                <FontAwesomeIcon
                  onClick={() => {
                    cartDispatch({
                      type: "CART_TOTAL_DECREASE",
                      payload: item,
                    });
                  }}
                  icon={faMinus}
                  className="minusIcon"
                />

                <div className="qty-input">{qty}</div>
                <FontAwesomeIcon
                  onClick={() => {
                    cartDispatch({ type: "CART_TOTAL_ADD", payload: item });
                  }}
                  icon={faPlus}
                  className="addIcon"
                />
              </div>

              <div className="deleteIcon">
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => {
                    cartDispatch({ type: "DELETE_FROM_CART", payload: item });
                  }}
                />
              </div>
            </div>

            <div className="subtotal">
              <span className="rupee-symbol">&#x20B9;</span>
              {amt}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProductCard;

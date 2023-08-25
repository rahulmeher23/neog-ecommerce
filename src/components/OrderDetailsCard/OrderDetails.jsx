import React from "react";

import "./OrderDetailsModule.css";

const OrderDetails = (product) => {
  let { name, qty, discount } = product;
  discount = parseFloat(discount.replaceAll(",", ""));

  return (
    <div>
      <div className="order-details">
        <div className="product-name">{name}</div>
        <div className="product-qty">{qty}</div>
        <div className="product-amount">
          <span className="">&#x20B9;</span>
          {qty * discount}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

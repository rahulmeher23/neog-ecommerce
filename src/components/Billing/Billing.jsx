import React from "react";

import "./BillingModule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { account } from "../../backend/accountDetails";

const Billing = (address) => {
  //   console.log(address, "add");
  const { add, landmark, city, district, state, pincode } = address;
  const { name, mobile, email } = account;

  return (
    <div className="billing-card-wrapper">
      <div className="billing-card">
        <div className="selected">
          <FontAwesomeIcon className="check-icon" icon={faCheck} />
          Selected
        </div>

        <div className="name">{name}</div>
        <br />
        <div className="address">
          {`${add}, ${city}, ${district}, ${state}`}
          <br />
          {`Landmark: ${landmark}`}
          <br />
          {` Pincode: ${pincode}`}
        </div>
        <br />
        <div className="contact-info">
          <div className="mobile-no">Mobile: {mobile}</div>
          <div className="email-id">Email: {email}</div>
        </div>
      </div>
    </div>
  );
};

export default Billing;

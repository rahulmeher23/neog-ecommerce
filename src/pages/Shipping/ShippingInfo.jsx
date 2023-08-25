import React from "react";
import "./ShippingModule.css";

const ShippingInfo = () => {
  return (
    <div className="shipping-form">
      <form action="" className=".form">
        {/* <div className="form-address"> */}
        <label className="form-label" htmlFor="address-input">
          Address
        </label>
        <input
          type="text"
          maxLength={500}
          placeholder="Address"
          className="form-input address-input"
        />
        {/* </div> */}

        <div className="city-dist">
          <div className="city-container">
            <label className="form-label" htmlFor="city">
              City
            </label>
            <input
              type="text"
              maxLength={25}
              placeholder="City"
              className="form-input city"
            />
          </div>

          <div className="dist-container">
            <label className="form-label" htmlFor="district">
              District
            </label>
            <input
              type="text"
              maxLength={25}
              placeholder="District"
              className="form-input district"
            />
          </div>
        </div>

        <label className="form-label" htmlFor="state">
          State
        </label>
        <input
          type="text"
          maxLength={25}
          placeholder="State"
          className="form-input state"
        />

        <label className="form-label" htmlFor="landmark">
          Landmark
        </label>
        <input
          type="text"
          maxLength={100}
          placeholder="Landmark"
          className="form-input landmark"
        />

        <label className="form-label" htmlFor="pincode">
          Pincode
        </label>
        <input
          type="text"
          maxLength={6}
          placeholder="Pincode"
          className="form-input pincode"
        />

        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ShippingInfo;

import React, { useEffect } from "react";
import MobileFilters from "../Products/MobileFilters";

const Checkout = () => {
  useEffect(() => {
    document.title = `LAMA | Checkout`;
  }, []);

  return (
    <div>
      <h1>This is Checkout Page</h1>
    </div>
  );
};

export default Checkout;

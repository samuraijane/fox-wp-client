import React from "react";

const Paypal = ({ isPaypal }) => {
  if (isPaypal) {
    return <div id="paypal-button-container">{window.paypal.Buttons()}</div>;
  }
  return <p>...not yet...</p>;
};

export default Paypal;

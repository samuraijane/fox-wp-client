import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bool, shape } from "prop-types";

const Payment = ({ isPaypal, name }) => {
  useEffect(() => {
    if (window.paypal && isPaypal) {
      window.paypal
        .Buttons({
          createOrder: function(data, actions) {
            // This function sets up the details of the transaction, including the amount and line item details.
            return actions.order.create({
              payer: {
                name: {
                  given_name: name.given_name,
                  surname: name.surname
                }
              },
              purchase_units: [
                {
                  amount: {
                    value: "0.01"
                  }
                }
              ]
            });
          },
          onApprove: function(data, actions) {
            // This function captures the funds from the transaction.
            return actions.order.capture().then(function(details) {
              // This function shows a transaction success message to your buyer.
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
            });
          },
          style: {
            color: "blue",
            label: "paypal",
            layout: "vertical",
            shape: "rect"
          }
        })
        .render("#paypal-container");
    }
  }, [isPaypal, window.paypal]);

  return (
    <>
      <div className="paypal-container" id="paypal-container"></div>
    </>
  );
};

Payment.propTypes = {
  isPaypal: bool,
  name: shape({})
};

const mapStateToProps = state => ({
  isPaypal: state.isPaypal
});

export default connect(mapStateToProps)(Payment);

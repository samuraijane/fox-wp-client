import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default class Checkout extends React.Component {
  // onToken = (token, addresses) => {
  onToken = () => {
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
  };

  render() {
    return (
      <StripeCheckout
        amount={500}
        billingAddress
        description="Awesome Product"
        image="https://yourdomain.tld/images/logo.svg"
        locale="auto"
        name="Utah Desert Foxes"
        stripeKey="pk_test_4pFEuz5zNqCkN0ajcwxhuKNa00y3FDnH3K"
        token={this.onToken}
        zipCode
      />
    );
  }
}

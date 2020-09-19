import React from "react";
import { connect } from "react-redux";
import { shape } from "prop-types";
import Paypal from './Paypal';

const Payment = ({ amount }) => {

  return (
    <>
      {(!amount || amount < 1) && (
        <p>There is no amount to be paid. Are you sure you registered?</p>
      )}
      {amount && amount > 1 && (
        <Paypal />
      )}
    </>
  );
};

Payment.propTypes = {
  name: shape({})
};

const mapStateToProps = state => ({
  amount: state.registerFields.amount
});

export default connect(mapStateToProps)(Payment);

import * as types from "./actionTypes";

export const loadPaypal = () => dispatch => {
  const script = document.createElement("script");
  script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.CLIENT_ID_PAYPAL}`;
  script.async = true;
  script.onload = () => dispatch(loadPaypalSuccess());
  document.body.appendChild(script);
};

const loadPaypalSuccess = () => {
  return {
    type: types.PAYPAL_IS_READY,
    data: true
  };
};

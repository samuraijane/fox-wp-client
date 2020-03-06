import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

const isPaypalReducer = (state = initialState.isPaypal, action) => {
  if (action.type === types.PAYPAL_IS_READY) {
    return action.data;
  }

  return state;
};

export default isPaypalReducer;

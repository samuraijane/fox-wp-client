import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

const registerFieldsReducer = (state = initialState.registerFields, action) => {
  if (action.type === types.SET_REGISTER_FIELDS) {
    return action.data;
  }

  return state;
};

export default registerFieldsReducer;

import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

const userReducer = (state = initialState.user, action) => {
  const { data, type } = action;
  if (type === types.SET_USER) {
    return Object.assign({}, state, {
      ...state,
      ...data
    });
  }

  return state;
};

export default userReducer;

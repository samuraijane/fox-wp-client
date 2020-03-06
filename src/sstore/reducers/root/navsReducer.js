import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

const navsReducer = (state = initialState.navs, action) => {
  if (action.type === types.SET_NAVS) {
    return action.data;
  }

  return state;
};

export default navsReducer;

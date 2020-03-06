import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

const tokenReducer = (state = initialState.token, action) => {
  if (action.type === types.SET_TOKEN) {
    return action.data;
  }

  return state;
};

export default tokenReducer;

import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

const classesReducer = (state = initialState.classes, action) => {
  if (action.type === types.SET_CLASSES) {
    return action.data;
  }

  return state;
};

export default classesReducer;

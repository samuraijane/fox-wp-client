import * as types from "../../actions/actionTypes";
import { addStyleValue } from "../../actions/addStyleValue";
import initialState from "../initialState";

const stylesReducer = (state = initialState.styles, action) => {
  if (action.type === types.SET_STYLES) {
    return Object.assign({}, state, {
      ...state,
      [action.data.styleKey]: action.data.styleValue
    })
  }

  return state;
};

export default stylesReducer;

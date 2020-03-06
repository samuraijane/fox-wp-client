import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

const pagesReducer = (state = initialState.pages, action) => {
  if (action.type === types.SET_PAGES) {
    return [...state, action.data];
  }

  return state;
};

export default pagesReducer;

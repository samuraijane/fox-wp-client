import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

const postsReducer = (state = initialState.posts, action) => {
  if (action.type === types.SET_POSTS) {
    return action.data;
  }

  return state;
};

export default postsReducer;

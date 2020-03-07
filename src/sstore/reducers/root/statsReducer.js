import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

const statsReducer = (state = initialState.stats, action) => {
  if (action.type === types.SET_STATS_NAVS_COUNT) {
    return {
      ...state,
      navsCount: action.navsCount
    };
  }
  if (action.type === types.SET_STATS_POSTS_COUNT) {
    return {
      ...state,
      postsCount: action.postsCount
    };
  }

  return state;
};

export default statsReducer;

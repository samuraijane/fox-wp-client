import { combineReducers } from "redux";

import { isPaypal, navs, pages, posts, registerFields, token } from "./root";

const rootReducer = combineReducers({
  isPaypal,
  navs,
  pages,
  posts,
  registerFields,
  token
});

export default rootReducer;

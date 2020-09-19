import { combineReducers } from "redux";

import {
  classes,
  isPaypal,
  navs,
  pages,
  posts,
  registerFields,
  stats,
  token,
  user
} from "./root";

const rootReducer = combineReducers({
  classes,
  isPaypal,
  navs,
  pages,
  posts,
  registerFields,
  stats,
  token,
  user
});

export default rootReducer;

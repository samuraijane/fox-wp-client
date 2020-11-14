import { combineReducers } from "redux";

import {
  classes,
  isPaypal,
  navs,
  pages,
  posts,
  registerFields,
  stats,
  styles,
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
  styles,
  token,
  user
});

export default rootReducer;

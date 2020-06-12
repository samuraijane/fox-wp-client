import { combineReducers } from "redux";

import {
  classes,
  isPaypal,
  navs,
  pages,
  posts,
  registerFields,
  stats,
  token
} from "./root";

const rootReducer = combineReducers({
  classes,
  isPaypal,
  navs,
  pages,
  posts,
  registerFields,
  stats,
  token
});

export default rootReducer;

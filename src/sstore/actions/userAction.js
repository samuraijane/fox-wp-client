import * as types from "./actionTypes";

const setUser = data => {
  return {
    type: types.SET_USER,
    data,
  };
};

export default setUser;

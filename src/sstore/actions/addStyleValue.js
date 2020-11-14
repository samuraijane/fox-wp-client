import * as types from "./actionTypes";

export const addStyleValue = (styleKey, styleValue) => {
  return {
    type: types.SET_STYLES,
    data: {
      styleKey,
      styleValue
    }
  };
};

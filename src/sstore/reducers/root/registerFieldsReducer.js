import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

const registerFieldsReducer = (state = initialState.registerFields, action) => {
  if (action.type === types.SET_REGISTER_FIELDS && action.section) {
    const updatedFields = state[action.section].map(field => {
      if (field.id === action.id) {
        field.defaultValue = action.value;
        return field;
      }
      return field;
    });
    const section = Object.assign({}, state, {
      ...state,
      [action.section]: updatedFields
    })
    return section;
  }
  if (action.type === types.SET_REGISTER_FIELDS) {
    return action.data;
  }

  return state;
};

export default registerFieldsReducer;

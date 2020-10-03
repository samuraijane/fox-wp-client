import * as types from "./actionTypes";

const updateFieldValue = (id, section, value) => dispatch => {
  dispatch({
    type: types.SET_REGISTER_FIELDS,
    id,
    section,
    value
  })
};

export default updateFieldValue;

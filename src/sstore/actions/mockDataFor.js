import * as types from "./actionTypes";
import anna from '../../mocks/anna.json';

const mockDataFor = () => {
  return {
    type: types.SET_MOCK_DATA,
    registerFields: anna.registerFields
  };
};

export default mockDataFor;
// Actions
import { STORE_USER, REMOVE_USER } from '../actionTypes';

const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USER:
      return action.payload;
    case REMOVE_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;

// Actions
import { WAKE_DYNO } from '../actionTypes';

const authReducer = (state = false, action) => {
  switch (action.type) {
    case WAKE_DYNO:
      return true;
    default:
      return state;
  }
};

export default authReducer;

import { FETCH_TODOS_SUCCESS } from '../actionTypes';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default todosReducer;

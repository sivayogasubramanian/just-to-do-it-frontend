import { CLEAR_TODOS, FETCH_TODOS_SUCCESS } from '../actionTypes';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return action.payload;
    case CLEAR_TODOS:
      return [];
    default:
      return state;
  }
};

export default todosReducer;

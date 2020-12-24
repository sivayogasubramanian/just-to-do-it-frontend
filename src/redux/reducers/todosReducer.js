import { CLEAR_TODOS, FETCH_TODOS_SUCCESS } from '../actionTypes';

const initialState = { data: [] };

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      action.payload.data.sort((a, b) => (a.id > b.id ? 1 : -1));
      return action.payload;
    case CLEAR_TODOS:
      return initialState;
    default:
      return state;
  }
};

export default todosReducer;

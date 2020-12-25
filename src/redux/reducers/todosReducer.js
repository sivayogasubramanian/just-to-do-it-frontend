// Actions
import {
  FETCH_TODOS_REQUESTED,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  CLEAR_TODOS,
} from '../actionTypes';

const initialState = { data: [], todosLoading: false, todosError: null };

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUESTED:
      return { ...state, todosLoading: true };
    case FETCH_TODOS_SUCCESS:
      action.payload.data.sort((a, b) => (a.id > b.id ? 1 : -1));
      return { ...state, ...action.payload, todosLoading: false };
    case FETCH_TODOS_FAILURE:
      return { ...state, todosLoading: false, todosError: action.payload };
    case CLEAR_TODOS:
      return initialState;
    default:
      return state;
  }
};

export default todosReducer;

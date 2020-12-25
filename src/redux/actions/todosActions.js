// React and helpers
import authAxios from '../../helpers/authAxios';
// Actions
import {
  FETCH_TODOS_REQUESTED,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  CLEAR_TODOS,
} from '../actionTypes';

export const fetchTodos = () => (dispatch) => {
  dispatch({ type: FETCH_TODOS_REQUESTED });
  authAxios
    .get('/api/v1/todos')
    .then((response) => {
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    });
};

export const clearTodos = () => {
  return { type: CLEAR_TODOS };
};

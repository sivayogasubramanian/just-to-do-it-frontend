import authAxios from '../../helpers/authAxios';
import { FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '../actionTypes';

export const fetchTodos = () => (dispatch) => {
  authAxios
    .get('/api/v1/todos')
    .then((response) => {
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data });
    })
    .catch((response) => {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: response.error });
    });
};

// React and helpers
import { useDispatch } from 'react-redux';
import authAxios from '../helpers/authAxios';
// Actions
import {
  toggleError,
  setLoadingTrue,
  setLoadingFalse,
} from '../redux/actions/miscActions';
import { fetchTodos } from '../redux/actions/todosActions';
import { logOut } from '../redux/actions/authActions';

const useSubtodo = () => {
  const dispatch = useDispatch();

  const successHandler = () => {
    dispatch(fetchTodos());
    dispatch(setLoadingFalse());
  };

  const errorHandler = (error) => {
    console.error(error);
    dispatch(setLoadingFalse());
    dispatch(toggleError());
    setTimeout(() => {
      dispatch(toggleError());
      dispatch(logOut());
    }, 2000);
  };

  const createSubtodo = (todoId) => {
    dispatch(setLoadingTrue());
    authAxios
      .post(`/api/v1/todos/${todoId}/subtodos`, { title: '', completed: false })
      .then(successHandler)
      .catch(errorHandler);
  };

  const updateSubtodo = (todoId, subtodoId, subTodoData) => {
    dispatch(setLoadingTrue());
    authAxios
      .patch(`/api/v1/todos/${todoId}/subtodos/${subtodoId}`, subTodoData)
      .then(successHandler)
      .catch(errorHandler);
  };

  const destroySubtodo = (todoId, subtodoId) => {
    dispatch(setLoadingTrue());
    authAxios
      .delete(`/api/v1/todos/${todoId}/subtodos/${subtodoId}`)
      .then(successHandler)
      .catch(errorHandler);
  };

  return { createSubtodo, updateSubtodo, destroySubtodo };
};

export default useSubtodo;

// React and helpers
import { useDispatch } from 'react-redux';
import authAxios from '../helpers/authAxios';
// Actions
import { toggleError } from '../redux/actions/miscActions';
import { fetchTodos } from '../redux/actions/todosActions';
import { logOut } from '../redux/actions/authActions';

const useSubtodo = () => {
  const dispatch = useDispatch();

  const successHandler = () => {
    dispatch(fetchTodos());
  };

  const errorHandler = (error) => {
    console.error(error);
    dispatch(toggleError());
    setTimeout(() => {
      dispatch(toggleError());
      dispatch(logOut());
    }, 2000);
  };

  const createSubtodo = (todoId) => {
    authAxios
      .post(`/api/v1/todos/${todoId}/subtodos`, { title: '', completed: false })
      .then(successHandler)
      .catch(errorHandler);
  };

  const updateSubtodo = (todoId, subtodoId, subTodoData) => {
    authAxios
      .patch(`/api/v1/todos/${todoId}/subtodos/${subtodoId}`, subTodoData)
      .then(successHandler)
      .catch(errorHandler);
  };

  const destroySubtodo = (todoId, subtodoId) => {
    authAxios
      .delete(`/api/v1/todos/${todoId}/subtodos/${subtodoId}`)
      .then(successHandler)
      .catch(errorHandler);
  };

  return { createSubtodo, updateSubtodo, destroySubtodo };
};

export default useSubtodo;

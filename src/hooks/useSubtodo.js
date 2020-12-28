// React and helpers
import { useDispatch } from 'react-redux';
import authAxios from '../helpers/authAxios';
// Actions
import { toggleError } from '../redux/actions/miscActions';
import { fetchTodos } from '../redux/actions/todosActions';
import { logOut } from '../redux/actions/authActions';

const useSubtodo = () => {
  const dispatch = useDispatch();

  const ErrorHandler = (error) => {
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
      .then(() => dispatch(fetchTodos()))
      .catch(ErrorHandler);
  };

  const updateSubtodo = (todoId, subtodoId, subTodoData) => {
    authAxios
      .patch(`/api/v1/todos/${todoId}/subtodos/${subtodoId}`, subTodoData)
      .then(() => dispatch(fetchTodos()))
      .catch(ErrorHandler);
  };

  const destroySubtodo = (todoId, subtodoId) => {
    authAxios
      .delete(`/api/v1/todos/${todoId}/subtodos/${subtodoId}`)
      .then(() => dispatch(fetchTodos()))
      .catch(ErrorHandler);
  };

  return { createSubtodo, updateSubtodo, destroySubtodo };
};

export default useSubtodo;

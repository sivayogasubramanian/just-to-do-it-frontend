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
// Date Fns
import { format } from 'date-fns';

const useTodo = () => {
  const dispatch = useDispatch();

  const successHandler = () => {
    dispatch(fetchTodos());
    dispatch(setLoadingFalse());
  };

  const ErrorHandler = (error) => {
    console.error(error);
    dispatch(setLoadingFalse());
    dispatch(toggleError());
    setTimeout(() => {
      dispatch(toggleError());
      dispatch(logOut());
    }, 2000);
  };

  const createTodo = () => {
    dispatch(setLoadingTrue());
    authAxios
      .post(`/api/v1/todos`, {
        title: '',
        completed: false,
        deadline: format(new Date(), 'yyyy-MM-dd'),
      })
      .then(successHandler)
      .catch(ErrorHandler);
  };

  const updateTodo = (todoId, todoData) => {
    dispatch(setLoadingTrue());
    authAxios
      .patch(`/api/v1/todos/${todoId}`, todoData)
      .then(successHandler)
      .catch(ErrorHandler);
  };

  const destroyTodo = (todoId) => {
    dispatch(setLoadingTrue());
    authAxios
      .delete(`/api/v1/todos/${todoId}`)
      .then(successHandler)
      .catch(ErrorHandler);
  };

  return { createTodo, updateTodo, destroyTodo };
};

export default useTodo;

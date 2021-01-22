// React and helpers
import { useDispatch } from 'react-redux';
import authAxios from '../helpers/authAxios';
// Actions
import {
  setErrorTrue,
  setErrorFalse,
  setLoadingTrue,
  setLoadingFalse,
} from '../redux/actions/miscActions';
import { fetchTodos } from '../redux/actions/todosActions';
import { logOut } from '../redux/actions/authActions';
// Date Fns
import { addMinutes } from 'date-fns';

const useTodo = () => {
  const dispatch = useDispatch();

  const successHandler = () => {
    dispatch(fetchTodos());
    dispatch(setLoadingFalse());
  };

  const ErrorHandler = (error) => {
    console.error(error);
    dispatch(setLoadingFalse());
    dispatch(setErrorTrue());
    setTimeout(() => {
      dispatch(setErrorFalse());
      dispatch(logOut());
    }, 2000);
  };

  const createTodo = () => {
    dispatch(setLoadingTrue());
    authAxios
      .post(`/api/v1/todos`, {
        title: '',
        completed: false,
        deadline: addMinutes(new Date(), 60),
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

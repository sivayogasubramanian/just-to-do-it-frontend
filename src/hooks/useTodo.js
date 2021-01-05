// React and helpers
import { useDispatch } from 'react-redux';
import authAxios from '../helpers/authAxios';
// Actions
import { toggleError } from '../redux/actions/miscActions';
import { fetchTodos } from '../redux/actions/todosActions';
import { logOut } from '../redux/actions/authActions';
// Date Fns
import { format } from 'date-fns';

const useTodo = () => {
  const dispatch = useDispatch();
  const ErrorHandler = (error) => {
    console.error(error);
    dispatch(toggleError());
    setTimeout(() => {
      dispatch(toggleError());
      dispatch(logOut());
    }, 2000);
  };

  const createTodo = () => {
    authAxios
      .post(`/api/v1/todos`, {
        title: '',
        completed: false,
        deadline: format(new Date(), 'yyyy-MM-dd'),
      })
      .then(() => dispatch(fetchTodos()))
      .catch(ErrorHandler);
  };

  const updateTodo = (todoId, todoData) => {
    authAxios
      .patch(`/api/v1/todos/${todoId}`, todoData)
      .then(() => dispatch(fetchTodos()))
      .catch(ErrorHandler);
  };

  const destroyTodo = (todoId) => {
    authAxios
      .delete(`/api/v1/todos/${todoId}`)
      .then(() => dispatch(fetchTodos()))
      .catch(ErrorHandler);
  };

  return { createTodo, updateTodo, destroyTodo };
};

export default useTodo;

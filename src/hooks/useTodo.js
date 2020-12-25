// React and helpers
import { useDispatch } from 'react-redux';
import authAxios from '../helpers/authAxios';
// Actions
import { fetchTodos } from '../redux/actions/todosActions';

const useTodo = () => {
  const dispatch = useDispatch();

  const createTodo = () => {
    authAxios
      .post(`/api/v1/todos/`, { title: '', completed: false })
      .then(() => dispatch(fetchTodos()))
      .catch((error) => Promise.reject(new Error(error)));
  };

  const updateTodo = (todoId, todoData) => {
    authAxios
      .patch(`/api/v1/todos/${todoId}`, todoData)
      .then(() => dispatch(fetchTodos()))
      .catch((error) => Promise.reject(new Error(error)));
  };

  const destroyTodo = (todoId) => {
    authAxios
      .delete(`/api/v1/todos/${todoId}`)
      .then(() => dispatch(fetchTodos()))
      .catch((error) => Promise.reject(error));
  };

  return { createTodo, updateTodo, destroyTodo };
};

export default useTodo;

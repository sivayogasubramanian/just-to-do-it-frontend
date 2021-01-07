// React and helpers
import React from 'react';
import { connect } from 'react-redux';
// Components
import Todo from '../todo';
import Error from './Error';
import TodosLoading from '../loading';

const TodoList = ({ filteredTodos, isError, todosLoading }) => {
  return (
    <>
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          todoId={todo.id}
          title={todo.attributes.title}
          completed={todo.attributes.completed}
        />
      ))}
      {isError && <Error />}
      <TodosLoading loading={todosLoading} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isError: state.misc.error,
    todosLoading: state.misc.loading,
  };
};

export default connect(mapStateToProps)(TodoList);
